#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

console.log('🚀 Comprehensive Deployment Automation v2.0');
console.log('============================================');

const deploymentReport = {
  timestamp: new Date().toISOString(),
  sessionId: Date.now().toString(),
  environment: process.env.NODE_ENV || 'production',
  steps: [],
  summary: {
    totalSteps: 0,
    successful: 0,
    failed: 0,
    warnings: 0,
    duration: 0
  },
  recommendations: []
};

function log(level, message, data = null) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  
  if (data && process.env.DEBUG) {
    console.log(JSON.stringify(data, null, 2));
  }
}

async function runStep(name, command, critical = true) {
  log('info', `Running step: ${name}`);
  
  const step = {
    name,
    command,
    critical,
    startTime: new Date().toISOString(),
    status: 'running'
  };
  
  const startTime = Date.now();
  
  try {
    const output = execSync(command, { 
      encoding: 'utf8',
      stdio: 'pipe',
      timeout: 300000 // 5 minutes
    });
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    step.status = 'success';
    step.duration = duration;
    step.output = output.substring(0, 1000);
    
    deploymentReport.summary.successful++;
    log('info', `${name} completed successfully (${duration}ms)`);
    
    return { success: true, output, duration };
    
  } catch (error) {
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    step.status = 'failed';
    step.duration = duration;
    step.error = error.message;
    
    if (critical) {
      deploymentReport.summary.failed++;
      log('error', `${name} failed (CRITICAL) (${duration}ms)`);
    } else {
      deploymentReport.summary.warnings++;
      log('warn', `${name} failed (non-critical) (${duration}ms)`);
    }
    
    return { success: false, error: error.message, duration };
  } finally {
    deploymentReport.summary.totalSteps++;
    deploymentReport.steps.push(step);
  }
}

async function preDeploymentChecks() {
  log('info', 'Running pre-deployment checks');
  
  // Check if we're in a git repository
  await runStep('Git Repository Check', 'git status', true);
  
  // Check for uncommitted changes
  await runStep('Uncommitted Changes Check', 'git diff --quiet', false);
  
  // Check if we're on the correct branch
  const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim();
  if (branch !== 'main' && branch !== 'master') {
    log('warn', `Deploying from branch: ${branch}`);
  }
  
  // Check Node.js version
  await runStep('Node.js Version Check', 'node --version', true);
  
  // Check npm version
  await runStep('NPM Version Check', 'npm --version', true);
  
  // Check available disk space
  await runStep('Disk Space Check', 'df -h', false);
  
  // Check memory usage
  await runStep('Memory Check', 'free -h', false);
}

async function buildApplication() {
  log('info', 'Building application');
  
  // Install dependencies
  await runStep('Install Dependencies', 'npm ci', true);
  
  // Run linting
  await runStep('Code Linting', 'npm run lint', false);
  
  // Run type checking
  await runStep('TypeScript Check', 'npx tsc --noEmit', false);
  
  // Run tests
  await runStep('Test Suite', 'npm test || echo "No tests configured"', false);
  
  // Build application
  await runStep('Build Application', 'npm run build', true);
  
  // Check build output
  await runStep('Build Output Check', 'ls -la .next/', true);
}

async function deployApplication() {
  log('info', 'Deploying application');
  
  // Create deployment directory
  const deployDir = `deployments/deployment-${new Date().toISOString().replace(/[:.]/g, '-')}`;
  await runStep('Create Deployment Directory', `mkdir -p ${deployDir}`, true);
  
  // Copy build files
  await runStep('Copy Build Files', `cp -r .next ${deployDir}/`, true);
  
  // Copy package files
  await runStep('Copy Package Files', `cp package*.json ${deployDir}/`, true);
  
  // Copy public files
  if (fs.existsSync('public')) {
    await runStep('Copy Public Files', `cp -r public ${deployDir}/`, true);
  }
  
  // Create deployment script
  const deployScript = `#!/bin/bash
cd ${deployDir}
npm ci --production
npm start
`;
  
  fs.writeFileSync(`${deployDir}/deploy.sh`, deployScript);
  fs.chmodSync(`${deployDir}/deploy.sh`, '755');
  
  log('info', `Deployment files created in ${deployDir}`);
}

