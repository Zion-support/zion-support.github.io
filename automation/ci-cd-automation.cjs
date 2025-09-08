#!/usr/bin/env node

/**
 * CI/CD Automation Script
 * Replaces GitHub Actions CI/CD Pipeline
 * Runs: npm ci, npm run verify, npm run build
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class CICDAutomation {
  constructor() {
    this.workspace = process.cwd();
    this.logFile = path.join(this.workspace, 'logs', 'ci-cd.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(message);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`Starting: ${description}`);
      const output = execSync(command, { 
        cwd: this.workspace, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ Success: ${description}`);
      if (output) {
        this.log(`Output: ${output.substring(0, 500)}...`);
      }
      return true;
    } catch (error) {
      this.log(`❌ Error in ${description}: ${error.message}`);
      if (error.stdout) {
        this.log(`STDOUT: ${error.stdout}`);
      }
      if (error.stderr) {
        this.log(`STDERR: ${error.stderr}`);
      }
      return false;
    }
  }

  async installDependencies() {
    return await this.runCommand(
      'npm ci --no-audit --no-fund',
      'Installing dependencies'
    );
  }

  async runVerify() {
    return await this.runCommand(
      'npm run verify',
      'Running verification (type-check, lint, tests)'
    );
  }

  async runBuild() {
    return await this.runCommand(
      'npm run build',
      'Building application'
    );
  }

  async runTests() {
    return await this.runCommand(
      'npm run test:smoke',
      'Running smoke tests'
    );
  }

  async runCICDPipeline() {
    this.log('🚀 Starting CI/CD Pipeline Automation');
    
    const steps = [
      { name: 'Install Dependencies', fn: () => this.installDependencies() },
      { name: 'Run Verification', fn: () => this.runVerify() },
      { name: 'Run Build', fn: () => this.runBuild() },
      { name: 'Run Tests', fn: () => this.runTests() }
    ];

    let allPassed = true;
    
    for (const step of steps) {
      const success = await step.fn();
      if (!success) {
        allPassed = false;
        this.log(`❌ CI/CD Pipeline failed at step: ${step.name}`);
        break;
      }
    }

    if (allPassed) {
      this.log('✅ CI/CD Pipeline completed successfully');
    } else {
      this.log('❌ CI/CD Pipeline failed');
    }

    return allPassed;
  }
}

// Main execution
if (require.main === module) {
  const automation = new CICDAutomation();
  
  automation.runCICDPipeline()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      automation.log(`Fatal error: ${error.message}`);
      process.exit(1);
    });
}

module.exports = CICDAutomation;