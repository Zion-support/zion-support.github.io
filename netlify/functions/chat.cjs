#!/usr/bin/env node

/**
 * Netlify serverless function: AI Chat
 *
 * Uses local LLM (Ollama primary, OpenRouter fallback) via automation/lib/llm-client.
 * When deployed on Netlify, Ollama is typically unavailable — OpenRouter fallback is used.
 * For self-hosted with Ollama, set OLLAMA_URL to a reachable instance.
 *
 * Env: OPENROUTER_API_KEY (required for Netlify), OLLAMA_URL, OLLAMA_MODEL
 */

const path = require('path');

// Load .env from project root (Netlify injects env vars; .env for local dev)
try {
  require('dotenv').config({ path: path.join(process.cwd(), '.env') });
} catch (_) {}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return { statusCode: 400, body: JSON.stringify({ error: 'messages array required' }) };
  }

  try {
    const llmPath = path.join(process.cwd(), 'automation', 'lib', 'llm-client.cjs');
    const { createLLMClient } = require(llmPath);
    const llm = createLLMClient({
      apiKey: process.env.OPENROUTER_API_KEY,
      appName: 'Zion Tech Group AI Assistant',
      siteUrl: 'https://ziontechgroup.com',
    });

    if (!llm.isConfigured()) {
      return {
        statusCode: 503,
        body: JSON.stringify({
          error: 'LLM not configured',
          hint: 'Set OPENROUTER_API_KEY or OLLAMA_URL in Netlify env',
        }),
      };
    }

    const result = await llm.complete(messages, {
      maxTokens: 500,
      temperature: 0.7,
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: result.content }),
    };
  } catch (err) {
    console.error('[chat]', err.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || 'LLM request failed' }),
    };
  }
};
