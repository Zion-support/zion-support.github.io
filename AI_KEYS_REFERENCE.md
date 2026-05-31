# 🔑 API KEYS & FREE AI TOOLS REFERENCE
## Zion Tech Group — AI Development Infrastructure
### Updated: 2026-05-30 | Maintained by: Hermes Agent

---

## 📊 CURRENT STATUS

| Provider | Free Tier | Status | Key Required |
|----------|-----------|--------|-------------|
| **Ollama** | Unlimited (local) | ✅ Available | No |
| **Groq** | 1M tokens/day | 🔑 Need key | Yes |
| **Gemini** | 1,500 req/day | 🔑 Need key | Yes |
| **DeepSeek** | 5M tokens free | 🔑 Need key | Yes |
| **Cloudflare AI** | 10k neurons/day | 🔑 Need key | Yes |
| **HuggingFace** | 300 req/hr | 🔑 Need key | Yes |
| **Cerebras** | 1M tokens/day | 🔑 Need key | Yes |
| **Mistral** | Free tier | 🔑 Need key | Yes |
| **Together** | Free research models | 🔑 Need key | Yes |
| **Codeium** | Unlimited | ✅ Available | No |
| **Continue.dev** | Unlimited | ✅ Available | No |

---

## 🆓 ZERO-SETUP TOOLS (Start Using Immediately)

### 1. Ollama — Local AI (UNLIMITED, FREE)
**Status**: ⚠️ Installed but no models pulled yet
**Setup**:
```bash
# Already installed at /opt/homebrew/bin/ollama
# Pull coding-optimized models:
ollama pull llama3.2        # 3B — fast general purpose
ollama pull codellama:7b     # 7B — code generation
ollama pull deepseek-coder-v2  # 16B — best code model
ollama pull qwen2.5:7b       # 7B — multilingual
ollama serve                 # Start server
```
**API**: `http://localhost:11434`
**Use with**: Continue.dev, Aider, Cline, custom scripts

### 2. Codeium — VS Code Extension (UNLIMITED, FREE)
**Setup**: Install extension in VS Code, sign up free
**VS Code**: `code --install-extension codeium.codeium`
**Features**: Unlimited completions, multi-line, chat
**Cost**: $0 forever for individuals

### 3. Continue.dev — VS Code Extension (FREE, Open Source)
**Setup**: Install extension, configure local Ollama
**VS Code**: `code --install-extension continue.continue`
**Config** (`~/.continue/config.json`):
```json
{
  "models": [
    {
      "title": "Ollama Llama 3.2",
      "provider": "ollama",
      "model": "llama3.2:3b",
      "apiBase": "http://localhost:11434"
    },
    {
      "title": "Ollama DeepSeek Coder",
      "provider": "ollama",
      "model": "deepseek-coder-v2:16b",
      "apiBase": "http://localhost:11434"
    }
  ]
}
```

---

## 🔑 API KEYS TO GET (Free Tiers)

### Priority 1: Highest Value, Easiest Setup

#### Groq (console.groq.com)
- **Free**: ~1M tokens/day, ultra-fast inference
- **Models**: Llama 4 Scout, Llama 3.3 70B, GPT OSS 120B
- **Sign up**: https://console.groq.com → API Keys → Create
- **Add to .env**: `GROQ_API_KEY=gsk_xxxxx`
- **Speed**: 500-800 tokens/sec — fastest free inference

#### Google Gemini (aistudio.google.com)
- **Free**: 1,500 requests/day (Gemini 2.0 Flash)
- **Models**: gemini-2.0-flash, gemini-1.5-pro
- **Sign up**: https://aistudio.google.com/apikey
- **Add to .env**: `GEMINI_API_KEY=AIzaxxxx`
- **Bonus**: 1M context window

#### DeepSeek (platform.deepseek.com)
- **Free**: 5M tokens on signup
- **Models**: deepseek-chat, deepseek-coder
- **Sign up**: https://platform.deepseek.com
- **Add to .env**: `DEEPSEEK_API_KEY=sk-xxxxx`
- **Best for**: Code generation, reasoning

### Priority 2: Excellent Free Tiers