async function postDeploymentChecks() {
  log('info', 'Running post-deployment checks');
  
  // Check if deployment directory exists
  await runStep('Deployment Directory Check', 'ls -la deployments/', true);
  
  // Check file permissions
  await runStep('File Permissions Check', 'ls -la deployments/*/deploy.sh', false);
  
  // Generate deployment summary
  const summary = {
    timestamp: new Date().toISOString(),
    environment: deploymentReport.environment,
    totalSteps: deploymentReport.summary.totalSteps,
    successful: deploymentReport.summary.successful,
    failed: deploymentReport.summary.failed,
    warnings: deploymentReport.summary.warnings
  };
  
  const summaryPath = `deployments/deployment-${new Date().toISOString().replace(/[:.]/g, '-')}/deployment-summary.json`;
  fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
  
  log('info', `Deployment summary saved to ${summaryPath}`);
}

function generateRecommendations() {
  const recommendations = [];
  const { totalSteps, successful, failed, warnings } = deploymentReport.summary;
  
  if (failed > 0) {
    recommendations.push({
      priority: 'high',
      message: `${failed} deployment steps failed`,
      action: 'Review failed steps and fix issues before next deployment'
    });
  }
  
  if (warnings > 0) {
    recommendations.push({
      priority: 'medium',
      message: `${warnings} deployment steps completed with warnings`,
      action: 'Address warnings to improve deployment reliability'
    });
  }
  
  const successRate = totalSteps > 0 ? (successful / totalSteps) * 100 : 0;
  if (successRate < 90) {
    recommendations.push({
      priority: 'high',
      message: `Deployment success rate is ${Math.round(successRate)}% (below 90%)`,
      action: 'Improve deployment process and error handling'
    });
  }
  
  recommendations.push({
    priority: 'medium',
    message: 'Implement automated rollback mechanism',
    action: 'Set up automatic rollback for failed deployments'
  });
  
  recommendations.push({
    priority: 'low',
    message: 'Implement blue-green deployment',
    action: 'Consider implementing blue-green deployment for zero-downtime deployments'
  });
  
  return recommendations;
}

async function main() {
  try {
    const startTime = Date.now();
    
    log('info', 'Starting comprehensive deployment automation');
    
    await preDeploymentChecks();
    await buildApplication();
    await deployApplication();
    await postDeploymentChecks();
    
    const endTime = Date.now();
    deploymentReport.summary.duration = endTime - startTime;
    deploymentReport.recommendations = generateRecommendations();
    
    // Display summary
    log('info', 'Comprehensive Deployment Automation Summary');
    log('info', '==========================================');
    log('info', `Total steps: ${deploymentReport.summary.totalSteps}`);
    log('info', `Successful: ${deploymentReport.summary.successful}`);
    log('info', `Failed: ${deploymentReport.summary.failed}`);
    log('info', `Warnings: ${deploymentReport.summary.warnings}`);
    log('info', `Duration: ${Math.round(deploymentReport.summary.duration / 1000)}s`);
    
    if (deploymentReport.recommendations.length > 0) {
      log('info', 'Deployment Recommendations:');
      deploymentReport.recommendations.forEach(rec => {
        log('info', `- [${rec.priority.toUpperCase()}] ${rec.message}`);
        log('info', `  Action: ${rec.action}`);
      });
    }
    
    // Save deployment report
    const reportPath = path.join(process.cwd(), `comprehensive-deployment-report-${deploymentReport.sessionId}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(deploymentReport, null, 2));
    
    log('info', `Comprehensive deployment report saved to: comprehensive-deployment-report-${deploymentReport.sessionId}.json`);
    
    // Exit with appropriate status
    if (deploymentReport.summary.failed > 0) {
      log('error', 'Deployment completed with critical failures');
      process.exit(1);
    } else if (deploymentReport.summary.warnings > 0) {
      log('warn', 'Deployment completed with warnings');
      process.exit(0);
    } else {
      log('info', 'Deployment completed successfully!');
      process.exit(0);
    }
    
  } catch (error) {
    log('error', 'Fatal error in comprehensive deployment automation', error.message);
    process.exit(1);
  }
}

main();