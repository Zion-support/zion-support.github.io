#!/usr/bin/env python3
"""Targeted site integrity check for the 8 routes requested."""
import urllib.request
import urllib.error
import ssl

ROUTES = [
    "/",
    "/public-roadmap",
    "/status-page",
    "/use-cases",
    "/solutions/healthcare",
    "/industries/financial-services",
    "/free-consultation",
    "/tools/phishing-analyzer",
]

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; SiteIntegrityCron/1.0) +https://ziontechgroup.com",
}

def fetch(url, timeout=20):
    req = urllib.request.Request(url, headers=HEADERS)
    start = __import__("time").time()
    try:
        resp = urllib.request.urlopen(req, timeout=timeout, context=ssl._create_unverified_context())
        status = resp.status
        ctype = resp.headers.get("Content-Type", "")
        snippet = resp.read(120).decode("utf-8", "ignore").replace("\n", " ")
        final = resp.geturl()
        resp.close()
        return status, ctype, snippet, final
    except urllib.error.HTTPError as e:
        status = e.code
        ctype = e.headers.get("Content-Type", "") if e.headers else ""
        snippet = e.read(120).decode("utf-8", "ignore").replace("\n", " ") if e.fp else ""
        final = e.geturl() if hasattr(e, "geturl") else url
        return status, ctype, snippet, final
    except Exception as e:
        return None, "", str(e)[:120], url

print(f"ROUTE_INTEGRITY_CHECK {__import__('time').strftime('%Y-%m-%dT%H:%M:%SZ')}")
print(f"TARGETS={len(ROUTES)}")
for r in ROUTES:
    url = "https://ziontechgroup.com" + r
    status, ctype, snippet, final = fetch(url)
    ok = (status == 200)
    print(f"\n{'OK ' if ok else 'FAIL'} {r}")
    print(f"   final -> {final}")
    print(f"   status={status} content_type={ctype}")
    print(f"   body_snippet: {snippet[:80]}")
