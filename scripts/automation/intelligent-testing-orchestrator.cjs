#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting Intelligent Testing Orchestrator...');

// Get automation interval from environment variable (default: 30 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes

class IntelligentTestingOrchestrator {
  constructor() {
    this.testingResults = {
      timestamp: new Date().toISOString(),
      testPlan: [],
      executedTests: [],
      coverage: {},
      recommendations: []
    };
    
    this.testingStrategies = {
      unit: { priority: 'high', timeEstimate: 30000, coverage: 80 },
      integration: { priority: 'medium', timeEstimate: 120000, coverage: 60 },
      e2e: { priority: 'low', timeEstimate: 300000, coverage: 40 },
      performance: { priority: 'medium', timeEstimate: 180000, coverage: 50 }
    };
    
    this.testHistory = [];
    this.failurePatterns = [];
    this.coverageData = {};
  }

  async orchestrateTesting() {
    try {
      console.log('🧪 Orchestrating intelligent testing strategy...');
      
      // Analyze code changes and determine testing scope
      const changes = await this.analyzeCodeChanges();
      
      // Generate intelligent test plan
      const testPlan = this.generateTestPlan(changes);
      
      // Execute tests based on priority and coverage
      const results = await this.executeTestPlan(testPlan);
      
      // Analyze results and generate insights
      const insights = this.analyzeTestResults(results);
      
      // Generate recommendations for future testing
      const recommendations = this.generateTestingRecommendations(insights);
      
      // Update testing history and patterns
      this.updateTestingHistory(results, insights);
      
      // Generate comprehensive report
      this.generateReport(testPlan, results, insights, recommendations);
      
      console.log('✅ Intelligent testing orchestration completed');
      
    } catch (error) {
      console.error('❌ Intelligent testing orchestration failed:', error.message);
    }
  }

  async analyzeCodeChanges() {
    const changes = {
      files: [],
      types: [],
      impact: 'low',
      testingPriority: 'normal'
    };

    try {
      console.log('🔍 Analyzing code changes...');
      
      // Get git status to see modified files
      try {
        const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
        const modifiedFiles = gitStatus.split('\n')
          .filter(line => line.trim())
          .map(line => line.substring(3)); // Remove status indicators
        
        changes.files = modifiedFiles;
        
        // Analyze change types
        changes.types = this.categorizeChanges(modifiedFiles);
        
        // Determine impact level
        changes.impact = this.assessChangeImpact(modifiedFiles, changes.types);
        
        // Set testing priority based on impact
        changes.testingPriority = this.determineTestingPriority(changes.impact);
        
      } catch (error) {
        console.log('⚠️  Not a git repository or no changes detected');
        // Analyze file modification times as fallback
        changes.files = this.getRecentlyModifiedFiles();
        changes.types = this.categorizeChanges(changes.files);
        changes.impact = 'low';
        changes.testingPriority = 'normal';
      }
      
    } catch (error) {
      console.log(`⚠️  Error analyzing changes: ${error.message}`);
    }

    return changes;
  }

  categorizeChanges(files) {
    const types = {
      source: 0,
      test: 0,
      config: 0,
      docs: 0,
      other: 0
    };

    files.forEach(file => {
      if (file.match(/\.(js|jsx|ts|tsx)$/)) {
        if (file.includes('test') || file.includes('spec')) {
          types.test++;
        } else if (file.includes('src/') || file.includes('components/')) {
          types.source++;
        } else {
          types.other++;
        }
      } else if (file.match(/\.(json|js|ts)$/) && (file.includes('config') || file.includes('webpack'))) {
        types.config++;
      } else if (file.match(/\.(md|txt)$/)) {
        types.docs++;
      } else {
        types.other++;
      }
    });

    return types;
  }

  assessChangeImpact(files, types) {
    let impact = 'low';
    
    // High impact if source code changed significantly
    if (types.source > 5) {
      impact = 'high';
    } else if (types.source > 2) {
      impact = 'medium';
    }
    
    // High impact if configuration files changed
    if (types.config > 0) {
      impact = 'high';
    }
    
    // Medium impact if tests changed
    if (types.test > 3) {
      impact = 'medium';
    }
    
    return impact;
  }

