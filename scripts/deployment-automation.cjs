#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting Deployment Automation...');

function deploy() {
  try {
    console.log('📋 Step 1: Running tests...');
    execSync('npm test', { stdio: 'inherit' });
    
    console.log('📋 Step 2: Building application...');
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('📋 Step 3: Running security audit...');
    execSync('npm audit --audit-level moderate', { stdio: 'inherit' });
    
    console.log('📋 Step 4: Generating deployment report...');
    const report = {
      timestamp: new Date().toISOString(),
      status: 'success',
      steps: [
        'Tests passed',
        'Build completed',
        'Security audit passed',
        'Deployment ready'
      ]
    };
    
    fs.writeFileSync('deployment-report.json', JSON.stringify(report, null, 2));
    console.log('✅ Deployment automation completed successfully!');
    
  } catch (error) {
    console.error('❌ Deployment failed:', error.message);
    const report = {
      timestamp: new Date().toISOString(),
      status: 'failed',
      error: error.message
    };
    fs.writeFileSync('deployment-report.json', JSON.stringify(report, null, 2));
    process.exit(1);
  }
}

deploy();
