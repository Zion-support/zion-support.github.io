import requests; from urllib.parse import urljoin
BASE='https://ziontechgroup.com'
tests = [
    '/solutions/healthcare',
    '/solutions/healthcare/',
    '/solutions/healthcare/index.html',
    '/industries/financial-services',
    '/industries/financial-services/',
    '/industries/financial-services/index.html',
    '/tools/phishing-analyzer',
    '/tools/phishing-analyzer/',
    '/tools/phishing-analyzer/index.html',
]
for r in tests:
    u = urljoin(BASE,r) if r!='/' else BASE
    try:
        resp=requests.get(u,timeout=20,allow_redirects=True)
        print(f'{resp.status_code:3d} {r:45s} -> {resp.url} ({len(resp.content)}B)')
    except Exception as e:
        print(f'ERR  {r:45s} -> {e}')
