#!/usr/bin/env node

/**
 * Lint Automation Script
 * Runs linting and code quality checks
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class LintAutomation {
  constructor() {
    this.workspace = process.cwd();
    this.logFile = path.join(this.workspace, 'automation', 'logs', 'lint-automation-error.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
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
      const output = execSync(command, { 
        cwd: this.workspace, 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      this.log(`✅ Success: ${description}`);
      if (output) {
        this.log(`Output: ${output.substring(0, 500)}...`);
      }
      return true;
    } catch (error) {
      this.log(`❌ Error in ${description}: ${error.message}`);
      if (error.stdout) {
        this.log(`STDOUT: ${error.stdout}`);
      }
      if (error.stderr) {
        this.log(`STDERR: ${error.stderr}`);
      }
      return false;
    }
  }

  async runLint() {
    return await this.runCommand(
      'npm run lint',
      'Running ESLint'
    );
  }

  async runLintFix() {
    return await this.runCommand(
      'npm run lint:fix',
      'Running ESLint with auto-fix'
    );
  }

  async runTypeCheck() {
    return await this.runCommand(
      'npm run type-check',
      'Running TypeScript type check'
    );
  }

  async runLintAutomation() {
    this.log('🔧 Starting Lint Automation');
    
    const steps = [
      { name: 'Lint Check', fn: () => this.runLint() },
      { name: 'Lint Fix', fn: () => this.runLintFix() },
      { name: 'Type Check', fn: () => this.runTypeCheck() }
    ];

    let allPassed = true;
    
    for (const step of steps) {
      const success = await step.fn();
      if (!success) {
        this.log(`⚠️ Step failed: ${step.name} (continuing...)`);
        allPassed = false;
      }
    }

    this.log('✅ Lint automation cycle completed');
    return allPassed;
  }
}

// Main execution
if (require.main === module) {
  const automation = new LintAutomation();
  
  automation.runLintAutomation()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      automation.log(`Fatal error: ${error.message}`);
      process.exit(1);
    });
}

module.exports = LintAutomation;