#### Cloudflare Workers AI (dash.cloudflare.com)
- **Free**: 10,000 neurons/day
- **Models**: @cf/meta/llama-3.1-8b, @cf/mistral/mistral-7b
- **Sign up**: Cloudflare dashboard → Workers & Pages → AI
- **Add to .env**:
  ```
  CLOUDFLARE_ACCOUNT_ID=xxxxx
  CLOUDFLARE_API_TOKEN=xxxxx
  ```

#### HuggingFace Inference (huggingface.co)
- **Free**: 300 requests/hour
- **Models**: 100,000+ open models
- **Sign up**: https://huggingface.co/settings/tokens
- **Add to .env**: `HUGGINGFACE_HUB_TOKEN=hf_xxxxx`

#### Cerebras (cloud.cerebras.ai)
- **Free**: 1M tokens/day — fastest GPU inference
- **Models**: llama3.1-70b, llama3.1-8b
- **Sign up**: https://cloud.cerebras.ai
- **Add to .env**: `CEREBRAS_API_KEY=sk-xxxxx`

#### Mistral AI (console.mistral.ai)
- **Free**: Limited free tier
- **Models**: mistral-large, mistral-small, codestral
- **Sign up**: https://console.mistral.ai
- **Add to .env**: `MISTRAL_API_KEY=xxxxx`

#### Together AI (together.ai)
- **Free**: Research models free
- **Models**: Llama 3.1 70B, Qwen 2.5 7B, DeepSeek
- **Sign up**: https://together.ai → API Keys
- **Add to .env**: `TOGETHER_API_KEY=xxxxx`

---

## 🔧 HERRAMIENTAS DE DESARROLLO AI (Resumen Rápido)

### Para Generación de Código:
1. **Ollama + Continue.dev** — Local, gratis, ilimitado
2. **Codeium** — VS Code, gratis, ilimitado
3. **Aider** — Terminal, chat de pareja con IA
4. **Cline** — Agente autónomo en VS Code

### Para Testing y QA:
1. **AI Test Generator** (scripts/ai_test_generator.py)
2. **Deepchecks** — ML/data validation

### Para Deployment:
1. **Coolify** — Self-hosted Vercel alternative
2. **Railway** — Free tier hosting

---

## 🎯 SETUP ORDER (Para Agentes)

### Inmediato (5 minutos):
1. Instalar Codeium en VS Code
2. Instalar Continue.dev en VS Code
3. Ejecutar `ollama pull llama3.2`

### Prioridad Alta (15 minutos):
1. Obtener Groq API key (console.groq.com)
2. Obtener Gemini API key (aistudio.google.com/apikey)
3. Obtener DeepSeek API key (platform.deepseek.com)
4. Configurar .env con las 3 keys

### Prioridad Media (30 minutos):
1. Obtener Cloudflare AI keys
2. Obtener HuggingFace token
3. Instalar Aider: `pip install aider-chat`
4. Instalar Cline en VS Code

---

## 📝 CONFIGURACIÓN .ENV COMPLETA

Copiar de `.env.example` a `.env` y llenar:

```bash
# Oblatorios
TELEGRAM_BOT_TOKEN=tu_token

# AI Providers (obtener keys gratuitas)
GROQ_API_KEY=gsk_xxx
GEMINI_API_KEY=AIzaXXX
DEEPSEEK_API_KEY=sk-xxx
CLOUDFLARE_ACCOUNT_ID=xxx
CLOUDFLARE_API_TOKEN=xxx
HUGGINGFACE_HUB_TOKEN=hf_xxx
CEREBRAS_API_KEY=sk-xxx
MISTRAL_API_KEY=xxx
TOGETHER_API_KEY=xxx

# Opciónales
OLLAMA_URL=http://localhost:11434
OLLAMA_MODEL=llama3.2:3b
```

---

## 🤖 WORKFLOW DIARIO CON IA

1. **Mañana**: Usar v0.dev para generar mockups UI
2. **Desarrollo**: Continue.dev + Codeium en VS Code
3. **Refactoring**: Aider para tareas complejas
4. **Testing**: AI test generator
5. **Revisión**: Ejecutar ai_code_review.py antes de commit
6. **Deploy**: Coolify con AI-powered checks

---

*Documento vivo — actualizar cuando se agreguen nuevas herramientas o keys.*
*Próxima revisión: Cuando se obtengan nuevas API keys.*
