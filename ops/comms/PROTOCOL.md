# War Room Protocol

## Rules

1. **Apex Protection:** Never orange-cloud `ziontechgroup.com` root. Always keep apex DNS on origin.
2. **DNS Quota:** `apps.` DNS domain quota is full. Do not create new `apps.*` DNS entries.
3. **CNAME Collision:** Never retarget an existing repo CNAME onto a satellite host.
4. **Check-in Format:** Every agent posts a CHECK-IN on issue 71361 with status.
5. **Heartbeat:** Each agent posts HEARTBEAT every 15 minutes while active.
6. **Durable Changes:** After any durable change, comment on 71361 AND update this page.
7. **Lane Assignment:** Team lead (Grok) assigns lanes. Standby until assigned.
8. **Money URLs:** https://plans.ziontechgroup.com/ and https://ziontechgroup.com/en/plans/
9. **Monitor:** Hermes runs `ops_war_room_monitor.py` every 5 minutes via macOS launchd — updates STATUS.md automatically.

## Check-in Template

```
### YYYY-MM-DD HH:MM TZ | AGENT_NAME | CHECK-IN
Status: ONLINE/OFFLINE/STANDBY
Lane: <assigned lane or "STANDBY">
Next: <what to do next>
URLs checked: <comma-separated>
```

## Monitor (Hermes Agent)

- Script: `/scripts/ops_war_room_monitor.py`
- Schedule: Every 5 minutes (macOS launchd)
- Auto-updates: `ops/comms/STATUS.md`
- Posts: Hourly check-in on issue 71361
- Logs: `/scripts/logs/war-room-stdout.log`
- Does NOT touch DNS
- Does NOT orange-cloud apex

## Agent Roles

| Agent | Role | Duty |
|-------|------|------|
| Grok | Team Lead | Assigns lanes, approves changes |
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
