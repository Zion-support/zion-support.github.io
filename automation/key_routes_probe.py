
import requests, sys, json, time
from urllib.parse import urlparse, urlunparse

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

def probe(url):
    try:
        r = s.get(url, allow_redirects=True, timeout=20)
        final = r.url
        ctype = r.headers.get("Content-Type", "")
        return {
            "url": url,
            "final_url": final,
            "status": r.status_code,
            "content_type": ctype,
            "ok": r.status_code == 200 and "text/html" in ctype,
        }
    except Exception as e:
        return {"url": url, "error": str(e)[:120]}

print("### KEY ROUTE PROBES", flush=True)
results = {}
for route in KEY_ROUTES:
    full = BASE + route
    results[route] = probe(full)
    res = results[route]
    if "error" in res:
        print(f"[ERROR] {route}  ->  {res['error']}")
    else:
        print(f"[{'OK' if res['ok'] else 'FAIL'}] {route}  ->  {res['status']}  ({res.get('final_url','')})")

print("\n### SUMMARY", flush=True)
for route, res in results.items():
    status = res.get("status", -1)
    ok = res.get("ok", False)
    print(f"{'PASS' if ok else 'FAIL'}  {route}  ->  HTTP {status}")

# Save raw results
with open("/Users/miami2/zion.app/automation/key_routes_probe.json", "w") as f:
    json.dump(results, f, indent=2)
print("\nSaved to key_routes_probe.json", flush=True)
