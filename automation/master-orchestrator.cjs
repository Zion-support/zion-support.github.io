#!/usr/bin/env node
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Master Automation Orchestrator...');

class MasterAutomationOrchestrator {
  constructor() {
    this.logFile = path.join(__dirname, '..', 'logs', 'automation.log');
    this.results = {};
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
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  runCmd(cmd) {
    try {
      const out = execSync(cmd, { stdio: 'pipe', encoding: 'utf8' });
      return { success: true, output: out };
    } catch (e) {
      return {
        success: false,
        error: e.message
      };
    }
  }

  async runCommand(command, description) {
    try {
      this.log(`🚀 ${description}`);
      const result = execSync(command, {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: path.join(__dirname, '..'),
      });
      this.log(`✅ ${description} - Success`);
      return { success: true, result };
    } catch (error) {
      this.log(`❌ ${description} - Failed: ${error.message}`);
      return { success: false, error: error.message };
    }
  }

  async runLinting() {
    this.log('🔧 Running linting and code quality checks...');
    const commands = [
      { cmd: 'npm run lint:fix', desc: 'Fix linting errors' },
      { cmd: 'npm run type-check', desc: 'TypeScript type checking' },
    ];
    for (const { cmd, desc } of commands) {
      await this.runCommand(cmd, desc);
    }
  }

  async runBuildProcess() {
    this.log('🏗️ Running build process...');
    const commands = [
      { cmd: 'npm run build', desc: 'Build application' },
    ];
    for (const { cmd, desc } of commands) {
      const result = await this.runCommand(cmd, desc);
      if (!result.success) {
        this.log('⚠️ Build failed, attempting to fix...');
        await this.fixBuildIssues();
      }
    }
  }

  async fixBuildIssues() {
    this.log('🔧 Attempting to fix build issues...');
    const fixCommands = [
      { cmd: 'npm run lint:fix', desc: 'Fix linting issues' },
    ];
    for (const { cmd, desc } of fixCommands) {
      await this.runCommand(cmd, desc);
    }
  }

  async runAutomationScripts() {
    this.log('🤖 Running automation scripts...');
    const scripts = [
      'enhanced-automation-suite.cjs',
      'app-optimizer.cjs',
      'comprehensive-app-improvement-suite.cjs'
    ];
    for (const script of scripts) {
      const scriptPath = path.join(__dirname, '..', script);
      if (fs.existsSync(scriptPath)) {
        this.log(`Running ${script}...`);
        const result = this.runCmd(`node ${scriptPath}`);
        this.results[script.replace('.cjs', '')] = {
          success: result.success,
          error: result.error || null,
          output: result.output
        };
      } else {
        this.log(`⚠️ Script not found: ${script}`);
        this.results[script.replace('.cjs', '')] = {
          success: false,
          error: 'Script not found',
          output: ''
        };
      }
    }
  }

  async generateReport() {
    this.log('📊 Generating automation report...');
    const report = {
      timestamp: new Date().toISOString(),
      results: this.results,
      summary: {
        total: Object.keys(this.results).length,
        successful: Object.values(this.results).filter(r => r.success).length,
        failed: Object.values(this.results).filter(r => !r.success).length
      }
    };
    
    const reportPath = path.join(__dirname, '..', 'logs', 'automation-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Report saved to: ${reportPath}`);
  }

  async run() {
    try {
      this.log('🚀 Starting master automation orchestrator...');
      
      // Run linting and type checking
      await this.runLinting();
      
      // Run build process
      await this.runBuildProcess();
      
      // Run automation scripts
      await this.runAutomationScripts();
      
      // Generate report
      await this.generateReport();
      
      this.log('✅ Master automation orchestrator completed successfully!');
    } catch (error) {
      this.log(`❌ Master automation orchestrator failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the orchestrator
const orchestrator = new MasterAutomationOrchestrator();
orchestrator.run().catch(console.error);

module.exports = MasterAutomationOrchestrator;