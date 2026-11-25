"""Fresh site integrity verification for ziontechgroup.com (7 key routes)."""
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin

BASE = "https://ziontechgroup.com"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) zion-site-integrity/1.0"
s = requests.Session()
s.headers.update({"User-Agent": UA, "Accept": "text/html"})

KEY_ROUTES = [
    "/public-roadmap",
    "/status-page",
    "/use-cases",
    "/solutions/healthcare",
    "/industries/financial-services",
    "/free-consultation",
    "/tools/phishing-analyzer",
]

results = {}
for route in KEY_ROUTES:
    url = BASE + route
    r = s.get(url, allow_redirects=True, timeout=25)
    final = r.url
    ctype = r.headers.get("Content-Type", "")
    # content checks
    soup = BeautifulSoup(r.text, "html.parser")
    title = soup.title.string.strip() if soup.title and soup.title.string else ""
    canonical = ""
    for c in soup.find_all("link", rel="canonical"):
        canonical = c.get("href", "")
    h1 = ""
    h = soup.find("h1")
    if h:
        h1 = h.get_text(strip=True)
    results[route] = {
        "final_url": final,
        "status": r.status_code,
        "content_type": ctype,
        "title": title,
        "canonical": canonical,
        "h1": h1,
        "ok": r.status_code == 200 and "text/html" in ctype,
        "canonical_match": canonical.rstrip("/") == final.rstrip("/"),
    }
    print(f"[{'OK' if results[route]['ok'] else 'FAIL'}] {route} -> HTTP {r.status_code}")
    print(f"      title: {title}")
    print(f"      canonical: {canonical}")
    print(f"      h1: {h1}")

print("\n### SUMMARY")
for route, res in results.items():
    print(f"{'PASS' if res['ok'] else 'FAIL'}  {route}  ->  HTTP {res['status']}  (canonical_match: {res['canonical_match']})")

with open("/Users/miami2/zion.app/automation/key_routes_probe.json", "w") as f:
    __import__("json").dump(results, f, indent=2)
print("\nSaved to key_routes_probe.json")
