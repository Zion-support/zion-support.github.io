#!/usr/bin/env python3
"""
Homepage Sanity Check for Zion Tech Group
Checks that the homepage is serving valid HTML and not showing build-failed fallback

Resilience: transient DNS/network failures (Errno 8 / gaierror) are common in
cron runners during sleep/wake cycles. We retry with exponential backoff and
fall back to urllib if `requests` is unavailable in the runner environment.
"""

import sys
import time
import socket
import urllib.request
import urllib.error
from datetime import datetime, timezone

URL = "https://ziontechgroup.com/"
MAX_RETRIES = 5
BACKOFF_SECONDS = (1, 2, 4, 8, 16)

BUILD_FAILED_INDICATORS = [
    "build-failed",
    "Build failed",
    "Build Failed",
    "BUILD FAILED",
    "Next.js error occurred",
    "Server Error",
    "Error: Server Error",
    ">500<",
    ">500 ",
    " 500<",
    ' class="500"',
    ' id="500"',
    "/_next/static/500",
    "/500.html",
]


def _utcnow():
    return datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")


def _fetch_requests(url, timeout=10):
    import requests  # imported lazily so urllib fallback works without it
    response = requests.get(url, timeout=timeout)
    return response.status_code, response.headers.get("content-type", ""), response.text, None


def _fetch_urllib(url, timeout=10):
    """urllib fallback with requests-equivalent behaviour.

    urllib raises HTTPError on any non-2xx response, so it must be caught and
    converted into a (status, content_type, body, None) tuple — otherwise a 404
    or 500 would be misreported as a network failure and retried pointlessly.
    """
    req = urllib.request.Request(url, headers={"User-Agent": "zion-homepage-sanity-check/2.0"})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as response:
            body = response.read().decode("utf-8", errors="replace")
            content_type = response.headers.get("Content-Type", "") or response.headers.get("content-type", "")
            return response.getcode(), content_type, body, None
    except urllib.error.HTTPError as exc:
        try:
            body = exc.read().decode("utf-8", errors="replace")
        except Exception:  # noqa: BLE001 - body may be unavailable on a broken response
            body = ""
        content_type = ""
        if exc.headers:
            content_type = exc.headers.get("Content-Type", "") or exc.headers.get("content-type", "")
        return exc.code, content_type, body, None


def fetch_with_retries(url):
    """Return (status, content_type, body, error) with retry on transient failures."""
    last_error = None
    for attempt in range(1, MAX_RETRIES + 1):
        for fetcher in (_fetch_requests, _fetch_urllib):
            try:
                return fetcher(url)
            except ImportError:
                continue  # requests not installed; try urllib
            except Exception as exc:  # noqa: BLE001 - transient network/DNS errors
                last_error = exc
        if attempt < MAX_RETRIES:
            time.sleep(BACKOFF_SECONDS[min(attempt - 1, len(BACKOFF_SECONDS) - 1)])
    return None, "", "", last_error


def check_homepage():
    status_code, content_type, body, err = fetch_with_retries(URL)

    if err is not None:
        print(f"Zion Homepage Sanity Check — {_utcnow()}")
        print()
        print("Script: python3 scripts/homepage_sanity_check.py")
        print(f"URL: {URL}")
        print("Status: ❌ ERROR — request failed after retries")
        print()
        print(f"Error: {err}")
        print()
        print("Verdict: Failed to reach the homepage after retries. "
              "If this persists across consecutive runs, escalate — it may be a real outage.")
        return 1

    is_html = "text/html" in (content_type or "").lower()
    has_doctype = "<!DOCTYPE html>" in body[:100]
    has_html_tag = "<html" in body[:200]
    has_build_failed = any(indicator in body for indicator in BUILD_FAILED_INDICATORS)

    if status_code == 200 and is_html and has_doctype and has_html_tag and not has_build_failed:
        status = "✅ OK — no build-failed fallback detected"
        verdict = "Homepage is serving a valid, well-formed HTML document. No build-failed fallback page in sight."
    elif has_build_failed:
        status = "❌ FAILED — build-failed fallback detected"
        verdict = "Homepage appears to be showing a build-failed fallback page."
    else:
        status = "⚠️ WARNING — unexpected response"
        verdict = f"Homepage returned status {status_code} with unexpected content."

    print(f"Zion Homepage Sanity Check — {_utcnow()}")
    print()
    print("Script: python3 scripts/homepage_sanity_check.py")
    print(f"URL: {URL}")
    print(f"Status: {status}")
    print()
    print("HTML preview (first 200 chars):")
    print(body[:200])
    print()
    print(f"Verdict: {verdict}")
    return 0 if status.startswith("✅") else 1


if __name__ == "__main__":
    sys.exit(check_homepage())
