# Release risk score & escalation

Unified scoring over existing automation reports (no extra network beyond what those scripts already use).

## Scripts

| Command | Output |
|--------|--------|
| `npm run release:risk:score` | `automation/reports/release-risk-score-latest.json` (gitignored locally) |
| `npm run release:risk:score:refresh` | Refreshes smoke, drift, aggregate, regression diff, then score |
| `npm run release:risk:escalate` | Deduped GitHub issue `release-risk-elevated` when score ≥ threshold (cooldown-aware) |
| `npm run automation:issue-index` then `npm run automation:triage:weekly:digest` | `weekly-automation-triage-digest-latest.md` |

## Workflows

- **`ai-release-risk-score.yml`** — Daily refresh of smoke, route/sitemap drift, aggregate reports, regression diff, then score + escalation step.
- **`ai-weekly-automation-triage-digest.yml`** — Weekly markdown digest from the automation issue index.
- **`ai-conservative-autofix-audit.yml`** — Manual dispatch; `npm audit` JSON + lint (informational).

## Env (escalation)

| Variable | Default | Purpose |
|----------|---------|---------|
| `RELEASE_RISK_ESCALATE_MIN` | `75` | Minimum `riskScore` to open/update issue |
| `RELEASE_RISK_ESCALATE_COOLDOWN_HOURS` | `24` | Hours between escalations |
| `RELEASE_RISK_ESCALATE_DRY_RUN` | — | `1` = no `gh` calls |

Strict exit for CI gates: `RELEASE_RISK_SCORE_STRICT=1` — `release-risk-score.cjs` exits `1` when `riskScore >= 75`.
