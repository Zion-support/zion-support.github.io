# Free AI Tools — Zion Tech Group

The project uses a **multi-provider LLM chain** with advanced free AI tools. Providers are tried in order; the first successful response is used.

## Provider Chain

| Order | Provider | Free Tier | Setup |
|-------|----------|----------|-------|
| 1 | **Ollama** | Unlimited (local) | `npm run llm:install` |
| 2 | **Groq** | Free tier, ultra-fast (Llama 3.3 70B optional) | [console.groq.com](https://console.groq.com) → API Keys |
| 3 | **Google Gemini** | 1.5k req/day (2.5 Flash optional) | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) |
| 4 | **Hugging Face** | 300 req/hr, 100k+ models | [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens) |
| 5 | **Cerebras** | 1M tokens/day (Llama 3.1 8B, Qwen 3 235B) | [cloud.cerebras.ai](https://cloud.cerebras.ai) |
| 6 | **Cloudflare Workers AI** | 10k Neurons/day | [dash.cloudflare.com](https://dash.cloudflare.com) → Workers AI |
| 7 | **DeepSeek** | 5M tokens free (DeepSeek-V3, R1) | [platform.deepseek.com](https://platform.deepseek.com) |
| 8 | **Mistral AI** | Free tier (1 req/sec, 1B tokens/month) | [console.mistral.ai](https://console.mistral.ai) |
| 9 | **Together AI** | Free research models (Apriel 15B) | [together.ai](https://together.ai) |
| 10 | **Cohere** | 1k req/month trial | [dashboard.cohere.com](https://dashboard.cohere.com) |
| 11 | **OpenRouter** | Free models available | [openrouter.ai](https://openrouter.ai) |

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

### 4. Hugging Face Inference (300 req/hr free)

1. Create token at [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens) with "Inference Providers" permission
2. Add to `.env`: `HUGGINGFACE_HUB_TOKEN=hf_...`
3. Optional: `HUGGINGFACE_MODEL=Qwen/Qwen2.5-7B-Instruct` (default)

### 5. Cerebras (1M tokens/day free)

1. Sign up at [cloud.cerebras.ai](https://cloud.cerebras.ai)
2. Create an API key (instant access, no waitlist)
3. Add to `.env`: `CEREBRAS_API_KEY=...`
4. Optional: `CEREBRAS_MODEL=llama3.1-8b` (default) or `gpt-oss-120b` for larger model

### 6. Cloudflare Workers AI (10k Neurons/day)

1. Sign up at [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to Workers AI → copy Account ID
3. Create API token with Workers AI Read + Edit
4. Add to `.env`: `CLOUDFLARE_ACCOUNT_ID=...`, `CLOUDFLARE_API_TOKEN=...`

### 7. DeepSeek (5M tokens free)

1. Sign up at [platform.deepseek.com](https://platform.deepseek.com)
2. Create an API key (5M tokens free on signup)
3. Add to `.env`: `DEEPSEEK_API_KEY=...`
4. Optional: `DEEPSEEK_MODEL=deepseek-chat` (default) or `deepseek-reasoner` for reasoning mode

### 8. Mistral AI (Free tier: 1 req/sec, 1B tokens/month)

1. Sign up at [console.mistral.ai](https://console.mistral.ai)
2. Create an API key
3. Add to `.env`: `MISTRAL_API_KEY=...`
4. Optional: `MISTRAL_MODEL=mistral-small-latest` (default)

### 9. Together AI (Free research models)

1. Sign up at [together.ai](https://together.ai)
2. Create an API key
3. Add to `.env`: `TOGETHER_API_KEY=...`
4. Optional: `TOGETHER_MODEL=servicenow/apriel-1.5-15b-thinker` (default)

### 10. Cohere (1k req/month trial)

1. Sign up at [dashboard.cohere.com](https://dashboard.cohere.com)
2. Create a trial API key
3. Add to `.env`: `COHERE_API_KEY=...`

### 11. OpenRouter (Fallback)

1. Sign up at [openrouter.ai](https://openrouter.ai)
2. Add to `.env`: `OPENROUTER_API_KEY=sk-or-v1-...`

## Netlify / AI Chat Widget

For the production chat widget, add at least one cloud key to Netlify env vars:

- **Site settings** → **Environment variables**
- Add: `GROQ_API_KEY`, `GEMINI_API_KEY`, `HUGGINGFACE_HUB_TOKEN`, `CEREBRAS_API_KEY`, `CLOUDFLARE_ACCOUNT_ID`+`CLOUDFLARE_API_TOKEN`, `DEEPSEEK_API_KEY`, `MISTRAL_API_KEY`, `TOGETHER_API_KEY`, `COHERE_API_KEY`, or `OPENROUTER_API_KEY`

The chat works without any key (rule-based fallback for common questions), but LLM responses require at least one configured provider.

## Automation Agents

All automation agents (`ai-*-agent.cjs`, pipelines) use the same `automation/lib/llm-client.cjs`. They automatically benefit from Groq, Gemini, Hugging Face, Cerebras, DeepSeek, Mistral, Together, and other providers when configured.

### Optional model upgrades

- **Groq**: `GROQ_MODEL=llama-3.3-70b-versatile` for 70B model (30 req/min on free tier)
- **Gemini**: `GEMINI_MODEL=gemini-2.5-flash-preview-05-20` for latest Flash (500 req/day)
- **Cerebras**: `CEREBRAS_MODEL=gpt-oss-120b` for 120B model (within 1M tokens/day)
- **DeepSeek**: `DEEPSEEK_MODEL=deepseek-reasoner` for chain-of-thought reasoning

## Testing

```bash
npm run llm:test
```

This tests the first available provider. To force a specific provider, set others to empty or disable Ollama with `OLLAMA_ENABLED=false`.
