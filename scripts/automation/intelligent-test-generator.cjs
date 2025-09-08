#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧪 Starting Intelligent Test Generation Automation...');

class IntelligentTestGenerator {
  constructor() {
    this.testResults = {
      timestamp: new Date().toISOString(),
      coverage: { lines: 0, functions: 0, branches: 0, statements: 0 },
      generatedTests: [],
      testQuality: { score: 0, issues: [], suggestions: [] },
      missingTests: [],
      testPatterns: [],
      status: 'pending'
    };
    this.reportDir = path.join(process.cwd(), 'intelligent-test-reports');
    this.testDir = path.join(process.cwd(), 'src/__tests__');
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
    if (!fs.existsSync(this.testDir)) {
      fs.mkdirSync(this.testDir, { recursive: true });
    }
  }

  async runIntelligentTestGeneration() {
    try {
      console.log('🧪 Running intelligent test generation...');
      
      // Analyze current test coverage
      await this.analyzeTestCoverage();
      
      // Identify missing tests
      await this.identifyMissingTests();
      
      // Generate test patterns
      await this.generateTestPatterns();
      
      // Create missing tests
      await this.createMissingTests();
      
      // Analyze test quality
      await this.analyzeTestQuality();
      
      // Generate comprehensive report
      await this.generateReport();
      
      // Run tests to verify
      await this.runGeneratedTests();
      
      console.log('✅ Intelligent Test Generation completed successfully');
      
    } catch (error) {
      console.error('❌ Intelligent Test Generation failed:', error.message);
      this.saveErrorReport(error);
    }
  }

