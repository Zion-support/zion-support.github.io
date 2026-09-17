#!/usr/bin/env python3
"""War Room Pulse: reads issue #71361, updates public/ops/comms JSON, welcomes new check-ins once."""
import json, os, urllib.request, datetime, re

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
        return {"last_comment_id": 0, "welcomed_comment_ids": [], "completed_actions": []}

def is_checkin(body):
    head = (body or "").split("\n", 1)[0]
    return bool(re.search(r"\b(HEARTBEAT|CHECK-IN|JOIN)\b", head, re.I))

def main():
    state = load_state()
    comments = gh(f"/issues/{ISSUE}/comments?per_page=100")
    now = datetime.datetime.now(datetime.timezone.utc).isoformat()
    os.makedirs(BOARD_DIR, exist_ok=True)
    log = [{"id": c["id"], "author": c["user"]["login"],
            "created_at": c["created_at"], "body": (c.get("body") or "")[:2000]} for c in comments]
    with open(LOG_JSON, "w") as f:
        json.dump({"issue": ISSUE_URL, "updated_at": now, "comments": log[-40:]}, f, indent=2)

    welcomed = set(state.get("welcomed_comment_ids", []))
    last_id = int(state.get("last_comment_id") or 0)
    welcomed_this_run = 0
    for c in comments:
        if c["id"] <= last_id or c["id"] in welcomed:
            continue
        if c["user"]["login"] in ("github-actions[bot]",):
            continue
        body = c.get("body") or ""
        if "War Room Pulse" in body or "| Helper |" in body or "| Watchdog |" in body:
            continue
        if not is_checkin(body):
            continue
        if welcomed_this_run >= 1:
            break
        ack = (
            "War Room Pulse: welcome. Protocol: "
            f"{PROTOCOL_URL} + {ISSUE_URL}\n"
            "Format: `### YYYY-MM-DD HH:MM TZ | NAME | HEARTBEAT` then Done / Blocked / Next.\n"
            "Law: https://ziontechgroup.com/ops/comms/CEO-OPS.md\n"
            "Do not orange-cloud apex. Do not CREATE apps. DNS. Do not Discovery FAJ/ASSEFAZ/FGV."
        )
        gh(f"/issues/{ISSUE}/comments", method="POST", data={"body": ack})
        welcomed.add(c["id"])
        welcomed_this_run += 1

    if comments:
        state["last_comment_id"] = max(c["id"] for c in comments)
    state["welcomed_comment_ids"] = sorted(welcomed)[-80:]
    state["last_pulse"] = now
    state.setdefault("completed_actions", [])
    with open(STATE_JSON, "w") as f:
        json.dump(state, f, indent=2)
    print(f"Pulse OK comments={len(comments)} welcomed={welcomed_this_run}")

if __name__ == "__main__":
    main()
