#!/usr/bin/env python3
"""
Homepage sanity check for ziontechgroup.com.
Detects if the homepage is showing a build-failed fallback page.
"""

import sys
import requests
from bs4 import BeautifulSoup

TARGET = "https://ziontechgroup.com"
TIMEOUT = 15

BUILD_FAILED_INDICATORS = [
    "build failed",
    "failed to compile",
    "application error",
    "unable to render",
    "error:",
    "500 internal server error",
    "something went wrong",
]

def check_homepage():
    session = requests.Session()
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (compatible; zion-homepage-sanity-check/1.0)",
    })

    try:
        resp = session.get(TARGET, timeout=TIMEOUT, allow_redirects=True)
    except requests.exceptions.RequestException as exc:
        print(f"ERROR: Cannot reach homepage — {exc}")
        return 2

    status = resp.status_code
    html = resp.text
    soup = BeautifulSoup(html, "html.parser")

    # Extract visible text
    text = soup.get_text(separator=" ", strip=True)
    text_lower = text.lower()

    print(f"URL: {resp.url}")
    print(f"HTTP Status: {status}")
    print(f"Content-Type: {resp.headers.get('Content-Type', 'n/a')}")
    print(f"Content-Length: {len(html)} bytes")
    print()

    # Check for build-failed indicators
    found_indicators = []
    for indicator in BUILD_FAILED_INDICATORS:
        if indicator in text_lower:
            found_indicators.append(indicator)

    if status >= 500:
        print(f"⚠️  SERVER ERROR (status {status})")
        if found_indicators:
            print(f"   Indicators found: {found_indicators}")
        return 1

    if status == 404:
        print(f"⚠️  PAGE NOT FOUND (404)")
        return 1

    if found_indicators:
        print(f"⚠️  BUILD-FAILED FALLBACK DETECTED")
        print(f"   Indicators: {found_indicators}")
        print()
        print(f"   Page text (first 500 chars):")
        print(f"   {text[:500]}")
        return 1

    # Check for Next.js specific error patterns
    title = soup.title.string if soup.title else "no title"
    print(f"Page Title: {title}")
    print()

    if "error" in title.lower() and status == 200:
        print(f"⚠️  Suspicious title on 200 response: '{title}'")
        return 1

    print("✅ Homepage OK — no build-failed fallback detected")
    print()
    print(f"Page text preview (first 300 chars):")
    print(f"  {text[:300]}")
    return 0


if __name__ == "__main__":
    exit_code = check_homepage()
    sys.exit(exit_code)
