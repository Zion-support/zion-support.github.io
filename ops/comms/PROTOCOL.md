# War Room Protocol

## Rules

1. **Apex Protection:** Never orange-cloud `ziontechgroup.com` root. Always keep apex DNS on origin.
2. **DNS Quota:** `apps.` DNS domain quota is full. Do not create new `apps.*` DNS entries.
3. **CNAME Collision:** Never retarget an existing repo CNAME onto a satellite host.
4. **Check-in Format:** First comment is JOIN (paste from the board). Heartbeat every 15 min while working. Never JOIN as STANDBY.
5. **Heartbeat:** Each agent posts HEARTBEAT every 15 minutes while active.
6. **Durable Changes:** After any durable change, comment on 71361 AND update this page.
7. **Lane Assignment:** Claim one OPEN lane from the Pulse card / board and keep working. Do not sit in STANDBY. Do not wait for Grok.
8. **Money URLs:** https://ziontechgroup.com/en/plans/ and https://ziontechgroup.com/discovery/ only. Do not sell satellite hosts until ACME TLS is issued.
9. **Pulse:** One standing comment on #71361 (`<!-- war-room-standing:v1 -->`). Keep working; do not wait for a new bot comment. Do not clone HEARTBEAT of Pulse.
10. **Noise:** Ignore Watchdog OFFLINE roster and Hermes-Dispatch LANE clones. Do not restart silent peers. Claim an OPEN lane.
11. **Monitor:** Hermes runs `ops_war_room_monitor.py` every 5 minutes via macOS launchd — updates STATUS.md only. Pages ignores STATUS.md so the deploy is not cancelled. Hourly check-in max on #71361.

## Check-in Template

Paste this as the first comment on #71361 (replace YOUR_NAME). Then keep working.

```
### YYYY-MM-DD HH:MM TZ | YOUR_NAME | JOIN
Lane: comms
Claimed: first OPEN lane on the board
Status: ONLINE
Next: working this OPEN lane now. Help Carlos first.
URLs checked: https://ziontechgroup.com/en/plans/, https://ziontechgroup.com/discovery/
```

Do not set Status or Lane to STANDBY. Do not wait for Grok to assign a lane.

Slack `#cursor_channel` one-liner (real time — not a HEARTBEAT clone of Pulse):

```
War room keep-running: claim first OPEN lane now. Do not sit in STANDBY. JOIN on #71361 — YOUR_NAME | JOIN · Status: ONLINE.
```

Heartbeat every 15 min while working:

```
### YYYY-MM-DD HH:MM TZ | YOUR_NAME | HEARTBEAT
Lane: <the OPEN lane you claimed>
Done:
- <one durable fact>
Blocked: <or none>
Next: <keep going>
```

## Monitor (Hermes Agent)

- Script: `/scripts/ops_war_room_monitor.py`
- Schedule: Every 5 minutes (macOS launchd)
- Auto-updates: `ops/comms/STATUS.md` (never list the room as STANDBY; claim OPEN lanes)
- Posts: Hourly check-in on issue 71361
- Logs: `/scripts/logs/war-room-stdout.log`
- Does NOT touch DNS
- Does NOT orange-cloud apex

## Agent Roles

| Agent | Role | Duty |
|-------|------|------|
| Grok | Team Lead | Unblock collisions. Agents claim OPEN lanes themselves — Grok does not make anyone wait. |
| Lucas | Engineer | Implementation, deployments |
| Harper | Watchdog | Monitor health, alert on failures |
| Pulse | Watchdog Bot | Automated monitoring |
| Composio Agent | Automation | War Room Pulse automation |
| Hermes | Agent Ops | Monitor every 5min, update STATUS.md |
| Kleber | Human CEO | Final authority, strategic decisions |

## Email Processing Rules

- CEO emails (carlos@ziontechgroup.com) get highest priority
- CC carlos@ziontechgroup.com + commercial@ziontechgroup.com in ALL replies
- Use reply All, keep same thread
- Never send more than 1 follow-up per week to non-responsive clients
- Offer Discovery + free AI services trial for old clients
- Delete noise (notifications, automated, marketing)
- Archive after processing

## Current Status (Auto-generated)
- Board: HTTP 200
- Plans: HTTP 200
- Issue: HTTP 200, 23 comments
- Monitor: Active (launchd loaded)
- GitHub Actions: 1 active (static-deploy.yml)

---
*Last updated: 2026-09-17 20:25 UTC by Hermes Agent*
