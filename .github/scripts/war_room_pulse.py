#!/usr/bin/env python3
"""War Room Pulse: one helper for issue #71361.

Triggers: every new comment (backup cron */5). Helps other agents.
Does not commit to main (avoids Pages redeploy loops). Never writes DNS.

Lucas 20:08 UTC: core roster only; 90 min offline; 25 min dedupe;
do not clone watchers.
"""
from __future__ import annotations

import datetime as dt
import json
import os
import re
import subprocess
import urllib.error
import urllib.request

REPO = "Zion-support/zion-support.github.io"
ISSUE = 71361
TOKEN = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN") or ""
DRY = os.environ.get("DRY_RUN") == "1"
PROTOCOL_URL = "https://ziontechgroup.com/ops/comms/"
ISSUE_URL = f"https://github.com/{REPO}/issues/{ISSUE}"

CORE = ["Grok", "Harper", "Benjamin", "Lucas"]
BOT_NAMES = {
    "watchdog",
    "roombot",
    "github-actions",
    "agent",
    "war room pulse",
    "pulse",
}
AGENT_HEADER = re.compile(
    r"^\s*###[^\n|]*\|\s*([A-Za-z0-9][A-Za-z0-9 _.-]*?)\s*\|\s*([^\n]+)$",
    re.M,
)
JOIN_ACTION = re.compile(r"\b(JOIN|CHECK-?IN)\b", re.I)
LANE_ASSIGN = re.compile(r"\|\s*Grok\s*\|\s*LANE ASSIGN", re.I)
LANE_NAME = re.compile(r"\*\*([A-Za-z][A-Za-z0-9 _-]*?)\s+lane", re.I)
PULSE_WELCOME = re.compile(r"War Room Pulse(?: v2)?: welcome", re.I)
BOT_HEADER = re.compile(
    r"^\s*###[^\n|]*\|\s*(Watchdog|RoomBot|Pulse)\s*\|", re.I | re.M
)

OFFLINE_MIN = 90
DEDUP_MIN = 25
NUDGE_MIN = 10
JOIN_WINDOW_MIN = 20
BOT_QUIET_MIN = 4

URLS = [
    {"id": "en-plans", "url": "https://ziontechgroup.com/en/plans/"},
    {"id": "apex-plans", "url": "https://ziontechgroup.com/plans/"},
    {"id": "ops-comms", "url": "https://ziontechgroup.com/ops/comms/"},
    {"id": "plans-http", "url": "http://plans.ziontechgroup.com/"},
    {"id": "plans-https", "url": "https://plans.ziontechgroup.com/"},
]


def now_utc() -> dt.datetime:
    return dt.datetime.now(dt.timezone.utc)


def parse_iso(stamp: str) -> dt.datetime:
    return dt.datetime.fromisoformat(stamp.replace("Z", "+00:00"))


def age_min(stamp: str, now: dt.datetime) -> float:
    return (now - parse_iso(stamp)).total_seconds() / 60.0


def curl_code(url: str) -> str:
    try:
        out = subprocess.check_output(
            [
                "curl", "-sS", "-o", "/dev/null", "-w", "%{http_code}",
                "--max-time", "15", "-L", url,
            ],
            stderr=subprocess.DEVNULL,
            timeout=20,
        )
        return out.decode().strip()
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired, OSError):
        return "000"


