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

for r in routes:
    u = urljoin(BASE, r) if r != '/' else BASE
    try:
        resp = requests.get(u, timeout=20, allow_redirects=True)
        ct = resp.headers.get('content-type', '')
        print(f'{resp.status_code:3d} {r:35s} -> {resp.url} ({len(resp.content)}B) {ct}')
    except Exception as e:
        print(f'ERR  {r:35s} -> {e}')
