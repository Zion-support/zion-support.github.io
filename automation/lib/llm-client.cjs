#!/usr/bin/env node

/**
 * Unified LLM Client — Local (Ollama) primary, OpenRouter fallback
 *
 * Tries local free LLMs (Ollama) first, falls back to OpenRouter when:
 * - Ollama is not running
 * - Ollama request fails
 * - OLLAMA_ENABLED=false
 *
 * Usage:
 *   const { createLLMClient } = require('./lib/llm-client.cjs');
 *   const llm = createLLMClient();
 *   const response = await llm.chat('Explain this code...');
 *
 * Env:
 *   OLLAMA_URL       - Ollama base URL (default: http://localhost:11434)
 *   OLLAMA_MODEL     - Model name (default: llama3.2:3b)
 *   OLLAMA_ENABLED   - Set to 'false' to skip Ollama, use OpenRouter only
 *   OPENROUTER_API_KEY - Fallback when Ollama unavailable
 */

try {
  require('dotenv').config({ path: require('path').join(process.cwd(), '.env') });
} catch (_) {}

const https = require('https');
const http = require('http');
const { URL } = require('url');

const OLLAMA_DEFAULT_URL = 'http://localhost:11434';
const OLLAMA_DEFAULT_MODEL = 'llama3.2:3b';
const OPENROUTER_MODELS = {
  free: 'meta-llama/llama-3.2-3b-instruct:free',
  fast: 'openrouter/auto',
  default: 'meta-llama/llama-3.2-3b-instruct:free',
};

function parseOllamaUrl(urlStr) {
  const u = new URL(urlStr || OLLAMA_DEFAULT_URL);
  return {
    protocol: u.protocol === 'https:' ? https : http,
    hostname: u.hostname,
    port: u.port || (u.protocol === 'https:' ? 443 : 80),
    path: u.pathname.replace(/\/$/, '') || '',
  };
}

