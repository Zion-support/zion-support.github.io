#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class SmartTesting {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 900000; // 15 minutes
    this.logLevel = process.env.LOG_LEVEL || 'info';
    this.workingDir = process.cwd();
    this.testResults = {};
    this.coverageData = {};
    this.deploymentStatus = {};
    this.testHistory = [];
    this.failurePatterns = [];
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    
    if (level === 'error') {
      console.error(logMessage);
    } else if (level === 'warn') {
      console.warn(logMessage);
    } else {
      console.log(logMessage);
    }
  }

  async runTestSuite() {
    try {
      this.log('🧪 Running comprehensive test suite...', 'info');
      
      const testResults = {
        unit: await this.runUnitTests(),
        integration: await this.runIntegrationTests(),
        e2e: await this.runE2ETests(),
        performance: await this.runPerformanceTests(),
        accessibility: await this.runAccessibilityTests(),
        timestamp: new Date().toISOString()
      };

      // Analyze test results
      const analysis = this.analyzeTestResults(testResults);
      this.testResults = { ...testResults, analysis };
      
      // Store in history
      this.testHistory.push(testResults);
      if (this.testHistory.length > 10) {
        this.testHistory.shift(); // Keep only last 10 runs
      }

      this.log('Test suite completed', 'info');
      return testResults;
    } catch (error) {
      this.log(`Test suite failed: ${error.message}`, 'error');
      return null;
    }
  }

  async runUnitTests() {
    try {
      this.log('Running unit tests...', 'info');
      
      // Check if vitest is available
      if (fs.existsSync(path.join(this.workingDir, 'vitest.config.ts'))) {
        const result = execSync('npm run test:unit --silent', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        return this.parseTestOutput(result, 'unit');
      } else {
        // Fallback to generic test command
        const result = execSync('npm test --silent', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        return this.parseTestOutput(result, 'unit');
      }
    } catch (error) {
      return this.parseTestOutput(error.stdout || error.stderr || '', 'unit', true);
    }
  }

  async runIntegrationTests() {
    try {
      this.log('Running integration tests...', 'info');
      
      // Check for integration test scripts
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
      
      if (packageJson.scripts['test:integration']) {
        const result = execSync('npm run test:integration --silent', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        return this.parseTestOutput(result, 'integration');
      } else {
        this.log('No integration tests configured', 'info');
        return { status: 'skipped', message: 'No integration tests configured' };
      }
    } catch (error) {
      return this.parseTestOutput(error.stdout || error.stderr || '', 'integration', true);
    }
  }

  async runE2ETests() {
    try {
      this.log('Running end-to-end tests...', 'info');
      
      // Check for E2E test scripts
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
      
      if (packageJson.scripts['test:e2e']) {
        const result = execSync('npm run test:e2e --silent', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        return this.parseTestOutput(result, 'e2e');
      } else {
        this.log('No E2E tests configured', 'info');
        return { status: 'skipped', message: 'No E2E tests configured' };
      }
    } catch (error) {
      return this.parseTestOutput(error.stdout || error.stderr || '', 'e2e', true);
    }
  }

  async runPerformanceTests() {
    try {
      this.log('Running performance tests...', 'info');
      
      // Check for performance test scripts
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
      
      if (packageJson.scripts['test:perf']) {
        const result = execSync('npm run test:perf --silent', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        return this.parseTestOutput(result, 'performance');
      } else {
        this.log('No performance tests configured', 'info');
        return { status: 'skipped', message: 'No performance tests configured' };
      }
    } catch (error) {
      return this.parseTestOutput(error.stdout || error.stderr || '', 'performance', true);
    }
  }

  async runAccessibilityTests() {
    try {
      this.log('Running accessibility tests...', 'info');
      
      // Check for accessibility test scripts
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.workingDir, 'package.json'), 'utf8'));
      
      if (packageJson.scripts['test:a11y']) {
        const result = execSync('npm run test:a11y --silent', { 
          cwd: this.workingDir, 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        return this.parseTestOutput(result, 'accessibility');
      } else {
        this.log('No accessibility tests configured', 'info');
        return { status: 'skipped', message: 'No accessibility tests configured' };
      }
    } catch (error) {
      return this.parseTestOutput(error.stdout || error.stderr || '', 'accessibility', true);
    }
  }

  parseTestOutput(output, testType, isError = false) {
    try {
      // Try to parse structured output
      if (output.includes('"testResults"') || output.includes('"stats"')) {
        const jsonMatch = output.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          return {
            status: isError ? 'failed' : 'passed',
            type: testType,
            data: parsed,
            timestamp: new Date().toISOString()
          };
        }
      }

      // Parse common test output patterns
      const lines = output.split('\n');
      let passed = 0;
      let failed = 0;
      let skipped = 0;
      let total = 0;

      for (const line of lines) {
        if (line.includes('✓') || line.includes('PASS') || line.includes('passed')) {
          passed++;
        } else if (line.includes('✗') || line.includes('FAIL') || line.includes('failed')) {
          failed++;
        } else if (line.includes('SKIP') || line.includes('skipped')) {
          skipped++;
        }
        
        if (line.includes('Tests:') || line.includes('Total:')) {
          const totalMatch = line.match(/(\d+)/);
          if (totalMatch) total = parseInt(totalMatch[1]);
        }
      }

      return {
        status: failed > 0 ? 'failed' : 'passed',
        type: testType,
        summary: {
          passed,
          failed,
          skipped,
          total: total || (passed + failed + skipped)
        },
        output: output.substring(0, 1000), // Limit output size
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        status: 'error',
        type: testType,
        error: error.message,
        output: output.substring(0, 1000),
        timestamp: new Date().toISOString()
      };
    }
  }

  analyzeTestResults(testResults) {
    const analysis = {
      overallStatus: 'passed',
      totalTests: 0,
      passedTests: 0,
      failedTests: 0,
      skippedTests: 0,
      successRate: 0,
      trends: this.analyzeTestTrends(),
      recommendations: []
    };

    // Aggregate results
    for (const [type, result] of Object.entries(testResults)) {
      if (type === 'timestamp') continue;
      
      if (result.status === 'passed' && result.summary) {
        analysis.totalTests += result.summary.total;
        analysis.passedTests += result.summary.passed;
        analysis.failedTests += result.summary.failed;
        analysis.skippedTests += result.summary.skipped;
      } else if (result.status === 'failed') {
        analysis.overallStatus = 'failed';
      }
    }

    // Calculate success rate
    if (analysis.totalTests > 0) {
      analysis.successRate = (analysis.passedTests / analysis.totalTests) * 100;
    }

    // Generate recommendations
    analysis.recommendations = this.generateTestRecommendations(analysis, testResults);

    return analysis;
  }

  analyzeTestTrends() {
    if (this.testHistory.length < 2) {
      return { trend: 'insufficient_data', message: 'Need more test runs to analyze trends' };
    }

    const recent = this.testHistory[this.testHistory.length - 1];
    const previous = this.testHistory[this.testHistory.length - 2];
    
    let trend = 'stable';
    let message = 'Test performance is stable';
    
    if (recent.analysis && previous.analysis) {
      const recentRate = recent.analysis.successRate;
      const previousRate = previous.analysis.successRate;
      
      if (recentRate > previousRate + 5) {
        trend = 'improving';
        message = 'Test success rate is improving';
      } else if (recentRate < previousRate - 5) {
        trend = 'declining';
        message = 'Test success rate is declining - investigate failures';
      }
    }

    return { trend, message };
  }

  generateTestRecommendations(analysis, testResults) {
    const recommendations = [];
    
    if (analysis.successRate < 90) {
      recommendations.push('Test success rate is below 90% - review failing tests');
    }
    
    if (analysis.failedTests > 0) {
      recommendations.push('Fix failing tests to improve reliability');
    }
    
    if (analysis.skippedTests > analysis.totalTests * 0.1) {
      recommendations.push('High number of skipped tests - consider enabling or removing');
    }
    
    // Check for missing test types
    const testTypes = Object.keys(testResults).filter(k => k !== 'timestamp');
    if (!testTypes.includes('unit')) {
      recommendations.push('Add unit tests for better code coverage');
    }
    
    if (!testTypes.includes('integration')) {
      recommendations.push('Consider adding integration tests');
    }
    
    if (!testTypes.includes('e2e')) {
      recommendations.push('Add end-to-end tests for critical user flows');
    }

    return recommendations;
  }

  async checkTestCoverage() {
    try {
      this.log('📊 Checking test coverage...', 'info');
      
      // Check if coverage is configured
      const vitestConfig = path.join(this.workingDir, 'vitest.config.ts');
      if (fs.existsSync(vitestConfig)) {
        const configContent = fs.readFileSync(vitestConfig, 'utf8');
        if (configContent.includes('coverage')) {
          try {
            const result = execSync('npm run test:coverage --silent', { 
              cwd: this.workingDir, 
              encoding: 'utf8',
              stdio: 'pipe'
            });
            
            this.coverageData = this.parseCoverageOutput(result);
            this.log('Coverage analysis completed', 'info');
            return true;
          } catch (error) {
            this.log(`Coverage check failed: ${error.message}`, 'warn');
            return false;
          }
        }
      }
      
      this.log('No coverage configuration found', 'info');
      return false;
    } catch (error) {
      this.log(`Coverage check failed: ${error.message}`, 'error');
      return false;
    }
  }

  parseCoverageOutput(output) {
    try {
      // Look for coverage summary
      const lines = output.split('\n');
      const coverage = {
        statements: 0,
        branches: 0,
        functions: 0,
        lines: 0,
        timestamp: new Date().toISOString()
      };

      for (const line of lines) {
        if (line.includes('Statements') && line.includes('%')) {
          const match = line.match(/(\d+(?:\.\d+)?)%/);
          if (match) coverage.statements = parseFloat(match[1]);
        } else if (line.includes('Branches') && line.includes('%')) {
          const match = line.match(/(\d+(?:\.\d+)?)%/);
          if (match) coverage.branches = parseFloat(match[1]);
        } else if (line.includes('Functions') && line.includes('%')) {
          const match = line.match(/(\d+(?:\.\d+)?)%/);
          if (match) coverage.functions = parseFloat(match[1]);
        } else if (line.includes('Lines') && line.includes('%')) {
          const match = line.match(/(\d+(?:\.\d+)?)%/);
          if (match) coverage.lines = parseFloat(match[1]);
        }
      }

      return coverage;
    } catch (error) {
      return {
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async runCIProcess() {
    try {
      this.log('🔄 Running CI process...', 'info');
      
      const ciSteps = [
        { name: 'Install dependencies', command: 'npm install' },
        { name: 'Lint code', command: 'npm run lint' },
        { name: 'Type check', command: 'npm run type-check' },
        { name: 'Run tests', command: 'npm test' },
        { name: 'Build project', command: 'npm run build' }
      ];

      const results = [];
      
      for (const step of ciSteps) {
        try {
          this.log(`Running: ${step.name}`, 'info');
          execSync(step.command, { 
            cwd: this.workingDir, 
            encoding: 'utf8',
            stdio: 'pipe'
          });
          
          results.push({
            step: step.name,
            status: 'passed',
            timestamp: new Date().toISOString()
          });
          
          this.log(`✅ ${step.name} completed successfully`, 'info');
        } catch (error) {
          results.push({
            step: step.name,
            status: 'failed',
            error: error.message,
            timestamp: new Date().toISOString()
          });
          
          this.log(`❌ ${step.name} failed: ${error.message}`, 'error');
          break; // Stop on first failure
        }
      }

      const ciStatus = results.every(r => r.status === 'passed') ? 'passed' : 'failed';
      
      this.deploymentStatus = {
        ci: {
          status: ciStatus,
          steps: results,
          timestamp: new Date().toISOString()
        }
      };

      this.log(`CI process ${ciStatus}`, ciStatus === 'passed' ? 'info' : 'error');
      return ciStatus === 'passed';
    } catch (error) {
      this.log(`CI process failed: ${error.message}`, 'error');
      return false;
    }
  }

  async generateTestReport() {
    try {
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          overallStatus: this.testResults.analysis?.overallStatus || 'unknown',
          totalTests: this.testResults.analysis?.totalTests || 0,
          successRate: this.testResults.analysis?.successRate || 0,
          coverage: this.coverageData
        },
        testResults: this.testResults,
        deploymentStatus: this.deploymentStatus,
        trends: this.testResults.analysis?.trends,
        recommendations: this.testResults.analysis?.recommendations || [],
        history: this.testHistory.slice(-5) // Last 5 runs
      };

      // Save report
      const reportPath = path.join(this.workingDir, 'logs', 'smart-testing-report.json');
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      this.log('Smart testing report generated', 'info');
      return report;
    } catch (error) {
      this.log(`Report generation failed: ${error.message}`, 'error');
      return null;
    }
  }

  async run() {
    this.log('🧪 Starting Smart Testing & CI/CD...', 'info');
    
    try {
      await this.runTestSuite();
      await this.checkTestCoverage();
      await this.runCIProcess();
      
      const report = await this.generateTestReport();
      
      if (report) {
        this.log(`✅ Smart testing completed:`, 'info');
        this.log(`   Overall Status: ${report.summary.overallStatus}`, 'info');
        this.log(`   Success Rate: ${report.summary.successRate.toFixed(1)}%`, 'info');
        this.log(`   Total Tests: ${report.summary.totalTests}`, 'info');
        
        if (report.recommendations.length > 0) {
          this.log(`   Recommendations: ${report.recommendations.length}`, 'info');
        }
      }
      
    } catch (error) {
      this.log(`Smart testing failed: ${error.message}`, 'error');
    }
  }

  start() {
    this.log('🔄 Smart testing started with interval:', 'info');
    this.log(`   Interval: ${this.interval / 1000} seconds`, 'info');
    this.log(`   Working directory: ${this.workingDir}`, 'info');
    
    // Run immediately
    this.run();
    
    // Set up interval
    setInterval(() => {
      this.run();
    }, this.interval);
  }
}

// Start the automation if this file is run directly
if (require.main === module) {
  const testing = new SmartTesting();
  testing.start();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    testing.log('🛑 Smart testing shutting down...', 'info');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    testing.log('🛑 Smart testing shutting down...', 'info');
    process.exit(0);
  });
}

module.exports = SmartTesting;