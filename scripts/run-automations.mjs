#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

class AutomationRunner {
  constructor() {
    this.workspaceRoot = '/workspace';
    this.logFile = path.join(this.workspaceRoot, 'automation_logs', 'automation-runner.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
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
      const result = execSync(command, { 
        encoding: 'utf8', 
        cwd: this.workspaceRoot,
        stdio: 'pipe'
      });
      this.log(`Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`Error in ${description}: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runAllAutomations() {
    this.log('🚀 Starting comprehensive automation suite...');
    
    const results = {
      timestamp: new Date().toISOString(),
      automations: {},
      summary: {
        total: 0,
        passed: 0,
        failed: 0
      }
    };

    // Run linting and type checking
    results.automations.linting = await this.runCommand('npm run lint:check', 'Linting and Type Checking');
    
    // Run build
    results.automations.build = await this.runCommand('npm run build', 'Production Build');
    
    // Run tests
    results.automations.tests = await this.runCommand('npm run test:smoke', 'Smoke Tests');
    
    // Run security audit
    results.automations.security = await this.runCommand('npm audit', 'Security Audit');
    
    // Run performance check
    results.automations.performance = await this.runCommand('npm run perf:monitor', 'Performance Monitoring');
    
    // Run AI-powered analysis
    results.automations.aiQuality = await this.runCommand('node scripts/automation/ai-code-quality-analyzer.cjs', 'AI Code Quality Analysis');
    results.automations.aiSecurity = await this.runCommand('node scripts/automation/ai-security-intelligence.cjs', 'AI Security Intelligence');
    results.automations.aiPerformance = await this.runCommand('node scripts/automation/ai-performance-predictor.cjs', 'AI Performance Prediction');
    results.automations.aiTests = await this.runCommand('node scripts/automation/intelligent-test-orchestrator.cjs', 'Intelligent Test Orchestration');
    
    // Calculate summary
    Object.values(results.automations).forEach(result => {
      results.summary.total++;
      if (result.success) {
        results.summary.passed++;
      } else {
        results.summary.failed++;
      }
    });

    // Generate summary report
    const summary = this.generateSummary(results);
    this.log(summary);

    // Save results
    const reportFile = path.join(this.workspaceRoot, 'automation_logs', 'comprehensive-automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));

    this.log('✅ Comprehensive automation suite completed!');
    return results;
  }

  generateSummary(results) {
    let summary = '\n📊 COMPREHENSIVE AUTOMATION SUMMARY\n';
    summary += '='.repeat(60) + '\n';
    summary += `Total Automations: ${results.summary.total}\n`;
    summary += `Passed: ${results.summary.passed} ✅\n`;
    summary += `Failed: ${results.summary.failed} ❌\n`;
    summary += '='.repeat(60) + '\n';
    
    Object.entries(results.automations).forEach(([name, result]) => {
      summary += `\n${name.toUpperCase()}:\n`;
      summary += `  Status: ${result.success ? '✅ PASSED' : '❌ FAILED'}\n`;
      if (result.error) {
        summary += `  Error: ${result.error}\n`;
      }
    });
    
    summary += '\n' + '='.repeat(60) + '\n';
    return summary;
  }
}

// Run automations
const runner = new AutomationRunner();
runner.runAllAutomations().catch(console.error);