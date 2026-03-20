# PM2 Automation Operations

This document is the canonical PM2 runbook for this repository.

## Primary Stack

- Source of truth: `ecosystem.config.cjs`
- Start all ecosystem apps: `npm run automation:start-all`
- Restart all ecosystem apps: `npm run automation:restart-all`
- Stop all ecosystem apps: `npm run automation:stop-all`
- Status: `npm run ai:status`
- Logs: `npm run automation:logs`

## PM2 Reliability Guards

- Restart guardian (continuous): `npm run pm2:restart-guardian`
- Restart guardian (one-shot): `npm run pm2:restart-guardian:once`
- SLO agent (continuous): `npm run pm2:slo-agent`
- SLO agent (one-shot): `npm run pm2:slo-agent:once`
- Drift guard (continuous): `npm run pm2:drift-guard`
- Drift guard (one-shot): `npm run pm2:drift-guard:once`

### Optional SLO noise suppression

When certain apps are expected to be stopped, exclude them from SLO stopped-status alerts:

- Example: `PM2_SLO_IGNORE_STOPPED_APPS=auto-sync-agent,automation-dashboard npm run pm2:slo-agent:once`

## Recommended Local Usage

- Prefer ecosystem-scoped commands over host-wide PM2 commands.
- Do not run `pm2 stop all` or `pm2 delete all` from repo scripts.
- For targeted reliability stack startup: `bash automation/start-pm2-optimization.sh`

## Local Alternative Stack

- File: `scripts/automation/pm2-local-automation.config.cjs`
- Purpose: local-only legacy stack under `scripts/automation/*`
- Start: `npm run automation:local:pm2:start`
- Restart: `npm run automation:local:pm2:restart`
- Stop: `npm run automation:local:pm2:stop`
- Delete: `npm run automation:local:pm2:delete`

Use the primary ecosystem stack unless you explicitly need the local legacy stack for old script coverage.
