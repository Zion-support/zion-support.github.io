# Automation fingerprint incident digest

Scheduled workflow: `.github/workflows/ai-automation-fingerprint-digest-weekly.yml`

## What it does

- Lists open GitHub issues that have any `automation-fp-*` label (from `gh-issue-dedupe-or-create.cjs`).
- Writes `automation/reports/automation-fingerprint-incidents-latest.{json,md}` (gitignored locally when not committed).
- Uploads both as a workflow artifact.
- **Optional notifications** when open count &gt; 0:
  - **Telegram** — set repo variable `AUTOMATION_FP_DIGEST_TELEGRAM` to `1` and configure `TELEGRAM_BOT_TOKEN` / `TELEGRAM_CHAT_ID` secrets.
  - **Slack** — secret `AUTOMATION_DIGEST_SLACK_WEBHOOK`.
  - **Discord** — secret `AUTOMATION_DIGEST_DISCORD_WEBHOOK` (plain text in `content` field).
- **Rolling digest issue** — when `DIGEST_ROLLUP_ISSUE=1` (set in workflow), creates or updates an open issue titled **Automation fingerprint incidents — rolling digest** with a checklist of linked incidents (label `automation-fp-digest-rollup`). Requires `issues: write` on the workflow.
- **Escalation** (optional) — if thresholds are met **and** a webhook or PagerDuty key is configured:
  - Repo variables: `AUTOMATION_FP_DIGEST_ESCALATION_MIN_COUNT` (e.g. `5`), `AUTOMATION_FP_DIGEST_ESCALATION_STALE_DAYS` (e.g. `14` = any incident quiet longer than 14 days).
  - Secrets: `AUTOMATION_DIGEST_ESCALATION_WEBHOOK` (Slack-compatible `{ "text": "..." }`), `AUTOMATION_DIGEST_ESCALATION_PAGERDUTY_KEY` (Events API v2 routing key).

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
| `DIGEST_ESCALATION_MIN_COUNT` | Escalate when open `automation-fp-*` count ≥ this |
| `DIGEST_ESCALATION_STALE_DAYS` | Escalate when any incident’s `updatedAt` is older than this many days |
| `DIGEST_ESCALATION_GENERIC_WEBHOOK` / `DIGEST_ESCALATION_SLACK_WEBHOOK` | Escalation POST target |
| `DIGEST_ESCALATION_PAGERDUTY_ROUTING_KEY` | PagerDuty trigger |

See also `docs/automation-issue-dedupe-helper.md`.
