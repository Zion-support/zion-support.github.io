#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class BuildErrorDetector {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportFile = path.join(this.projectRoot, 'build-error-detector-report.json');
    this.errorsFound = [];
    this.buildStatus = 'unknown';
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return { success: true, output: result };
    } catch (error) {
      return { success: false, output: error.message, code: error.status };
    }
  }

  async checkTypeScriptBuild() {
    this.log('Checking TypeScript build...');
    
    const typeCheckResult = await this.runCommand('npx tsc --noEmit', { silent: true });
    if (!typeCheckResult.success) {
      this.errorsFound.push('TypeScript compilation errors detected');
      this.buildStatus = 'failed';
      this.log('TypeScript build failed', 'error');
    } else {
      this.log('TypeScript build passed', 'success');
    }
  }

  async checkESLintBuild() {
    this.log('Checking ESLint build...');
    
    const eslintResult = await this.runCommand('npx eslint src/**/*.{js,jsx,ts,tsx}', { silent: true });
    if (!eslintResult.success) {
      this.errorsFound.push('ESLint errors detected');
      this.buildStatus = 'failed';
      this.log('ESLint build failed', 'error');
    } else {
      this.log('ESLint build passed', 'success');
    }
  }

  async checkNextJSBuild() {
    this.log('Checking Next.js build...');
    
    const buildResult = await this.runCommand('npm run build', { silent: true });
    if (!buildResult.success) {
      this.errorsFound.push('Next.js build errors detected');
      this.buildStatus = 'failed';
      this.log('Next.js build failed', 'error');
    } else {
      this.log('Next.js build passed', 'success');
      this.buildStatus = 'success';
    }
  }

  async checkDependencies() {
    this.log('Checking dependencies...');
    
    const auditResult = await this.runCommand('npm audit --audit-level=high', { silent: true });
    if (!auditResult.success) {
      this.errorsFound.push('High severity vulnerabilities detected');
      this.log('Dependency vulnerabilities found', 'warn');
    } else {
      this.log('Dependencies are secure', 'success');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      buildStatus: this.buildStatus,
      errorsFound: this.errorsFound,
      summary: {
        totalErrors: this.errorsFound.length,
        buildSuccessful: this.buildStatus === 'success'
      }
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${this.reportFile}`);
  }

  async run() {
    this.log('Starting build error detection...');
    
    try {
      await this.checkTypeScriptBuild();
      await this.checkESLintBuild();
      await this.checkDependencies();
      await this.checkNextJSBuild();
      
      await this.generateReport();
      
      if (this.buildStatus === 'success') {
        this.log('Build error detection completed successfully', 'success');
      } else {
        this.log(`Build error detection completed with ${this.errorsFound.length} errors`, 'warn');
        this.errorsFound.forEach(error => this.log(`- ${error}`, 'warn'));
      }
      
    } catch (error) {
      this.log(`Error during build detection process: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run the detector
if (require.main === module) {
  const detector = new BuildErrorDetector();
  detector.run().catch(console.error);
}

module.exports = BuildErrorDetector;