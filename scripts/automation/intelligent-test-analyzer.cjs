#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting Intelligent Test Analyzer...');

// Get automation interval from environment variable (default: 3 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 10800000; // 3 hours

class IntelligentTestAnalyzer {
  constructor() {
    this.testResults = {
      coverage: {
        statements: 0,
        branches: 0,
        functions: 0,
        lines: 0
      },
      untestedFiles: [],
      lowCoverageFiles: [],
      testQuality: {
        testCount: 0,
        testFileCount: 0,
        averageTestSize: 0,
        testPatterns: []
      },
      recommendations: [],
      testMetrics: {}
    };
    this.reportDir = path.join(process.cwd(), 'test-analysis-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async runAnalysis() {
    try {
      console.log(`🧪 Running intelligent test analysis at ${new Date().toISOString()}`);
      
      // Analyze test coverage
      await this.analyzeTestCoverage();
      
      // Analyze test quality and patterns
      await this.analyzeTestQuality();
      
      // Identify untested and low-coverage areas
      await this.identifyCoverageGaps();
      
      // Analyze test patterns and anti-patterns
      await this.analyzeTestPatterns();
      
      // Generate intelligent test recommendations
      await this.generateTestRecommendations();
      
      // Save comprehensive report
      await this.saveReport();
      
      console.log('✅ Intelligent test analysis completed successfully');
      
    } catch (error) {
      console.error('❌ Intelligent test analysis failed:', error.message);
    }
  }

  async analyzeTestCoverage() {
    console.log('📊 Analyzing test coverage...');
    
    try {
      // Run tests with coverage if available
      if (this.hasTestScript()) {
        await this.runTestsWithCoverage();
      } else {
        console.log('⚠️  No test script found in package.json');
        this.testResults.coverage = { statements: 0, branches: 0, functions: 0, lines: 0 };
      }
    } catch (error) {
      console.log('⚠️  Could not run test coverage:', error.message);
    }
  }

  hasTestScript() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      return packageJson.scripts && (
        packageJson.scripts.test || 
        packageJson.scripts['test:coverage'] || 
        packageJson.scripts['test:unit']
      );
    } catch (error) {
      return false;
    }
  }

  async runTestsWithCoverage() {
    try {
      // Try different test coverage commands
      const testCommands = [
        'npm run test:coverage',
        'npm run test -- --coverage',
        'npm run test:unit -- --coverage',
        'npm test -- --coverage'
      ];

      for (const command of testCommands) {
        try {
          console.log(`🔄 Trying: ${command}`);
          const output = execSync(command, { 
            encoding: 'utf8',
            stdio: 'pipe',
            timeout: 300000 // 5 minutes timeout
          });
          
          // Parse coverage from output
          this.parseCoverageOutput(output);
          console.log('✅ Test coverage analysis completed');
          return;
        } catch (error) {
          console.log(`⚠️  Command failed: ${command}`);
          continue;
        }
      }
      
      console.log('⚠️  All test coverage commands failed');
      
    } catch (error) {
      console.log('⚠️  Test coverage analysis failed:', error.message);
    }
  }

  parseCoverageOutput(output) {
    // Look for coverage patterns in the output
    const coveragePatterns = [
      /Statements\s*:\s*(\d+(?:\.\d+)?)%/,
      /Branches\s*:\s*(\d+(?:\.\d+)?)%/,
      /Functions\s*:\s*(\d+(?:\.\d+)?)%/,
      /Lines\s*:\s*(\d+(?:\.\d+)?)%/
    ];

    coveragePatterns.forEach((pattern, index) => {
      const match = output.match(pattern);
      if (match) {
        const percentage = parseFloat(match[1]);
        switch (index) {
          case 0: this.testResults.coverage.statements = percentage; break;
          case 1: this.testResults.coverage.branches = percentage; break;
          case 2: this.testResults.coverage.functions = percentage; break;
          case 3: this.testResults.coverage.lines = percentage; break;
        }
      }
    });

    // Also look for coverage summary files
    this.checkCoverageFiles();
  }

  checkCoverageFiles() {
    const coveragePaths = [
      'coverage/lcov-report/index.html',
      'coverage/coverage-summary.json',
      'coverage/coverage-final.json'
    ];

    coveragePaths.forEach(coveragePath => {
      if (fs.existsSync(coveragePath)) {
        console.log(`📁 Found coverage file: ${coveragePath}`);
        this.parseCoverageFile(coveragePath);
      }
    });
  }

  parseCoverageFile(filePath) {
    try {
      if (filePath.endsWith('.json')) {
        const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        this.parseCoverageData(content);
      }
    } catch (error) {
      console.log(`⚠️  Could not parse coverage file ${filePath}:`, error.message);
    }
  }

  parseCoverageData(coverageData) {
    // Handle different coverage report formats
    if (coverageData.total) {
      // Istanbul/nyc format
      this.testResults.coverage.statements = coverageData.total.statements.pct;
      this.testResults.coverage.branches = coverageData.total.branches.pct;
      this.testResults.coverage.functions = coverageData.total.functions.pct;
      this.testResults.coverage.lines = coverageData.total.lines.pct;
    } else if (coverageData.coverage) {
      // Alternative format
      Object.keys(coverageData.coverage).forEach(filePath => {
        const fileCoverage = coverageData.coverage[filePath];
        this.analyzeFileCoverage(filePath, fileCoverage);
      });
    }
  }

  analyzeFileCoverage(filePath, fileCoverage) {
    const coverage = fileCoverage.lines || fileCoverage.statements || {};
    const coveredLines = Object.values(coverage).filter(val => val > 0).length;
    const totalLines = Object.keys(coverage).length;
    const fileCoveragePercentage = totalLines > 0 ? (coveredLines / totalLines) * 100 : 0;

    if (fileCoveragePercentage < 80) {
      this.testResults.lowCoverageFiles.push({
        file: filePath,
        coverage: fileCoveragePercentage,
        coveredLines,
        totalLines
      });
    }
  }

  async analyzeTestQuality() {
    console.log('🔍 Analyzing test quality and patterns...');
    
    const testDir = this.findTestDirectory();
    if (!testDir) {
      console.log('⚠️  No test directory found');
      return;
    }

    const testFiles = this.getAllTestFiles(testDir);
    this.testResults.testQuality.testFileCount = testFiles.length;
    
    let totalTestCount = 0;
    let totalTestSize = 0;

    testFiles.forEach(testFile => {
      const content = fs.readFileSync(testFile, 'utf8');
      const testAnalysis = this.analyzeTestFile(testFile, content);
      
      totalTestCount += testAnalysis.testCount;
      totalTestSize += testAnalysis.testSize;
      
      if (testAnalysis.patterns.length > 0) {
        this.testResults.testQuality.testPatterns.push(...testAnalysis.patterns);
      }
    });

    this.testResults.testQuality.testCount = totalTestCount;
    this.testResults.testQuality.averageTestSize = testFiles.length > 0 ? 
      Math.round(totalTestSize / testFiles.length) : 0;

    console.log(`✅ Analyzed ${testFiles.length} test files with ${totalTestCount} tests`);
  }

  findTestDirectory() {
    const possibleTestDirs = ['tests', 'test', '__tests__', 'spec', 'tests.disabled'];
    
    for (const dir of possibleTestDirs) {
      if (fs.existsSync(dir)) {
        return dir;
      }
    }
    
    return null;
  }

  getAllTestFiles(dirPath) {
    const testFiles = [];
    const testExtensions = ['.test.js', '.test.ts', '.test.jsx', '.test.tsx', '.spec.js', '.spec.ts', '.spec.jsx', '.spec.tsx'];
    
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        testFiles.push(...this.getAllTestFiles(fullPath));
      } else if (testExtensions.some(ext => item.endsWith(ext))) {
        testFiles.push(fullPath);
      }
    });
    
    return testFiles;
  }

  analyzeTestFile(filePath, content) {
    const analysis = {
      testCount: 0,
      testSize: 0,
      patterns: []
    };

    const lines = content.split('\n');
    analysis.testSize = lines.length;

    // Count test functions/describes
    const testPatterns = [
      /describe\s*\(/g,
      /it\s*\(/g,
      /test\s*\(/g,
      /describe\.skip\s*\(/g,
      /it\.skip\s*\(/g,
      /test\.skip\s*\(/g
    ];

    testPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        analysis.testCount += matches.length;
      }
    });

    // Detect test patterns and anti-patterns
    if (content.includes('console.log') && !content.includes('// debug')) {
      analysis.patterns.push({
        type: 'console-in-tests',
        severity: 'low',
        description: 'Console statements in test file',
        suggestion: 'Remove console statements from tests or mark as debug'
      });
    }

    if (content.includes('setTimeout') && content.includes('done')) {
      analysis.patterns.push({
        type: 'async-test-pattern',
        severity: 'medium',
        description: 'setTimeout with done callback detected',
        suggestion: 'Use proper async/await or Promise-based testing'
      });
    }

    if (content.includes('expect(') && content.includes('toBe(')) {
      analysis.patterns.push({
        type: 'basic-assertion',
        severity: 'low',
        description: 'Basic assertion pattern detected',
        suggestion: 'Consider more specific assertions for better test quality'
      });
    }

    return analysis;
  }

  async identifyCoverageGaps() {
    console.log('🔍 Identifying coverage gaps...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) {
      console.log('⚠️  Source directory not found');
      return;
    }

    const sourceFiles = this.getAllFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    const testDir = this.findTestDirectory();
    
    if (testDir) {
      const testFiles = this.getAllTestFiles(testDir);
      
      sourceFiles.forEach(sourceFile => {
        const relativePath = path.relative(process.cwd(), sourceFile);
        const testFile = this.findCorrespondingTestFile(relativePath, testDir);
        
        if (!testFile) {
          this.testResults.untestedFiles.push({
            file: relativePath,
            type: 'no-test-file',
            suggestion: 'Create corresponding test file'
          });
        }
      });
    }

    console.log(`📊 Found ${this.testResults.untestedFiles.length} untested files`);
  }

  getAllFiles(dirPath, extensions) {
    const files = [];
    
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  findCorrespondingTestFile(sourcePath, testDir) {
    const fileName = path.basename(sourcePath, path.extname(sourcePath));
    const possibleTestFiles = [
      path.join(testDir, `${fileName}.test.js`),
      path.join(testDir, `${fileName}.test.ts`),
      path.join(testDir, `${fileName}.test.jsx`),
      path.join(testDir, `${fileName}.test.tsx`),
      path.join(testDir, `${fileName}.spec.js`),
      path.join(testDir, `${fileName}.spec.ts`),
      path.join(testDir, `${fileName}.spec.jsx`),
      path.join(testDir, `${fileName}.spec.tsx`)
    ];

    for (const testFile of possibleTestFiles) {
      if (fs.existsSync(testFile)) {
        return testFile;
      }
    }

    return null;
  }

  async analyzeTestPatterns() {
    console.log('🔍 Analyzing test patterns and anti-patterns...');
    
    // Analyze test metrics
    const totalCoverage = (
      this.testResults.coverage.statements + 
      this.testResults.coverage.branches + 
      this.testResults.coverage.functions + 
      this.testResults.coverage.lines
    ) / 4;

    this.testResults.testMetrics = {
      overallCoverage: totalCoverage,
      coverageGrade: this.getCoverageGrade(totalCoverage),
      testDensity: this.testResults.testQuality.testCount / Math.max(this.testResults.testQuality.testFileCount, 1),
      untestedRatio: this.testResults.untestedFiles.length / Math.max(this.testResults.testQuality.testFileCount, 1)
    };
  }

  getCoverageGrade(coverage) {
    if (coverage >= 90) return 'A+';
    if (coverage >= 80) return 'A';
    if (coverage >= 70) return 'B';
    if (coverage >= 60) return 'C';
    if (coverage >= 50) return 'D';
    return 'F';
  }

  async generateTestRecommendations() {
    console.log('💡 Generating intelligent test recommendations...');
    
    const recommendations = [];

    // Coverage-based recommendations
    if (this.testResults.coverage.lines < 80) {
      recommendations.push({
        priority: 'high',
        type: 'coverage-improvement',
        description: 'Test coverage is below 80%',
        actions: [
          'Focus on high-priority untested files',
          'Add integration tests for complex components',
          'Implement snapshot testing for UI components'
        ]
      });
    }

    if (this.testResults.untestedFiles.length > 0) {
      recommendations.push({
        priority: 'medium',
        type: 'untested-files',
        description: `${this.testResults.untestedFiles.length} files have no tests`,
        actions: [
          'Start with utility functions and hooks',
          'Add component tests for critical UI elements',
          'Implement API endpoint tests'
        ]
      });
    }

    if (this.testResults.testQuality.averageTestSize > 50) {
      recommendations.push({
        priority: 'medium',
        type: 'test-size',
        description: 'Tests are quite large on average',
        actions: [
          'Break down large test files into smaller ones',
          'Group related tests using describe blocks',
          'Extract common test utilities'
        ]
      });
    }

    // Pattern-based recommendations
    const consolePatterns = this.testResults.testQuality.testPatterns.filter(p => p.type === 'console-in-tests');
    if (consolePatterns.length > 0) {
      recommendations.push({
        priority: 'low',
        type: 'test-cleanup',
        description: 'Console statements found in tests',
        actions: [
          'Remove debug console statements',
          'Use proper test logging if needed',
          'Implement test output filtering'
        ]
      });
    }

    this.testResults.recommendations = recommendations;
  }

  async saveReport() {
    const timestamp = new Date().toISOString();
    const reportPath = path.join(this.reportDir, `test-analysis-${Date.now()}.json`);
    
    const report = {
      timestamp,
      summary: {
        overallCoverage: this.testResults.testMetrics.overallCoverage,
        coverageGrade: this.testResults.testMetrics.coverageGrade,
        testCount: this.testResults.testQuality.testCount,
        untestedFiles: this.testResults.untestedFiles.length,
        recommendations: this.testResults.recommendations.length
      },
      details: this.testResults
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Test analysis report saved to ${reportPath}`);
    
    // Also save a summary report
    const summaryPath = path.join(this.reportDir, 'latest-test-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(report.summary, null, 2));
  }
}

// Main execution
async function main() {
  const analyzer = new IntelligentTestAnalyzer();
  
  // Run initial analysis
  await analyzer.runAnalysis();
  
  // Set up continuous analysis
  setInterval(async () => {
    await analyzer.runAnalysis();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🔄 Intelligent test analyzer will run every ${AUTOMATION_INTERVAL / 60000} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Intelligent test analyzer shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Intelligent test analyzer shutting down gracefully...');
  process.exit(0);
});

// Start the analyzer
main().catch(error => {
  console.error('❌ Fatal error in intelligent test analyzer:', error);
  process.exit(1);
});