#!/usr/bin/env python3
import json, re, requests
BASE = "https://ziontechgroup.com"
ROUTES = [
    "/", "/public-roadmap", "/status-page", "/use-cases",
    "/solutions/healthcare", "/industries/financial-services",
    "/free-consultation", "/tools/phishing-analyzer",
]
s = requests.Session()
s.headers.update({"User-Agent": "Mozilla/5.0 zion-integrity/1.0"})
out = {}
for r in ROUTES:
    u = (BASE if r == "/" else BASE + r) + ("/" if not r.endswith("/") else "")
    try:
        resp = s.get(u, timeout=25, allow_redirects=True)
        body = resp.text
        title = re.search(r"<title>(.*?)</title>", body, re.S)
        canon = re.search(r'<link rel="canonical" href="([^"]+)"', body)
        h1 = re.search(r"<h1[^>]*>(.*?)</h1>", body, re.S)
        out[r] = {
            "status": resp.status_code,
            "final": resp.url,
            "title": title.group(1).strip() if title else None,
            "canonical": canon.group(1) if canon else None,
            "h1": re.sub(r"\s+", " ", h1.group(1)).strip() if h1 else None,
        }
    except Exception as e:
        out[r] = {"error": str(e)[:100]}
json.dump(out, open("key_routes_content.json", "w"), indent=2)
print("saved key_routes_content.json")
