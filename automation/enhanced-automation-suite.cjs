#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Enhanced Automation Suite Starting...');

class EnhancedAutomationSuite {
  constructor() {
    this.logFile = '/workspace/automation/logs/enhanced-automation.log';
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
      this.log(`Running: ${description}`);
      const result = execSync(command, {
        cwd: '/workspace',
        encoding: 'utf8',
        stdio: 'pipe',
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runComprehensiveTests() {
    this.log('🧪 Running comprehensive test suite...');

    const tests = [
      { cmd: 'npm run test:smoke', desc: 'Smoke Tests' },
      { cmd: 'npm run lint:check', desc: 'Lint Check' },
      { cmd: 'npm run type-check', desc: 'Type Check' },
      { cmd: 'npm run build', desc: 'Build Test' },
    ];

    const results = [];
    for (const test of tests) {
      const result = await this.runCommand(test.cmd, test.desc);
      results.push({ ...test, ...result });
    }

    return results;
  }

  async runPerformanceOptimization() {
    this.log('⚡ Running performance optimization...');

    const optimizations = [
      { cmd: 'npm run build:analyze', desc: 'Bundle Analysis' },
      { cmd: 'npm run perf:audit', desc: 'Performance Audit' },
    ];

    const results = [];
    for (const opt of optimizations) {
      const result = await this.runCommand(opt.cmd, opt.desc);
      results.push({ ...opt, ...result });
    }

    return results;
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');

    const securityChecks = [
      { cmd: 'npm audit --audit-level moderate', desc: 'Security Audit' },
      { cmd: 'npm run security:scan', desc: 'Security Scan' },
    ];

    const results = [];
    for (const check of securityChecks) {
      const result = await this.runCommand(check.cmd, check.desc);
      results.push({ ...check, ...result });
    }

    return results;
  }

  async runCodeQualityChecks() {
    this.log('📊 Running code quality checks...');

    const qualityChecks = [
      { cmd: 'npm run lint:fix', desc: 'Lint Fix' },
      { cmd: 'npm run format', desc: 'Code Formatting' },
    ];

    const results = [];
    for (const check of qualityChecks) {
      const result = await this.runCommand(check.cmd, check.desc);
      results.push({ ...check, ...result });
    }

    return results;
  }

  async generateReport(results) {
    this.log('📋 Generating comprehensive report...');

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalTests: results.length,
        passed: results.filter(r => r.success).length,
        failed: results.filter(r => !r.success).length,
      },
      details: results,
    };

    const reportFile =
      '/workspace/automation/logs/enhanced-automation-report.json';
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📊 Report generated: ${reportFile}`);
    return report;
  }

  async run() {
    try {
      this.log('🚀 Starting Enhanced Automation Suite');

      // Run all automation tasks
      const testResults = await this.runComprehensiveTests();
      const perfResults = await this.runPerformanceOptimization();
      const securityResults = await this.runSecurityAudit();
      const qualityResults = await this.runCodeQualityChecks();

      // Combine all results
      const allResults = [
        ...testResults,
        ...perfResults,
        ...securityResults,
        ...qualityResults,
      ];

      // Generate report
      const report = await this.generateReport(allResults);

      this.log('✅ Enhanced Automation Suite completed successfully');
      return report;
    } catch (error) {
      this.log(`❌ Enhanced Automation Suite failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the automation suite
if (require.main === module) {
  const suite = new EnhancedAutomationSuite();
  suite
    .run()
    .then(report => {
      console.log('📊 Final Report:', JSON.stringify(report.summary, null, 2));
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Automation suite failed:', error.message);
      process.exit(1);
    });
}

module.exports = EnhancedAutomationSuite;
