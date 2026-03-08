# GitHub Actions & Live App Audit (2026-03-08)

Audit of all GitHub Actions workflows and live app (https://ziontechgroup.com) to drive automations and improvements. Live site visited 2026-03-08.

## Scope

- **Workflows audited:** 82 workflow files in `.github/workflows/`
- **App:** Zion Tech Group – AI & IT Solutions (Next.js 16 static export, ~458 pages)
- **Live site:** https://ziontechgroup.com

## Live App Snapshot (2026-03-08)

- **Homepage:** Hero, Advanced AI Services (8 cards), Core Services, Launch roadmap, ROI estimator, case studies, testimonials, trust metrics. CTAs to /contact, /solutions, /pricing, /ai-services.
- **Key routes:** /, /services, /solutions, /contact, /about, /blog, /pricing, /industries, /case-studies, /products, /ai-services, /consultation, /site-map.
- **Forms:** Contact flows use commercial@ziontechgroup.com (app/utils/seoConstants).
- **Features:** ROI snapshot, launch advisor, interactive planning, case study filters by industry.

## Workflow Categories

| Category | Examples | Schedule / Trigger |
|----------|----------|---------------------|
| **CI/CD** | ci-cd.yml, deploy-on-push.yml, deploy-preflight.yml | push/PR, workflow_run, workflow_dispatch |
| **App evolution** | ai-app-visit-audit-implement-deploy.yml, ai-app-evolution-audit.yml | Wed 12 UTC, Sat 14 UTC, workflow_dispatch |
| **Content** | ai-content-ideas-deploy, ai-ultra-fast-content, ai-weekly-content-seo-hygiene | 3–6x daily, Mon 06 UTC |
| **Links & nav** | ai-broken-link-fixer.yml, ai-navigation-audit-fix.yml, ai-site-link-audit-automation.yml, **ai-weekly-live-link-audit.yml** | Mon/Thu 06:30, Tue/Fri 08, **Thu 09**, Wed/Sat, manual |
| **Live app auto-fix** | **ai-weekly-live-app-audit-auto-fix.yml** | **Sat 9 UTC** (audit + fix + commit + deploy) |
| **Quality & health** | production-health-monitor.yml, lighthouse-production.yml, ai-production-deploy-validation.yml | 6h, Sun 12 UTC, after deploy |
| **Audit & improvement** | ai-github-actions-audit.yml, ai-automation-audit.yml, ai-automation-improvements.yml | Sun 9 UTC, Sat 11 UTC, Wed 10 UTC |
| **Security & deps** | ai-weekly-security-audit.yml, dependency-review.yml, codeql-analysis.yml | Weekly, PR |
| **Accessibility** | ai-accessibility-audit.yml, ai-live-accessibility-audit.yml | Tue 8 UTC (build), Thu 7 UTC (live) |
| **Live site audits** | ai-live-ux-audit.yml, ai-live-app-audit.yml | Tue 7 UTC (UX), Fri 8 UTC (live app) |

## New Automations Implemented (This Audit)

1. **ai-weekly-live-link-audit.yml** – Weekly live site link audit (Thu 9 UTC). Runs `site:links:audit` against production, uploads artifact; creates/updates issue if broken links exceed threshold (default 5). Uses `actions/github-script` for issue create/comment; report path fixed for Node require.
2. **ai-weekly-live-app-audit-auto-fix.yml** – Weekly automated fix run (Sat 9 UTC). Runs live UX audit, merge live UX ideas to backlog, site link audit, broken-link fixer, UX auto-fix; commits and pushes to main; triggers Netlify deploy. Complements ai-live-app-audit (Fri, manual apply_fix/auto_commit).
3. **merge-live-app-ideas-to-backlog.cjs** – Merges `live-site-ux-audit-latest.json` ideas (from failed checks) into `app-evolution-backlog.json` as implementationTasks with source `live_site_ux_audit`. Used in evolution pipeline and weekly auto-fix.
4. **ci-cd.yml** – Uses `node-version-file: '.nvmrc'` for consistency with deploy-on-push and other workflows; single source of truth for Node version.

## Recommendations (Future)

- Consider consolidating overlapping content-velocity workflows to reduce CI load.
- Keep production-health-monitor (6h), core-web-vitals (12h), and deploy validation as-is; they provide good coverage.
- Ensure OPENROUTER_API_KEY and NETLIFY_BUILD_HOOK are set in repo secrets for full automation.

## Secrets / Env

- `OPENROUTER_API_KEY` – evolution, content, audit agents
- `NETLIFY_BUILD_HOOK` – deploy triggers
- `GITHUB_TOKEN` / `GH_TOKEN` – for bot commits/push (write contents)

## References

- `automation/ai-github-actions-audit-agent.cjs` – Workflow + app audit (OpenRouter)
- `automation/ai-github-actions-implementation-agent.cjs` – Applies workflow improvements from suggestions
- `automation/merge-github-actions-app-ideas-to-backlog.cjs` – Merges app automation ideas into evolution backlog
- `automation/merge-live-app-ideas-to-backlog.cjs` – Merges live UX audit ideas into evolution backlog
- `README.md` – Quick start, quality checks, automation overview

---

*Generated from GitHub Actions and live app audit. Update when adding or changing workflows.*
