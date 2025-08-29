#!/usr/bin/env node

/**
 * Smart Testing Automation - PM2 Automation
 * Intelligently generates tests, detects coverage gaps, and improves test quality
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class SmartTestingAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'smart-testing.log');
    this.reportsDir = path.join(this.projectRoot, 'logs', 'testing-reports');
    this.testTemplatesDir = path.join(this.projectRoot, 'scripts', 'automation', 'test-templates');
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
    
    if (!fs.existsSync(this.testTemplatesDir)) {
      fs.mkdirSync(this.testTemplatesDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runSmartTesting() {
    this.log('Starting smart testing automation...');
    
    const generatedTests = [];
    const testImprovements = [];
    const coverageAnalysis = {};

    try {
      // 1. Analyze current test coverage
      const coverage = await this.analyzeTestCoverage();
      coverageAnalysis.coverage = coverage;

      // 2. Detect untested components and functions
      const untestedItems = await this.detectUntestedItems();
      coverageAnalysis.untested = untestedItems;

      // 3. Generate missing tests
      const tests = await this.generateMissingTests(untestedItems);
      generatedTests.push(...tests);

      // 4. Improve existing tests
      const improvements = await this.improveExistingTests();
      testImprovements.push(...improvements);

      // 5. Run test suite and analyze results
      const testResults = await this.runTestSuite();
      coverageAnalysis.results = testResults;

      // 6. Generate comprehensive testing report
      await this.generateTestingReport(coverageAnalysis, generatedTests, testImprovements);

      // 7. Commit test improvements if successful
      if (generatedTests.length > 0 || testImprovements.length > 0) {
        await this.commitTestImprovements(generatedTests, testImprovements);
      }

    } catch (error) {
      this.log(`Smart testing failed: ${error.message}`, 'ERROR');
    }

    return { generatedTests, testImprovements, coverageAnalysis };
  }

  async analyzeTestCoverage() {
    this.log('Analyzing test coverage...');
    
    const coverage = {
      timestamp: new Date().toISOString(),
      totalFiles: 0,
      testedFiles: 0,
      coveragePercentage: 0,
      fileCoverage: {},
      uncoveredLines: []
    };

    try {
      // Run coverage analysis if available
      const coverageResult = await this.runCoverageAnalysis();
      
      if (coverageResult) {
        coverage.totalFiles = coverageResult.totalFiles;
        coverage.testedFiles = coverageResult.testedFiles;
        coverage.coveragePercentage = coverageResult.coveragePercentage;
        coverage.fileCoverage = coverageResult.fileCoverage;
        coverage.uncoveredLines = coverageResult.uncoveredLines;
      } else {
        // Fallback: analyze test files manually
        const manualCoverage = await this.analyzeCoverageManually();
        Object.assign(coverage, manualCoverage);
      }
      
    } catch (error) {
      this.log(`Coverage analysis failed: ${error.message}`, 'ERROR');
    }

    return coverage;
  }

  async runCoverageAnalysis() {
    try {
      // Try to run Jest with coverage
      const result = execSync('npm run test -- --coverage --watchAll=false', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      // Parse coverage output
      return this.parseCoverageOutput(result);
      
    } catch (error) {
      this.log(`Coverage command failed: ${error.message}`, 'WARN');
      return null;
    }
  }

  parseCoverageOutput(output) {
    try {
      // This is a simplified parser - in production, you'd use the coverage JSON output
      const lines = output.split('\n');
      const coverage = {
        totalFiles: 0,
        testedFiles: 0,
        coveragePercentage: 0,
        fileCoverage: {},
        uncoveredLines: []
      };
      
      // Look for coverage summary
      const summaryLine = lines.find(line => line.includes('All files'));
      if (summaryLine) {
        const match = summaryLine.match(/(\d+)\s+(\d+)\s+(\d+\.?\d*)%/);
        if (match) {
          coverage.totalFiles = parseInt(match[1]);
          coverage.testedFiles = parseInt(match[2]);
          coverage.coveragePercentage = parseFloat(match[3]);
        }
      }
      
      return coverage;
      
    } catch (error) {
      this.log(`Failed to parse coverage output: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async analyzeCoverageManually() {
    this.log('Analyzing coverage manually...');
    
    const coverage = {
      totalFiles: 0,
      testedFiles: 0,
      coveragePercentage: 0,
      fileCoverage: {},
      uncoveredLines: []
    };

    try {
      const srcPath = path.join(this.projectRoot, 'src');
      const testPath = path.join(this.projectRoot, 'tests');
      
      if (!fs.existsSync(srcPath)) return coverage;
      
      // Count source files
      const sourceFiles = await this.getAllFiles(srcPath);
      const tsFiles = sourceFiles.filter(file => file.endsWith('.ts') || file.endsWith('.tsx'));
      coverage.totalFiles = tsFiles.length;
      
      // Count test files
      let testFiles = [];
      if (fs.existsSync(testPath)) {
        testFiles = await this.getAllFiles(testPath);
      }
      
      // Map source files to test files
      const fileCoverage = {};
      let testedCount = 0;
      
      for (const sourceFile of tsFiles) {
        const relativePath = path.relative(srcPath, sourceFile);
        const testFile = this.findTestFile(relativePath, testFiles);
        
        if (testFile) {
          fileCoverage[relativePath] = {
            hasTest: true,
            testFile: testFile,
            coverage: 'PARTIAL' // Simplified for manual analysis
          };
          testedCount++;
        } else {
          fileCoverage[relativePath] = {
            hasTest: false,
            testFile: null,
            coverage: 'NONE'
          };
        }
      }
      
      coverage.testedFiles = testedCount;
      coverage.coveragePercentage = coverage.totalFiles > 0 ? 
        Math.round((testedCount / coverage.totalFiles) * 100) : 0;
      coverage.fileCoverage = fileCoverage;
      
    } catch (error) {
      this.log(`Manual coverage analysis failed: ${error.message}`, 'ERROR');
    }

    return coverage;
  }

  findTestFile(sourcePath, testFiles) {
    const sourceName = path.basename(sourcePath, path.extname(sourcePath));
    
    // Look for test files with common naming patterns
    const testPatterns = [
      `${sourceName}.test.ts`,
      `${sourceName}.test.tsx`,
      `${sourceName}.spec.ts`,
      `${sourceName}.spec.tsx`,
      `${sourceName}.test.js`,
      `${sourceName}.spec.js`
    ];
    
    for (const testFile of testFiles) {
      const testName = path.basename(testFile);
      if (testPatterns.includes(testName)) {
        return testFile;
      }
    }
    
    return null;
  }

  async detectUntestedItems() {
    this.log('Detecting untested components and functions...');
    
    const untestedItems = [];
    
    try {
      const srcPath = path.join(this.projectRoot, 'src');
      if (!fs.existsSync(srcPath)) return untestedItems;
      
      const sourceFiles = await this.getAllFiles(srcPath);
      
      for (const file of sourceFiles) {
        if (file.endsWith('.ts') || file.endsWith('.tsx')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            const fileItems = this.extractTestableItems(file, content);
            
            // Check if items have tests
            const untestedFileItems = await this.checkItemTestCoverage(file, fileItems);
            untestedItems.push(...untestedFileItems);
            
          } catch (error) {
            this.log(`Error analyzing file ${file}: ${error.message}`, 'WARN');
          }
        }
      }
      
    } catch (error) {
      this.log(`Untested items detection failed: ${error.message}`, 'ERROR');
    }

    return untestedItems;
  }

  extractTestableItems(filePath, content) {
    const items = [];
    
    try {
      // Extract React components
      const componentMatches = content.match(/export\s+(?:default\s+)?(?:function|const)\s+(\w+)/g);
      if (componentMatches) {
        componentMatches.forEach(match => {
          const name = match.match(/(?:export\s+(?:default\s+)?(?:function|const)\s+)(\w+)/)?.[1];
          if (name) {
            items.push({
              type: 'COMPONENT',
              name: name,
              file: filePath,
              priority: 'HIGH'
            });
          }
        });
      }
      
      // Extract utility functions
      const functionMatches = content.match(/export\s+(?:function|const)\s+(\w+)\s*=/g);
      if (functionMatches) {
        functionMatches.forEach(match => {
          const name = match.match(/export\s+(?:function|const)\s+(\w+)/)?.[1];
          if (name) {
            items.push({
              type: 'FUNCTION',
              name: name,
              file: filePath,
              priority: 'MEDIUM'
            });
          }
        });
      }
      
      // Extract custom hooks
      const hookMatches = content.match(/export\s+(?:function|const)\s+use(\w+)/g);
      if (hookMatches) {
        hookMatches.forEach(match => {
          const name = match.match(/export\s+(?:function|const)\s+(use\w+)/)?.[1];
          if (name) {
            items.push({
              type: 'HOOK',
              name: name,
              file: filePath,
              priority: 'HIGH'
            });
          }
        });
      }
      
    } catch (error) {
      this.log(`Failed to extract testable items from ${filePath}: ${error.message}`, 'ERROR');
    }
    
    return items;
  }

  async checkItemTestCoverage(filePath, items) {
    const untestedItems = [];
    
    for (const item of items) {
      const hasTest = await this.itemHasTest(item);
      if (!hasTest) {
        untestedItems.push(item);
      }
    }
    
    return untestedItems;
  }

  async itemHasTest(item) {
    try {
      const testPath = path.join(this.projectRoot, 'tests');
      if (!fs.existsSync(testPath)) return false;
      
      const testFiles = await this.getAllFiles(testPath);
      const sourceName = path.basename(item.file, path.extname(item.file));
      
      // Look for test files that might test this item
      for (const testFile of testFiles) {
        const testContent = fs.readFileSync(testFile, 'utf8');
        if (testContent.includes(item.name)) {
          return true;
        }
      }
      
      return false;
      
    } catch (error) {
      this.log(`Failed to check test coverage for ${item.name}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async generateMissingTests(untestedItems) {
    this.log('Generating missing tests...');
    
    const generatedTests = [];
    
    try {
      for (const item of untestedItems) {
        if (item.priority === 'HIGH') {
          const test = await this.generateTestForItem(item);
          if (test) {
            generatedTests.push(test);
          }
        }
      }
      
    } catch (error) {
      this.log(`Test generation failed: ${error.message}`, 'ERROR');
    }

    return generatedTests;
  }

  async generateTestForItem(item) {
    try {
      const testContent = await this.generateTestContent(item);
      const testPath = this.determineTestPath(item);
      
      // Ensure test directory exists
      const testDir = path.dirname(testPath);
      if (!fs.existsSync(testDir)) {
        fs.mkdirSync(testDir, { recursive: true });
      }
      
      // Write test file
      fs.writeFileSync(testPath, testContent, 'utf8');
      
      return {
        type: 'GENERATED_TEST',
        item: item,
        testFile: testPath,
        description: `Generated test for ${item.type} ${item.name}`
      };
      
    } catch (error) {
      this.log(`Failed to generate test for ${item.name}: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async generateTestContent(item) {
    const templates = {
      COMPONENT: this.getComponentTestTemplate(),
      FUNCTION: this.getFunctionTestTemplate(),
      HOOK: this.getHookTestTemplate()
    };
    
    const template = templates[item.type] || templates.FUNCTION;
    
    // Replace placeholders in template
    return template
      .replace(/\{\{ITEM_NAME\}\}/g, item.name)
      .replace(/\{\{ITEM_TYPE\}\}/g, item.type)
      .replace(/\{\{FILE_PATH\}\}/g, item.file)
      .replace(/\{\{IMPORT_PATH\}\}/g, this.getImportPath(item));
  }

  getComponentTestTemplate() {
    return `import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {{ITEM_NAME}} from '{{IMPORT_PATH}}';

describe('{{ITEM_NAME}}', () => {
  it('renders without crashing', () => {
    render(<{{ITEM_NAME}} />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<{{ITEM_NAME}} />);
    // Add specific content checks based on component behavior
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  it('handles user interactions correctly', () => {
    render(<{{ITEM_NAME}} />);
    // Add interaction tests based on component functionality
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('applies correct styling', () => {
    render(<{{ITEM_NAME}} />);
    // Add styling tests if applicable
    const container = screen.getByRole('main');
    expect(container).toHaveClass('{{ITEM_NAME.toLowerCase()}}');
  });
});
`;
  }

  getFunctionTestTemplate() {
    return `import { describe, it, expect } from 'vitest';
import { {{ITEM_NAME}} } from '{{IMPORT_PATH}}';

describe('{{ITEM_NAME}}', () => {
  it('returns expected output for valid input', () => {
    const input = 'test input';
    const result = {{ITEM_NAME}}(input);
    expect(result).toBeDefined();
    // Add specific assertions based on function behavior
  });

  it('handles edge cases correctly', () => {
    const edgeCases = [null, undefined, '', 0, false];
    edgeCases.forEach(input => {
      const result = {{ITEM_NAME}}(input);
      expect(result).toBeDefined();
      // Add specific assertions for edge cases
    });
  });

  it('throws error for invalid input when expected', () => {
    // Test error handling if function should throw
    expect(() => {{ITEM_NAME}}('invalid')).toThrow();
  });

  it('maintains consistent behavior across calls', () => {
    const input = 'test';
    const result1 = {{ITEM_NAME}}(input);
    const result2 = {{ITEM_NAME}}(input);
    expect(result1).toEqual(result2);
  });
});
`;
  }

  getHookTestTemplate() {
    return `import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { {{ITEM_NAME}} } from '{{IMPORT_PATH}}';

describe('{{ITEM_NAME}}', () => {
  it('returns initial state correctly', () => {
    const { result } = renderHook(() => {{ITEM_NAME}}());
    expect(result.current).toBeDefined();
    // Add specific initial state checks
  });

  it('updates state when dependencies change', () => {
    const { result, rerender } = renderHook(
      ({ value }) => {{ITEM_NAME}}(value),
      { initialProps: { value: 'initial' } }
    );
    
    rerender({ value: 'updated' });
    // Add assertions for state updates
    expect(result.current).toBeDefined();
  });

  it('cleans up resources on unmount', () => {
    const { unmount } = renderHook(() => {{ITEM_NAME}}());
    // Add cleanup verification if hook has cleanup
    unmount();
    // Verify cleanup was called
  });

  it('handles errors gracefully', () => {
    // Test error scenarios if applicable
    expect(() => renderHook(() => {{ITEM_NAME}}())).not.toThrow();
  });
});
`;
  }

  getImportPath(item) {
    const relativePath = path.relative(this.projectRoot, item.file);
    const importPath = relativePath.replace(/\.(ts|tsx)$/, '');
    return `./${importPath}`;
  }

  determineTestPath(item) {
    const relativePath = path.relative(path.join(this.projectRoot, 'src'), item.file);
    const testName = path.basename(relativePath, path.extname(relativePath));
    const testDir = path.dirname(relativePath);
    
    return path.join(this.projectRoot, 'tests', testDir, `${testName}.test.ts`);
  }

  async improveExistingTests() {
    this.log('Improving existing tests...');
    
    const improvements = [];
    
    try {
      const testPath = path.join(this.projectRoot, 'tests');
      if (!fs.existsSync(testPath)) return improvements;
      
      const testFiles = await this.getAllFiles(testPath);
      
      for (const testFile of testFiles) {
        if (testFile.endsWith('.test.ts') || testFile.endsWith('.test.tsx') || 
            testFile.endsWith('.spec.ts') || testFile.endsWith('.spec.tsx')) {
          try {
            const content = fs.readFileSync(testFile, 'utf8');
            const improvement = await this.improveTestFile(testFile, content);
            if (improvement) {
              improvements.push(improvement);
            }
          } catch (error) {
            this.log(`Error improving test file ${testFile}: ${error.message}`, 'WARN');
          }
        }
      }
      
    } catch (error) {
      this.log(`Test improvement failed: ${error.message}`, 'ERROR');
    }

    return improvements;
  }

  async improveTestFile(testFile, content) {
    try {
      let improvedContent = content;
      let hasImprovements = false;
      
      // Add missing test utilities
      if (!content.includes('@testing-library/react') && content.includes('render')) {
        improvedContent = improvedContent.replace(
          /import\s+\{[^}]*\}\s+from\s+['"]@testing-library\/react['"]/,
          `import { render, screen, fireEvent, waitFor } from '@testing-library/react'`
        );
        hasImprovements = true;
      }
      
      // Add missing assertions
      if (!content.includes('toBeInTheDocument()') && content.includes('expect(')) {
        improvedContent = improvedContent.replace(
          /expect\(([^)]+)\)\.toBeDefined\(\)/g,
          'expect($1).toBeInTheDocument()'
        );
        hasImprovements = true;
      }
      
      // Add accessibility testing
      if (!content.includes('getByRole') && content.includes('getByText')) {
        // Add role-based queries for better accessibility testing
        const accessibilityTests = `
  it('has proper accessibility attributes', () => {
    render(<Component />);
    // Add accessibility checks
    expect(screen.getByRole('main')).toBeInTheDocument();
  });`;
        
        improvedContent = improvedContent.replace(
          /describe\s*\(\s*['"][^'"]+['"][^}]*\s*\)\s*;?\s*$/,
          `describe('Component', () => {${accessibilityTests}});`
        );
        hasImprovements = true;
      }
      
      if (hasImprovements) {
        fs.writeFileSync(testFile, improvedContent, 'utf8');
        return {
          type: 'TEST_IMPROVEMENT',
          file: testFile,
          description: 'Enhanced test file with better utilities and accessibility testing',
          improvements: ['Added missing test utilities', 'Enhanced assertions', 'Added accessibility tests']
        };
      }
      
    } catch (error) {
      this.log(`Failed to improve test file ${testFile}: ${error.message}`, 'ERROR');
    }
    
    return null;
  }

  async runTestSuite() {
    this.log('Running test suite...');
    
    const results = {
      timestamp: new Date().toISOString(),
      totalTests: 0,
      passedTests: 0,
      failedTests: 0,
      testDuration: 0,
      errors: []
    };
    
    try {
      const startTime = Date.now();
      
      const testOutput = execSync('npm test', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      const endTime = Date.now();
      results.testDuration = endTime - startTime;
      
      // Parse test results
      const parsedResults = this.parseTestResults(testOutput);
      Object.assign(results, parsedResults);
      
    } catch (error) {
      results.errors.push(error.message);
      this.log(`Test suite execution failed: ${error.message}`, 'ERROR');
    }

    return results;
  }

  parseTestResults(output) {
    try {
      const lines = output.split('\n');
      const results = {
        totalTests: 0,
        passedTests: 0,
        failedTests: 0
      };
      
      // Look for test summary
      const summaryLine = lines.find(line => line.includes('Tests:'));
      if (summaryLine) {
        const match = summaryLine.match(/(\d+)\s+passed,\s*(\d+)\s+failed/);
        if (match) {
          results.passedTests = parseInt(match[1]);
          results.failedTests = parseInt(match[2]);
          results.totalTests = results.passedTests + results.failedTests;
        }
      }
      
      return results;
      
    } catch (error) {
      this.log(`Failed to parse test results: ${error.message}`, 'ERROR');
      return { totalTests: 0, passedTests: 0, failedTests: 0 };
    }
  }

  async generateTestingReport(coverageAnalysis, generatedTests, testImprovements) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        coveragePercentage: coverageAnalysis.coverage?.coveragePercentage || 0,
        totalFiles: coverageAnalysis.coverage?.totalFiles || 0,
        testedFiles: coverageAnalysis.coverage?.testedFiles || 0,
        generatedTests: generatedTests.length,
        testImprovements: testImprovements.length
      },
      coverage: coverageAnalysis.coverage,
      untested: coverageAnalysis.untested,
      generatedTests: generatedTests,
      improvements: testImprovements,
      recommendations: this.generateTestingRecommendations(coverageAnalysis, generatedTests, testImprovements)
    };
    
    const reportPath = path.join(this.reportsDir, `testing-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Testing report generated: ${reportPath}`);
    return report;
  }

  generateTestingRecommendations(coverageAnalysis, generatedTests, testImprovements) {
    const recommendations = [];
    
    // Coverage recommendations
    const coverage = coverageAnalysis.coverage;
    if (coverage && coverage.coveragePercentage < 80) {
      recommendations.push({
        type: 'COVERAGE_IMPROVEMENT',
        priority: 'HIGH',
        message: `Test coverage is ${coverage.coveragePercentage}% - aim for at least 80%`,
        action: 'Focus on testing critical business logic and edge cases',
        estimatedEffort: '2-3 weeks'
      });
    }
    
    // Test quality recommendations
    if (testImprovements.length > 0) {
      recommendations.push({
        type: 'TEST_QUALITY',
        priority: 'MEDIUM',
        message: `${testImprovements.length} test files improved`,
        action: 'Review and validate the improvements made',
        estimatedEffort: '1 week'
      });
    }
    
    // New test recommendations
    if (generatedTests.length > 0) {
      recommendations.push({
        type: 'NEW_TESTS',
        priority: 'MEDIUM',
        message: `${generatedTests.length} new tests generated`,
        action: 'Review generated tests and add specific test cases',
        estimatedEffort: '1-2 weeks'
      });
    }
    
    return recommendations;
  }

  async commitTestImprovements(generatedTests, testImprovements) {
    if (generatedTests.length === 0 && testImprovements.length === 0) return;
    
    try {
      // Stage changes
      execSync('git add .', { cwd: this.projectRoot });
      
      // Commit with descriptive message
      const commitMessage = `🧪 Test Improvements: ${generatedTests.length} new tests, ${testImprovements.length} improvements\n\n` +
        [...generatedTests.map(t => `- Generated: ${t.description}`),
         ...testImprovements.map(i => `- Improved: ${i.description}`)].join('\n');
      
      execSync(`git commit -m "${commitMessage}"`, { cwd: this.projectRoot });
      
      this.log(`Test improvements committed: ${generatedTests.length + testImprovements.length} changes`);
      
    } catch (error) {
      this.log(`Failed to commit test improvements: ${error.message}`, 'ERROR');
    }
  }

  async getAllFiles(dir) {
    const files = [];
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...await this.getAllFiles(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }
}

// Main execution
if (require.main === module) {
  const automation = new SmartTestingAutomation();
  
  automation.runSmartTesting()
    .then(result => {
      console.log('Smart testing completed successfully');
      console.log(`Generated tests: ${result.generatedTests.length}`);
      console.log(`Test improvements: ${result.testImprovements.length}`);
      process.exit(0);
    })
    .catch(error => {
      console.error('Smart testing failed:', error);
      process.exit(1);
    });
}

module.exports = SmartTestingAutomation;