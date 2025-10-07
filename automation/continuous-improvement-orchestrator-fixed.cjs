#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class ContinuousImprovementOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async runCommand(command, description = '') {
    try {
      this.log(`Running: ${description || command}`);
      const { stdout, stderr } = await execAsync(command, {
        cwd: this.projectRoot,
        timeout: 60000,
      });

      this.log(`✅ ${description || command} completed successfully`, 'SUCCESS');
      return { success: true, stdout, stderr };
    } catch (error) {
      this.log(`❌ ${description || command} failed: ${error.message}`, 'ERROR');
      return { 
        success: false, 
        stdout: error.stdout || '', 
        stderr: error.stderr || error.message 
      };
    }
  }

  async runAutomatedTests() {
    this.log('🧪 Running automated tests...');
    
    const testCommands = [
      { command: 'npm run test:smoke', description: 'Smoke tests' },
      { command: 'npm run test', description: 'Unit tests' }
    ];

    const results = [];
    for (const test of testCommands) {
      const result = await this.runCommand(test.command, test.description);
      results.push({ ...test, result });
    }

    return {
      name: 'Automated Testing',
      status: results.some(r => r.result.success) ? 'completed' : 'failed',
      details: `${results.filter(r => r.result.success).length}/${results.length} test suites passed`,
      results
    };
  }

  async runCodeAnalysis() {
    this.log('🔍 Running code analysis...');
    
    const analysisCommands = [
      { command: 'npm run lint', description: 'Linting analysis' },
      { command: 'npm run type-check', description: 'Type checking' }
    ];

    const results = [];
    for (const analysis of analysisCommands) {
      const result = await this.runCommand(analysis.command, analysis.description);
      results.push({ ...analysis, result });
    }

    return {
      name: 'Code Analysis',
      status: results.some(r => r.result.success) ? 'completed' : 'failed',
      details: `${results.filter(r => r.result.success).length}/${results.length} analysis checks passed`,
      results
    };
  }

  async runPerformanceMonitoring() {
    this.log('📊 Running performance monitoring...');
    
    const perfCommands = [
      { command: 'npm run build', description: 'Build performance check' }
    ];

    const results = [];
    for (const perf of perfCommands) {
      const result = await this.runCommand(perf.command, perf.description);
      results.push({ ...perf, result });
    }

    return {
      name: 'Performance Monitoring',
      status: results.every(r => r.result.success) ? 'completed' : 'failed',
      details: `${results.filter(r => r.result.success).length}/${results.length} performance checks passed`,
      results
    };
  }

  async runSecurityScan() {
    this.log('🔒 Running security scan...');
    
    const securityCommands = [
      { command: 'npm audit', description: 'Security audit' }
    ];

    const results = [];
    for (const security of securityCommands) {
      const result = await this.runCommand(security.command, security.description);
      results.push({ ...security, result });
    }

    return {
      name: 'Security Scan',
      status: results.some(r => r.result.success) ? 'completed' : 'failed',
      details: `${results.filter(r => r.result.success).length}/${results.length} security checks passed`,
      results
    };
  }

  async generateImprovementReport() {
    this.log('📋 Generating improvement report...');
    
    const checks = [
      await this.runAutomatedTests(),
      await this.runCodeAnalysis(),
      await this.runPerformanceMonitoring(),
      await this.runSecurityScan()
    ];

    const completedCount = checks.filter(check => check.status === 'completed').length;
    const failedCount = checks.filter(check => check.status === 'failed').length;

    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: checks.length,
        completed: completedCount,
        failed: failedCount
      },
      checks,
      recommendations: this.generateRecommendations(checks)
    };

    const reportFile = path.join(this.reportsDir, `continuous-improvement-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`📊 Continuous improvement report generated. ${completedCount} completed, ${failedCount} failed`, 'SUCCESS');
    this.log(`📄 Report saved to: ${reportFile}`, 'SUCCESS');
    
    return report;
  }

  generateRecommendations(checks) {
    const recommendations = [];

    const failedChecks = checks.filter(check => check.status === 'failed');
    
    if (failedChecks.length > 0) {
      recommendations.push({
        priority: 'high',
        category: 'Critical Issues',
        description: `${failedChecks.length} critical checks failed and need immediate attention`,
        actions: failedChecks.map(check => `Fix ${check.name.toLowerCase()}`)
      });
    }

    const testChecks = checks.filter(check => check.name.includes('Test'));
    if (testChecks.some(check => check.status === 'failed')) {
      recommendations.push({
        priority: 'medium',
        category: 'Testing',
        description: 'Improve test coverage and fix failing tests',
        actions: ['Add more unit tests', 'Fix failing test cases', 'Improve test reliability']
      });
    }

    const securityChecks = checks.filter(check => check.name.includes('Security'));
    if (securityChecks.some(check => check.status === 'failed')) {
      recommendations.push({
        priority: 'high',
        category: 'Security',
        description: 'Address security vulnerabilities',
        actions: ['Update dependencies', 'Fix security issues', 'Implement security best practices']
      });
    }

    return recommendations;
  }

  async start() {
    this.log('🔄 Starting continuous improvement orchestrator...');
    
    try {
      const report = await this.generateImprovementReport();
      this.log('🏁 Continuous improvement orchestrator completed', 'SUCCESS');
      return report;
    } catch (error) {
      this.log(`❌ Continuous improvement orchestrator failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new ContinuousImprovementOrchestrator();
  orchestrator.start().catch(error => {
    console.error('Continuous improvement orchestrator failed:', error);
    process.exit(1);
  });
}

module.exports = ContinuousImprovementOrchestrator;