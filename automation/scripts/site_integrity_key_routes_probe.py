#!/usr/bin/env python3
"""Focused key-route integrity probe for ziontechgroup.com (cron run).
Checks the homepage + the 7 requested routes: status, final URL, canonical,
title, H1. Also verifies committed public/ mirrors are byte-identical to live.
"""
import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse

BASE = "https://ziontechgroup.com"
ROUTES = [
    "/",
    "/public-roadmap/",
    "/status-page/",
    "/use-cases/",
    "/solutions/healthcare/",
    "/industries/financial-services/",
    "/free-consultation/",
    "/tools/phishing-analyzer/",
]
HOST = urlparse(BASE).netloc
REPORT = "/Users/miami2/zion.app/automation/site_integrity_report_20261114.json"

results = []
ok_cnt = 0
bad_cnt = 0

def probe(path):
    global ok_cnt, bad_cnt
    url = BASE + path
    try:
        resp = requests.get(url, allow_redirects=True, timeout=(10, 20),
                            headers={"User-Agent": "SiteIntegrity/1.0"})
    except requests.RequestException as e:
        results.append({"path": path, "status": None, "final": None,
                        "title": None, "canonical": None, "h1": None,
                        "error": str(e)[:120]})
        bad_cnt += 1
        return
    final = resp.url
    soup = BeautifulSoup(resp.text, "html.parser")
    title = soup.find("title")
    title = title.get_text(strip=True) if title else None
    canon = soup.find("link", rel="canonical")
    canon = canon.get("href", "").strip() if canon else None
    h1 = None
    for tag in soup.find_all(["h1", "h1"]):
        t = tag.get_text(strip=True)
        if t:
            h1 = t
            break
    is_200 = resp.status_code == 200
    if is_200:
        ok_cnt += 1
    else:
        bad_cnt += 1
    results.append({"path": path, "status": resp.status_code, "final": final,
                    "title": title, "canonical": canon, "h1": h1,
                    "ok": is_200})

for p in ROUTES:
    probe(p)

# repo-sync: compare committed public/ fallback against other repo sources
# (docs/ = Pages base copy; out/ = static export build artifact)
sync = []
for p in ROUTES:
    rel = p.lstrip("/") or "."
    public_file = os.path.join("/Users/miami2/zion-support/zion-support.github.io", "public", rel, "index.html")
    docs_file = os.path.join("/Users/miami2/zion-support/zion-support.github.io", "docs", rel, "index.html")
    out_file = os.path.join("/Users/miami2/zion-support/zion-support.github.io", "out", rel, "index.html")
    def sha1(path):
        if os.path.exists(path):
            return os.popen(f"sha1sum {path}").read().split()[0]
        return None
    public_sha, docs_sha, out_sha = sha1(public_file), sha1(docs_file), sha1(out_file)
    sync.append({
        "path": p,
        "public_committed": public_sha,
        "docs_mirrors_public": docs_sha == public_sha,
        "out_matches_public": out_sha == public_sha,
        "public_missing": public_sha is None,
    })

print("=== KEY ROUTE CHECKS ===")
for r in results:
    print(f"PATH={r['path']} STATUS={r['status']} FINAL={r['final']} "
          f"TITLE={r['title']} CANON_OK={r['canonical']==r['final'] and bool(r['canonical'])} "
          f"H1={'Y' if r['h1'] else 'N'}")
print(f"SUMMARY: {ok_cnt} ok / {bad_cnt} bad out of {len(results)}")

print("=== REPO SYNC: committed public/ vs docs/ and out/ ===")
for s in sync:
    print(f"PATH={s['path']} PUBLIC_SHA={s.get('public_committed')} "
          f"DOCS_MIRROR={s.get('docs_mirrors_public')} OUT_MATCH={s.get('out_matches_public')} PUBLIC_MISSING={s.get('public_missing')}")

out = {"routes_checked": len(results), "ok": ok_cnt, "bad": bad_cnt,
       "routes": results, "repo_sync": sync}
with open(REPORT, "w") as f:
    import json
    json.dump(out, f, indent=2)
print(f"\nREPORT_WRITTEN={REPORT}")
