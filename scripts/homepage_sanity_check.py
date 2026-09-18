#!/usr/bin/env python3
"""
Homepage Sanity Check for Zion Tech Group
Checks that the homepage is serving valid HTML and not showing build-failed fallback

Uses urllib (stdlib) instead of the 'requests' library because the system Python
on this host is compiled with LibreSSL 2.8.3, which is incompatible with
urllib3 v2 (throws ConnectionResetError / RemoteDisconnected). urllib handles
the TLS handshake correctly here.

Includes retry logic with exponential backoff to handle transient network errors.
"""

import urllib.request
import urllib.error
import ssl
import time
import sys
import socket
from datetime import datetime


def fetch_url(url, timeout=10, max_retries=3):
    """Fetch URL with retry logic. Returns (response_text, status_code, content_type)."""
    last_error = None
    for attempt in range(1, max_retries + 1):
        try:
            req = urllib.request.Request(
                url,
                headers={
                    'User-Agent': 'Zion-Homepage-Check/1.0 (compatible; cron sanity check)',
                    'Accept': 'text/html,application/xhtml+xml',
                }
            )
            with urllib.request.urlopen(req, timeout=timeout) as response:
                return response.read().decode('utf-8', errors='replace'), response.status, response.headers.get('content-type', '')
        except urllib.error.HTTPError as e:
            # Got an HTTP response (even if error status) — return it for inspection
            body = ''
            try:
                body = e.read().decode('utf-8', errors='replace')
            except Exception:
                pass
            return body, e.code, e.headers.get('content-type', '')
        except (urllib.error.URLError, socket.timeout, ConnectionError, OSError) as e:
            last_error = e
            if attempt < max_retries:
                time.sleep(2 ** attempt)  # exponential backoff: 2s, 4s
    if last_error is not None:
        raise last_error
    raise RuntimeError("Failed to fetch URL after all retries")


def check_homepage():
    url = "https://ziontechgroup.com/"

    build_failed_indicators = [
        'build-failed',
        'Build failed',
        'Build Failed',
        'BUILD FAILED',
        'Next.js error occurred',
        'Server Error',
        'Error: Server Error',
        '>500<',
        '>500 ',
        ' 500<',
        ' class="500"',
        ' id="500"',
        '/_next/static/500',
        '/500.html',
    ]

    try:
        response_text, status_code, content_type = fetch_url(url, timeout=10, max_retries=3)
        timestamp = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")

        is_html = 'text/html' in content_type
        has_doctype = '<!DOCTYPE html>' in response_text[:100]
        has_html_tag = '<html' in response_text[:200]
        has_build_failed = any(indicator in response_text for indicator in build_failed_indicators)

        if status_code == 200 and is_html and has_doctype and has_html_tag and not has_build_failed:
            status = "✅ OK — no build-failed fallback detected"
            verdict = "Homepage is serving a valid, well-formed HTML document. No build-failed fallback page in sight."
        elif has_build_failed:
            status = "❌ FAILED — build-failed fallback detected"
            verdict = "Homepage appears to be showing a build-failed fallback page."
        else:
            status = "⚠️ WARNING — unexpected response"
            verdict = f"Homepage returned status {status_code} with unexpected content."

        print(f"Zion Homepage Sanity Check — {timestamp}")
        print()
        print(f"Script: python3 scripts/homepage_sanity_check.py")
        print(f"URL: {url}")
        print(f"Status: {status}")
        print()
        print(f"HTTP Status Code: {status_code}")
        print(f"Content-Type: {content_type}")
        print(f"HTML preview (first 200 chars):")
        print(response_text[:200])
        print()
        print(f"Verdict: {verdict}")

        if "✅ OK" in status:
            return 0
        else:
            return 1

    except Exception as e:
        timestamp = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
        print(f"Zion Homepage Sanity Check — {timestamp}")
        print()
        print(f"Script: python3 scripts/homepage_sanity_check.py")
        print(f"URL: {url}")
        print(f"Status: ❌ ERROR — request failed")
        print()
        print(f"Error: {str(e)}")
        print()
        print(f"Error type: {type(e).__name__}")
        print("Note: The 'requests' library fails on this host due to LibreSSL 2.8.3")
        print("      incompatibility with urllib3 v2. This script now uses urllib (stdlib).")
        print("Verdict: Failed to reach the homepage. Check network connectivity and site availability.")
        return 1


if __name__ == "__main__":
    sys.exit(check_homepage())
