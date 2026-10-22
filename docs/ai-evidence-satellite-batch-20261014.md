# Zion next-generation evidence labs — repository-ready satellite apps

Three tested static browser tools live in source here under `public/<slug>/index.html` and are featured from `public/index.html` and `public/apps/index.html`.

- `agent-trace-evidence-lab`: locally parse OTLP-style spans, token/latency coverage and basic sensitive-attribute patterns.
- `field-sla-acceptance-matrix`: technician/PO/client/Zion gate checks plus **internal only** all-in cost ×1.40.
- `ai-dependency-blast-radius`: validate dependency graph and simulate transitive downstream failure impact.

## Exact publishing mechanics
The main Pages release job assembles its artifact from `public/`. All three source directories have `index.html` and canonical links. No external scripts/CDNs/API keys, browser-only heuristics.

The connector available to this run **cannot create a GitHub repository, enable Pages, or enforce HTTPS**. The three unique stand-alone repositories must still be created and activated by a repo administrator. For GitHub project Pages sites with no per-project custom-domain override, an organization/user Pages apex domain may be inherited at `https://ziontechgroup.com/<repository-name>/`. See GitHub documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages

Never put a competing `CNAME` file in each project repo. For each future repo: create **public repo** under Zion-support named exactly as the slug, copy its corresponding `index.html` as root `index.html`, enable Pages deployment from main/root, ensure `Enforce HTTPS` is on, then independently verify status 200, canonical, navigation and certificate before promotion. Preserve manual-only main release until CI/current-head/privacy approval.

Functional tests run locally on Node 22: trace valid/invalid, SLA PO hold and 1.4x math, dependency graph transitive blast radius and invalid edges. Browser visual QA could not be completed because the environment blocks Chromium navigation; do not declare this a visual QA pass or production launch.

Tools are deterministic browser assessments, NOT remote hosted AI, certified compliance checks, live customer systems or dispatch engines. `/discovery/` is free and online; no live payment links/prices have been added.

Research foundations: https://opentelemetry.io/blog/2026/genai-observability/ ; https://www.nist.gov/itl/ai-risk-management-framework .
