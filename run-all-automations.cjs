#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class AutomationRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.results = [];
    this.startTime = Date.now();
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

  async runCommand(command, description) {
    this.log(`🔧 ${description}`);
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        timeout: 60000
      });
      this.log(`✅ ${description} - Success`);
      this.results.push({ command, success: true, description });
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`);
      this.results.push({ command, success: false, description, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async runAllAutomations() {
    this.log('🚀 Starting All Automations Runner');

    const automationScripts = [
      { path: 'comprehensive-automation-runner.cjs', description: 'Comprehensive Automation Runner' },
      { path: 'comprehensive-improvements.cjs', description: 'Comprehensive Improvements' },
      { path: 'comprehensive-syntax-fixer.cjs', description: 'Comprehensive Syntax Fixer' },
      { path: 'comprehensive-build-fix.cjs', description: 'Comprehensive Build Fix' },
      { path: 'comprehensive-test-runner.cjs', description: 'Comprehensive Test Runner' },
      { path: 'performance-optimizer.cjs', description: 'Performance Optimizer' },
      { path: 'security-audit-enhanced.cjs', description: 'Security Audit Enhanced' },
      { path: 'seo-optimizer-enhanced.cjs', description: 'SEO Optimizer Enhanced' }
    ];

    // Run automation scripts
    for (const script of automationScripts) {
      await this.runScript(script.path, script.description);
    }

    // Run npm commands
    const npmCommands = [
      { command: 'npm run lint:fix', description: 'ESLint Auto-fix' },
      { command: 'npm run format', description: 'Prettier Formatting' },
      { command: 'npm run type-check', description: 'TypeScript Check' },
      { command: 'npm run build', description: 'Build Application' },
      { command: 'npm test', description: 'Run Tests' }
    ];

    for (const cmd of npmCommands) {
      await this.runCommand(cmd.command, cmd.description);
    }

    return this.results;
  }

  generateReport() {
    const duration = Date.now() - this.startTime;
    const successful = this.results.filter(r => r.success).length;
    const failed = this.results.filter(r => !r.success).length;

    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      summary: {
        total: this.results.length,
        successful,
        failed,
        successRate: `${((successful / this.results.length) * 100).toFixed(2)}%`
      },
      results: this.results
    };

    const reportPath = path.join(this.projectRoot, 'automation-results.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report saved to: ${reportPath}`);
    this.log(`📈 Success Rate: ${report.summary.successRate}`);
    
    return report;
  }

  async run() {
    try {
      await this.runAllAutomations();
      const report = this.generateReport();
      
      this.log('🎉 All Automations Completed');
      console.log('\n📋 Final Report:');
      console.log(JSON.stringify(report, null, 2));
      
      return report;
    } catch (error) {
      this.log(`💥 Automation Runner failed: ${error.message}`);
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const runner = new AutomationRunner();
  runner.run().catch(console.error);
}

module.exports = AutomationRunner;