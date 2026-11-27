import requests, re, json, sys

BASE = "https://ziontechgroup.com"
ROUTES = [
    ("/", "homepage"),
    ("/public-roadmap", "/public-roadmap"),
    ("/status-page", "/status-page"),
    ("/use-cases", "/use-cases"),
    ("/solutions/healthcare", "/solutions/healthcare"),
    ("/industries/financial-services", "/industries/financial-services"),
    ("/free-consultation", "/free-consultation"),
    ("/tools/phishing-analyzer", "/tools/phishing-analyzer"),
]

results = []
for path, label in ROUTES:
    url = BASE + path
    try:
        r = requests.get(url, allow_redirects=True, timeout=20, headers={"User-Agent":"Mozilla/5.0 zion-integrity-check/1.0"})
        status = r.status_code
        final = r.url
        html = r.text
        title = re.search(r'<title>(.*?)</title>', html, re.S)
        title = title.group(1).strip() if title else None
        canonical = re.search(r'<link rel="canonical" href="([^"]*)"', html)
        canonical = canonical.group(1) if canonical else None
        h1 = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.S)
        h1 = h1.group(1).strip() if h1 else None
        canonical_ok = (canonical == final)
        results.append({
            "route": path, "status": status, "final": final,
            "title": title, "canonical": canonical, "h1": h1,
            "canonical_ok": canonical_ok,
            "ok": status == 200
        })
        print(f"[{'PASS' if canonical_ok and status==200 else 'FAIL'}] {path} -> {status} | title={title[:55]!r} | canonical_ok={canonical_ok}")
    except Exception as e:
        results.append({"route": path, "status": "ERROR", "error": str(e)[:80]})
        print(f"[ERROR] {path} -> {str(e)[:80]}")

# Summary
print("\n=== SUMMARY ===")
all_pass = True
for res in results:
    if isinstance(res, dict) and "status" in res and res["status"] != "ERROR":
        ok = res["ok"] and res.get("canonical_ok")
        all_pass = all_pass and ok
        print(f"{'PASS' if ok else 'FAIL'}  {res['route']} -> {res['status']}  canonical_ok={res.get('canonical_ok')}")
    else:
        all_pass = False
        print(f"FAIL  {res.get('route')} -> ERROR")

print(f"\nOVERALL: {'ALL PASS' if all_pass else 'FAILURES PRESENT'}")

# Save raw
out = "/Users/miami2/zion.app/automation/integrity_check_results_20261112.json"
with open(out, "w") as f:
    json.dump(results, f, indent=2)
print("Saved:", out)
