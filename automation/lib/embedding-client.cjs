#!/usr/bin/env node

/**
 * Free AI Embeddings Client — Google Gemini
 *
 * Google AI Studio (Gemini) offers 1,500 embedding requests/day free.
 * Use for semantic search, RAG, similarity matching.
 *
 * Usage:
 *   const { embed } = require('./lib/embedding-client.cjs');
 *   const vec = await embed('your text');
 *   const vecs = await embedBatch(['text1', 'text2']);
 *
 * Env:
 *   GEMINI_API_KEY  - Free at aistudio.google.com/apikey
 *   GEMINI_EMBED_MODEL - Optional: text-embedding-004 (default)
 */

try {
  require('dotenv').config({ path: require('path').join(process.cwd(), '.env') });
} catch (_) {}

const GEMINI_EMBED_MODEL = process.env.GEMINI_EMBED_MODEL || 'text-embedding-004';
const GEMINI_EMBED_API = 'https://generativelanguage.googleapis.com/v1beta/models';

async function embedRequest(apiKey, text, options = {}) {
  const model = options.model || GEMINI_EMBED_MODEL;
  const body = {
    content: {
      parts: [{ text: String(text).slice(0, 2000) }],
    },
  };
  const url = `${GEMINI_EMBED_API}/${model}:embedContent?key=${encodeURIComponent(apiKey)}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(options.timeout || 15000),
  });
  const data = await res.json();
  if (data.error) {
    throw new Error(`Gemini Embed HTTP ${res.status}: ${data.error?.message || JSON.stringify(data.error)}`);
  }
  const embedding = data.embedding?.values ?? data.embeddings?.[0]?.values;
  if (!embedding || !Array.isArray(embedding)) {
    throw new Error('Invalid Gemini embedding response');
  }
  return embedding;
}

/**
 * Embed a single text and return vector
 * @param {string} text
 * @param {object} options - { model, timeout }
 * @returns {Promise<number[]>}
 */
async function embed(text, options = {}) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY required for embeddings. Get free key at aistudio.google.com/apikey');
  }
  return embedRequest(apiKey, text, options);
}

/**
 * Embed multiple texts (one request per text for compatibility)
 * @param {string[]} texts
 * @param {object} options
 * @returns {Promise<number[][]>}
 */
async function embedBatch(texts, options = {}) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY required for embeddings');
  }
  const results = [];
  for (const t of texts) {
    const vec = await embedRequest(apiKey, t, options);
    results.push(vec);
  }
  return results;
}

function isConfigured() {
  return !!process.env.GEMINI_API_KEY;
}

module.exports = {
  embed,
  embedBatch,
  isConfigured,
  GEMINI_EMBED_MODEL,
};
