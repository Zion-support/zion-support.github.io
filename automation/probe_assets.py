import requests
BASE = "https://ziontechgroup.com"
UA = {"User-Agent": "Mozilla/5.0 (compatible; Probe/1.0)"}

def fetch(url):
    try:
        r = requests.get(url, timeout=20, headers=UA, allow_redirects=True)
        return r.status_code, r.text
    except Exception as e:
        return "ERR:" + type(e).__name__, str(e)[:80]

# Homepage asset references and script tags
import re
_, html = fetch(BASE + "/")
print("HAS _next/static in html:", "_next/static" in html)
print("CANONICAL:", re.search(r'<link[^>]+canonical[^>]+href="([^"]+)"', html).group(1))
m = re.findall(r'<script[^>]+src="([^"]+)"', html)
print("SCRIPT SRCs:", m[:12])

# Sitemap sample
for s in ["/sitemap-0.xml", "/sitemap-1.xml", "/sitemap-2.xml", "/apps/apps-sitemap.xml", "/apps-network-sitemap.xml", "/sitemap-editorial.xml"]:
    r = requests.get(BASE + s, timeout=20, headers=UA)
    print(f"\n=== {s} HTTP {r.status_code} ({len(r.text)} bytes) ===")
    print(r.text[:700])
