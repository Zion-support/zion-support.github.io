#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class MasterAutomationOrchestrator {
  constructor() {
    this.logFile = path.join(__dirname, '..', 'automation_logs', 'master-automation.log');
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
        cwd: '/workspace',
        stdio: 'pipe'
      });
      this.log(`Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`Error in ${description}: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runLinting() {
    this.log('Running linting checks...');
    const results = [];
    
    // ESLint
    results.push(await this.runCommand('npm run lint', 'ESLint check'));
    
    // TypeScript check
    results.push(await this.runCommand('npm run type-check', 'TypeScript check'));
    
    return results;
  }

  async runTesting() {
    this.log('Running test suite...');
    const results = [];
    
    // Smoke tests
    results.push(await this.runCommand('npm run test:smoke', 'Smoke tests'));
    
    // Unit tests
    results.push(await this.runCommand('npm run test:unit', 'Unit tests'));
    
    return results;
  }

  async runBuild() {
    this.log('Running build process...');
    return await this.runCommand('npm run build', 'Production build');
  }

  async runSecurityAudit() {
    this.log('Running security audit...');
    return await this.runCommand('npm audit', 'Security audit');
  }

  async runPerformanceCheck() {
    this.log('Running performance checks...');
    return await this.runCommand('npm run perf:monitor', 'Performance monitoring');
  }

  async runAllAutomations() {
    this.log('🚀 Starting Master Automation Orchestrator...');
    
    const results = {
      linting: await this.runLinting(),
      testing: await this.runTesting(),
      build: await this.runBuild(),
      security: await this.runSecurityAudit(),
      performance: await this.runPerformanceCheck()
    };

    // Generate summary report
    const summary = this.generateSummary(results);
    this.log(summary);

    // Save results to file
    const reportFile = path.join(__dirname, '..', 'automation_logs', 'automation-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(results, null, 2));

    this.log('✅ Master Automation Orchestrator completed!');
    return results;
  }

  generateSummary(results) {
    let summary = '\n📊 AUTOMATION SUMMARY\n';
    summary += '='.repeat(50) + '\n';
    
    Object.entries(results).forEach(([category, categoryResults]) => {
      summary += `\n${category.toUpperCase()}:\n`;
      if (Array.isArray(categoryResults)) {
        categoryResults.forEach((result, index) => {
          summary += `  ${index + 1}. ${result.success ? '✅' : '❌'} ${result.description || 'Task'}\n`;
        });
      } else {
        summary += `  ${categoryResults.success ? '✅' : '❌'} ${categoryResults.description || 'Task'}\n`;
      }
    });
    
    summary += '\n' + '='.repeat(50) + '\n';
    return summary;
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new MasterAutomationOrchestrator();
  const command = process.argv[2];

  switch (command) {
    case 'start':
    case 'run':
      orchestrator.runAllAutomations().catch(console.error);
      break;
    case 'status':
      console.log('Master Automation Orchestrator is ready');
      break;
    default:
      console.log('Usage: node master-orchestrator.cjs [start|run|status]');
  }
}

module.exports = MasterAutomationOrchestrator;