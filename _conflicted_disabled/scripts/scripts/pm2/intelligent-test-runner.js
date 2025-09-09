#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentTestRunner {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/intelligent-test-runner.log');
    this.testReportFile = path.join(this.projectRoot, 'logs/pm2/intelligent-test-report.json');
    this.learningDataFile = path.join(this.projectRoot, 'logs/pm2/test-learning-data.json');
    this.coverageDataFile = path.join(this.projectRoot, 'logs/pm2/test-coverage-data.json');
    this.startTime = Date.now();
    
    this.testMetrics = {
      totalTests: 0,
      passedTests: 0,
      failedTests: 0,
      skippedTests: 0,
      coverage: 0,
      executionTime: 0,
      failureRate: 0
    };
    
    this.learningData = this.loadLearningData();
    this.coverageData = this.loadCoverageData();
    this.testHistory = [];
    this.failurePatterns = {};
    this.testPriorities = {};
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    try {
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // Silent fail for logging
    }
  }

  loadLearningData() {
    try {
      if (fs.existsSync(this.learningDataFile)) {
        return JSON.parse(fs.readFileSync(this.learningDataFile, 'utf8'));
      }
    } catch (error) {
      this.log('Failed to load learning data, starting fresh');
    }
    return {
      testFailureHistory: {},
      executionPatterns: {},
      coverageTrends: {},
      performanceMetrics: {},
      lastUpdated: Date.now()
    };
  }

  loadCoverageData() {
    try {
      if (fs.existsSync(this.coverageDataFile)) {
        return JSON.parse(fs.readFileSync(this.coverageDataFile, 'utf8'));
      }
    } catch (error) {
      this.log('Failed to load coverage data, starting fresh');
    }
    return {
      fileCoverage: {},
      functionCoverage: {},
      branchCoverage: {},
      lineCoverage: {},
      uncoveredAreas: [],
      lastUpdated: Date.now()
    };
  }

  saveLearningData() {
    try {
      this.learningData.lastUpdated = Date.now();
      fs.writeFileSync(this.learningDataFile, JSON.stringify(this.learningData, null, 2));
    } catch (error) {
      this.log('Failed to save learning data');
    }
  }

  saveCoverageData() {
    try {
      this.coverageData.lastUpdated = Date.now();
      fs.writeFileSync(this.coverageDataFile, JSON.stringify(this.coverageData, null, 2));
    } catch (error) {
      this.log('Failed to save coverage data');
    }
  }

  async runIntelligentTests() {
    this.log('🧠 Starting Intelligent Test Execution...');
    
    try {
      // Analyze test files and determine priorities
      const testFiles = this.discoverTestFiles();
      this.log(`Found ${testFiles.length} test files`);

      // Prioritize tests based on failure probability
      const prioritizedTests = this.prioritizeTests(testFiles);
      
      // Run tests in priority order
      const results = await this.executeTests(prioritizedTests);
      
      // Analyze results and learn
      this.analyzeTestResults(results);
      
      // Generate coverage report
      await this.generateCoverageReport();
      
      // Generate comprehensive test report
      await this.generateTestReport(results);
      
      this.log(`✅ Intelligent Test Execution complete!`);
      this.log(`📊 Results: ${this.testMetrics.passedTests} passed, ${this.testMetrics.failedTests} failed, ${this.testMetrics.skippedTests} skipped`);
      this.log(`📈 Coverage: ${this.testMetrics.coverage.toFixed(1)}%`);
      
    } catch (error) {
      this.log(`❌ Error during intelligent test execution: ${error.message}`);
    }
  }

  discoverTestFiles() {
    const testFiles = [];
    const testDirs = ['tests', 'src', 'pages', 'components', '__tests__'];
    
    testDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        this.walkDirectory(dir, testFiles);
      }
    });

    return testFiles.filter(file => 
      (file.includes('.test.') || file.includes('.spec.') || file.includes('__tests__')) &&
      /\.(js|jsx|ts|tsx)$/.test(file) &&
      !file.includes('node_modules') &&
      !file.includes('.git')
    );
  }

  walkDirectory(dir, files) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.walkDirectory(fullPath, files);
      } else {
        files.push(fullPath);
      }
    });
  }

  prioritizeTests(testFiles) {
    const prioritized = testFiles.map(file => {
      const priority = this.calculateTestPriority(file);
      return {
        file,
        priority,
        failureProbability: this.calculateFailureProbability(file),
        executionTime: this.estimateExecutionTime(file),
        coverageImpact: this.calculateCoverageImpact(file)
      };
    });

    // Sort by priority (highest first)
    return prioritized.sort((a, b) => b.priority - a.priority);
  }

  calculateTestPriority(file) {
    let priority = 50; // base priority
    
    // Higher priority for recently modified files
    try {
      const stats = fs.statSync(file);
      const hoursSinceModified = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
      if (hoursSinceModified < 24) priority += 30;
      else if (hoursSinceModified < 168) priority += 20; // 1 week
      else if (hoursSinceModified < 720) priority += 10; // 1 month
    } catch (error) {
      // File not accessible
    }

    // Higher priority for files with recent failures
    if (this.learningData.testFailureHistory[file]) {
      const recentFailures = this.learningData.testFailureHistory[file].filter(
        failure => (Date.now() - failure.timestamp) < (24 * 60 * 60 * 1000) // Last 24 hours
      );
      priority += recentFailures.length * 10;
    }

    // Higher priority for core functionality
    if (file.includes('core') || file.includes('utils') || file.includes('api')) {
      priority += 20;
    }

    // Higher priority for components with high user impact
    if (file.includes('pages') || file.includes('components')) {
      priority += 15;
    }

    return Math.min(100, priority);
  }

  calculateFailureProbability(file) {
    if (!this.learningData.testFailureHistory[file]) {
      return 0.1; // 10% base failure rate for new tests
    }

    const failures = this.learningData.testFailureHistory[file];
    const totalRuns = failures.length;
    const failureCount = failures.filter(f => f.result === 'failed').length;
    
    return totalRuns > 0 ? failureCount / totalRuns : 0.1;
  }

  estimateExecutionTime(file) {
    // Estimate based on file size and complexity
    try {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n').length;
      const testCount = (content.match(/test\s*\(/g) || []).length;
      const describeCount = (content.match(/describe\s*\(/g) || []).length;
      
      // Base time per test + setup/teardown time
      return (testCount * 0.5) + (describeCount * 0.2) + (lines * 0.01);
    } catch (error) {
      return 1.0; // default estimate
    }
  }

  calculateCoverageImpact(file) {
    // Calculate potential coverage impact based on file size and dependencies
    try {
      const content = fs.readFileSync(file, 'utf8);
      const lines = content.split('\n').length;
      const imports = (content.match(/import\s+.*from/g) || []).length;
      const exports = (content.match(/export\s+/g) || []).length;
      
      return Math.min(100, (lines * 0.5) + (imports * 5) + (exports * 3));
    } catch (error) {
      return 50; // default impact
    }
  }

  async executeTests(prioritizedTests) {
    const results = [];
    let totalExecutionTime = 0;

    this.log(`🚀 Executing ${prioritizedTests.length} tests in priority order...`);

    for (const test of prioritizedTests) {
      try {
        this.log(`▶️  Running ${test.file} (Priority: ${test.priority}, Failure Probability: ${(test.failureProbability * 100).toFixed(1)}%)`);
        
        const startTime = Date.now();
        const result = await this.runSingleTest(test.file);
        const executionTime = Date.now() - startTime;
        
        totalExecutionTime += executionTime;
        
        results.push({
          file: test.file,
          priority: test.priority,
          failureProbability: test.failureProbability,
          estimatedTime: test.executionTime,
          actualTime: executionTime,
          result: result.success ? 'passed' : 'failed',
          output: result.output,
          error: result.error,
          timestamp: Date.now()
        });

        // Update learning data
        this.updateTestHistory(test.file, result.success ? 'passed' : 'failed', executionTime);

        // If test failed, consider running related tests
        if (!result.success) {
          this.log(`⚠️  Test failed: ${test.file}`);
          const relatedTests = this.findRelatedTests(test.file);
          if (relatedTests.length > 0) {
            this.log(`🔍 Found ${relatedTests.length} related tests that may also fail`);
          }
        }

      } catch (error) {
        this.log(`❌ Error executing test ${test.file}: ${error.message}`);
        results.push({
          file: test.file,
          priority: test.priority,
          failureProbability: test.failureProbability,
          estimatedTime: test.executionTime,
          actualTime: 0,
          result: 'error',
          output: '',
          error: error.message,
          timestamp: Date.now()
        });
      }
    }

    this.testMetrics.executionTime = totalExecutionTime;
    return results;
  }

  async runSingleTest(testFile) {
    try {
      // Determine test runner based on file extension and project setup
      const testRunner = this.determineTestRunner(testFile);
      
      if (testRunner === 'jest') {
        return this.runJestTest(testFile);
      } else if (testRunner === 'vitest') {
        return this.runVitestTest(testFile);
      } else {
        return this.runGenericTest(testFile);
      }
    } catch (error) {
      return {
        success: false,
        output: '',
        error: error.message
      };
    }
  }

  determineTestRunner(testFile) {
    // Check for Jest configuration
    if (fs.existsSync('jest.config.js') || fs.existsSync('jest.config.cjs')) {
      return 'jest';
    }
    
    // Check for Vitest configuration
    if (fs.existsSync('vitest.config.ts') || fs.existsSync('vitest.config.js')) {
      return 'vitest';
    }
    
    // Check package.json scripts
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      if (packageJson.scripts.test && packageJson.scripts.test.includes('jest')) {
        return 'jest';
      }
      if (packageJson.scripts.test && packageJson.scripts.test.includes('vitest')) {
        return 'vitest';
      }
    } catch (error) {
      // Ignore package.json parsing errors
    }
    
    return 'generic';
  }

  async runJestTest(testFile) {
    try {
      const output = execSync(`npx jest ${testFile} --verbose --no-coverage`, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000 // 30 second timeout
      });
      
      return {
        success: true,
        output,
        error: null
      };
    } catch (error) {
      return {
        success: false,
        output: error.stdout || '',
        error: error.stderr || error.message
      };
    }
  }

  async runVitestTest(testFile) {
    try {
      const output = execSync(`npx vitest run ${testFile} --reporter=verbose`, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000 // 30 second timeout
      });
      
      return {
        success: true,
        output,
        error: null
      };
    } catch (error) {
      return {
        success: false,
        output: error.stdout || '',
        error: error.stderr || error.message
      };
    }
  }

  async runGenericTest(testFile) {
    try {
      // Try to run with Node.js directly
      const output = execSync(`node ${testFile}`, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 30000 // 30 second timeout
      });
      
      return {
        success: true,
        output,
        error: null
      };
    } catch (error) {
      return {
        success: false,
        output: error.stdout || '',
        error: error.stderr || error.message
      };
    }
  }

  findRelatedTests(failedTestFile) {
    // Find tests that may be related based on imports, file paths, or naming
    const relatedTests = [];
    const testFiles = this.discoverTestFiles();
    
    const failedTestName = path.basename(failedTestFile, path.extname(failedTestFile));
    const failedTestDir = path.dirname(failedTestFile);
    
    testFiles.forEach(testFile => {
      if (testFile !== failedTestFile) {
        let related = false;
        
        // Check if tests are in the same directory
        if (path.dirname(testFile) === failedTestDir) {
          related = true;
        }
        
        // Check if test names are similar
        const testName = path.basename(testFile, path.extname(testFile));
        if (testName.includes(failedTestName) || failedTestName.includes(testName)) {
          related = true;
        }
        
        // Check if tests import the same source files
        try {
          const content = fs.readFileSync(testFile, 'utf8');
          const failedContent = fs.readFileSync(failedTestFile, 'utf8');
          
          // Extract import statements
          const imports = content.match(/import\s+.*from\s+['"]([^'"]+)['"]/g) || [];
          const failedImports = failedContent.match(/import\s+.*from\s+['"]([^'"]+)['"]/g) || [];
          
          // Check for common imports
          imports.forEach(importStmt => {
            failedImports.forEach(failedImportStmt => {
              if (importStmt === failedImportStmt) {
                related = true;
              }
            });
          });
        } catch (error) {
          // Ignore file reading errors
        }
        
        if (related) {
          relatedTests.push(testFile);
        }
      }
    });
    
    return relatedTests;
  }

  updateTestHistory(testFile, result, executionTime) {
    if (!this.learningData.testFailureHistory[testFile]) {
      this.learningData.testFailureHistory[testFile] = [];
    }
    
    this.learningData.testFailureHistory[testFile].push({
      timestamp: Date.now(),
      result,
      executionTime
    });
    
    // Keep only last 20 results per test file
    if (this.learningData.testFailureHistory[testFile].length > 20) {
      this.learningData.testFailureHistory[testFile] = 
        this.learningData.testFailureHistory[testFile].slice(-20);
    }
    
    this.saveLearningData();
  }

  analyzeTestResults(results) {
    // Calculate test metrics
    this.testMetrics.totalTests = results.length;
    this.testMetrics.passedTests = results.filter(r => r.result === 'passed').length;
    this.testMetrics.failedTests = results.filter(r => r.result === 'failed').length;
    this.testMetrics.skippedTests = results.filter(r => r.result === 'skipped').length;
    
    if (this.testMetrics.totalTests > 0) {
      this.testMetrics.failureRate = this.testMetrics.failedTests / this.testMetrics.totalTests;
    }
    
    // Analyze failure patterns
    this.analyzeFailurePatterns(results);
    
    // Update test priorities based on results
    this.updateTestPriorities(results);
    
    // Add to test history
    this.testHistory.push({
      timestamp: Date.now(),
      metrics: { ...this.testMetrics },
      results: results.map(r => ({
        file: r.file,
        result: r.result,
        executionTime: r.actualTime
      }))
    });
    
    // Keep only last 50 test runs
    if (this.testHistory.length > 50) {
      this.testHistory = this.testHistory.slice(-50);
    }
  }

  analyzeFailurePatterns(results) {
    const failures = results.filter(r => r.result === 'failed');
    
    failures.forEach(failure => {
      const fileKey = failure.file;
      
      if (!this.failurePatterns[fileKey]) {
        this.failurePatterns[fileKey] = {
          count: 0,
          lastFailure: null,
          commonErrors: {},
          executionTimes: []
        };
      }
      
      this.failurePatterns[fileKey].count++;
      this.failurePatterns[fileKey].lastFailure = failure.timestamp;
      this.failurePatterns[fileKey].executionTimes.push(failure.actualTime);
      
      // Track common error patterns
      if (failure.error) {
        const errorKey = this.categorizeError(failure.error);
        if (!this.failurePatterns[fileKey].commonErrors[errorKey]) {
          this.failurePatterns[fileKey].commonErrors[errorKey] = 0;
        }
        this.failurePatterns[fileKey].commonErrors[errorKey]++;
      }
    });
  }

  categorizeError(errorMessage) {
    if (errorMessage.includes('timeout')) return 'timeout';
    if (errorMessage.includes('assertion')) return 'assertion';
    if (errorMessage.includes('syntax')) return 'syntax';
    if (errorMessage.includes('import')) return 'import';
    if (errorMessage.includes('module')) return 'module';
    if (errorMessage.includes('permission')) return 'permission';
    return 'other';
  }

  updateTestPriorities(results) {
    results.forEach(result => {
      const fileKey = result.file;
      
      if (!this.testPriorities[fileKey]) {
        this.testPriorities[fileKey] = 50; // base priority
      }
      
      // Adjust priority based on results
      if (result.result === 'failed') {
        // Increase priority for failed tests
        this.testPriorities[fileKey] = Math.min(100, this.testPriorities[fileKey] + 10);
      } else if (result.result === 'passed') {
        // Slightly decrease priority for consistently passing tests
        this.testPriorities[fileKey] = Math.max(20, this.testPriorities[fileKey] - 2);
      }
    });
  }

  async generateCoverageReport() {
    try {
      this.log('📊 Generating coverage report...');
      
      // Try to run coverage analysis
      let coverageOutput = '';
      try {
        if (fs.existsSync('jest.config.js') || fs.existsSync('jest.config.cjs')) {
          coverageOutput = execSync('npx jest --coverage --silent', {
            cwd: this.projectRoot,
            encoding: 'utf8',
            timeout: 60000 // 1 minute timeout
          });
        } else if (fs.existsSync('vitest.config.ts') || fs.existsSync('vitest.config.js')) {
          coverageOutput = execSync('npx vitest run --coverage --reporter=json', {
            cwd: this.projectRoot,
            encoding: 'utf8',
            timeout: 60000 // 1 minute timeout
          });
        }
      } catch (error) {
        this.log('Coverage analysis failed, using estimated coverage');
      }
      
      // Parse coverage data or use estimates
      this.parseCoverageData(coverageOutput);
      
      // Update coverage data
      this.saveCoverageData();
      
    } catch (error) {
      this.log(`Error generating coverage report: ${error.message}`);
    }
  }

  parseCoverageData(coverageOutput) {
    try {
      // Try to extract coverage percentage from output
      const coverageMatch = coverageOutput.match(/All files\s+\|\s+(\d+(?:\.\d+)?)/);
      if (coverageMatch) {
        this.testMetrics.coverage = parseFloat(coverageMatch[1]);
      } else {
        // Estimate coverage based on test results
        this.testMetrics.coverage = this.estimateCoverage();
      }
    } catch (error) {
      this.testMetrics.coverage = this.estimateCoverage();
    }
  }

  estimateCoverage() {
    // Estimate coverage based on test file coverage and test results
    const testFiles = this.discoverTestFiles();
    const sourceFiles = this.getSourceFiles();
    
    if (sourceFiles.length === 0) return 0;
    
    // Calculate coverage based on test file to source file ratio
    const testToSourceRatio = testFiles.length / sourceFiles.length;
    const baseCoverage = Math.min(100, testToSourceRatio * 100);
    
    // Adjust based on test success rate
    const successRate = this.testMetrics.totalTests > 0 ? 
      this.testMetrics.passedTests / this.testMetrics.totalTests : 0;
    
    return Math.min(100, baseCoverage * (0.5 + successRate * 0.5));
  }

  getSourceFiles() {
    const sourceDirs = ['src', 'pages', 'components', 'utils'];
    const sourceFiles = [];
    
    sourceDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        this.walkDirectory(dir, sourceFiles);
      }
    });

    return sourceFiles.filter(file => 
      /\.(js|jsx|ts|tsx)$/.test(file) && 
      !file.includes('node_modules') && 
      !file.includes('.git') &&
      !file.includes('.test.') &&
      !file.includes('.spec.')
    );
  }

  async generateTestReport(results) {
    const report = {
      timestamp: Date.now(),
      summary: {
        totalTests: this.testMetrics.totalTests,
        passedTests: this.testMetrics.passedTests,
        failedTests: this.testMetrics.failedTests,
        skippedTests: this.testMetrics.skippedTests,
        coverage: this.testMetrics.coverage,
        executionTime: this.testMetrics.executionTime,
        failureRate: this.testMetrics.failureRate
      },
      testResults: results,
      failurePatterns: this.failurePatterns,
      testPriorities: this.testPriorities,
      recommendations: this.generateTestRecommendations(results),
      coverageData: this.coverageData
    };

    try {
      fs.writeFileSync(this.testReportFile, JSON.stringify(report, null, 2));
      this.log('📊 Intelligent Test Report generated');
    } catch (error) {
      this.log('Failed to generate test report');
    }
  }

  generateTestRecommendations(results) {
    const recommendations = [];

    // High failure rate recommendations
    if (this.testMetrics.failureRate > 0.2) {
      recommendations.push({
        type: 'failure-rate',
        priority: 'critical',
        description: `High test failure rate: ${(this.testMetrics.failureRate * 100).toFixed(1)}%`,
        actions: [
          'Review failing tests and fix underlying issues',
          'Check for environment or dependency problems',
          'Improve test isolation and setup',
          'Consider test flakiness and timing issues'
        ]
      });
    }

    // Low coverage recommendations
    if (this.testMetrics.coverage < 70) {
      recommendations.push({
        type: 'coverage',
        priority: 'high',
        description: `Low test coverage: ${this.testMetrics.coverage.toFixed(1)}%`,
        actions: [
          'Add tests for uncovered functionality',
          'Focus on critical business logic',
          'Implement coverage goals and monitoring',
          'Consider mutation testing for quality'
        ]
      });
    }

    // Performance recommendations
    if (this.testMetrics.executionTime > 60000) { // More than 1 minute
      recommendations.push({
        type: 'performance',
        priority: 'medium',
        description: 'Slow test execution detected',
        actions: [
          'Optimize slow tests',
          'Implement test parallelization',
          'Use test sharding for large test suites',
          'Consider test isolation improvements'
        ]
      });
    }

    // Specific failure pattern recommendations
    Object.entries(this.failurePatterns).forEach(([file, pattern]) => {
      if (pattern.count > 3) {
        recommendations.push({
          type: 'recurring-failures',
          priority: 'high',
          description: `Recurring failures in ${path.basename(file)}`,
          actions: [
            'Investigate root cause of failures',
            'Improve test stability and isolation',
            'Consider test refactoring',
            'Add debugging and logging'
          ]
        });
      }
    });

    return recommendations;
  }

  async start() {
    this.log('🚀 Intelligent Test Runner started');
    
    // Run initial test execution
    await this.runIntelligentTests();
    
    // Schedule periodic test runs
    setInterval(async () => {
      await this.runIntelligentTests();
    }, 3 * 60 * 60 * 1000); // Every 3 hours
  }
}

// Start the Intelligent Test Runner
const runner = new IntelligentTestRunner();
runner.start().catch(error => {
  console.error('Intelligent Test Runner failed to start:', error);
  process.exit(1);
});