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

LLM-powered automations use **local Ollama (primary)** and **OpenRouter (fallback)**:

1. **Local:** `npm run llm:install` — installs Ollama and pulls `llama3.2:3b` (free, no API key)
2. **Fallback:** Add `OPENROUTER_API_KEY` to `.env` for when Ollama is unavailable
3. Add `OPENROUTER_API_KEY` to GitHub repo secrets for workflows (CI has no Ollama)

```bash
npm run llm:test         # Test LLM (Ollama or OpenRouter)
npm run app:audit        # Audit live site with LLM
npm run app:audit-apply  # Apply safe suggestions
```

## Notes

- This repository includes both product UI and automation workflows.
- Never commit secrets (`.env`, tokens, credentials).
