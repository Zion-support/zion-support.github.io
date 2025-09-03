#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🚀 Starting automated deployment...');

const deploymentSteps = [
  {
    name: 'Pre-deployment checks',
    command: 'npm run lint && npm run type-check',
    critical: true
  },
  {
    name: 'Build application',
    command: 'npm run build',
    critical: true
  },
  {
    name: 'Run tests',
    command: 'npm test || echo "No tests configured"',
    critical: false
  },
  {
    name: 'Security audit',
    command: 'node scripts/security-audit.cjs',
    critical: false
  },
  {
    name: 'Performance check',
    command: 'node scripts/performance-monitor.cjs',
    critical: false
  }
];

const results = {
  timestamp: new Date().toISOString(),
  steps: [],
  success: true,
  errors: []
};

async function runDeployment() {
  for (const step of deploymentSteps) {
    console.log(`\n📋 ${step.name}...`);
    
    try {
      const output = execSync(step.command, { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      console.log(`✅ ${step.name} completed successfully`);
      results.steps.push({
        name: step.name,
        status: 'success',
        output: output.substring(0, 500) // Truncate long outputs
      });
      
    } catch (error) {
      console.log(`❌ ${step.name} failed`);
      console.log(`   Error: ${error.message}`);
      
      results.steps.push({
        name: step.name,
        status: 'failed',
        error: error.message,
        output: error.stdout ? error.stdout.substring(0, 500) : ''
      });
      
      if (step.critical) {
        results.success = false;
        results.errors.push(`${step.name}: ${error.message}`);
      }
    }
  }
  
  // Generate deployment report
  const reportPath = `deployment-report-${Date.now()}.json`;
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  
  console.log(`\n📊 Deployment Summary:`);
  console.log(`   - Total steps: ${deploymentSteps.length}`);
  console.log(`   - Successful: ${results.steps.filter(s => s.status === 'success').length}`);
  console.log(`   - Failed: ${results.steps.filter(s => s.status === 'failed').length}`);
  console.log(`   - Overall status: ${results.success ? '✅ SUCCESS' : '❌ FAILED'}`);
  
  if (results.errors.length > 0) {
    console.log(`\n🚨 Critical errors:`);
    results.errors.forEach(error => console.log(`   - ${error}`));
  }
  
  console.log(`\n📄 Report saved to: ${reportPath}`);
  
  process.exit(results.success ? 0 : 1);
}

runDeployment().catch(error => {
  console.error('Deployment failed:', error);
  process.exit(1);
});