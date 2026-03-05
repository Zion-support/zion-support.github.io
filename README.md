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

LLM-powered automations use a **multi-provider chain** (first available):

1. **Ollama** (local, free) — `npm run llm:install`
2. **Groq** (free tier, ultra-fast) — [console.groq.com](https://console.groq.com)
3. **Google Gemini** (free tier, 1.5k req/day) — [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
4. **Cloudflare Workers AI** (10k Neurons/day) — [dash.cloudflare.com](https://dash.cloudflare.com)
5. **Cohere** (1k req/month trial) — [dashboard.cohere.com](https://dashboard.cohere.com)
6. **OpenRouter** (fallback)

Add `GROQ_API_KEY`, `GEMINI_API_KEY`, `CLOUDFLARE_ACCOUNT_ID`+`CLOUDFLARE_API_TOKEN`, `COHERE_API_KEY`, or `OPENROUTER_API_KEY` to `.env` for cloud fallbacks. See `docs/FREE-AI-TOOLS.md`.

```bash
npm run llm:test         # Test LLM (Ollama, Groq, Gemini, Cloudflare, Cohere, or OpenRouter)
npm run app:audit        # Audit live site with LLM
npm run app:audit-apply  # Apply safe suggestions
```

## Notes

- This repository includes both product UI and automation workflows.
- Never commit secrets (`.env`, tokens, credentials).
