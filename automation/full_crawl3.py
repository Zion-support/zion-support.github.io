import requests, json
from urllib.parse import urljoin, urlparse

BASE = "https://ziontechgroup.com/"
session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; FullCrawl3/1.0)"})


def norm(u):
    p = urlparse(u)
    return f"{p.scheme}://{p.netloc}{p.path}"


def extract_links(html):
    links = []
    for tok in html.split("href="):
        if not tok:
            continue
        rest = tok.strip()
        if not rest:
            continue
        q = None
        if rest[0] in ("'", '"'):
            q = rest[0]
            rest = rest[1:]
        if q:
            end = rest.find(q)
            if end != -1:
                href = rest[:end].strip()
                if href:
                    links.append(href)
    return links


visited = set()
q = [BASE]
seen_urls = {BASE}
broken = []
checked = 0
max_pages = 150
while q and checked < max_pages:
    u = q.pop(0)
    checked += 1
    if u in visited:
        continue
    visited.add(u)
    try:
        r = session.get(u, allow_redirects=False, timeout=12)
        code = r.status_code
        if code == 200:
            try:
                for href in extract_links(r.text):
                    if href.startswith(("http://", "https://")) and BASE.rstrip("/") in href:
                        n = norm(href)
                        if n not in seen_urls:
                            seen_urls.add(n)
                            q.append(n)
            except Exception:
                pass
        else:
            broken.append({"url": u, "status": code})
    except Exception as e:
        broken.append({"url": u, "status": "ERR:" + str(e)[:40]})

print(f"TOTAL={checked} BROKEN={len(broken)}")
for b in broken:
    print(b["url"], " -> ", b["status"])
