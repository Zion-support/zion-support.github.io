#!/usr/bin/env node
import { execSync } from 'child_process';

console.log('🧪 Running comprehensive test suite...');

const tests = [
  { name: 'Smoke Tests', command: 'npm run test:smoke' },
  { name: 'Type Check', command: 'npm run type-check' },
  { name: 'Lint Check', command: 'npm run lint' },
  { name: 'Build Test', command: 'npm run build' }
];

let passed = 0;
let failed = 0;

for (const test of tests) {
  try {
    console.log(`Running ${test.name}...`);
    execSync(test.command, { stdio: 'pipe' });
    console.log(`✅ ${test.name} passed`);
    passed++;
  } catch (error) {
    console.log(`❌ ${test.name} failed`);
    failed++;
  }
}

console.log(`\n📊 Test Results: ${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
