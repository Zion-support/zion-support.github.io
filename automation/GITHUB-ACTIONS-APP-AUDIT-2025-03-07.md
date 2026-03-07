# GitHub Actions & App Audit (2025-03-07)

Audit of all GitHub Actions workflows and live app (https://ziontechgroup.com) to drive new automations and improvements.

## Scope

- **Workflows audited:** 74 workflow files in `.github/workflows/`
- **App:** Zion Tech Group – AI & IT Solutions (Next.js 16 static export, ~458 pages)
- **Live site:** https://ziontechgroup.com

## Workflow Categories (Summary)

| Category | Examples | Schedule / Trigger |
|----------|----------|---------------------|
| **CI/CD** | ci-cd.yml, deploy-on-push.yml, deploy-preflight.yml | push/PR, workflow_run, workflow_dispatch |
| **App evolution** | ai-app-visit-audit-implement-deploy.yml, ai-app-evolution-audit.yml, ai-app-visit-intelligence.yml | Wed/Sat, Mon, workflow_dispatch |
| **Content** | ai-content-ideas-to-deploy, ai-ultra-fast-content, ai-weekly-content-seo-hygiene | 3–6x daily, Mon 06 UTC |
| **Links & nav** | ai-broken-link-fixer.yml, ai-navigation-audit-fix.yml, ai-site-link-audit-automation.yml | Mon/Thu, Wed/Sat, manual |
| **Quality & health** | production-health-monitor.yml, lighthouse-production.yml, ai-production-deploy-validation.yml | 6h, Sun 12 UTC, after deploy |
| **Audit & improvement** | ai-github-actions-audit.yml, ai-automation-audit.yml, ai-automation-improvements.yml | Sun 9 UTC, Sat 11 UTC, Wed 10 UTC |
| **Security & deps** | ai-weekly-security-audit.yml, dependency-review.yml, codeql-analysis.yml | Weekly, PR |
| **Accessibility** | ai-accessibility-audit.yml | Tue 8 UTC, PR (app/**) |

## Findings

### Strengths

- **Visit → Audit → Implement → Deploy** loop is well covered (ai-app-visit-audit-implement-deploy, evolution audit, visit intelligence).
- **Broken links:** Codebase (ai-broken-link-fixer) and live site (ai-site-link-audit) both covered.
- **Production health:** production-health-monitor (6h), SSL check, security headers, issue creation on failure.
- **Post-deploy:** deploy-on-push smoke test + UX verification; ai-production-deploy-validation (sitemap, SEO, link check).
- **Content & SEO:** Weekly content freshness + SEO meta (Mon 06 UTC); multiple content velocity workflows.

### Gaps Addressed by New/Updated Automations

1. **Live-site accessibility on schedule**  
   - **Gap:** ai-accessibility-audit runs on PR and Tue 8 UTC against **built** site (serve dist + axe). No scheduled audit against **live** ziontechgroup.com.  
   - **Action:** New workflow `ai-live-accessibility-audit.yml` – runs `ai-live-site-accessibility-audit-agent.cjs` weekly (e.g. Thu 7 UTC), uploads report artifact.

2. **Dependency hygiene on schedule**  
   - **Gap:** dependency-review and codeql on PR; no weekly “npm audit + outdated” that can auto-open issues or report.  
   - **Action:** New workflow `ai-weekly-dependency-hygiene.yml` – npm audit, optional outdated report, artifact; optional issue on critical vulns.

3. **Post-deploy validation chained to deploy**  
   - **Current:** ai-production-deploy-validation runs on workflow_run (Deploy on Push). Good.  
   - **Enhancement:** Ensure Production Health Monitor can optionally trigger after deploy (already runs every 6h; no change required). Document that deploy validation runs after every deploy.

4. **Accessibility workflow build output**  
   - **Bug:** ai-accessibility-audit served `out` but Next.js is configured with `distDir: 'dist'` (output in `dist/`).  
   - **Action:** Fixed to `serve dist` in ai-accessibility-audit.yml.

5. **GitHub Actions audit → implementation**  
   - **Current:** ai-github-actions-audit.yml runs audit + implementation agent (AUTO_COMMIT when schedule or input).  
   - **Enhancement:** Ensure implementation agent can create new workflows from suggestions (implementation agent already supports new workflow creation from suggestions file).

## New Workflows Implemented

- **ai-live-accessibility-audit.yml** – Weekly live-site a11y (Thu 7 UTC), upload artifact.
- **ai-weekly-dependency-hygiene.yml** – Weekly npm audit + outdated report (Sun 8 UTC), upload artifact; optional issue on critical vulns.

## Improvements Applied

- **ai-accessibility-audit.yml** – Serve `dist` instead of `out` for axe audit (matches next.config.mjs distDir).

## Secrets / Env

- `OPENROUTER_API_KEY` – evolution, content, audit agents
- `NETLIFY_BUILD_HOOK` – deploy triggers
- Optional: `GROQ_API_KEY`, `GEMINI_API_KEY` for local LLM specialists

## References

- `automation/APP-VISIT-AUDIT-2025-03-07.md` – Visit → audit → implement → deploy
- `automation/README.md` – Visit table, broken links, layout automation
- `automation/ai-github-actions-audit-agent.cjs` – Workflow + app audit (OpenRouter)
- `automation/ai-github-actions-implementation-agent.cjs` – Applies workflow improvements and new workflows from suggestions

---

*Generated from GitHub Actions and app audit. Update when adding or changing workflows.*
