# Content Automation Setup

High-speed content generation using OpenRouter (free tier).

## Prerequisites

1. **OpenRouter API Key**: Get one at [openrouter.ai](https://openrouter.ai)
2. **Model**: Uses `openrouter/free` (zero-cost, 20 req/min, 200 req/day)

## Local Setup

```bash
# Add to .env (never commit)
OPENROUTER_API_KEY=sk-or-v1-your-key
OPENROUTER_MODEL=openrouter/free
```

## GitHub Actions

Add `OPENROUTER_API_KEY` to repo secrets:

1. Repo → Settings → Secrets and variables → Actions
2. New repository secret: `OPENROUTER_API_KEY` = your key

The workflow `ai-content-automation.yml` runs Tue/Thu 4 AM UTC and on `workflow_dispatch`.

## Commands

| Command | Description |
|---------|-------------|
| `npm run content:fast` | Blog + front page expansion (parallel) |
| `npm run content:fast-commit` | Same + auto-commit and push |
| `npm run content:ideate` | LLM-powered content ideas (blog, industries, case studies) |
| `npm run content:front-page-expand` | Front page only |

## Options

- `MAX_BLOG_POSTS=2` — Limit new blog posts per run (default: 2)
- `SKIP_BLOG=1` — Skip blog generation
- `SKIP_FRONT_PAGE=1` — Skip front page expansion
- `AUTO_COMMIT=1` — Commit and push after generation
