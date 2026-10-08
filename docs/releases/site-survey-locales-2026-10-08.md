# Site survey and localized planning directories — 2026-10-08

This additive release publishes five language-complete static Site Survey Planner checklists (EN, PT-BR, ES, FR, DE), five translated curated planning-tool directory pages, locale-preserving planner/survey round trips and five homepage spotlights.

Previously /pt/apps/, /es/apps/, /fr/apps/ and /de/apps/ returned 404. The new pages explicitly describe a curated planning selection, not the complete app catalog or full-network translation. English curated directory: /apps/planning-tools.html. Site Survey Planner: /site-survey-planner/ and /site-survey-planner/{pt,es,fr,de}/. All scope/limits, checklist steps, descriptions, delivery caveats and navigation are translated. Product names remain brands.

Production remains public/ -> out/ using the existing workflow and source-binding stage. This stage now also renders locale directories, preserves the selected locale in survey links and adds idempotent homepage spotlights. test-planning-locales.cjs is required before publication; it verifies five directories, seven tool cards, metadata parity, reciprocal links and homepage markers. The standalone repository has its own five-language static regression test.

Browser QA of the previous App Experiment Planner confirmed real brief generation and an observed .txt download containing synthetic test inputs. Portuguese labels/help passed. Initial apparent mobile overflow was INVALID evidence because the browser agent overwrote window.innerWidth. Corrective QA used a genuine 390px same-origin iframe: clientWidth and scrollWidth both 375px, no horizontal overflow. This is narrow CSS layout evidence, not physical mobile device testing. Portuguese root home is intentional lang=pt-BR. No stylesheet rewrite was needed.

Browser evidence: https://cdn.browser-use.com/screenshots/e1b7ba37-ef45-4cbf-b6ca-3af71a4b00af/28.png
Publication manifest: /apps/planning-locales-publication.json.

No Discovery submission, email, payment, dispatch or deployment integration was performed by browser QA. Actual Discovery inbox receipt remains unverified without an approved test-client inbox. Full-network interface translation remains an audited backlog.
