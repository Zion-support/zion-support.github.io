#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = Date.now();
    this.results = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        ...options,
      });
      this.log(`✅ ${description} completed successfully`);
      this.results.push({ command, description, success: true, output: result });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      this.results.push({ command, description, success: false, error: error.message });
      this.errors.push({ command, description, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async runScript(scriptPath, description) {
    this.log(`Running script: ${description}`);
    try {
      if (fs.existsSync(scriptPath)) {
        const result = execSync(`node ${scriptPath}`, {
          cwd: this.projectRoot,
          encoding: 'utf8',
          timeout: 120000
        });
        this.log(`✅ ${description} completed successfully`);
        this.results.push({ script: scriptPath, success: true, description });
        return { success: true, output: result };
      } else {
        this.log(`⚠️ Script not found: ${scriptPath}`);
        this.results.push({ script: scriptPath, success: false, description, error: 'File not found' });
        return { success: false, error: 'File not found' };
      }
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      this.results.push({ script: scriptPath, success: false, description, error: error.message });
      this.errors.push({ script: scriptPath, description, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async runAllAutomations() {
    this.log('🎯 Starting Master Automation Orchestrator');
    
    // Ensure reports directory exists
    if (!fs.existsSync(path.join(this.projectRoot, 'automation-reports'))) {
      fs.mkdirSync(path.join(this.projectRoot, 'automation-reports'), { recursive: true });
    }

    const automationScripts = [
      // Core automation scripts
      { path: 'comprehensive-automation-suite.cjs', desc: 'Comprehensive Automation Suite' },
      { path: 'advanced-app-enhancement-suite.cjs', desc: 'Advanced App Enhancement Suite' },
      { path: 'final-automation-orchestrator.cjs', desc: 'Final Automation Orchestrator' },
      
      // Enhancement scripts
      { path: 'scripts/performance-optimizer.cjs', desc: 'Performance Optimizer' },
      { path: 'scripts/security-enhancer.cjs', desc: 'Security Enhancer' },
      { path: 'scripts/seo-optimizer.cjs', desc: 'SEO Optimizer' },
      { path: 'scripts/accessibility-enhancer.cjs', desc: 'Accessibility Enhancer' },
    ];

    const npmCommands = [
      { cmd: 'npm install', desc: 'Install Dependencies' },
      { cmd: 'npm run build', desc: 'Build Application' },
      { cmd: 'npm run lint:fix', desc: 'Fix Linting Issues' },
      { cmd: 'npm run type-check', desc: 'Type Check' },
    ];

    // Run scripts
    for (const script of automationScripts) {
      await this.runScript(script.path, script.desc);
    }

    // Run npm commands
    for (const cmd of npmCommands) {
      await this.runCommand(cmd.cmd, cmd.desc);
    }

    // Generate final report
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    const successful = this.results.filter(r => r.success).length;
    const failed = this.results.filter(r => !r.success).length;

    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      summary: {
        total: this.results.length,
        successful,
        failed,
        successRate: Math.round((successful / this.results.length) * 100),
      },
      results: this.results,
      errors: this.errors
    };

    fs.writeFileSync(
      path.join(this.projectRoot, 'automation-reports', 'master-automation-report.json'),
      JSON.stringify(report, null, 2)
    );

    this.log('🎉 Master Automation Orchestrator Completed');
    this.log(`📊 Summary: ${successful}/${this.results.length} tasks successful (${report.summary.successRate}%)`);
    
    if (failed > 0) {
      this.log(`⚠️ ${failed} tasks failed`);
      this.results.filter(r => !r.success).forEach(result => {
        this.log(`   - ${result.description}: ${result.error}`);
      });
    }

    return report;
  }
}

// Run the master automation orchestrator
if (require.main === module) {
  const orchestrator = new MasterAutomationOrchestrator();
  orchestrator.runAllAutomations().catch(error => {
    console.error('❌ Error:', error);
    process.exit(1);
  });
}

module.exports = MasterAutomationOrchestrator;