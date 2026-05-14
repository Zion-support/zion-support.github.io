#!/usr/bin/env node
/**
 * AI Service FAQ Generator — autonomous content enrichment
 * Generates 5–7 FAQs per service via LLM, appends to servicesData.ts
 * Safe: backups, logs, throttled
 */

const fs = require('fs');
const path = require('path');

const SERVICES_FILE = path.join(process.cwd(), 'app', 'data', 'servicesData.ts');
const BACKUP_DIR = path.join(process.cwd(), 'automation', 'backups', 'faq-gen');
const LOG_FILE = path.join(process.cwd(), 'automation', 'reports', 'faq-generation.log');

const LLM_ENDPOINT = process.env.EMAIL_LLM_ENDPOINT || 'http://localhost:3000/api/llm/chat';

fs.mkdirSync(BACKUP_DIR, { recursive: true });
fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}\n`;
  fs.appendFileSync(LOG_FILE, line);
  console.log(msg);
}

function backupOriginal() {
  const timestamp = new Date().toISOString().replace(/[:]/g, '-').slice(0, 19);
  const backupPath = path.join(BACKUP_DIR, `servicesData.${timestamp}.ts`);
  fs.copyFileSync(SERVICES_FILE, backupPath);
  log(`📦 Backup saved: ${backupPath}`);
}

function parseBlocks(content) {
  const blocks = [];
  const re = /(\{[^}]*id:\s*"[^"]+"[^}]*\})/g;
  let m;
  while ((m = re.exec(content)) !== null) blocks.push(m[1].trim());
  return blocks;
}

function extractMeta(block) {
  return {
    id: (block.match(/id:\s*"([^"]+)"/) || [])[1] || 'unknown',
    title: (block.match(/title:\s*"([^"]+)"/) || [])[1] || 'Untitled',
    category: (block.match(/category:\s*'([^']+)'/) || [])[1] || 'ai'
  };
}

async function generateFAQs(service) {
  const prompt = `Generate 5–7 concise FAQs with answers for this service.

Service: ${service.title}
Category: ${service.category.toUpperCase()}

Return JSON only:
{ "faqs": [ { "question": "...", "answer": "..." } ] }`;

  try {
    const resp = await fetch(LLM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, temperature: 0.35, max_tokens: 600 })
    });
    const data = await resp.json();
    const text = (data.text || data.response || '').trim();
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0]);
      return (parsed.faqs || []).filter((f) => f.question && f.answer);
    }
  } catch (e) {
    log(`❌ LLM error for ${service.id}: ${e.message}`);
  }
  return [];
}

async function run() {
  log('🚀 FAQ Generator starting...');
  backupOriginal();

  const content = fs.readFileSync(SERVICES_FILE, 'utf8');
  const blocks = parseBlocks(content);
  log(`📦 ${blocks.length} services loaded`);

  let patched = 0, skipped = 0;

  for (const block of blocks) {
    const meta = extractMeta(block);

    if (block.includes('faqs:')) {
      skipped++;
      continue;
    }

    const faqs = await generateFAQs(meta);

    if (faqs.length >= 3) {
      const faqsArray = faqs.map(f => {
        const q = f.question.replace(/"/g, '\\"');
        const a = f.answer.replace(/"/g, '\\"');
        return `    { question: "${q}", answer: "${a}" }`;
      }).join(',\n');

      const newField = `,\n    faqs: [\n${faqsArray}\n    ]`;
      const newBlock = block.replace(/\}$/, newField + '\n  }');

      // Replace only first occurrence
      const idx = content.indexOf(block);
      if (idx !== -1) {
        content.replace(block, newBlock);
      }
      content = content.replace(block, newBlock, 1);

      patched++;
      log(`✅ ${meta.id}: ${faqs.length} FAQs added`);
    } else {
      skipped++;
    }

    await new Promise(r => setTimeout(r, 1500)); // rate limit
  }

  fs.writeFileSync(SERVICES_FILE, content);
  log(`✅ Done — patched: ${patched}, skipped: ${skipped}`);
  log('📋 Next: rebuild to propagate FAQs to service pages');
}

run().catch(e => { log(`❌ ${e.message}`); process.exit(1); });
