"""
Live site integrity check via sitemap — concurrent probe of every URL.
Uses ThreadPoolExecutor (20 workers) + /Users/miami2/zion.app/automation/.crawl-venv/bin/python3
"""
import sys, time, re, xml.etree.ElementTree as ET, concurrent.futures as cf
import threading
from urllib.parse import urlparse, urlunparse

import requests

BASE = "https://ziontechgroup.com"
SITEMAP_URL = BASE + "/sitemap.xml"
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) zion-integrity-check/1.0"
_TIMEOUT = 12
MAX_WORKERS = 20

s = requests.Session()
s.headers["User-Agent"] = USER_AGENT
s.headers["Accept-Encoding"] = "gzip, deflate"

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

# Parse URLs with a tolerant regex (sitemaps are regular: <loc>http://...</loc>)
# Regex avoids ET.parse choke on bare '&' in URLs.
LOC_RE = re.compile(r"<loc>(.*?)</loc>", re.S)
raw_urls = LOC_RE.findall(sm.text or "")
urls = []
for v in raw_urls:
    v = v.strip()
    if v.startswith("http"):
        urls.append(urlunparse(urlparse(v)._replace(fragment="")))

print(f"URLs in sitemap: {len(urls)}", flush=True)
seen = set()
unique = []
for u in urls:
    if u not in seen:
        seen.add(u)
        unique.append(u)
urls = unique
print(f"Unique URLs: {len(urls)}", flush=True)
if not urls:
    print("No URLs found.", flush=True)
    sys.exit(0)

touched = 0
http200 = 0
broken = []
redirects = []
errors = 0
html_ok = 0
lock = cf.threading.Lock()

def probe(url):
    global touched, http200, broken, redirects, errors, html_ok
    try:
        r = s.get(url, allow_redirects=True, timeout=_TIMEOUT)
    except requests.RequestException as e:
        with lock:
            broken.append((url, f"exception: {e}"))
            errors += 1
        return
    status = r.status_code
    if 300 <= status < 400:
        with lock:
            redirects.append((url, r.url, status))
        # check final
        try:
            fr = s.get(r.url, allow_redirects=True, timeout=_TIMEOUT)
            fstatus = fr.status_code
        except Exception as fe:
            with lock:
                broken.append((url, f"redirect→exception: {fe}"))
                errors += 1
            return
        with lock:
            if fstatus == 200:
                http200 += 1
                if "text/html" in (fr.headers.get("Content-Type") or ""):
                    html_ok += 1
            else:
                broken.append((url, f"redirect HTTP {status} -> {r.url} -> final HTTP {fstatus}"))
                errors += 1
    elif status == 200:
        with lock:
            http200 += 1
            if "text/html" in (r.headers.get("Content-Type") or ""):
                html_ok += 1
    else:
        with lock:
            broken.append((url, f"HTTP {status}"))
            errors += 1
    with lock:
        touched += 1

print(f"\nProbing {len(urls)} URLs with {MAX_WORKERS} workers...", flush=True)
t_probe = time.time()
with cf.ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex:
    list(ex.map(probe, urls))
probe_elapsed = time.time() - t_probe

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
print(f"Probe time (excl sitemap): {probe_elapsed:.1f}s", flush=True)
print(f"Avg per URL: {probe_elapsed/max(touched,1):.3f}s", flush=True)

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