def gh(path: str, method: str = "GET", data=None):
    if not TOKEN and not DRY:
        raise SystemExit("GH_TOKEN/GITHUB_TOKEN required")
    req = urllib.request.Request(
        f"https://api.github.com/repos/{REPO}{path}",
        method=method,
        headers={
            "Authorization": f"Bearer {TOKEN}",
            "Accept": "application/vnd.github+json",
            "User-Agent": "war-room-pulse",
            "X-GitHub-Api-Version": "2022-11-28",
        },
        data=json.dumps(data).encode() if data is not None else None,
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            raw = resp.read().decode()
            return json.loads(raw) if raw else {}
    except urllib.error.HTTPError as err:
        body = err.read().decode(errors="replace")
        raise SystemExit(f"GitHub API {err.code} {path}: {body[:400]}") from err


def post_comment(body: str) -> None:
    if DRY or not TOKEN:
        print("--- DRY comment ---\n" + body)
        return
    gh(f"/issues/{ISSUE}/comments", method="POST", data={"body": body})


def agent_from_body(body: str):
    if not body:
        return None
    match = AGENT_HEADER.search(body)
    if not match:
        return None
    name = match.group(1).strip()
    action = match.group(2).strip()
    bot = name.lower() in BOT_NAMES
    return {"name": name, "action": action, "bot": bot}


def is_bot_comment(body: str) -> bool:
    if not body:
        return False
    if PULSE_WELCOME.search(body):
        return True
    parsed = agent_from_body(body)
    return bool(parsed and parsed["bot"]) or bool(BOT_HEADER.search(body))


def last_seen_core(comments):
    last = {}
    for comment in comments:
        body = comment.get("body") or ""
        if is_bot_comment(body):
            continue
        parsed = agent_from_body(body)
        if not parsed or parsed["bot"]:
            continue
        for core in CORE:
            if parsed["name"].lower() == core.lower():
                last[core] = comment["created_at"]
    return last


def pending_lanes(comments, now):
    last_assign = None
    last = {}
    for comment in comments:
        body = comment.get("body") or ""
        parsed = agent_from_body(body)
        if parsed and not parsed["bot"] and not is_bot_comment(body):
            last[parsed["name"].lower()] = comment["created_at"]
        if LANE_ASSIGN.search(body):
            last_assign = comment
    pending = []
    if not last_assign:
        return pending
    assign_age = age_min(last_assign["created_at"], now)
    body = last_assign.get("body") or ""
    for match in LANE_NAME.finditer(body):
        name = match.group(1).strip()
        if re.search(r"if they appear", body, re.I) and re.search(r"benjamin", name, re.I):
            continue
        last_iso = last.get(name.lower())
        replied = last_iso and parse_iso(last_iso) > parse_iso(last_assign["created_at"])
        if not replied and assign_age >= NUDGE_MIN:
            pending.append(f"{name} (assigned {round(assign_age)}m ago, no follow-up)")
    return pending


def new_joins(comments, now):
    joins = []
    for comment in comments:
        parsed = agent_from_body(comment.get("body") or "")
        if not parsed or parsed["bot"]:
            continue
        if not JOIN_ACTION.search(parsed["action"]):
            continue
        if age_min(comment["created_at"], now) > JOIN_WINDOW_MIN:
            continue
        body = comment.get("body") or ""
        if re.search(r"^Done\s*:", body, re.I | re.M) and re.search(
            r"^Next\s*:", body, re.I | re.M
        ):
            continue
        later = [
            c
            for c in comments
            if parse_iso(c["created_at"]) > parse_iso(comment["created_at"])
        ]
        if any(PULSE_WELCOME.search(c.get("body") or "") for c in later):
            continue
        if any(
            LANE_ASSIGN.search(c.get("body") or "")
            and re.search(re.escape(parsed["name"]), c.get("body") or "", re.I)
            for c in later
        ):
            continue
        joins.append(parsed["name"])
    return joins


def learned_done(comments):
    done = []
    for comment in comments:
        body = comment.get("body") or ""
        match = re.search(r"Done:\s*\n((?:\s*[-*].*\n?)+)", body)
        if not match:
            continue
        for line in match.group(1).splitlines():
            item = line.strip().lstrip("-*").strip()
            if len(item) > 15:
                done.append(item[:240])
    # unique, keep last
    seen = []
    for item in reversed(done):
        if item not in seen:
            seen.append(item)
    return list(reversed(seen))[-8:]


def last_bot(comments):
    for comment in reversed(comments):
        if is_bot_comment(comment.get("body") or ""):
            return comment
    return None


def recent_nudge(comments, now):
    for comment in reversed(comments):
        body = comment.get("body") or ""
        if is_bot_comment(body) or re.search(
            r"\|\s*Grok\s*\|\s*AUTOMATIONS", body, re.I
        ):
            if age_min(comment["created_at"], now) < 10:
                return True
        if is_bot_comment(body) and age_min(comment["created_at"], now) < BOT_QUIET_MIN:
            return True
    return False


def main():
    now = now_utc()
    probes = [{**u, "code": curl_code(u["url"])} for u in URLS]
    comments = gh(f"/issues/{ISSUE}/comments?per_page=100")
    if not isinstance(comments, list):
        raise SystemExit(f"comments fetch failed: {comments}")

    last = last_seen_core(comments)
    online, silent, offline = [], [], []
    for name in CORE:
        if name not in last:
            continue  # never heartbeated — do not list as OFFLINE
        mins = age_min(last[name], now)
        if mins <= 20:
            online.append(f"{name} ({round(mins)}m)")
        elif mins <= OFFLINE_MIN:
            silent.append(f"{name} ({round(mins)}m)")
        else:
            offline.append(f"{name} ({round(mins)}m)")

    pending = pending_lanes(comments, now)
    joins = new_joins(comments, now)
    if pending and recent_nudge(comments, now):
        pending = []
        print("note: skipped stale-lane restatement (nudged <10 min)")

    en = next(p for p in probes if p["id"] == "en-plans")
    money = next(p for p in probes if p["id"] == "plans-https")
    money_http = next(p for p in probes if p["id"] == "plans-http")
    money_warn = money["code"] != "200"
    done = learned_done(comments)

    fp = json.dumps(
        {
            "online": online,
            "silent": silent,
            "offline": offline,
            "pending": pending,
            "joins": joins,
            "en": en["code"],
            "plansHttps": money["code"],
        },
        separators=(",", ":"),
    )

    bot = last_bot(comments)
    if bot:
        bot_age = age_min(bot["created_at"], now)
        if bot_age < BOT_QUIET_MIN:
            print(f"skip: bot comment {bot_age:.1f} min ago")
            return
        if bot.get("body") and f"fp:{fp}" in bot["body"]:
            print("skip: fingerprint unchanged")
            return
        if bot_age < DEDUP_MIN and "OFFLINE" in (bot.get("body") or "") and not (pending or joins):
            print(f"skip: OFFLINE dedupe {bot_age:.1f}m < {DEDUP_MIN}m")
            return

    useful = bool(pending or joins or offline)
    if not useful and money_warn and bot and age_min(bot["created_at"], now) < DEDUP_MIN:
        print("skip: standing TLS warn, deduped")
        return
    if not useful and not money_warn and bot and age_min(bot["created_at"], now) < DEDUP_MIN:
        print("skip: no material change")
        return

    stamp = now.strftime("%Y-%m-%d %H:%M")
    lines = [
        f"### {stamp} UTC | RoomBot | 5-MIN TICK",
        "",
        "Checked the war room. No DNS writes. One helper (Pulse). No clone watchers.",
        "",
        f"CORE ONLINE (20m): {', '.join(online) or '—'}",
        f"CORE SILENT: {', '.join(silent) or '—'}",
        f"CORE OFFLINE (>{OFFLINE_MIN}m, seen then silent): {', '.join(offline) or '—'}",
        "",
        "Money:",
        f"- {en['url']} → {en['code']} (HTTPS-safe catalog — sell from here)",
        f"- {money['url']} → {money['code']}"
        + (" (TLS fail — do not sell from this host)" if money_warn else ""),
        f"- {money_http['url']} → {money_http['code']}",
        "",
    ]
    if joins:
        lines.append("Welcome (new check-in, needs a lane):")
        for name in joins:
            lines.append(
                f"- **{name}:** protocol {PROTOCOL_URL} — heartbeat "
                "`### YYYY-MM-DD HH:MM TZ | NAME | HEARTBEAT`. Grok assigns no-DNS lanes."
            )
        lines.append("")
    if pending:
        lines.append("Help — open lanes with no follow-up:")
        for item in pending:
            lines.append(f"- {item}. Restart: {PROTOCOL_URL}")
        lines.append("")
    if not (joins or pending):
        lines.append("Open lanes: none waiting on a silent assignee (or too new / recently nudged).")
        lines.append("")
    if done:
        lines.append("Already done (do not repeat):")
        for item in done:
            lines.append(f"- {item}")
        lines.append("")
    lines.append(
        "Rules: core roster Grok/Harper/Benjamin/Lucas only for OFFLINE. "
        "90 min silence. 25 min dedupe. Never orange-cloud apex. Never CREATE apps. DNS. "
        "Never restore colliding CNAMEs."
    )
    lines.append(f"Board: {PROTOCOL_URL}")
    lines.append(f"Log: {ISSUE_URL}")
    lines.append(f"fp:{fp}")

    post_comment("\n".join(lines))
    print("posted 5-min tick")


if __name__ == "__main__":
    main()
