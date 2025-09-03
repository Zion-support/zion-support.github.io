#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MasterAutomationOrchestrator {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logFile = path.join(this.reportsDir, 'master-automation.log');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runAutomationScript(scriptPath, scriptName) {
    try {
      this.log(`Running ${scriptName}...`);
      if (fs.existsSync(scriptPath)) {
        execSync(`node "${scriptPath}"`, { 
          encoding: 'utf8',
          stdio: 'pipe',
          timeout: 30000
        });
        this.log(`✓ ${scriptName} completed successfully`);
        return true;
      } else {
        this.log(`✗ ${scriptName} not found at ${scriptPath}`);
        return false;
      }
    } catch (error) {
      this.log(`✗ ${scriptName} failed: ${error.message}`);
      return false;
    }
  }

  async runAllAutomations() {
    this.log('Starting master automation orchestrator...');
    
    const automations = [
      { path: path.join(this.projectRoot, 'working-automation-suite.cjs'), name: 'Working Automation Suite' },
      { path: path.join(this.projectRoot, 'app-improvement.cjs'), name: 'App Improvement' },
      { path: path.join(this.projectRoot, 'performance-optimizer.cjs'), name: 'Performance Optimizer' },
      { path: path.join(this.projectRoot, 'security-auditor.cjs'), name: 'Security Auditor' },
      { path: path.join(this.projectRoot, 'health-monitor.cjs'), name: 'Health Monitor' }
    ];

    let successCount = 0;
    let totalCount = automations.length;

    for (const automation of automations) {
      const success = await this.runAutomationScript(automation.path, automation.name);
      if (success) successCount++;
    }

    this.log(`Automation summary: ${successCount}/${totalCount} scripts completed successfully`);
    return { successCount, totalCount };
  }

  async runTests() {
    this.log('Running application tests...');
    try {
      // Run linting
      this.log('Running ESLint...');
      execSync('npm run lint', { stdio: 'pipe' });
      this.log('✓ Linting passed');
    } catch (error) {
      this.log(`✗ Linting failed: ${error.message}`);
    }

    try {
      // Run type checking
      this.log('Running TypeScript type check...');
      execSync('npm run type-check', { stdio: 'pipe' });
      this.log('✓ Type checking passed');
    } catch (error) {
      this.log(`✗ Type checking failed: ${error.message}`);
    }
  }

  async buildApplication() {
    this.log('Building application...');
    try {
      execSync('npm run build', { stdio: 'pipe' });
      this.log('✓ Build successful');
      return true;
    } catch (error) {
      this.log(`✗ Build failed: ${error.message}`);
      return false;
    }
  }

  generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      projectRoot: this.projectRoot,
      results: results,
      summary: {
        totalAutomations: results.totalCount,
        successfulAutomations: results.successCount,
        successRate: `${Math.round((results.successCount / results.totalCount) * 100)}%`
      }
    };

    const reportPath = path.join(this.reportsDir, 'master-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Master automation report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting master automation orchestrator...');
    
    // Run all automation scripts
    const automationResults = await this.runAllAutomations();
    
    // Run tests
    await this.runTests();
    
    // Try to build (may fail due to syntax issues)
    const buildSuccess = await this.buildApplication();
    
    // Generate comprehensive report
    const report = this.generateReport({
      ...automationResults,
      buildSuccess
    });
    
    this.log('Master automation orchestrator completed!');
    this.log(`Success rate: ${report.summary.successRate}`);
    
    return report;
  }
}

// Run the master automation orchestrator
if (require.main === module) {
  const orchestrator = new MasterAutomationOrchestrator();
  orchestrator.run().catch(error => {
    console.error('Master automation orchestrator failed:', error);
    process.exit(1);
  });
}

module.exports = MasterAutomationOrchestrator;