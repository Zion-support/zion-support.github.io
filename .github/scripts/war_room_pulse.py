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
ISSUE_START = "<!-- war-room-issue:v1 -->"
ISSUE_END = "<!-- /war-room-issue:v1 -->"
FP_RE = re.compile(r"<!-- war-room-fp:([0-9a-f]+) -->")
ISSUE_STAMP_RE = re.compile(r"## Keep working \((\d{4}-\d{2}-\d{2} \d{2}:\d{2}) UTC\)")
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
    "hermes-dispatch", "nightwatch",
})
NOISE_NAMES = frozenset({
    "watchdog", "hermes-dispatch", "nightwatch", "pulse",
})
STANDBY_STATUS_RE = re.compile(r"(?im)^Status:\s*STANDBY\b")
SKIP_NAMES = frozenset({
    "agent", "your_name", "your-name", "name", "your_name | heartbeat",
})
OFFLINE_AFTER_MIN = 90
ACTIVE_AFTER_MIN = 20
FORCE_REFRESH_MIN = 25
SLACK_COOLDOWN_MIN = 30
MAX_PAGES = 15
SLACK_CHANNEL = "C094KS4ALM6"
SLACK_RE = re.compile(r"<!-- war-room-slack:([0-9T:\+\-]+) -->")

# Open lanes keep agents moving. Never tell anyone to sit in STANDBY.
LANES = (
    {
        "id": "comms",
        "title": "Comms — Carlos-first mail",
        "owners": ("comms", "carol"),
        "next": (
            "Inbox + labels oldest→newest. Reply-All. "
            "CC carlos@ AND commercial@. HARD SKIP list. No nag Carlos same day."
        ),
    },
    {
        "id": "lead",
        "title": "Lead — unblock collisions",
        "owners": ("grok",),
        "next": "Unblock OPEN lanes. Never CREATE apps. DNS. Never orange-cloud.",
    },
    {
        "id": "pages",
        "title": "Pages / deploy watch",
        "owners": ("harper", "lucas"),
        "next": "Let Pages finish. Do not cancel deploys. Do not write board JSON to main.",
    },
    {
        "id": "pulse",
        "title": "Pulse standing card",
        "owners": ("comms", "lucas", "harper"),
        "next": "Pulse PATCHes this card. Do not clone HEARTBEAT of Pulse onto #71361.",
    },
    {
        "id": "monitor",
        "title": "Hermes monitor",
        "owners": ("hermes",),
        "next": "STATUS.md only (Pages ignores it). Hourly check-in max. Do not flood.",
    },
)


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


def is_noise_comment(comment):
    """Watchdog OFFLINE roster, Hermes-Dispatch LANE, Pulse v2 welcome — do not clone."""
    if is_standing_comment(comment):
        return True
    body = (comment or {}).get("body") or ""
    head = body[:500].lower()
    if "offline roster" in head:
        return True
    if "hermes: take this one task" in head:
        return True
    if "war room pulse:" in head and "welcome" in head:
        return True
    header = parse_header(body)
    if header and header["name"].strip().lower() in NOISE_NAMES:
        return True
    return False


def is_bot_comment(comment):
    if is_standing_comment(comment):
        return True
    login = ((comment or {}).get("user") or {}).get("login") or ""
    if is_bot_login(login):
        return True
    if is_noise_comment(comment):
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
        or "| claim" in head
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


def display_name(name, existing):
    cleaned = (name or "").strip()
    key = cleaned.lower()
    if not cleaned or key in SKIP_NAMES or is_bot_name(cleaned) or is_bot_login(cleaned):
        return None
    for known in existing:
        if known.lower() == key:
            return known
    return cleaned


def parse_agents(comments, now):
    agents = {}
    for comment in comments:
        if is_standing_comment(comment):
            continue
        header = parse_header(comment.get("body") or "")
        login = ((comment.get("user") or {}).get("login")) or "unknown"
        raw = header["name"] if header else login
        name = display_name(raw, agents)
        if name is None:
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


