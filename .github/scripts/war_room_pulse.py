#!/usr/bin/env python3
"""War Room Pulse: reads issue #71361 (the forever log), updates the public
board data at public/ops/comms/, and assists newly checked-in agents.

Rules encoded from the board:
- Never orange-cloud the apex. Never CREATE apps. DNS.
- Never point colliding repo CNAMEs at satellite hosts.
- Do not repeat finished work (tracked in state.json completed_actions).
"""
import json, os, subprocess, urllib.request, datetime

REPO = "Zion-support/zion-support.github.io"
ISSUE = 71361
TOKEN = os.environ["GH_TOKEN"]
BOARD_DIR = "public/ops/comms"
LOG_JSON = f"{BOARD_DIR}/log.json"
STATE_JSON = f"{BOARD_DIR}/state.json"
PROTOCOL_URL = "https://ziontechgroup.com/ops/comms/"
ISSUE_URL = f"https://github.com/{REPO}/issues/{ISSUE}"

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

def load_state():
    try:
        with open(STATE_JSON) as f:
            return json.load(f)
    except Exception:
        return {"last_comment_id": 0, "welcomed_comment_ids": [],
                "completed_actions": ["publish /ops/ and /ops/comms/ board (Lucas 2026-09-17)"]}

def main():
    state = load_state()
    comments = gh(f"/issues/{ISSUE}/comments?per_page=100")
    now = datetime.datetime.now(datetime.timezone.utc).isoformat()

    # 1) Update machine-readable board log (newest last)
    log = [{"id": c["id"], "author": c["user"]["login"],
            "created_at": c["created_at"], "body": c["body"][:4000]} for c in comments]
    os.makedirs(BOARD_DIR, exist_ok=True)
    with open(LOG_JSON, "w") as f:
        json.dump({"issue": ISSUE_URL, "updated_at": now, "comments": log}, f, indent=2)

    # 2) Assist newly checked-in agents: welcome + point to protocol/state
    new = [c for c in comments if c["id"] > state.get("last_comment_id", 0)]
    welcomed = set(state.get("welcomed_comment_ids", []))
    for c in new:
        if c["id"] in welcomed:
            continue
        if c["user"]["login"] == "github-actions[bot]":
            continue
        body = c["body"].lower()
        if "check-in" in body or "session" in body or "status" in body:
            ack = (
                "\U0001f916 War Room Pulse (automation): welcome, agent. "
                f"Protocol + live board: {PROTOCOL_URL} — "
                "please keep the comment format `### YYYY-MM-DD HH:MM TZ | AGENT | ACTION` "
                "(Done / Blocked / Next / URLs checked).\n\n"
                "Current durable state:\n"
                + "\n".join(f"- {a}" for a in state["completed_actions"])
                + "\n\nReminders: never orange-cloud the apex; never CREATE apps. DNS; "
                  "never point colliding repo CNAMEs at satellite hosts; "
                  "do not repeat finished work listed above."
            )
            gh(f"/issues/{ISSUE}/comments", method="POST", data={"body": ack})
            welcomed.add(c["id"])

    if comments:
        state["last_comment_id"] = max(c["id"] for c in comments)
    state["welcomed_comment_ids"] = sorted(welcomed)
    state["last_pulse"] = now
    with open(STATE_JSON, "w") as f:
        json.dump(state, f, indent=2)
    print(f"Pulse OK: {len(comments)} comments, {len(new)} new, state saved.")

if __name__ == "__main__":
    main()
