#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏗️ Starting Daily Build Test Automation...');

class DailyBuildTest {
  constructor() {
    this.reportDir = path.join(process.cwd(), 'ci-cd-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.buildResults = {};
    this.testResults = {};
    this.qualityResults = {};
    this.issues = [];
    this.successes = [];
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async run() {
    try {
      console.log('🔍 Running daily build and test suite...');
      
      // Run comprehensive build and test tasks
      await this.runDependencyCheck();
      await this.runLintingAndTypeCheck();
      await this.runBuildProcess();
      await this.runTestSuite();
      await this.runQualityChecks();
      await this.runSecurityChecks();
      await this.generateBuildArtifacts();
      
      // Generate comprehensive report
      await this.generateReport();
      
      console.log(`✅ Daily Build Test completed. ${this.successes.length} tasks succeeded, ${this.issues.length} issues found.`);
      
    } catch (error) {
      console.error('❌ Daily Build Test failed:', error.message);
      await this.generateErrorReport(error);
    }
  }

  async runDependencyCheck() {
    try {
      console.log('🔍 Checking dependencies...');
      
      try {
        // Check for outdated packages
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
            severity: 'info',
            message: `${outdatedCount} outdated packages found`,
            count: outdatedCount,
            timestamp: new Date().toISOString()
          });
          
          console.log(`⚠️  Found ${outdatedCount} outdated packages`);
        } else {
          this.successes.push({
            type: 'dependencies',
            message: 'All packages are up to date',
            timestamp: new Date().toISOString()
          });
          
          console.log('✅ All packages are up to date');
        }
        
      } catch (error) {
        // npm outdated exits with code 1 if packages are outdated
        console.log('ℹ️  Some packages may be outdated');
      }
      
      // Check for security vulnerabilities
      try {
        const auditOutput = execSync('npm audit --audit-level=moderate', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        this.successes.push({
          type: 'security_audit',
          message: 'Security audit completed',
          timestamp: new Date().toISOString()
        });
        
        console.log('✅ Security audit completed');
        
      } catch (error) {
        this.issues.push({
          type: 'security_audit',
          severity: 'warning',
          message: 'Security vulnerabilities found',
          error: error.message,
          timestamp: new Date().toISOString()
        });
        
        console.log('⚠️  Security vulnerabilities found');
      }
      
    } catch (error) {
      console.log('ℹ️  Error checking dependencies:', error.message);
    }
  }

