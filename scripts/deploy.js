#!/usr/bin/env node
import { execSync } from 'child_process';

console.log('🚀 Starting deployment process...');

try {
  console.log('1. Installing dependencies...');
  execSync('npm ci --production', { stdio: 'inherit' });
  
  console.log('2. Running tests...');
  execSync('npm run test:smoke', { stdio: 'inherit' });
  
  console.log('3. Building application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('4. Starting application...');
  execSync('npm start', { stdio: 'inherit' });
  
  console.log('✅ Deployment completed successfully!');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}
