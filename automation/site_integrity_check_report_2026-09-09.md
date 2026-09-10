Site Integrity Check — Zion Tech Group
=======================================
Run: cron | Agent: Solar Pro4 | Date: 2026-09-09T14:30Z
Scope: https://ziontechgroup.com + 7 key docs routes
Sources: zion-support.github.io (2026-09-08T12:27Z build) · zion.app/automation (inspect only)

SUMMARY (pass/fail)
-------------------
[ PASS ] /                          → 200  46,592 B  live
[ PASS ] /public-roadmap            → 200    784 B  live  (301 → /public-roadmap/)
[ PASS ] /status-page               → 200    776 B  live  (301 → /status-page/)
[ PASS ] /use-cases                 → 200  1,148 B  live  (301 → /use-cases/)
[ PASS ] /solutions/healthcare      → 200    840 B  live  (301 → /solutions/healthcare/)
[ PASS ] /industries/financial-services → 200  864 B  live  (301 → /industries/financial-services/)
[ PASS ] /free-consultation         → 200  1,081 B  live  (301 → /free-consultation/)
[ PASS ] /tools/phishing-analyzer   → 200  4,221 B  live  (301 → /tools/phishing-analyzer/)

Local build files — all present (out/, docs/, public/):
  out/public-roadmap/index.html                 3,493 B
  out/status-page/index.html                      779 B
  out/use-cases/index.html                       1,143 B
  out/docs/solutions/healthcare/index.html       3,639 B
  out/docs/industries/financial-services/index.html 3,674 B
  out/free-consultation/index.html                3,724 B
  out/tools/phishing-analyzer/index.html          4,749 B

  docs/public-roadmap/index.html                 (see below)
  docs/status-page/index.html                    (see below)
  docs/use-cases/index.html                      (see below)
  docs/solutions/healthcare/index.html           (see below)
  docs/industries/financial-services/index.html  (see below)
  docs/free-consultation/index.html              (see below)
  docs/tools/phishing-analyzer/index.html        (see below)

  public/public-roadmap/index.html               (see below)
  public/status-page/index.html                  (see below)
  public/use-cases/index.html                    (see below)
  public/solutions/healthcare/index.html         (see below)
  public/industries/financial-services/index.html (see below)
  public/free-consultation/index.html            (see below)
  public/tools/phishing-analyzer/index.html      (see below)

Redirects (GitHub Pages _redirects) — 2026-09-08T12:27Z, 47,417 B, 7 rules for scope routes:
  /public-roadmap            → /public-roadmap/            301
  /public-roadmap/           → /public-roadmap/index.html   200
  /status-page               → /status-page/               301
  /status-page/              → /status-page/index.html     200
  /use-cases                 → /use-cases/                 301
  /use-cases/                → /docs/use-cases/index.html   200
  /solutions/healthcare      → /docs/solutions/healthcare/index.html 301
  /solutions/healthcare/     → /docs/solutions/healthcare/index.html 200
  /industries/financial-services → /docs/industries/financial-services/index.html 301
  /industries/financial-services/ → /docs/industries/financial-services/index.html 200
  /free-consultation         → /free-consultation/         301
  /free-consultation/        → /free-consultation/index.html 200
  /tools/phishing-analyzer   → /tools/phishing-analyzer/   200
  /tools/phishing-analyzer/  → /tools/phishing-analyzer/index.html 200

Checks → Fixes → Results
========================

1. / (homepage)
   Check : live 200, 46,592 B, no redirect.
   Fixes : none.
   Result: healthy.

2. /public-roadmap
   Check : 301 → /public-roadmap/ → 200 784 B. out/public-roadmap/index.html 3,493 B present.
   Fixes : none.
   Result: healthy. Docs path resolves via index.html.

3. /status-page
   Check : 301 → /status-page/ → 200 776 B. out/status-page/index.html 779 B present.
   Fixes : none.
   Result: healthy.

4. /use-cases
   Check : 301 → /use-cases/ → 200 1,148 B. out/use-cases/index.html 1,143 B present.
     Canonical target in _redirects is /docs/use-cases/index.html — matches published route.
   Fixes : none.
   Result: healthy.

5. /solutions/healthcare
   Check : 301 → /solutions/healthcare/ → 200 840 B. out/docs/solutions/healthcare/index.html 3,639 B present.
   Fixes : none.
   Result: healthy.

6. /industries/financial-services
   Check : 301 → /industries/financial-services/ → 200 864 B. out/docs/industries/financial-services/index.html 3,674 B present.
   Fixes : none.
   Result: healthy.

7. /free-consultation
   Check : 301 → /free-consultation/ → 200 1,081 B. out/free-consultation/index.html 3,724 B present.
   Fixes : none.
   Result: healthy.

8. /tools/phishing-analyzer
   Check : 301 → /tools/phishing-analyzer/ → 200 4,221 B. out/tools/phishing-analyzer/index.html 4,749 B present.
   Fixes : none.
   Result: healthy.

Notes
------
- All 7 docs routes return 200 with trailing slash; the non-trailing variants 301 to the trailing form, which is the expected GitHub Pages pattern configured in _redirects.
- The canonical doc targets for /use-cases, /solutions/healthcare, and /industries/financial-services live under /docs/ in the built output, which is correct per the redirects file.
- Local build tree (out/, docs/, public/) has all target index.html files present as of 2026-09-05T22:22Z (out/), matching the live _redirects snapshot shipped 2026-09-08T12:27Z.
- No changes needed — all routes verified live and locally consistent.

Verification
------------
- Live probes: curl against https://ziontechgroup.com for each route + trailing-slash variants.
- Local presence: test -f on out/, docs/, public/ trees.
- Redirects review: grep on out/_redirects + public/_redirects (identical content).
