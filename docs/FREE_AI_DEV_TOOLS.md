# Free AI Development Tools for Zion Tech Group — Research Notes
*Researched: 2026-06-03 by OWL*

## Top Free/Freemium AI Tools for Faster Development

### 1. Vercel AI SDK (`ai` npm package) — FREE
- Unified API for OpenAI, Anthropic, Google, Mistral, etc.
- Streaming, tool calling, structured output
- **Use case:** Replace our custom AI calling code with a unified interface
- **Website:** https://sdk.vercel.ai

### 2. Claude Code (Anthropic) — FREE for individuals
- AI coding assistant in terminal
- Can generate entire features from prompts
- **Use case:** Auto-generate Wave service boilerplate
- **Install:** `npm install -g @anthropic-ai/claude-code`

### 3. GitHub Copilot — FREE for individuals (some features)
- AI pair programming in IDE
- **Use case:** Faster code writing in VS Code

### 4. OpenRouter (we already have keys)
- Access to 100+ models through one API
- Many free models: Llama 3.1, Mistral, Gemma
- **Use case:** Use free models for routine tasks, GPT-4o for critical decisions

### 5. Ollama — 100% FREE, runs locally
- Run Llama, Mistral, Gemma models locally on our servers
- No API costs for development
- **Use case:** Run email classification locally without API costs

### 6. Mastra — FREE open-source framework
- Build AI applications and agents with a modular framework
- **Use case:** Replace our custom agent code with a proper framework

### 7. Langfuse — FREE self-hosted
- Open source LLM observability platform
- **Use case:** Track AI model performance, costs, and quality
- **Website:** https://langfuse.com

### 8. Firecrawl — Free tier available
- Web scraping and crawling for AI
- **Use case:** Collect competitive pricing data for our services

### 9. n8n — FREE self-hosted workflow automation
- Visual workflow builder with AI nodes
- **Use case:** Connect email → CRM → proposals automatically
- **Website:** https://n8n.io

### 10. PostHog — FREE tier (1M events/month)
- Product analytics with AI insights
- **Use case:** Track which services get most views/conversions
- **Website:** https://posthog.com

## Recommended Implementation Priority
1. **Vercel AI SDK** — Upgrade our email agent to use unified API
2. **Langfuse** — Self-host for AI observability
3. **n8n** — Self-host for email-to-CRM automation workflows
4. **PostHog** — Free analytics for the website
5. **Ollama** — Local AI for development/testing without costs

**API Keys needed:**
- PostHog: free tier, signup at posthog.com
- Langfuse: self-hosted, no API key needed
- n8n: self-hosted, no API key needed
- Vercel AI SDK: free, uses existing API keys