  determineTestingPriority(impact) {
    const priorityMap = {
      'high': 'critical',
      'medium': 'high',
      'low': 'normal'
    };
    
    return priorityMap[impact] || 'normal';
  }

  getRecentlyModifiedFiles() {
    const files = [];
    const cutoff = Date.now() - (24 * 60 * 60 * 1000); // 24 hours ago
    
    try {
      const srcPath = path.join(process.cwd(), 'src');
      if (fs.existsSync(srcPath)) {
        this.scanDirectoryForRecentFiles(srcPath, files, cutoff);
      }
    } catch (error) {
      console.log(`⚠️  Error scanning for recent files: ${error.message}`);
    }
    
    return files;
  }

  scanDirectoryForRecentFiles(dir, files, cutoff) {
    if (!fs.existsSync(dir)) return;
    
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.scanDirectoryForRecentFiles(fullPath, files, cutoff);
      } else if (stat.mtime.getTime() > cutoff) {
        files.push(fullPath);
      }
    });
  }

  generateTestPlan(changes) {
    const testPlan = {
      priority: changes.testingPriority,
      impact: changes.impact,
      tests: [],
      estimatedTime: 0,
      coverage: {}
    };

    console.log('📋 Generating intelligent test plan...');
    
    // Determine which test types to run based on changes
    if (changes.impact === 'high') {
      // Run all test types for high-impact changes
      testPlan.tests = [
        { type: 'unit', priority: 'critical', reason: 'High-impact changes require comprehensive unit testing' },
        { type: 'integration', priority: 'high', reason: 'Integration testing needed for configuration changes' },
        { type: 'e2e', priority: 'medium', reason: 'End-to-end testing to ensure system stability' }
      ];
    } else if (changes.impact === 'medium') {
      // Run unit and integration tests for medium-impact changes
      testPlan.tests = [
        { type: 'unit', priority: 'high', reason: 'Source code changes require unit testing' },
        { type: 'integration', priority: 'medium', reason: 'Integration testing for affected modules' }
      ];
    } else {
      // Run only unit tests for low-impact changes
      testPlan.tests = [
        { type: 'unit', priority: 'normal', reason: 'Standard unit testing for minor changes' }
      ];
    }
    
    // Add performance tests if source code changed significantly
    if (changes.types.source > 3) {
      testPlan.tests.push({
        type: 'performance',
        priority: 'medium',
        reason: 'Performance testing needed for significant source code changes'
      });
    }
    
    // Calculate estimated time
    testPlan.estimatedTime = testPlan.tests.reduce((total, test) => {
      return total + (this.testingStrategies[test.type]?.timeEstimate || 0);
    }, 0);
    
    // Set coverage targets
    testPlan.coverage = this.calculateCoverageTargets(changes);
    
    return testPlan;
  }

  calculateCoverageTargets(changes) {
    const coverage = {};
    
    Object.keys(this.testingStrategies).forEach(testType => {
      const baseCoverage = this.testingStrategies[testType].coverage;
      
      if (changes.impact === 'high') {
        coverage[testType] = Math.min(100, baseCoverage + 10); // Increase coverage for high-impact changes
      } else if (changes.impact === 'medium') {
        coverage[testType] = baseCoverage;
      } else {
        coverage[testType] = Math.max(50, baseCoverage - 10); // Reduce coverage for low-impact changes
      }
    });
    
    return coverage;
  }

  async executeTestPlan(testPlan) {
    const results = {
      executed: [],
      passed: 0,
      failed: 0,
      skipped: 0,
      totalTime: 0,
      coverage: {}
    };

    console.log('🚀 Executing test plan...');
    
    for (const test of testPlan.tests) {
      try {
        console.log(`🧪 Running ${test.type} tests (${test.priority} priority)...`);
        
        const testResult = await this.runTest(test.type);
        results.executed.push({
          type: test.type,
          priority: test.priority,
          result: testResult,
          timestamp: new Date().toISOString()
        });
        
        if (testResult.success) {
          results.passed++;
        } else {
          results.failed++;
        }
        
        results.totalTime += testResult.duration;
        
        // Collect coverage data
        if (testResult.coverage) {
          results.coverage[test.type] = testResult.coverage;
        }
        
      } catch (error) {
        console.log(`⚠️  Error running ${test.type} tests: ${error.message}`);
        results.executed.push({
          type: test.type,
          priority: test.priority,
          result: { success: false, error: error.message },
          timestamp: new Date().toISOString()
        });
        results.failed++;
      }
    }
    
    return results;
  }

  async runTest(testType) {
    const result = {
      success: false,
      duration: 0,
      output: '',
      coverage: null,
      error: null
    };

    const startTime = Date.now();
    
    try {
      let command;
      let args = [];
      
      switch (testType) {
        case 'unit':
          command = 'npm';
          args = ['run', 'test:unit'];
          break;
        case 'integration':
          command = 'npm';
          args = ['run', 'test:integration'];
          break;
        case 'e2e':
          command = 'npm';
          args = ['run', 'test:e2e'];
          break;
        case 'performance':
          command = 'npm';
          args = ['run', 'test:performance'];
          break;
        default:
          command = 'npm';
          args = ['test'];
      }
      
      // Check if test script exists
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const testScript = args[1];
      
      if (!packageJson.scripts[testScript]) {
        // Fallback to default test command
        command = 'npm';
        args = ['test'];
      }
      
      const output = execSync(`${command} ${args.join(' ')}`, { 
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 300000 // 5 minutes timeout
      });
      
      result.success = true;
      result.output = output;
      result.coverage = this.extractCoverage(output);
      
    } catch (error) {
      result.success = false;
      result.error = error.message;
      result.output = error.stdout || error.stderr || error.message;
    }
    
    result.duration = Date.now() - startTime;
    return result;
  }

  extractCoverage(output) {
    try {
      // Look for coverage patterns in test output
      const coverageMatch = output.match(/All files\s+\|\s+(\d+\.\d+)\s+\|\s+(\d+\.\d+)\s+\|\s+(\d+\.\d+)\s+\|\s+(\d+\.\d+)/);
      if (coverageMatch) {
        return {
          statements: parseFloat(coverageMatch[1]),
          branches: parseFloat(coverageMatch[2]),
          functions: parseFloat(coverageMatch[3]),
          lines: parseFloat(coverageMatch[4])
        };
      }
    } catch (error) {
      console.log(`⚠️  Could not extract coverage: ${error.message}`);
    }
    
    return null;
  }

  analyzeTestResults(results) {
    const insights = {
      successRate: 0,
      performance: {},
      coverage: {},
      failures: [],
      recommendations: []
    };

    // Calculate success rate
    const totalTests = results.passed + results.failed;
    insights.successRate = totalTests > 0 ? (results.passed / totalTests) * 100 : 0;
    
    // Analyze performance
    insights.performance = {
      totalTime: results.totalTime,
      averageTime: results.executed.length > 0 ? results.totalTime / results.executed.length : 0,
      slowestTest: this.findSlowestTest(results.executed)
    };
    
    // Analyze coverage
    insights.coverage = this.analyzeCoverage(results.coverage);
    
    // Analyze failures
    insights.failures = this.analyzeFailures(results.executed);
    
    // Generate insights
    insights.recommendations = this.generateInsights(insights);
    
    return insights;
  }

  findSlowestTest(executedTests) {
    if (executedTests.length === 0) return null;
    
    return executedTests.reduce((slowest, current) => {
      return (current.result.duration > slowest.result.duration) ? current : slowest;
    });
  }

  analyzeCoverage(coverageData) {
    const analysis = {
      overall: 0,
      byType: {},
      gaps: [],
      recommendations: []
    };

    let totalCoverage = 0;
    let typeCount = 0;
    
    Object.keys(coverageData).forEach(testType => {
      const coverage = coverageData[testType];
      if (coverage && coverage.lines) {
        analysis.byType[testType] = coverage.lines;
        totalCoverage += coverage.lines;
        typeCount++;
        
        // Identify coverage gaps
        if (coverage.lines < 70) {
          analysis.gaps.push({
            type: testType,
            coverage: coverage.lines,
            recommendation: `Increase ${testType} test coverage to at least 70%`
          });
        }
      }
    });
    
    analysis.overall = typeCount > 0 ? totalCoverage / typeCount : 0;
    
    // Generate coverage recommendations
    if (analysis.overall < 80) {
      analysis.recommendations.push('Overall test coverage is below 80%. Consider adding more tests.');
    }
    
    return analysis;
  }

  analyzeFailures(executedTests) {
    const failures = executedTests.filter(test => !test.result.success);
    
    return failures.map(failure => ({
      type: failure.type,
      priority: failure.priority,
      error: failure.result.error,
      output: failure.result.output,
      timestamp: failure.timestamp
    }));
  }

  generateInsights(insights) {
    const recommendations = [];
    
    // Success rate insights
    if (insights.successRate < 90) {
      recommendations.push({
        priority: 'high',
        category: 'reliability',
        title: 'Low Test Success Rate',
        description: `Test success rate is ${insights.successRate.toFixed(1)}%, below the 90% threshold`,
        actions: [
          'Investigate failing tests',
          'Fix flaky test conditions',
          'Review test environment setup'
        ]
      });
    }
    
    // Performance insights
    if (insights.performance.averageTime > 60000) { // 1 minute
      recommendations.push({
        priority: 'medium',
        category: 'performance',
        title: 'Slow Test Execution',
        description: `Average test execution time is ${Math.round(insights.performance.averageTime / 1000)}s`,
        actions: [
          'Optimize slow tests',
          'Implement test parallelization',
          'Use test data factories'
        ]
      });
    }
    
    // Coverage insights
    if (insights.coverage.overall < 80) {
      recommendations.push({
        priority: 'medium',
        category: 'coverage',
        title: 'Low Test Coverage',
        description: `Overall test coverage is ${insights.coverage.overall.toFixed(1)}%`,
        actions: [
          'Add tests for uncovered code paths',
          'Focus on critical business logic',
          'Implement coverage monitoring'
        ]
      });
    }
    
    return recommendations;
  }

  generateTestingRecommendations(insights) {
    const recommendations = [];
    
    // Based on failure patterns
    if (insights.failures.length > 0) {
      recommendations.push({
        priority: 'high',
        title: 'Address Test Failures',
        description: `${insights.failures.length} tests are currently failing`,
        actions: [
          'Fix failing tests immediately',
          'Investigate root causes',
          'Update test documentation'
        ]
      });
    }
    
    // Based on coverage gaps
    if (insights.coverage.gaps.length > 0) {
      recommendations.push({
        priority: 'medium',
        title: 'Improve Test Coverage',
        description: 'Several test types have coverage below 70%',
        actions: [
          'Prioritize coverage improvements',
          'Focus on high-impact modules',
          'Set coverage targets by module'
        ]
      });
    }
    
    // Based on performance
    if (insights.performance.averageTime > 30000) { // 30 seconds
      recommendations.push({
        priority: 'low',
        title: 'Optimize Test Performance',
        description: 'Test execution could be optimized for faster feedback',
        actions: [
          'Profile slow tests',
          'Implement test caching',
          'Consider test parallelization'
        ]
      });
    }
    
    return recommendations;
  }

  updateTestingHistory(results, insights) {
    const historyEntry = {
      timestamp: new Date().toISOString(),
      results: results,
      insights: insights,
      summary: {
        successRate: insights.successRate,
        totalTime: insights.performance.totalTime,
        coverage: insights.coverage.overall
      }
    };
    
    this.testHistory.push(historyEntry);
    
    // Keep only last 50 entries
    if (this.testHistory.length > 50) {
      this.testHistory = this.testHistory.slice(-50);
    }
    
    // Update failure patterns
    this.updateFailurePatterns(insights.failures);
  }

  updateFailurePatterns(failures) {
    failures.forEach(failure => {
      const existingPattern = this.failurePatterns.find(p => 
        p.type === failure.type && p.error.includes(failure.error)
      );
      
      if (existingPattern) {
        existingPattern.count++;
        existingPattern.lastOccurrence = failure.timestamp;
      } else {
        this.failurePatterns.push({
          type: failure.type,
          error: failure.error,
          count: 1,
          firstOccurrence: failure.timestamp,
          lastOccurrence: failure.timestamp
        });
      }
    });
    
    // Remove old patterns (older than 7 days)
    const weekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    this.failurePatterns = this.failurePatterns.filter(p => 
      new Date(p.lastOccurrence).getTime() > weekAgo
    );
  }

  generateReport(testPlan, results, insights, recommendations) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        testPlan: testPlan,
        results: results,
        insights: insights,
        recommendations: recommendations
      },
      details: {
        testPlan: testPlan,
        results: results,
        insights: insights,
        recommendations: recommendations,
        failurePatterns: this.failurePatterns,
        testHistory: this.testHistory.slice(-10) // Last 10 entries
      }
    };

    // Save detailed report
    const reportPath = path.join(process.cwd(), 'intelligent-testing-orchestration-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Save human-readable summary
    const summaryPath = path.join(process.cwd(), 'intelligent-testing-orchestration-summary.txt');
    const summary = this.generateHumanReadableSummary(report);
    fs.writeFileSync(summaryPath, summary);
    
    console.log(`📊 Testing orchestration report saved to ${reportPath}`);
    console.log(`📋 Summary saved to ${summaryPath}`);
  }

  generateHumanReadableSummary(report) {
    let summary = '🧪 Intelligent Testing Orchestration Summary\n';
    summary += '==============================================\n\n';
    
    const { testPlan, results, insights, recommendations } = report.summary;
    
    summary += `📋 Test Plan Overview:\n`;
    summary += `  - Priority: ${testPlan.priority.toUpperCase()}\n`;
    summary += `  - Impact: ${testPlan.impact.toUpperCase()}\n`;
    summary += `  - Tests planned: ${testPlan.tests.length}\n`;
    summary += `  - Estimated time: ${Math.round(testPlan.estimatedTime / 1000)}s\n\n`;
    
    summary += `📊 Test Results:\n`;
    summary += `  - Tests executed: ${results.executed.length}\n`;
    summary += `  - Passed: ${results.passed}\n`;
    summary += `  - Failed: ${results.failed}\n`;
    summary += `  - Success rate: ${insights.successRate.toFixed(1)}%\n`;
    summary += `  - Total time: ${Math.round(insights.performance.totalTime / 1000)}s\n\n`;
    
    summary += `🔍 Key Insights:\n`;
    summary += `  - Overall coverage: ${insights.coverage.overall.toFixed(1)}%\n`;
    summary += `  - Coverage gaps: ${insights.coverage.gaps.length}\n`;
    summary += `  - Failure patterns: ${insights.failures.length}\n\n`;
    
    if (recommendations.length > 0) {
      summary += `💡 Recommendations:\n`;
      recommendations.forEach((rec, index) => {
        summary += `  ${index + 1}. ${rec.title} (${rec.priority.toUpperCase()})\n`;
        summary += `     ${rec.description}\n`;
        summary += `     Actions: ${rec.actions.join(', ')}\n\n`;
      });
    }
    
    return summary;
  }
}

// Main execution
async function runIntelligentTestingOrchestrator() {
  try {
    console.log(`🧪 Running intelligent testing orchestrator at ${new Date().toISOString()}`);
    
    const orchestrator = new IntelligentTestingOrchestrator();
    await orchestrator.orchestrateTesting();
    
    console.log('✅ Intelligent testing orchestration completed successfully');
    
  } catch (error) {
    console.error('❌ Intelligent testing orchestration failed:', error.message);
  }
}

// Run the orchestrator
runIntelligentTestingOrchestrator();

// Set up continuous operation
setInterval(runIntelligentTestingOrchestrator, AUTOMATION_INTERVAL);

console.log(`🧪 Intelligent testing orchestrator will run every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);