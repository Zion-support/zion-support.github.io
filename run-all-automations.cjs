#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutomationRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.results = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runScript(scriptPath, description) {
    this.log(`🚀 Running: ${description}`);
    try {
      if (fs.existsSync(scriptPath)) {
        const result = execSync(`node ${scriptPath}`, { 
          cwd: this.projectRoot, 
          encoding: 'utf8',
          timeout: 120000
        });
        this.log(`✅ Completed: ${description}`);
        this.results.push({ script: scriptPath, success: true, description });
        return { success: true, output: result };
      } else {
        this.log(`⚠️ Script not found: ${scriptPath}`);
        this.results.push({ script: scriptPath, success: false, description, error: 'File not found' });
        return { success: false, error: 'File not found' };
      }
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      this.results.push({ script: scriptPath, success: false, description, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async runAllAutomations() {
    this.log('🎯 Starting Comprehensive Automation Suite');
    
    const automationScripts = [
      // Main orchestrators
      { path: 'final-automation-orchestrator.cjs', desc: 'Final Automation Orchestrator' },
      { path: 'final-automation-suite.cjs', desc: 'Final Automation Suite' },
      { path: 'automation/master-orchestrator.cjs', desc: 'Master Automation Orchestrator' },
      { path: 'automation/master-orchestrator.cjs', desc: 'Master Orchestrator' },
      
      // Syntax and code fixes
      { path: 'automation/typescript-fixer.cjs', desc: 'TypeScript Fixer' },
      { path: 'automation/final-typescript-fixer.cjs', desc: 'Final TypeScript Fixer' },
      { path: 'scripts/syntax-fixer.cjs', desc: 'Syntax Fixer' },
      { path: 'scripts/ultimate-syntax-fixer.cjs', desc: 'Ultimate Syntax Fixer' },
      { path: 'scripts/robust-syntax-fixer.cjs', desc: 'Robust Syntax Fixer' },
      
      // Performance optimization
      { path: 'automation/performance-optimizer.cjs', desc: 'Performance Optimizer' },
      { path: 'automation/performance-monitor.cjs', desc: 'Performance Monitor' },
      { path: 'scripts/performance-optimizer.cjs', desc: 'Performance Optimizer Script' },
      { path: 'scripts/performance-optimizer-enhanced.cjs', desc: 'Enhanced Performance Optimizer' },
      
      // Security
      { path: 'automation/security-audit.cjs', desc: 'Security Audit' },
      { path: 'automation/security-scanner.cjs', desc: 'Security Scanner' },
      { path: 'scripts/security-auditor.cjs', desc: 'Security Auditor' },
      { path: 'scripts/security-enhancer.cjs', desc: 'Security Enhancer' },
      
      // Code quality
      { path: 'automation/code-quality-monitor.cjs', desc: 'Code Quality Monitor' },
      { path: 'automation/linting-automation.js', desc: 'Linting Automation' },
      { path: 'scripts/simple-code-quality.cjs', desc: 'Simple Code Quality' },
      
      // SEO and accessibility
      { path: 'automation/seo-optimizer.cjs', desc: 'SEO Optimizer' },
      { path: 'automation/accessibility-checker.cjs', desc: 'Accessibility Checker' },
      
      // Health and monitoring
      { path: 'automation/health-check.cjs', desc: 'Health Check' },
      { path: 'automation/build-monitor.cjs', desc: 'Build Monitor' },
      
      // Additional scripts
      { path: 'scripts/comprehensive-app-improver.cjs', desc: 'Comprehensive App Improver' },
      { path: 'scripts/simple-app-improvements.cjs', desc: 'Simple App Improvements' },
      { path: 'scripts/ultimate-automation-orchestrator.cjs', desc: 'Ultimate Automation Orchestrator' }
    ];

    for (const script of automationScripts) {
      await this.runScript(script.path, script.desc);
    }

    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalScripts: automationScripts.length,
      successfulScripts: this.results.filter(r => r.success).length,
      failedScripts: this.results.filter(r => !r.success).length,
      results: this.results
    };

    fs.writeFileSync(
      path.join(this.projectRoot, 'automation-results.json'),
      JSON.stringify(report, null, 2)
    );

    this.log('🎉 Automation Suite Completed');
    this.log(`📊 Summary: ${report.successfulScripts}/${report.totalScripts} scripts successful`);
    
    if (report.failedScripts > 0) {
      this.log(`⚠️ ${report.failedScripts} scripts failed`);
      this.results.filter(r => !r.success).forEach(result => {
        this.log(`   - ${result.description}: ${result.error}`);
      });
    }

    return report;
  }
}

// Run the automation suite
const runner = new AutomationRunner();
runner.runAllAutomations().catch(console.error);