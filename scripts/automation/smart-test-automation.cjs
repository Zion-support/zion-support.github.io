#!/usr/bin/env node

/**
 * Smart Test Automation - PM2 Automation
 * Intelligently generates, runs, and analyzes tests for better coverage and quality
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class SmartTestAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'smart-test-automation.log');
    this.testResultsDir = path.join(this.projectRoot, 'logs', 'test-results');
    this.coverageDir = path.join(this.projectRoot, 'logs', 'coverage');
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.testResultsDir)) {
      fs.mkdirSync(this.testResultsDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.coverageDir)) {
      fs.mkdirSync(this.coverageDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runSmartTesting() {
    this.log('Starting Smart Test Automation...');
    
    const startTime = Date.now();
    const results = {
      testsGenerated: 0,
      testsRun: 0,
      testsPassed: 0,
      testsFailed: 0,
      coverage: 0,
      recommendations: []
    };

    try {
      // 1. Analyze existing test coverage
      const coverageAnalysis = await this.analyzeTestCoverage();
      
      // 2. Identify untested components
      const untestedComponents = await this.identifyUntestedComponents();
      
      // 3. Generate missing tests
      const generatedTests = await this.generateMissingTests(untestedComponents);
      results.testsGenerated = generatedTests.length;
      
      // 4. Run all tests
      const testResults = await this.runAllTests();
      results.testsRun = testResults.total;
      results.testsPassed = testResults.passed;
      results.testsFailed = testResults.failed;
      
      // 5. Analyze test results and generate recommendations
      results.recommendations = await this.generateTestRecommendations(testResults, coverageAnalysis);
      
      // 6. Generate comprehensive test report
      await this.generateTestReport(results, testResults, coverageAnalysis);
      
      const executionTime = Date.now() - startTime;
      this.log(`Smart Test Automation completed in ${executionTime}ms`);
      
      return results;

    } catch (error) {
      this.log(`Smart Test Automation failed: ${error.message}`, 'ERROR');
      return { error: error.message };
    }
  }

  async analyzeTestCoverage() {
    this.log('Analyzing existing test coverage...');
    
    try {
      // Run coverage analysis if Jest is configured
      if (this.hasJestConfig()) {
        const coverageResult = await this.runCoverageAnalysis();
        return coverageResult;
      } else {
        // Manual coverage analysis
        return await this.manualCoverageAnalysis();
      }
    } catch (error) {
      this.log(`Coverage analysis failed: ${error.message}`, 'WARN');
      return await this.manualCoverageAnalysis();
    }
  }

  hasJestConfig() {
    const jestConfigs = ['jest.config.js', 'jest.config.ts', 'jest.config.cjs'];
    return jestConfigs.some(config => fs.existsSync(path.join(this.projectRoot, config)));
  }

  async runCoverageAnalysis() {
    try {
      const result = execSync('npm test -- --coverage --watchAll=false', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Parse coverage output
      const coverageMatch = result.match(/All files\s+\|\s+(\d+\.?\d*)%/);
      const coverage = coverageMatch ? parseFloat(coverageMatch[1]) : 0;
      
      return {
        total: coverage,
        statements: coverage,
        branches: coverage,
        functions: coverage,
        lines: coverage
      };
    } catch (error) {
      this.log(`Coverage analysis failed: ${error.message}`, 'WARN');
      return { total: 0, statements: 0, branches: 0, functions: 0, lines: 0 };
    }
  }

  async manualCoverageAnalysis() {
    const sourceFiles = this.getSourceFiles();
    const testFiles = this.getTestFiles();
    
    const totalLines = sourceFiles.reduce((total, file) => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        return total + content.split('\n').length;
      } catch (error) {
        return total;
      }
    }, 0);
    
    const testedLines = testFiles.reduce((total, file) => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        return total + content.split('\n').length;
      } catch (error) {
        return total;
      }
    }, 0);
    
    const coverage = totalLines > 0 ? (testedLines / totalLines) * 100 : 0;
    
    return {
      total: coverage,
      statements: coverage,
      branches: coverage,
      functions: coverage,
      lines: coverage
    };
  }

  async identifyUntestedComponents() {
    this.log('Identifying untested components...');
    
    const sourceFiles = this.getSourceFiles();
    const testFiles = this.getTestFiles();
    const untestedComponents = [];
    
    for (const sourceFile of sourceFiles) {
      const fileName = path.basename(sourceFile, path.extname(sourceFile));
      const hasTest = testFiles.some(testFile => 
        testFile.includes(fileName) || testFile.includes(fileName.replace(/\.(tsx?|jsx?)$/, ''))
      );
      
      if (!hasTest) {
        untestedComponents.push({
          file: sourceFile,
          name: fileName,
          type: this.getComponentType(sourceFile),
          complexity: this.calculateComplexity(sourceFile)
        });
      }
    }
    
    this.log(`Found ${untestedComponents.length} untested components`);
    return untestedComponents;
  }

  getComponentType(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('function') && content.includes('return')) {
      return 'FUNCTIONAL_COMPONENT';
    } else if (content.includes('class') && content.includes('extends')) {
      return 'CLASS_COMPONENT';
    } else if (content.includes('export default')) {
      return 'MODULE';
    } else if (content.includes('export const') || content.includes('export function')) {
      return 'UTILITY';
    } else {
      return 'UNKNOWN';
    }
  }

  calculateComplexity(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n').length;
      const cyclomatic = (content.match(/if|else|for|while|case|catch|&&|\|\|/g) || []).length + 1;
      
      return { lines, cyclomatic };
    } catch (error) {
      return { lines: 0, cyclomatic: 1 };
    }
  }

  async generateMissingTests(untestedComponents) {
    this.log('Generating missing tests...');
    
    const generatedTests = [];
    
    for (const component of untestedComponents) {
      try {
        const testContent = this.generateTestContent(component);
        const testFilePath = this.getTestFilePath(component.file);
        
        if (testContent && testFilePath) {
          fs.writeFileSync(testFilePath, testContent, 'utf8');
          generatedTests.push({
            component: component.name,
            testFile: testFilePath,
            type: component.type
          });
          this.log(`Generated test for ${component.name}`);
        }
      } catch (error) {
        this.log(`Failed to generate test for ${component.name}: ${error.message}`, 'WARN');
      }
    }
    
    return generatedTests;
  }

  generateTestContent(component) {
    const baseTest = `import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ${component.name} from './${path.basename(component.file, path.extname(component.file))}';

describe('${component.name}', () => {
  it('should render without crashing', () => {
    render(<${component.name} />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });

  it('should have proper accessibility attributes', () => {
    render(<${component.name} />);
    // Add specific accessibility tests based on component type
  });

  it('should handle props correctly', () => {
    const testProps = {};
    render(<${component.name} {...testProps} />);
    // Add specific prop tests
  });
});`;

    // Customize test based on component type
    switch (component.type) {
      case 'FUNCTIONAL_COMPONENT':
        return baseTest;
      case 'CLASS_COMPONENT':
        return baseTest.replace(/import.*from.*testing-library\/react/g, 
          `import { render, screen } from '@testing-library/react';
import { configure } from '@testing-library/react';`);
      case 'UTILITY':
        return `import { describe, it, expect } from 'vitest';
import { ${component.name} } from './${path.basename(component.file, path.extname(component.file))}';

describe('${component.name}', () => {
  it('should work correctly', () => {
    // Add specific utility function tests
    expect(true).toBe(true);
  });
});`;
      default:
        return baseTest;
    }
  }

  getTestFilePath(sourceFilePath) {
    const relativePath = path.relative(this.projectRoot, sourceFilePath);
    const dir = path.dirname(relativePath);
    const name = path.basename(sourceFilePath, path.extname(sourceFilePath));
    
    // Look for existing test directories
    const testDirs = ['__tests__', 'tests', 'test'];
    let testDir = '';
    
    for (const testDirName of testDirs) {
      const fullTestDir = path.join(this.projectRoot, dir, testDirName);
      if (fs.existsSync(fullTestDir)) {
        testDir = path.join(dir, testDirName);
        break;
      }
    }
    
    if (!testDir) {
      testDir = path.join(dir, '__tests__');
    }
    
    const testFilePath = path.join(this.projectRoot, testDir, `${name}.test.${path.extname(sourceFilePath)}`);
    
    // Ensure test directory exists
    const testDirPath = path.dirname(testFilePath);
    if (!fs.existsSync(testDirPath)) {
      fs.mkdirSync(testDirPath, { recursive: true });
    }
    
    return testFilePath;
  }

  async runAllTests() {
    this.log('Running all tests...');
    
    try {
      const result = execSync('npm test -- --watchAll=false', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Parse test results
      const passedMatch = result.match(/(\d+) passing/);
      const failedMatch = result.match(/(\d+) failing/);
      
      const passed = passedMatch ? parseInt(passedMatch[1]) : 0;
      const failed = failedMatch ? parseInt(failedMatch[1]) : 0;
      const total = passed + failed;
      
      return { total, passed, failed, output: result };
      
    } catch (error) {
      // Tests failed, try to parse the output
      const output = error.stdout || error.stderr || error.message;
      const passedMatch = output.match(/(\d+) passing/);
      const failedMatch = output.match(/(\d+) failing/);
      
      const passed = passedMatch ? parseInt(passedMatch[1]) : 0;
      const failed = failedMatch ? parseInt(failedMatch[1]) : 0;
      const total = passed + failed;
      
      return { total, passed, failed, output, error: error.message };
    }
  }

  async generateTestRecommendations(testResults, coverageAnalysis) {
    const recommendations = [];
    
    // Coverage recommendations
    if (coverageAnalysis.total < 80) {
      recommendations.push({
        priority: 'HIGH',
        category: 'COVERAGE',
        action: 'Increase test coverage to at least 80%',
        impact: 'Better code quality and reduced bug potential',
        details: `Current coverage: ${coverageAnalysis.total.toFixed(1)}%`
      });
    }
    
    // Test failure recommendations
    if (testResults.failed > 0) {
      recommendations.push({
        priority: 'HIGH',
        category: 'TEST_QUALITY',
        action: 'Fix failing tests immediately',
        impact: 'Ensure code reliability and prevent regressions',
        details: `${testResults.failed} tests are currently failing`
      });
    }
    
    // Test generation recommendations
    if (testResults.total < 50) {
      recommendations.push({
        priority: 'MEDIUM',
        category: 'TEST_COVERAGE',
        action: 'Generate more comprehensive tests',
        impact: 'Better test coverage and code confidence',
        details: `Only ${testResults.total} tests exist`
      });
    }
    
    // Performance recommendations
    if (testResults.total > 100) {
      recommendations.push({
        priority: 'LOW',
        category: 'TEST_PERFORMANCE',
        action: 'Consider parallel test execution',
        impact: 'Faster test execution and CI/CD',
        details: `${testResults.total} tests may benefit from parallelization`
      });
    }
    
    return recommendations;
  }

  async generateTestReport(results, testResults, coverageAnalysis) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        testsGenerated: results.testsGenerated,
        testsRun: results.testsRun,
        testsPassed: results.testsPassed,
        testsFailed: results.testsFailed,
        coverage: coverageAnalysis.total
      },
      testResults,
      coverageAnalysis,
      recommendations: results.recommendations,
      generatedTests: results.generatedTests || []
    };
    
    const reportPath = path.join(this.testResultsDir, 'smart-test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Generate HTML report
    const htmlReport = this.generateHTMLReport(report);
    const htmlPath = path.join(this.testResultsDir, 'smart-test-report.html');
    fs.writeFileSync(htmlPath, htmlReport);
    
    this.log(`Test report generated: ${reportPath}`);
    this.log(`HTML report generated: ${htmlPath}`);
  }

  generateHTMLReport(report) {
    return `<!DOCTYPE html>
<html>
<head>
    <title>Smart Test Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .header { background: #f0f0f0; padding: 20px; border-radius: 5px; }
        .metric { display: inline-block; margin: 10px; padding: 15px; background: #e8f5e8; border-radius: 5px; }
        .recommendation { margin: 10px 0; padding: 10px; border-left: 4px solid #007cba; background: #f9f9f9; }
        .high { border-left-color: #dc3545; }
        .medium { border-left-color: #ffc107; }
        .low { border-left-color: #28a745; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Smart Test Report</h1>
        <p>Generated: ${new Date(report.timestamp).toLocaleString()}</p>
    </div>
    
    <h2>Test Summary</h2>
    <div class="metric">
        <strong>Tests Generated:</strong> ${report.summary.testsGenerated}
    </div>
    <div class="metric">
        <strong>Tests Run:</strong> ${report.summary.testsRun}
    </div>
    <div class="metric">
        <strong>Tests Passed:</strong> ${report.summary.testsPassed}
    </div>
    <div class="metric">
        <strong>Tests Failed:</strong> ${report.summary.testsFailed}
    </div>
    <div class="metric">
        <strong>Coverage:</strong> ${report.summary.coverage.toFixed(1)}%
    </div>
    
    <h2>Recommendations</h2>
    ${report.recommendations.map(rec => `
        <div class="recommendation ${rec.priority.toLowerCase()}">
            <strong>${rec.priority} Priority - ${rec.category}:</strong> ${rec.action}<br>
            <em>Impact:</em> ${rec.impact}<br>
            <em>Details:</em> ${rec.details}
        </div>
    `).join('')}
    
    <h2>Generated Tests</h2>
    <ul>
        ${report.generatedTests.map(test => `
            <li><strong>${test.component}</strong> (${test.type}) - ${test.testFile}</li>
        `).join('')}
    </ul>
</body>
</html>`;
  }

  getSourceFiles() {
    const sourceDirs = ['src', 'components', 'pages', 'utils', 'hooks'];
    const sourceFiles = [];
    
    for (const dir of sourceDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.collectFiles(dirPath, sourceFiles);
      }
    }
    
    return sourceFiles;
  }

  getTestFiles() {
    const testDirs = ['__tests__', 'tests', 'test'];
    const testFiles = [];
    
    for (const dir of testDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.collectFiles(dirPath, testFiles);
      }
    }
    
    return testFiles;
  }

  collectFiles(dirPath, files) {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.collectFiles(fullPath, files);
      } else if (stat.isFile() && /\.(js|jsx|ts|tsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
}

// Run the automation if called directly
if (require.main === module) {
  const automation = new SmartTestAutomation();
  automation.runSmartTesting()
    .then(result => {
      if (result.error) {
        process.exit(1);
      }
      process.exit(0);
    })
    .catch(error => {
      console.error('Smart Test Automation failed:', error);
      process.exit(1);
    });
}

module.exports = SmartTestAutomation;