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
4. **Hugging Face** (300 req/hr) — [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)
5. **Cerebras** (1M tokens/day) — [cloud.cerebras.ai](https://cloud.cerebras.ai)
6. **Cloudflare Workers AI** (10k Neurons/day) — [dash.cloudflare.com](https://dash.cloudflare.com)
7. **DeepSeek** (5M tokens free) — [platform.deepseek.com](https://platform.deepseek.com)
8. **Mistral AI** (free tier) — [console.mistral.ai](https://console.mistral.ai)
9. **Together AI** (free research models) — [together.ai](https://together.ai)
10. **Cohere** (1k req/month trial) — [dashboard.cohere.com](https://dashboard.cohere.com)
11. **OpenRouter** (fallback)

Add `GROQ_API_KEY`, `GEMINI_API_KEY`, `HUGGINGFACE_HUB_TOKEN`, `CEREBRAS_API_KEY`, `CLOUDFLARE_ACCOUNT_ID`+`CLOUDFLARE_API_TOKEN`, `DEEPSEEK_API_KEY`, `MISTRAL_API_KEY`, `TOGETHER_API_KEY`, `FIREWORKS_API_KEY`, `COHERE_API_KEY`, or `OPENROUTER_API_KEY` to `.env` for cloud fallbacks. See `docs/FREE-AI-TOOLS.md`.

**Free embeddings**: Gemini (1,500 req/day) or Hugging Face (300 req/hr) — `npm run embedding:test`

**Free image generation**: Pollinations.ai — `npm run image:generate "prompt"` | Replicate FLUX — `npm run image:replicate "prompt"`

**Voice & TTS**: Web Speech API (browser, no key) — mic and speaker in AI Chat Widget

```bash
npm run llm:test         # Test LLM (Ollama, Groq, Gemini, Cloudflare, Cohere, or OpenRouter)
npm run image:generate   # Test AI image generation (Pollinations.ai)
npm run app:audit        # Audit live site with LLM
npm run app:audit-apply  # Apply safe suggestions
```

## Notes

- This repository includes both product UI and automation workflows.
- Never commit secrets (`.env`, tokens, credentials).
