#!/usr/bin/env node
/*
 * workflows:contracts:node — workflow contracts check (dedupe, integrity, pin hygiene)
 * Invoked by .github/workflows/reusable-workflow-ci.yml (run_contracts=true) from
 * Workflow Change Guard and AI Actions pin strict guard.
 *
 * Checks:
 *  1. Every .github/workflows/*.yml|yaml is readable and has a top-level `name:`.
 *  2. No two workflow files declare the same `name:` (GitHub dedupe contract).
 *  3. Pin hygiene report: actions referenced by tag/branch (not full-length SHA)
 *     are listed as a warning (non-blocking unless STRICT_PIN=1).
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), '.github', 'workflows');
let failures = 0;

if (!fs.existsSync(dir)) {
  console.error('workflows contracts: .github/workflows not found');
  process.exit(1);
}

const files = fs.readdirSync(dir).filter((f) => /\.ya?ml$/.test(f));
const byName = new Map();
const unpinned = [];

for (const f of files) {
  const fp = path.join(dir, f);
  let text;
  try {
    text = fs.readFileSync(fp, 'utf8');
  } catch (e) {
    console.error(`integrity: cannot read ${f}: ${e.message}`);
    failures++;
    continue;
  }
  const m = text.match(/^name:\s*(.+)$/m);
  if (!m) {
    console.error(`integrity: ${f} has no top-level name:`);
    failures++;
    continue;
  }
  const name = m[1].trim().replace(/^['"]|['"]$/g, '');
  if (byName.has(name)) {
    console.error(`dedupe: duplicate workflow name "${name}" in ${f} and ${byName.get(name)}`);
    failures++;
  } else {
    byName.set(name, f);
  }
  const uses = text.matchAll(/uses:\s*([\w.\-\/]+)@([\w.\-\/]+)/g);
  for (const u of uses) {
    if (!/^[0-9a-f]{40}$/.test(u[2])) unpinned.push(`${f}: ${u[1]}@${u[2]}`);
  }
}

console.log(`workflows contracts: ${files.length} workflow files checked, ${byName.size} unique names`);
if (unpinned.length) {
  console.log(`pin hygiene: ${unpinned.length} action refs not SHA-pinned (warning${process.env.STRICT_PIN === '1' ? ', strict' : ''}):`);
  for (const u of unpinned) console.log(`  - ${u}`);
  if (process.env.STRICT_PIN === '1') failures++;
}

if (failures) {
  console.error(`workflows contracts: FAILED (${failures} issue(s))`);
  process.exit(1);
}
console.log('workflows contracts: ok');
process.exit(0);
