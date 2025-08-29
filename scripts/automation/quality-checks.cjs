#!/usr/bin/env node

/**
 * Quality Checks Automation
 * Replaces GitHub Actions for code quality monitoring
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class QualityChecks {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 3600000; // 1 hour default
    this.reportFile = path.join(process.cwd(), 'quality-report.json');
    this.issues = [];
    this.metrics = {};
  }

  async start() {
    console.log('🚀 Quality Checks Automation Started');
    console.log(`⏰ Running every ${this.interval / 1000} seconds`);
    
    // Run immediately
    await this.run();
    
    // Schedule recurring runs
    setInterval(async () => {
      await this.run();
    }, this.interval);
  }

  async run() {
    try {
      console.log('🔍 Running quality checks...');
      
      // Run ESLint
      await this.runESLint();
      
      // Run TypeScript checks
      await this.runTypeScriptCheck();
      
      // Check code coverage
      await this.checkCodeCoverage();
      
      // Check bundle size
      await this.checkBundleSize();
      
      // Generate report
      await this.generateReport();
      
      console.log(`✅ Quality checks complete. Found ${this.issues.length} issues.`);
      
    } catch (error) {
      console.error('❌ Error in quality checks:', error);
    }
  }

  async runESLint() {
    try {
      console.log('📝 Running ESLint...');
      const result = execSync('npm run lint', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.metrics.eslint = {
        status: 'passed',
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      const output = error.stdout || error.stderr || error.message;
      this.issues.push({
        type: 'eslint',
        severity: 'medium',
        message: 'ESLint found issues',
        details: output,
        timestamp: new Date().toISOString()
      });
      
      this.metrics.eslint = {
        status: 'failed',
        issues: this.issues.filter(i => i.type === 'eslint').length,
        timestamp: new Date().toISOString()
      };
    }
  }

  async runTypeScriptCheck() {
    try {
      console.log('🔧 Running TypeScript check...');
      const result = execSync('npm run type-check', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      this.metrics.typescript = {
        status: 'passed',
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      const output = error.stdout || error.stderr || error.message;
      this.issues.push({
        type: 'typescript',
        severity: 'high',
        message: 'TypeScript check failed',
        details: output,
        timestamp: new Date().toISOString()
      });
      
      this.metrics.typescript = {
        status: 'failed',
        issues: this.issues.filter(i => i.type === 'typescript').length,
        timestamp: new Date().toISOString()
      };
    }
  }

  async checkCodeCoverage() {
    try {
      console.log('📊 Checking code coverage...');
      
      // Check if test coverage files exist
      const coverageDir = path.join(process.cwd(), 'coverage');
      if (fs.existsSync(coverageDir)) {
        const coverageFile = path.join(coverageDir, 'lcov-report', 'index.html');
        if (fs.existsSync(coverageFile)) {
          this.metrics.coverage = {
            status: 'available',
            path: coverageFile,
            timestamp: new Date().toISOString()
          };
        } else {
          this.metrics.coverage = {
            status: 'no-report',
            timestamp: new Date().toISOString()
          };
        }
      } else {
        this.metrics.coverage = {
          status: 'no-coverage',
          timestamp: new Date().toISOString()
        };
      }
      
    } catch (error) {
      console.error('Error checking code coverage:', error);
      this.metrics.coverage = {
        status: 'error',
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async checkBundleSize() {
    try {
      console.log('📦 Checking bundle size...');
      
      // Run build to analyze bundle
      const result = execSync('npm run build', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Check dist directory size
      const distDir = path.join(process.cwd(), 'dist');
      if (fs.existsSync(distDir)) {
        const size = this.getDirectorySize(distDir);
        this.metrics.bundleSize = {
          size: size,
          sizeMB: (size / (1024 * 1024)).toFixed(2),
          timestamp: new Date().toISOString()
        };
        
        // Check if bundle size is reasonable
        if (size > 10 * 1024 * 1024) { // 10MB
          this.issues.push({
            type: 'bundle-size',
            severity: 'medium',
            message: 'Bundle size is large',
            details: `Bundle size: ${(size / (1024 * 1024)).toFixed(2)}MB`,
            timestamp: new Date().toISOString()
          });
        }
      }
      
    } catch (error) {
      console.error('Error checking bundle size:', error);
      this.metrics.bundleSize = {
        status: 'error',
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  getDirectorySize(dirPath) {
    let size = 0;
    
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath);
      
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          size += this.getDirectorySize(filePath);
        } else {
          size += stat.size;
        }
      }
    }
    
    return size;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      issues: this.issues,
      metrics: this.metrics,
      summary: {
        totalIssues: this.issues.length,
        byType: this.groupByType(this.issues),
        bySeverity: this.groupBySeverity(this.issues),
        overallStatus: this.getOverallStatus()
      }
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📊 Quality report generated: ${this.reportFile}`);
  }

  groupByType(issues) {
    return issues.reduce((acc, issue) => {
      acc[issue.type] = (acc[issue.type] || 0) + 1;
      return acc;
    }, {});
  }

  groupBySeverity(issues) {
    return issues.reduce((acc, issue) => {
      acc[issue.severity] = (acc[issue.severity] || 0) + 1;
      return acc;
    }, {});
  }

  getOverallStatus() {
    const highIssues = this.issues.filter(i => i.severity === 'high').length;
    const mediumIssues = this.issues.filter(i => i.severity === 'medium').length;
    
    if (highIssues > 0) return 'critical';
    if (mediumIssues > 5) return 'warning';
    if (mediumIssues > 0) return 'attention';
    return 'good';
  }
}

// Start the automation
const qualityChecks = new QualityChecks();
qualityChecks.start().catch(console.error);