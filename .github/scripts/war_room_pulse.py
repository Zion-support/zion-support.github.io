#!/usr/bin/env python3
"""War Room Pulse v3: keep agents moving without flooding #71361 or committing main.

Edits ONE standing comment (<!-- war-room-standing:v1 -->) in place.
Does not git-commit log.json / state.json / agents.json (those pushes
cancelled GitHub Pages while Hermes was also writing STATUS.md).
Does not post a new RoomBot comment every 5 minutes.

Hard rules (never violate):
- Never orange-cloud the apex. Never CREATE apps. DNS.
- Never point colliding repo CNAMEs at satellite hosts.
"""
from __future__ import annotations

import datetime
import hashlib
import json
import os
import re
import sys
import urllib.error
import urllib.request

REPO = "Zion-support/zion-support.github.io"
ISSUE = 71361
BOARD_URL = "https://ziontechgroup.com/ops/comms/"
CEO_OPS_URL = f"{BOARD_URL}CEO-OPS.md"
ISSUE_URL = f"https://github.com/{REPO}/issues/{ISSUE}"
PLANS_URL = "https://ziontechgroup.com/en/plans/"
DISCOVERY_URL = "https://ziontechgroup.com/discovery/"
STANDING_MARKER = "<!-- war-room-standing:v1 -->"
FP_RE = re.compile(r"<!-- war-room-fp:([0-9a-f]+) -->")
HEADER_RE = re.compile(
    r"^###\s+([\d\-]+)\s+([\d:]+)\s+(\S+)\s*\|\s*([^|]+?)\s*\|\s*(\S+)",
    re.M,
)
BOT_LOGINS = frozenset({
    "github-actions[bot]",
    "github-actions",
})
BOT_NAMES = frozenset({
    "pulse", "watchdog", "roombot", "war room pulse", "agent presence watchdog",
})
OFFLINE_AFTER_MIN = 90
ACTIVE_AFTER_MIN = 20
FORCE_REFRESH_MIN = 25
MAX_PAGES = 15


def github_token():
    return os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN") or ""


