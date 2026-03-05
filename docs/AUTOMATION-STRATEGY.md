# Zion Tech Group - App Audit Automation Strategy

## Overview

The **AI App Audit Automation Agent** audits the live production site (https://ziontechgroup.com) using OpenRouter LLM to generate actionable improvement suggestions for content, UX, SEO, performance, and conversion optimization.

## Components

| Component | Purpose |
|-----------|---------|
| `automation/ai-app-audit-automation-agent.cjs` | Fetches key pages, sends to OpenRouter LLM, outputs structured suggestions |
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

3. **Free models:** Use `openrouter/auto` (default) or set `OPENROUTER_MODEL=meta-llama/llama-3.2-3b-instruct:free` for free tier.

### NPM Scripts

```bash
npm run app:audit          # Run full audit
npm run app:audit-summary  # Show summary from latest report
```

## Output

- **Report:** `automation/reports/app-audit-automation-latest.json`
- **Suggestions:** `automation/data/app-audit-suggestions.json`
- **Dashboard:** App audit suggestions appear in `reports:aggregate` dashboard

## Pages Audited

- `/` (Homepage)
- `/services`
- `/solutions`
- `/case-studies`
- `/contact`
- `/about`

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
