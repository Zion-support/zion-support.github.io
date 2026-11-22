import requests, json
from urllib.parse import urlparse, urljoin
from collections import deque
from bs4 import BeautifulSoup

BASE = "https://ziontechgroup.com/"
session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; FullCrawl4/1.0)"})


def norm(u):
    p = urlparse(u)
    return f"{p.scheme}://{p.netloc}{p.path}"


visited = set()
q = deque([BASE])
broken = []
checked = 0
max_pages = 160
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
                soup = BeautifulSoup(r.text, "html.parser")
                for a in soup.find_all("a", href=True):
                    href = a["href"].strip()
                    if not href or href.startswith(("#", "javascript:", "mailto:", "tel:")):
                        continue
                    n = norm(urljoin(u, href))
                    if n.startswith(BASE) and n not in visited and n not in q:
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
