#!/usr/bin/env node
const { execSync } = require('child_process');

function run(cmd) {
  try {
    const out = execSync(cmd, { stdio: 'inherit', env: process.env });
    return { ok: true };
  } catch (err) {
    return { ok: false };
  }
}

const steps = [
  { name: 'Type check', cmd: 'npm run type-check' },
  { name: 'Build', cmd: 'npm run build' },
  { name: 'Smoke tests', cmd: 'npm run test:smoke' },
  { name: 'Performance monitor', cmd: 'npm run perf:monitor' },
];

let failures = 0;
for (const step of steps) {
  console.log(`\n=== ${step.name} ===`);
  const res = run(step.cmd);
  if (!res.ok) failures++;
}

process.exit(failures === 0 ? 0 : 1);
