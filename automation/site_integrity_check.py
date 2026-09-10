import os, requests
from urllib.parse import urljoin

BASE='https://ziontechgroup.com'
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

print('=== out/ file presence ===')
targets = [
    'out/public-roadmap/index.html',
    'out/status-page/index.html',
    'out/use-cases/index.html',
    'out/solutions/healthcare/index.html',
    'out/industries/financial-services/index.html',
    'out/free-consultation/index.html',
    'out/tools/phishing-analyzer/index.html',
]
for t in targets:
    print(f'{os.path.exists(t)!s:5} {t}')

print()
print('=== docs/ file presence ===')
docs_targets = [
    'docs/public-roadmap/index.html',
    'docs/status-page/index.html',
    'docs/use-cases/index.html',
    'docs/solutions/healthcare/index.html',
    'docs/industries/financial-services/index.html',
    'docs/free-consultation/index.html',
    'docs/tools/phishing-analyzer/index.html',
]
for t in docs_targets:
    print(f'{os.path.exists(t)!s:5} {t}')

print()
print('=== public/ file presence ===')
pub_targets = [
    'public/public-roadmap/index.html',
    'public/status-page/index.html',
    'public/use-cases/index.html',
    'public/solutions/healthcare/index.html',
    'public/industries/financial-services/index.html',
    'public/free-consultation/index.html',
    'public/tools/phishing-analyzer/index.html',
]
for t in pub_targets:
    print(f'{os.path.exists(t)!s:5} {t}')

print()
print('=== LIVE PROBE ===')
for r in routes:
    u = urljoin(BASE,r) if r!='/' else BASE
    try:
        resp=requests.get(u,timeout=20,allow_redirects=True)
        cl = len(resp.content)
        ct = resp.headers.get('content-type','?')
        print(f'{resp.status_code:3d} {r:35s} -> {resp.url} ({cl}B) ct={ct}')
    except Exception as e:
        print(f'ERR  {r:35s} -> {e}')
