#!/usr/bin/env node
/**
 * Comprehensive Test Suite for PM2
 * Runs all types of tests and validations
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveTestSuite {
  constructor() {
    this.processName = process.env.PM2_PROCESS_NAME || 'comprehensive-test-suite';
    this.logFile = path.join(__dirname, '../../logs/pm2/comprehensive-test-suite.log');
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
    const logMessage = `[${timestamp}] [${this.processName}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runUnitTests() {
    this.log('Running unit tests...');
    try {
      const testResult = execSync('npm test -- --passWithNoTests', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      this.log('Unit tests completed successfully');
      return {
        success: true,
        output: testResult
      };
    } catch (error) {
      this.log(`Unit tests failed: ${error.message}`);
      return {
        success: false,
        error: error.message,
        output: error.stdout || ''
      };
    }
  }

  async runLinting() {
    this.log('Running linting...');
    try {
      const lintResult = execSync('npm run lint', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      this.log('Linting completed successfully');
      return {
        success: true,
        output: lintResult
      };
    } catch (error) {
      this.log(`Linting failed: ${error.message}`);
      return {
        success: false,
        error: error.message,
        output: error.stdout || ''
      };
    }
  }

  async runTypeCheck() {
    this.log('Running type checking...');
    try {
      const typeResult = execSync('npx tsc --noEmit', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      this.log('Type checking completed successfully');
      return {
        success: true,
        output: typeResult
      };
    } catch (error) {
      this.log(`Type checking failed: ${error.message}`);
      return {
        success: false,
        error: error.message,
        output: error.stdout || ''
      };
    }
  }

  async runBuildTest() {
    this.log('Running build test...');
    try {
      // Clean previous build
      if (fs.existsSync('.next')) {
        execSync('rm -rf .next', { stdio: 'pipe' });
      }
      if (fs.existsSync('dist')) {
        execSync('rm -rf dist', { stdio: 'pipe' });
      }

      const buildResult = execSync('npm run build', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      this.log('Build test completed successfully');
      return {
        success: true,
        output: buildResult
      };
    } catch (error) {
      this.log(`Build test failed: ${error.message}`);
      return {
        success: false,
        error: error.message,
        output: error.stdout || ''
      };
    }
  }

  async runSecurityAudit() {
    this.log('Running security audit...');
    try {
      const auditResult = execSync('npm audit --audit-level=moderate', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      this.log('Security audit completed successfully');
      return {
        success: true,
        output: auditResult
      };
    } catch (error) {
      this.log(`Security audit failed: ${error.message}`);
      return {
        success: false,
        error: error.message,
        output: error.stdout || ''
      };
    }
  }

  async runAccessibilityTest() {
    this.log('Running accessibility test...');
    try {
      // Check if there are any HTML files to test
      const htmlFiles = this.findHTMLFiles();
      if (htmlFiles.length === 0) {
        this.log('No HTML files found for accessibility testing');
        return {
          success: true,
          skipped: true,
          message: 'No HTML files found'
        };
      }

      // Basic accessibility checks
      const issues = [];
      for (const file of htmlFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const fileIssues = this.checkAccessibility(content, file);
        issues.push(...fileIssues);
      }

      this.log(`Accessibility test completed - found ${issues.length} issues`);
      return {
        success: issues.length === 0,
        issues,
        totalIssues: issues.length
      };
    } catch (error) {
      this.log(`Accessibility test failed: ${error.message}`);
      return {
        success: false,
        error: error.message
      };
    }
  }

  findHTMLFiles() {
    const htmlFiles = [];
    const scanDir = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            scanDir(filePath);
          } else if (stat.isFile() && (file.endsWith('.html') || file.endsWith('.htm'))) {
            htmlFiles.push(filePath);
          }
        }
      } catch (err) {
        // Skip directories that can't be read
      }
    };

    const scanDirs = ['public', 'dist', 'out', 'build', 'pages'];
    for (const dir of scanDirs) {
      if (fs.existsSync(dir)) {
<<<<<<< HEAD
        scanDir(dir)
    return htmlFiles
  checkAccessibility($2) {
=======
        scanDir(dir);
      }
    }

    return htmlFiles;
  }

  checkAccessibility(content, filePath) {
    const issues = [];
    
>>>>>>> origin/chore/fix-lint-and-merge
    // Check for basic accessibility elements
    if (!content.includes('<title>')) {
      issues.push({
        file: filePath,
        type: 'missing_title',
        severity: 'high',
        message: 'Missing title tag'
      });
    }

    if (!content.includes('lang=')) {
      issues.push({
        file: filePath,
        type: 'missing_lang',
        severity: 'medium',
        message: 'Missing lang attribute'
      });
    }

    // Check for alt attributes on images
    const imgTags = content.match(/<img[^>]*>/g) || [];
    for (const imgTag of imgTags) {
      if (!imgTag.includes('alt=')) {
        issues.push({
          file: filePath,
          type: 'missing_alt',
          severity: 'high',
          message: 'Image missing alt attribute'
        });
      }
    }

    return issues;
  }

  async generateTestReport() {
    this.log('Generating comprehensive test report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      processName: this.processName,
      tests: {
        unit: await this.runUnitTests(),
        linting: await this.runLinting(),
        typeCheck: await this.runTypeCheck(),
        build: await this.runBuildTest(),
        security: await this.runSecurityAudit(),
        accessibility: await this.runAccessibilityTest()
      },
      summary: {
        total: 0,
        passed: 0,
        failed: 0,
        skipped: 0
      }
    };

    // Calculate summary
    Object.values(report.tests).forEach(test => {
      report.summary.total++;
      if (test.success) {
        report.summary.passed++;
      } else if (test.skipped) {
        report.summary.skipped++;
      } else {
        report.summary.failed++;
      }
    });

    const reportFile = path.join(__dirname, '../../logs/pm2/comprehensive-test-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log(`Comprehensive test report saved to ${reportFile}`);

    return report;
  }

  async start() {
    this.log(`${this.processName} started`);
    try {
      const report = await this.generateTestReport();
      
      this.log(`Test suite completed: ${report.summary.passed}/${report.summary.total} tests passed`);
      
      if (report.summary.failed > 0) {
        this.log(`❌ ${report.summary.failed} tests failed`);
        process.exit(1);
      } else {
        this.log('✅ All tests passed');
      }
    } catch (error) {
      this.log(`Test suite error: ${error.message}`);
      process.exit(1);
    }
  }
}

// Start the service
if (require.main === module) {
  const testSuite = new ComprehensiveTestSuite();
  testSuite.start().catch(console.error);
}

module.exports = ComprehensiveTestSuite;