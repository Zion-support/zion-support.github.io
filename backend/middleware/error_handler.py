import time
import logging
import requests
import threading
from django.conf import settings
from django.core.cache import caches
from django.http import JsonResponse
from datetime import datetime

logger = logging.getLogger(__name__)

ERROR_RATE_LIMIT_COUNT = getattr(settings, 'ERROR_RATE_LIMIT_COUNT', 5)
ERROR_RATE_LIMIT_WINDOW = getattr(settings, 'ERROR_RATE_LIMIT_WINDOW_SECONDS', 10 * 60)
IP_BLOCK_DURATION = getattr(settings, 'IP_BLOCK_DURATION_SECONDS', 1 * 60 * 60)
SLACK_NOTIFICATION_URL = getattr(settings, 'SLACK_NOTIFICATION_URL', 'http://localhost:3001/api/alerts/notify-slack')
CODEX_TRIGGER_URL = getattr(settings, 'CODEX_TRIGGER_URL', 'http://localhost:3001/api/codex/suggest-fix') # Assuming Express server runs on 3001
CODEX_TRIGGER_COOLDOWN_SECONDS = getattr(settings, 'CODEX_TRIGGER_COOLDOWN_SECONDS', 10 * 60) # 10 minutes


CACHE_ALIAS = 'default'

# Helper function to send notification without blocking
def send_slack_notification_async(payload):
    try:
        slack_url = getattr(settings, 'SLACK_NOTIFICATION_URL', SLACK_NOTIFICATION_URL)
        response = requests.post(slack_url, json=payload, timeout=5)
        if response.status_code == 200:
            logger.info(f"Successfully sent Slack notification for IP {payload.get('ip_address')}")
        else:
            logger.error(f"Failed to send Slack notification. Status: {response.status_code}, Body: {response.text}")
    except requests.exceptions.RequestException as e:
        logger.error(f"Error sending Slack notification: {e}")

# Helper function to trigger Codex patch generator
def trigger_codex_patch_async(payload):
    try:
        codex_url = getattr(settings, 'CODEX_TRIGGER_URL', CODEX_TRIGGER_URL)
        response = requests.post(codex_url, json=payload, timeout=10)
        if response.status_code == 200:
            logger.info(f"Successfully triggered Codex patch for route {payload.get('route')}")
        else:
            logger.error(f"Failed to trigger Codex patch. Status: {response.status_code}, Body: {response.text}")
    except requests.exceptions.RequestException as e:
        logger.error(f"Error triggering Codex patch: {e}")

class ErrorHandlingMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        self.cache = caches[CACHE_ALIAS]
        # Cache settings at init so override_settings in tests are respected per instance
        self.error_rate_limit_count = getattr(settings, 'ERROR_RATE_LIMIT_COUNT', 5)
        self.error_rate_limit_window = getattr(settings, 'ERROR_RATE_LIMIT_WINDOW_SECONDS', 10 * 60)
        self.ip_block_duration = getattr(settings, 'IP_BLOCK_DURATION_SECONDS', 1 * 60 * 60)
        self.slack_notification_url = getattr(settings, 'SLACK_NOTIFICATION_URL', SLACK_NOTIFICATION_URL)
        self.codex_trigger_url = getattr(settings, 'CODEX_TRIGGER_URL', CODEX_TRIGGER_URL)
        self.codex_trigger_cooldown_seconds = getattr(settings, 'CODEX_TRIGGER_COOLDOWN_SECONDS', 10 * 60)

    def __call__(self, request):
        ip_address = self.get_client_ip(request)
        blocked_ips_key = f"blocked_ip:{ip_address}"

        if self.cache.get(blocked_ips_key):
            logger.warning(f"Blocked IP {ip_address} attempted access to {request.path}")
            return JsonResponse({'error': 'Too many requests. Please try again later.'}, status=429)

        response = self.get_response(request)

        if response.status_code >= 500:
            self.handle_server_error(request, response, ip_address)

        return response

    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR')
        return ip

    def handle_server_error(self, request, response, ip_address):
        current_time = int(time.time())
        current_timestamp_iso = datetime.utcnow().isoformat()
        route_path = request.path

        logger.error(
            f"Server error {response.status_code} on route {route_path} from IP {ip_address}. "
            f"Response content: {response.content[:500]}"
        )

        ip_error_key_prefix = f"error_count:ip:{ip_address}"
        # Maintain a rolling list of timestamps to avoid using cache.keys (unsupported by LocMemCache)
        timestamp_list_key = f"{ip_error_key_prefix}:timestamps"
        ip_error_timestamps = self.cache.get(timestamp_list_key, [])
        # Append current timestamp and filter those within window
        ip_error_timestamps.append(current_time)
        ip_error_timestamps = [ts for ts in ip_error_timestamps if current_time - ts <= self.error_rate_limit_window]
        ip_error_count = len(ip_error_timestamps)
        # Store back with window timeout
        self.cache.set(timestamp_list_key, ip_error_timestamps, timeout=self.error_rate_limit_window)

        notification_sent_key_ip = f"notification_sent:ip:{ip_address}"
        codex_triggered_key_route = f"codex_triggered:route:{route_path}" # Key for route-specific cooldown

        # --- IP-based blocking and notifications ---
        if ip_error_count > self.error_rate_limit_count:
            blocked_ips_key = f"blocked_ip:{ip_address}" # Define here for clarity
            if not self.cache.get(blocked_ips_key):
                logger.warning(f"IP {ip_address} exceeded error limit ({ip_error_count} errors). Blocking for {self.ip_block_duration} seconds.")
                self.cache.set(blocked_ips_key, True, timeout=self.ip_block_duration)

                if not self.cache.get(notification_sent_key_ip):
                    slack_payload = {
                        'ip_address': ip_address,
                        'route': route_path, # Route that led to IP block
                        'reason': f'IP error limit exceeded ({ip_error_count} errors).',
                        'timestamp': current_timestamp_iso
                    }
                    send_slack_notification_async(slack_payload)
                    self.cache.set(notification_sent_key_ip, True, timeout=60)

        # --- Route-based blocking and notifications ---
        route_error_key_prefix = f"error_count:route:{route_path}"
        route_timestamp_list_key = f"{route_error_key_prefix}:timestamps"
        route_error_timestamps = self.cache.get(route_timestamp_list_key, [])
        route_error_timestamps.append(current_time)
        route_error_timestamps = [ts for ts in route_error_timestamps if current_time - ts <= self.error_rate_limit_window]
        route_error_count = len(route_error_timestamps)
        self.cache.set(route_timestamp_list_key, route_error_timestamps, timeout=self.error_rate_limit_window)

        if route_error_count > self.error_rate_limit_count:
            logger.warning(f"Route {route_path} exceeded error limit ({route_error_count} errors). IP {ip_address} contributed.")
            blocked_ips_key = f"blocked_ip:{ip_address}" # Define here
            if not self.cache.get(blocked_ips_key):
                logger.warning(f"Blocking IP {ip_address} due to route {route_path} error limit for {self.ip_block_duration} seconds.")
                self.cache.set(blocked_ips_key, True, timeout=self.ip_block_duration)

            # Ensure a route-based notification is sent once per route+ip
            notification_sent_key_route = f"notification_sent:route:{route_path}:ip:{ip_address}"
            if not self.cache.get(notification_sent_key_route):
                slack_payload = {
                    'ip_address': ip_address,
                    'route': route_path,
                    'reason': f'Route error limit exceeded ({route_error_count} errors on this route by this IP).',
                    'timestamp': current_timestamp_iso
                }
                send_slack_notification_async(slack_payload)
                self.cache.set(notification_sent_key_route, True, timeout=60)

            # Trigger Codex for the problematic route if cooldown has passed
            if not self.cache.get(codex_triggered_key_route):
                logger.info(f"Triggering Codex patch generator for route {route_path} due to error threshold.")
                codex_payload = {'route': route_path, 'timestamp': current_timestamp_iso}
                trigger_codex_patch_async(codex_payload)
                self.cache.set(codex_triggered_key_route, True, timeout=self.codex_trigger_cooldown_seconds)
