import requests
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
print(f"{'CODE':5} {'ROUTE':30} -> {'FINAL URL':50} (SIZE)")
print('-'*120)
for r in routes:
    u = urljoin(BASE,r) if r!='/' else BASE
    try:
        resp=requests.get(u,timeout=20,allow_redirects=True)
        print(f"{resp.status_code:5d} {r:30} -> {resp.url:50} ({len(resp.content)}B)")
    except Exception as e:
        print(f"ERR   {r:30} -> {str(e)[:80]}")
