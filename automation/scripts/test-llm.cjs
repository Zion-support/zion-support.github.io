#!/usr/bin/env node
/**
 * Quick test for LLM client (Ollama primary, cloud fallback via unified API)
 * Run: node automation/scripts/test-llm.cjs  or  npm run llm:test
 */

try {
  require('dotenv').config({ path: require('path').join(process.cwd(), '.env') });
} catch (_) {}

const http = require('http');

const API_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
const OLLAMA_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434';

async function testOllamaDirect() {
  return new Promise((resolve) => {
    http.get(`${OLLAMA_URL}/api/tags`, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const models = json.models || [];
          const qwen = models.find((m) => m.name.includes('qwen3'));
          resolve({ ok: true, models: models.map((m) => m.name), qwen: qwen?.name || null });
        } catch {
          resolve({ ok: false, error: 'Invalid JSON from Ollama' });
        }
      });
    }).on('error', (err) => resolve({ ok: false, error: err.message }));
  });
}

async function testUnifiedAPI() {
  const body = JSON.stringify({
    messages: [{ role: 'user', content: 'Say exactly: OK' }],
    provider: 'ollama',
    forceLocal: true,
  });

  return new Promise((resolve) => {
    const req = http.request(
      {
        hostname: 'localhost',
        port: 3000,
        path: '/api/llm/chat',
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
      },
      (res) => {
        let data = '';
        res.on('data', (c) => (data += c));
        res.on('end', () => {
          try {
            const json = JSON.parse(data);
            if (json.error) resolve({ ok: false, error: json.error });
            else resolve({ ok: true, content: json.content, provider: json.provider, model: json.model });
          } catch (e) {
            resolve({ ok: false, error: 'Invalid JSON: ' + e.message });
          }
        });
      }
    );
    req.on('error', (err) => resolve({ ok: false, error: err.message }));
    req.write(body);
    req.end();
  });
}

async function main() {
  console.log('LLM Fallback Test — Qwen3 via Ollama');
  console.log('==========================================');

  // 1. Check Ollama daemon + model
  console.log('\n[1] Checking Ollama...');
  const ollama = await testOllamaDirect();
  if (!ollama.ok) {
    console.error('  ❌ Ollama unreachable:', ollama.error);
    console.error('     Run: ollama serve && ollama pull qwen3:4b');
    process.exit(1);
  }
  console.log('  ✅ Ollama running');
  console.log('     Models:', ollama.models.join(', '));
  if (ollama.qwen) console.log('     Qwen model:', ollama.qwen);
  else console.log('     ⚠️  No qwen3 model found — pull with: ollama pull qwen3:4b');

  // 2. Test unified API (requires dev server)
  console.log('\n[2] Testing unified LLM API endpoint (requires dev server on :3000)...');
  try {
    const api = await testUnifiedAPI();
    if (!api.ok) {
      console.error('  ❌ API test failed:', api.error);
      console.error('     Start dev server: npm run dev');
      process.exit(1);
    }
    console.log('  ✅ API responded');
    console.log('     Content:', api.content?.slice(0, 80));
    console.log('     Provider:', api.provider);
    console.log('     Model:', api.model);
  } catch (err) {
    console.error('  ⚠️  Could not test API endpoint (server not running?) —', err.message);
  }

  console.log('\n✅ All checks passed.');
}

main().catch((err) => {
  console.error('Test failed:', err);
  process.exit(1);
});