def lane_owner_row(agents, owners):
    owners_l = {o.lower() for o in owners}
    for name, row in agents.items():
        if name.lower() in owners_l:
            return name, row
    return None, None


def lane_states(agents):
    out = []
    for lane in LANES:
        name, row = lane_owner_row(agents, lane["owners"])
        live = bool(row and row.get("status") in ("ACTIVE", "ONLINE"))
        out.append({
            "id": lane["id"],
            "title": lane["title"],
            "next": lane["next"],
            "state": "CLAIMED" if live else "OPEN",
            "who": name,
            "status": (row or {}).get("status") or "EMPTY",
        })
    return out


def first_open_lane(lanes):
    for row in lanes or []:
        if row.get("state") == "OPEN":
            return row
    return (lanes or [None])[0]


def comment_is_standby(body):
    header = parse_header(body or "")
    if header and header["action"].upper() == "STANDBY":
        return True
    return bool(STANDBY_STATUS_RE.search(body or ""))


def standby_stuck(comments, now, within_min=OFFLINE_AFTER_MIN):
    """Names whose latest check-in in the window is STANDBY — unstick them."""
    latest = {}
    existing = {}
    for comment in comments:
        if is_bot_comment(comment):
            continue
        body = comment.get("body") or ""
        mins = minutes_ago(comment.get("created_at") or "", now)
        if mins is None or mins > within_min:
            continue
        header = parse_header(body)
        login = ((comment.get("user") or {}).get("login")) or "agent"
        raw = header["name"] if header else login
        name = display_name(raw, existing)
        if name is None:
            continue
        existing[name] = True
        latest[name] = comment_is_standby(body)
    return [name for name, stuck in latest.items() if stuck]


def join_snippet(lane=None):
    """Paste-ready first comment. Never mentions STANDBY."""
    lane = lane or LANES[0]
    lane_id = lane.get("id") if isinstance(lane, dict) else "comms"
    title = lane.get("title") if isinstance(lane, dict) else LANES[0]["title"]
    nxt = lane.get("next") if isinstance(lane, dict) else LANES[0]["next"]
    return (
        "### YYYY-MM-DD HH:MM TZ | YOUR_NAME | JOIN\n"
        f"Lane: {lane_id}\n"
        f"Claimed: {title}\n"
        "Status: ONLINE\n"
        f"Next: {nxt}\n"
        f"URLs checked: {PLANS_URL}, {DISCOVERY_URL}"
    )


def extract_slack_stamp(body):
    match = SLACK_RE.search(body or "")
    return match.group(1) if match else ""


def slack_keepalive_text(lanes=None):
    """Slack ping that starts work. Never says the room is dead."""
    first = first_open_lane(lanes)
    title = (first or {}).get("title") or LANES[0]["title"]
    lane_id = (first or {}).get("id") or LANES[0]["id"]
    return (
        f"War room keep-running: claim *{title}* now. "
        "Do not sit in STANDBY. Do not wait for Grok. "
        f"First comment on #71361 is JOIN — YOUR_NAME | JOIN · Lane: {lane_id} · Status: ONLINE. "
        f"Board: {BOARD_URL} "
        f"Sell only {PLANS_URL} and {DISCOVERY_URL}."
    )


def slack_unstick_text(names, lanes=None):
    """Slack ping when someone joined STANDBY instead of working."""
    who = ", ".join(names) if names else "an agent"
    first = first_open_lane(lanes)
    title = (first or {}).get("title") or LANES[0]["title"]
    return (
        f"War room unstick: {who} sat in STANDBY. Claim *{title}* now. "
        "Paste JOIN with Status: ONLINE. Do not wait for Grok. "
        f"Board: {BOARD_URL}"
    )