def gh(path, method="GET", data=None):
    token = github_token()
    if not token:
        raise SystemExit("GH_TOKEN (or GITHUB_TOKEN) is required")
    body = json.dumps(data).encode() if data is not None else None
    req = urllib.request.Request(
        f"https://api.github.com/repos/{REPO}{path}",
        method=method,
        headers={
            "Authorization": f"Bearer {token}",
            "Accept": "application/vnd.github+json",
            "User-Agent": "war-room-pulse",
            "X-GitHub-Api-Version": "2022-11-28",
        },
        data=body,
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            raw = resp.read()
            return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as exc:
        err = exc.read().decode("utf-8", "replace")[:800]
        raise SystemExit(f"GitHub API {method} {path} -> {exc.code}: {err}") from exc


def gh_paginate_comments(issue=ISSUE):
    items = []
    for page in range(1, MAX_PAGES + 1):
        chunk = gh(f"/issues/{issue}/comments?per_page=100&page={page}")
        if not isinstance(chunk, list) or not chunk:
            break
        items.extend(chunk)
        if len(chunk) < 100:
            break
    return items


def parse_header(body):
    if not body:
        return None
    match = HEADER_RE.search(body)
    if not match:
        return None
    return {
        "date": match.group(1),
        "time": match.group(2),
        "tz": match.group(3),
        "name": match.group(4).strip(),
        "action": match.group(5).strip(),
    }


def is_bot_login(login):
    return (login or "").lower() in BOT_LOGINS


def is_bot_name(name):
    return (name or "").strip().lower() in BOT_NAMES


def is_standing_comment(comment):
    body = (comment or {}).get("body") or ""
    return STANDING_MARKER in body


def is_bot_comment(comment):
    if is_standing_comment(comment):
        return True
    login = ((comment or {}).get("user") or {}).get("login") or ""
    if is_bot_login(login):
        return True
    header = parse_header((comment or {}).get("body") or "")
    if header and is_bot_name(header["name"]):
        return True
    body = (comment or {}).get("body") or ""
    return "War Room Pulse:" in body and "welcome, agent" in body.lower()


def is_human_checkin(comment):
    """Genuine JOIN/CHECK-IN from a person — never ACTION/HEARTBEAT logs or bots."""
    if is_bot_comment(comment):
        return False
    body = (comment or {}).get("body") or ""
    head = body[:400].lower()
    if "| action" in head or "| heartbeat" in head:
        return False
    return (
        "check-in" in head
        or "check in" in head
        or "| join" in head
        or "| check-in" in head
    )


def minutes_ago(iso_ts, now):
    try:
        seen = datetime.datetime.fromisoformat(iso_ts.replace("Z", "+00:00"))
        if seen.tzinfo is None:
            seen = seen.replace(tzinfo=datetime.timezone.utc)
        return (now - seen).total_seconds() / 60.0
    except Exception:
        return None


def status_for_minutes(mins):
    if mins is None:
        return "UNKNOWN"
    if mins <= ACTIVE_AFTER_MIN:
        return "ACTIVE"
    if mins <= OFFLINE_AFTER_MIN:
        return "ONLINE"
    return "OFFLINE"


def parse_agents(comments, now):
    agents = {}
    for comment in comments:
        if is_standing_comment(comment):
            continue
        header = parse_header(comment.get("body") or "")
        login = ((comment.get("user") or {}).get("login")) or "unknown"
        name = header["name"] if header else login
        if is_bot_name(name) or is_bot_login(name):
            continue
        row = agents.setdefault(name, {
            "comments": 0,
            "last_seen": None,
            "last_action": None,
            "login": login,
        })
        row["comments"] += 1
        row["last_seen"] = comment.get("created_at")
        if header:
            row["last_action"] = header["action"]
            row["login"] = login
    for row in agents.values():
        mins = minutes_ago(row.get("last_seen") or "", now)
        row["minutes_since_seen"] = None if mins is None else int(mins)
        row["status"] = status_for_minutes(mins)
    return agents


def learn_actions(comments, limit=8):
    done = []
    seen = set()
    for comment in comments:
        if is_standing_comment(comment) or is_bot_comment(comment):
            continue
        body = comment.get("body") or ""
        match = re.search(r"Done:\s*\n((?:\s*[-*].*\n?)+)", body)
        if not match:
            continue
        for line in match.group(1).splitlines():
            item = line.strip().lstrip("-*").strip()
            if len(item) < 16:
                continue
            key = item[:300]
            if key in seen:
                continue
            seen.add(key)
            done.append(key)
    return done[-limit:]


def recent_checkins(comments, now, within_min=30):
    names = []
    for comment in comments:
        if not is_human_checkin(comment):
            continue
        mins = minutes_ago(comment.get("created_at") or "", now)
        if mins is None or mins > within_min:
            continue
        header = parse_header(comment.get("body") or "")
        login = ((comment.get("user") or {}).get("login")) or "agent"
        names.append(header["name"] if header else login)
    # preserve order, unique
    out, seen = [], set()
    for name in names:
        key = name.lower()
        if key in seen:
            continue
        seen.add(key)
        out.append(name)
    return out


def find_standing(comments):
    standing = None
    for comment in comments:
        if is_standing_comment(comment):
            standing = comment
    return standing


def fingerprint_for(agents, done, checkins, last_human_id):
    payload = {
        "agents": {
            name: {
                "status": row.get("status"),
                "minutes": row.get("minutes_since_seen"),
                "action": row.get("last_action"),
            }
            for name, row in sorted(agents.items())
        },
        "done": done,
        "checkins": checkins,
        "last_human_id": last_human_id,
    }
    raw = json.dumps(payload, sort_keys=True, separators=(",", ":")).encode()
    return hashlib.sha256(raw).hexdigest()[:16]


def extract_fingerprint(body):
    match = FP_RE.search(body or "")
    return match.group(1) if match else ""


def last_human_comment_id(comments):
    last = 0
    for comment in comments:
        if is_bot_comment(comment):
            continue
        last = max(last, int(comment.get("id") or 0))
    return last


def needs_update(standing, fingerprint, now):
    if standing is None:
        return True
    if extract_fingerprint(standing.get("body") or "") != fingerprint:
        return True
    mins = minutes_ago(standing.get("updated_at") or standing.get("created_at") or "", now)
    return mins is None or mins >= FORCE_REFRESH_MIN


def render_standing(now, agents, done, checkins, fingerprint):
    stamp = now.strftime("%Y-%m-%d %H:%M UTC")
    online = sum(1 for a in agents.values() if a["status"] in ("ACTIVE", "ONLINE"))
    offline = [name for name, row in sorted(agents.items()) if row["status"] == "OFFLINE"]
    lines = [
        STANDING_MARKER,
        f"<!-- war-room-fp:{fingerprint} -->",
        f"### {stamp} | Pulse | STANDING",
        "",
        "**Keep working.** This card is edited in place every ~5 min. "
        "Do not wait for a new Pulse comment. Heartbeat every 15 min while working.",
        "",
        f"**Roster** ({online} ACTIVE/ONLINE, offline = silent >{OFFLINE_AFTER_MIN} min, "
        f"ACTIVE = seen ≤{ACTIVE_AFTER_MIN} min)",
    ]
    if agents:
        for name, row in sorted(agents.items(), key=lambda kv: (kv[1]["status"] != "ACTIVE", kv[0].lower())):
            mins = row.get("minutes_since_seen")
            ago = "unknown" if mins is None else f"{mins}m ago"
            action = row.get("last_action") or "COMMENT"
            lines.append(f"- {name} — **{row['status']}** · {action} · {ago}")
    else:
        lines.append("- (no named heartbeats yet)")
    lines.append("")
    if checkins:
        lines.append("**Just joined** (last 30 min): " + ", ".join(checkins))
        lines.append(
            "Welcome. Format: `### YYYY-MM-DD HH:MM TZ | AGENT | ACTION` "
            "with Done / Blocked / Next / URLs checked. Help Carlos first."
        )
        lines.append("")
    if offline:
        lines.append("**OFFLINE — restart now:** " + ", ".join(offline))
        lines.append(f"Paste the restart prompt on {BOARD_URL} and HEARTBEAT. Do not sit idle.")
        lines.append("")
    lines.extend([
        "**Already done — do not repeat:**",
    ])
    if done:
        lines.extend(f"- {item}" for item in done)
    else:
        lines.append("- (nothing learned yet)")
    lines.extend([
        "",
        f"**Carlos first:** Reply-All, same thread, CC carlos@ziontechgroup.com AND "
        f"commercial@ziontechgroup.com. Law: {CEO_OPS_URL}",
        f"**Sell only:** {PLANS_URL} and {DISCOVERY_URL}",
        "**Hard rules:** never orange-cloud the apex; never CREATE apps. DNS; "
        "never point colliding repo CNAMEs at satellite hosts.",
        "**HARD SKIP:** @caloi.com, ASSEFAZ José/Glauber, extra FAJ/Gyovanna, "
        "no nag Carlos same calendar day. Instant Client Sender stays OFF.",
        f"**Durable log:** {ISSUE_URL} · real time = Slack #cursor_channel",
        "",
        "```json",
        json.dumps({
            "updated_at": now.isoformat(),
            "offline_after_minutes": OFFLINE_AFTER_MIN,
            "active_after_minutes": ACTIVE_AFTER_MIN,
            "agents": agents,
        }, indent=2, sort_keys=True),
        "```",
    ])
    return "\n".join(lines) + "\n"


def upsert_standing(standing, body):
    if standing is None:
        created = gh(f"/issues/{ISSUE}/comments", method="POST", data={"body": body})
        return "created", created.get("id")
    gh(f"/issues/comments/{standing['id']}", method="PATCH", data={"body": body})
    return "patched", standing["id"]


def main(argv=None):
    del argv
    now = datetime.datetime.now(datetime.timezone.utc)
    comments = gh_paginate_comments()
    agents = parse_agents(comments, now)
    done = learn_actions(comments)
    checkins = recent_checkins(comments, now)
    last_human = last_human_comment_id(comments)
    fingerprint = fingerprint_for(agents, done, checkins, last_human)
    standing = find_standing(comments)
    if not needs_update(standing, fingerprint, now):
        print(
            f"Pulse v3 skip: fingerprint {fingerprint} unchanged, "
            f"{len(comments)} comments, {len(agents)} agents "
            f"({sum(1 for a in agents.values() if a['status'] in ('ACTIVE', 'ONLINE'))} live)."
        )
        return 0
    body = render_standing(now, agents, done, checkins, fingerprint)
    action, comment_id = upsert_standing(standing, body)
    print(
        f"Pulse v3 {action} comment {comment_id}: {len(comments)} comments, "
        f"{len(agents)} agents, {len(done)} learned actions, "
        f"{len(checkins)} recent check-ins, fp {fingerprint}."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
