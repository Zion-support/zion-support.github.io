#!/usr/bin/env node

/**
 * OpenRouter LLM Client
 *
 * Shared module for all automation agents to call LLMs via OpenRouter.
 * Supports OpenRouter (primary), Anthropic (fallback), and OpenAI (fallback).
 *
 * Usage:
 *   const { createLLMClient } = require('./lib/openrouter-client.cjs');
 *   const llm = createLLMClient();
 *   const response = await llm.chat('Explain this code...');
 */

try {
  require('dotenv').config({ path: require('path').join(process.cwd(), '.env') });
} catch (_) {}

const https = require('https');

const OPENROUTER_MODELS = {
  free: 'openrouter/auto',
  fast: 'openrouter/auto',
  default: 'openrouter/auto',
};

class OpenRouterClient {
  constructor(options = {}) {
    this.apiKey =
      options.apiKey ||
      process.env.OPENROUTER_API_KEY ||
      process.env.ANTHROPIC_API_KEY ||
      process.env.OPENAI_API_KEY;

    this.provider = this._detectProvider(options);
    this.model = options.model || this._defaultModel();
    this.maxRetries = options.maxRetries || 2;
    this.timeout = options.timeout || 60000;
    this.appName = options.appName || 'Zion Tech Group Automation';
    this.siteUrl = options.siteUrl || 'https://ziontechgroup.com';
  }

  _detectProvider(options) {
    if (options.provider) return options.provider;
    if (process.env.OPENROUTER_API_KEY) return 'openrouter';
    if (process.env.ANTHROPIC_API_KEY) return 'anthropic';
    if (process.env.OPENAI_API_KEY) return 'openai';
    return 'openrouter';
  }

  _defaultModel() {
    switch (this.provider) {
      case 'openrouter':
        return OPENROUTER_MODELS.free;
      case 'anthropic':
        return 'claude-3-5-sonnet-20241022';
      case 'openai':
        return 'gpt-4-turbo-preview';
      default:
        return OPENROUTER_MODELS.free;
    }
  }

  _getEndpoint() {
    switch (this.provider) {
      case 'openrouter':
        return { hostname: 'openrouter.ai', path: '/api/v1/chat/completions' };
      case 'anthropic':
        return { hostname: 'api.anthropic.com', path: '/v1/messages' };
      case 'openai':
        return { hostname: 'api.openai.com', path: '/v1/chat/completions' };
      default:
        return { hostname: 'openrouter.ai', path: '/api/v1/chat/completions' };
    }
  }

  _buildHeaders(dataLength) {
    const headers = {
      'Content-Type': 'application/json',
      'Content-Length': dataLength,
    };

    if (this.provider === 'anthropic') {
      headers['x-api-key'] = this.apiKey;
      headers['anthropic-version'] = '2023-06-01';
    } else {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    if (this.provider === 'openrouter') {
      headers['HTTP-Referer'] = this.siteUrl;
      headers['X-Title'] = this.appName;
    }

    return headers;
  }

  _buildBody(messages, options = {}) {
    const maxTokens = options.maxTokens || 4096;
    const temperature = options.temperature ?? 0.7;

    if (this.provider === 'anthropic') {
      const systemMsg = messages.find((m) => m.role === 'system');
      const nonSystem = messages.filter((m) => m.role !== 'system');
      const body = {
        model: this.model,
        max_tokens: maxTokens,
        messages: nonSystem,
      };
      if (systemMsg) body.system = systemMsg.content;
      if (temperature !== undefined) body.temperature = temperature;
      return body;
    }

    return {
      model: this.model,
      messages,
      max_tokens: maxTokens,
      temperature,
    };
  }

  _parseResponse(body) {
    const response = JSON.parse(body);

    if (response.error) {
      const msg =
        typeof response.error === 'string'
          ? response.error
          : response.error.message || JSON.stringify(response.error);
      throw new Error(`API error: ${msg}`);
    }

    if (this.provider === 'anthropic') {
      if (response.content && response.content[0]) {
        return {
          content: response.content[0].text,
          usage: response.usage,
          model: response.model,
        };
      }
    } else {
      if (response.choices && response.choices[0]) {
        return {
          content: response.choices[0].message.content,
          usage: response.usage,
          model: response.model,
        };
      }
    }

    throw new Error('Invalid response format from LLM API');
  }

  _makeRequest(data, endpoint, headers) {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: endpoint.hostname,
        path: endpoint.path,
        method: 'POST',
        headers,
        timeout: this.timeout,
      };

      const req = https.request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => {
          body += chunk;
        });
        res.on('end', () => {
          if (res.statusCode >= 400) {
            try {
              const err = JSON.parse(body);
              reject(
                new Error(
                  `HTTP ${res.statusCode}: ${err.error?.message || body.slice(0, 200)}`,
                ),
              );
            } catch {
              reject(new Error(`HTTP ${res.statusCode}: ${body.slice(0, 200)}`));
            }
            return;
          }
          resolve(body);
        });
      });

      req.on('error', reject);
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timed out'));
      });

      req.write(data);
      req.end();
    });
  }

  async complete(messages, options = {}) {
    if (!this.apiKey) {
      throw new Error(
        'No API key found. Set OPENROUTER_API_KEY, ANTHROPIC_API_KEY, or OPENAI_API_KEY.',
      );
    }

    const body = this._buildBody(messages, options);
    const data = JSON.stringify(body);
    const endpoint = this._getEndpoint();
    const headers = this._buildHeaders(Buffer.byteLength(data));

    let lastError;
    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      try {
        const responseBody = await this._makeRequest(data, endpoint, headers);
        return this._parseResponse(responseBody);
      } catch (err) {
        lastError = err;
        if (attempt < this.maxRetries) {
          const delay = Math.pow(2, attempt) * 1000;
          await new Promise((r) => setTimeout(r, delay));
        }
      }
    }

    throw lastError;
  }

  async chat(prompt, options = {}) {
    const systemPrompt =
      options.systemPrompt ||
      'You are an expert software engineer working on the Zion Tech Group platform. Provide concise, actionable responses.';

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: prompt },
    ];

    const result = await this.complete(messages, options);
    return result.content;
  }

  async analyze(code, task = 'review', options = {}) {
    const tasks = {
      review:
        'Review this code for bugs, performance issues, and best practices violations. Return a JSON array of issues found.',
      improve:
        'Suggest improvements for this code. Return specific code changes.',
      document:
        'Generate documentation for this code including JSDoc comments and a README section.',
      test: 'Generate unit tests for this code using Jest.',
      security:
        'Analyze this code for security vulnerabilities. Return a JSON array of findings.',
      seo: 'Analyze this page component for SEO improvements. Return specific recommendations.',
    };

    const prompt = `${tasks[task] || task}\n\n\`\`\`\n${code}\n\`\`\``;
    return this.chat(prompt, options);
  }

  isConfigured() {
    return !!this.apiKey;
  }

  getProviderInfo() {
    return {
      provider: this.provider,
      model: this.model,
      configured: this.isConfigured(),
    };
  }
}

function createLLMClient(options = {}) {
  return new OpenRouterClient(options);
}

module.exports = { OpenRouterClient, createLLMClient, OPENROUTER_MODELS };
