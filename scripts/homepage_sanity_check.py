#!/usr/bin/env python3
"""
Homepage Sanity Check for Zion Tech Group
Checks that the homepage is serving valid HTML and not showing build-failed fallback
"""

import requests
import sys
from datetime import datetime

def check_homepage():
    url = "https://ziontechgroup.com/"
    
    try:
        # Make request with timeout
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        
        # Get current timestamp
        timestamp = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
        
        # Check if we got HTML content
        content_type = response.headers.get('content-type', '')
        is_html = 'text/html' in content_type
        
        # Check for basic HTML structure
        has_doctype = '<!DOCTYPE html>' in response.text[:100]
        has_html_tag = '<html' in response.text[:200]
        
        # Check for build-failed fallback indicators
        # Be specific to avoid false positives (like "$2.500" in pricing)
        build_failed_indicators = [
            'build-failed',
            'Build failed',
            'Build Failed',
            'BUILD FAILED',
            'Next.js error occurred',
            'Server Error',
            'Error: Server Error',
            # More specific 500 error patterns that indicate actual error pages
            '>500<',
            '>500 ',
            ' 500<',
            ' class="500"',
            ' id="500"',
            '/_next/static/500',
            '/500.html'
        ]
        
        has_build_failed = any(indicator in response.text for indicator in build_failed_indicators)
        
        # Determine status
        if response.status_code == 200 and is_html and has_doctype and has_html_tag and not has_build_failed:
            status = "✅ OK — no build-failed fallback detected"
            verdict = "Homepage is serving a valid, well-formed HTML document. No build-failed fallback page in sight."
        elif has_build_failed:
            status = "❌ FAILED — build-failed fallback detected"
            verdict = "Homepage appears to be showing a build-failed fallback page."
        else:
            status = "⚠️ WARNING — unexpected response"
            verdict = f"Homepage returned status {response.status_code} with unexpected content."
        
        # Output results
        print(f"Zion Homepage Sanity Check — {timestamp}")
        print()
        print(f"Script: python3 scripts/homepage_sanity_check.py")
        print(f"URL: {url}")
        print(f"Status: {status}")
        print()
        print(f"HTML preview (first 200 chars):")
        print(response.text[:200])
        print()
        print(f"Verdict: {verdict}")
        
        # Return appropriate exit code
        if "✅ OK" in status:
            return 0
        else:
            return 1
            
    except requests.exceptions.RequestException as e:
        timestamp = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
        print(f"Zion Homepage Sanity Check — {timestamp}")
        print()
        print(f"Script: python3 scripts/homepage_sanity_check.py")
        print(f"URL: {url}")
        print(f"Status: ❌ ERROR — request failed")
        print()
        print(f"Error: {str(e)}")
        print()
        print("Verdict: Failed to reach the homepage. Check network connectivity and site availability.")
        return 1

if __name__ == "__main__":
    sys.exit(check_homepage())