def should_slack_keepalive(agents, last_slack_iso, now, cooldown_min=SLACK_COOLDOWN_MIN):
    """Ping Slack only when the room is empty, and at most once per cooldown."""
    if any(row.get("status") in ("ACTIVE", "ONLINE") for row in agents.values()):
        return False
    if last_slack_iso:
        mins = minutes_ago(last_slack_iso, now)
        if mins is not None and mins < cooldown_min:
            return False
    return True


def should_slack_unstick(stuck, last_slack_iso, now, cooldown_min=SLACK_COOLDOWN_MIN):
    if not stuck:
        return False
    if last_slack_iso:
        mins = minutes_ago(last_slack_iso, now)
        if mins is not None and mins < cooldown_min:
            return False
    return True


def slack_keepalive(text):
    webhook = os.environ.get("SLACK_WEBHOOK_URL") or ""
    token = os.environ.get("SLACK_BOT_TOKEN") or ""
    channel = os.environ.get("SLACK_CHANNEL") or SLACK_CHANNEL
    payload = {"text": text}
    try:
        if webhook:
            req = urllib.request.Request(
                webhook,
                method="POST",
                headers={"Content-Type": "application/json", "User-Agent": "war-room-pulse"},
                data=json.dumps(payload).encode(),
            )
            with urllib.request.urlopen(req, timeout=20) as resp:
                resp.read()
            return "webhook"
        if token:
            payload = {"channel": channel, "text": text}
            req = urllib.request.Request(
                "https://slack.com/api/chat.postMessage",
                method="POST",
                headers={
                    "Authorization": f"Bearer {token}",
                    "Content-Type": "application/json; charset=utf-8",
                    "User-Agent": "war-room-pulse",
                },
                data=json.dumps(payload).encode(),
            )
            with urllib.request.urlopen(req, timeout=20) as resp:
                raw = resp.read()
            body = json.loads(raw) if raw else {}
            if not body.get("ok"):
                print(f"Pulse Slack keepalive skipped: {body.get('error') or 'not_ok'}")
                return None
            return "api"
    except Exception as exc:
        print(f"Pulse Slack keepalive skipped: {exc}")
        return None
    print("Pulse Slack keepalive skipped: no SLACK_WEBHOOK_URL or SLACK_BOT_TOKEN")
    return None


def fingerprint_for(agents, done, checkins, last_human_id, lanes=None, stuck=None):
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
        "lanes": [
            {"id": row["id"], "state": row["state"]}
            for row in (lanes or [])
        ],
        "stuck": list(stuck or []),
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


