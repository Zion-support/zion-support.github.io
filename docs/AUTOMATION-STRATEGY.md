# Zion Tech Group - App Audit Automation Strategy

## Overview

The **AI App Audit Automation Agent** audits the live production site (https://ziontechgroup.com) using OpenRouter LLM to generate actionable improvement suggestions for content, UX, SEO, performance, and conversion optimization.

## Components

| Component | Purpose |
|-----------|---------|
| `automation/ai-app-audit-automation-agent.cjs` | Fetches key pages, sends to OpenRouter LLM, outputs structured suggestions |
| `automation/ai-app-audit-implementation-agent.cjs` | Applies safe high-priority suggestions (meta, SEO) from audit |
| `.github/workflows/ai-app-audit-automation.yml` | Weekly Saturday 10 AM UTC + manual trigger |
| `automation/cron/automation.cron` | Weekly Saturday 10 AM local |
| `automation/data/app-audit-suggestions.json` | Actionable suggestions for implementation |
| `automation/reports/app-audit-automation-latest.json` | Full audit report (fetch + LLM analysis) |

## Setup

### OpenRouter API Key

1. **Local runs:** Set `OPENROUTER_API_KEY` in `.env` (auto-loaded by automation scripts):
   ```bash
   # .env is loaded automatically; or export before running:
   npm run app:audit
   ```
   See `docs/OPENROUTER-SETUP.md` for full setup.

2. **GitHub Actions:** Add `OPENROUTER_API_KEY` to repository secrets:
   - Settings → Secrets and variables → Actions → New repository secret
   - Name: `OPENROUTER_API_KEY`
   - Value: your OpenRouter API key

3. **Free models:** Default is `meta-llama/llama-3.2-3b-instruct:free`. Override with `OPENROUTER_MODEL=openrouter/auto` for paid routing.

### NPM Scripts

```bash
npm run app:audit           # Run full audit
npm run app:audit-summary   # Show summary from latest report
npm run app:audit-apply     # Apply safe suggestions from audit
npm run app:audit-apply-summary  # Show implementation report
```

## Output

- **Report:** `automation/reports/app-audit-automation-latest.json`
- **Suggestions:** `automation/data/app-audit-suggestions.json`
- **Dashboard:** App audit suggestions appear in `reports:aggregate` dashboard

## GitHub Actions Audit

The **AI GitHub Actions Audit Agent** (`automation/ai-github-actions-audit-agent.cjs`) audits all workflows and the live site. Run:

```bash
OPENROUTER_API_KEY=sk-or-v1-your-key npm run actions:audit
```

Uses `meta-llama/llama-3.2-3b-instruct:free` by default. Output: `automation/reports/github-actions-audit-latest.json`, `automation/data/github-actions-audit-suggestions.json`.

## Pages Audited

- `/` (Homepage)
- `/services`
- `/solutions`
- `/case-studies`
- `/contact`
- `/about`
- `/blog`
- `/ai-services`
- `/industries`

## Suggestion Categories

- **content** – Copy, CTAs, clarity
- **ux** – User experience improvements
- **seo** – SEO opportunities
- **performance** – Performance suggestions
- **conversion** – Conversion optimization
- **feature** – New feature ideas

## Integration

- Report aggregator includes `appAudit` in dashboard
- Cron health monitor tracks `app-audit-cron.log`
- Ecosystem intelligence can suggest app-audit enhancements
