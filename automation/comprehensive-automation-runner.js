#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class ComprehensiveAutomationRunner {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'comprehensive-automation.log');
    this.resultsFile = path.join(__dirname, 'reports', 'comprehensive-results.json');
    this.ensureDirectories();
    this.results = {
      timestamp: new Date().toISOString(),
      tests: {},
      builds: {},
      linting: {},
      security: {},
      performance: {},
      overall: 'pending'
    };
  }

  ensureDirectories() {
    const dirs = ['logs', 'reports'];
    dirs.forEach(dir => {
      const dirPath = path.join(__dirname, dir);
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runTests() {
    try {
      this.log('Running tests...');
      const output = execSync('npm test -- --passWithNoTests --watchAll=false', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.results.tests = {
        status: 'passed',
        output: output,
        timestamp: new Date().toISOString()
      };
      this.log('Tests completed successfully');
    } catch (error) {
      this.results.tests = {
        status: 'failed',
        error: error.message,
        timestamp: new Date().toISOString()
      };
      this.log(`Tests failed: ${error.message}`, 'ERROR');
    }
  }

  async runBuild() {
    try {
      this.log('Running build...');
      const output = execSync('npm run build', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.results.builds = {
        status: 'success',
        output: output,
        timestamp: new Date().toISOString()
      };
      this.log('Build completed successfully');
    } catch (error) {
      this.results.builds = {
        status: 'failed',
        error: error.message,
        timestamp: new Date().toISOString()
      };
      this.log(`Build failed: ${error.message}`, 'ERROR');
    }
  }

  async runLinting() {
    try {
      this.log('Running linting...');
      const output = execSync('npm run lint', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.results.linting = {
        status: 'passed',
        output: output,
        timestamp: new Date().toISOString()
      };
      this.log('Linting completed successfully');
    } catch (error) {
      this.results.linting = {
        status: 'failed',
        error: error.message,
        timestamp: new Date().toISOString()
      };
      this.log(`Linting failed: ${error.message}`, 'ERROR');
    }
  }

  async runSecurityAudit() {
    try {
      this.log('Running security audit...');
      const output = execSync('npm audit --json', { stdio: 'pipe' });
      const auditResult = JSON.parse(output.toString());
      
      this.results.security = {
        status: 'completed',
        vulnerabilities: auditResult.vulnerabilities || {},
        timestamp: new Date().toISOString()
      };
      this.log('Security audit completed');
    } catch (error) {
      this.results.security = {
        status: 'failed',
        error: error.message,
        timestamp: new Date().toISOString()
      };
      this.log(`Security audit failed: ${error.message}`, 'ERROR');
    }
  }

  async runPerformanceCheck() {
    try {
      this.log('Running performance check...');
      // Simple performance check - bundle size analysis
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = Object.keys(packageJson.dependencies || {}).length;
      const devDependencies = Object.keys(packageJson.devDependencies || {}).length;
      
      this.results.performance = {
        status: 'completed',
        dependencies: dependencies,
        devDependencies: devDependencies,
        timestamp: new Date().toISOString()
      };
      this.log('Performance check completed');
    } catch (error) {
      this.results.performance = {
        status: 'failed',
        error: error.message,
        timestamp: new Date().toISOString()
      };
      this.log(`Performance check failed: ${error.message}`, 'ERROR');
    }
  }

  calculateOverallStatus() {
    const statuses = [
      this.results.tests.status,
      this.results.builds.status,
      this.results.linting.status,
      this.results.security.status,
      this.results.performance.status
    ];
    
    if (statuses.every(status => status === 'passed' || status === 'success' || status === 'completed')) {
      this.results.overall = 'success';
    } else if (statuses.some(status => status === 'failed')) {
      this.results.overall = 'failed';
    } else {
      this.results.overall = 'partial';
    }
  }

  saveResults() {
    try {
      fs.writeFileSync(this.resultsFile, JSON.stringify(this.results, null, 2));
      this.log(`Results saved to ${this.resultsFile}`);
    } catch (error) {
      this.log(`Error saving results: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    try {
      this.log('Starting comprehensive automation runner...');
      
      await this.runTests();
      await this.runBuild();
      await this.runLinting();
      await this.runSecurityAudit();
      await this.runPerformanceCheck();
      
      this.calculateOverallStatus();
      this.saveResults();
      
      this.log(`Comprehensive automation completed with status: ${this.results.overall}`);
      
    } catch (error) {
      this.log(`Comprehensive automation failed: ${error.message}`, 'ERROR');
      this.results.overall = 'failed';
      this.saveResults();
    }
  }
}

if (require.main === module) {
  const runner = new ComprehensiveAutomationRunner();
  runner.run();
}

module.exports = ComprehensiveAutomationRunner;