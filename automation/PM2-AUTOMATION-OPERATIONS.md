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
- Deploy contention scorer: `npm run pm2:deploy-contention:check`

### SLO severity bands

Each app in `pm2-slo-latest.json` includes `severity`: `ok` | `warning` | `critical`.

- **Critical:** bad PM2 status (`errored`, `waiting restart`, `launching`), or `restart_delta` above `PM2_SLO_MAX_RESTART_DELTA` (default `2`).
- **Warning:** elevated `restart_delta` above `PM2_SLO_WARN_RESTART_DELTA` (default `1`) but not yet critical, or sub-critical status (e.g. `stopped` when not ignored).

Escalation agent can focus on criticals only:

- `PM2_SLO_ESCALATION_USE_CRITICAL_ONLY=1` (uses `criticalCount` / `severity === 'critical'`).

### Optional SLO noise suppression

When certain apps are expected to be stopped, exclude them from SLO stopped-status alerts:

- Example: `PM2_SLO_IGNORE_STOPPED_APPS=auto-sync-agent,automation-dashboard npm run pm2:slo-agent:once`

## Local deploy and build lock

- Full preflight: `npm run deploy:local`
- **Quiet deploy** (pauses high-churn PM2 apps during lint/test/build): `npm run deploy:local:quiet`
  - **Profiles** (`DEPLOY_QUIET_PROFILE`, ignored if `DEPLOY_QUIET_PM2_APPS` is set):
    - `minimal` — `build-monitor`, `continuous-automation` only
    - `default` — historical default list (orchestrators + monitors)
    - `full` — default + OpenClaw + PM2 guard processes for maximum isolation
  - Shortcuts: `npm run deploy:local:quiet:minimal` | `deploy:local:quiet:full`
  - Override list: `DEPLOY_QUIET_PM2_APPS=app1,app2 npm run deploy:local:quiet`
- **Telegram on high contention** (optional): `DEPLOY_CONTENTION_NOTIFY_TELEGRAM=1` (requires `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID`). Cooldown: `PM2_CONTENTION_NOTIFY_COOLDOWN_HOURS` (default `6`). Manual: `npm run pm2:deploy:contention:notify`
- **PM2 report size budget** (local/CI): `npm run pm2:report-budget:once` — env `PM2_REPORT_MAX_FILE_KB` (default `768`), `PM2_REPORT_BUDGET_FAIL_ON_EXCEED=0` to warn only
- **Hard fail on contention** (optional): `DEPLOY_BLOCK_ON_LOCK_RISK=1 npm run deploy:local`
- Lock heal: `npm run build:lock:heal`
- Lock check (CI): `npm run build:lock:check`

Pre-deploy contention report: `automation/reports/pm2-deploy-contention-latest.json` (from `pm2:deploy-contention:check` or the start of `deploy:local`).

## Report write throttling (policy)

Autonomous agents should avoid rewriting large JSON reports on every tick:

- Prefer **append-only history** with capped length (e.g. last 200 entries), plus a **latest** snapshot.
- Use **minimum interval** between full rewrites (env-driven `INTERVAL_*` / `*_MINUTES`).
- Keep **structured fields** stable so downstream workflows do not break.

## GitHub issue cooldown (workflows)

Shared helpers for Actions (bash): `scripts/automation/gh-issue-cooldown.sh`

```bash
source scripts/automation/gh-issue-cooldown.sh
export COOLDOWN_HOURS=$(gh_issue_cooldown_hours_from_registry)
n=$(gh_issue_find_open_by_title_prefix "PM2 SLO breach")
```

PM2 SLO workflow uses **stable titles** + `scripts/automation/gh-issue-dedupe-or-create.cjs`: critical `PM2 SLO critical breach detected` (label `bug`), warnings `PM2 SLO warnings (non-critical)` (label `automation`).

**CI:** `.github/workflows/ai-pm2-static-checks.yml` runs drift guard + PM2 report budget (warn-only) + lint + type-check on automation/ecosystem changes.

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
