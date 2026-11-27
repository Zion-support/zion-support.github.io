#!/usr/bin/env python3
"""Site integrity check - Zion Tech Group specific routes"""
import re
import sys
import requests

BASE = "https://ziontechgroup.com"

# Routes to check (from the task)
ROUTES = [
    ("/", "Homepage"),
    ("/public-roadmap", "Public Roadmap"),
    ("/status-page", "Status Page"),
    ("/use-cases", "Use Cases"),
    ("/solutions/healthcare", "Solutions - Healthcare"),
    ("/industries/financial-services", "Industries - Financial Services"),
    ("/free-consultation", "Free Consultation"),
    ("/tools/phishing-analyzer", "Tools - Phishing Analyzer"),
]

# Add trailing slash to non-root routes for consistency
def normalize_url(path):
    if path == "/":
        return BASE + "/"
    return BASE + path + "/" if not path.endswith("/") else BASE + path

session = requests.Session()
session.headers.update({
    "User-Agent": "Mozilla/5.0 (compatible; ZionIntegrityCheck/1.0)",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
})
session.max_redirects = 5

def extract_title(html):
    m = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
    if m:
        return ' '.join(m.group(1).split())
    return ""

def extract_canonical(html):
    cm = re.search(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)["\']', html, re.IGNORECASE)
    if cm:
        return cm.group(1)
    return ""

def extract_h1(html):
    m = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.IGNORECASE | re.DOTALL)
    if m:
        return ' '.join(m.group(1).split())[:80]
    return ""

def check_route(path, label):
    url = normalize_url(path)
    result = {"label": label, "path": path, "url": url}
    
    try:
        r = session.get(url, timeout=20, allow_redirects=True)
        result["status"] = r.status_code
        result["final_url"] = r.url
        result["redirect"] = (r.url != url)
        
        if r.status_code == 200:
            title = extract_title(r.text)
            canonical = extract_canonical(r.text)
            h1 = extract_h1(r.text)
            result["title"] = title
            result["canonical"] = canonical
            result["h1"] = h1
            result["ok"] = True
        else:
            result["title"] = ""
            result["canonical"] = ""
            result["h1"] = ""
            result["ok"] = False
            result["reason"] = "HTTP " + str(r.status_code)
            
    except requests.exceptions.TooManyRedirects:
        result["status"] = "ERR_REDIRECT_LOOP"
        result["ok"] = False
        result["reason"] = "Too many redirects"
    except requests.exceptions.ConnectionError:
        result["status"] = "ERR_CONNECTION"
        result["ok"] = False
        result["reason"] = "Connection failed"
    except requests.exceptions.Timeout:
        result["status"] = "ERR_TIMEOUT"
        result["ok"] = False
        result["reason"] = "Timeout"
    except Exception as e:
        result["status"] = f"ERR: {type(e).__name__}"
        result["ok"] = False
        result["reason"] = str(e)[:100]
    
    return result

print("=" * 70)
print("ZION TECH GROUP - SITE INTEGRITY CHECK")
print(f"Time: {__import__('datetime').datetime.now().isoformat()}")
print("=" * 70)
print()

results = []
for path, label in ROUTES:
    result = check_route(path, label)
    results.append(result)
    status_str = str(result["status"])
    ok_mark = "✓" if result["ok"] else "✗"
    print(f"{ok_mark} [{status_str:<6}] {label}")
    print(f"   Path:    {result['path']}")
    print(f"   URL:     {result['url']}")
    if result.get("redirect"):
        print(f"   Redirect: {result['final_url']}")
    if result["ok"]:
        print(f"   Title:   {result.get('title', '')}")
        print(f"   Canonical: {result.get('canonical', '')}")
        print(f"   H1:      {result.get('h1', '')}")
    else:
        print(f"   Reason:  {result.get('reason', 'Unknown')}")
    print()

# Summary
print("=" * 70)
print("SUMMARY")
print("=" * 70)
ok_count = sum(1 for r in results if r["ok"])
broken = [r for r in results if not r["ok"]]

print(f"Total routes checked: {len(results)}")
print(f"OK (200): {ok_count}")
print(f"Issues: {len(broken)}")
print()

if broken:
    print("ROUTES WITH ISSUES:")
    for r in broken:
        print(f"  ✗ {r['label']}: {r['status']} - {r.get('reason', 'Unknown')}")
        print(f"    URL: {r['url']}")
else:
    print("All routes returning HTTP 200 ✓")

print()
print("CANONICAL URL CHECK:")
for r in results:
    if r["ok"]:
        canonical = r.get("canonical", "")
        expected = r["url"]
        match = "✓ matches" if canonical == expected else f"⚠ differs ({canonical})"
        print(f"  {r['label']}: {match}")
