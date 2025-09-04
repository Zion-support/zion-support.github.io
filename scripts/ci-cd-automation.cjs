#!/usr/bin/env node

/**
 * CI/CD Pipeline Automation Script
 * Replaces GitHub Actions CI/CD workflow with PM2 automation
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  projectRoot: '/workspace',
  logFile: './logs/ci-cd-automation.log',
  reportFile: './automation-reports/ci-cd-report.json'
};

// Utility functions
function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  console.log(logMessage.trim());
  
  // Ensure logs directory exists
  const logsDir = path.dirname(CONFIG.logFile);
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
  }
  
  fs.appendFileSync(CONFIG.logFile, logMessage);
}

function execCommand(command, options = {}) {
  try {
    log(`Executing: ${command}`);
    const result = execSync(command, { 
      cwd: CONFIG.projectRoot,
      encoding: 'utf8',
      ...options 
    });
    log(`Success: ${command}`);
    return result;
  } catch (error) {
    log(`Error executing ${command}: ${error.message}`);
    throw error;
  }
}

function generateReport(results) {
  const report = {
    timestamp: new Date().toISOString(),
    status: 'completed',
    results: results,
    summary: {
      totalSteps: Object.keys(results).length,
      successfulSteps: Object.values(results).filter(r => r.success).length,
      failedSteps: Object.values(results).filter(r => !r.success).length
    }
  };

  // Ensure reports directory exists
  const reportsDir = path.dirname(CONFIG.reportFile);
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }

  fs.writeFileSync(CONFIG.reportFile, JSON.stringify(report, null, 2));
  log(`Report generated: ${CONFIG.reportFile}`);
  return report;
}

// Main CI/CD pipeline steps
async function runCIPipeline() {
  log('🚀 Starting CI/CD Pipeline Automation');
  
  const results = {};

  try {
    // Step 1: Install dependencies
    log('📦 Installing dependencies...');
    try {
      execCommand('npm ci');
      results.dependencies = { success: true, message: 'Dependencies installed successfully' };
    } catch (error) {
      results.dependencies = { success: false, message: error.message };
    }

    // Step 2: Run linting
    log('🔍 Running linting...');
    try {
      execCommand('npm run lint');
      results.linting = { success: true, message: 'Linting passed' };
    } catch (error) {
      results.linting = { success: false, message: error.message };
    }

    // Step 3: Run tests
    log('🧪 Running tests...');
    try {
      execCommand('npm test');
      results.tests = { success: true, message: 'Tests passed' };
    } catch (error) {
      results.tests = { success: false, message: error.message };
    }

    // Step 4: Build application
    log('🏗️ Building application...');
    try {
      execCommand('npm run build');
      results.build = { success: true, message: 'Build completed successfully' };
    } catch (error) {
      results.build = { success: false, message: error.message };
    }

    // Step 5: Security audit
    log('🔒 Running security audit...');
    try {
      execCommand('npm audit --audit-level=moderate');
      results.securityAudit = { success: true, message: 'Security audit passed' };
    } catch (error) {
      results.securityAudit = { success: false, message: error.message };
    }

    // Generate final report
    const report = generateReport(results);
    
    if (report.summary.failedSteps === 0) {
      log('✅ CI/CD Pipeline completed successfully');
    } else {
      log(`⚠️ CI/CD Pipeline completed with ${report.summary.failedSteps} failures`);
    }

    return report;

  } catch (error) {
    log(`❌ CI/CD Pipeline failed: ${error.message}`);
    results.pipelineError = { success: false, message: error.message };
    generateReport(results);
    throw error;
  }
}

// Run the pipeline
if (require.main === module) {
  runCIPipeline()
    .then(() => {
      log('CI/CD Pipeline automation completed');
      process.exit(0);
    })
    .catch((error) => {
      log(`CI/CD Pipeline automation failed: ${error.message}`);
      process.exit(1);
    });
}

module.exports = { runCIPipeline };