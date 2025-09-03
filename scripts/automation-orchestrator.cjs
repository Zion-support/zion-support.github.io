#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class AutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'automation-orchestrator-report.json');
    this.results = [];
  }

  log(message) {
    console.log(`[Automation Orchestrator] ${message}`);
  }

  async runAllAutomations() {
    this.log('🎯 Starting Comprehensive Automation Orchestration');

    try {
      // Run security fixes
      await this.runScript('scripts/security-fixer.cjs', 'Security Fixes');
      
      // Run performance optimizations
      await this.runScript('scripts/performance-optimizer-enhanced.cjs', 'Performance Optimizations');
      
      // Run code quality improvements
      await this.runScript('scripts/code-quality-improver.cjs', 'Code Quality Improvements');
      
      // Run existing automation scripts
      await this.runExistingScripts();
      
      // Generate final report
      await this.generateReport();
      
      this.log('✅ All automations completed successfully');
    } catch (error) {
      this.log(`❌ Automation orchestration failed: ${error.message}`);
    }
  }

  async runScript(scriptPath, description) {
    this.log(`🚀 Running: ${description}`);
    
    try {
      const result = execSync(`node ${scriptPath}`, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 300000 // 5 minutes timeout
      });
      
      this.results.push({
        script: scriptPath,
        description: description,
        status: 'success',
        output: result
      });
      
      this.log(`✅ Completed: ${description}`);
    } catch (error) {
      this.results.push({
        script: scriptPath,
        description: description,
        status: 'failed',
        error: error.message
      });
      
      this.log(`❌ Failed: ${description} - ${error.message}`);
    }
  }

  async runExistingScripts() {
    this.log('🔧 Running existing automation scripts');
    
    const scriptsToRun = [
      'scripts/health-check.cjs',
      'scripts/generate-sitemap.js',
      'scripts/seo-optimizer.js',
      'scripts/clean-console-logs.js'
    ];
    
    for (const script of scriptsToRun) {
      const scriptPath = path.join(this.projectRoot, script);
      if (fs.existsSync(scriptPath)) {
        await this.runScript(script, `Existing Script: ${path.basename(script)}`);
      }
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      results: this.results,
      summary: {
        total: this.results.length,
        successful: this.results.filter(r => r.status === 'success').length,
        failed: this.results.filter(r => r.status === 'failed').length
      }
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Automation orchestrator report generated: ${this.reportFile}`);
  }
}

// Run the automation orchestrator
const orchestrator = new AutomationOrchestrator();
orchestrator.runAllAutomations().catch(console.error);