def render_standing(now, agents, done, checkins, fingerprint, lanes=None, slack_stamp="", stuck=None):
    stamp = now.strftime("%Y-%m-%d %H:%M UTC")
    online = sum(1 for a in agents.values() if a["status"] in ("ACTIVE", "ONLINE"))
    offline = [name for name, row in sorted(agents.items()) if row["status"] == "OFFLINE"]
    lanes = lanes if lanes is not None else lane_states(agents)
    open_lanes = [row for row in lanes if row["state"] == "OPEN"]
    lines = [
        STANDING_MARKER,
        f"<!-- war-room-fp:{fingerprint} -->",
    ]
    if slack_stamp:
        lines.append(f"<!-- war-room-slack:{slack_stamp} -->")
    lines.extend([
        f"### {stamp} | Pulse | STANDING",
        "",
        "**Keep working. Do not sit in STANDBY. Do not wait for Grok.** "
        "This card is edited in place every ~5 min. "
        "Do not wait for a new Pulse comment. Heartbeat every 15 min while working.",
        "",
        f"**Roster** ({online} ACTIVE/ONLINE, offline = silent >{OFFLINE_AFTER_MIN} min, "
        f"ACTIVE = seen ≤{ACTIVE_AFTER_MIN} min)",
    ])
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
        welcome_lane = first_open_lane(lanes)
        welcome_title = (welcome_lane or {}).get("title") or "first OPEN lane"
        lines.append(
            "Welcome. You already have a lane: **" + welcome_title + "**. "
            "Do not wait. Help Carlos first. Paste JOIN only once, then HEARTBEAT every 15 min."
        )
        lines.append("")
    if stuck:
        unstick_lane = first_open_lane(lanes)
        unstick_title = (unstick_lane or {}).get("title") or LANES[0]["title"]
        lines.append("**Unstick — STANDBY is not a lane:** " + ", ".join(stuck))
        lines.append(
            "Claim **" + unstick_title + "** now. Paste JOIN with Status: ONLINE, then work. "
            "Do not wait for Grok."
        )
        lines.append("")
    if offline:
        lines.append("**Silent >90 min — do not wait for them:** " + ", ".join(offline))
        lines.append(
            "Their lanes are OPEN. Claim one, paste JOIN, and keep working. "
            f"Restart prompt: {BOARD_URL}"
        )
        lines.append("")
    lines.append(
        "**Lanes — claim one OPEN lane and keep going.** "
        "Do not wait for a lane assignment."
    )
    if lanes:
        for row in lanes:
            who = f" · {row['who']} {row['status']}" if row.get("who") else " · unclaimed"
            lines.append(f"- **{row['state']}** · {row['title']}{who} — {row['next']}")
        if open_lanes:
            lines.append(
                "First OPEN lane for a new agent: **" + open_lanes[0]["title"] + "**"
            )
    else:
        lines.append("- (lanes unavailable)")
    first = first_open_lane(lanes)
    lines.extend([
        "",
        "**Paste JOIN (replace YOUR_NAME) then keep working:**",
        "```",
        join_snippet(first),
        "```",
    ])
    lines.extend([
        "",
        "**Do not stop**",
        "- If you are in this room, work. Paste the restart prompt if you just woke.",
        "- Ignore Watchdog OFFLINE roster and Hermes-Dispatch LANE clones. Do not restart silent peers.",
        "- Do not write board JSON (`log` / `state` / `agents`) onto main.",
        "- Do not cancel GitHub Pages. Hermes `STATUS.md` is ignored by deploy.",
        "- Do not flood #71361 with HEARTBEAT clones of this card. Slack is real time.",
        "",
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
            "lanes": lanes,
        }, indent=2, sort_keys=True),
        "```",
    ])
    return "\n".join(lines) + "\n"


def render_issue_card(now, lanes, fingerprint):
    """Keep-running banner on the issue itself so agents who skip the board still move."""
    first = first_open_lane(lanes)
    open_titles = [row["title"] for row in (lanes or []) if row.get("state") == "OPEN"]
    stamp = now.strftime("%Y-%m-%d %H:%M UTC")
    listed = ", ".join(open_titles) if open_titles else "all claimed — pick any lane and help"
    start = (first or {}).get("title") or "first OPEN lane"
    return "\n".join([
        ISSUE_START,
        f"<!-- war-room-fp:{fingerprint} -->",
        f"## Keep working ({stamp})",
        "",
        "**Do not sit in STANDBY. Do not wait for Grok.** Claim one OPEN lane and keep going.",
        f"Board (live roster + restart prompt): {BOARD_URL}",
        "Real time: Slack `#cursor_channel`. This issue is the durable log only.",
        "Ignore Watchdog OFFLINE roster and Hermes-Dispatch LANE clones — do not restart silent peers.",
        "",
        f"**OPEN lanes:** {listed}",
        f"**Start here:** {start}",
        "",
        "**Paste JOIN as your first comment (replace YOUR_NAME), then work:**",
        "```",
        join_snippet(first),
        "```",
        "",
        f"Sell only {PLANS_URL} and {DISCOVERY_URL}. Help Carlos first. Reply-All. Dual CC.",
        "Never orange-cloud. Never CREATE apps. DNS. Never colliding CNAMEs.",
        ISSUE_END,
    ]) + "\n"


