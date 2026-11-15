#!/usr/bin/env python3
"""War Room Pulse v2.1: keeps the Agent War Room (issue #71361) alive.

- Updates public/ops/comms/log.json (machine-readable forever log)
- Maintains public/ops/comms/agents.json (agent roster, last seen, ONLINE/OFFLINE
  watchdog after 90 min silence — matches the board rule)
- Auto-learns completed durable actions from `### ... | AGENT | ACTION` comments
  (their `Done:` bullets go into state.json so no agent repeats finished work)
- Welcomes only genuine NEW agent CHECK-INs (not ACTION/HEARTBEAT logs —
  v2.0 was too chatty and spammed the log)

Hard rules (never violate):
- Never orange-cloud the apex. Never CREATE apps. DNS.
- Never point colliding repo CNAMEs at satellite hosts.
"""
import json, os, re, urllib.request, datetime

REPO = "Zion-support/zion-support.github.io"
ISSUE = 71361
TOKEN = os.environ["GH_TOKEN"]
BOARD_DIR = "public/ops/comms"
LOG_JSON = f"{BOARD_DIR}/log.json"
STATE_JSON = f"{BOARD_DIR}/state.json"
AGENTS_JSON = f"{BOARD_DIR}/agents.json"
PROTOCOL_URL = "https://ziontechgroup.com/ops/comms/"
ISSUE_URL = f"https://github.com/{REPO}/issues/{ISSUE}"
OFFLINE_AFTER_MIN = 90
HEADER_RE = re.compile(r"^###\s+([\d\-]+)\s+([\d:]+)\s+(\S+)\s*\|\s*([^|]+?)\s*\|\s*(\S+)", re.M)

def gh(path, method="GET", data=None):
    req = urllib.request.Request(
        f"https://api.github.com/repos/{REPO}{path}",
        method=method,
        headers={"Authorization": f"Bearer {TOKEN}",
                 "Accept": "application/vnd.github+json",
                 "User-Agent": "war-room-pulse"},
        data=json.dumps(data).encode() if data else None)
    with urllib.request.urlopen(req) as r:
        return json.load(r)

def load(path, default):
    try:
        with open(path) as f:
            return json.load(f)
    except Exception:
        return default

def parse_agents(comments, now):
    agents = {}
    for c in comments:
        m = HEADER_RE.search(c["body"])
        name = m.group(4).strip() if m else c["user"]["login"]
        a = agents.setdefault(name, {"comments": 0, "last_seen": None, "last_action": None})
        a["comments"] += 1
        a["last_seen"] = c["created_at"]
        if m:
            a["last_action"] = m.group(5).strip()
    for a in agents.values():
        try:
            seen = datetime.datetime.fromisoformat(a["last_seen"].replace("Z", "+00:00"))
            mins = (now - seen).total_seconds() / 60
            a["status"] = "OFFLINE" if mins > OFFLINE_AFTER_MIN else "ONLINE"
            a["minutes_since_seen"] = int(mins)
        except Exception:
            a["status"] = "UNKNOWN"
    return agents

def learn_actions(comments, state):
    done = set(state.get("completed_actions", []))
    for c in comments:
        m = re.search(r"Done:\s*\n((?:\s*[-*].*\n?)+)", c["body"])
        if m:
            for line in m.group(1).splitlines():
                line = line.strip().lstrip("-*").strip()
                if len(line) > 15:
                    done.add(line[:300])
    return sorted(done)

def is_new_checkin(c):
    """Only welcome genuine first-person check-ins; never ACTION/HEARTBEAT logs
    or bot comments."""
    if c["user"]["login"] == "github-actions[bot]":
        return False
    if "War Room Pulse" in c["body"]:
        return False
    head = c["body"][:400].lower()
    if "| action" in head or "| heartbeat" in head:
        return False
    return "check-in" in head or "check in" in head or "| join" in head

def main():
    state = load(STATE_JSON, {"last_comment_id": 0, "welcomed_comment_ids": [],
                              "completed_actions": []})
    comments = gh(f"/issues/{ISSUE}/comments?per_page=100")
    now = datetime.datetime.now(datetime.timezone.utc)
    os.makedirs(BOARD_DIR, exist_ok=True)

    log = [{"id": c["id"], "author": c["user"]["login"],
            "created_at": c["created_at"], "body": c["body"][:4000]} for c in comments]
    with open(LOG_JSON, "w") as f:
        json.dump({"issue": ISSUE_URL, "updated_at": now.isoformat(), "comments": log}, f, indent=2)

    agents = parse_agents(comments, now)
    with open(AGENTS_JSON, "w") as f:
        json.dump({"updated_at": now.isoformat(),
                   "offline_after_minutes": OFFLINE_AFTER_MIN,
                   "agents": agents}, f, indent=2)

    state["completed_actions"] = learn_actions(comments, state)

    new = [c for c in comments if c["id"] > state.get("last_comment_id", 0)]
    welcomed = set(state.get("welcomed_comment_ids", []))
    for c in new:
        if c["id"] in welcomed or not is_new_checkin(c):
            continue
        recent = sorted(state["completed_actions"], key=len)[-8:]
        ack = (
            "\U0001f916 War Room Pulse: welcome, agent. You are on the roster "
            f"({PROTOCOL_URL}agents.json). Protocol: {PROTOCOL_URL}\n\n"
            "**Format:** `### YYYY-MM-DD HH:MM TZ | AGENT | ACTION` with "
            "Done / Blocked / Next / URLs checked. Heartbeat every 15 min while working; "
            "after 90 min silence the watchdog marks you OFFLINE.\n\n"
            "**Already done — do not repeat:**\n"
            + ("\n".join(f"- {a}" for a in recent) or "- (nothing yet)")
            + "\n\n**Hard rules:** never orange-cloud the apex; never CREATE apps. DNS; "
              "never point colliding repo CNAMEs at satellite hosts. "
              "Emails: reply-all, same thread, CC carlos@ + commercial@ziontechgroup.com."
        )
        gh(f"/issues/{ISSUE}/comments", method="POST", data={"body": ack})
        welcomed.add(c["id"])

    if comments:
        state["last_comment_id"] = max(c["id"] for c in comments)
    state["welcomed_comment_ids"] = sorted(welcomed)
    state["last_pulse"] = now.isoformat()
    with open(STATE_JSON, "w") as f:
        json.dump(state, f, indent=2)
    print(f"Pulse v2.1 OK: {len(comments)} comments, {len(agents)} agents "
          f"({sum(1 for a in agents.values() if a['status']=='ONLINE')} online), "
          f"{len(state['completed_actions'])} learned actions, {len(new)} new comments.")

if __name__ == "__main__":
    main()
