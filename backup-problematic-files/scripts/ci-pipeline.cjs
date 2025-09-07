#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔄 CI/CD Pipeline Runner...\n');

// Function to run CI pipeline
function runCIPipeline() {
  console.log('🚀 Starting CI/CD Pipeline\n');
  
  const steps = [
    {
      name: 'Install Dependencies',
      command: 'npm ci',
      critical: true
    },
    {
      name: 'Lint Code',
      command: 'npm run lint',
      critical: false
    },
    {
      name: 'Type Check',
      command: 'npm run type-check',
      critical: false
    },
    {
      name: 'Run Tests',
      command: 'npm run test:smoke',
      critical: true
    },
    {
      name: 'Build Application',
      command: 'npm run build',
      critical: true
    },
    {
      name: 'Security Audit',
      command: 'node scripts/security-audit.cjs',
      critical: false
    },
    {
      name: 'Performance Check',
      command: 'node scripts/performance-monitor.cjs',
      critical: false
    }
  ];

  let passedSteps = 0;
  let failedSteps = 0;
  let criticalFailures = 0;

  steps.forEach((step, index) => {
    console.log(`📋 Step ${index + 1}/${steps.length}: ${step.name}`);
    
    try {
      execSync(step.command, { 
        stdio: 'pipe',
        cwd: process.cwd()
      });
      console.log(`   ✅ ${step.name} - PASSED\n`);
      passedSteps++;
    } catch (error) {
      console.log(`   ❌ ${step.name} - FAILED`);
      console.log(`   Error: ${error.message}\n`);
      failedSteps++;
      
      if (step.critical) {
        criticalFailures++;
        console.log(`   🚨 CRITICAL FAILURE: ${step.name} is required for deployment\n`);
      }
    }
  });

  // Generate CI report
  console.log('📊 CI/CD Pipeline Report');
  console.log('========================');
  console.log(`Total steps: ${steps.length}`);
  console.log(`Passed: ${passedSteps}`);
  console.log(`Failed: ${failedSteps}`);
  console.log(`Critical failures: ${criticalFailures}`);
  
  if (criticalFailures > 0) {
    console.log('\n❌ PIPELINE FAILED - Critical steps failed');
    console.log('Deployment blocked due to critical failures');
    process.exit(1);
  } else if (failedSteps > 0) {
    console.log('\n⚠️ PIPELINE WARNING - Some non-critical steps failed');
    console.log('Deployment can proceed but consider fixing warnings');
  } else {
    console.log('\n✅ PIPELINE SUCCESS - All steps passed');
    console.log('Ready for deployment');
  }

  // Create deployment artifact
  if (criticalFailures === 0) {
    console.log('\n📦 Creating deployment artifact...');
    try {
      if (fs.existsSync('.next')) {
        execSync('tar -czf deployment.tar.gz .next package.json package-lock.json', { stdio: 'pipe' });
        console.log('   ✅ Deployment artifact created: deployment.tar.gz');
      } else {
        console.log('   ⚠️ No build found. Run "npm run build" first.');
      }
    } catch (error) {
      console.log(`   ❌ Failed to create deployment artifact: ${error.message}`);
    }
  }
}

// Run CI pipeline
runCIPipeline();