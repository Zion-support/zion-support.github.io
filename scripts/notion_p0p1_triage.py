#!/usr/bin/env python3
"""Sync open P0/P1 GitHub issues to the Notion Incidentes database.

Scope is deliberately narrow:
- open issues only (never PRs)
- title starting with P0/P1, or the production-incident label
- forever-log / OPS COMMS issues are excluded
- dedupe/upsert by the Notion Item title: "GH #<number> — <title>"

If NOTION_TOKEN is not configured, the job is inert and exits 0.
"""
import datetime as _dt
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request

REPO = os.environ.get("TRIAGE_REPO", "Zion-support/zion-support.github.io")
DATABASE_ID = os.environ.get(
    "NOTION_DATABASE_ID", "b391c5fb-634e-456b-9298-1c0d5c1889da"
)
GITHUB_TOKEN = os.environ.get("GITHUB_TOKEN", "")
NOTION_TOKEN = os.environ.get("NOTION_TOKEN", "")
NOTION_VERSION = "2022-06-28"
EXCLUDED_TITLE_FRAGMENTS = ("forever log", "ops comms")


def request_json(method, url, token, payload=None):
    headers = {
        "Accept": "application/vnd.github+json",
        "Content-Type": "application/json",
        "User-Agent": "notion-p0p1-triage",
    }
    if token:
        headers["Authorization"] = f"Bearer {token}"
    if "notion.com" in url:
        headers["Accept"] = "application/json"
        headers["Notion-Version"] = NOTION_VERSION
    data = None if payload is None else json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            body = resp.read().decode("utf-8")
            return json.loads(body) if body else {}
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")[:500]
        raise RuntimeError(f"{method} {url} failed: HTTP {exc.code}: {detail}") from exc


def github_candidate_issues():
    """Use Search API (deduplicated) instead of scanning ~7.5k open issues."""
    queries = [
        f"repo:{REPO} is:issue is:open label:production-incident",
        f"repo:{REPO} is:issue is:open P0 in:title",
        f"repo:{REPO} is:issue is:open P1 in:title",
    ]
    found = {}
    for query in queries:
        for page in range(1, 6):
            params = urllib.parse.urlencode(
                {"q": query, "per_page": 100, "page": page, "sort": "updated", "order": "desc"}
            )
            payload = request_json(
                "GET", f"https://api.github.com/search/issues?{params}", GITHUB_TOKEN
            )
            items = payload.get("items", [])
            for item in items:
                found[item["number"]] = item
            if len(items) < 100:
                break
    return list(found.values())


def is_in_scope(issue):
    if issue.get("state") != "open" or "pull_request" in issue:
        return False
    title = issue.get("title", "")
    lowered = title.lower()
    if any(fragment in lowered for fragment in EXCLUDED_TITLE_FRAGMENTS):
        return False
    labels = {label.get("name", "") for label in issue.get("labels", [])}
    return bool(re.match(r"\s*P[01]\b", title, re.IGNORECASE)) or (
        "production-incident" in labels
    )


def notion_properties(issue, include_title=True):
    number = issue["number"]
    title = issue.get("title", "").strip()
    item_title = f"GH #{number} — {title}"[:2000]
    labels = ", ".join(
        sorted(label.get("name", "") for label in issue.get("labels", []))
    ) or "none"
    today = _dt.datetime.now(_dt.timezone.utc).date().isoformat()
    detail = (
        f"Auto-triaged {today} from GitHub P0/P1. Open, "
        f"comments {issue.get('comments', 0)}, labels {labels}. "
        f"Source: {issue.get('html_url', '')}"
    )[:2000]
    props = {
        "Data": {"date": {"start": (issue.get("created_at") or today)[:10]}},
        "Detalhe": {"rich_text": [{"text": {"content": detail}}]},
        "PR": {"rich_text": [{"text": {"content": issue.get("html_url", "")}}]},
        "Status": {"select": {"name": "Aberto"}},
        "Tipo": {"select": {"name": "Incidente"}},
    }
    if include_title:
        props["Item"] = {"title": [{"text": {"content": item_title}}]}
    return item_title, props


def notion_existing_page_id(item_title):
    payload = request_json(
        "POST",
        f"https://api.notion.com/v1/databases/{DATABASE_ID}/query",
        NOTION_TOKEN,
        {"filter": {"property": "Item", "title": {"equals": item_title}}, "page_size": 1},
    )
    results = payload.get("results", [])
    return results[0]["id"] if results else None


def sync_issue(issue):
    item_title, create_props = notion_properties(issue, include_title=True)
    page_id = notion_existing_page_id(item_title)
    if page_id:
        _, update_props = notion_properties(issue, include_title=False)
        request_json(
            "PATCH",
            f"https://api.notion.com/v1/pages/{page_id}",
            NOTION_TOKEN,
            {"properties": update_props},
        )
        return "updated"
    request_json(
        "POST",
        "https://api.notion.com/v1/pages",
        NOTION_TOKEN,
        {"parent": {"database_id": DATABASE_ID}, "properties": create_props},
    )
    return "created"


def main():
    if not NOTION_TOKEN:
        print("::warning::NOTION_TOKEN is not set; skipping Notion triage sync.")
        return 0
    issues = [issue for issue in github_candidate_issues() if is_in_scope(issue)]
    issues.sort(key=lambda item: item.get("created_at", ""))
    created = updated = 0
    for issue in issues:
        action = sync_issue(issue)
        created += action == "created"
        updated += action == "updated"
        print(f"{action}: GH #{issue['number']} {issue.get('title', '')}")
    print(f"Done. created={created} updated={updated} total={len(issues)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
