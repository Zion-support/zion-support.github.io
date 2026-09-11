# Hermes content creation loop — Zion Tech Group

Unattended SEO publishing for https://ziontechgroup.com without thin pages.

## Why this exists

Search Console (2026-07-01 → 2026-09-09) shows brand clicks and almost no commercial clicks. Impressions leak to leftover catalog queries (`affectiva`, `data build tool`) while real queries (`ai agents for msps`, `ai finops`, `adaptive ai agents for business`) sit on deep positions. ~300 `/blog/*` files are `noindex` stubs. Quality compounding beats another catalog dump.

## Architecture

```
content-loop/briefs/*.json   unique article briefs (source of truth)
        ↓  scripts/content_loop/run.py
quality gates (words, FAQ, schema, canonical, /book/ CTA, no hype)
        ↓
public/blog/<slug>/index.html
public/blog/index.html          quality posts only
public/blog/feed.xml
public/sitemap-blog.xml
public/llms.txt                 indexable list for AI search
content-loop/bank.json          satellite queue (exponential, not duplicate)
content-loop/distribution/      LinkedIn + Telegram copy
```

GitHub Actions: `.github/workflows/content-loop.yml` daily 07:00 UTC + `workflow_dispatch`.

Hermes cron: same `run.py`, `workdir` = repo, **never** `--model local`.

## Suggested Hermes cron

```text
Every weekday 07:30 UTC. workdir = zion repo root.
Provider nous, model stepfun/step-3.7-flash:free (not local).
Prompt: Follow skills/content-loop/SKILL.md. Publish up to 2 quality briefs.
If the brief folder is dry, write one unique brief from bank.json using GSC queries if Composio works.
Commit. Telegram: slugs, word counts, remaining briefs. No status-loop language.
```

Pin existing drifted jobs with `bash scripts/pin-hermes-local-model-jobs.sh`.

## Quality bar (non-negotiable)

- ≥700 words of unique operational advice
- 4+ H2, 3+ FAQ, BlogPosting + FAQ JSON-LD, canonical
- CTA to `/book/` or `/discovery/`
- Forbidden: free consultation, guaranteed ROI, “Not a packaged SKU”
- Honest prices: Discovery $99, Consulting $499, Starter $2,500, Growth $8,000/mo

## Exponential mechanism

Each published parent spawns up to 3 satellite angles into `bank.json` (max 240 queued). Hermes fills satellites as new briefs. Clusters: AI agents/MSPs, FinOps, Zero Trust/SMB, WhatsApp/LGPD, Hermes/Composio, commercial Discovery.

## Distribution

JSON under `content-loop/distribution/`. Push via Composio LinkedIn/Telegram only when those connections are ACTIVE. Do not email leftover Zion Outreach contacts.

## Manual run

```bash
python3 tests/test_content_loop.py
python3 scripts/content_loop/run.py --limit 2 --refresh-index
```
