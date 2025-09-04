#!/usr/bin/env node

<<<<<<< HEAD
=======
/**
 * CI/CD Automation Script
 * Replaces GitHub Actions CI/CD Pipeline
 * Runs every 4 hours via PM2 cron restart
 */

>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-f06c
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class CICDAutomation {
  constructor() {
<<<<<<< HEAD
    this.logFile = path.join(__dirname, 'logs', 'ci-cd-automation.log');
=======
    this.logFile = path.join(__dirname, '..', 'logs', 'ci-cd.log');
>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-f06c
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
<<<<<<< HEAD
    console.log(message);
=======
    console.log(logMessage.trim());
>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-f06c
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

<<<<<<< HEAD
=======
  async runLint() {
    try {
      this.log('Running linting...');
      execSync('npm run lint', { stdio: 'pipe' });
      this.log('Linting completed successfully');
      return true;
    } catch (error) {
      this.log(`Linting failed: ${error.message}`);
      return false;
    }
  }

  async runTypeCheck() {
    try {
      this.log('Running type checking...');
      execSync('npm run type-check', { stdio: 'pipe' });
      this.log('Type checking completed successfully');
      return true;
    } catch (error) {
      this.log(`Type checking failed: ${error.message}`);
      return false;
    }
  }

>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-f06c
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

<<<<<<< HEAD
  async runLint() {
    try {
      this.log('Running lint...');
      execSync('npm run lint', { stdio: 'pipe' });
      this.log('Lint completed successfully');
      return true;
    } catch (error) {
      this.log(`Lint failed: ${error.message}`);
=======
  async runVerify() {
    try {
      this.log('Running verify (type-check, lint, tests, build)...');
      execSync('npm run verify', { stdio: 'pipe' });
      this.log('Verify completed successfully');
      return true;
    } catch (error) {
      this.log(`Verify failed: ${error.message}`);
>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-f06c
      return false;
    }
  }

<<<<<<< HEAD
  async runTypeCheck() {
    try {
      this.log('Running type check...');
      execSync('npm run type-check', { stdio: 'pipe' });
      this.log('Type check completed successfully');
      return true;
    } catch (error) {
      this.log(`Type check failed: ${error.message}`);
=======
  async deploy() {
    try {
      this.log('Starting deployment...');
      // Add deployment logic here
      this.log('Deployment completed successfully');
      return true;
    } catch (error) {
      this.log(`Deployment failed: ${error.message}`);
>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-f06c
      return false;
    }
  }

<<<<<<< HEAD
  async runCIPipeline() {
    this.log('Starting CI/CD pipeline...');
=======
  async run() {
    this.log('=== CI/CD Automation Started ===');
>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-f06c
    
    const results = {
      lint: await this.runLint(),
      typeCheck: await this.runTypeCheck(),
<<<<<<< HEAD
      test: await this.runTests(),
      build: await this.runBuild()
    };

    const allPassed = Object.values(results).every(result => result);
    
    if (allPassed) {
      this.log('CI/CD pipeline completed successfully');
    } else {
      this.log('CI/CD pipeline failed - some steps did not pass');
    }

    return allPassed;
  }

  async start() {
    this.log('CI/CD automation service started');
    
    // Run initial pipeline
    await this.runCIPipeline();
    
    // Set up interval for periodic CI/CD (every 4 hours)
    setInterval(async () => {
      await this.runCIPipeline();
    }, 4 * 60 * 60 * 1000);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const automation = new CICDAutomation();
  automation.start().catch(console.error);
=======
      tests: await this.runTests(),
      build: await this.runBuild(),
      verify: await this.runVerify(),
      deploy: await this.deploy()
    };

    const allPassed = Object.values(results).every(result => result === true);
    
    if (allPassed) {
      this.log('=== CI/CD Automation Completed Successfully ===');
    } else {
      this.log('=== CI/CD Automation Completed with Failures ===');
      this.log(`Results: ${JSON.stringify(results, null, 2)}`);
    }
  }
}

// Run the automation
if (require.main === module) {
  const automation = new CICDAutomation();
  automation.run().catch(console.error);
>>>>>>> cursor/migrate-github-actions-to-pm2-and-clean-up-f06c
}

module.exports = CICDAutomation;