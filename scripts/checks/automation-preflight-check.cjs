#!/usr/bin/env node
/**
 * automation-preflight-check.cjs
 * Lightweight preflight for GitHub workflow files. Zero-dependency.
 * Fails (exit 1) only on real problems: empty files, tab indentation in
 * YAML, missing `on:`/`jobs:` blocks. Everything else is a warning.
 */
'use strict';
const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), '.github', 'workflows');
let errors = 0;
let warnings = 0;
let count = 0;

if (!fs.existsSync(dir)) {
  console.log('preflight: no .github/workflows directory — nothing to check.');
  process.exit(0);
}

for (const f of fs.readdirSync(dir)) {
  if (!/\.(ya?ml)$/.test(f)) continue;
  count++;
  const p = path.join(dir, f);
  const text = fs.readFileSync(p, 'utf8');
  const rel = `.github/workflows/${f}`;

  if (!text.trim()) {
    console.error(`ERROR ${rel}: file is empty`);
    errors++;
    continue;
  }
  if (/\t/.test(text)) {
    console.error(`ERROR ${rel}: tab indentation found (YAML forbids tabs)`);
    errors++;
  }
  // top-level `on:` may be quoted as "on": (YAML 1.1 boolean)
  if (!/^["']?on["']?:/m.test(text)) {
    console.error(`ERROR ${rel}: missing top-level "on:" trigger`);
    errors++;
  }
  if (!/^jobs:/m.test(text)) {
    console.error(`ERROR ${rel}: missing top-level "jobs:" block`);
    errors++;
  }
  if (/cron:\s*['"]\*\s/.test(text)) {
    console.warn(`WARN ${rel}: cron runs every minute — verify this is intended`);
    warnings++;
  }
  if (/uses:\s*[^\s#]+@(main|master)\b/.test(text)) {
    console.warn(`WARN ${rel}: action pinned to a branch, prefer a tag/SHA`);
    warnings++;
  }
}

console.log(`preflight: checked ${count} workflow file(s), ${errors} error(s), ${warnings} warning(s).`);
process.exit(errors > 0 ? 1 : 0);
