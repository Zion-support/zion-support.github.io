#!/usr/bin/env python3
"""Compare live public routes with the canonical Pages tar from this same run.

This is a read-only check. Archive paths are inspected, never extracted to disk.
Receipts identify the publisher run and attempt, not just the source commit.
"""
import hashlib
import json
import os
import re
import sys
import tarfile
import time
from datetime import datetime, timezone
from http.client import HTTPException
from pathlib import Path, PurePosixPath
from urllib.parse import urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener

BASE = "https://ziontechgroup.com"
MAX_BODY = 52_428_800
MAX_TAR = 1_100_000_000
MAX_MEMBERS = 250_000
ROUTES = {"/": "index.html", "/apps/": "apps/index.html",
          "/discovery/": "discovery/index.html"}
for locale in ("pt", "es", "fr", "de"):
    for slug in ("apps", "discovery"):
        ROUTES[f"/{locale}/{slug}/"] = f"{locale}/{slug}/index.html"
for locale in ("", "-pt", "-es", "-fr", "-de"):
    slug = f"apps/operations-reliability-ai-2026{locale}.html"
    ROUTES[f"/{slug}"] = slug
for slug in ("sitemap.xml", "sitemap-0.xml", "apps/apps-sitemap.xml", "robots.txt"):
    ROUTES[f"/{slug}"] = slug

MARKERS = ("Zion Tech Group", "Apps", "Discovery")


class SameOriginRedirect(HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        parsed = urlsplit(newurl)
        if (parsed.scheme, parsed.netloc) != ("https", "ziontechgroup.com"):
            raise ValueError("unexpected_redirect_origin")
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def read_body(response, expected=None):
    if expected is not None and not 0 <= expected <= MAX_BODY:
        raise ValueError("response_size_limit_or_invalid_length")
    chunks, size = [], 0
    while True:
        chunk = response.read(min(65_536, MAX_BODY - size + 1))
        if not chunk:
            break
        chunks.append(chunk)
        size += len(chunk)
        if size > MAX_BODY:
            raise ValueError("response_size_limit_exceeded")
    if expected is not None and expected != size:
        raise ValueError("response_incomplete_length")
    return b"".join(chunks)


def archived_bodies(archive, routes=ROUTES):
    if not 0 < archive.stat().st_size <= MAX_TAR:
        raise ValueError("unexpected_archive_size")
    wanted = set(routes.values())
    bodies = {}
    total_bytes = 0
    with tarfile.open(archive, mode="r|") as stream:
        for count, original in enumerate(stream, 1):
            if count > MAX_MEMBERS:
                raise ValueError("unexpected_archive_entry_count")
            name = original.name
            if name.startswith("/") or ".." in PurePosixPath(name).parts or "\\" in name:
                raise ValueError("unsafe_pages_archive_path")
            if not original.isdir() and not original.isfile():
                raise ValueError("unsupported_pages_archive_entry")
            name = PurePosixPath(name).as_posix()
            if name not in wanted:
                continue
            if name in bodies or not original.isfile():
                raise ValueError("ambiguous_expected_pages_entry")
            body = stream.extractfile(original)
            if body is None:
                raise ValueError("missing_expected_pages_body")
            total_bytes += original.size
            if original.size > MAX_BODY or total_bytes > 104_857_600:
                raise ValueError("source_body_size_limit")
            with body:
                bodies[name] = read_body(body, original.size)
    return bodies


def live_response(route, run_id, attempt, opener, pause=time.sleep):
    for retry in range(3):
        try:
            req = Request(f"{BASE}{route}?zion_drift={run_id}-{attempt}-{retry}",
                          headers={"User-Agent": "Zion-Apps-Deployed-Source-Drift/2.0",
                                   "Cache-Control": "no-cache"})
            with opener.open(req, timeout=12) as response:
                declared = response.headers.get("Content-Length")
                return response.status, read_body(response, int(declared) if declared is not None else None)
        except (OSError, EOFError, HTTPException, ValueError):
            if retry < 2:
                pause(1)
    return 0, b""


def compare(bodies, fetch, routes=ROUTES):
    rows = []
    for route, path in routes.items():
        if path not in bodies:
            rows.append({"route": route, "source_path": path, "match": False,
                         "status": "source_missing"})
            continue
        status, live = fetch(route)
        expected = hashlib.sha256(bodies[path]).hexdigest()
        observed = hashlib.sha256(live).hexdigest() if status == 200 else None
        semantic = route == "/"
        missing = [m for m in MARKERS if m not in live.decode("utf-8", "replace")] if semantic else []
        match = status == 200 and (not missing if semantic else expected == observed)
        rows.append({"route": route, "source_path": path, "http_status": status,
                     "source_sha256": expected, "live_sha256": observed,
                     "match": match, "mode": "semantic" if semantic else "exact",
                     "missing_markers": missing})
    return rows


def provenance(env):
    ref, source, sha = (env.get(key, "") for key in ("GITHUB_REF", "SOURCE_SHA", "GITHUB_SHA"))
    run_id, attempt = (env.get(key, "") for key in ("GITHUB_RUN_ID", "GITHUB_RUN_ATTEMPT"))
    if (ref != "refs/heads/main" or not re.fullmatch(r"[0-9a-f]{40}", source) or sha != source
            or not all(re.fullmatch(r"[1-9][0-9]{0,15}", x) for x in (run_id, attempt))):
        raise ValueError("invalid_deployment_provenance")
    return {"deploy_run_id": int(run_id), "deploy_run_attempt": int(attempt),
            "source_sha": source, "source_artifact": f"canonical-pages-{run_id}-{attempt}"}


def audit(archive, output, env, fetch=None):
    identity = provenance(env)
    result = {"schema": "zion.apps.canonical-deployment-drift.v1", **identity,
              "generated_at_utc": datetime.now(timezone.utc).isoformat(), "state": "FAIL",
              "checks": []}
    try:
        if fetch is None:
            opener = build_opener(SameOriginRedirect())
            fetch = lambda route: live_response(route, identity["deploy_run_id"],
                                                identity["deploy_run_attempt"], opener)
        rows = compare(archived_bodies(archive), fetch)
        result["checks"] = rows
        result["failure_count"] = sum(not row["match"] for row in rows)
        if not result["failure_count"]:
            result["state"] = "PASS"
    except (OSError, EOFError, ValueError, tarfile.TarError) as err:
        result["failure_count"] = len(ROUTES)
        result["error_type"] = type(err).__name__
    output.write_text(json.dumps(result, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print(f"Canonical Pages drift {result['state']}, failing routes: {result['failure_count']}")
    return 0 if result["state"] == "PASS" else 1


if __name__ == "__main__":
    sys.exit(audit(Path(sys.argv[1]), Path(sys.argv[2]), os.environ))
