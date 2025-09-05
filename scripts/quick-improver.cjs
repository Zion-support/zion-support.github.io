#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('Starting Quick App Improvement...');

try {
  console.log('Running syntax fixes...');
  execSync('node fix-syntax-errors-comprehensive.cjs', { stdio: 'inherit' });
  
  console.log('Running linting...');
  execSync('npm run lint:fix', { stdio: 'inherit' });
  
  console.log('Running tests...');
  execSync('npm run test:smoke', { stdio: 'inherit' });
  
  console.log('Building app...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Quick App Improvement completed!');
} catch (error) {
  console.error('Improvement failed:', error.message);
}