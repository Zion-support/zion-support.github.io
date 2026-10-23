#!/usr/bin/env python3
"""Weekly, deterministic, bounded public navigation audit; GET-only and stdlib-only.

Always checks essential routes. Rotates the remaining discovered URLs each week
rather than repeatedly checking the lexically first 25. Never follows external
links, submits forms, writes to the site, or queries private APIs.
"""
import datetime as dt
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
import json
from pathlib import Path
import sys
import urllib.error
import urllib.parse
import urllib.request

ORIGIN = "https://ziontechgroup.com"
BASE_HOST = "ziontechgroup.com"
ESSENTIAL = ("/", "/about/", "/services/", "/contact/", "/discovery/", "/apps/")
BUDGET = 30
MAX_HTML = 2_000_000
HEADERS = {"User-Agent": "Zion-Public-Navigation-Audit/2.0", "Accept": "text/html"}
REPORT = Path("public-navigation-audit.json")


class Links(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.hrefs = []

    def handle_starttag(self, tag, attrs):
        if tag == "a":
            href = dict(attrs).get("href")
            if href:
                self.hrefs.append(href)


def internal_url(base, href):
    """Only HTTPS first-party URLs without query strings or credentials."""
    target = urllib.parse.urlsplit(urllib.parse.urljoin(base, href))
    if (target.scheme != "https" or target.hostname != BASE_HOST or
            target.username or target.password or target.port not in (None, 443) or
            target.query):
        return None
    return urllib.parse.urlunsplit(("https", BASE_HOST, target.path or "/", "", ""))


def select_links(discovered, week_index, budget=BUDGET):
    if budget < len(ESSENTIAL):
        raise ValueError("budget-too-small")
    essential = [ORIGIN + path for path in ESSENTIAL]
    rest = sorted(set(discovered) - set(essential))
    slots = budget - len(essential)
    take = min(slots, len(rest))
    if not take:
        return essential
    offset = (week_index * slots) % len(rest)
    return essential + [rest[(offset + i) % len(rest)] for i in range(take)]


class InternalRedirects(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        if internal_url(ORIGIN, newurl) != urllib.parse.urldefrag(newurl)[0]:
            raise ValueError("off-origin-or-query-redirect")
        return super().redirect_request(req, fp, code, msg, headers, newurl)


OPENER = urllib.request.build_opener(InternalRedirects)


def fetch_page(url):
    """Return HTML from a single safe first-party GET, with a hard size limit."""
    if internal_url(ORIGIN, url) != url:
        raise ValueError("unsafe-target-url")
    request = urllib.request.Request(url, headers=HEADERS, method="GET")
    with OPENER.open(request, timeout=12) as response:
        status = response.status
        if not 200 <= status < 400:
            raise ValueError("non-success-status")
        if "text/html" not in response.headers.get("Content-Type", "").lower():
            raise ValueError("not-html")
        payload = response.read(MAX_HTML + 1)
        if len(payload) > MAX_HTML:
            raise ValueError("oversized-html")
        return payload.decode("utf-8", "replace")


def classify_failure(exc):
    if isinstance(exc, urllib.error.HTTPError):
        return "http-" + str(exc.code)
    if isinstance(exc, ValueError):
        return str(exc)[:64]
    return "network-or-timeout"  # Do not echo response bodies or error strings.


def run_audit(fetch=fetch_page, date=None, budget=BUDGET):
    date = date or dt.datetime.now(dt.timezone.utc).date()
    week_index = date.toordinal() // 7
    discovered = set()
    failures = []
    checked = set()
    for path in ESSENTIAL:
        url = ORIGIN + path
        try:
            body = fetch(url)
            checked.add(url)
            parser = Links()
            parser.feed(body)
            for href in parser.hrefs:
                normalized = internal_url(url, href)
                if normalized:
                    discovered.add(normalized)
        except Exception as exc:
            failures.append({"path": path, "reason": classify_failure(exc)})
            checked.add(url)
    selected = select_links(discovered, week_index, budget)
    remaining = [url for url in selected if url not in checked]

    def probe(url):
        try:
            fetch(url)
            return {"path": urllib.parse.urlsplit(url).path, "ok": True}
        except Exception as exc:
            return {"path": urllib.parse.urlsplit(url).path, "ok": False,
                    "reason": classify_failure(exc)}

    with ThreadPoolExecutor(max_workers=4) as pool:
        results = list(pool.map(probe, remaining))
    for result in results:
        if not result["ok"]:
            failures.append({"path": result["path"], "reason": result["reason"]})
    report = {
        "schema": "zion.public-navigation-audit.v2",
        "checked_at_utc_date": date.isoformat(),
        "week_index": week_index,
        "discovered_nonquery_links": len(discovered),
        "sample_budget": budget,
        "checked_total": len(checked) + len(remaining),
        "selected_routes": [urllib.parse.urlsplit(url).path for url in selected],
        "failed_routes": failures,
        "status": "failed" if failures else "passed",
        "coverage_note": "All six essential routes plus a rotating subset of links discovered from their HTML; no full-site certification.",
    }
    return report


def main():
    report = run_audit()
    REPORT.write_text(json.dumps(report, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print("Navigation audit: " + report["status"] + ", discovered " +
          str(report["discovered_nonquery_links"]) + ", checked " + str(report["checked_total"]) +
          ", failed " + str(len(report["failed_routes"])))
    for item in report["failed_routes"][:30]:
        print("::error title=Public navigation route unavailable::" + item["path"] + " " + item["reason"])
    if report["failed_routes"]:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
