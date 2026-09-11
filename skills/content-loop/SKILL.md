---
name: content-loop
description: Run Zion's uninterrupted SEO content loop — brief, quality gate, git publish, satellite queue. Use when asked to create blog posts, grow organic traffic, or keep Hermes publishing.
---

# Zion content loop (Hermes)

Repo root is the GitHub Pages source (`public/` wins at deploy).

## Never

- `--model local` (Nous HTTP 400)
- Fake ROI / ticket-cut percentages
- Free consultation copy
- Publishing pages with `Not a packaged SKU` or `noindex` as if they were articles
- Emailing leftover outreach lists

## Live offer

Only bookable product: AI/IT Discovery **$99** → https://ziontechgroup.com/book/

## Daily job

```bash
cd "$REPO"
python3 tests/test_content_loop.py
python3 scripts/content_loop/run.py --limit 2 --refresh-index
git add content-loop public/blog public/sitemap-blog.xml public/robots.txt public/llms.txt
git diff --staged --quiet || git commit -m "content-loop: publish next quality SEO posts"
```

If `content-loop/briefs/` is empty of unpublished JSON:

1. Pull Search Console queries (Composio `GOOGLE_SEARCH_CONSOLE_SEARCH_ANALYTICS_QUERY`, site `sc-domain:ziontechgroup.com`).
2. Pick a queued item from `content-loop/bank.json`.
3. Write a unique brief JSON (≥700 words of distinct advice, 4 h2s, 3 FAQs, links to `/book/` `/plans/` `/discovery/`).
4. Re-run the loop.

## Exponential growth

Each published parent may spawn up to 3 satellite topics into `bank.json`. Fill those next. Do not spawn thin duplicates.

## Cron pin

`nous` + `stepfun/step-3.7-flash:free` (or current live id). `workdir` = repo root. Deliver a short Telegram summary: slugs published, quality post count, remaining briefs.
