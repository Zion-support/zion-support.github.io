# Zion Tech Group

Production website and AI solutions platform powering https://ziontechgroup.com.

## Quick start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

## Quality checks

```bash
npm run lint:check
npm run type-check
npm run test:ci
```

## Key areas

- `app/` – Next.js App Router pages and components
- `automation/` – autonomous agents and optimization scripts
- `commands/` – utility and orchestration scripts

## Automation (AI audits)

For app audit and other LLM-powered automations:

1. Add `OPENROUTER_API_KEY` to `.env` for local runs
2. Add `OPENROUTER_API_KEY` to GitHub repo secrets (Settings → Secrets → Actions) for workflows
3. Free model: `meta-llama/llama-3.2-3b-instruct:free` (default)

```bash
npm run app:audit        # Audit live site with LLM
npm run app:audit-apply  # Apply safe suggestions
```

## Notes

- This repository includes both product UI and automation workflows.
- Never commit secrets (`.env`, tokens, credentials).
