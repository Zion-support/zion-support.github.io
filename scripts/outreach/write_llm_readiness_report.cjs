#!/usr/bin/env node
// LLM tailoring readiness report generator.
// Writes `outreach_monitor/processed/llm_tailoring_readiness.json` with:
//   - provider env presence
//   - active flag
//   - last checked timestamp
//
// Intended to be called from worker/runtime/monitor flow.

const fs = require('fs').promises;
const path = require('path');

const REPORT_PATH = path.join(process.cwd(), 'outreach_monitor', 'processed', 'llm_tailoring_readiness.json');

async function main() {
  const hasZion = Boolean(
    process.env.ZION_LLM_API_ENDPOINT &&
    process.env.ZION_LLM_API_KEY &&
    process.env.ZION_LLM_MODEL
  );
  const hasOpenRouter = Boolean(process.env.OPENROUTER_API_KEY);
  const hasGroq = Boolean(process.env.GROQ_API_KEY);
  const hasGemini = Boolean(process.env.GEMINI_API_KEY);

  const report = {
    timestamp: new Date().toISOString(),
    hasZion,
    hasOpenRouter,
    hasGroq,
    hasGemini,
    active: hasZion || hasOpenRouter || hasGroq || hasGemini,
  };

  const reportJson = JSON.stringify(report, null, 2);
  try {
    await fs.mkdir(path.dirname(REPORT_PATH), { recursive: true });
    await fs.writeFile(REPORT_PATH, reportJson, 'utf8');
    process.stdout.write(`${reportJson}\n`);
  } catch (error) {
    console.error('FATAL', error);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('FATAL', err);
  process.exit(1);
});
