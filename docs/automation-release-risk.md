# Release risk score & escalation

Unified scoring over existing automation reports (no extra network beyond what those scripts already use).

## Scripts

| Command | Output |
|--------|--------|
| `npm run release:risk:score` | `automation/reports/release-risk-score-latest.json` (gitignored locally) |
| `npm run release:risk:score:refresh` | Refreshes smoke, drift, aggregate, regression diff, then score |
| `npm run release:risk:escalate` | Deduped GitHub issue `release-risk-elevated` when score ≥ threshold (cooldown-aware) |
| `npm run release:risk:recovery:close` | Closes `release-risk-elevated` after consecutive low-risk runs |
| `npm run release:risk:webhook:notify` | Slack/Discord/generic when `riskScore` ≥ `RELEASE_RISK_WEBHOOK_MIN_SCORE` |
| `npm run automation:issue-index` then `npm run automation:triage:weekly:digest` | `weekly-automation-triage-digest-latest.md` |
| `npm run automation:triage:weekly:issue` | Deduped issue fingerprint `weekly-automation-triage-digest` (after markdown exists) |

## Workflows

- **`ai-release-risk-score.yml`** — Daily: full refresh → score → escalate → optional webhooks (secrets) → recovery auto-close.
- **`ai-observability-digest.yml`** — Weekly: smoke + audit + drift → `smoke:health:append` → `release:risk:score` → `observability-digest.cjs` (digest embeds release risk when file exists).
- **`ai-release-risk-pr-comment.yml`** — PRs touching automation/app: upsert comment from `main`’s `release-risk-score-latest.json`.
- **`ai-weekly-automation-triage-digest.yml`** — Issue index + markdown digest + deduped digest issue.
- **`ai-conservative-autofix-audit.yml`** — Manual dispatch; `npm audit` JSON + lint (informational).

## Env (escalation)

| Variable | Default | Purpose |
|----------|---------|---------|
| `RELEASE_RISK_ESCALATE_MIN` | `75` | Minimum `riskScore` to open/update issue |
| `RELEASE_RISK_ESCALATE_COOLDOWN_HOURS` | `24` | Hours between escalations |
| `RELEASE_RISK_ESCALATE_DRY_RUN` | — | `1` = no `gh` calls |

## Env (recovery close)

| Variable | Default | Purpose |
|----------|---------|---------|
| `RELEASE_RISK_RECOVERY_MAX_SCORE` | `55` | At or below = healthy run |
| `RELEASE_RISK_RECOVERY_STREAK` | `2` | Consecutive healthy runs before `gh-issue-close-on-recovery` |

## Env (webhooks)

| Variable | Default | Purpose |
|----------|---------|---------|
| `RELEASE_RISK_WEBHOOK_MIN_SCORE` | `50` | Notify when `riskScore` ≥ this |
| `RELEASE_RISK_WEBHOOK_COOLDOWN_HOURS` | `12` | Dedupe noisy repeats |
| `AUTOMATION_DIGEST_SLACK_WEBHOOK` / `DISCORD_WEBHOOK_URL` / `GENERIC_WEBHOOK_URL` | — | Same as observability EMA digest |

## Env (score tuning)

| Variable | Default | Purpose |
|----------|---------|---------|
| `RELEASE_RISK_SCALE_REGRESSION` | `1` | Multiplier on regression penalty sum |
| `RELEASE_RISK_SCALE_ROUTE` | `1` | Multiplier on route drift sum |
| `RELEASE_RISK_SCALE_SMOKE` | `1` | Multiplier on smoke sum |

Weights are echoed in `release-risk-score-latest.json` under `weights`.

Strict exit for CI gates: `RELEASE_RISK_SCORE_STRICT=1` — `release-risk-score.cjs` exits `1` when `riskScore >= 75`.
