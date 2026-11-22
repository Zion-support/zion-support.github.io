import requests
from urllib.parse import urljoin

BASE = 'https://ziontechgroup.com'
routes = [
    '/', '/public-roadmap', '/status-page', '/use-cases',
    '/solutions/healthcare', '/industries/financial-services',
    '/free-consultation', '/tools/phishing-analyzer'
]

print("=== Zion Tech Group Site Integrity Check ===")
print(f"Run: {__import__('datetime').datetime.utcnow().isoformat()}Z")
print()

for r in routes:
    u = urljoin(BASE, r) if r != '/' else BASE
    try:
        resp = requests.get(u, timeout=20, allow_redirects=True)
        print(f'{resp.status_code:3d} {r:35s} -> {resp.url} ({len(resp.content)}B)')
    except Exception as e:
        print(f'ERR  {r:35s} -> {e}')

print()
print("=== SUBROUTE PROBES (trailing slash variants) ===")
extras = [
    '/industries/financial-services/',
    '/tools/phishing-analyzer/',
    '/public-roadmap/',
    '/status-page/',
    '/use-cases/',
    '/solutions/healthcare/',
    '/free-consultation/',
]
for r in extras:
    u = urljoin(BASE, r)
    try:
        resp = requests.get(u, timeout=20, allow_redirects=True)
        print(f'{resp.status_code:3d} {r:40s} -> {resp.url} ({len(resp.content)}B)')
    except Exception as e:
        print(f'ERR  {r:40s} -> {e}')
