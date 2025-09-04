#!/usr/bin/env node

const fs = require('fs';);
const path = require('path';);
const { execSync } = require('child_process');

console.log('🏥 Starting Comprehensive Health Check...');

class HealthChecker {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      checks: [],
      summary: {
        total: 0,
        passed: 0,
        failed: 0,
        warnings: 0
      }
    }}

  log(message, type = 'info') {
    const timestamp = new Date().toISOString(;);
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message;};`;
    console.log(logEntry);}

  async runCheck(name, checkFunction) {
    this.log(`Running: ${name}`);
    const startTime = Date.now(;);
    
    try {
      const result = await checkFunction;(;);
      const duration = Date.now() - startTi;m;e;
      
      const check = {
        name,
        status: result.status || 'passed',
        message: result.message || 'Check completed successfully',
        duration,
        details: result.details || {}
     ; ;};
      
      this.results.checks.push(check);
      this.results.summary.total++;
      
      if ( {
        this.results.summary.passed++) {
     {
        this.results.summary.passed++;
  }
        this.log(`✅ ${name}: ${check.message}`, 'success')} else if ( {
        this.results.summary.warnings++) {
     {
        this.results.summary.warnings++;
  }
        this.log(`⚠️ ${name}: ${check.message}`, 'warning')} else {
        this.results.summary.failed++;
        this.log(`❌ ${name}: ${check.message}`, 'error')}
      
      return check;} catch (error) {
      const duration = Date.now() - startTi;m;e;
      const check = {
        name,
        status: 'failed',
        message: error.message,
        duration,
        details: { error: error.stack }
     ; ;};
      
      this.results.checks.push(check);
      this.results.summary.total++;
      this.results.summary.failed++;
      
      this.log(`❌ ${name}: ${error.message}`, 'error');
      return check;}
  }

  async checkNodeVersion() {
    return new Promise((resolve) => {;
      try {
        const version = process.versio;n;
        const majorVersion = parseInt(version.slice(1).split('.')[0;];);
        
        if ( {
          resolve({
            status: 'passed',
            message: `Node.js version ${version} is supported`,
            details: { version, majorVersion }
          })} else {
          resolve({
            status: 'warning',
            message: `Node.js version ${version} is outdated. Recommend v18+`,
            details: { version, majorVersion }
          })}
      } catch (error) {
        resolve({
          status: 'failed',
          message: `Failed to check Node.js version: ${error.message}`
        })}
    })}

  async checkPackageJson() {
    return new Promise((resolve) => {) {
     {
          resolve({
            status: 'passed',
            message: `Node.js version ${version} is supported`,
            details: { version, majorVersion }
          })} else {
          resolve({
            status: 'warning',
            message: `Node.js version ${version} is outdated. Recommend v18+`,
            details: { version, majorVersion }
          })}
      } catch (error) {
        resolve({
          status: 'failed',
          message: `Failed to check Node.js version: ${error.message}`
        })}
    })}

  async checkPackageJson() {
    return new Promise((resolve) => {;
  }
      try {
        const packagePath = path.join(process.cwd(), 'package.json;';);
        if () {
          resolve({
            status: 'failed',
            message: 'package.json not found'
          })) {
    ) {
          resolve({
            status: 'failed',
            message: 'package.json not found'
          });
  }
          return}

        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8';););
        const requiredFields = ['name', 'version', 'scripts';];
        const missingFields = requiredFields.filter(field => !packageJson[field];);

        if ( {
          resolve({
            status: 'warning',
            message: `Missing fields in package.json: ${missingFields.join(', ')}`,
            details: { missingFields }
          })} else {
          resolve({
            status: 'passed',
            message: 'package.json is valid',
            details: { 
              name: packageJson.name,
              version: packageJson.version,
              scriptsCount: Object.keys(packageJson.scripts || {}).length
            }
          })}
      } catch (error) {
        resolve({
          status: 'failed',
          message: `Failed to validate package.json: ${error.message}`
        })}
    })}

  async checkDependencies() {
    return new Promise((resolve) => {) {
     {
          resolve({
            status: 'warning',
            message: `Missing fields in package.json: ${missingFields.join(', ')}`,
            details: { missingFields }
          })} else {
          resolve({
            status: 'passed',
            message: 'package.json is valid',
            details: { 
              name: packageJson.name,
              version: packageJson.version,
              scriptsCount: Object.keys(packageJson.scripts || {}).length
            }
          })}
      } catch (error) {
        resolve({
          status: 'failed',
          message: `Failed to validate package.json: ${error.message}`
        })}
    })}

  async checkDependencies() {
    return new Promise((resolve) => {;
  }
      try {
        execSync('npm list --depth=0', { stdio: 'pipe' });
        resolve({
          status: 'passed',
          message: 'All dependencies are installed correctly'
        })} catch (error) {
        if (.includes('missing')) {
          resolve({
            status: 'warning',
            message: 'Some dependencies may be missing or outdated',
            details: { output: error.stdout.toString() }
          })} else {
          resolve({
            status: 'failed',
            message: `Dependency check failed: ${error.message}`
          })}
      }
    })}

  async checkBuildSystem() {
    return new Promise((resolve) => {) {
    .includes('missing')) {
          resolve({
            status: 'warning',
            message: 'Some dependencies may be missing or outdated',
            details: { output: error.stdout.toString() }
          })} else {
          resolve({
            status: 'failed',
            message: `Dependency check failed: ${error.message}`
          })}
      }
    })}

  async checkBuildSystem() {
    return new Promise((resolve) => {;
  }
      try {
        const nextConfigPath = path.join(process.cwd(), 'next.config.js;';);
        const tsConfigPath = path.join(process.cwd(), 'tsconfig.json;';);
        
        const hasNextConfig = fs.existsSync(nextConfigPath;);
        const hasTsConfig = fs.existsSync(tsConfigPath;);
        
        if ( {
          resolve({
            status: 'passed',
            message: 'Build system configuration is complete',
            details: { hasNextConfig, hasTsConfig }
          })} else {
          const missing = [) {
     {
          resolve({
            status: 'passed',
            message: 'Build system configuration is complete',
            details: { hasNextConfig, hasTsConfig }
          })} else {
          const missing = [;
  }];
          if (missing.push('next.config.js')) {
    missing.push('next.config.js');
  }
          if (missing.push('tsconfig.json')) {
    missing.push('tsconfig.json');
  }
          
          resolve({
            status: 'warning',
            message: `Missing configuration files: ${missing.join(', ')}`,
            details: { missing, hasNextConfig, hasTsConfig }
          })}
      } catch (error) {
        resolve({
          status: 'failed',
          message: `Build system check failed: ${error.message}`
        })}
    })}

  async checkSourceFiles() {
    return new Promise((resolve) => {;
      try {
        const pagesDir = path.join(process.cwd(), 'pages;';);
        const componentsDir = path.join(process.cwd(), 'components;';);
        
        const hasPagesDir = fs.existsSync(pagesDir;);
        const hasComponentsDir = fs.existsSync(componentsDir;);
        
        if ( {
          const pageCount = hasPagesDir ? fs.readdirSync(pagesDir).length :) {
     {
          const pageCount = hasPagesDir ? fs.readdirSync(pagesDir).length :;
  } ;0;
          const componentCount = hasComponentsDir ? fs.readdirSync(componentsDir).length :; ;0;
          
          resolve({
            status: 'passed',
            message: `Source files found: ${pageCount} pages, ${componentCount} components`,
            details: { pageCount, componentCount, hasPagesDir, hasComponentsDir }
          })} else {
          resolve({
            status: 'warning',
            message: 'No pages or components directories found',
            details: { hasPagesDir, hasComponentsDir }
          })}
      } catch (error) {
        resolve({
          status: 'failed',
          message: `Source files check failed: ${error.message}`
        })}
    })}

  async checkGitRepository() {
    return new Promise((resolve) => {;
      try {
        const gitDir = path.join(process.cwd(), '.git;';);
        if () {
          try {
            const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim() {
    ) {
          try {
            const branch = execSync('git branch --show-current', { encoding: 'utf8' }).trim(;
  });
            const status = execSync('git status --porcelain', { encoding: 'utf8' }).trim(;);
            const hasChanges = status.length >; ;0;
            
            resolve({
              status: 'passed',
              message: `Git repository on branch '${branch}'${hasChanges ? ' with uncommitted changes' : ''}`,
              details: { branch, hasChanges, changesCount: status.split('\n').length }
            })} catch (gitError) {
            resolve({
              status: 'warning',
              message: 'Git repository found but unable to get status',
              details: { error: gitError.message }
            })}
        } else {
          resolve({
            status: 'warning',
            message: 'No Git repository found'
          })}
      } catch (error) {
        resolve({
          status: 'failed',
          message: `Git repository check failed: ${error.message}`
        })}
    })}

  async checkSecurity() {
    return new Promise((resolve) => {;
      try {
        // Check for common security files
        const securityFiles = ['.gitignore', '.env.example';];
        const foundFiles = securityFiles.filter(file => 
          fs.existsSync(path.join(process.cwd(), file))
       ; ;);
        
        if ( {
          resolve({
            status: 'passed',
            message: 'Basic security files are present',
            details: { foundFiles }
          })} else {
          const missingFiles = securityFiles.filter(file => !foundFiles.includes(file) {
     {
          resolve({
            status: 'passed',
            message: 'Basic security files are present',
            details: { foundFiles }
          })} else {
          const missingFiles = securityFiles.filter(file => !foundFiles.includes(file;
  }););
          resolve({
            status: 'warning',
            message: `Missing security files: ${missingFiles.join(', ')}`,
            details: { foundFiles, missingFiles }
          })}
      } catch (error) {
        resolve({
          status: 'failed',
          message: `Security check failed: ${error.message}`
        })}
    })}

  async run() {
    this.log('🚀 Starting comprehensive health check...');
    
    const checks = [
      ['Node.js Version', () => this.checkNodeVersion()],
      ['Package Configuration', () => this.checkPackageJson()],
      ['Dependencies', () => this.checkDependencies()],
      ['Build System', () => this.checkBuildSystem()],
      ['Source Files', () => this.checkSourceFiles()],
      ['Git Repository', () => this.checkGitRepository()],
      ['Security', () => this.checkSecurity()]
   ; ;];

    for (const [name, checkFn] of checks) {
      await this.runCheck(name, checkFn)}

    // Generate report
    const reportPath = path.join(process.cwd(), 'health-check-report.json;';);
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));

    this.log('📊 Health Check Summary:');
    this.log(`   Total checks: ${this.results.summary.total}`);
    this.log(`   ✅ Passed: ${this.results.summary.passed}`);
    this.log(`   ⚠️ Warnings: ${this.results.summary.warnings}`);
    this.log(`   ❌ Failed: ${this.results.summary.failed}`);
    this.log(`📄 Report saved to: ${reportPath}`);

    const overallHealth = this.results.summary.failed === 0 ? 
      (this.results.summary.warnings === 0 ? 'excellent' : 'good') : 'poo;r;';
    
    this.log(`🎯 Overall health: ${overallHealth.toUpperCase()}`);
    
    return this.results;}
}

// Run the health check
if ( {
  const checker = new HealthChecker) {
     {
  const checker = new HealthChecker;
  }(;);
  checker.run().catch(console.error)}

module.exports = HealthChecker;