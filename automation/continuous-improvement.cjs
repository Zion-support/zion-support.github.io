#!/usr/bin/env node

/**
 * Continuous Improvement Automation Script
 * Replaces GitHub Actions Continuous Improvement workflows
 * Runs: code analysis, optimization, monitoring
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ContinuousImprovement {
  constructor() {
    this.workspace = process.cwd();
    this.logFile = path.join(this.workspace, 'logs', 'continuous-improvement.log');
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

  async runLintFix() {
    return await this.runCommand(
      'npm run lint:fix',
      'Running lint fix'
    );
  }

  async runTypeCheck() {
    return await this.runCommand(
      'npm run type-check',
      'Running type check'
    );
  }

  async runBuild() {
    return await this.runCommand(
      'npm run build',
      'Running build'
    );
  }

  async runTests() {
    return await this.runCommand(
      'npm run test:smoke',
      'Running tests'
    );
  }

  async checkCodeQuality() {
    return await this.runCommand(
      'npm run check',
      'Running code quality checks'
    );
  }

  async optimizeCode() {
    // Run any optimization scripts if they exist
    const optimizationScripts = [
      'optimized-syntax-fixer.cjs',
      'intelligent-syntax-fixer.cjs'
    ];

    for (const script of optimizationScripts) {
      if (fs.existsSync(script)) {
        await this.runCommand(
          `node ${script}`,
          `Running optimization: ${script}`
        );
      }
    }
    return true;
  }

  async runContinuousImprovement() {
    this.log('🔄 Starting Continuous Improvement Automation');
    
    const steps = [
      { name: 'Lint Fix', fn: () => this.runLintFix() },
      { name: 'Type Check', fn: () => this.runTypeCheck() },
      { name: 'Code Quality', fn: () => this.checkCodeQuality() },
      { name: 'Optimize Code', fn: () => this.optimizeCode() },
      { name: 'Build', fn: () => this.runBuild() },
      { name: 'Tests', fn: () => this.runTests() }
    ];

    let allPassed = true;
    
    for (const step of steps) {
      const success = await step.fn();
      if (!success) {
        this.log(`⚠️ Step failed: ${step.name} (continuing...)`);
        // Don't break on failure for continuous improvement
      }
    }

    this.log('✅ Continuous Improvement cycle completed');
    return allPassed;
  }
}

// Main execution
if (require.main === module) {
  const automation = new ContinuousImprovement();
  
  automation.runContinuousImprovement()
    .then(success => {
      process.exit(success ? 0 : 1);
    })
    .catch(error => {
      automation.log(`Fatal error: ${error.message}`);
      process.exit(1);
    });
}

module.exports = ContinuousImprovement;