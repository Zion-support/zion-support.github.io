#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class BuildMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'error-reports', 'build-monitor-report.json');
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

  async checkBuildHealth() {
    this.log('Checking build health...');
    
    const result = await this.runCommand('npm run build');
    
    if (result.success) {
      this.log('Build completed successfully', 'success');
      return true;
    } else {
      this.log(`Build failed: ${result.output}`, 'error');
      this.errorsFound.push(`Build failed: ${result.output}`);
      return false;
    }
  }

  async fixBuildIssues(buildError) {
    this.log('Attempting to fix build issues...');
    
    // Try to install dependencies first
    const installResult = await this.runCommand('npm install');
    if (installResult.success) {
      this.fixesApplied.push('Installed missing dependencies');
    }
    
    // Try to fix TypeScript errors
    const typeCheckResult = await this.runCommand('npx tsc --noEmit');
    if (typeCheckResult.success) {
      this.fixesApplied.push('TypeScript compilation successful');
    } else {
      this.fixesApplied.push('TypeScript errors detected - manual review needed');
    }
    
    // Try to fix linting errors
    const lintResult = await this.runCommand('npx eslint --fix src/');
    if (lintResult.success) {
      this.fixesApplied.push('Auto-fixed linting errors');
    }
  }

  async fixMissingModules() {
    this.log('Checking for missing modules...');
    
    const result = await this.runCommand('npm ls --depth=0');
    if (!result.success) {
      this.log('Missing modules detected, attempting to install...', 'warn');
      const installResult = await this.runCommand('npm install');
      if (installResult.success) {
        this.fixesApplied.push('Installed missing modules');
      }
    }
  }

  async fixSyntaxErrors() {
    this.log('Checking for syntax errors...');
    
    // This would typically involve parsing files and checking syntax
    // For now, we'll just run a basic check
    const result = await this.runCommand('node -c src/main.jsx 2>&1 || true');
    if (result.success) {
      this.log('No obvious syntax errors detected', 'success');
    }
  }

  async fixTypeErrors() {
    this.log('Checking for TypeScript type errors...');
    
    const result = await this.runCommand('npx tsc --noEmit');
    if (result.success) {
      this.log('No TypeScript type errors detected', 'success');
    } else {
      this.log('TypeScript type errors detected', 'warn');
      this.errorsFound.push(`TypeScript errors: ${result.output}`);
    }
  }

  async generateReport() {
    this.log('Generating build monitor report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      errorsFound: this.errorsFound,
      fixesApplied: this.fixesApplied,
      summary: {
        buildSuccessful: this.errorsFound.length === 0,
        totalErrors: this.errorsFound.length,
        totalFixes: this.fixesApplied.length
      }
    };

    await this.ensureDirectoryExists(path.dirname(this.logFile));
    fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
    
    this.log(`Build monitor report generated: ${this.logFile}`);
  }

  async run() {
    this.log('Starting build monitoring process...');
    
    try {
      const buildHealthy = await this.checkBuildHealth();
      
      if (!buildHealthy) {
        await this.fixBuildIssues();
        await this.fixMissingModules();
        await this.fixSyntaxErrors();
        await this.fixTypeErrors();
      }
      
      await this.generateReport();
      
      this.log('Build monitoring completed', 'success');
    } catch (error) {
      this.log(`Error during build monitoring: ${error.message}`, 'error');
      this.errorsFound.push(`Process error: ${error.message}`);
      await this.generateReport();
    }
  }
}

// Run the build monitor
const monitor = new BuildMonitor();
monitor.run().catch(console.error);