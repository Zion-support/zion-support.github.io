#!/usr/bin/env python3
"""Site integrity probe for ziontechgroup.com — 8 canonical doc routes."""
import requests
from urllib.parse import urljoin

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

print('=== LIVE PROBE (allow_redirects=True) ===')
for r in routes:
    u = urljoin(BASE, r) if r != '/' else BASE
    try:
        resp = requests.get(u, timeout=20, allow_redirects=True)
        print(f'{resp.status_code:3d} {r:35s} -> {resp.url} ({len(resp.content)}B)')
    except Exception as e:
        print(f'ERR  {r:35s} -> {e}')

print()
print('=== REDIRECT CHAINS (no redirect following) ===')
for r in routes:
    u = urljoin(BASE, r) if r != '/' else BASE
    try:
        resp = requests.get(u, timeout=20, allow_redirects=False)
        loc = resp.headers.get('Location', '-') if resp.status_code in (301, 302, 307, 308) else '-'
        print(f'{resp.status_code:3d} {r:35s} Location={loc}')
    except Exception as e:
        print(f'ERR  {r:35s} -> {e}')
