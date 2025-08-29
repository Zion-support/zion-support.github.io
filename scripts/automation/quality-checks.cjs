#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Starting Quality Checks Automation...');

class QualityChecks {
  constructor() {
    this.reportDir = path.join(process.cwd(), 'ci-cd-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.qualityIssues = [];
    this.passedChecks = [];
    this.testResults = {};
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async run() {
    try {
      console.log('🔍 Running comprehensive quality checks...');
      
      // Run various quality checks
      await this.runLintingChecks();
      await this.runTypeChecking();
      await this.runTesting();
      await this.runBuildChecks();
      await this.runCodeCoverage();
      await this.runPerformanceChecks();
      
      // Generate report
      await this.generateReport();
      
      console.log(`✅ Quality Checks completed. Found ${this.qualityIssues.length} issues, ${this.passedChecks.length} checks passed.`);
      
    } catch (error) {
      console.error('❌ Quality Checks failed:', error.message);
      await this.generateErrorReport(error);
    }
  }

  async runLintingChecks() {
    try {
      console.log('🔍 Running linting checks...');
      
      try {
        const lintOutput = execSync('npm run lint', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        this.passedChecks.push({
          type: 'linting',
          status: 'success',
          message: 'ESLint passed successfully',
          timestamp: new Date().toISOString()
        });
        
        console.log('✅ ESLint passed successfully');
        
      } catch (error) {
        const errorOutput = error.stdout || error.stderr || '';
        const issues = this.parseLintOutput(errorOutput);
        
        this.qualityIssues.push({
          type: 'linting',
          status: 'failure',
          message: 'ESLint found issues',
          issues: issues,
          timestamp: new Date().toISOString()
        });
        
        console.log(`❌ ESLint found ${issues.length} issues`);
      }
      
    } catch (error) {
      console.log('ℹ️  Error running linting checks:', error.message);
    }
  }

  async runTypeChecking() {
    try {
      console.log('🔍 Running TypeScript type checking...');
      
      try {
        const tsOutput = execSync('npx tsc --noEmit', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        this.passedChecks.push({
          type: 'typescript',
          status: 'success',
          message: 'TypeScript type checking passed',
          timestamp: new Date().toISOString()
        });
        
        console.log('✅ TypeScript type checking passed');
        
      } catch (error) {
        const errorOutput = error.stdout || error.stderr || '';
        const issues = this.parseTypeScriptOutput(errorOutput);
        
        this.qualityIssues.push({
          type: 'typescript',
          status: 'failure',
          message: 'TypeScript type checking failed',
          issues: issues,
          timestamp: new Date().toISOString()
        });
        
        console.log(`❌ TypeScript type checking found ${issues.length} issues`);
      }
      
    } catch (error) {
      console.log('ℹ️  Error running TypeScript checks:', error.message);
    }
  }

  async runTesting() {
    try {
      console.log('🔍 Running tests...');
      
      try {
        const testOutput = execSync('npm test', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        this.testResults = this.parseTestOutput(testOutput);
        
        if (this.testResults.passed > 0) {
          this.passedChecks.push({
            type: 'testing',
            status: 'success',
            message: `Tests passed: ${this.testResults.passed}/${this.testResults.total}`,
            details: this.testResults,
            timestamp: new Date().toISOString()
          });
          
          console.log(`✅ Tests passed: ${this.testResults.passed}/${this.testResults.total}`);
        }
        
      } catch (error) {
        const errorOutput = error.stdout || error.stderr || '';
        this.testResults = this.parseTestOutput(errorOutput);
        
        if (this.testResults.failed > 0) {
          this.qualityIssues.push({
            type: 'testing',
            status: 'failure',
            message: `Tests failed: ${this.testResults.failed}/${this.testResults.total}`,
            details: this.testResults,
            timestamp: new Date().toISOString()
          });
          
          console.log(`❌ Tests failed: ${this.testResults.failed}/${this.testResults.total}`);
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error running tests:', error.message);
    }
  }

  async runBuildChecks() {
    try {
      console.log('🔍 Running build checks...');
      
      try {
        const buildOutput = execSync('npm run build', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        this.passedChecks.push({
          type: 'build',
          status: 'success',
          message: 'Build completed successfully',
          timestamp: new Date().toISOString()
        });
        
        console.log('✅ Build completed successfully');
        
      } catch (error) {
        const errorOutput = error.stdout || error.stderr || '';
        
        this.qualityIssues.push({
          type: 'build',
          status: 'failure',
          message: 'Build failed',
          error: error.message,
          details: errorOutput,
          timestamp: new Date().toISOString()
        });
        
        console.log('❌ Build failed:', error.message);
      }
      
    } catch (error) {
      console.log('ℹ️  Error running build checks:', error.message);
    }
  }

  async runCodeCoverage() {
    try {
      console.log('🔍 Running code coverage...');
      
      try {
        const coverageOutput = execSync('npm run test:coverage', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        const coverage = this.parseCoverageOutput(coverageOutput);
        
        if (coverage.total > 0) {
          this.passedChecks.push({
            type: 'coverage',
            status: 'success',
            message: `Code coverage: ${coverage.percentage}%`,
            details: coverage,
            timestamp: new Date().toISOString()
          });
          
          console.log(`✅ Code coverage: ${coverage.percentage}%`);
        }
        
      } catch (error) {
        console.log('ℹ️  Code coverage not available or failed');
      }
      
    } catch (error) {
      console.log('ℹ️  Error running code coverage:', error.message);
    }
  }

  async runPerformanceChecks() {
    try {
      console.log('🔍 Running performance checks...');
      
      // Check bundle size
      try {
        const bundleOutput = execSync('npm run build', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        // Look for bundle size information in build output
        if (bundleOutput.includes('bundle size') || bundleOutput.includes('dist')) {
          this.passedChecks.push({
            type: 'performance',
            status: 'success',
            message: 'Build size check completed',
            timestamp: new Date().toISOString()
          });
          
          console.log('✅ Build size check completed');
        }
        
      } catch (error) {
        console.log('ℹ️  Build size check not available');
      }
      
    } catch (error) {
      console.log('ℹ️  Error running performance checks:', error.message);
    }
  }

  parseLintOutput(output) {
    const lines = output.split('\n');
    return lines.filter(line => line.includes('error') || line.includes('warning')).map(line => line.trim());
  }

  parseTypeScriptOutput(output) {
    const lines = output.split('\n');
    return lines.filter(line => line.includes('error')).map(line => line.trim());
  }

  parseTestOutput(output) {
    const lines = output.split('\n');
    let passed = 0;
    let failed = 0;
    let total = 0;
    
    for (const line of lines) {
      if (line.includes('✓') || line.includes('PASS')) passed++;
      if (line.includes('✗') || line.includes('FAIL')) failed++;
      if (line.includes('Tests:') || line.includes('Test Suites:')) {
        const match = line.match(/(\d+)/);
        if (match) total = parseInt(match[1]);
      }
    }
    
    return { passed, failed, total: passed + failed };
  }

  parseCoverageOutput(output) {
    const lines = output.split('\n');
    let percentage = 0;
    let total = 0;
    
    for (const line of lines) {
      if (line.includes('All files')) {
        const match = line.match(/(\d+(?:\.\d+)?)%/);
        if (match) percentage = parseFloat(match[1]);
      }
      if (line.includes('Statements') || line.includes('Functions') || line.includes('Lines')) {
        total++;
      }
    }
    
    return { percentage, total };
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      qualityIssues: this.qualityIssues,
      passedChecks: this.passedChecks,
      testResults: this.testResults,
      totalIssues: this.qualityIssues.length,
      totalPassed: this.passedChecks.length,
      status: this.qualityIssues.length === 0 ? 'clean' : 'issues_found'
    };

    const reportPath = path.join(this.reportDir, 'quality-checks-report.json');
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

    const reportPath = path.join(this.reportDir, 'quality-checks-error.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

// Run the automation
const quality = new QualityChecks();
quality.run().catch(console.error);