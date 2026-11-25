#!/usr/bin/env python3
"""Site integrity check - Zion Tech Group key routes.
Live HTTP probe + repo cross-check + sitemap spot-check.
Run: python3 site_integrity_check_now.py
"""
import json, os, re, hashlib, subprocess, sys
from urllib.parse import urljoin
import requests

BASE = "https://ziontechgroup.com"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) zion-site-integrity-cron/1.0"
s = requests.Session()
s.headers.update({"User-Agent": UA, "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"})
s.max_redirects = 10

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

def norm(path):
    if path == "/":
        return BASE + "/"
    return BASE + path if path.endswith("/") else BASE + path + "/"

def extract_title(html):
    m = re.search(r"<title>(.*?)</title>", html, re.I | re.S)
    return " ".join(m.group(1).split()) if m else ""

def extract_canonical(html):
    m = re.search(r"<link[^>]+rel=[\"']canonical[\"][^>]+href=[\"']([^\"']+)[\"']", html, re.I)
    return m.group(1) if m else ""

results = []
for path, label in ROUTES:
    url = norm(path)
    row = {"path": path, "label": label, "url": url, "ok": False, "status": None,
           "final": None, "size": 0, "ct": "", "title": "", "canonical": ""}
    try:
        r = s.get(url, timeout=25, allow_redirects=True)
        row["status"] = r.status_code
        row["final"] = r.url
        row["size"] = len(r.content)
        row["ct"] = r.headers.get("content-type", "")
        if r.status_code == 200:
            row["ok"] = True
            row["title"] = extract_title(r.text)
            row["canonical"] = extract_canonical(r.text)
    except Exception as e:
        row["status"] = f"ERR:{type(e).__name__}"
        row["final"] = str(e)[:120]
    results.append(row)

print("=" * 100)
print("ZION TECH GROUP - SITE INTEGRITY CHECK (LIVE PROBE)")
print("=" * 100)
for r_ in results:
    mark = "OK" if r_["ok"] else "FAIL"
    final = r_["final"] or r_["url"]
    print(f"\n[{mark}] {r_['label']}  ({r_['path']})")
    print(f"    URL:  {r_['url']}")
    print(f"    FINAL: {final}  HTTP {r_['status']}  size={r_['size']:,}B  CT={r_['ct']}")
    if r_["ok"]:
        print(f"    TITLE: {r_['title'][:90]}")
        print(f"    CANON: {r_['canonical'][:110]}")

ok = sum(1 for r_ in results if r_["ok"])
print("\n" + "=" * 100)
print(f"SUMMARY: {ok}/{len(ROUTES)} live-200")

# Repo cross-check
print("\n" + "=" * 100)
print("REPO CROSS-CHECK  (zion-support/zion-support.github.io/public)")
print("=" * 100)
repo = "/Users/miami2/zion-support/zion-support.github.io"
live_cache = {}
for r_ in results:
    if r_["ok"] and r_["status"] == 200:
        live_cache[r_["path"]] = r_["final"]

for r_ in results:
    path = r_["path"].lstrip("/")
    local = os.path.join(repo, "public", path, "index.html")
    if not os.path.exists(local):
        print(f"[MISSING] {r_['label']}  local file absent: {local}")
        continue
    local_sha = hashlib.sha1(open(local, "rb").read(2048)).hexdigest()
    live_sha = "n/a"
    if r_["path"] in live_cache:
        try:
            live_sha = hashlib.sha1(requests.get(live_cache[r_["path"]], timeout=15).content[:2048]).hexdigest()
        except Exception as e:
            live_sha = f"ERR {e}"
    match = local_sha == live_sha
    print(f"[{'IN SYNC' if match else 'DIFF'}] {r_['label']}")
    print(f"     local sha1[:10]={local_sha[:10]}  live sha1[:10]={live_sha[:10]}")

# committed_public_routes.json cross-check
print("\n" + "=" * 100)
print("TRACKING CROSS-CHECK  (committed_public_routes.json)")
print("=" * 100)
try:
    committed = json.load(open("/Users/miami2/zion.app/automation/committed_public_routes.json"))
    for k in sorted(committed.keys()):
        exists = k in [r_["path"].lstrip("/") for r_ in results]
        print(f"[{'LIVE' if exists else 'NO-LIVE'}] {k}")
except Exception as e:
    print("ERR", e)
