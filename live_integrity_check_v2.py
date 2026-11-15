"""
Live site integrity check v2 — regex-based link extraction + direct probe.
Crawls https://ziontechgroup.com: follows internal links (BFS), reports counts.
Uses the zion.app automation venv python3.
"""
import sys, re, time
from urllib.parse import urljoin, urlparse, urlunparse
from collections import deque

import requests
from bs4 import BeautifulSoup

BASE = "https://ziontechgroup.com"
START = BASE + "/"
USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) zion-integrity-check/1.0"
_TIMEOUT = 20

s = requests.Session()
s.headers["User-Agent"] = USER_AGENT

visited = set()
queue = deque([START])
broken = []        # (url, reason)
redirects = []     # (url, final_url, status_code)
http200 = 0
errors = 0
html_pages = 0

INTERNAL_RE = re.compile(r"^" + re.escape(BASE))

def strip_fragment(url: str) -> str:
    p = urlparse(url)
    return urlunparse(p._replace(fragment=""))

def is_internal(url: str) -> bool:
    return url.startswith(BASE)

def extract_links_html(html: str, base_url: str):
    """Extract internal absolute URLs from HTML using regex (fallback) + bs4."""
    links = set()
    # BeautifulSoup
    try:
        soup = BeautifulSoup(html, "html.parser")
        for tag in soup.find_all(["a", "link"]):
            href = tag.get("href")
            if not href:
                continue
            full = strip_fragment(urljoin(base_url, str(href)))
            if is_internal(full):
                links.add(full)
    except Exception:
        pass
    # Regex fallback for hrefs bs4 may miss
    for m in re.finditer(r'href\s*=\s*["\']([^"\']+)["\']', html, re.I):
        full = strip_fragment(urljoin(base_url, m.group(1)))
        if is_internal(full):
            links.add(full)
    return links

print(f"Starting crawl of {START}", flush=True)
t0 = time.time()
page = 0
while queue:
    url = queue.popleft()
    url = strip_fragment(url)
    if url in visited:
        continue
    visited.add(url)
    page += 1
    if page % 20 == 0:
        print(f"  ... crawled {page} pages, queue size {len(queue)}", flush=True)

    try:
        resp = s.get(url, allow_redirects=True, timeout=_TIMEOUT)
    except requests.RequestException as e:
        broken.append((url, f"exception: {e}"))
        errors += 1
        continue

    status = resp.status_code

    if status == 200:
        http200 += 1
        ct = resp.headers.get("Content-Type", "")
        if "text/html" in ct:
            html_pages += 1
            links = extract_links_html(resp.text, url)
            for link in links:
                if link not in visited:
                    queue.append(link)
    elif 300 <= status < 400:
        final = resp.url
        redirects.append((url, final, status))
        if is_internal(final) and final not in visited:
            queue.append(final)
    else:
        broken.append((url, f"HTTP {status}"))
        errors += 1

elapsed = time.time() - t0

print("\n===== SITE INTEGRITY REPORT =====", flush=True)
print(f"Base URL: {BASE}", flush=True)
print(f"Total crawled (unique internal pages fetched): {len(visited)}", flush=True)
print(f"HTTP 200 count: {http200}", flush=True)
print(f"Broken count: {len(broken)}", flush=True)
print(f"Redirects followed: {len(redirects)}", flush=True)
print(f"Fetch errors/exceptions: {errors}", flush=True)
print(f"HTML pages parsed: {html_pages}", flush=True)
print(f"Wall time: {elapsed:.1f}s", flush=True)

print("\n----- BREAKED URLS (first 10) -----", flush=True)
if not broken:
    print("None — site appears healthy on internal links.", flush=True)
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
