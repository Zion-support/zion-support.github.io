import requests, hashlib, re, json
from urllib.parse import urljoin

BASE = 'https://ziontechgroup.com'
ROUTES = [
    '/',
    '/public-roadmap',
    '/status-page',
    '/use-cases',
    '/solutions/healthcare',
    '/industries/financial-services',
    '/free-consultation',
    '/tools/phishing-analyzer',
]

# 1) Live probe
print("="*100)
print("STEP 1 — LIVe HTTP PROBE")
print("="*100)
live = {}
for r in ROUTES:
    u = urljoin(BASE, r) if r != '/' else BASE
    try:
        resp = requests.get(u, timeout=20, allow_redirects=True)
        live[r] = {'status': resp.status_code, 'final': resp.url, 'size': len(resp.content), 'ct': resp.headers.get('content-type')}
        print(f"  {resp.status_code:3d}  {r:35s} -> {resp.url} ({len(resp.content):,}B) [{resp.headers.get('content-type')}]")
    except Exception as e:
        live[r] = {'status': 0, 'final': str(e), 'size': 0, 'ct': ''}
        print(f"  ERR  {r:35s} -> {e}")

# 2) Repo cross-check: local public/ files vs live
print("="*100)
print("STEP 2 — REPO CROSS-CHECK (local public/ vs live content)")
print("="*100)
import os
repo_base = '/Users/miami2/zion-support/zion-support.github.io'
key_routes = ['public-roadmap','status-page','use-cases','solutions/healthcare','industries/financial-services','free-consultation','tools/phishing-analyzer']
all_ok = True
for r in ['/public-roadmap','/status-page','/use-cases','/solutions/healthcare','/industries/financial-services','/free-consultation','/tools/phishing-analyzer']:
    local = os.path.join(repo_base, 'public', r.lstrip('/'), 'index.html')
    if os.path.exists(local):
        local_sha = hashlib.sha1(open(local,'rb').read(2048)).hexdigest()  # sha1 of first 2KB
        live_sha = hashlib.sha1(live[r]['final'].encode() if False else b'')  # placeholder
        # fetch live content and compare sha1 of first 2KB
        try:
            resp = requests.get(live[r]['final'], timeout=15)
            live_sha = hashlib.sha1(resp.content[:2048]).hexdigest()
        except Exception as e:
            live_sha = 'ERR:'+str(e)[:50]
        match = 'IN SYNC' if local_sha == live_sha else 'DIFF'
        if local_sha != live_sha: all_ok = False
        print(f"  [{match:10s}] {r}  local={local_sha[:10]} live={live_sha[:10]}")
    else:
        print(f"  MISSING  {r}  (local file absent)")
        all_ok = False

# 3) Sitemap check: follow the sitemapindex to the actual sitemap(s), then
# verify every target route is present as a <loc>.
print("="*100)
print("STEP 3 — SITEMAP CHECK")
print("="*100)
try:
    resp = requests.get(BASE + '/sitemap.xml', timeout=15)
    sitemap_index_urls = re.findall(r'<loc>(.*?)</loc>', resp.text)
    all_sitemap_urls = list(sitemap_index_urls)
    # Follow the sitemapindex -> nested sitemaps (e.g. sitemap-0.xml) and
    # pull the real <loc> URLs out of each.
    for s_url in sitemap_index_urls:
        try:
            r = requests.get(s_url, timeout=15)
            if r.status_code == 200:
                all_sitemap_urls += re.findall(r'<loc>(.*?)</loc>', r.text)
        except Exception as e:
            print(f"  WARN  could not read sitemap {s_url} -> {e}")
    print(f"  sitemap index + nested sitemap(s): {len(all_sitemap_urls)} URLs total")
    for tr in ROUTES:
        needle = tr.lstrip('/')
        # match full URL segments (e.g. 'public-roadmap') as a path component
        found = any(u.rstrip('/') == f'https://ziontechgroup.com/{needle}' or needle in u for u in all_sitemap_urls)
        print(f"  {'OK' if found else 'NO-SITEMAP-ENTRY'}  sitemap contains '{tr.lstrip('/')}'")
except Exception as e:
    print(f"  ERR  sitemap.xml -> {e}")

# 4) Summary
print("="*100)
print("STEP 4 — SUMMARY")
print("="*100)
ok = sum(1 for v in live.values() if v['status']==200)
print(f"  Live HTTP: {ok}/{len(ROUTES)} routes 200")
print(f"  Repo sync: {'ALL IN SYNC' if all_ok else 'SOME DIFFERENCES'}")
print(f"  TOTAL: {ok}/{len(ROUTES)} live 200, repo {'synced' if all_ok else 'needs fix'}")
