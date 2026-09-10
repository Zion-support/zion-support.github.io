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

print("=== LIVE SITE PROBE ===")
for r in routes:
    u = urljoin(BASE, r) if r != '/' else BASE
    try:
        resp = requests.get(u, timeout=20, allow_redirects=True)
        print(f'{resp.status_code:3d}  {r:35s} -> {resp.url}  ({len(resp.content)}B)')
    except Exception as e:
        print(f'ERR   {r:35s} -> {e}')

print("\n=== LIVE _redirects: missing routes? ===")
try:
    redirects = requests.get(f'{BASE}/_redirects', timeout=20).text
    for r in routes:
        r_clean = r.rstrip('/')
        if r_clean == '':
            r_clean = '/'
        # check both with and without trailing slash
        if r_clean not in redirects and r_clean + '/' not in redirects:
            print(f'MISSING from _redirects: {r}')
        else:
            print(f'OK in _redirects: {r}')
except Exception as e:
    print(f'Failed to fetch _redirects: {e}')

print("\n=== Industries/financial-services _redirects check ===")
if '/industries/financial-services' in redirects or '/industries/financial-services/' in redirects:
    print("Route present in _redirects")
else:
    print("Route MISSING from _redirects - this is the problem")
