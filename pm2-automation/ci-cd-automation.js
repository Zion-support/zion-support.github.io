#!/usr/bin/env node

/**
 * PM2 CI/CD Automation Script
 * Replaces GitHub Actions CI/CD pipeline
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class CICDAutomation {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'ci-cd.log');
    this.reportFile = path.join(__dirname, 'reports', 'ci-cd-report.json');
    this.ensureDirectories();
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

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, description) {
    try {
      this.log(`Starting: ${description}`);
      const output = execSync(command, { 
        encoding: 'utf8', 
        cwd: process.cwd(),
        stdio: 'pipe'
      });
      this.log(`✅ Success: ${description}`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ Error: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runTests() {
    this.log('Running test suite...');
    const result = await this.runCommand('npm test', 'Test execution');
    return result;
  }

  async runLinting() {
    this.log('Running ESLint...');
    const result = await this.runCommand('npm run lint', 'Linting');
    return result;
  }

  async runTypeCheck() {
    this.log('Running TypeScript type check...');
    const result = await this.runCommand('npm run type-check', 'Type checking');
    return result;
  }

  async buildProject() {
    this.log('Building project...');
    const result = await this.runCommand('npm run build', 'Build');
    return result;
  }

  async generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      results: results,
      summary: {
        total: Object.keys(results).length,
        passed: Object.values(results).filter(r => r.success).length,
        failed: Object.values(results).filter(r => !r.success).length
      }
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${this.reportFile}`);
    return report;
  }

  async runPipeline() {
    this.log('Starting CI/CD Pipeline...');
    
    const results = {
      linting: await this.runLinting(),
      typeCheck: await this.runTypeCheck(),
      tests: await this.runTests(),
      build: await this.buildProject()
    };

    const report = await this.generateReport(results);
    
    const allPassed = Object.values(results).every(r => r.success);
    if (allPassed) {
      this.log('🎉 All pipeline steps completed successfully!');
    } else {
      this.log('⚠️ Some pipeline steps failed. Check the report for details.');
    }

    return { success: allPassed, report };
  }
}

// Run the pipeline if this script is executed directly
if (require.main === module) {
  const automation = new CICDAutomation();
  automation.runPipeline()
    .then(result => {
      process.exit(result.success ? 0 : 1);
    })
    .catch(error => {
      console.error('Pipeline failed:', error);
      process.exit(1);
    });
}

module.exports = CICDAutomation;