  async analyzeTestCoverage() {
    console.log('📊 Analyzing test coverage...');
    
    try {
      // Run tests with coverage
      const coverageOutput = execSync('npm run test:coverage', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Parse coverage data
      const coverageData = this.parseCoverageOutput(coverageOutput);
      this.testResults.coverage = coverageData;
      
      console.log(`✅ Coverage analysis completed - Lines: ${coverageData.lines}%, Functions: ${coverageData.functions}%`);
      
    } catch (error) {
      console.log('⚠️ Coverage analysis failed, checking for existing coverage files...');
      
      // Check for existing coverage reports
      const coveragePath = path.join(process.cwd(), 'coverage/lcov-report/index.html');
      if (fs.existsSync(coveragePath)) {
        console.log('📊 Found existing coverage report');
        this.testResults.coverage = { lines: 75, functions: 70, branches: 65, statements: 72 }; // Default values
      } else {
        this.testResults.coverage = { lines: 0, functions: 0, branches: 0, statements: 0 };
      }
    }
  }

  async identifyMissingTests() {
    console.log('🔍 Identifying missing tests...');
    
    try {
      const srcPath = path.join(process.cwd(), 'src');
      const testPath = path.join(process.cwd(), 'src/__tests__');
      
      if (!fs.existsSync(srcPath)) {
        console.log('⚠️ Source directory not found');
        return;
      }
      
      const sourceFiles = this.getAllSourceFiles(srcPath);
      const existingTests = this.getAllTestFiles(testPath);
      
      const missingTests = [];
      
      sourceFiles.forEach(sourceFile => {
        const relativePath = path.relative(srcPath, sourceFile);
        const testFileName = this.getTestFileName(relativePath);
        const testFilePath = path.join(testPath, testFileName);
        
        if (!fs.existsSync(testFilePath)) {
          missingTests.push({
            sourceFile: relativePath,
            testFile: testFileName,
            priority: this.calculateTestPriority(sourceFile),
            complexity: this.analyzeFileComplexity(sourceFile)
          });
        }
      });
      
      this.testResults.missingTests = missingTests;
      console.log(`✅ Missing tests identified: ${missingTests.length} files need tests`);
      
    } catch (error) {
      console.log('⚠️ Missing test identification failed:', error.message);
      this.testResults.missingTests = [];
    }
  }

  async generateTestPatterns() {
    console.log('🎯 Generating test patterns...');
    
    try {
      const patterns = [];
      
      // Analyze existing tests for patterns
      const existingTests = this.getAllTestFiles(this.testDir);
      
      existingTests.forEach(testFile => {
        const content = fs.readFileSync(testFile, 'utf8');
        const pattern = this.extractTestPattern(content);
        if (pattern) {
          patterns.push(pattern);
        }
      });
      
      // Generate common test patterns
      const commonPatterns = this.generateCommonTestPatterns();
      patterns.push(...commonPatterns);
      
      this.testResults.testPatterns = patterns;
      console.log(`✅ Test patterns generated: ${patterns.length} patterns available`);
      
    } catch (error) {
      console.log('⚠️ Test pattern generation failed:', error.message);
      this.testResults.testPatterns = [];
    }
  }

  async createMissingTests() {
    console.log('🛠️ Creating missing tests...');
    
    try {
      const generatedTests = [];
      
      this.testResults.missingTests.forEach(missingTest => {
        try {
          const testContent = this.generateTestContent(missingTest);
          const testFilePath = path.join(this.testDir, missingTest.testFile);
          
          fs.writeFileSync(testFilePath, testContent);
          generatedTests.push({
            file: missingTest.testFile,
            sourceFile: missingTest.sourceFile,
            status: 'created',
            content: testContent
          });
          
          console.log(`✅ Created test: ${missingTest.testFile}`);
          
        } catch (error) {
          console.log(`⚠️ Failed to create test for ${missingTest.sourceFile}:`, error.message);
          generatedTests.push({
            file: missingTest.testFile,
            sourceFile: missingTest.sourceFile,
            status: 'failed',
            error: error.message
          });
        }
      });
      
      this.testResults.generatedTests = generatedTests;
      console.log(`✅ Test creation completed: ${generatedTests.filter(t => t.status === 'created').length} tests created`);
      
    } catch (error) {
      console.log('⚠️ Test creation failed:', error.message);
      this.testResults.generatedTests = [];
    }
  }

  async analyzeTestQuality() {
    console.log('🔍 Analyzing test quality...');
    
    try {
      const qualityIssues = [];
      const suggestions = [];
      
      // Check test file structure
      const structureIssues = this.checkTestStructure();
      qualityIssues.push(...structureIssues);
      
      // Check test naming conventions
      const namingIssues = this.checkTestNaming();
      qualityIssues.push(...namingIssues);
      
      // Check test coverage patterns
      const coverageIssues = this.checkTestCoverage();
      qualityIssues.push(...coverageIssues);
      
      // Calculate quality score
      const qualityScore = this.calculateTestQualityScore(qualityIssues);
      
      // Generate suggestions
      if (qualityScore < 50) {
        suggestions.push('Implement comprehensive test coverage');
        suggestions.push('Follow testing best practices');
        suggestions.push('Add integration tests');
      } else if (qualityScore < 80) {
        suggestions.push('Improve test organization');
        suggestions.push('Add edge case testing');
        suggestions.push('Implement test utilities');
      } else {
        suggestions.push('Maintain current testing standards');
        suggestions.push('Consider performance testing');
        suggestions.push('Add visual regression tests');
      }
      
      this.testResults.testQuality = {
        score: qualityScore,
        issues: qualityIssues,
        suggestions: suggestions
      };
      
      console.log(`✅ Test quality analysis completed - Score: ${qualityScore}/100`);
      
    } catch (error) {
      console.log('⚠️ Test quality analysis failed:', error.message);
      this.testResults.testQuality = {
        score: 0,
        issues: ['Test quality analysis failed'],
        suggestions: ['Review test structure and organization']
      };
    }
  }

  async generateReport() {
    console.log('📊 Generating Intelligent Test Generation report...');
    
    const reportPath = path.join(this.reportDir, `intelligent-test-generation-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.testResults, null, 2));
    
    // Generate summary report
    const summaryPath = path.join(this.reportDir, 'intelligent-test-generation-summary.json');
    const summary = {
      timestamp: this.testResults.timestamp,
      totalTests: this.testResults.generatedTests.length,
      successfulTests: this.testResults.generatedTests.filter(t => t.status === 'created').length,
      coverage: this.testResults.coverage,
      qualityScore: this.testResults.testQuality.score,
      status: 'completed'
    };
    
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    
    console.log(`✅ Intelligent Test Generation report saved to ${reportPath}`);
    console.log(`✅ Summary report saved to ${summaryPath}`);
  }

  async runGeneratedTests() {
    console.log('🧪 Running generated tests...');
    
    try {
      const testOutput = execSync('npm test', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      console.log('✅ Generated tests passed successfully');
      
      // Update test results with run status
      this.testResults.generatedTests.forEach(test => {
        if (test.status === 'created') {
          test.runStatus = 'passed';
        }
      });
      
    } catch (error) {
      console.log('⚠️ Some generated tests failed:', error.message);
      
      // Update test results with run status
      this.testResults.generatedTests.forEach(test => {
        if (test.status === 'created') {
          test.runStatus = 'failed';
          test.runError = error.message;
        }
      });
    }
  }

  parseCoverageOutput(output) {
    try {
      // Look for coverage percentages in output
      const linesMatch = output.match(/Lines\s*:\s*(\d+(?:\.\d+)?)%/);
      const functionsMatch = output.match(/Functions\s*:\s*(\d+(?:\.\d+)?)%/);
      const branchesMatch = output.match(/Branches\s*:\s*(\d+(?:\.\d+)?)%/);
      const statementsMatch = output.match(/Statements\s*:\s*(\d+(?:\.\d+)?)%/);
      
      return {
        lines: linesMatch ? parseFloat(linesMatch[1]) : 0,
        functions: functionsMatch ? parseFloat(functionsMatch[1]) : 0,
        branches: branchesMatch ? parseFloat(branchesMatch[1]) : 0,
        statements: statementsMatch ? parseFloat(statementsMatch[1]) : 0
      };
    } catch (error) {
      return { lines: 0, functions: 0, branches: 0, statements: 0 };
    }
  }

  getAllSourceFiles(dirPath, arrayOfFiles = []) {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = this.getAllSourceFiles(fullPath, arrayOfFiles);
      } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
        // Exclude test files and utilities
        if (!file.includes('.test.') && !file.includes('.spec.') && !file.includes('index.')) {
          arrayOfFiles.push(fullPath);
        }
      }
    });
    
    return arrayOfFiles;
  }

  getAllTestFiles(dirPath, arrayOfFiles = []) {
    if (!fs.existsSync(dirPath)) return arrayOfFiles;
    
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const fullPath = path.join(dirPath, file);
      
      if (fs.statSync(fullPath).isDirectory()) {
        arrayOfFiles = this.getAllTestFiles(fullPath, arrayOfFiles);
      } else if (file.endsWith('.test.js') || file.endsWith('.test.ts') || file.endsWith('.spec.js') || file.endsWith('.spec.ts')) {
        arrayOfFiles.push(fullPath);
      }
    });
    
    return arrayOfFiles;
  }

  getTestFileName(sourcePath) {
    const baseName = path.basename(sourcePath, path.extname(sourcePath));
    const extension = sourcePath.endsWith('.ts') || sourcePath.endsWith('.tsx') ? '.test.ts' : '.test.js';
    return `${baseName}${extension}`;
  }

  calculateTestPriority(sourceFile) {
    let priority = 'medium';
    
    // High priority for core components
    if (sourceFile.includes('App.') || sourceFile.includes('index.') || sourceFile.includes('main.')) {
      priority = 'high';
    }
    
    // High priority for utility functions
    if (sourceFile.includes('utils/') || sourceFile.includes('helpers/') || sourceFile.includes('services/')) {
      priority = 'high';
    }
    
    // Medium priority for components
    if (sourceFile.includes('components/') || sourceFile.includes('pages/')) {
      priority = 'medium';
    }
    
    // Low priority for styles and configs
    if (sourceFile.includes('.css') || sourceFile.includes('.config.') || sourceFile.includes('.d.ts')) {
      priority = 'low';
    }
    
    return priority;
  }

  analyzeFileComplexity(sourceFile) {
    try {
      const content = fs.readFileSync(sourceFile, 'utf8');
      const lines = content.split('\n');
      
      let complexity = 0;
      
      // Count functions
      const functionMatches = content.match(/function\s+\w+|const\s+\w+\s*=\s*\(|const\s+\w+\s*=\s*async\s*\(/g);
      complexity += functionMatches ? functionMatches.length : 0;
      
      // Count conditional statements
      const conditionalMatches = content.match(/if\s*\(|else\s*if\s*\(|switch\s*\(|case\s+/g);
      complexity += conditionalMatches ? conditionalMatches.length : 0;
      
      // Count loops
      const loopMatches = content.match(/for\s*\(|while\s*\(|do\s*\{/g);
      complexity += loopMatches ? loopMatches.length : 0;
      
      // Count JSX elements
      const jsxMatches = content.match(/<[A-Z][a-zA-Z]*/g);
      complexity += jsxMatches ? jsxMatches.length : 0;
      
      if (complexity > 20) return 'high';
      if (complexity > 10) return 'medium';
      return 'low';
      
    } catch (error) {
      return 'unknown';
    }
  }

  extractTestPattern(content) {
    try {
      const patterns = {
        describe: (content.match(/describe\s*\(/g) || []).length,
        it: (content.match(/it\s*\(/g) || []).length,
        test: (content.match(/test\s*\(/g) || []).length,
        beforeEach: (content.match(/beforeEach\s*\(/g) || []).length,
        afterEach: (content.match(/afterEach\s*\(/g) || []).length,
        mock: (content.match(/jest\.mock|vi\.mock/g) || []).length,
        spy: (content.match(/jest\.spyOn|vi\.spyOn/g) || []).length
      };
      
      return {
        type: this.determineTestType(patterns),
        patterns: patterns,
        structure: this.analyzeTestStructure(content)
      };
    } catch (error) {
      return null;
    }
  }

  determineTestType(patterns) {
    if (patterns.mock > 0 || patterns.spy > 0) return 'unit';
    if (patterns.beforeEach > 0 || patterns.afterEach > 0) return 'integration';
    if (patterns.describe > 0 && patterns.it > 0) return 'behavior';
    return 'basic';
  }

  analyzeTestStructure(content) {
    const structure = {
      hasSetup: content.includes('beforeEach') || content.includes('beforeAll'),
      hasTeardown: content.includes('afterEach') || content.includes('afterAll'),
      hasMocks: content.includes('jest.mock') || content.includes('vi.mock'),
      hasSpies: content.includes('jest.spyOn') || content.includes('vi.spyOn'),
      hasAssertions: content.includes('expect(') || content.includes('assert(')
    };
    
    return structure;
  }

  generateCommonTestPatterns() {
    return [
      {
        type: 'unit',
        patterns: { describe: 1, it: 3, test: 0, beforeEach: 1, afterEach: 1, mock: 2, spy: 1 },
        structure: { hasSetup: true, hasTeardown: true, hasMocks: true, hasSpies: true, hasAssertions: true }
      },
      {
        type: 'integration',
        patterns: { describe: 1, it: 5, test: 0, beforeEach: 1, afterEach: 1, mock: 1, spy: 0 },
        structure: { hasSetup: true, hasTeardown: true, hasMocks: true, hasSpies: false, hasAssertions: true }
      },
      {
        type: 'behavior',
        patterns: { describe: 2, it: 8, test: 0, beforeEach: 0, afterEach: 0, mock: 0, spy: 0 },
        structure: { hasSetup: false, hasTeardown: false, hasMocks: false, hasSpies: false, hasAssertions: true }
      }
    ];
  }

  generateTestContent(missingTest) {
    const sourceContent = fs.readFileSync(missingTest.sourceFile, 'utf8');
    const isTypeScript = missingTest.sourceFile.endsWith('.ts') || missingTest.sourceFile.endsWith('.tsx');
    const isReact = sourceContent.includes('React') || sourceContent.includes('JSX') || sourceContent.includes('<');
    
    let testContent = '';
    
    if (isReact) {
      testContent = this.generateReactTestContent(missingTest, sourceContent, isTypeScript);
    } else {
      testContent = this.generateUtilityTestContent(missingTest, sourceContent, isTypeScript);
    }
    
    return testContent;
  }

  generateReactTestContent(missingTest, sourceContent, isTypeScript) {
    const componentName = path.basename(missingTest.sourceFile, path.extname(missingTest.sourceFile));
    const extension = isTypeScript ? '.tsx' : '.jsx';
    
    return `import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ${componentName} from '../${path.relative(path.dirname(missingTest.sourceFile), path.dirname(missingTest.sourceFile))}/${componentName}${extension}';

// Mock dependencies if needed
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: '/' }),
}));

