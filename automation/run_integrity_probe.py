#!/usr/bin/env python3
import requests
from urllib.parse import urljoin
import sys

BASE='https://ziontechgroup.com'
routes=['/','/public-roadmap','/status-page','/use-cases','/solutions/healthcare',
        '/industries/financial-services','/free-consultation','/tools/phishing-analyzer']

print(f"{'STATUS':>6} {'ROUTE':<38} URL  SIZE")
print("-"*80)
for r in routes:
    u = urljoin(BASE,r) if r!='/' else BASE
    try:
        resp=requests.get(u,timeout=15,allow_redirects=True)
        print(f"{resp.status_code:>6} {r:<38} {resp.url} ({len(resp.content)}B)")
    except Exception as e:
        print(f"{'ERR':>6} {r:<38} -> {e}")

# Also check direct .html file access for 404 routes
print("\n--- Direct .html checks for routes that 404 ---")
for r in routes:
    u = urljoin(BASE,r) if r!='/' else BASE
    try:
        resp=requests.get(u,timeout=15,allow_redirects=False)
        if resp.status_code == 404:
            # Try with /index.html
            html_url = u.rstrip('/') + '/index.html'
            try:
                hresp = requests.get(html_url, timeout=15, allow_redirects=False)
                print(f"  {r:<35} 404 -> {html_url}: {hresp.status_code}")
            except:
                print(f"  {r:<35} 404 -> {html_url}: ERR")
    except:
        pass
