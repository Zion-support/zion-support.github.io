#!/usr/bin/env python3
"""Deep verification of the two suspicious routes + confirm titles for all 8."""
import urllib.request
import urllib.error
import ssl
import re

ROUTES = [
    "/public-roadmap",
    "/status-page",
    "/use-cases",
    "/solutions/healthcare",
    "/industries/financial-services",
    "/free-consultation",
    "/tools/phishing-analyzer",
]

HEADERS = {"User-Agent": "Mozilla/5.0"}

def fetch(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        resp = urllib.request.urlopen(req, timeout=25, context=ssl._create_unverified_context())
        body = resp.read().decode("utf-8", "ignore")
        status = resp.status
        final = resp.geturl()
        # title
        m = re.search(r"<title>(.*?)</title>", body, re.S)
        title = m.group(1).strip() if m else ""
        # app router error/placeholder markers
        markers = []
        for kw in ["Not a package", "There was an error", "404", "This page could not be found", "Under construction", "apiGateway"]:
            if kw.lower() in body.lower():
                markers.append(kw)
        return status, final, title, markers, body[:300].replace("\n"," ")
    except urllib.error.HTTPError as e:
        return e.code, e.geturl(), "", [], ""

for r in ROUTES:
    url = "https://ziontechgroup.com" + r
    status, final, title, markers, head = fetch(url)
    status_s = "OK" if status == 200 else f"FAIL({status})"
    mark_s = " | MARKERS:" + ",".join(markers) if markers else ""
    print(f"{status_s} {r}")
    print(f"   final={final}")
    print(f"   title={title[:90]}")
    if markers:
        print(f"   markers: {markers}")
    print(f"   head: {head[:160]}")
    print()
