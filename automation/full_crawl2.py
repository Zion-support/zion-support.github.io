import requests, json
from urllib.parse import urljoin, urlparse
from collections import deque

BASE = "https://ziontechgroup.com/"
session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; FullCrawl2/1.0)"})


def norm(u):
    p = urlparse(u)
    return f"{p.scheme}://{p.netloc}{p.path}"


visited = set()
q = deque([BASE])
seen_urls = {BASE}
broken = []
checked = 0
max_pages = 150
while q and checked < max_pages:
    u = q.popleft()
    checked += 1
    if u in visited:
        continue
    visited.add(u)
    try:
        r = session.get(u, allow_redirects=False, timeout=12)
        code = r.status_code
        if code == 200:
            try:
                import re
                for m in re.finditer(r'href=["\']([^"\']+)["\']', r.text):
                    href = m.group(1)
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
