const fs = require('fs');
const _path = require('path');
const {_OpenAI} = require('openai');

const _DATA_DIR = path.join(process.cwd(), 'data');
const _FEEDBACK_FILE = path.join(DATA_DIR, 'feedback_logs.json');
const _REPORT_DIR = path.join(DATA_DIR, 'reports', 'feedback');

function readAll() {_try {
    const _raw = fs.readFileSync(FEEDBACK_FILE, _'utf8');
    return JSON.parse(raw || '[]');} catch (e) {_return [];}
}

function lastNDays(_days) {_const _now = Date.now();
  const _cutoff = now - days * 24 * 60 * 60 * 1000;
  return (_x) => x.ts >= cutoff;}

async function main() {_if (!process.env.OPENAI_API_KEY) {
    
    process.exit(1);}
  const _all = readAll();
  const _recent = all.filter(lastNDays(7));
  const _downs = recent.filter(_(r) => r.rating === 'down');

  if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR, {_recursive: true});

  const _summaryPath = path.join(REPORT_DIR, `analysis-${_new Date().toISOString().slice(0, _10)}.md`);
  const _baselinePath = path.join(REPORT_DIR, 'prompt-improvements.md');

  if (downs.length === 0) {_fs.writeFileSync(summaryPath, _'# Weekly Feedback Analysis\n\nNo thumbs-down feedback this week.');
    
    return;}

  const _prompt = `You are an AI QA analyst. Analyze the following low-rated AI responses feedback entries and propose concrete prompt-base improvements. Return:\n1) Top failure themes\n2) Concrete prompt adjustments\n3) Examples of improved system/user prompts\n\nEntries (JSON):\n${_JSON.stringify(downs.slice(-100), _null, _2)}`;

  const _client = new OpenAI({_apiKey: process.env.OPENAI_API_KEY});
  const _resp = await client.chat.completions.create({_model: process.env.OPENAI_MODEL || 'gpt-4o-mini', _messages: [
      { role: 'system', _content: 'You are a senior AI prompt engineer.'},
      {_role: 'user', _content: prompt}],
    temperature: 0.3});

  const _text = resp.choices?.[0]?.message?.content || 'No analysis';

  const _md = `# Weekly Feedback Analysis (low-rated)\n\nDate: ${_new Date().toISOString()}\n\n## Summary\n${_text}\n`;
  fs.writeFileSync(summaryPath, md);

  // Append to prompt improvements
  const _current = fs.existsSync(baselinePath) ? fs.readFileSync(baselinePath, 'utf8') : '';
  fs.writeFileSync(baselinePath, `${_current}\n\n## ${_new Date().toISOString()}\n${_text}\n`);
  
}

main().catch(_(e) => {_process.exit(1);});