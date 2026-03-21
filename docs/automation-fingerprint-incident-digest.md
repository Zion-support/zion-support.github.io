# Automation fingerprint incident digest

Scheduled workflow: `.github/workflows/ai-automation-fingerprint-digest-weekly.yml`

## What it does

- Lists open GitHub issues that have any `automation-fp-*` label (from `gh-issue-dedupe-or-create.cjs`).
- Writes `automation/reports/automation-fingerprint-incidents-latest.{json,md}` (gitignored locally when not committed).
- **Delta tracking** — compares to `automation-fingerprint-incidents-digest-last.json` (restored from Actions cache between runs) to compute **new** and **resolved** issue numbers; included in Markdown and prepended to Slack/Discord when non-empty.
- **Hotness** — increments per-issue counters in `automation-fingerprint-incidents-hotness-state.json` (cached) and sorts by **hours quiet × weight + recurrence** for “must-fix first” ordering in JSON, Markdown, rollup, and escalation text.
- Uploads reports + state files as workflow artifacts.
- **Cross-run state** — workflow restores/saves digest last, hotness, and escalation JSON via `actions/cache` so delta/cooldown/hotness work across scheduled runs.

### Optional notifications when open count &gt; 0

- **Telegram** — set repo variable `AUTOMATION_FP_DIGEST_TELEGRAM` to `1` and configure `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` secrets.
- **Slack** — secret `AUTOMATION_DIGEST_SLACK_WEBHOOK`.
- **Discord** — secret `AUTOMATION_DIGEST_DISCORD_WEBHOOK` (plain text in `content` field).
- **Delta-only mode** — set `AUTOMATION_FP_DIGEST_DELTA_NOTIFY_ONLY=1` to skip Slack/Discord/Telegram when there is no new/resolved delta since the previous run (after the first baseline run).

### Rolling digest issue

When `DIGEST_ROLLUP_ISSUE=1` (set in workflow), creates or updates an issue titled **Automation fingerprint incidents — rolling digest** (label `automation-fp-digest-rollup`) with:

- SLA buckets: **Fresh (&lt; 24h)**, **1–7 days**, **&gt; 7 days (stale)** with ownership hints.
- **Priority (hotness)** — top 15 by score.
- Optional **runbook links** from `automation/config/automation-fingerprint-digest-extras.json` (`matchTitleContains` → `url`, optional `default`).

**Rollup lifecycle** (optional):

- `AUTOMATION_FP_DIGEST_ROLLUP_AUTO_CLOSE=1` closes the rollup when open incident count is 0; it reopens when incidents return.
- `AUTOMATION_FP_DIGEST_ROLLUP_ASSIGNEE=<github-username>` assigns on create only.

### Escalation (optional)

**Warning tier** (original thresholds):

- Repo variables: `AUTOMATION_FP_DIGEST_ESCALATION_MIN_COUNT`, `AUTOMATION_FP_DIGEST_ESCALATION_STALE_DAYS`.
- Secrets: `AUTOMATION_DIGEST_ESCALATION_WEBHOOK`, `AUTOMATION_DIGEST_ESCALATION_PAGERDUTY_KEY`.

**Critical tier** (stricter; checked first):

- Repo variables: `AUTOMATION_FP_DIGEST_ESCALATION_CRITICAL_MIN_COUNT`, `AUTOMATION_FP_DIGEST_ESCALATION_CRITICAL_STALE_DAYS`.
- Secrets: `AUTOMATION_DIGEST_ESCALATION_CRITICAL_WEBHOOK`, `AUTOMATION_DIGEST_ESCALATION_CRITICAL_PAGERDUTY_KEY`.
- If critical secrets are unset, critical tier falls back to warning webhooks / PagerDuty keys.

**Cooldown** — `AUTOMATION_FP_DIGEST_ESCALATION_COOLDOWN_HOURS` (default 24) using `automation-fingerprint-incidents-escalation-state.json` (cached).

### Routing config

Edit `automation/config/automation-fingerprint-digest-extras.json`:

- `assigneeRules`: `{ "matchTitleContains": ["PM2"], "assignee": "github-user" }` — surfaces as `suggestedAssignee` in JSON (not auto-applied to every incident issue; rollup assignee is still via `AUTOMATION_FP_DIGEST_ROLLUP_ASSIGNEE`).

Override path: env `DIGEST_EXTRAS_CONFIG`.

## Without token

`automation/generate-automation-fingerprint-incident-digest.cjs` writes stub files and exits 0 if `GH_TOKEN` / `GITHUB_TOKEN` is unset.

## npm

```bash
npm run automation:fingerprint-digest
```

## Environment reference

| Variable | Purpose |
| -------- | ------- |
| `DIGEST_ROLLUP_ISSUE` | `1` / `true` to upsert the rolling GitHub issue |
| `DIGEST_ROLLUP_AUTO_CLOSE` | `1` / `true` to close rollup when count reaches 0 (reopens automatically) |
| `DIGEST_ROLLUP_ASSIGNEE` | Optional GitHub username assigned when creating rollup issue |
| `DIGEST_DELTA_NOTIFY_ONLY` | `1` / `true` to notify only when delta is non-empty (after baseline) |
| `DIGEST_ESCALATION_MIN_COUNT` | Warning: escalate when open `automation-fp-*` count ≥ this |
| `DIGEST_ESCALATION_STALE_DAYS` | Warning: escalate when any incident’s `updatedAt` is older than this many days |
| `DIGEST_ESCALATION_CRITICAL_MIN_COUNT` | Critical tier when count ≥ this |
| `DIGEST_ESCALATION_CRITICAL_STALE_DAYS` | Critical tier when any incident older than this many days |
| `DIGEST_ESCALATION_COOLDOWN_HOURS` | Minimum hours between escalation sends (default `24`) |
| `DIGEST_ESCALATION_*` / `DIGEST_ESCALATION_CRITICAL_*` | Webhooks and PagerDuty routing keys (see above) |
| `DIGEST_EXTRAS_CONFIG` | Optional path to JSON routing config |

See also `docs/automation-issue-dedupe-helper.md`.