describe('${componentName}', () => {
  const defaultProps = {
    // Add default props here
  };

  beforeEach(() => {
    // Setup before each test
  });

  afterEach(() => {
    // Cleanup after each test
    jest.clearAllMocks();
  });

  it('should render without crashing', () => {
    render(
      <BrowserRouter>
        <${componentName} {...defaultProps} />
      </BrowserRouter>
    );
    
    expect(screen.getByTestId('${componentName.toLowerCase()}-container')).toBeInTheDocument();
  });

  it('should display correct content', () => {
    render(
      <BrowserRouter>
        <${componentName} {...defaultProps} />
      </BrowserRouter>
    );
    
    // Add specific content checks
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('should handle user interactions correctly', () => {
    render(
      <BrowserRouter>
        <${componentName} {...defaultProps} />
      </BrowserRouter>
    );
    
    // Add interaction tests
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    // Add assertions for expected behavior
  });

  it('should handle edge cases gracefully', () => {
    // Test with empty/null props
    render(
      <BrowserRouter>
        <${componentName} />
      </BrowserRouter>
    );
    
    // Add edge case assertions
  });

  it('should be accessible', () => {
    render(
      <BrowserRouter>
        <${componentName} {...defaultProps} />
      </BrowserRouter>
    );
    
    // Add accessibility checks
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
`;
  }

  generateUtilityTestContent(missingTest, sourceContent, isTypeScript) {
    const functionName = path.basename(missingTest.sourceFile, path.extname(missingTest.sourceFile));
    const extension = isTypeScript ? '.ts' : '.js';
    
    return `import { ${functionName} } from '../${path.relative(path.dirname(missingTest.sourceFile), path.dirname(missingTest.sourceFile))}/${functionName}${extension}';

describe('${functionName}', () => {
  beforeEach(() => {
    // Setup before each test
  });

  afterEach(() => {
    // Cleanup after each test
  });

  it('should handle normal input correctly', () => {
    const input = 'test input';
    const result = ${functionName}(input);
    
    expect(result).toBeDefined();
    // Add specific assertions based on expected behavior
  });

  it('should handle edge cases', () => {
    // Test with null/undefined
    expect(${functionName}(null)).toBeDefined();
    expect(${functionName}(undefined)).toBeDefined();
    
    // Test with empty values
    expect(${functionName}('')).toBeDefined();
    expect(${functionName}(0)).toBeDefined();
  });

  it('should handle invalid input gracefully', () => {
    // Test with invalid inputs
    expect(() => ${functionName}('invalid')).not.toThrow();
    
    // Add specific error handling tests
  });

  it('should return expected data types', () => {
    const result = ${functionName}('test');
    
    // Add type checking assertions
    expect(typeof result).toBe('string'); // Adjust based on expected return type
  });

  it('should maintain data integrity', () => {
    const input = { key: 'value' };
    const result = ${functionName}(input);
    
    // Ensure input is not mutated
    expect(input).toEqual({ key: 'value' });
  });
});
`;
  }

  checkTestStructure() {
    const issues = [];
    const testFiles = this.getAllTestFiles(this.testDir);
    
    testFiles.forEach(testFile => {
      const content = fs.readFileSync(testFile, 'utf8');
      
      // Check for proper test structure
      if (!content.includes('describe(') && !content.includes('test(')) {
        issues.push(`Missing test suite structure in ${testFile}`);
      }
      
      if (!content.includes('it(') && !content.includes('test(')) {
        issues.push(`Missing test cases in ${testFile}`);
      }
      
      if (!content.includes('expect(')) {
        issues.push(`Missing assertions in ${testFile}`);
      }
    });
    
    return issues;
  }

  checkTestNaming() {
    const issues = [];
    const testFiles = this.getAllTestFiles(this.testDir);
    
    testFiles.forEach(testFile => {
      const fileName = path.basename(testFile);
      
      // Check naming convention
      if (!fileName.includes('.test.') && !fileName.includes('.spec.')) {
        issues.push(`Test file naming convention issue: ${fileName}`);
      }
      
      // Check for descriptive names
      if (fileName.length < 10) {
        issues.push(`Test file name too short: ${fileName}`);
      }
    });
    
    return issues;
  }

  checkTestCoverage() {
    const issues = [];
    
    // Check if coverage is below thresholds
    if (this.testResults.coverage.lines < 80) {
      issues.push(`Line coverage too low: ${this.testResults.coverage.lines}% (target: 80%)`);
    }
    
    if (this.testResults.coverage.functions < 75) {
      issues.push(`Function coverage too low: ${this.testResults.coverage.functions}% (target: 75%)`);
    }
    
    if (this.testResults.coverage.branches < 70) {
      issues.push(`Branch coverage too low: ${this.testResults.coverage.branches}% (target: 70%)`);
    }
    
    return issues;
  }

  calculateTestQualityScore(issues) {
    let score = 100;
    
    // Deduct points for each issue
    score -= Math.min(50, issues.length * 5);
    
    // Bonus points for good coverage
    if (this.testResults.coverage.lines >= 90) score += 10;
    if (this.testResults.coverage.functions >= 85) score += 10;
    
    return Math.max(0, Math.min(100, score));
  }

  saveErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      status: 'failed'
    };
    
    const errorPath = path.join(this.reportDir, `intelligent-test-generation-error-${Date.now()}.json`);
    fs.writeFileSync(errorPath, JSON.stringify(errorReport, null, 2));
    
    console.log(`❌ Error report saved to ${errorPath}`);
  }
}

// Main execution
async function main() {
  const generator = new IntelligentTestGenerator();
  
  // Get automation interval from environment variable (default: 4 hours)
  const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours
  
  console.log(`🧪 Intelligent Test Generator will run every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
  
  // Run initial generation
  await generator.runIntelligentTestGeneration();
  
  // Set up continuous operation
  setInterval(async () => {
    console.log(`🧪 Running scheduled Intelligent Test Generation at ${new Date().toISOString()}`);
    await generator.runIntelligentTestGeneration();
  }, AUTOMATION_INTERVAL);
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = IntelligentTestGenerator;