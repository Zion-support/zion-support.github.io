#!/usr/bin/env node
// Workflow contracts check: dedupe, integrity, pin-strict.
// Zero-dependency Node script so CI never fails on a missing package.
// Usage: node scripts/checks/workflow-contracts-check.cjs
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', '..', '.github', 'workflows');
let errors = 0;
const fail = (msg) => { console.error(`contract error: ${msg}`); errors++; };

if (!fs.existsSync(dir)) {
  console.log('No .github/workflows directory; nothing to check.');
  process.exit(0);
}

const files = fs.readdirSync(dir).filter((f) => /\.ya?ml$/i.test(f));
if (files.length === 0) {
  console.log('No workflow files found; nothing to check.');
  process.exit(0);
}

// 1) Dedupe: unique file basenames and unique workflow `name:` values.
const seenNames = new Map();
const seenFiles = new Set();
for (const f of files) {
  const key = f.toLowerCase();
  if (seenFiles.has(key)) fail(`duplicate workflow file (case-insensitive): ${f}`);
  seenFiles.add(key);

  const text = fs.readFileSync(path.join(dir, f), 'utf8');

  // 2) Integrity: minimal structural sanity without a YAML parser.
  if (/\t/.test(text)) fail(`${f}: contains tab characters (invalid YAML indentation)`);
  if (!/^\s*name\s*:/m.test(text)) fail(`${f}: missing top-level "name:"`);
  if (!/^\s*("on"|'on'|on)\s*:/m.test(text)) fail(`${f}: missing top-level "on:" trigger`);
  if (!/^\s*jobs\s*:/m.test(text)) fail(`${f}: missing top-level "jobs:"`);

  const nameMatch = text.match(/^\s*name\s*:\s*['"]?([^'"\n]+)['"]?\s*$/m);
  if (nameMatch) {
    const wfName = nameMatch[1].trim();
    if (seenNames.has(wfName)) {
      fail(`duplicate workflow name "${wfName}" in ${f} and ${seenNames.get(wfName)}`);
    } else {
      seenNames.set(wfName, f);
    }
  }

  // 3) Pin strict: every remote action in `uses:` must be pinned to a 40-char SHA.
  //    Local reusable workflows (./...) and docker:// are exempt.
  const usesLines = text.match(/^\s*uses\s*:\s*[^#\n]+/gm) || [];
  for (const line of usesLines) {
    const ref = line.replace(/^\s*uses\s*:\s*/, '').replace(/\s+#.*$/, '').trim().replace(/^['"]|['"]$/g, '');
    if (ref.startsWith('./') || ref.startsWith('docker://')) continue;
    const at = ref.lastIndexOf('@');
    if (at === -1) { fail(`${f}: action "${ref}" has no version pin`); continue; }
    const pin = ref.slice(at + 1);
    if (!/^[0-9a-f]{40}$/i.test(pin)) {
      fail(`${f}: action "${ref}" is not SHA-pinned (pin strict)`);
    }
  }
}

if (errors > 0) {
  console.error(`workflow contracts: ${errors} error(s) across ${files.length} file(s)`);
  process.exit(1);
}
console.log(`workflow contracts ok: ${files.length} file(s), dedupe + integrity + pin-strict passed`);
