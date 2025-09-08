const { spawn, exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');
const chokidar = require('chokidar');

class QAAutomation {
  constructor() {
    this.config = {
      testing: {
        unit: {
          command: 'npm run test:unit',
          cwd: './',
          timeout: 120000, // 2 minutes
          coverage: 80
        },
        integration: {
          command: 'npm run test:integration',
          cwd: './',
          timeout: 300000, // 5 minutes
          coverage: 70
        },
        e2e: {
          command: 'npm run test:e2e',
          cwd: './',
          timeout: 600000, // 10 minutes
          coverage: 60
        }
      },
      quality: {
        linting: {
          command: 'npm run lint',
          cwd: './',
          timeout: 60000 // 1 minute
        },
        typeChecking: {
          command: 'npm run type-check',
          cwd: './',
          timeout: 120000 // 2 minutes
        },
        security: {
          command: 'npm audit',
          cwd: './',
          timeout: 60000 // 1 minute
        }
      },
      performance: {
        lighthouse: {
          command: 'npx lighthouse',
          cwd: './',
          timeout: 300000 // 5 minutes
        },
        loadTesting: {
          command: 'npx artillery',
          cwd: './',
          timeout: 600000 // 10 minutes
        }
      }
    };
    
    this.testResults = new Map();
    this.qualityResults = new Map();
    this.performanceResults = new Map();
    this.changedFiles = new Set();
    this.isRunning = false;
  }

  // Main QA automation method
  async runQA(options = {}) {
    const {
      type = 'all', // 'all', 'testing', 'quality', 'performance'
      scope = 'changed', // 'all', 'changed', 'critical'
      environment = 'development',
      watch = false
    } = options;

    console.log('🔍 Starting intelligent QA automation...');
    console.log(`📋 Type: ${type}`);
    console.log(`🎯 Scope: ${scope}`);
    console.log(`🌍 Environment: ${environment}`);
    console.log(`👀 Watch mode: ${watch}`);

    this.isRunning = true;

    try {
      // Detect changed files if scope is 'changed'
      if (scope === 'changed') {
        await this.detectChangedFiles();
      }

      // Run selected QA processes
      if (type === 'all' || type === 'testing') {
        await this.runTesting(scope, environment);
      }

      if (type === 'all' || type === 'quality') {
        await this.runQualityChecks(scope, environment);
      }

      if (type === 'all' || type === 'performance') {
        await this.runPerformanceTests(scope, environment);
      }

      // Generate comprehensive report
      const report = await this.generateReport();
      
      console.log('✅ QA automation completed successfully!');
      console.log('📊 Results:', report.summary);
      
      // Start watching if requested
      if (watch) {
        await this.startWatching();
      }

      return report;

    } catch (error) {
      console.error('❌ QA automation failed:', error.message);
      throw error;
    } finally {
      this.isRunning = false;
    }
  }

  // Detect changed files using git
  async detectChangedFiles() {
    console.log('🔍 Detecting changed files...');
    
    try {
      // Get staged and unstaged changes
      const stagedChanges = await this.runCommand('git diff --cached --name-only', './');
      const unstagedChanges = await this.runCommand('git diff --name-only', './');
      
      const allChanges = [...stagedChanges.split('\n'), ...unstagedChanges.split('\n')]
        .filter(file => file.trim())
        .filter(file => !file.includes('node_modules'))
        .filter(file => !file.includes('dist'))
        .filter(file => !file.includes('build'));

      this.changedFiles = new Set(allChanges);
      
      console.log(`📝 Detected ${this.changedFiles.size} changed files`);
      
      if (this.changedFiles.size > 0) {
        console.log('Changed files:', Array.from(this.changedFiles).slice(0, 10));
        if (this.changedFiles.size > 10) {
          console.log(`... and ${this.changedFiles.size - 10} more`);
        }
      }

    } catch (error) {
      console.warn('⚠️  Could not detect changed files, running all tests');
      this.changedFiles = new Set();
    }
  }

  // Run testing based on scope
  async runTesting(scope, environment) {
    console.log('🧪 Running intelligent testing...');
    
    const testTypes = this.determineTestTypes(scope);
    
    for (const testType of testTypes) {
      console.log(`🔬 Running ${testType} tests...`);
      
      try {
        const result = await this.runTest(testType, environment);
        this.testResults.set(testType, result);
        
        if (result.success) {
          console.log(`✅ ${testType} tests passed (${result.duration}ms)`);
        } else {
          console.log(`❌ ${testType} tests failed`);
          if (scope === 'critical') {
            throw new Error(`${testType} tests failed`);
          }
        }
      } catch (error) {
        console.error(`❌ ${testType} tests failed:`, error.message);
        if (scope === 'critical') {
          throw error;
        }
      }
    }
  }

  // Determine which test types to run based on scope
  determineTestTypes(scope) {
    if (scope === 'all') {
      return ['unit', 'integration', 'e2e'];
    } else if (scope === 'changed') {
      return this.determineRelevantTests();
    } else if (scope === 'critical') {
      return ['unit', 'integration'];
    }
    
    return ['unit'];
  }

  // Determine relevant tests based on changed files
  determineRelevantTests() {
    const testTypes = new Set(['unit']); // Always run unit tests
    
    for (const file of this.changedFiles) {
      if (file.includes('server/') || file.includes('api/')) {
        testTypes.add('integration');
      }
      
      if (file.includes('pages/') || file.includes('components/')) {
        testTypes.add('e2e');
      }
      
      if (file.includes('utils/') || file.includes('services/')) {
        testTypes.add('integration');
      }
    }
    
    return Array.from(testTypes);
  }

  // Run a specific test type
  async runTest(testType, environment) {
    const config = this.config.testing[testType];
    if (!config) {
      throw new Error(`Unknown test type: ${testType}`);
    }

    const startTime = Date.now();
    
    try {
      const output = await this.runCommand(config.command, config.cwd, config.timeout);
      
      const result = {
        type: testType,
        success: true,
        output,
        duration: Date.now() - startTime,
        timestamp: new Date().toISOString(),
        environment
      };

      // Parse test results for coverage and other metrics
      const metrics = this.parseTestOutput(output, testType);
      result.metrics = metrics;

      return result;

    } catch (error) {
      return {
        type: testType,
        success: false,
        error: error.message,
        duration: Date.now() - startTime,
        timestamp: new Date().toISOString(),
        environment
      };
    }
  }

  // Parse test output for metrics
  parseTestOutput(output, testType) {
    const metrics = {};
    
    // Extract coverage information
    const coverageMatch = output.match(/All files\s+\|\s+(\d+\.?\d*)%\|/);
    if (coverageMatch) {
      metrics.coverage = parseFloat(coverageMatch[1]);
    }
    
    // Extract test counts
    const testMatch = output.match(/(\d+) tests? passed/);
    if (testMatch) {
      metrics.testsPassed = parseInt(testMatch[1]);
    }
    
    const failedMatch = output.match(/(\d+) tests? failed/);
    if (failedMatch) {
      metrics.testsFailed = parseInt(failedMatch[1]);
    }
    
    // Extract performance metrics
    const timeMatch = output.match(/Time:\s+(\d+\.?\d*)s/);
    if (timeMatch) {
      metrics.executionTime = parseFloat(timeMatch[1]);
    }
    
    return metrics;
  }

  // Run quality checks
  async runQualityChecks(scope, environment) {
    console.log('🔍 Running quality checks...');
    
    const qualityTypes = ['linting', 'typeChecking', 'security'];
    
    for (const qualityType of qualityTypes) {
      console.log(`🔎 Running ${qualityType}...`);
      
      try {
        const result = await this.runQualityCheck(qualityType, environment);
        this.qualityResults.set(qualityType, result);
        
        if (result.success) {
          console.log(`✅ ${qualityType} passed`);
        } else {
          console.log(`❌ ${qualityType} failed`);
          if (scope === 'critical') {
            throw new Error(`${qualityType} failed`);
          }
        }
      } catch (error) {
        console.error(`❌ ${qualityType} failed:`, error.message);
        if (scope === 'critical') {
          throw error;
        }
      }
    }
  }

  // Run a specific quality check
  async runQualityCheck(qualityType, environment) {
    const config = this.config.quality[qualityType];
    if (!config) {
      throw new Error(`Unknown quality check type: ${qualityType}`);
    }

    const startTime = Date.now();
    
    try {
      const output = await this.runCommand(config.command, config.cwd, config.timeout);
      
      return {
        type: qualityType,
        success: true,
        output,
        duration: Date.now() - startTime,
        timestamp: new Date().toISOString(),
        environment
      };

    } catch (error) {
      return {
        type: qualityType,
        success: false,
        error: error.message,
        duration: Date.now() - startTime,
        timestamp: new Date().toISOString(),
        environment
      };
    }
  }

  // Run performance tests
  async runPerformanceTests(scope, environment) {
    console.log('⚡ Running performance tests...');
    
    // Only run performance tests in staging/production or when explicitly requested
    if (environment === 'development' && scope !== 'all') {
      console.log('⏭️  Skipping performance tests in development mode');
      return;
    }
    
    const performanceTypes = ['lighthouse', 'loadTesting'];
    
    for (const perfType of performanceTypes) {
      console.log(`🚀 Running ${perfType}...`);
      
      try {
        const result = await this.runPerformanceTest(perfType, environment);
        this.performanceResults.set(perfType, result);
        
        if (result.success) {
          console.log(`✅ ${perfType} completed`);
        } else {
          console.log(`❌ ${perfType} failed`);
        }
      } catch (error) {
        console.error(`❌ ${perfType} failed:`, error.message);
      }
    }
  }

  // Run a specific performance test
  async runPerformanceTest(perfType, environment) {
    const config = this.config.performance[perfType];
    if (!config) {
      throw new Error(`Unknown performance test type: ${perfType}`);
    }

    const startTime = Date.now();
    
    try {
      let command = config.command;
      
      // Customize commands based on environment
      if (perfType === 'lighthouse') {
        const url = environment === 'production' ? 'https://your-domain.com' : 'http://localhost:3000';
        command = `${config.command} ${url} --output=json --output-path=./reports/lighthouse-${environment}.json`;
      }
      
      if (perfType === 'loadTesting') {
        const configFile = environment === 'production' ? 'load-test-prod.yml' : 'load-test-dev.yml';
        command = `${config.command} ${configFile}`;
      }
      
      const output = await this.runCommand(command, config.cwd, config.timeout);
      
      return {
        type: perfType,
        success: true,
        output,
        duration: Date.now() - startTime,
        timestamp: new Date().toISOString(),
        environment
      };

    } catch (error) {
      return {
        type: perfType,
        success: false,
        error: error.message,
        duration: Date.now() - startTime,
        timestamp: new Date().toISOString(),
        environment
      };
    }
  }

  // Generate comprehensive QA report
  async generateReport() {
    console.log('📊 Generating QA report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalTests: 0,
        passedTests: 0,
        failedTests: 0,
        totalQualityChecks: 0,
        passedQualityChecks: 0,
        failedQualityChecks: 0,
        totalPerformanceTests: 0,
        passedPerformanceTests: 0,
        failedPerformanceTests: 0
      },
      details: {
        testing: Array.from(this.testResults.values()),
        quality: Array.from(this.qualityResults.values()),
        performance: Array.from(this.performanceResults.values())
      },
      recommendations: []
    };

    // Calculate summary statistics
    for (const result of this.testResults.values()) {
      report.summary.totalTests++;
      if (result.success) {
        report.summary.passedTests++;
      } else {
        report.summary.failedTests++;
      }
    }

    for (const result of this.qualityResults.values()) {
      report.summary.totalQualityChecks++;
      if (result.success) {
        report.summary.passedQualityChecks++;
      } else {
        report.summary.failedQualityChecks++;
      }
    }

    for (const result of this.performanceResults.values()) {
      report.summary.totalPerformanceTests++;
      if (result.success) {
        report.summary.passedPerformanceTests++;
      } else {
        report.summary.failedPerformanceTests++;
      }
    }

    // Generate intelligent recommendations
    report.recommendations = this.generateRecommendations(report);

    // Save report to file
    await this.saveReport(report);

    return report;
  }

  // Generate intelligent recommendations based on results
  generateRecommendations(report) {
    const recommendations = [];

    // Test coverage recommendations
    const testResults = report.details.testing;
    for (const result of testResults) {
      if (result.metrics && result.metrics.coverage) {
        const config = this.config.testing[result.type];
        if (result.metrics.coverage < config.coverage) {
          recommendations.push({
            type: 'warning',
            category: 'testing',
            message: `Increase ${result.type} test coverage from ${result.metrics.coverage}% to at least ${config.coverage}%`,
            priority: 'medium'
          });
        }
      }
    }

    // Quality check recommendations
    const qualityResults = report.details.quality;
    for (const result of qualityResults) {
      if (!result.success) {
        recommendations.push({
          type: 'error',
          category: 'quality',
          message: `Fix ${result.type} issues: ${result.error}`,
          priority: 'high'
        });
      }
    }

    // Performance recommendations
    const perfResults = report.details.performance;
    for (const result of perfResults) {
      if (result.success && result.metrics) {
        // Add performance-specific recommendations based on metrics
        if (result.metrics.lighthouseScore < 90) {
          recommendations.push({
            type: 'warning',
            category: 'performance',
            message: 'Lighthouse score below 90, consider optimizing performance',
            priority: 'medium'
          });
        }
      }
    }

    return recommendations;
  }

  // Save report to file
  async saveReport(report) {
    try {
      const reportsDir = './reports';
      await fs.mkdir(reportsDir, { recursive: true });
      
      const filename = `qa-report-${Date.now()}.json`;
      const filepath = path.join(reportsDir, filename);
      
      await fs.writeFile(filepath, JSON.stringify(report, null, 2));
      console.log(`📄 Report saved to: ${filepath}`);
      
    } catch (error) {
      console.warn('⚠️  Could not save report:', error.message);
    }
  }

  // Start watching for changes
  async startWatching() {
    console.log('👀 Starting file watching for continuous QA...');
    
    const watcher = chokidar.watch([
      'src/**/*.{js,jsx,ts,tsx}',
      'server/**/*.{js,ts}',
      'tests/**/*.{js,ts}',
      '!**/node_modules/**',
      '!**/dist/**',
      '!**/build/**'
    ], {
      ignored: /node_modules|dist|build|\.git/,
      persistent: true,
      ignoreInitial: true
    });

    watcher.on('change', async (filePath) => {
      console.log(`📝 File changed: ${filePath}`);
      
      // Add to changed files
      this.changedFiles.add(filePath);
      
      // Run quick QA on changed files
      await this.runQuickQA(filePath);
    });

    watcher.on('add', (filePath) => {
      console.log(`➕ File added: ${filePath}`);
      this.changedFiles.add(filePath);
    });

    watcher.on('unlink', (filePath) => {
      console.log(`➖ File removed: ${filePath}`);
      this.changedFiles.delete(filePath);
    });
  }

  // Run quick QA on a single file
  async runQuickQA(filePath) {
    console.log(`🔍 Running quick QA on ${filePath}...`);
    
    try {
      // Determine what type of QA to run based on file type
      if (filePath.includes('.test.') || filePath.includes('.spec.')) {
        // Test file changed, run related tests
        await this.runRelatedTests(filePath);
      } else if (filePath.includes('.ts') || filePath.includes('.js')) {
        // Source file changed, run type checking and linting
        await this.runQuickQualityChecks(filePath);
      }
    } catch (error) {
      console.error(`❌ Quick QA failed for ${filePath}:`, error.message);
    }
  }

  // Run tests related to a changed file
  async runRelatedTests(filePath) {
    // Extract test name and run specific test
    const testName = path.basename(filePath, path.extname(filePath));
    console.log(`🧪 Running tests related to ${testName}...`);
    
    try {
      await this.runCommand(`npm test -- --testNamePattern="${testName}"`, './', 60000);
      console.log(`✅ Tests for ${testName} passed`);
    } catch (error) {
      console.error(`❌ Tests for ${testName} failed`);
    }
  }

  // Run quick quality checks on a file
  async runQuickQualityChecks(filePath) {
    console.log(`🔍 Running quick quality checks on ${filePath}...`);
    
    try {
      // Run ESLint on specific file
      await this.runCommand(`npx eslint ${filePath}`, './', 30000);
      console.log(`✅ ESLint passed for ${filePath}`);
      
      // Run TypeScript check if applicable
      if (filePath.includes('.ts')) {
        await this.runCommand(`npx tsc --noEmit ${filePath}`, './', 30000);
        console.log(`✅ TypeScript check passed for ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Quality checks failed for ${filePath}:`, error.message);
    }
  }

  // Utility methods
  async runCommand(command, cwd, timeout = 60000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error(`Command timeout: ${command}`));
      }, timeout);
      
      exec(command, { cwd }, (error, stdout, stderr) => {
        clearTimeout(timer);
        
        if (error) {
          reject(error);
          return;
        }
        
        resolve(stdout);
      });
    });
  }

  // Stop watching
  stopWatching() {
    if (this.watcher) {
      this.watcher.close();
      console.log('👀 File watching stopped');
    }
  }

  // Get current status
  getStatus() {
    return {
      isRunning: this.isRunning,
      testResults: Array.from(this.testResults.values()),
      qualityResults: Array.from(this.qualityResults.values()),
      performanceResults: Array.from(this.performanceResults.values()),
      changedFiles: Array.from(this.changedFiles)
    };
  }
}

// CLI interface
if (require.main === module) {
  const automation = new QAAutomation();
  
  const options = {
    type: process.argv[2] || 'all',
    scope: process.argv[3] || 'changed',
    environment: process.argv[4] || 'development',
    watch: process.argv.includes('--watch')
  };
  
  console.log(`🔍 Bolt Zion QA Automation`);
  console.log(`📋 Options:`, options);
  console.log(`⏰ Started at: ${new Date().toISOString()}`);
  console.log('');
  
  automation.runQA(options)
    .then((report) => {
      console.log('');
      console.log('🎉 QA automation completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.log('');
      console.error('💥 QA automation failed!');
      process.exit(1);
    });
}

module.exports = QAAutomation;