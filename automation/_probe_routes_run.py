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

print(f"PROBING {BASE}")
print("="*80)

results = {}
for r in routes:
    u = urljoin(BASE, r) if r != '/' else BASE
    try:
        resp = requests.get(u, timeout=20, allow_redirects=True)
        status = resp.status_code
        final = resp.url
        size = len(resp.content)
        results[r] = (status, final, size)
        print(f"{status:3d}  {r:35s} -> {final} ({size:,}B)")
    except Exception as e:
        results[r] = (0, str(e), 0)
        print(f"ERR  {r:35s} -> {e}")

print("="*80)
print("\nSUMMARY:")
ok = sum(1 for v in results.values() if v[0] == 200)
total = len(results)
print(f"  OK (200): {ok}/{total}")
for r, (status, final, size) in results.items():
    if status != 200:
        print(f"  BROKEN: {r} -> HTTP {status}")

# Also check _redirects coverage
print("\nREDIRECTS CHECK:")
for r in ['/public-roadmap', '/status-page', '/use-cases',
          '/industries/financial-services']:
    # Check both bare and trailing slash
    for suffix in ['', '/']:
        u = urljoin(BASE, r + suffix) if r + suffix != '/' else BASE
        try:
            resp = requests.head(u, timeout=10, allow_redirects=True)
            print(f"  HEAD {r}{suffix:10s} -> HTTP {resp.status_code} ({resp.url})")
        except Exception as e:
            print(f"  HEAD {r}{suffix:10s} -> ERR {e}")

sys.exit(0 if ok == total else 1)
