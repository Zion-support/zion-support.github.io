import requests, re, sys
from urllib.parse import urljoin

BASE = "https://ziontechgroup.com"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) zion-site-integrity/1.0"
s = requests.Session()
s.headers.update({"User-Agent": UA, "Accept": "text/html"})

ROUTES = [
    "/public-roadmap",
    "/status-page",
    "/use-cases",
    "/solutions/healthcare",
    "/industries/financial-services",
    "/free-consultation",
    "/tools/phishing-analyzer",
]

for r in ROUTES:
    u = BASE if r == "/" else urljoin(BASE, r)
    try:
        resp = s.get(u, timeout=25, allow_redirects=True)
        body = resp.text
        title = ""
        m = re.search(r"<title>(.*?)</title>", body, re.S)
        if m:
            title = m.group(1).strip()
        canon = ""
        m2 = re.search(r'<link rel="canonical" href="([^"]+)"', body)
        if m2:
            canon = m2.group(1)
        has_ck = body.startswith("<!doctype") or "<html" in body.lower()
        print(
            f"{resp.status_code} {r:32s} len={len(body):5d} title={title[:55]!r} "
            f"canonical={canon!r} doctype={has_ck}"
        )
    except Exception as e:
        print(f"ERR  {r:32s} -> {e}")
