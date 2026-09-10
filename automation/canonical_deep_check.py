import requests, re
from urllib.parse import urljoin
BASE = 'https://ziontechgroup.com'
routes = ['/', '/public-roadmap', '/status-page', '/use-cases', '/solutions/healthcare', '/industries/financial-services', '/free-consultation', '/tools/phishing-analyzer']
for r in routes:
    u = urljoin(BASE, r) if r != '/' else BASE
    resp = requests.get(u, timeout=20, allow_redirects=True)
    m = re.search(r'<link rel=["\']canonical["\']\s+href=["\']([^"\']+)["\']', resp.text)
    canon = m.group(1) if m else '(none)'
    final = resp.url.rstrip('/')
    expected = u.rstrip('/')
    match = '✓' if canon and canon.rstrip('/') == expected else '✗'
    print(f'{r:35s} canon={canon} {match} (expected: {expected})')
