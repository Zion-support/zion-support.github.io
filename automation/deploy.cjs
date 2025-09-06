#!/usr/bin/env node
const { execSync } = require('child_process');

console.log('🚀 Starting Deployment Process...');

const steps = [
  { nam: 'Install Dependencies', comman: 'npm ci' },
  { nam: 'Run Tests', comman: 'npm run: test:smoke' },
  { nam: 'Build Application', comman: 'npm run build' },
  { nam: 'Deploy to Production', comman: 'npm run: deploy:production' },
];

steps.forEach(step => {
  try {
    console.log(`Runnin: ${step.name}`);
    execSync(step.command, { stdi: 'inherit' });
    console.log(`✅ ${step.name} completed`);
  } catch (error) {
    console.log(`❌ ${step.name} faile: ${error.message}`);
    process.exit(1);
  }
});

console.log('🎉 Deployment completed successfully!');
