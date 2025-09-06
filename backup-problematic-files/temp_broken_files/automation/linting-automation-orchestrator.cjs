#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class LintingAutomationOrchestrator {
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

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description, timeout = 30000) {
    this.log(`🚀 Starting: ${description}`);
    try {
      const result = execSync(command, { 
        cwd: this.projectRoot, 
        encoding: 'utf8',
        timeout: timeout
      });
      this.log(`✅ Completed: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runLinting() {
    this.log('🔍 Running ESLint...');
    
    const lintCommands = [
      {
        command: 'npx eslint . --max-warnings 1000 --format json',
        description: 'ESLint Check',
        timeout: 60000
      },
      {
        command: 'npx eslint . --fix --max-warnings 1000',
        description: 'ESLint Auto-fix',
        timeout: 60000
      }
    ];
    
    const results = [];
    
    for (const cmd of lintCommands) {
      const result = await this.runCommand(cmd.command, cmd.description, cmd.timeout);
      results.push({ ...cmd, ...result });
    }
    
    return results;
  }

  async runTypeCheck() {
    this.log('🔍 Running TypeScript Type Check...');
    
    const result = await this.runCommand(
      'npx tsc --noEmit',
      'TypeScript Type Check',
      60000
    );
    
    return result;
  }

  async runPrettier() {
    this.log('🎨 Running Prettier...');
    
    const prettierCommands = [
      {
        command: 'npx prettier --check .',
        description: 'Prettier Check',
        timeout: 30000
      },
      {
        command: 'npx prettier --write .',
        description: 'Prettier Format',
        timeout: 30000
      }
    ];
    
    const results = [];
    
    for (const cmd of prettierCommands) {
      const result = await this.runCommand(cmd.command, cmd.description, cmd.timeout);
      results.push({ ...cmd, ...result });
    }
    
    return results;
  }

  async generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      suite: 'Linting Automation Orchestrator',
      results: results,
      summary: {
        totalChecks: results.length,
        successfulChecks: results.filter(r => r.success).length,
        failedChecks: results.filter(r => !r.success).length
      }
    };
    
    const reportPath = path.join(this.reportsDir, 'linting-automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report saved to: ${reportPath}`);
    return report;
  }

  async run(mode = 'continuous') {
    this.log(`🚀 Starting Linting Automation Orchestrator (${mode} mode)`);
    
    if (mode === 'status') {
      this.log('📊 Linting Status Check');
      return;
    }
    
    if (mode === 'check') {
      const lintResult = await this.runLinting();
      const typeResult = await this.runTypeCheck();
      const prettierResult = await this.runPrettier();
      
      const allResults = [...lintResult, typeResult, ...prettierResult];
      const report = await this.generateReport(allResults);
      
      this.log(`🎉 Linting Check Complete!`);
      this.log(`📊 Success: ${report.summary.successfulChecks}/${report.summary.totalChecks}`);
      return;
    }
    
    if (mode === 'fix') {
      const lintResult = await this.runLinting();
      const prettierResult = await this.runPrettier();
      
      const allResults = [...lintResult, ...prettierResult];
      const report = await this.generateReport(allResults);
      
      this.log(`🎉 Linting Fix Complete!`);
      this.log(`📊 Success: ${report.summary.successfulChecks}/${report.summary.totalChecks}`);
      return;
    }
    
    if (mode === 'continuous') {
      this.log('🔄 Running Continuous Linting Mode');
      
      // Run initial check
      await this.run('check');
      
      // Set up file watcher for continuous mode
      const chokidar = require('chokidar');
      const watcher = chokidar.watch('src/**/*.{js,jsx,ts,tsx}', {
        ignored: /node_modules/,
        persistent: true
      });
      
      watcher.on('change', async (filePath) => {
        this.log(`📁 File changed: ${filePath}`);
        await this.run('fix');
      });
      
      this.log('👀 Watching for file changes...');
      this.log('Press Ctrl+C to stop');
      
      // Keep the process running
      process.on('SIGINT', () => {
        this.log('🛑 Stopping continuous linting...');
        watcher.close();
        process.exit(0);
      });
    }
  }
}

// Parse command line arguments
const mode = process.argv[2] || 'continuous';

// Run the orchestrator
const orchestrator = new LintingAutomationOrchestrator();
orchestrator.run(mode).catch(console.error);