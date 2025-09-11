#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('🏗️ Running comprehensive build...');

const buildSteps = [
  { name: 'Install Dependencies', cmd: 'npm install' },
  { name: 'Lint Check', cmd: 'npm run lint' },
  { name: 'Type Check', cmd: 'npx tsc --noEmit' },
  { name: 'Build Project', cmd: 'npm run build' },
];

for (const step of buildSteps) {
  try {
    console.log(`📋 ${step.name}...`);
    execSync(step.cmd, { stdio: 'inherit' });
    console.log(`✅ ${step.name} completed`);
  } catch (error) {
    console.log(`❌ ${step.name} failed: ${error.message}`);
    process.exit(1);
  }
}

console.log('🎉 Build completed successfully!');
