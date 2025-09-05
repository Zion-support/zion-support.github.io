#!/usr/bin/env node

/**
 * PM2 Continuous Automation Script
 * Replaces GitHub Actions continuous automation workflow
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ContinuousAutomation {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'continuous-automation.log');
    this.reportFile = path.join(__dirname, 'reports', 'continuous-automation-report.json');
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

  async runCodeQualityChecks() {
    this.log('Running code quality checks...');
    const results = {
      linting: await this.runCommand('npm run lint', 'ESLint'),
      typeCheck: await this.runCommand('npm run type-check', 'TypeScript check'),
      formatCheck: await this.runCommand('npm run format:check', 'Prettier check')
    };
    return results;
  }

  async runSecurityAudit() {
    this.log('Running security audit...');
    const result = await this.runCommand('npm audit', 'Security audit');
    return result;
  }

  async runPerformanceTests() {
    this.log('Running performance tests...');
    const result = await this.runCommand('npm run test:performance', 'Performance tests');
    return result;
  }

  async runAccessibilityTests() {
    this.log('Running accessibility tests...');
    const result = await this.runCommand('npm run test:a11y', 'Accessibility tests');
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

  async runContinuousPipeline() {
    this.log('Starting Continuous Automation Pipeline...');
    
    const results = {
      codeQuality: await this.runCodeQualityChecks(),
      security: await this.runSecurityAudit(),
      performance: await this.runPerformanceTests(),
      accessibility: await this.runAccessibilityTests()
    };

    const report = await this.generateReport(results);
    
    const allPassed = Object.values(results).every(r => r.success);
    if (allPassed) {
      this.log('🎉 All continuous automation steps completed successfully!');
    } else {
      this.log('⚠️ Some continuous automation steps failed. Check the report for details.');
    }

    return { success: allPassed, report };
  }
}

// Run the pipeline if this script is executed directly
if (require.main === module) {
  const automation = new ContinuousAutomation();
  automation.runContinuousPipeline()
    .then(result => {
      process.exit(result.success ? 0 : 1);
    })
    .catch(error => {
      console.error('Continuous automation failed:', error);
      process.exit(1);
    });
}

module.exports = ContinuousAutomation;