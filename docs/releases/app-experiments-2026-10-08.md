# App Experiment Planner — 2026-10-08

Approved additive publication: five static translated planner pages (en, pt-BR, es, fr, de), five matching homepage promotions and reciprocal navigation for available ROI Calculator, FinOps Estimator, AI Governance Checklist, SLA Calculator, Site Survey Planner and Automation Pilot Planner pages.

The planner is browser-only: no network submissions, no storage, no purchases, no deployment. It generates a plain-text experiment brief with baseline, success target, owner, human review and rollback criteria. Input uses textContent; download uses a revoked object URL. Brand/tool names are not translated.

Production is assembled from public/ into out/ with artifact-only renderers. Run render-app-experiments.cjs after render-network-benefits.cjs, then test-app-experiments.cjs before upload. Publication manifest: /apps/app-experiment-publication.json. Five canonical language routes have reciprocal hreflang links and the shared Discovery stylesheet.

Scope limits: this release does not claim complete translation of every app interface or production readiness. Discovery remains free. Provider email acceptance is not confirmed inbox receipt. No live email test was sent; a user-approved test client address is still required.

Baseline fresh HTTP check: five homepages, six linked tools, five Discovery routes and shared stylesheet returned 200. Offline regression passed for five-language form generation, safe text rendering, download handlers and navigation. Recheck fresh deployed release markers and manifest after workflow completion.
