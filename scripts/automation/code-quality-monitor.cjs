#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class CodeQualityMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'error-reports', 'code-quality-monitor-report.json');
    this.fixesApplied = [];
    this.errorsFound = [];
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  async ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe',
        ...options 
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, output: error.message, code: error.status };
    }
  }

  async checkCodeQuality() {
    this.log('Checking code quality...');
    
    // Run ESLint
    const eslintResult = await this.runCommand('npx eslint src/ --format=json');
    if (eslintResult.success) {
      this.log('ESLint passed', 'success');
    } else {
      try {
        const eslintData = JSON.parse(eslintResult.output);
        const errorCount = eslintData.reduce((total, file) => total + file.errorCount, 0);
        const warningCount = eslintData.reduce((total, file) => total + file.warningCount, 0);
        
        if (errorCount > 0 || warningCount > 0) {
          this.log(`ESLint found ${errorCount} errors and ${warningCount} warnings`, 'warn');
          this.errorsFound.push(`ESLint: ${errorCount} errors, ${warningCount} warnings`);
        }
      } catch (error) {
        this.log('ESLint check failed', 'error');
        this.errorsFound.push('ESLint check failed');
      }
    }
    
    // Run Prettier check
    const prettierResult = await this.runCommand('npx prettier --check src/');
    if (prettierResult.success) {
      this.log('Prettier formatting is correct', 'success');
    } else {
      this.log('Prettier formatting issues found', 'warn');
      this.errorsFound.push('Prettier formatting issues detected');
    }
  }

  async checkUnusedCode() {
    this.log('Checking for unused code...');
    
    // This is a simplified check - in a real implementation you might use tools like ts-prune
    const srcFiles = this.findFiles('src/**/*.{js,jsx,ts,tsx}');
    this.log(`Found ${srcFiles.length} source files to analyze`);
  }

  findFiles(pattern) {
    const glob = require('glob');
    try {
      return glob.sync(pattern, { cwd: this.projectRoot });
    } catch (error) {
      this.log('Error finding files', 'error');
      return [];
    }
  }

  async generateReport() {
    this.log('Generating code quality monitor report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      errorsFound: this.errorsFound,
      fixesApplied: this.fixesApplied,
      summary: {
        codeQualityGood: this.errorsFound.length === 0,
        totalIssues: this.errorsFound.length,
        totalFixes: this.fixesApplied.length
      }
    };

    await this.ensureDirectoryExists(path.dirname(this.logFile));
    fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
    
    this.log(`Code quality monitor report generated: ${this.logFile}`);
  }

  async run() {
    this.log('Starting code quality monitoring process...');
    
    try {
      await this.checkCodeQuality();
      await this.checkUnusedCode();
      await this.generateReport();
      
      this.log('Code quality monitoring completed', 'success');
    } catch (error) {
      this.log(`Error during code quality monitoring: ${error.message}`, 'error');
      this.errorsFound.push(`Process error: ${error.message}`);
      await this.generateReport();
    }
  }
}

// Run the code quality monitor
const monitor = new CodeQualityMonitor();
monitor.run().catch(console.error);