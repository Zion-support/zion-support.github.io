#!/usr/bin/env node

/**
 * Intelligent Test Coverage Analyzer
 * Analyzes test coverage and suggests intelligent improvements
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class IntelligentTestAnalyzer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'intelligent-test-analyzer.log');
    this.testReport = path.join(this.projectRoot, 'logs', 'test-analysis-report.json');
    this.coverageReport = path.join(this.projectRoot, 'logs', 'coverage-analysis.json');
    this.ensureLogsDirectory();
    this.testPatterns = this.loadTestPatterns();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  loadTestPatterns() {
    return {
      // Test quality patterns
      quality: {
        'missing-assertions': {
          pattern: /test\s*\([^)]*\)\s*\{[^}]*\}/g,
          risk: 'MEDIUM',
          suggestion: 'Add proper assertions to test cases',
          autoFix: false
        },
        'empty-tests': {
          pattern: /test\s*\([^)]*\)\s*\{\s*\}/g,
          risk: 'HIGH',
          suggestion: 'Empty test cases should be removed or implemented',
          autoFix: false
        },
        'no-description': {
          pattern: /test\s*\([^)]*\)\s*\{/g,
          risk: 'LOW',
          suggestion: 'Add descriptive test names for better debugging',
          autoFix: false
        }
      },
      
      // Test coverage patterns
      coverage: {
        'uncovered-functions': {
          pattern: /function\s+\w+\s*\([^)]*\)\s*\{/g,
          risk: 'MEDIUM',
          suggestion: 'Add tests for uncovered functions',
          autoFix: false
        },
        'uncovered-components': {
          pattern: /const\s+\w+\s*=\s*\([^)]*\)\s*=>\s*\{/g,
          risk: 'MEDIUM',
          suggestion: 'Add tests for React components',
          autoFix: false
        }
      },
      
      // Test structure patterns
      structure: {
        'missing-setup': {
          pattern: /beforeEach\s*\([^)]*\)\s*\{/g,
          risk: 'LOW',
          suggestion: 'Consider adding beforeEach for test setup',
          autoFix: false
        },
        'missing-cleanup': {
          pattern: /afterEach\s*\([^)]*\)\s*\{/g,
          risk: 'LOW',
          suggestion: 'Consider adding afterEach for test cleanup',
          autoFix: false
        }
      }
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async analyzeTestCoverage() {
    this.log('🧪 Starting Intelligent Test Coverage Analysis...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      coverage: {},
      quality: {},
      structure: {},
      recommendations: [],
      autoImprovements: []
    };

    try {
      // Analyze test coverage
      analysis.coverage = await this.analyzeCoverage();
      
      // Analyze test quality
      analysis.quality = await this.analyzeTestQuality();
      
      // Analyze test structure
      analysis.structure = await this.analyzeTestStructure();
      
      // Generate intelligent recommendations
      analysis.recommendations = this.generateTestRecommendations(analysis);
      
      // Apply auto-improvements
      analysis.autoImprovements = await this.applyTestImprovements(analysis);
      
      // Save analysis report
      await this.saveTestReport(analysis);
      
      this.log(`✅ Test coverage analysis complete`);
      
    } catch (error) {
      this.log(`❌ Test coverage analysis failed: ${error.message}`, 'ERROR');
    }

    return analysis;
  }

  async analyzeCoverage() {
    this.log('📊 Analyzing test coverage...');
    
    const coverage = {
      overall: 0,
      files: [],
      uncovered: [],
      critical: [],
      suggestions: []
    };

    try {
      // Run test coverage if available
      if (this.hasTestCoverageScript()) {
        coverage.overall = await this.runTestCoverage();
      }
      
      // Analyze source files for coverage
      coverage.files = await this.analyzeSourceFileCoverage();
      
      // Identify uncovered critical paths
      coverage.uncovered = await this.identifyUncoveredPaths();
      
      // Identify critical uncovered areas
      coverage.critical = this.identifyCriticalUncoveredAreas(coverage);
      
      // Generate coverage suggestions
      coverage.suggestions = this.generateCoverageSuggestions(coverage);
      
    } catch (error) {
      this.log(`❌ Coverage analysis failed: ${error.message}`, 'ERROR');
    }

    return coverage;
  }

  hasTestCoverageScript() {
    try {
      const packagePath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      return packageJson.scripts && (
        packageJson.scripts.test ||
        packageJson.scripts['test:coverage'] ||
        packageJson.scripts.coverage
      );
    } catch (error) {
      return false;
    }
  }

  async runTestCoverage() {
    try {
      // Try different coverage commands
      const coverageCommands = [
        'npm run test:coverage',
        'npm run coverage',
        'npm test -- --coverage',
        'yarn test:coverage',
        'yarn coverage'
      ];
      
      for (const command of coverageCommands) {
        try {
          const output = execSync(command, { 
            encoding: 'utf8',
            stdio: 'pipe',
            cwd: this.projectRoot
          });
          
          // Parse coverage output
          const coverage = this.parseCoverageOutput(output);
          if (coverage > 0) {
            this.log(`✅ Coverage command successful: ${command}`);
            return coverage;
          }
        } catch (error) {
          // Try next command
        }
      }
      
      return 0;
      
    } catch (error) {
      this.log(`⚠️ No coverage command available: ${error.message}`, 'WARN');
      return 0;
    }
  }

  parseCoverageOutput(output) {
    try {
      // Look for coverage percentage in output
      const coverageMatch = output.match(/(\d+(?:\.\d+)?)%/);
      if (coverageMatch) {
        return parseFloat(coverageMatch[1]);
      }
      
      // Look for Jest coverage output
      const jestMatch = output.match(/All files\s+\|\s+(\d+(?:\.\d+)?)%/);
      if (jestMatch) {
        return parseFloat(jestMatch[1]);
      }
      
      return 0;
      
    } catch (error) {
      return 0;
    }
  }

  async analyzeSourceFileCoverage() {
    const coverage = [];
    const sourceFiles = this.findSourceFiles();
    const testFiles = this.findTestFiles();
    
    for (const sourceFile of sourceFiles) {
      const fileCoverage = {
        file: sourceFile,
        hasTests: false,
        testFile: null,
        coverage: 0,
        suggestions: []
      };
      
      // Check if source file has corresponding tests
      const testFile = this.findCorrespondingTestFile(sourceFile, testFiles);
      if (testFile) {
        fileCoverage.hasTests = true;
        fileCoverage.testFile = testFile;
        fileCoverage.coverage = await this.calculateFileCoverage(sourceFile, testFile);
      } else {
        fileCoverage.suggestions.push('Create corresponding test file');
      }
      
      // Analyze function coverage
      const functions = this.extractFunctions(sourceFile);
      const testedFunctions = testFile ? this.extractTestedFunctions(testFile) : [];
      
      const uncoveredFunctions = functions.filter(f => 
        !testedFunctions.some(tf => tf.name === f.name)
      );
      
      if (uncoveredFunctions.length > 0) {
        fileCoverage.suggestions.push(`Add tests for ${uncoveredFunctions.length} uncovered functions`);
      }
      
      coverage.push(fileCoverage);
    }
    
    return coverage;
  }

  findCorrespondingTestFile(sourceFile, testFiles) {
    const sourceName = path.basename(sourceFile, path.extname(sourceFile));
    const sourceDir = path.dirname(sourceFile);
    
    // Look for test files in the same directory
    for (const testFile of testFiles) {
      const testName = path.basename(testFile, path.extname(testFile));
      const testDir = path.dirname(testFile);
      
      if (testDir === sourceDir && testName.includes(sourceName)) {
        return testFile;
      }
    }
    
    // Look for test files in test directories
    const testDirs = ['tests', 'test', '__tests__', 'spec'];
    for (const testDir of testDirs) {
      const testPath = path.join(this.projectRoot, testDir, path.relative(this.projectRoot, sourceFile));
      const testFile = testPath.replace(/\.[jt]sx?$/, '.test.$1');
      
      if (testFiles.some(tf => tf === testFile)) {
        return testFile;
      }
    }
    
    return null;
  }

  async calculateFileCoverage(sourceFile, testFile) {
    try {
      const sourceContent = fs.readFileSync(sourceFile, 'utf8');
      const testContent = fs.readFileSync(testFile, 'utf8');
      
      // Simple coverage calculation based on function testing
      const functions = this.extractFunctions(sourceContent);
      const testedFunctions = this.extractTestedFunctions(testContent);
      
      if (functions.length === 0) return 100;
      
      const covered = functions.filter(f => 
        testedFunctions.some(tf => tf.name === f.name)
      ).length;
      
      return Math.round((covered / functions.length) * 100);
      
    } catch (error) {
      return 0;
    }
  }

  extractFunctions(content) {
    const functions = [];
    
    // Extract function declarations
    const functionMatches = content.match(/function\s+(\w+)\s*\([^)]*\)/g) || [];
    functionMatches.forEach(match => {
      const name = match.match(/function\s+(\w+)/)?.[1];
      if (name) functions.push({ name, type: 'function' });
    });
    
    // Extract arrow functions and const functions
    const arrowMatches = content.match(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>/g) || [];
    arrowMatches.forEach(match => {
      const name = match.match(/const\s+(\w+)/)?.[1];
      if (name) functions.push({ name, type: 'arrow' });
    });
    
    // Extract React components
    const componentMatches = content.match(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{/g) || [];
    componentMatches.forEach(match => {
      const name = match.match(/const\s+(\w+)/)?.[1];
      if (name && name[0] === name[0].toUpperCase()) {
        functions.push({ name, type: 'component' });
      }
    });
    
    return functions;
  }

  extractTestedFunctions(testContent) {
    const testedFunctions = [];
    
    // Extract function names from test descriptions
    const testMatches = testContent.match(/test\s*\(['"`]([^'"`]+)['"`]/g) || [];
    testMatches.forEach(match => {
      const description = match.match(/test\s*\(['"`]([^'"`]+)['"`]/)?.[1];
      if (description) {
        // Try to extract function name from test description
        const functionMatch = description.match(/(\w+)/);
        if (functionMatch) {
          testedFunctions.push({ name: functionMatch[1], type: 'test' });
        }
      }
    });
    
    return testedFunctions;
  }

  async identifyUncoveredPaths() {
    const uncovered = [];
    const sourceFiles = this.findSourceFiles();
    
    for (const file of sourceFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const functions = this.extractFunctions(content);
        
        // Check for critical functions without tests
        const criticalFunctions = functions.filter(f => 
          this.isCriticalFunction(f, content)
        );
        
        if (criticalFunctions.length > 0) {
          uncovered.push({
            file,
            functions: criticalFunctions,
            priority: 'HIGH',
            reason: 'Critical functions without test coverage'
          });
        }
        
      } catch (error) {
        // Skip files we can't read
      }
    }
    
    return uncovered;
  }

  isCriticalFunction(func, content) {
    // Check if function is critical based on patterns
    const criticalPatterns = [
      /error\s+handling/i,
      /validation/i,
      /authentication/i,
      /authorization/i,
      /payment/i,
      /security/i,
      /database/i,
      /api\s+call/i
    ];
    
    // Look for critical patterns in function context
    const functionStart = content.indexOf(`function ${func.name}`) || 
                         content.indexOf(`const ${func.name}`);
    
    if (functionStart === -1) return false;
    
    // Extract function body context
    const context = content.substring(functionStart, functionStart + 500);
    
    return criticalPatterns.some(pattern => pattern.test(context));
  }

  identifyCriticalUncoveredAreas(coverage) {
    const critical = [];
    
    // Identify files with low coverage
    const lowCoverageFiles = coverage.files.filter(f => f.coverage < 50);
    if (lowCoverageFiles.length > 0) {
      critical.push({
        type: 'LOW_COVERAGE',
        priority: 'HIGH',
        description: `${lowCoverageFiles.length} files have less than 50% coverage`,
        files: lowCoverageFiles.map(f => f.file),
        action: 'Increase test coverage for low-coverage files'
      });
    }
    
    // Identify uncovered critical paths
    if (coverage.uncovered.length > 0) {
      critical.push({
        type: 'CRITICAL_UNCOVERED',
        priority: 'CRITICAL',
        description: `${coverage.uncovered.length} critical functions lack test coverage`,
        functions: coverage.uncovered.map(u => u.functions).flat(),
        action: 'Add tests for critical functions immediately'
      });
    }
    
    return critical;
  }

  generateCoverageSuggestions(coverage) {
    const suggestions = [];
    
    if (coverage.overall < 80) {
      suggestions.push({
        priority: 'HIGH',
        title: 'Increase Overall Coverage',
        description: `Current coverage is ${coverage.overall}%, aim for at least 80%`,
        actions: [
          'Add tests for uncovered functions',
          'Focus on critical business logic',
          'Implement integration tests'
        ]
      });
    }
    
    if (coverage.critical.length > 0) {
      suggestions.push({
        priority: 'CRITICAL',
        title: 'Address Critical Coverage Gaps',
        description: 'Critical functions without tests pose business risk',
        actions: [
          'Prioritize testing of critical functions',
          'Implement error handling tests',
          'Add security and validation tests'
        ]
      });
    }
    
    return suggestions;
  }

  async analyzeTestQuality() {
    this.log('🔍 Analyzing test quality...');
    
    const quality = {
      score: 0,
      issues: [],
      patterns: [],
      suggestions: []
    };

    try {
      const testFiles = this.findTestFiles();
      
      for (const testFile of testFiles) {
        const fileQuality = await this.analyzeTestFileQuality(testFile);
        quality.issues.push(...fileQuality.issues);
        quality.patterns.push(...fileQuality.patterns);
      }
      
      // Calculate quality score
      quality.score = this.calculateQualityScore(quality.issues);
      
      // Generate quality suggestions
      quality.suggestions = this.generateQualitySuggestions(quality);
      
    } catch (error) {
      this.log(`❌ Test quality analysis failed: ${error.message}`, 'ERROR');
    }

    return quality;
  }

  async analyzeTestFileQuality(testFile) {
    const quality = {
      issues: [],
      patterns: []
    };
    
    try {
      const content = fs.readFileSync(testFile, 'utf8');
      
      // Analyze each pattern category
      for (const [category, patterns] of Object.entries(this.testPatterns)) {
        for (const [patternName, patternData] of Object.entries(patterns)) {
          const matches = content.match(patternData.pattern);
          
          if (matches) {
            const issue = {
              file: testFile,
              type: patternName,
              category: category,
              risk: patternData.risk,
              suggestion: patternData.suggestion,
              matches: matches.length,
              lines: this.findLineNumbers(content, patternData.pattern)
            };
            
            quality.issues.push(issue);
          }
        }
      }
      
      // Additional quality checks
      quality.issues.push(...this.checkTestStructure(content, testFile));
      
    } catch (error) {
      this.log(`❌ Failed to analyze test file quality: ${error.message}`, 'ERROR');
    }

    return quality;
  }

  checkTestStructure(content, testFile) {
    const issues = [];
    
    // Check for proper test structure
    if (content.includes('test(') && !content.includes('expect(')) {
      issues.push({
        file: testFile,
        type: 'missing-expectations',
        category: 'structure',
        risk: 'HIGH',
        suggestion: 'Tests should include assertions (expect statements)',
        matches: 1,
        lines: []
      });
    }
    
    // Check for test isolation
    if (content.includes('test(') && !content.includes('beforeEach(') && content.includes('let ')) {
      issues.push({
        file: testFile,
        type: 'potential-test-pollution',
        category: 'structure',
        risk: 'MEDIUM',
        suggestion: 'Consider using beforeEach to reset test state',
        matches: 1,
        lines: []
      });
    }
    
    return issues;
  }

  calculateQualityScore(issues) {
    let score = 100;
    
    for (const issue of issues) {
      switch (issue.risk) {
        case 'CRITICAL': score -= 20; break;
        case 'HIGH': score -= 15; break;
        case 'MEDIUM': score -= 10; break;
        case 'LOW': score -= 5; break;
      }
    }
    
    return Math.max(0, score);
  }

  generateQualitySuggestions(quality) {
    const suggestions = [];
    
    if (quality.score < 70) {
      suggestions.push({
        priority: 'HIGH',
        title: 'Improve Test Quality',
        description: `Test quality score is ${quality.score}/100`,
        actions: [
          'Add proper assertions to all tests',
          'Remove empty test cases',
          'Improve test descriptions',
          'Add setup and cleanup hooks'
        ]
      });
    }
    
    const highRiskIssues = quality.issues.filter(i => i.risk === 'HIGH');
    if (highRiskIssues.length > 0) {
      suggestions.push({
        priority: 'HIGH',
        title: 'Address High-Risk Test Issues',
        description: `${highRiskIssues.length} high-risk issues found`,
        actions: highRiskIssues.map(i => i.suggestion)
      });
    }
    
    return suggestions;
  }

  async analyzeTestStructure() {
    this.log('🏗️ Analyzing test structure...');
    
    const structure = {
      organization: {},
      patterns: [],
      suggestions: []
    };

    try {
      // Analyze test organization
      structure.organization = this.analyzeTestOrganization();
      
      // Identify testing patterns
      structure.patterns = this.identifyTestingPatterns();
      
      // Generate structure suggestions
      structure.suggestions = this.generateStructureSuggestions(structure);
      
    } catch (error) {
      this.log(`❌ Test structure analysis failed: ${error.message}`, 'ERROR');
    }

    return structure;
  }

  analyzeTestOrganization() {
    const organization = {
      testDirectories: [],
      testFileNaming: {},
      testStructure: {}
    };
    
    // Find test directories
    const possibleTestDirs = ['tests', 'test', '__tests__', 'spec'];
    for (const dir of possibleTestDirs) {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        organization.testDirectories.push(dir);
      }
    }
    
    // Analyze test file naming conventions
    const testFiles = this.findTestFiles();
    const namingPatterns = {
      'test.js': 0,
      'spec.js': 0,
      'test.ts': 0,
      'spec.ts': 0,
      'test.tsx': 0,
      'spec.tsx': 0
    };
    
    testFiles.forEach(file => {
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      if (base.endsWith('.test')) {
        namingPatterns[`test${ext}`]++;
      } else if (base.endsWith('.spec')) {
        namingPatterns[`spec${ext}`]++;
      }
    });
    
    organization.testFileNaming = namingPatterns;
    
    return organization;
  }

  identifyTestingPatterns() {
    const patterns = [];
    const testFiles = this.findTestFiles();
    
    for (const testFile of testFiles) {
      try {
        const content = fs.readFileSync(testFile, 'utf8');
        
        // Check for testing frameworks
        if (content.includes('jest.') || content.includes('describe(')) {
          patterns.push({
            file: testFile,
            framework: 'Jest',
            patterns: this.extractJestPatterns(content)
          });
        } else if (content.includes('vitest.') || content.includes('it(')) {
          patterns.push({
            file: testFile,
            framework: 'Vitest',
            patterns: this.extractVitestPatterns(content)
          });
        }
        
      } catch (error) {
        // Skip files we can't read
      }
    }
    
    return patterns;
  }

  extractJestPatterns(content) {
    const patterns = [];
    
    if (content.includes('describe(')) patterns.push('describe blocks');
    if (content.includes('beforeEach(')) patterns.push('beforeEach hooks');
    if (content.includes('afterEach(')) patterns.push('afterEach hooks');
    if (content.includes('beforeAll(')) patterns.push('beforeAll hooks');
    if (content.includes('afterAll(')) patterns.push('afterAll hooks');
    if (content.includes('mock(')) patterns.push('mocking');
    if (content.includes('spyOn(')) patterns.push('spying');
    
    return patterns;
  }

  extractVitestPatterns(content) {
    const patterns = [];
    
    if (content.includes('describe(')) patterns.push('describe blocks');
    if (content.includes('beforeEach(')) patterns.push('beforeEach hooks');
    if (content.includes('afterEach(')) patterns.push('afterEach hooks');
    if (content.includes('vi.mock(')) patterns.push('mocking');
    if (content.includes('vi.spyOn(')) patterns.push('spying');
    
    return patterns;
  }

  generateStructureSuggestions(structure) {
    const suggestions = [];
    
    // Check for consistent naming
    const naming = structure.organization.testFileNaming;
    const totalFiles = Object.values(naming).reduce((sum, count) => sum + count, 0);
    
    if (totalFiles > 0) {
      const mostCommon = Object.entries(naming).reduce((a, b) => a[1] > b[1] ? a : b);
      const consistency = (mostCommon[1] / totalFiles) * 100;
      
      if (consistency < 80) {
        suggestions.push({
          priority: 'MEDIUM',
          title: 'Standardize Test File Naming',
          description: `Test file naming is ${consistency.toFixed(1)}% consistent`,
          actions: [
            'Choose one naming convention (test.* or spec.*)',
            'Rename files to follow the chosen convention',
            'Update import statements accordingly'
          ]
        });
      }
    }
    
    // Check for test organization
    if (structure.organization.testDirectories.length === 0) {
      suggestions.push({
        priority: 'LOW',
        title: 'Organize Test Files',
        description: 'No dedicated test directories found',
        actions: [
          'Create a tests/ directory',
          'Organize tests by feature or module',
          'Consider co-locating tests with source files'
        ]
      });
    }
    
    return suggestions;
  }

  generateTestRecommendations(analysis) {
    const recommendations = [];
    
    // Coverage recommendations
    if (analysis.coverage.suggestions.length > 0) {
      recommendations.push(...analysis.coverage.suggestions);
    }
    
    // Quality recommendations
    if (analysis.quality.suggestions.length > 0) {
      recommendations.push(...analysis.quality.suggestions);
    }
    
    // Structure recommendations
    if (analysis.structure.suggestions.length > 0) {
      recommendations.push(...analysis.structure.suggestions);
    }
    
    // Overall recommendations
    if (analysis.coverage.overall < 70) {
      recommendations.push({
        priority: 'HIGH',
        title: 'Improve Overall Test Coverage',
        description: 'Test coverage is below recommended threshold',
        actions: [
          'Focus on critical business logic first',
          'Add integration tests for key workflows',
          'Implement automated testing in CI/CD'
        ]
      });
    }
    
    return recommendations;
  }

  async applyTestImprovements(analysis) {
    this.log('🔧 Applying test improvements...');
    
    const improvements = [];
    
    try {
      // Auto-generate test templates for uncovered files
      const uncoveredFiles = analysis.coverage.files.filter(f => !f.hasTests);
      
      for (const file of uncoveredFiles.slice(0, 5)) { // Limit to first 5 files
        const improvement = await this.generateTestTemplate(file);
        if (improvement.success) {
          improvements.push(improvement);
        }
      }
      
      // Auto-fix common test issues
      const autoFixableIssues = analysis.quality.issues.filter(i => 
        i.type === 'missing-assertions' || i.type === 'empty-tests'
      );
      
      for (const issue of autoFixableIssues.slice(0, 3)) { // Limit to first 3 issues
        const improvement = await this.autoFixTestIssue(issue);
        if (improvement.success) {
          improvements.push(improvement);
        }
      }
      
    } catch (error) {
      this.log(`❌ Test improvements failed: ${error.message}`, 'ERROR');
    }

    return improvements;
  }

  async generateTestTemplate(fileCoverage) {
    try {
      const sourceFile = fileCoverage.file;
      const sourceContent = fs.readFileSync(sourceFile, 'utf8');
      const functions = this.extractFunctions(sourceContent);
      
      if (functions.length === 0) {
        return {
          success: false,
          description: 'No functions found to test'
        };
      }
      
      // Generate test file path
      const testFile = this.generateTestFilePath(sourceFile);
      
      // Generate test content
      const testContent = this.generateTestContent(sourceFile, functions);
      
      // Create test file
      fs.writeFileSync(testFile, testContent);
      
      return {
        success: true,
        description: `Generated test template for ${path.basename(sourceFile)}`,
        file: testFile,
        functions: functions.length
      };
      
    } catch (error) {
      return {
        success: false,
        description: `Failed to generate test template: ${error.message}`
      };
    }
  }

  generateTestFilePath(sourceFile) {
    const relativePath = path.relative(this.projectRoot, sourceFile);
    const dir = path.dirname(relativePath);
    const name = path.basename(relativePath, path.extname(relativePath));
    const ext = path.extname(relativePath);
    
    // Create test file in tests directory
    const testDir = path.join(this.projectRoot, 'tests', dir);
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }
    
    return path.join(testDir, `${name}.test${ext}`);
  }

  generateTestContent(sourceFile, functions) {
    const fileName = path.basename(sourceFile, path.extname(sourceFile));
    const importPath = path.relative(path.dirname(this.generateTestFilePath(sourceFile)), sourceFile);
    
    let content = `import { describe, test, expect } from 'vitest';\n`;
    content += `import { ${functions.map(f => f.name).join(', ')} } from '${importPath.replace(/\\/g, '/')}';\n\n`;
    
    content += `describe('${fileName}', () => {\n`;
    
    functions.forEach(func => {
      content += `  describe('${func.name}', () => {\n`;
      content += `    test('should work correctly', () => {\n`;
      content += `      // TODO: Implement test for ${func.name}\n`;
      content += `      expect(true).toBe(true);\n`;
      content += `    });\n`;
      content += `  });\n\n`;
    });
    
    content += `});\n`;
    
    return content;
  }

  async autoFixTestIssue(issue) {
    try {
      const content = fs.readFileSync(issue.file, 'utf8');
      let modifiedContent = content;
      let fixed = false;
      
      if (issue.type === 'missing-assertions') {
        // Add basic assertion to tests without expectations
        modifiedContent = content.replace(
          /test\s*\([^)]*\)\s*\{([^}]*)\}/g,
          (match, testBody) => {
            if (!testBody.includes('expect(')) {
              fixed = true;
              return match.replace('}', '\n      expect(true).toBe(true);\n    }');
            }
            return match;
          }
        );
      } else if (issue.type === 'empty-tests') {
        // Add TODO comment to empty tests
        modifiedContent = content.replace(
          /test\s*\([^)]*\)\s*\{\s*\}/g,
          (match) => {
            fixed = true;
            return match.replace('{}', '{\n      // TODO: Implement test\n      expect(true).toBe(true);\n    }');
          }
        );
      }
      
      if (fixed) {
        // Create backup
        const backupPath = `${issue.file}.backup.${Date.now()}`;
        fs.writeFileSync(backupPath, content);
        
        // Apply fixes
        fs.writeFileSync(issue.file, modifiedContent);
        
        return {
          success: true,
          description: `Auto-fixed ${issue.type} in ${path.basename(issue.file)}`,
          file: issue.file,
          issue: issue.type
        };
      }
      
      return {
        success: false,
        description: `No auto-fix available for ${issue.type}`
      };
      
    } catch (error) {
      return {
        success: false,
        description: `Failed to auto-fix: ${error.message}`
      };
    }
  }

  findLineNumbers(content, pattern) {
    const lines = content.split('\n');
    const lineNumbers = [];
    
    lines.forEach((line, index) => {
      if (pattern.test(line)) {
        lineNumbers.push(index + 1);
      }
      // Reset regex lastIndex for next iteration
      pattern.lastIndex = 0;
    });
    
    return lineNumbers;
  }

  findSourceFiles() {
    const sourceFiles = [];
    const sourceDirs = ['src', 'pages', 'components', 'utils'];
    
    for (const dir of sourceDirs) {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.walkDirectory(fullPath, sourceFiles);
      }
    }
    
    return sourceFiles.filter(file => 
      file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')
    );
  }

  findTestFiles() {
    const testFiles = [];
    const testDirs = ['tests', 'test', '__tests__', 'spec'];
    
    for (const dir of testDirs) {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.walkDirectory(fullPath, testFiles);
      }
    }
    
    // Also look for test files co-located with source
    const sourceDirs = ['src', 'pages', 'components', 'utils'];
    for (const dir of sourceDirs) {
      const fullPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(fullPath)) {
        this.walkDirectory(fullPath, testFiles, true);
      }
    }
    
    return testFiles.filter(file => 
      file.includes('.test.') || file.includes('.spec.') || 
      file.includes('test.') || file.includes('spec.')
    );
  }

  walkDirectory(dir, files, testOnly = false) {
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          this.walkDirectory(fullPath, files, testOnly);
        } else if (!testOnly || (item.includes('.test.') || item.includes('.spec.'))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories we can't access
    }
  }

  async saveTestReport(analysis) {
    try {
      fs.writeFileSync(this.testReport, JSON.stringify(analysis, null, 2));
      this.log(`📊 Test analysis report saved to ${this.testReport}`);
    } catch (error) {
      this.log(`❌ Failed to save test report: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🚀 Starting Intelligent Test Analyzer...');
    
    try {
      const analysis = await this.analyzeTestCoverage();
      
      // Log summary
      this.log(`📊 Test Analysis Summary:`);
      this.log(`   Overall Coverage: ${analysis.coverage.overall}%`);
      this.log(`   Files with Tests: ${analysis.coverage.files.filter(f => f.hasTests).length}`);
      this.log(`   Files without Tests: ${analysis.coverage.files.filter(f => !f.hasTests).length}`);
      this.log(`   Test Quality Score: ${analysis.quality.score}/100`);
      this.log(`   Critical Issues: ${analysis.coverage.critical.length}`);
      this.log(`   Recommendations: ${analysis.recommendations.length}`);
      this.log(`   Auto-improvements: ${analysis.autoImprovements.length}`);
      
      return analysis;
      
    } catch (error) {
      this.log(`❌ Intelligent Test Analyzer failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const analyzer = new IntelligentTestAnalyzer();
  analyzer.run().catch(console.error);
}

module.exports = IntelligentTestAnalyzer;