async function ollamaRequest(baseUrl, path, body, timeout = 60000) {
  const base = parseOllamaUrl(baseUrl);
  const fullPath = `${base.path}${path}`;
  const data = JSON.stringify(body);

  return new Promise((resolve, reject) => {
    const options = {
      hostname: base.hostname,
      port: base.port || (base.protocol === https ? 443 : 11434),
      path: fullPath,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
      },
      timeout,
    };

    const req = base.protocol.request(options, (res) => {
      let buf = '';
      res.on('data', (chunk) => (buf += chunk));
      res.on('end', () => {
        if (res.statusCode >= 400) {
          try {
            const err = JSON.parse(buf);
            reject(new Error(`Ollama HTTP ${res.statusCode}: ${err.error || buf.slice(0, 200)}`));
          } catch {
            reject(new Error(`Ollama HTTP ${res.statusCode}: ${buf.slice(0, 200)}`));
          }
          return;
        }
        resolve(buf);
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Ollama request timed out'));
    });
    req.write(data);
    req.end();
  });
}

async function openrouterRequest(apiKey, model, messages, options, siteUrl, appName) {
  const maxTokens = options.maxTokens || 4096;
  const temperature = options.temperature ?? 0.7;
  const body = {
    model: model || OPENROUTER_MODELS.default,
    messages,
    max_tokens: maxTokens,
    temperature,
  };
  const data = JSON.stringify(body);

  return new Promise((resolve, reject) => {
    const reqOptions = {
      hostname: 'openrouter.ai',
      path: '/api/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
        Authorization: `Bearer ${apiKey}`,
        'HTTP-Referer': siteUrl || 'https://ziontechgroup.com',
        'X-Title': appName || 'Zion Tech Group Automation',
      },
      timeout: options.timeout || 60000,
    };

    const req = https.request(reqOptions, (res) => {
      let buf = '';
      res.on('data', (chunk) => (buf += chunk));
      res.on('end', () => {
        if (res.statusCode >= 400) {
          try {
            const err = JSON.parse(buf);
            reject(new Error(`OpenRouter HTTP ${res.statusCode}: ${err.error?.message || buf.slice(0, 200)}`));
          } catch {
            reject(new Error(`OpenRouter HTTP ${res.statusCode}: ${buf.slice(0, 200)}`));
          }
          return;
        }
        resolve(buf);
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('OpenRouter request timed out'));
    });
    req.write(data);
    req.end();
  });
}

function parseOpenRouterResponse(body) {
  const response = JSON.parse(body);
  if (response.error) {
    const msg = typeof response.error === 'string' ? response.error : (response.error?.message || JSON.stringify(response.error));
    throw new Error(`OpenRouter error: ${msg}`);
  }
  if (response.choices?.[0]?.message?.content) {
    return {
      content: response.choices[0].message.content,
      usage: response.usage,
      model: response.model,
    };
  }
  throw new Error('Invalid OpenRouter response format');
}

function parseOllamaResponse(body) {
  const response = JSON.parse(body);
  if (response.error) {
    throw new Error(`Ollama error: ${response.error}`);
  }
  if (response.message?.content) {
    return {
      content: response.message.content,
      usage: response.eval_count ? { total_tokens: response.eval_count } : null,
      model: response.model,
    };
  }
  throw new Error('Invalid Ollama response format');
}

class LLMClient {
  constructor(options = {}) {
    this.ollamaUrl = options.ollamaUrl || process.env.OLLAMA_URL || process.env.OLLAMA_BASE_URL || OLLAMA_DEFAULT_URL;
    this.ollamaModel = options.ollamaModel || process.env.OLLAMA_MODEL || OLLAMA_DEFAULT_MODEL;
    this.ollamaEnabled = options.ollamaEnabled ?? (process.env.OLLAMA_ENABLED !== 'false' && process.env.OLLAMA_ENABLED !== '0');
    this.openrouterApiKey = options.apiKey || options.openrouterApiKey || process.env.OPENROUTER_API_KEY;
    this.openrouterModel = options.openrouterModel || options.model || process.env.OPENROUTER_MODEL || OPENROUTER_MODELS.default;
    this.maxRetries = options.maxRetries ?? 2;
    this.timeout = options.timeout || 60000;
    this.appName = options.appName || 'Zion Tech Group Automation';
    this.siteUrl = options.siteUrl || 'https://ziontechgroup.com';
    this._lastProvider = null;
  }

  _buildMessages(prompt, options = {}) {
    const systemPrompt =
      options.systemPrompt ||
      'You are an expert software engineer working on the Zion Tech Group platform. Provide concise, actionable responses.';
    return [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: prompt },
    ];
  }

  async complete(messages, options = {}) {
    const opts = { ...options, timeout: options.timeout || this.timeout };
    let lastError;

    if (this.ollamaEnabled) {
      try {
        const body = {
          model: this.ollamaModel,
          messages,
          stream: false,
          options: {
            num_predict: options.maxTokens || 4096,
            temperature: options.temperature ?? 0.7,
          },
        };
        const res = await ollamaRequest(this.ollamaUrl, '/api/chat', body, opts.timeout);
        this._lastProvider = 'ollama';
        return parseOllamaResponse(res);
      } catch (err) {
        lastError = err;
      }
    }

    if (this.openrouterApiKey) {
      let attempt = 0;
      while (attempt <= this.maxRetries) {
        try {
          const res = await openrouterRequest(
            this.openrouterApiKey,
            this.openrouterModel,
            messages,
            opts,
            this.siteUrl,
            this.appName
          );
          this._lastProvider = 'openrouter';
          return parseOpenRouterResponse(res);
        } catch (err) {
          lastError = err;
          const is429 = /429|rate limit/i.test(err.message);
          if (attempt < this.maxRetries) {
            const delay = is429 ? 30000 : Math.pow(2, attempt) * 1000;
            await new Promise((r) => setTimeout(r, delay));
          }
          attempt++;
        }
      }
    }

    throw lastError || new Error(
      'No LLM available. Start Ollama (ollama serve, ollama pull llama3.2:3b) or set OPENROUTER_API_KEY.'
    );
  }

  async chat(prompt, options = {}) {
    const messages = this._buildMessages(prompt, options);
    const result = await this.complete(messages, options);
    return result.content;
  }

  async analyze(code, task = 'review', options = {}) {
    const tasks = {
      review: 'Review this code for bugs, performance issues, and best practices violations. Return a JSON array of issues found.',
      improve: 'Suggest improvements for this code. Return specific code changes.',
      document: 'Generate documentation for this code including JSDoc comments and a README section.',
      test: 'Generate unit tests for this code using Jest.',
      security: 'Analyze this code for security vulnerabilities. Return a JSON array of findings.',
      seo: 'Analyze this page component for SEO improvements. Return specific recommendations.',
    };
    const prompt = `${tasks[task] || task}\n\n\`\`\`\n${code}\n\`\`\``;
    return this.chat(prompt, options);
  }

  isConfigured() {
    return this.ollamaEnabled || !!this.openrouterApiKey;
  }

  getProviderInfo() {
    return {
      provider: this._lastProvider || (this.ollamaEnabled ? 'ollama' : this.openrouterApiKey ? 'openrouter' : null),
      model: this._lastProvider === 'ollama' ? this.ollamaModel : this.openrouterModel,
      configured: this.isConfigured(),
    };
  }
}

function createLLMClient(options = {}) {
  return new LLMClient(options);
}

module.exports = { LLMClient, createLLMClient, OPENROUTER_MODELS, OLLAMA_DEFAULT_MODEL, OLLAMA_DEFAULT_URL };
