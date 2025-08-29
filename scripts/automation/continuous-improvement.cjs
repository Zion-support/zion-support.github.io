#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Continuous Improvement Automation...');

class ContinuousImprovement {
  constructor() {
    this.reportDir = path.join(process.cwd(), 'ci-cd-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.improvements = [];
    this.issues = [];
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async run() {
    try {
      console.log('🔍 Running continuous improvement checks...');
      
      // Run various improvement tasks
      await this.runCodeQualityChecks();
      await this.runPerformanceChecks();
      await this.runSecurityChecks();
      await this.runDependencyChecks();
      
      // Generate report
      await this.generateReport();
      
      console.log(`✅ Continuous Improvement completed. Applied ${this.improvements.length} improvements, found ${this.issues.length} issues.`);
      
    } catch (error) {
      console.error('❌ Continuous Improvement failed:', error.message);
      await this.generateErrorReport(error);
    }
  }

  async runCodeQualityChecks() {
    try {
      console.log('🔍 Running code quality checks...');
      
      // Run ESLint
      try {
        const lintOutput = execSync('npm run lint', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        this.improvements.push({
          type: 'linting',
          status: 'success',
          message: 'Code linting passed',
          timestamp: new Date().toISOString()
        });
        
        console.log('✅ Code linting passed');
        
      } catch (error) {
        this.issues.push({
          type: 'linting',
          status: 'failure',
          message: 'Code linting failed',
          error: error.message,
          timestamp: new Date().toISOString()
        });
        
        console.log('❌ Code linting failed:', error.message);
      }
      
      // Run TypeScript check
      try {
        const tsOutput = execSync('npx tsc --noEmit', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        this.improvements.push({
          type: 'typescript',
          status: 'success',
          message: 'TypeScript check passed',
          timestamp: new Date().toISOString()
        });
        
        console.log('✅ TypeScript check passed');
        
      } catch (error) {
        this.issues.push({
          type: 'typescript',
          status: 'failure',
          message: 'TypeScript check failed',
          error: error.message,
          timestamp: new Date().toISOString()
        });
        
        console.log('❌ TypeScript check failed:', error.message);
      }
      
    } catch (error) {
      console.log('ℹ️  Error running code quality checks:', error.message);
    }
  }

  async runPerformanceChecks() {
    try {
      console.log('🔍 Running performance checks...');
      
      // Check bundle size
      try {
        const buildOutput = execSync('npm run build', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        this.improvements.push({
          type: 'build',
          status: 'success',
          message: 'Build completed successfully',
          timestamp: new Date().toISOString()
        });
        
        console.log('✅ Build completed successfully');
        
      } catch (error) {
        this.issues.push({
          type: 'build',
          status: 'failure',
          message: 'Build failed',
          error: error.message,
          timestamp: new Date().toISOString()
        });
        
        console.log('❌ Build failed:', error.message);
      }
      
    } catch (error) {
      console.log('ℹ️  Error running performance checks:', error.message);
    }
  }

  async runSecurityChecks() {
    try {
      console.log('🔍 Running security checks...');
      
      // Run npm audit
      try {
        const auditOutput = execSync('npm audit --audit-level=moderate', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        if (auditOutput.includes('found 0 vulnerabilities')) {
          this.improvements.push({
            type: 'security',
            status: 'success',
            message: 'No security vulnerabilities found',
            timestamp: new Date().toISOString()
          });
          
          console.log('✅ No security vulnerabilities found');
        } else {
          this.issues.push({
            type: 'security',
            status: 'warning',
            message: 'Security vulnerabilities found',
            details: auditOutput,
            timestamp: new Date().toISOString()
          });
          
          console.log('⚠️  Security vulnerabilities found');
        }
        
      } catch (error) {
        // npm audit exits with code 1 if vulnerabilities are found
        this.issues.push({
          type: 'security',
          status: 'warning',
          message: 'Security vulnerabilities found',
          error: error.message,
          timestamp: new Date().toISOString()
        });
        
        console.log('⚠️  Security vulnerabilities found');
      }
      
    } catch (error) {
      console.log('ℹ️  Error running security checks:', error.message);
    }
  }

  async runDependencyChecks() {
    try {
      console.log('🔍 Running dependency checks...');
      
      // Check for outdated packages
      try {
        const outdatedOutput = execSync('npm outdated --json', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        if (outdatedOutput.trim()) {
          const outdated = JSON.parse(outdatedOutput);
          const outdatedCount = Object.keys(outdated).length;
          
          this.issues.push({
            type: 'dependencies',
            status: 'info',
            message: `${outdatedCount} outdated packages found`,
            details: outdated,
            timestamp: new Date().toISOString()
          });
          
          console.log(`ℹ️  Found ${outdatedCount} outdated packages`);
        } else {
          this.improvements.push({
            type: 'dependencies',
            status: 'success',
            message: 'All packages are up to date',
            timestamp: new Date().toISOString()
          });
          
          console.log('✅ All packages are up to date');
        }
        
      } catch (error) {
        // npm outdated exits with code 1 if packages are outdated
        console.log('ℹ️  Some packages may be outdated');
      }
      
    } catch (error) {
      console.log('ℹ️  Error running dependency checks:', error.message);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      improvements: this.improvements,
      issues: this.issues,
      totalImprovements: this.improvements.length,
      totalIssues: this.issues.length,
      status: this.issues.length === 0 ? 'clean' : 'issues_found'
    };

    const reportPath = path.join(this.reportDir, 'continuous-improvement-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report saved to ${reportPath}`);
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      status: 'failed'
    };

    const reportPath = path.join(this.reportDir, 'continuous-improvement-error.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

// Run the automation
const improvement = new ContinuousImprovement();
improvement.run().catch(console.error);