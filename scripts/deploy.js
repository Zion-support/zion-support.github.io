#!/usr/bin/env node
import { execSync } from 'child_process';

console.log('🚀 Starting deployment...');

try {
  console.log('📦 Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('📝 Committing changes...');
  execSync('git add .', { stdio: 'inherit' });
  execSync('git commit -m "Automated fixes and improvements"', { stdio: 'inherit' });
  
  console.log('⬆️ Pushing to repository...');
  execSync('git push origin main', { stdio: 'inherit' });
  
  console.log('✅ Deployment completed successfully!');
} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}