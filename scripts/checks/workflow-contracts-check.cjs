#!/usr/bin/env node
/**
 * Workflow contracts (dedupe + SHA pin) for changed workflow files.
 * Missing this script was failing `npm run workflows:contracts:node` on every
 * workflow PR and stopping agents.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SHA_PIN = /@[0-9a-f]{40}\b/i;
const USES_RE = /^\s*uses:\s*['"]?([^'"\s#]+)/;

function listChangedWorkflows() {
  try {
    const out = execSync('git diff --name-only origin/main...HEAD -- .github/workflows', {
      encoding: 'utf8',
    });
    return out
      .split('\n')
      .map((line) => line.trim())
      .filter((file) => /\.ya?ml$/.test(file) && fs.existsSync(file));
  } catch {
    const dir = path.join(process.cwd(), '.github', 'workflows');
    return fs.readdirSync(dir)
      .filter((name) => /\.ya?ml$/.test(name))
      .map((name) => path.join('.github/workflows', name));
  }
}

const files = listChangedWorkflows();
const names = new Map();
let errors = 0;

for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const nameMatch = text.match(/^name:\s*(.+)$/m);
  if (nameMatch) {
    const name = nameMatch[1].trim();
    if (names.has(name)) {
      console.error(`ERROR ${file}: duplicate workflow name "${name}" (also ${names.get(name)})`);
      errors++;
    } else {
      names.set(name, file);
    }
  }
  for (const line of text.split('\n')) {
    const match = line.match(USES_RE);
    if (!match) continue;
    const action = match[1];
    if (action.startsWith('./')) continue;
    if (!SHA_PIN.test(line)) {
      console.error(`ERROR ${file}: unpinned action ${action}`);
      errors++;
    }
  }
}

console.log(
  errors
    ? `contracts: ${files.length} workflow file(s), ${errors} error(s)`
    : `contracts: ${files.length} workflow file(s), pin + name check ok`,
);
process.exit(errors > 0 ? 1 : 0);
