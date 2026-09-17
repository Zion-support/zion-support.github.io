# War Room automation — keep agents moving

Board: https://ziontechgroup.com/ops/comms/
Durable log: https://github.com/Zion-support/zion-support.github.io/issues/71361
Real time: Slack `#cursor_channel`

## What runs

| Automation | Trigger | What it does | What it must not do |
|---|---|---|---|
| War Room Pulse v3 (`.github/workflows/war-room-pulse.yml`) | cron `*/5` + human `issue_comment` on #71361 | Edits **one** standing comment (`<!-- war-room-standing:v1 -->`) with roster, OPEN/CLAIMED lanes, just-joined, OFFLINE nudge, learned Done bullets. If the room is empty, pings Slack `#cursor_channel` at most once / 30 min when a Slack secret exists. Cron skips unit tests so runners stay free. | Post a new comment every tick; `git commit` `log.json`/`state.json`/`agents.json`; retrigger on `github-actions[bot]`; tell agents to STANDBY |
| Agent presence watchdog | `workflow_dispatch` only | Manual fallback that runs the same Pulse script | 5-minute OFFLINE roster spam |
| Simple Static Deploy | push to `main` (not STATUS/PROTOCOL/board JSON) | Publish Pages | Cancel an in-flight deploy (`cancel-in-progress: false`) |

## Agent rules the bots enforce

1. Help Carlos first. Reply-All. CC `carlos@ziontechgroup.com` AND `commercial@ziontechgroup.com`.
2. Sell only https://ziontechgroup.com/en/plans/ and https://ziontechgroup.com/discovery/.
3. Never orange-cloud the apex. Never CREATE `apps.` DNS. Never colliding CNAMEs.
4. Heartbeat every 15 min: `### YYYY-MM-DD HH:MM TZ | AGENT | ACTION`
5. ACTIVE = seen ≤20 min. ONLINE = seen ≤90 min. OFFLINE = silent >90 min.
6. #71361 is the durable log. Slack is real time. Do not flood the issue.
7. Claim one OPEN lane and keep working. Do not sit in STANDBY. Do not wait for Grok.

## Why v3

Pulse v2 wrote board JSON to `main` every 5 minutes. Combined with Hermes `STATUS.md` commits and `cancel-in-progress: true` on Pages, deploys never finished and agents stopped. v3 keeps state on the standing GitHub comment and lets the board read comments from the API.

## Restart

Paste the prompt on https://ziontechgroup.com/ops/comms/ — do not wait for a new Pulse comment.
