#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentTestOrchestrator {
  constructor() {
    this.workspaceRoot = '/workspace';
    this.reportFile = path.join(this.workspaceRoot,automation_logs,test-orchestrator-report.json');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.reportFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    console.log(`[Intelligent Test Orchestrator] ${message});
  }

  async runComprehensiveTests() {
    this.log('Starting intelligent test orchestration...);
    
    const testResults = {
      timestamp: new Date().toISOString(),
      suites: {},
      coverage: {},
      issues: [],
      recommendations: [],
      overallScore: 0
    };

    try {
      // Run different test suites
      await this.runSmokeTests(testResults);
      await this.runUnitTests(testResults);
      await this.runIntegrationTests(testResults);
      await this.runAccessibilityTests(testResults);
      await this.runPerformanceTests(testResults);
      
      // Generate coverage report
      await this.generateCoverageReport(testResults);
      
      // Analyze test quality
      this.analyzeTestQuality(testResults);
      
      // Calculate overall score
      testResults.overallScore = this.calculateTestScore(testResults);
      
      // Generate recommendations
      this.generateTestRecommendations(testResults);
      
      // Save report
      fs.writeFileSync(this.reportFile, JSON.stringify(testResults, null, 2));
      
      this.log(`Test orchestration complete. Overall score: ${testResults.overallScore}/100`);
      this.log(`Report saved to: ${this.reportFile});
      
      return testResults;
    } catch (error) {
      this.log(`Error during test orchestration: ${error.message});
      testResults.error = error.message;
      return testResults;
    }
  }

  async runSmokeTests(testResults) {
    this.log('Running smoke tests...);
    
    try {
      const result = execSync('npm run test:smoke, { 
        encoding: utf8, 
        cwd: this.workspaceRoot,
        stdio: pipe});
      
      testResults.suites.smoke = {
        status: passed,
        output: result,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      testResults.suites.smoke = {
        status: failed,
        error: error.message,
        output: error.stdout || error.stderr,
        timestamp: new Date().toISOString()
      };
      
      testResults.issues.push({
        type: smoke,
        severity: high,
        message: Smoke tests failed,
        details: error.message
      });
    }
  }

  async runUnitTests(testResults) {
    this.log('Running unit tests...);
    
    try {
      const result = execSync('npm run test:unit, { 
        encoding: utf8, 
        cwd: this.workspaceRoot,
        stdio: pipe});
      
      testResults.suites.unit = {
        status: passed,
        output: result,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      testResults.suites.unit = {
        status: failed,
        error: error.message,
        output: error.stdout || error.stderr,
        timestamp: new Date().toISOString()
      };
      
      testResults.issues.push({
        type: unit,
        severity: high,
        message: Unit tests failed,
        details: error.message
      });
    }
  }

  async runIntegrationTests(testResults) {
    this.log('Running integration tests...);
    
    try {
      const result = execSync('npm run test:integration, { 
        encoding: utf8, 
        cwd: this.workspaceRoot,
        stdio: pipe});
      
      testResults.suites.integration = {
        status: passed,
        output: result,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      testResults.suites.integration = {
        status: failed,
        error: error.message,
        output: error.stdout || error.stderr,
        timestamp: new Date().toISOString()
      };
      
      testResults.issues.push({
        type: integration,
        severity: medium,
        message: Integration tests failed,
        details: error.message
      });
    }
  }

  async runAccessibilityTests(testResults) {
    this.log('Running accessibility tests...);
    
    try {
      const result = execSync('npm run test:accessibility, { 
        encoding: utf8, 
        cwd: this.workspaceRoot,
        stdio: pipe});
      
      testResults.suites.accessibility = {
        status: passed,
        output: result,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      testResults.suites.accessibility = {
        status: failed,
        error: error.message,
        output: error.stdout || error.stderr,
        timestamp: new Date().toISOString()
      };
      
      testResults.issues.push({
        type: accessibility,
        severity: medium,
        message: Accessibility tests failed,
        details: error.message
      });
    }
  }

  async runPerformanceTests(testResults) {
    this.log('Running performance tests...);
    
    try {
      const result = execSync('npm run test:performance, { 
        encoding: utf8, 
        cwd: this.workspaceRoot,
        stdio: pipe});
      
      testResults.suites.performance = {
        status: passed,
        output: result,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      testResults.suites.performance = {
        status: failed,
        error: error.message,
        output: error.stdout || error.stderr,
        timestamp: new Date().toISOString()
      };
      
      testResults.issues.push({
        type: performance,
        severity: low,
        message: Performance tests failed,
        details: error.message
      });
    }
  }

  async generateCoverageReport(testResults) {
    this.log('Generating coverage report...);
    
    try {
      const result = execSync('npm run test:coverage, { 
        encoding: utf8, 
        cwd: this.workspaceRoot,
        stdio: pipe});
      
      // Try to parse coverage data from output
      const coverageMatch = result.match(/All files\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)\s+\|\s+(\d+\.?\d*)/);
      if (coverageMatch) {
        testResults.coverage = {
          statements: parseFloat(coverageMatch[1]),
          branches: parseFloat(coverageMatch[2]),
          functions: parseFloat(coverageMatch[3]),
          lines: parseFloat(coverageMatch[4])
        };
      } else {
        testResults.coverage = {
          statements: 0,
          branches: 0,
          functions: 0,
          lines: 0
        };
      }
      
    } catch (error) {
      this.log('Coverage report generation failed');
      testResults.coverage = {
        statements: 0,
        branches: 0,
        functions: 0,
        lines: 0
      };
    }
  }

  analyzeTestQuality(testResults) {
    this.log('Analyzing test quality...);
    
    // Check if test files exist
    const testFiles = this.findTestFiles();
    testResults.metrics = {
      totalTestFiles: testFiles.length,
      testSuites: Object.keys(testResults.suites).length,
      passedSuites: Object.values(testResults.suites).filter(suite => suite.status ===passed').length,
      failedSuites: Object.values(testResults.suites).filter(suite => suite.status ===failed').length
    };
    
    // Analyze test file quality
    let qualityIssues = 0;
    testFiles.forEach(file => {
      const content = fs.readFileSync(file,utf8);
      
      if (!content.includes('describe') && !content.includes('test') && !content.includes('it')) {
        qualityIssues++;
        testResults.issues.push({
          type: test-quality,
          severity: warning,
          file: path.relative(this.workspaceRoot, file),
          message: Test file appears to be empty or malformed});
      }
      
      if (content.includes('console.log')) {
        qualityIssues++;
        testResults.issues.push({
          type: test-quality,
          severity: info,
          file: path.relative(this.workspaceRoot, file),
          message: Console.log found in test file});
      }
    });
    
    testResults.metrics.qualityIssues = qualityIssues;
  }

  findTestFiles() {
    const testDirs = [src,tests,__tests__,test];
    let testFiles = [];
    
    testDirs.forEach(dir => {
      const fullPath = path.join(this.workspaceRoot, dir);
      if (fs.existsSync(fullPath)) {
        testFiles = testFiles.concat(this.findFiles(fullPath, [.test.js,.test.ts,.test.tsx,.spec.js,.spec.ts,.spec.tsx]));
      }
    });
    
    return testFiles;
  }

  findFiles(dir, extensions) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.findFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  calculateTestScore(testResults) {
    let score = 0;
    
    // Base score for having tests
    if (testResults.metrics?.totalTestFiles > 0) {
      score += 20;
    }
    
    // Score for passed test suites
    const passedSuites = testResults.metrics?.passedSuites || 0;
    const totalSuites = testResults.metrics?.testSuites || 1;
    score += (passedSuites / totalSuites) * 40;
    
    // Score for coverage
    if (testResults.coverage?.lines > 0) {
      score += Math.min(30, testResults.coverage.lines * 0.3);
    }
    
    // Deduct for issues
    const issueCount = testResults.issues.length;
    score -= Math.min(20, issueCount * 2);
    
    return Math.max(0, Math.min(100, score));
  }

  generateTestRecommendations(testResults) {
    if (testResults.metrics?.totalTestFiles === 0) {
      testResults.recommendations.push({
        priority: high,
        category: coverage,
        message: Create test files for better code coverage});
    }
    
    if (testResults.coverage?.lines < 80) {
      testResults.recommendations.push({
        priority: high,
        category: coverage,
        message: Improve test coverage to at least 80%});
    }
    
    if (testResults.metrics?.failedSuites > 0) {
      testResults.recommendations.push({
        priority: high,
        category: reliability,
        message: Fix failing test suites});
    }
    
    testResults.recommendations.push({
      priority: medium,
      category: quality,
      message: Add integration tests for critical user flows});
    
    testResults.recommendations.push({
      priority: low,
      category: automation,
      message: Set up automated test execution in CI/CD});
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new IntelligentTestOrchestrator();
  orchestrator.runComprehensiveTests().catch(console.error);
}

module.exports = IntelligentTestOrchestrator;