# Free AI Tools — Zion Tech Group

The project uses a **multi-provider LLM chain** with advanced free AI tools. Providers are tried in order; the first successful response is used.

## Provider Chain

| Order | Provider | Free Tier | Setup |
|-------|----------|----------|-------|
| 1 | **Ollama** | Unlimited (local) | `npm run llm:install` |
| 2 | **Groq** | Free tier, ultra-fast | [console.groq.com](https://console.groq.com) → API Keys |
| 3 | **Google Gemini** | 1.5k req/day, 15 RPM | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) |
| 4 | **Cloudflare Workers AI** | 10k Neurons/day | [dash.cloudflare.com](https://dash.cloudflare.com) → Workers AI |
| 5 | **Cohere** | 1k req/month trial | [dashboard.cohere.com](https://dashboard.cohere.com) |
| 6 | **OpenRouter** | Free models available | [openrouter.ai](https://openrouter.ai) |

## Quick Setup

### 1. Ollama (Local, No Key)

```bash
npm run llm:install
# Then: ollama serve (or it auto-starts)
```

### 2. Groq (Free, Fast)

1. Sign up at [console.groq.com](https://console.groq.com)
2. Create an API key
3. Add to `.env`: `GROQ_API_KEY=gsk_...`

### 3. Google Gemini (Free)

1. Get key at [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Add to `.env`: `GEMINI_API_KEY=...`
3. Optional: `GEMINI_MODEL=gemini-2.5-flash-preview-09-2025` for latest model

### 4. Cloudflare Workers AI (10k Neurons/day)

1. Sign up at [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to Workers AI → copy Account ID
3. Create API token with Workers AI Read + Edit
4. Add to `.env`: `CLOUDFLARE_ACCOUNT_ID=...`, `CLOUDFLARE_API_TOKEN=...`

### 5. Cohere (1k req/month trial)

1. Sign up at [dashboard.cohere.com](https://dashboard.cohere.com)
2. Create a trial API key
3. Add to `.env`: `COHERE_API_KEY=...`

### 6. OpenRouter (Fallback)

1. Sign up at [openrouter.ai](https://openrouter.ai)
2. Add to `.env`: `OPENROUTER_API_KEY=sk-or-v1-...`

## Netlify / AI Chat Widget

For the production chat widget, add at least one cloud key to Netlify env vars:

- **Site settings** → **Environment variables**
- Add: `GROQ_API_KEY`, `GEMINI_API_KEY`, `CLOUDFLARE_ACCOUNT_ID`+`CLOUDFLARE_API_TOKEN`, `COHERE_API_KEY`, or `OPENROUTER_API_KEY`

The chat works without any key (rule-based fallback for common questions), but LLM responses require at least one configured provider.

## Automation Agents

All automation agents (`ai-*-agent.cjs`, pipelines) use the same `automation/lib/llm-client.cjs`. They automatically benefit from Groq and Gemini when configured.

## Testing

```bash
npm run llm:test
```

This tests the first available provider. To force a specific provider, set others to empty or disable Ollama with `OLLAMA_ENABLED=false`.