def merge_issue_body(existing, card):
    existing = existing or ""
    card = (card or "").strip()
    if ISSUE_START in existing and ISSUE_END in existing:
        pattern = re.compile(
            re.escape(ISSUE_START) + r".*?" + re.escape(ISSUE_END),
            re.S,
        )
        updated, count = pattern.subn(card, existing, count=1)
        return updated if count else card + "\n\n" + existing.lstrip()
    if existing.strip():
        return card + "\n\n" + existing.lstrip()
    return card + "\n"


def issue_card_age_min(existing, now):
    match = ISSUE_STAMP_RE.search(existing or "")
    if not match:
        return None
    try:
        stamped = datetime.datetime.strptime(match.group(1), "%Y-%m-%d %H:%M").replace(
            tzinfo=datetime.timezone.utc
        )
    except ValueError:
        return None
    return max(0, int((now - stamped).total_seconds() // 60))


def needs_issue_body_update(existing, fingerprint, now=None):
    if ISSUE_START not in (existing or ""):
        return True
    if extract_fingerprint(existing) != fingerprint:
        return True
    if now is not None:
        age = issue_card_age_min(existing, now)
        if age is None or age >= FORCE_REFRESH_MIN:
            return True
    return False


def upsert_standing(standing, body):
    if standing is None:
        created = gh(f"/issues/{ISSUE}/comments", method="POST", data={"body": body})
        return "created", created.get("id")
    gh(f"/issues/comments/{standing['id']}", method="PATCH", data={"body": body})
    return "patched", standing["id"]


def upsert_issue_card(fingerprint, now, lanes):
    issue = gh(f"/issues/{ISSUE}")
    existing = issue.get("body") or ""
    if not needs_issue_body_update(existing, fingerprint, now):
        return "skipped"
    merged = merge_issue_body(existing, render_issue_card(now, lanes, fingerprint))
    if merged == existing:
        return "skipped"
    gh(f"/issues/{ISSUE}", method="PATCH", data={"body": merged})
    return "patched"


def main(argv=None):
    del argv
    now = datetime.datetime.now(datetime.timezone.utc)
    comments = gh_paginate_comments()
    agents = parse_agents(comments, now)
    done = learn_actions(comments)
    checkins = recent_checkins(comments, now)
    stuck = standby_stuck(comments, now)
    last_human = last_human_comment_id(comments)
    lanes = lane_states(agents)
    fingerprint = fingerprint_for(agents, done, checkins, last_human, lanes, stuck)
    standing = find_standing(comments)
    slack_stamp = extract_slack_stamp((standing or {}).get("body") or "")
    slack_posted = False
    if should_slack_keepalive(agents, slack_stamp, now):
        posted = slack_keepalive(slack_keepalive_text(lanes))
        if posted:
            slack_stamp = now.replace(microsecond=0).isoformat()
            slack_posted = True
    elif should_slack_unstick(stuck, slack_stamp, now):
        posted = slack_keepalive(slack_unstick_text(stuck, lanes))
        if posted:
            slack_stamp = now.replace(microsecond=0).isoformat()
            slack_posted = True
    issue_action = upsert_issue_card(fingerprint, now, lanes)
    if not needs_update(standing, fingerprint, now) and not slack_posted:
        print(
            f"Pulse v3 skip standing: fingerprint {fingerprint} unchanged, "
            f"issue body {issue_action}, {len(comments)} comments, {len(agents)} agents "
            f"({sum(1 for a in agents.values() if a['status'] in ('ACTIVE', 'ONLINE'))} live)."
        )
        return 0
    body = render_standing(now, agents, done, checkins, fingerprint, lanes, slack_stamp, stuck)
    action, comment_id = upsert_standing(standing, body)
    print(
        f"Pulse v3 {action} comment {comment_id}: {len(comments)} comments, "
        f"{len(agents)} agents, {len(done)} learned actions, "
        f"{len(checkins)} recent check-ins, {sum(1 for row in lanes if row['state']=='OPEN')} open lanes, "
        f"issue body {issue_action}, fp {fingerprint}."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
