#!/usr/bin/env node

/**
 * Minimal OpenRouter LLM client used by automation scripts.
 * Exposes createLLMClient({ apiKey, model }) -> { chat(userPrompt, { systemPrompt, maxTokens }) }
 */

const https = require('https');

function postJson(url, headers, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const u = new URL(url);
    const req = https.request(
      {
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: 'POST',
        headers: Object.assign(
          {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data),
          },
          headers
        ),
        timeout: 120000,
      },
      (res) => {
        let buf = '';
        res.on('data', (c) => (buf += c));
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, json: JSON.parse(buf) });
          } catch (e) {
            reject(new Error(`LLM API returned non-JSON (status ${res.statusCode}): ${buf.slice(0, 300)}`));
          }
        });
      }
    );
    req.on('timeout', () => req.destroy(new Error('LLM API request timed out')));
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function createLLMClient({ apiKey, model } = {}) {
  const key = apiKey || process.env.OPENROUTER_API_KEY;
  const mdl = model || process.env.OPENROUTER_MODEL || 'openrouter/free';
  if (!key) throw new Error('createLLMClient: missing apiKey (set OPENROUTER_API_KEY)');

  async function chat(userPrompt, { systemPrompt, maxTokens = 2048 } = {}) {
    const messages = [];
    if (systemPrompt) messages.push({ role: 'system', content: systemPrompt });
    messages.push({ role: 'user', content: userPrompt });

    const { status, json } = await postJson(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        Authorization: `Bearer ${key}`,
        'HTTP-Referer': 'https://ziontechgroup.com',
        'X-Title': 'Zion Tech Group Automation',
      },
      { model: mdl, messages, max_tokens: maxTokens }
    );

    if (status < 200 || status >= 300) {
      throw new Error(`OpenRouter error ${status}: ${JSON.stringify(json).slice(0, 300)}`);
    }
    const content = json && json.choices && json.choices[0] && json.choices[0].message && json.choices[0].message.content;
    if (!content) throw new Error('OpenRouter response missing choices[0].message.content');
    return content;
  }

  return { chat };
}

module.exports = { createLLMClient };
