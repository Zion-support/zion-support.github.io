#!/usr/bin/env python3
import requests
from urllib.parse import urljoin
import sys

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

print(f"Zion Tech Group site integrity check — {BASE}")
print("=" * 70)
all_ok = True
for r in routes:
    u = urljoin(BASE, r) if r != '/' else BASE
    try:
        resp = requests.get(u, timeout=20, allow_redirects=True)
        status = resp.status_code
        final = resp.url
        size = len(resp.content)
        # Check content-type
        ct = resp.headers.get('Content-Type', '')
        if status == 200 and 'text/html' in ct:
            mark = "OK"
        elif status == 200:
            mark = f"OK (non-html: {ct})"
        else:
            mark = f"BROKEN ({status})"
            all_ok = False
        print(f"{status:3d}  {r:35s} -> {final}  [{mark}]  ({size}B)")
    except Exception as e:
        print(f"ERR  {r:35s} -> {e}")
        all_ok = False

print("=" * 70)
if all_ok:
    print("RESULT: ALL 8 ROUTES OK")
else:
    print("RESULT: SOME ROUTES BROKEN — see above")