  async runLintingAndTypeCheck() {
    try {
      console.log('🔍 Running linting and type checking...');
      
      // Run ESLint
      try {
        const lintOutput = execSync('npm run lint', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        this.successes.push({
          type: 'linting',
          message: 'ESLint passed successfully',
          timestamp: new Date().toISOString()
        });
        
        console.log('✅ ESLint passed successfully');
        
      } catch (error) {
        const errorOutput = error.stdout || error.stderr || '';
        const issues = this.parseLintOutput(errorOutput);
        
        this.issues.push({
          type: 'linting',
          severity: 'error',
          message: `ESLint found ${issues.length} issues`,
          issues: issues,
          timestamp: new Date().toISOString()
        });
        
        console.log(`❌ ESLint found ${issues.length} issues`);
      }
      
      // Run TypeScript type checking
      try {
        const tsOutput = execSync('npx tsc --noEmit', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        this.successes.push({
          type: 'typescript',
          message: 'TypeScript type checking passed',
          timestamp: new Date().toISOString()
        });
        
        console.log('✅ TypeScript type checking passed');
        
      } catch (error) {
        const errorOutput = error.stdout || error.stderr || '';
        const issues = this.parseTypeScriptOutput(errorOutput);
        
        this.issues.push({
          type: 'typescript',
          severity: 'error',
          message: `TypeScript found ${issues.length} type errors`,
          issues: issues,
          timestamp: new Date().toISOString()
        });
        
        console.log(`❌ TypeScript found ${issues.length} type errors`);
      }
      
    } catch (error) {
      console.log('ℹ️  Error running linting and type checking:', error.message);
    }
  }

  async runBuildProcess() {
    try {
      console.log('🏗️ Running build process...');
      
      const buildStart = Date.now();
      
      try {
        const buildOutput = execSync('npm run build', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        const buildEnd = Date.now();
        const buildTime = buildEnd - buildStart;
        
        this.buildResults = {
          status: 'success',
          duration: buildTime,
          timestamp: new Date().toISOString()
        };
        
        this.successes.push({
          type: 'build',
          message: `Build completed successfully in ${buildTime}ms`,
          duration: buildTime,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ Build completed successfully in ${buildTime}ms`);
        
        // Check build artifacts
        if (fs.existsSync('dist')) {
          const distSize = this.getDirectorySize('dist');
          this.buildResults.bundleSize = distSize;
          
          console.log(`📦 Build artifacts size: ${this.formatBytes(distSize)}`);
        }
        
      } catch (error) {
        const buildEnd = Date.now();
        const buildTime = buildEnd - buildStart;
        
        this.buildResults = {
          status: 'failure',
          duration: buildTime,
          error: error.message,
          timestamp: new Date().toISOString()
        };
        
        this.issues.push({
          type: 'build',
          severity: 'error',
          message: 'Build failed',
          error: error.message,
          duration: buildTime,
          timestamp: new Date().toISOString()
        });
        
        console.log(`❌ Build failed after ${buildTime}ms:`, error.message);
      }
      
    } catch (error) {
      console.log('ℹ️  Error running build process:', error.message);
    }
  }

  async runTestSuite() {
    try {
      console.log('🧪 Running test suite...');
      
      const testStart = Date.now();
      
      try {
        const testOutput = execSync('npm test', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        const testEnd = Date.now();
        const testTime = testEnd - testStart;
        
        this.testResults = this.parseTestOutput(testOutput);
        this.testResults.duration = testTime;
        this.testResults.status = 'success';
        this.testResults.timestamp = new Date().toISOString();
        
        this.successes.push({
          type: 'testing',
          message: `Tests passed: ${this.testResults.passed}/${this.testResults.total} in ${testTime}ms`,
          passed: this.testResults.passed,
          total: this.testResults.total,
          duration: testTime,
          timestamp: new Date().toISOString()
        });
        
        console.log(`✅ Tests passed: ${this.testResults.passed}/${this.testResults.total} in ${testTime}ms`);
        
      } catch (error) {
        const testEnd = Date.now();
        const testTime = testEnd - testStart;
        const errorOutput = error.stdout || error.stderr || '';
        
        this.testResults = this.parseTestOutput(errorOutput);
        this.testResults.duration = testTime;
        this.testResults.status = 'failure';
        this.testResults.timestamp = new Date().toISOString();
        
        if (this.testResults.failed > 0) {
          this.issues.push({
            type: 'testing',
            severity: 'error',
            message: `Tests failed: ${this.testResults.failed}/${this.testResults.total}`,
            failed: this.testResults.failed,
            total: this.testResults.total,
            duration: testTime,
            timestamp: new Date().toISOString()
          });
          
          console.log(`❌ Tests failed: ${this.testResults.failed}/${this.testResults.total} in ${testTime}ms`);
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error running test suite:', error.message);
    }
  }

  async runQualityChecks() {
    try {
      console.log('🔍 Running quality checks...');
      
      // Check code coverage if available
      try {
        const coverageOutput = execSync('npm run test:coverage', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        const coverage = this.parseCoverageOutput(coverageOutput);
        
        if (coverage.total > 0) {
          this.qualityResults.coverage = coverage;
          
          this.successes.push({
            type: 'coverage',
            message: `Code coverage: ${coverage.percentage}%`,
            percentage: coverage.percentage,
            timestamp: new Date().toISOString()
          });
          
          console.log(`✅ Code coverage: ${coverage.percentage}%`);
          
          if (coverage.percentage < 80) {
            this.issues.push({
              type: 'coverage',
              severity: 'warning',
              message: `Code coverage is below 80%: ${coverage.percentage}%`,
              percentage: coverage.percentage,
              timestamp: new Date().toISOString()
            });
            
            console.log(`⚠️  Code coverage is below 80%: ${coverage.percentage}%`);
          }
        }
        
      } catch (error) {
        console.log('ℹ️  Code coverage not available');
      }
      
      // Check bundle size
      if (this.buildResults.bundleSize) {
        if (this.buildResults.bundleSize > 10 * 1024 * 1024) { // 10MB
          this.issues.push({
            type: 'bundle_size',
            severity: 'warning',
            message: `Bundle size is large: ${this.formatBytes(this.buildResults.bundleSize)}`,
            size: this.buildResults.bundleSize,
            timestamp: new Date().toISOString()
          });
          
          console.log(`⚠️  Bundle size is large: ${this.formatBytes(this.buildResults.bundleSize)}`);
        } else {
          this.successes.push({
            type: 'bundle_size',
            message: `Bundle size is acceptable: ${this.formatBytes(this.buildResults.bundleSize)}`,
            size: this.buildResults.bundleSize,
            timestamp: new Date().toISOString()
          });
          
          console.log(`✅ Bundle size is acceptable: ${this.formatBytes(this.buildResults.bundleSize)}`);
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error running quality checks:', error.message);
    }
  }

  async runSecurityChecks() {
    try {
      console.log('🔒 Running security checks...');
      
      // Run npm audit
      try {
        const auditOutput = execSync('npm audit --audit-level=moderate', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        this.successes.push({
          type: 'security_audit',
          message: 'Security audit completed successfully',
          timestamp: new Date().toISOString()
        });
        
        console.log('✅ Security audit completed successfully');
        
      } catch (error) {
        this.issues.push({
          type: 'security_audit',
          severity: 'warning',
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

  async generateBuildArtifacts() {
    try {
      console.log('📦 Generating build artifacts...');
      
      // Create build summary
      const buildSummary = {
        timestamp: new Date().toISOString(),
        build: this.buildResults,
        tests: this.testResults,
        quality: this.qualityResults,
        summary: {
          totalTasks: this.successes.length + this.issues.length,
          successfulTasks: this.successes.length,
          failedTasks: this.issues.length,
          status: this.issues.length === 0 ? 'success' : 'issues_found'
        }
      };
      
      const summaryPath = path.join(this.reportDir, 'daily-build-summary.json');
      fs.writeFileSync(summaryPath, JSON.stringify(buildSummary, null, 2));
      
      console.log('✅ Build artifacts generated');
      
    } catch (error) {
      console.log('ℹ️  Error generating build artifacts:', error.message);
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

  getDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          totalSize += this.getDirectorySize(itemPath);
        } else {
          totalSize += stats.size;
        }
      }
    } catch (error) {
      console.log(`ℹ️  Error calculating directory size for ${dirPath}:`, error.message);
    }
    
    return totalSize;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      buildResults: this.buildResults,
      testResults: this.testResults,
      qualityResults: this.qualityResults,
      issues: this.issues,
      successes: this.successes,
      summary: {
        totalTasks: this.successes.length + this.issues.length,
        successfulTasks: this.successes.length,
        failedTasks: this.issues.length,
        status: this.issues.length === 0 ? 'success' : 'issues_found'
      }
    };

    const reportPath = path.join(this.reportDir, 'daily-build-test-report.json');
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

    const reportPath = path.join(this.reportDir, 'daily-build-test-error.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

// Run the automation
const dailyBuild = new DailyBuildTest();
dailyBuild.run().catch(console.error);