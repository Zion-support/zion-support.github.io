#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentTestAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/test-automation.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/test-report.json');
    this.coverageFile = path.join(this.projectRoot, 'coverage/coverage-summary.json');
    this.startTime = Date.now();
    
    // Configuration from environment variables
    this.config = {
      coverageThreshold: parseInt(process.env.TEST_COVERAGE_THRESHOLD) || 80,
      autoRetryFailed: process.env.AUTO_RETRY_FAILED === 'true',
      parallelTests: process.env.PARALLEL_TESTS === 'true',
      maxRetries: 3,
      testTimeout: 30000, // 30 seconds
      excludePatterns: [
        'node_modules/**',
        'dist/**',
        'build/**',
        'coverage/**',
        '*.test.js',
        '*.spec.js'
      ]
    };
    
    this.testResults = {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
      retries: 0,
      coverage: 0,
      duration: 0
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async discoverTestFiles() {
    this.log('🔍 Discovering test files...');
    
    const testFiles = [];
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !this.isExcluded(fullPath)) {
            scanDirectory(fullPath);
          } else if (this.isTestFile(fullPath)) {
            testFiles.push(fullPath);
          }
        });
      } catch (error) {
        this.log(`Error scanning directory ${dir}: ${error.message}`, 'ERROR');
      }
    };

    scanDirectory(this.projectRoot);
    this.log(`Found ${testFiles.length} test files`);
    return testFiles;
  }

  isExcluded(filePath) {
    return this.config.excludePatterns.some(pattern => {
      const regex = new RegExp(pattern.replace(/\*\*/g, '.*'));
      return regex.test(filePath);
    });
  }

  isTestFile(filePath) {
    const testPatterns = [
      /\.test\.(js|jsx|ts|tsx)$/,
      /\.spec\.(js|jsx|ts|tsx)$/,
      /test\.(js|jsx|ts|tsx)$/,
      /spec\.(js|jsx|ts|tsx)$/
    ];
    
    return testPatterns.some(pattern => pattern.test(filePath));
  }

  async runTests(testFiles, options = {}) {
    this.log('🧪 Running tests...');
    
    const { retry = false, parallel = false } = options;
    
    try {
      let command;
      
      if (parallel && this.config.parallelTests) {
        command = 'npm run test:parallel';
      } else if (testFiles.length > 0) {
        command = `npm test -- ${testFiles.join(' ')}`;
      } else {
        command = 'npm test';
      }

      if (retry) {
        this.log(`🔄 Retrying failed tests (attempt ${options.attempt || 1})`);
      }

      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: this.config.testTimeout
      });

      return { success: true, output: result };
    } catch (error) {
      return { 
        success: false, 
        error: error.message,
        output: error.stdout?.toString() || error.stderr?.toString() || ''
      };
    }
  }

  async analyzeTestOutput(output) {
    this.log('📊 Analyzing test results...');
    
    const analysis = {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0,
      failedTests: [],
      slowTests: [],
      flakyTests: []
    };

    // Parse Jest output
    const lines = output.split('\n');
    lines.forEach(line => {
      // Total tests
      const totalMatch = line.match(/(\d+) tests?/);
      if (totalMatch) {
        analysis.total = parseInt(totalMatch[1]);
      }

      // Passed tests
      const passedMatch = line.match(/(\d+) passed/);
      if (passedMatch) {
        analysis.passed = parseInt(passedMatch[1]);
      }

      // Failed tests
      const failedMatch = line.match(/(\d+) failed/);
      if (failedMatch) {
        analysis.failed = parseInt(failedMatch[1]);
      }

      // Skipped tests
      const skippedMatch = line.match(/(\d+) skipped/);
      if (skippedMatch) {
        analysis.skipped = parseInt(skippedMatch[1]);
      }

      // Failed test names
      if (line.includes('FAIL') && line.includes('.test.') || line.includes('.spec.')) {
        const testName = line.split('FAIL')[1]?.trim();
        if (testName) {
          analysis.failedTests.push(testName);
        }
      }

      // Slow tests (over 1 second)
      const slowMatch = line.match(/(\d+\.\d+)s\s+(.+\.test\.)/);
      if (slowMatch && parseFloat(slowMatch[1]) > 1.0) {
        analysis.slowTests.push({
          name: slowMatch[2],
          duration: parseFloat(slowMatch[1])
        });
      }
    });

    return analysis;
  }

  async checkCoverage() {
    this.log('📈 Checking test coverage...');
    
    try {
      if (!fs.existsSync(this.coverageFile)) {
        // Run coverage if not available
        execSync('npm run test:coverage', {
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
      }

      if (fs.existsSync(this.coverageFile)) {
        const coverageData = JSON.parse(fs.readFileSync(this.coverageFile, 'utf8'));
        return coverageData.total.statements.pct;
      }

      return 0;
    } catch (error) {
      this.log(`Error checking coverage: ${error.message}`, 'ERROR');
      return 0;
    }
  }

  async retryFailedTests(failedTests) {
    if (!this.config.autoRetryFailed || failedTests.length === 0) {
      return { success: false, message: 'No retries configured or no failed tests' };
    }

    this.log(`🔄 Retrying ${failedTests.length} failed tests...`);
    
    let retrySuccess = 0;
    let retryFailures = 0;

    for (let attempt = 1; attempt <= this.config.maxRetries; attempt++) {
      this.log(`Retry attempt ${attempt}/${this.config.maxRetries}`);
      
      for (const testFile of failedTests) {
        try {
          const result = await this.runTests([testFile], { retry: true, attempt });
          
          if (result.success) {
            retrySuccess++;
            this.log(`✅ Test passed on retry: ${testFile}`);
          } else {
            retryFailures++;
            this.log(`❌ Test still failing: ${testFile}`);
          }
        } catch (error) {
          retryFailures++;
          this.log(`❌ Error retrying test: ${testFile}`, 'ERROR');
        }
      }

      if (retrySuccess === failedTests.length) {
        this.log('🎉 All tests passed on retry!');
        break;
      }
    }

    return { retrySuccess, retryFailures };
  }

  async generateIntelligentInsights(testAnalysis, coverage) {
    this.log('🧠 Generating intelligent insights...');
    
    const insights = {
      recommendations: [],
      warnings: [],
      improvements: []
    };

    // Coverage analysis
    if (coverage < this.config.coverageThreshold) {
      insights.warnings.push({
        type: 'coverage',
        message: `Test coverage (${coverage}%) is below threshold (${this.config.coverageThreshold}%)`,
        priority: 'high',
        suggestion: 'Add more test cases for uncovered code paths'
      });
    }

    // Failed tests analysis
    if (testAnalysis.failed > 0) {
      insights.recommendations.push({
        type: 'failed-tests',
        message: `${testAnalysis.failed} tests are failing`,
        priority: 'critical',
        suggestion: 'Review and fix failing tests before deployment'
      });
    }

    // Slow tests analysis
    if (testAnalysis.slowTests.length > 0) {
      const avgDuration = testAnalysis.slowTests.reduce((sum, test) => sum + test.duration, 0) / testAnalysis.slowTests.length;
      
      if (avgDuration > 2.0) {
        insights.improvements.push({
          type: 'slow-tests',
          message: `${testAnalysis.slowTests.length} tests are running slowly (avg: ${avgDuration.toFixed(2)}s)`,
          priority: 'medium',
          suggestion: 'Optimize slow tests or mock heavy operations'
        });
      }
    }

    // Flaky tests detection (tests that fail intermittently)
    if (testAnalysis.failedTests.length > 0) {
      insights.warnings.push({
        type: 'flaky-tests',
        message: 'Some tests may be flaky due to timing or external dependencies',
        priority: 'medium',
        suggestion: 'Add retry logic or fix race conditions'
      });
    }

    return insights;
  }

  async generateReport(testAnalysis, coverage, insights, retryResults) {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      summary: {
        total: testAnalysis.total,
        passed: testAnalysis.passed,
        failed: testAnalysis.failed,
        skipped: testAnalysis.skipped,
        coverage: coverage,
        retries: retryResults
      },
      analysis: testAnalysis,
      insights: insights,
      recommendations: insights.recommendations,
      warnings: insights.warnings,
      improvements: insights.improvements
    };

    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`📊 Test report generated: ${this.reportFile}`);
    } catch (error) {
      this.log(`Failed to write report: ${error.message}`, 'ERROR');
    }

    return report;
  }

  async run() {
    this.log('🚀 Starting Intelligent Test Automation...');
    
    try {
      // 1. Discover test files
      const testFiles = await this.discoverTestFiles();
      
      // 2. Run initial tests
      const testResult = await this.runTests(testFiles);
      
      // 3. Analyze test output
      const testAnalysis = await this.analyzeTestOutput(testResult.output);
      
      // 4. Check coverage
      const coverage = await this.checkCoverage();
      
      // 5. Retry failed tests if configured
      let retryResults = null;
      if (testAnalysis.failed > 0 && this.config.autoRetryFailed) {
        retryResults = await this.retryFailedTests(testAnalysis.failedTests);
      }
      
      // 6. Generate intelligent insights
      const insights = await this.generateIntelligentInsights(testAnalysis, coverage);
      
      // 7. Generate comprehensive report
      const report = await this.generateReport(testAnalysis, coverage, insights, retryResults);
      
      // 8. Log summary
      this.log('\n📊 Test Automation Summary:');
      this.log(`Total tests: ${testAnalysis.total}`);
      this.log(`Passed: ${testAnalysis.passed}`);
      this.log(`Failed: ${testAnalysis.failed}`);
      this.log(`Skipped: ${testAnalysis.skipped}`);
      this.log(`Coverage: ${coverage}%`);
      this.log(`Duration: ${report.duration}ms`);
      
      if (insights.warnings.length > 0) {
        this.log(`⚠️  ${insights.warnings.length} warnings detected`);
      }
      
      if (insights.recommendations.length > 0) {
        this.log(`💡 ${insights.recommendations.length} recommendations available`);
      }
      
      this.log('✅ Test automation completed successfully!');
      
      return report;
      
    } catch (error) {
      this.log(`❌ Test automation failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the test automation
if (require.main === module) {
  const automation = new IntelligentTestAutomation();
  automation.run().catch(error => {
    console.error('Test automation failed:', error);
    process.exit(1);
  });
}

module.exports = IntelligentTestAutomation;