"""
Live site integrity check via sitemap — probes every URL in sitemap.xml.
Uses /Users/miami2/zion.app/automation/.crawl-venv/bin/python3 (requests+bs4).
"""
import sys, re, time, xml.etree.ElementTree as ET
from urllib.parse import urlparse, urlunparse

import requests
from bs4 import BeautifulSoup

BASE = "https://ziontechgroup.com"
SITEMAP_URL = BASE + "/sitemap.xml"
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) zion-integrity-check/1.0"
_TIMEOUT = 15

s = requests.Session()
s.headers["User-Agent"] = USER_AGENT

print(f"Fetching sitemap: {SITEMAP_URL}", flush=True)
t0 = time.time()
try:
    sm = s.get(SITEMAP_URL, timeout=_TIMEOUT)
except Exception as e:
    print(f"FATAL: cannot fetch sitemap: {e}", flush=True)
    sys.exit(1)

if sm.status_code != 200:
    print(f"FATAL: sitemap returned HTTP {sm.status_code}", flush=True)
    sys.exit(1)

print(f"Sitemap fetched: {len(sm.content)} bytes", flush=True)

# Parse URLs from sitemap (handles both flat and sitemapindex)
NS = "{http://www.sitemaps.org/schemas/sitemap/0.9}"
urls = []
for el in ET.fromstring(sm.content).iter():
    if el.tag == NS + "loc" or el.tag.endswith("loc"):
        v = el.text.strip() if el.text else ""
        if v.startswith("http"):
            urls.append(urlunparse(urlparse(v)._replace(fragment="")))

print(f"URLs in sitemap: {len(urls)}", flush=True)
if not urls:
    print("No URLs found.", flush=True)
    sys.exit(0)

# Dedup preserving order
seen = set()
unique = []
for u in urls:
    if u not in seen:
        seen.add(u)
        unique.append(u)
urls = unique
print(f"Unique URLs: {len(urls)}", flush=True)

touched = 0
http200 = 0
broken = []      # (url, reason)
redirects = []   # (url, final_url, code)
errors = 0
html_ok = 0
last_report = 0

print("\nProbing URLs...", flush=True)
for i, url in enumerate(urls, 1):
    touched += 1
    if i - last_report >= 200:
        elapsed = time.time() - t0
        print(f"  probed {touched}/{len(urls)}  [{elapsed:.0f}s]  200:{http200} broken:{len(broken)} err:{errors}", flush=True)
        last_report = i

    try:
        r = s.get(url, allow_redirects=True, timeout=_TIMEOUT)
    except requests.RequestException as e:
        broken.append((url, f"exception: {e}"))
        errors += 1
        continue

    status = r.status_code
    if 300 <= status < 400:
        redirects.append((url, r.url, status))
        # follow the redirect to final for classification
        try:
            fr = s.get(r.url, allow_redirects=True, timeout=_TIMEOUT)
            final_status = fr.status_code
        except Exception as fe:
            broken.append((url, f"redirect then exception: {fe}"))
            errors += 1
            continue
        if final_status == 200:
            http200 += 1
            if "text/html" in fr.headers.get("Content-Type", ""):
                html_ok += 1
        else:
            broken.append((url, f"redirect HTTP {status} → {r.url} → final HTTP {final_status}"))
            errors += 1
    elif status == 200:
        http200 += 1
        ct = r.headers.get("Content-Type", "")
        if "text/html" in ct:
            html_ok += 1
    else:
        broken.append((url, f"HTTP {status}"))
        errors += 1

elapsed = time.time() - t0
print(f"\n===== SITE INTEGRITY REPORT =====", flush=True)
print(f"Base URL: {BASE}", flush=True)
print(f"Total crawled (sitemap URLs probed): {touched}", flush=True)
print(f"HTTP 200 count: {http200}", flush=True)
print(f"Broken count: {len(broken)}", flush=True)
print(f"Redirects followed (3xx): {len(redirects)}", flush=True)
print(f"Fetch errors/exceptions: {errors}", flush=True)
print(f"HTML pages verified: {html_ok}", flush=True)
print(f"Wall time: {elapsed:.1f}s", flush=True)
print(f"Avg per URL: {elapsed/max(touched,1):.3f}s", flush=True)

print("\n----- BREAKED URLS (first 10) -----", flush=True)
if not broken:
    print("None — all sitemap URLs return 200.", flush=True)
else:
    for i, (url, reason) in enumerate(broken[:10], 1):
        code = reason.split()[0] if reason else ""
        if url.startswith(BASE):
            cls = "stale redirect" if code.startswith("3") else "missing page"
        else:
            cls = "external reference error"
        print(f"{i}. [{cls}] {url}  —  {reason}", flush=True)
    if len(broken) > 10:
        print(f"... and {len(broken) - 10} more broken URLs (see full log).", flush=True)

print("\n----- REDIRECTS (3xx, first 10) -----", flush=True)
if not redirects:
    print("None.", flush=True)
else:
    for url, final, code in redirects[:10]:
        print(f"  {url}  [{code}]  ->  {final}", flush=True)
