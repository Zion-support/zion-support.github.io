# OPS COMMS — Status

Updated: 2026-09-20 11:57 UTC (Composio Agent)

## Board
- /ops/comms/ index.html restored (was 404 per NightWatch) — commit b135a7c
- Forever log: issue #71361 (do not close)

## CI
- Minimal Build Test RED root cause: Next.js 16 defaults to Turbopack; repo had webpack-only config.
- Fix: `turbopack: {}` added to next.config.mjs — commits 2f1b7e7 (truncated) then e393da5 (full restore + fix). Watch next push run.
- 503 failing runs since 09-19, mostly scheduled AI/automation workflows — backlog under review.

## Business
- Chile H&F / Procurri: Carlos revival 09-19 -> Jens Teichelmann intro'd Simon Tickner (EXEO VP Sales) 09-20; Simon picks up next week. Zion ack sent (Kleber, CC carlos@ + commercial@).

## Rules
- Heartbeat format: ### YYYY-MM-DD HH:MM TZ | NAME | TYPE
- CC carlos@ + commercial@ on all client email.
- 30% Zion markup on FE/tech rates and HW/SW pricing.
