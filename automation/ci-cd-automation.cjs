#!/usr/bin/env node

/**
 * CI/CD Automation Script
 * Replaces GitHub Actions CI/CD pipeline with PM2 automation
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class CICDAutomation {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'ci-cd.log');
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
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runTests() {
    try {
      this.log('Running tests...');
      execSync('npm run test:smoke', { stdio: 'pipe' });
      this.log('Tests completed successfully');
      return true;
    } catch (error) {
      this.log(`Tests failed: ${error.message}`);
      return false;
    }
  }

  async runBuild() {
    try {
      this.log('Running build...');
      execSync('npm run build', { stdio: 'pipe' });
      this.log('Build completed successfully');
      return true;
    } catch (error) {
      this.log(`Build failed: ${error.message}`);
      return false;
    }
  }

  async runLint() {
    try {
      this.log('Running lint...');
      execSync('npm run lint', { stdio: 'pipe' });
      this.log('Lint completed successfully');
      return true;
    } catch (error) {
      this.log(`Lint failed: ${error.message}`);
      return false;
    }
  }

  async runTypeCheck() {
    try {
      this.log('Running type check...');
      execSync('npm run type-check', { stdio: 'pipe' });
      this.log('Type check completed successfully');
      return true;
    } catch (error) {
      this.log(`Type check failed: ${error.message}`);
      return false;
    }
  }

  async runCICDPipeline() {
    this.log('Starting CI/CD pipeline...');
    
    // Run all checks
    const lintSuccess = await this.runLint();
    const typeCheckSuccess = await this.runTypeCheck();
    const testSuccess = await this.runTests();
    const buildSuccess = await this.runBuild();
    
    const allSuccess = lintSuccess && typeCheckSuccess && testSuccess && buildSuccess;
    
    if (allSuccess) {
      this.log('CI/CD pipeline completed successfully');
      return true;
    } else {
      this.log('CI/CD pipeline failed');
      return false;
    }
  }

  async run() {
    this.log('CI/CD Automation started');
    
    const success = await this.runCICDPipeline();
    
    if (success) {
      this.log('CI/CD automation completed successfully');
      process.exit(0);
    } else {
      this.log('CI/CD automation failed');
      process.exit(1);
    }
  }
}

// Run the automation
if (require.main === module) {
  const automation = new CICDAutomation();
  automation.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = CICDAutomation;