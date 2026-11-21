import requests, json
from urllib.parse import urljoin, urlparse
from collections import deque
BASE = "https://ziontechgroup.com/"
session = requests.Session()
session.headers.update({"User-Agent": "Mozilla/5.0 (compatible; FullSiteCheck/1.0)"})


def norm(u):
    p = urlparse(u)
    return f"{p.scheme}://{p.netloc}{p.path}"


visited = set()
q = deque([BASE])
total = 0
ok = 0
broken = []
while q:
    u = q.popleft()
    if u in visited:
        continue
    visited.add(u)
    total += 1
    try:
        r = session.get(u, allow_redirects=False, timeout=12)
        code = r.status_code
        if code == 200:
            ok += 1
            try:
                import re
                for m in re.finditer(r'href=["\']([^"\']+)["\']', r.text):
                    href = m.group(1)
                    if href.startswith(("http://", "https://")) and BASE.replace("/", "") in href:
                        n = norm(href)
                        if n not in visited and n not in q:
                            q.append(n)
            except Exception:
                pass
        else:
            broken.append({"url": u, "status": code})
    except Exception as e:
        broken.append({"url": u, "status": "ERR:" + str(e)[:40]})
    if len(broken) > 30:
        break

json.dump({"total": total, "ok": ok, "broken_count": len(broken), "broken": broken},
          open("/tmp/full_crawl.json", "w"), indent=1)
print(f"TOTAL={total} OK={ok} BROKEN={len(broken)}")
for b in broken:
    print(b["url"], " -> ", b["status"])
