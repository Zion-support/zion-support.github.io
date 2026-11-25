# Zion Tech Group — Site Integrity Check Report (2026-11-20)

Run: cron (2026-11-20 02:14 -03). Sources: /Users/miami2/zion.app/automation/* + /Users/miami2/zion-support/zion-support.github.io (public/export).

## CHECKS
Ran (all against https://ziontechgroup.com):
- `check_zion_routes.py` — 8 routes incl. homepage (trailing-slash normalized)
- `key_routes_probe.py` — 7 key routes (writes key_routes_probe.json)
- `deep_route_check.py` — 7 key routes, title/marker scan
- `targeted_route_check.py` — 8 routes, raw status + body snippet
- `_fresh_site_integrity_check.py` — live HTTP probe + repo cross-check (public/) + sitemap check
- `site_integrity_run.py` — bounded 200-page crawl (scope-adjacent, for context)

## FIXES
None required for the key route group (all 200, repo in sync, sitemap populated — see results).
Out-of-scope findings from the bounded crawl, reported only, not modified:
- 2 intentional subdomain 301s: /zion-ai-code-assistant/ -> code-assistant.ziontechgroup.com, /zion-ai-chatbot-builder/ -> chatbot-builder.ziontechgroup.com
- 5 legacy i18n placeholder 404s: /undefined/ and /de/|/es/|/fr/|/pt//undefined/ (pre-existing, outside key scope; not altered)

## RESULTS (9/9 200)
| Route | Status | Canonical | Repo in sync |
|---|---|---|---|
| / (homepage) | 200 | https://ziontechgroup.com/ | n/a |
| /public-roadmap/ | 200 | /public-roadmap/ | IN SYNC |
| /status-page/ | 200 | /status-page/ | IN SYNC |
| /use-cases/ | 200 | /use-cases/ | IN SYNC |
| /solutions/healthcare/ | 200 | /solutions/healthcare/ | IN SYNC |
| /industries/financial-services/ | 200 | /industries/financial-services/ | IN SYNC |
| /free-consultation/ | 200 | /free-consultation/ | IN SYNC |
| /tools/phishing-analyzer/ | 200 | /tools/phishing-analyzer/ | IN SYNC |

- Live HTTP: 8/8 key routes 200 (superseded snapshot key_routes_probe.json written to automation dir).
- Repo cross-check: all 7 key route public/*.html match live content (SHA1 of first 2KB).
- Sitemap: sitemap.xml -> 200; sitemap-0.xml -> 200 with all 7 key routes present.
- Canonical URLs: all match their route URLs (check_zion_routes.py canonical check).

Note: /public-roadmap and /status-page are intentional aliases (committed_public_routes.json): /public-roadmap/ meta-refreshes to /heritage/; /status-page/ meta-refreshes to /status/. Content reflects this; not a defect.

END
