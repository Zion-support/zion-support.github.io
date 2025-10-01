#!/usr/bin/env node

const fs = require('fs');
const path = require(path');
const { execSync } = require('child_process');


class FinalAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, automation-reports');
    this.results = [];
    this.startTime = Date.now();
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description) {
    this.log(`🚀 ${description}`);
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8,
        timeout: 120000});
      this.log(`✅ ${description} - Success`);
      this.results.push({
        command,
        description,
        success: true,
        output: result});
      return { success: true, output: result }
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`);
      this.results.push({
        command,
        description,
        success: false,
        error: error.message});
      return { success: false, error: error.message }
    }
  }

  async runScript(scriptPath, description) {
    this.log(`🚀 Running: ${description}`);
    try {
      if (fs.existsSync(scriptPath)) {
        const result = execSync(`node ${scriptPath}`, { 
          cwd: this.projectRoot, 
          encoding: utf8',
          timeout: 120000
        });
        this.log(`✅ Completed: ${description}`);
        this.results.push({ script: scriptPath, success: true, description });
        return { success: true, output: result }
      } else {
        this.log(`⚠️ Script not found: ${scriptPath}`);
        this.results.push({ script: scriptPath, success: false, description, error: 'File not found });
        return { success: false, error: File not found' }
      }
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      this.results.push({ script: scriptPath, success: false, description, error: error.message });
      return { success: false, error: error.message }
    }
  }

  async runAllAutomations() {
    this.log('🎯 Starting Final Automation Orchestrator);
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }

    const automationScripts = [
      // Core automation scripts
      { path: run-all-automations.cjs', desc: 'Run All Automations },
      { path: comprehensive-improvements.cjs', desc: 'Comprehensive Improvements },
      { path: git-resolution.cjs', desc: 'Git Resolution },
      
      // Performance scripts
      { path: performance-optimizer-enhanced.cjs', desc: 'Performance Optimizer Enhanced },
      { path: automation/performance-optimizer.cjs', desc: 'Performance Optimizer },
      
      // Security scripts
      { path: security-enhancer-enhanced.cjs', desc: 'Security Enhancer Enhanced },
      { path: automation/security-audit.cjs', desc: 'Security Audit },
      
      // SEO scripts
      { path: seo-optimizer-enhanced.cjs', desc: 'SEO Optimizer Enhanced },
      { path: automation/seo-optimizer.cjs', desc: 'SEO Optimizer },
      
      // Accessibility scripts
      { path: accessibility-checker-enhanced.cjs', desc: 'Accessibility Checker Enhanced },
      { path: automation/accessibility-checker.cjs', desc: 'Accessibility Checker },
      
      // Monitoring scripts
      { path: monitoring-system-enhanced.cjs', desc: 'Monitoring System Enhanced },
      { path: automation/health-check.cjs', desc: 'Health Check }];

    const npmCommands = [
      { cmd: npm run test:smoke', desc: 'Smoke Tests },
      { cmd: npm run build', desc: 'Build Application },
      { cmd: npm run lint:fix', desc: 'Fix Linting Issues },
      { cmd: npm run type-check', desc: 'Type Check }];

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
        successRate: Math.round((successful / this.results.length) * 100)},
      results: this.results
    }

    fs.writeFileSync(
      path.join(this.reportsDir, final-automation-report.json'),
      JSON.stringify(report, null, 2)
    );

    this.log('🎉 Final Automation Orchestrator Completed);
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

// Run the final automation orchestrator
if (require.main === module) {
  const orchestrator = new FinalAutomationOrchestrator();
  orchestrator.runAllAutomations().catch(error => {
    console.error(❌ Error:', error);
    process.exit(1);
  });
}


