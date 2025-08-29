#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting Intelligent Testing Automation...');

// Get automation interval from environment variable (default: 1 hour)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 3600000; // 1 hour

class IntelligentTestingAutomation {
  constructor() {
    this.testingResults = {
      testExecution: {},
      coverageAnalysis: {},
      untestedCode: [],
      testQuality: {},
      performanceMetrics: {},
      recommendations: [],
      newTestSuggestions: []
    };
    this.reportDir = path.join(process.cwd(), 'intelligent-testing-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async runIntelligentTesting() {
    try {
      console.log(`🧪 Running Intelligent Testing at ${new Date().toISOString()}`);
      
      // Run test suite
      await this.runTestSuite();
      
      // Analyze test coverage
      await this.analyzeTestCoverage();
      
      // Identify untested code
      await this.identifyUntestedCode();
      
      // Analyze test quality
      await this.analyzeTestQuality();
      
      // Generate new test suggestions
      await this.generateNewTestSuggestions();
      
      // Run performance benchmarks
      await this.runTestPerformanceBenchmarks();
      
      // Generate testing recommendations
      await this.generateTestingRecommendations();
      
      // Generate comprehensive report
      await this.generateTestingReport();
      
      console.log('✅ Intelligent Testing completed successfully');
      
    } catch (error) {
      console.error('❌ Intelligent Testing failed:', error.message);
    }
  }

  async runTestSuite() {
    console.log('🧪 Running test suite...');
    
    try {
      const startTime = Date.now();
      
      // Check if tests exist
      if (!fs.existsSync('tests') && !fs.existsSync('__tests__') && !fs.existsSync('*.test.*')) {
        console.log('⚠️  No test files found');
        this.testingResults.testExecution = {
          status: 'no-tests',
          message: 'No test files found in project',
          duration: 0,
          passed: 0,
          failed: 0,
          skipped: 0
        };
        return;
      }
      
      // Run tests with coverage
      const output = execSync('npm test -- --coverage --watchAll=false', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const duration = Date.now() - startTime;
      
      // Parse test results
      const testResults = this.parseTestOutput(output);
      
      this.testingResults.testExecution = {
        status: 'completed',
        duration,
        output: output,
        ...testResults
      };
      
      console.log(`✅ Tests completed in ${duration}ms: ${testResults.passed} passed, ${testResults.failed} failed`);
      
    } catch (error) {
      console.log('❌ Test execution failed:', error.message);
      this.testingResults.testExecution = {
        status: 'failed',
        error: error.message,
        duration: 0,
        passed: 0,
        failed: 1,
        skipped: 0
      };
    }
  }

  parseTestOutput(output) {
    // Default values
    let passed = 0, failed = 0, skipped = 0;
    
    try {
      // Try to extract test results from output
      const lines = output.split('\n');
      
      lines.forEach(line => {
        if (line.includes('Tests:') && line.includes('passed')) {
          const match = line.match(/(\d+)\s+passed/);
          if (match) passed = parseInt(match[1]);
        }
        
        if (line.includes('Tests:') && line.includes('failed')) {
          const match = line.match(/(\d+)\s+failed/);
          if (match) failed = parseInt(match[1]);
        }
        
        if (line.includes('Tests:') && line.includes('skipped')) {
          const match = line.match(/(\d+)\s+skipped/);
          if (match) skipped = parseInt(match[1]);
        }
      });
    } catch (error) {
      console.log('⚠️  Could not parse test output, using defaults');
    }
    
    return { passed, failed, skipped };
  }

  async analyzeTestCoverage() {
    console.log('📊 Analyzing test coverage...');
    
    try {
      // Check if coverage report exists
      const coveragePath = path.join(process.cwd(), 'coverage');
      if (!fs.existsSync(coveragePath)) {
        console.log('⚠️  No coverage report found');
        this.testingResults.coverageAnalysis = {
          status: 'no-coverage',
          message: 'No coverage report generated'
        };
        return;
      }
      
      // Read coverage summary
      const summaryPath = path.join(coveragePath, 'coverage-summary.json');
      if (fs.existsSync(summaryPath)) {
        const coverageData = JSON.parse(fs.readFileSync(summaryPath, 'utf8'));
        
        this.testingResults.coverageAnalysis = {
          status: 'completed',
          summary: coverageData.total,
          details: coverageData,
          recommendations: this.generateCoverageRecommendations(coverageData.total)
        };
        
        console.log(`✅ Coverage analysis complete: ${coverageData.total.lines.pct}% lines, ${coverageData.total.functions.pct}% functions`);
      } else {
        // Try to find lcov.info or other coverage formats
        const lcovPath = path.join(coveragePath, 'lcov.info');
        if (fs.existsSync(lcovPath)) {
          this.testingResults.coverageAnalysis = {
            status: 'completed',
            format: 'lcov',
            message: 'Coverage data available in lcov format'
          };
        }
      }
      
    } catch (error) {
      console.log('⚠️  Could not analyze test coverage:', error.message);
    }
  }

  async identifyUntestedCode() {
    console.log('🔍 Identifying untested code...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) return;

    const sourceFiles = this.findFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    const testFiles = this.findTestFiles();
    
    // Map source files to test files
    const sourceToTestMap = this.mapSourceToTests(sourceFiles, testFiles);
    
    // Find untested files
    const untestedFiles = sourceFiles.filter(sourceFile => {
      const relativePath = path.relative(process.cwd(), sourceFile);
      return !sourceToTestMap[relativePath];
    });
    
    untestedFiles.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const complexity = this.calculateCodeComplexity(content);
      
      this.testingResults.untestedCode.push({
        file: path.relative(process.cwd(), file),
        complexity,
        priority: this.determineTestingPriority(complexity, file),
        suggestion: this.generateTestSuggestion(file, content)
      });
    });
    
    console.log(`✅ Found ${untestedFiles.length} untested source files`);
  }

  findTestFiles() {
    const testDirs = ['tests', '__tests__', 'test'];
    const testFiles = [];
    
    testDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        testFiles.push(...this.findFiles(dir, ['.test.js', '.test.ts', '.test.tsx', '.spec.js', '.spec.ts', '.spec.tsx']));
      }
    });
    
    // Also look for test files in src directory
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      testFiles.push(...this.findFiles(srcPath, ['.test.js', '.test.ts', '.test.tsx', '.spec.js', '.spec.ts', '.spec.tsx']));
    }
    
    return testFiles;
  }

  mapSourceToTests(sourceFiles, testFiles) {
    const sourceToTestMap = {};
    
    sourceFiles.forEach(sourceFile => {
      const sourceName = path.basename(sourceFile, path.extname(sourceFile));
      const sourceDir = path.dirname(sourceFile);
      
      // Find corresponding test file
      const testFile = testFiles.find(testFile => {
        const testName = path.basename(testFile, path.extname(testFile));
        const testDir = path.dirname(testFile);
        
        // Check if test file corresponds to source file
        return testName.includes(sourceName) || testName.includes(sourceName.replace(/\.(tsx?|jsx?)$/, ''));
      });
      
      if (testFile) {
        sourceToTestMap[path.relative(process.cwd(), sourceFile)] = path.relative(process.cwd(), testFile);
      }
    });
    
    return sourceToTestMap;
  }

  calculateCodeComplexity(content) {
    // Simple complexity calculation based on control flow statements
    const complexityIndicators = [
      'if (', 'else if (', 'for (', 'while (', 'switch (', 'catch (',
      '&&', '||', '? :', 'case ', 'default:'
    ];
    
    let complexity = 1; // Base complexity
    
    complexityIndicators.forEach(indicator => {
      const matches = (content.match(new RegExp(indicator.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
      complexity += matches;
    });
    
    return complexity;
  }

  determineTestingPriority(complexity, filePath) {
    if (complexity > 10) return 'high';
    if (complexity > 5) return 'medium';
    return 'low';
  }

  generateTestSuggestion(filePath, content) {
    const fileName = path.basename(filePath);
    const componentName = fileName.replace(/\.(tsx?|jsx?)$/, '');
    
    if (content.includes('export default') || content.includes('export function') || content.includes('export const')) {
      return `Create unit tests for ${componentName} component/function`;
    }
    
    if (content.includes('useState') || content.includes('useEffect')) {
      return `Create component tests with React Testing Library for ${componentName}`;
    }
    
    if (content.includes('async function') || content.includes('async (') || content.includes('Promise')) {
      return `Create async function tests for ${componentName}`;
    }
    
    return `Create basic tests for ${componentName}`;
  }

  async analyzeTestQuality() {
    console.log('🎯 Analyzing test quality...');
    
    const testFiles = this.findTestFiles();
    let totalTests = 0;
    let totalAssertions = 0;
    let qualityScore = 0;
    
    testFiles.forEach(testFile => {
      const content = fs.readFileSync(testFile, 'utf8');
      const testCount = this.countTests(content);
      const assertionCount = this.countAssertions(content);
      
      totalTests += testCount;
      totalAssertions += assertionCount;
      
      // Calculate quality score for this file
      const fileQuality = this.calculateTestFileQuality(content, testCount, assertionCount);
      qualityScore += fileQuality;
    });
    
    const averageQuality = testFiles.length > 0 ? qualityScore / testFiles.length : 0;
    
    this.testingResults.testQuality = {
      totalTestFiles: testFiles.length,
      totalTests,
      totalAssertions,
      averageQuality: Math.round(averageQuality),
      recommendations: this.generateTestQualityRecommendations(averageQuality, totalTests, totalAssertions)
    };
    
    console.log(`✅ Test quality analysis: ${totalTests} tests, ${totalAssertions} assertions, quality score: ${Math.round(averageQuality)}/100`);
  }

  countTests(content) {
    // Count test blocks
    const testPatterns = [
      /it\s*\(/g,
      /test\s*\(/g,
      /describe\s*\(/g,
      /describe\.skip\s*\(/g,
      /it\.skip\s*\(/g,
      /test\.skip\s*\(/g
    ];
    
    let count = 0;
    testPatterns.forEach(pattern => {
      count += (content.match(pattern) || []).length;
    });
    
    return count;
  }

  countAssertions(content) {
    // Count assertion statements
    const assertionPatterns = [
      /expect\s*\(/g,
      /assert\s*\(/g,
      /should\s*\./g,
      /\.toBe\s*\(/g,
      /\.toEqual\s*\(/g,
      /\.toContain\s*\(/g,
      /\.toHaveLength\s*\(/g
    ];
    
    let count = 0;
    assertionPatterns.forEach(pattern => {
      count += (content.match(pattern) || []).length;
    });
    
    return count;
  }

  calculateTestFileQuality(content, testCount, assertionCount) {
    let score = 0;
    
    // Base score for having tests
    if (testCount > 0) score += 30;
    
    // Score for assertions
    if (assertionCount > 0) score += 20;
    
    // Score for test organization
    if (content.includes('describe(')) score += 15;
    
    // Score for setup/teardown
    if (content.includes('beforeEach(') || content.includes('afterEach(')) score += 10;
    
    // Score for mocking
    if (content.includes('jest.mock(') || content.includes('vi.mock(')) score += 10;
    
    // Score for async testing
    if (content.includes('async/await') || content.includes('.resolves') || content.includes('.rejects')) score += 15;
    
    return Math.min(100, score);
  }

  generateTestQualityRecommendations(averageQuality, totalTests, totalAssertions) {
    const recommendations = [];
    
    if (averageQuality < 70) {
      recommendations.push('Improve test organization and structure');
    }
    
    if (totalTests === 0) {
      recommendations.push('Start writing tests for critical functionality');
    } else if (totalTests < 10) {
      recommendations.push('Increase test coverage for better code reliability');
    }
    
    if (totalAssertions < totalTests) {
      recommendations.push('Add more assertions to existing tests');
    }
    
    if (averageQuality < 50) {
      recommendations.push('Review and refactor existing tests');
    }
    
    return recommendations;
  }

  async generateNewTestSuggestions() {
    console.log('💡 Generating new test suggestions...');
    
    const untestedFiles = this.testingResults.untestedCode;
    
    untestedFiles.forEach(untested => {
      if (untested.priority === 'high') {
        this.testingResults.newTestSuggestions.push({
          file: untested.file,
          priority: 'high',
          type: 'unit-test',
          description: `High-priority: ${untested.suggestion}`,
          estimatedEffort: '2-4 hours'
        });
      }
    });
    
    // Suggest integration tests for complex components
    const complexComponents = untestedFiles.filter(f => f.complexity > 8);
    complexComponents.forEach(component => {
      this.testingResults.newTestSuggestions.push({
        file: component.file,
        priority: 'medium',
        type: 'integration-test',
        description: `Integration test for complex component (complexity: ${component.complexity})`,
        estimatedEffort: '4-6 hours'
      });
    });
    
    console.log(`✅ Generated ${this.testingResults.newTestSuggestions.length} test suggestions`);
  }

  async runTestPerformanceBenchmarks() {
    console.log('⚡ Running test performance benchmarks...');
    
    try {
      const startTime = Date.now();
      
      // Run tests with timing
      const output = execSync('npm test -- --verbose --watchAll=false', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const totalTime = Date.now() - startTime;
      
      // Parse timing information
      const timingInfo = this.parseTimingInfo(output);
      
      this.testingResults.performanceMetrics = {
        totalExecutionTime: totalTime,
        averageTestTime: timingInfo.averageTestTime,
        slowestTests: timingInfo.slowestTests,
        timestamp: new Date().toISOString()
      };
      
      console.log(`✅ Test performance: Total time ${totalTime}ms, Average per test ${timingInfo.averageTestTime}ms`);
      
    } catch (error) {
      console.log('⚠️  Could not run test performance benchmarks:', error.message);
    }
  }

  parseTimingInfo(output) {
    // Default values
    let averageTestTime = 0;
    let slowestTests = [];
    
    try {
      const lines = output.split('\n');
      const testTimes = [];
      
      lines.forEach(line => {
        if (line.includes('ms') && line.includes('(')) {
          const match = line.match(/(\d+)\s*ms/);
          if (match) {
            testTimes.push(parseInt(match[1]));
          }
        }
      });
      
      if (testTimes.length > 0) {
        averageTestTime = Math.round(testTimes.reduce((sum, time) => sum + time, 0) / testTimes.length);
        slowestTests = testTimes.sort((a, b) => b - a).slice(0, 5);
      }
    } catch (error) {
      console.log('⚠️  Could not parse timing information');
    }
    
    return { averageTestTime, slowestTests };
  }

  generateCoverageRecommendations(coverage) {
    const recommendations = [];
    
    if (coverage.lines.pct < 80) {
      recommendations.push('Increase line coverage to at least 80%');
    }
    
    if (coverage.functions.pct < 80) {
      recommendations.push('Increase function coverage to at least 80%');
    }
    
    if (coverage.branches.pct < 70) {
      recommendations.push('Increase branch coverage to at least 70%');
    }
    
    if (coverage.statements.pct < 80) {
      recommendations.push('Increase statement coverage to at least 80%');
    }
    
    return recommendations;
  }

  async generateTestingRecommendations() {
    console.log('💡 Generating testing recommendations...');
    
    const recommendations = [];
    
    // Coverage recommendations
    if (this.testingResults.coverageAnalysis.recommendations) {
      recommendations.push(...this.testingResults.coverageAnalysis.recommendations);
    }
    
    // Quality recommendations
    if (this.testingResults.testQuality.recommendations) {
      recommendations.push(...this.testingResults.testQuality.recommendations);
    }
    
    // Untested code recommendations
    const highPriorityUntested = this.testingResults.untestedCode.filter(f => f.priority === 'high');
    if (highPriorityUntested.length > 0) {
      recommendations.push(`Write tests for ${highPriorityUntested.length} high-priority untested files`);
    }
    
    // Performance recommendations
    if (this.testingResults.performanceMetrics.averageTestTime > 100) {
      recommendations.push('Optimize slow tests for better CI/CD performance');
    }
    
    this.testingResults.recommendations = recommendations;
  }

  async generateTestingReport() {
    console.log('📊 Generating intelligent testing report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        testStatus: this.testingResults.testExecution.status,
        totalTests: this.testingResults.testExecution.passed + this.testingResults.testExecution.failed,
        passedTests: this.testingResults.testExecution.passed,
        failedTests: this.testingResults.testExecution.failed,
        coverage: this.testingResults.coverageAnalysis.summary?.lines?.pct || 0,
        untestedFiles: this.testingResults.untestedCode.length,
        testQuality: this.testingResults.testQuality.averageQuality || 0
      },
      details: this.testingResults,
      nextActions: this.generateNextActions(),
      status: 'completed'
    };
    
    const reportPath = path.join(this.reportDir, `intelligent-testing-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`✅ Intelligent testing report saved to ${reportPath}`);
    console.log(`📊 Summary: ${report.summary.totalTests} tests, ${report.summary.coverage}% coverage, ${report.summary.testQuality}/100 quality`);
    
    // Log critical issues
    if (report.summary.failedTests > 0) {
      console.log(`❌ TESTS: ${report.summary.failedTests} tests are failing!`);
    }
    
    if (report.summary.coverage < 70) {
      console.log(`⚠️  COVERAGE: Low test coverage detected!`);
    }
  }

  generateNextActions() {
    const actions = [];
    
    if (this.testingResults.testExecution.failed > 0) {
      actions.push('🔴 Fix failing tests immediately');
    }
    
    if (this.testingResults.untestedCode.length > 0) {
      actions.push('📝 Write tests for untested code, starting with high-priority files');
    }
    
    if (this.testingResults.coverageAnalysis.summary?.lines?.pct < 80) {
      actions.push('📊 Improve test coverage to meet 80% target');
    }
    
    if (this.testingResults.testQuality.averageQuality < 70) {
      actions.push('🎯 Improve test quality and organization');
    }
    
    return actions;
  }

  findFiles(dir, extensions) {
    const files = [];
    
    const walkDir = (currentDir) => {
      const items = fs.readdirSync(currentDir);
      
      items.forEach(item => {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.toLowerCase().endsWith(ext))) {
          files.push(fullPath);
        }
      });
    };
    
    walkDir(dir);
    return files;
  }
}

// Main execution
async function main() {
  const testingAutomation = new IntelligentTestingAutomation();
  
  // Run initial testing
  await testingAutomation.runIntelligentTesting();
  
  // Set up continuous testing
  setInterval(async () => {
    await testingAutomation.runIntelligentTesting();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🧪 Intelligent Testing Automation running continuously (${AUTOMATION_INTERVAL / 3600000} hour intervals)`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🧪 Intelligent Testing Automation shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🧪 Intelligent Testing Automation shutting down gracefully...');
  process.exit(0);
});

// Start the automation
main().catch(error => {
  console.error('❌ Intelligent Testing Automation failed to start:', error);
  process.exit(1);
});