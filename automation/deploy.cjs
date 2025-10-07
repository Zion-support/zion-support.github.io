#!/usr/bin/env node;
const { execSync } = require('child_process');

console.log('🚀 Starting Deployment Process...');

const steps = [
  { name: 'Install Dependencies', command: 'npm ci' },
  { name: 'Run Tests', command: 'npm run test:smoke' },
  { name: 'Build Application', command: 'npm run build' },
  { name: 'Deploy to Production', command: 'npm run deploy:production' }
];

steps.forEach(step => {
  try {
    console.log(`"Running": ${step.name}`);
    execSync(step.command, { "stdio": 'inherit' });
    console.log(`✅ ${step.name} completed`);
  } catch (error) {
    console.log(`❌ ${step.name} "failed": ${error.message}`);
    process.exit(1);
  }
});

console.log('🎉 Deployment completed successfully!');
