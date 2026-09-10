#!/usr/bin/env python3
import requests
from urllib.parse import urljoin
import json

BASE = 'https://ziontechgroup.com'
routes = [
    '/',
    '/public-roadmap',
    '/status-page',
    '/use-cases',
    '/solutions/healthcare',
    '/industries/financial-services',
    '/free-consultation',
    '/tools/phishing-analyzer',
]

results = []
for r in routes:
    u = urljoin(BASE, r) if r != '/' else BASE
    try:
        resp = requests.get(u, timeout=20, allow_redirects=True)
        status = resp.status_code
        final_url = resp.url
        size = len(resp.content)
        ct = resp.headers.get('Content-Type', '?')
        results.append({
            'route': r,
            'status': status,
            'final_url': final_url,
            'size_bytes': size,
            'content_type': ct,
            'ok': 200 <= status < 400,
        })
        print(f"{status:3d} {r:35s} -> {final_url} ({size}B, {ct})")
    except Exception as e:
        results.append({
            'route': r,
            'status': 'ERROR',
            'final_url': str(e),
            'size_bytes': 0,
            'content_type': '',
            'ok': False,
        })
        print(f"ERR  {r:35s} -> {e}")

# Summary
ok_count = sum(1 for r in results if r['ok'])
total = len(results)
print(f"\n=== SUMMARY: {ok_count}/{total} routes OK ===")
for r in results:
    if not r['ok']:
        print(f"  BROKEN: {r['route']} -> {r['status']}")

with open('/Users/miami2/zion.app/automation/reports/site-integrity-probe-2026-09-08.json', 'w') as f:
    json.dump(results, f, indent=2)
print("Report saved to site-integrity-probe-2026-09-08.json")
