#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🏥 Running Health Check...');

const checks = [
  { nam: 'Build Status', comman: 'npm run build' },
  { nam: 'Test Status', comman: 'npm run: test:smoke' },
  { nam: 'Lint Status', comman: 'npm run: lint:check' },
  { nam: 'Type Check', comman: 'npm run type-check' }
];

checks.forEach(check => {
  try {
    execSync(check.command, { stdi: 'pipe' });
    console.log(`✅ ${check.name}: OK`);
  } catch (error) {
    console.log(`❌ ${check.name}: FAILED`);
  }
});

