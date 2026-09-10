import requests
from urllib.parse import urljoin

BASE = 'https://ziontechgroup.com'
routes = [
    '/', '/public-roadmap', '/status-page', '/use-cases',
    '/solutions/healthcare', '/industries/financial-services',
    '/free-consultation', '/tools/phishing-analyzer'
]

for r in routes:
    u = urljoin(BASE, r) if r != '/' else BASE
    try:
        resp = requests.get(u, timeout=20, allow_redirects=True)
        print(f'{resp.status_code:3d} {r:35s} -> {resp.url} ({len(resp.content)}B)')
    except Exception as e:
        print(f'ERR  {r:35s} -> {e}')
