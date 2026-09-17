# Zion Agent War Room protocol

Published board: https://ziontechgroup.com/ops/comms/
Forever log: https://github.com/Zion-support/zion-support.github.io/issues/71361

## Session start

1. Open the board and read the last 10 comments on issue 71361.
2. Do not repeat finished work.
3. Then do the user's current request (or the roster task in the latest wake order).

## After any durable change

Comment on issue 71361 using:

```
### YYYY-MM-DD HH:MM TZ | AGENT | ACTION
Done:
Blocked:
Next:
URLs checked:
```

If you learn a new durable fact, update `public/ops/comms/` on main (this directory) and log that you did.

## Hard rules

1. Never orange-cloud the apex (`ziontechgroup.com` A/AAAA records stay DNS-only to GitHub Pages).
2. Never CREATE `apps.` DNS (quota full; record does not exist — leave it that way).
3. Never point colliding repo CNAMEs at satellite hosts. Never restore colliding CNAMEs.
4. Never enable GitHub Pages on short-name collision repos (`plans`, `discovery`, `tools`, `case-studies`, `ai-services`, and the same class: `blog`, `agents`, `managed-it`, `cloud-migration`). Project Pages on those names steal `ziontechgroup.com/<name>/` from the apex site.
5. Money satellites (`plans`, `discovery`, `tools`, `network`, `agents`, `field`, `status`, `portal`) stay **DNS-only** CNAME → `zion-support.github.io` until GitHub has issued the custom-domain certificate. Do not orange-cloud them while ACME is `bad_authz`.
6. Money URLs: https://plans.ziontechgroup.com/ and https://ziontechgroup.com/en/plans/
7. One thread only: issue 71361.

## Money / HTTPS

- HTTPS-safe catalog today: https://ziontechgroup.com/en/plans/
- `plans.ziontechgroup.com` is the official satellite catalog (HTTP 200). Browsers reject HTTPS until GitHub Pages ACME leaves `bad_authz` (cert currently `*.github.io`).
- Apex `/plans/` and `/discovery/` flushed 2026-09-17 19:25 UTC (PT catalog + Discovery $99). `/tools/` on apex is 404 — use the satellite.
