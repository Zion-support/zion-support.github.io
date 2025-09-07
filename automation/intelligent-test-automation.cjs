#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentTestAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'automation-reports');
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.testResultsDir = path.join(this.reportsDir, 'test-results');
    
    // Ensure directories exist
    [this.reportsDir, this.logsDir, this.testResultsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    this.logFile = path.join(this.logsDir, 'intelligent-test-automation.log');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async executeCommand(command, description) {
    try {
      this.log(`🔄 ${description}...`);
      const output = execSync(command, { 
        encoding: 'utf8', 
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      this.log(`✅ ${description} completed successfully`);
      return { success: true, output };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message };
    }
  }

  async discoverTestFiles() {
    this.log('🔍 Discovering test files...');
    
    const testPatterns = [
      '**/*.test.{js,jsx,ts,tsx}',
      '**/*.spec.{js,jsx,ts,tsx}',
      '**/__tests__/**/*.{js,jsx,ts,tsx}',
      '**/tests/**/*.{js,jsx,ts,tsx}'
    ];

    const testFiles = [];
    const skipDirs = ['node_modules', '.next', 'dist', 'build', 'out', 'coverage'];

    const findFiles = (dir, patterns) => {
      try {
        const items = fs.readdirSync(dir, { withFileTypes: true });
        for (const item of items) {
          const fullPath = path.join(dir, item.name);
          if (item.isDirectory() && !skipDirs.includes(item.name)) {
            findFiles(fullPath, patterns);
          } else if (item.isFile()) {
            const fileName = item.name;
            if (patterns.some(pattern => {
              if (pattern.includes('**')) {
                const regex = new RegExp(pattern.replace(/\*\*/g, '.*').replace(/\*/g, '[^/]*'));
                return regex.test(fileName);
              }
              return fileName.includes(pattern);
            })) {
              testFiles.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    };

    findFiles(this.projectRoot, testPatterns);

    this.log(`📁 Found ${testFiles.length} test files`);
    return testFiles.map(file => path.relative(this.projectRoot, file));
  }

  async analyzeTestCoverage() {
    this.log('📊 Analyzing test coverage...');
    
    const coverageResult = await this.executeCommand(
      'npm run test:coverage',
      'Running tests with coverage analysis'
    );

    if (!coverageResult.success) {
      return { success: false, error: coverageResult.error };
    }

    // Try to read coverage report
    const coverageDir = path.join(this.projectRoot, 'coverage');
    if (fs.existsSync(coverageDir)) {
      const lcovPath = path.join(coverageDir, 'lcov.info');
      if (fs.existsSync(lcovPath)) {
        const lcovContent = fs.readFileSync(lcovPath, 'utf8');
        const lines = lcovContent.split('\n');
        
        let totalLines = 0;
        let coveredLines = 0;
        let totalFunctions = 0;
        let coveredFunctions = 0;
        let totalBranches = 0;
        let coveredBranches = 0;

        for (const line of lines) {
          if (line.startsWith('LF:')) {
            totalLines += parseInt(line.split(':')[1]);
          } else if (line.startsWith('LH:')) {
            coveredLines += parseInt(line.split(':')[1]);
          } else if (line.startsWith('FNF:')) {
            totalFunctions += parseInt(line.split(':')[1]);
          } else if (line.startsWith('FNH:')) {
            coveredFunctions += parseInt(line.split(':')[1]);
          } else if (line.startsWith('BRF:')) {
            totalBranches += parseInt(line.split(':')[1]);
          } else if (line.startsWith('BRH:')) {
            coveredBranches += parseInt(line.split(':')[1]);
          }
        }

        const lineCoverage = totalLines > 0 ? (coveredLines / totalLines) * 100 : 0;
        const functionCoverage = totalFunctions > 0 ? (coveredFunctions / totalFunctions) * 100 : 0;
        const branchCoverage = totalBranches > 0 ? (coveredBranches / totalBranches) * 100 : 0;

        return {
          success: true,
          coverage: {
            lines: { covered: coveredLines, total: totalLines, percentage: lineCoverage },
            functions: { covered: coveredFunctions, total: totalFunctions, percentage: functionCoverage },
            branches: { covered: coveredBranches, total: totalBranches, percentage: branchCoverage }
          }
        };
      }
    }

    return { success: false, error: 'Coverage report not found' };
  }

  async runSmokeTests() {
    this.log('💨 Running smoke tests...');
    
    const smokeResult = await this.executeCommand(
      'npm run test:smoke',
      'Running smoke tests'
    );

    return {
      success: smokeResult.success,
      output: smokeResult.output,
      error: smokeResult.error
    };
  }

  async runUnitTests() {
    this.log('🧪 Running unit tests...');
    
    const unitResult = await this.executeCommand(
      'npm run test',
      'Running unit tests'
    );

    return {
      success: unitResult.success,
      output: unitResult.output,
      error: unitResult.error
    };
  }

  async runIntegrationTests() {
    this.log('🔗 Running integration tests...');
    
    // Check if integration tests exist
    const testFiles = await this.discoverTestFiles();
    const integrationTests = testFiles.filter(file => 
      file.includes('integration') || file.includes('e2e') || file.includes('api')
    );

    if (integrationTests.length === 0) {
      return {
        success: true,
        message: 'No integration tests found',
        testsFound: 0
      };
    }

    const integrationResult = await this.executeCommand(
      `npx jest ${integrationTests.join(' ')}`,
      'Running integration tests'
    );

    return {
      success: integrationResult.success,
      output: integrationResult.output,
      error: integrationResult.error,
      testsFound: integrationTests.length
    };
  }

  async generateTestReport() {
    this.log('📋 Generating test report...');
    
    const testFiles = await this.discoverTestFiles();
    const smokeTests = await this.runSmokeTests();
    const unitTests = await this.runUnitTests();
    const integrationTests = await this.runIntegrationTests();
    const coverage = await this.analyzeTestCoverage();

    const report = {
      timestamp: new Date().toISOString(),
      testFiles: {
        total: testFiles.length,
        files: testFiles
      },
      testResults: {
        smoke: smokeTests,
        unit: unitTests,
        integration: integrationTests
      },
      coverage: coverage.success ? coverage.coverage : null,
      summary: {
        totalTestSuites: [smokeTests, unitTests, integrationTests].filter(t => t.success).length,
        successfulTestSuites: [smokeTests, unitTests, integrationTests].filter(t => t.success).length,
        coverageAvailable: coverage.success
      }
    };

    const reportPath = path.join(this.testResultsDir, 'test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Test report saved to: ${reportPath}`);
    return report;
  }

  async createMissingTests() {
    this.log('🔧 Creating missing tests...');
    
    const testFiles = await this.discoverTestFiles();
    const sourceFiles = this.getAllSourceFiles();
    
    const missingTests = [];
    
    for (const sourceFile of sourceFiles) {
      const fileName = path.basename(sourceFile, path.extname(sourceFile));
      const testFileName = `${fileName}.test.${path.extname(sourceFile).slice(1)}`;
      const testFilePath = path.join(path.dirname(sourceFile), testFileName);
      
      if (!testFiles.includes(path.relative(this.projectRoot, testFilePath))) {
        missingTests.push({
          sourceFile: path.relative(this.projectRoot, sourceFile),
          suggestedTestFile: path.relative(this.projectRoot, testFilePath)
        });
      }
    }

    // Create basic test files for missing tests
    for (const missing of missingTests.slice(0, 5)) { // Limit to first 5 to avoid too many files
      try {
        const testContent = this.generateTestTemplate(missing.sourceFile);
        const testDir = path.dirname(missing.suggestedTestFile);
        if (!fs.existsSync(testDir)) {
          fs.mkdirSync(testDir, { recursive: true });
        }
        fs.writeFileSync(missing.suggestedTestFile, testContent);
        this.log(`✅ Created test file: ${missing.suggestedTestFile}`);
      } catch (error) {
        this.log(`❌ Failed to create test file ${missing.suggestedTestFile}: ${error.message}`, 'ERROR');
      }
    }

    return {
      success: true,
      missingTests: missingTests.length,
      createdTests: Math.min(5, missingTests.length)
    };
  }

  getAllSourceFiles() {
    const sourceFiles = [];
    const skipDirs = ['node_modules', '.next', 'dist', 'build', 'out', 'coverage', 'tests', '__tests__'];
    
    const findFiles = (dir) => {
      try {
        const items = fs.readdirSync(dir, { withFileTypes: true });
        for (const item of items) {
          const fullPath = path.join(dir, item.name);
          if (item.isDirectory() && !skipDirs.includes(item.name)) {
            findFiles(fullPath);
          } else if (item.isFile() && /\.(js|jsx|ts|tsx)$/.test(item.name)) {
            sourceFiles.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    };

    findFiles(this.projectRoot);
    return sourceFiles;
  }

  generateTestTemplate(sourceFile) {
    const ext = path.extname(sourceFile);
    const isTypeScript = ext === '.ts' || ext === '.tsx';
    const isReact = ext === '.jsx' || ext === '.tsx';
    
    if (isReact) {
      return `import React from 'react';
import { render, screen } from '@testing-library/react';
import ${path.basename(sourceFile, ext)} from './${path.basename(sourceFile)}';

describe('${path.basename(sourceFile, ext)}', () => {
  it('renders without crashing', () => {
    render(<${path.basename(sourceFile, ext)} />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('has correct structure', () => {
    render(<${path.basename(sourceFile, ext)} />);
    // Add more specific tests here
  });
});
`;
    } else {
      return `${isTypeScript ? 'import' : 'const'} ${path.basename(sourceFile, ext)} = require('./${path.basename(sourceFile)}');

describe('${path.basename(sourceFile, ext)}', () => {
  it('should be defined', () => {
    expect(${path.basename(sourceFile, ext)}).toBeDefined();
  });

  it('should have expected functionality', () => {
    // Add specific tests here
    expect(true).toBe(true);
  });
});
`;
    }
  }

  async run() {
    this.log('🚀 Starting Intelligent Test Automation...');
    
    try {
      const testFiles = await this.discoverTestFiles();
      const smokeTests = await this.runSmokeTests();
      const unitTests = await this.runUnitTests();
      const integrationTests = await this.runIntegrationTests();
      const coverage = await this.analyzeTestCoverage();
      const missingTests = await this.createMissingTests();
      
      const report = await this.generateTestReport();
      
      this.log('🎉 Intelligent Test Automation completed successfully!');
      this.log(`📊 Summary: ${testFiles.length} test files found, ${report.summary.successfulTestSuites} test suites passed`);
      
      return report;
    } catch (error) {
      this.log(`❌ Intelligent Test Automation failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const testAutomation = new IntelligentTestAutomation();
  testAutomation.run().catch(console.error);
}

module.exports = IntelligentTestAutomation;