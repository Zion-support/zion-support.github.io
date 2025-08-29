#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🤖 Starting AI-Powered Code Quality Analyzer...');

class AICodeQualityAnalyzer {
  constructor() {
    this.analysisResults = new Map();
    this.codeMetrics = new Map();
    this.qualityTrends = [];
    this.reportDir = path.join(process.cwd(), 'code-quality-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    
    // Initialize quality thresholds
    this.qualityThresholds = {
      complexity: { warning: 10, critical: 20 },
      maintainability: { warning: 50, critical: 30 },
      testCoverage: { warning: 70, critical: 50 },
      duplication: { warning: 15, critical: 30 },
      technicalDebt: { warning: 100, critical: 200 }
    };
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async analyzeCodeQuality() {
    console.log('🔍 Starting comprehensive code quality analysis...');
    
    try {
      // Analyze different aspects of code quality
      await this.analyzeCodeComplexity();
      await this.analyzeMaintainability();
      await this.analyzeTestCoverage();
      await this.analyzeCodeDuplication();
      await this.analyzeTechnicalDebt();
      await this.analyzeCodeStandards();
      await this.analyzePerformancePatterns();
      
      // Generate comprehensive quality report
      this.generateQualityReport();
      
      // Update quality trends
      this.updateQualityTrends();
      
      console.log('✅ Code quality analysis completed');
      
    } catch (error) {
      console.error('❌ Code quality analysis failed:', error.message);
    }
  }

  async analyzeCodeComplexity() {
    console.log('🧮 Analyzing code complexity...');
    
    try {
      // Use ESLint to analyze complexity
      const complexityOutput = execSync('npm run lint -- --format=json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lintResults = JSON.parse(complexityOutput);
      const complexityIssues = [];
      
      lintResults.forEach(file => {
        file.messages.forEach(message => {
          if (message.ruleId === 'complexity' || message.ruleId === 'max-depth') {
            complexityIssues.push({
              file: file.filePath,
              line: message.line,
              message: message.message,
              severity: message.severity,
              complexity: this.extractComplexityValue(message.message)
            });
          }
        });
      });
      
      this.analysisResults.set('complexity', {
        issues: complexityIssues,
        score: this.calculateComplexityScore(complexityIssues),
        recommendations: this.generateComplexityRecommendations(complexityIssues)
      });
      
    } catch (error) {
      console.log('⚠️  Complexity analysis failed:', error.message);
      this.analysisResults.set('complexity', { issues: [], score: 0, recommendations: [] });
    }
  }

  extractComplexityValue(message) {
    const match = message.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  }

  calculateComplexityScore(issues) {
    if (issues.length === 0) return 100;
    
    const totalComplexity = issues.reduce((sum, issue) => sum + issue.complexity, 0);
    const avgComplexity = totalComplexity / issues.length;
    
    // Score based on average complexity (lower is better)
    if (avgComplexity <= 5) return 100;
    if (avgComplexity <= 10) return 80;
    if (avgComplexity <= 15) return 60;
    if (avgComplexity <= 20) return 40;
    return 20;
  }

  generateComplexityRecommendations(issues) {
    const recommendations = [];
    
    if (issues.length === 0) {
      recommendations.push('Code complexity is well-managed');
      return recommendations;
    }
    
    const highComplexityIssues = issues.filter(issue => issue.complexity > 15);
    if (highComplexityIssues.length > 0) {
      recommendations.push(`Refactor ${highComplexityIssues.length} high-complexity functions`);
      recommendations.push('Break down complex functions into smaller, focused functions');
      recommendations.push('Extract complex logic into separate utility functions');
    }
    
    if (issues.some(issue => issue.complexity > 20)) {
      recommendations.push('Consider using design patterns to reduce complexity');
      recommendations.push('Implement strategy pattern for complex conditional logic');
    }
    
    return recommendations;
  }

  async analyzeMaintainability() {
    console.log('🔧 Analyzing code maintainability...');
    
    try {
      // Analyze file sizes, function lengths, and code organization
      const maintainabilityIssues = [];
      const srcPath = path.join(process.cwd(), 'src');
      
      if (fs.existsSync(srcPath)) {
        this.analyzeDirectoryMaintainability(srcPath, maintainabilityIssues);
      }
      
      this.analysisResults.set('maintainability', {
        issues: maintainabilityIssues,
        score: this.calculateMaintainabilityScore(mainabilityIssues),
        recommendations: this.generateMaintainabilityRecommendations(mainabilityIssues)
      });
      
    } catch (error) {
      console.log('⚠️  Maintainability analysis failed:', error.message);
      this.analysisResults.set('maintainability', { issues: [], score: 0, recommendations: [] });
    }
  }

  analyzeDirectoryMaintainability(dirPath, issues, depth = 0) {
    if (depth > 5) return; // Prevent infinite recursion
    
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.analyzeDirectoryMaintainability(fullPath, issues, depth + 1);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {
        this.analyzeFileMaintainability(fullPath, issues);
      }
    });
  }

  analyzeFileMaintainability(filePath, issues) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      // Check file size
      if (lines.length > 500) {
        issues.push({
          file: filePath,
          type: 'large-file',
          severity: 'warning',
          message: `File has ${lines.length} lines (consider splitting)`
        });
      }
      
      // Check for long functions
      const functionLines = this.findLongFunctions(content);
      functionLines.forEach(func => {
        issues.push({
          file: filePath,
          type: 'long-function',
          severity: 'warning',
          line: func.line,
          message: `Function '${func.name}' has ${func.length} lines (consider refactoring)`
        });
      });
      
      // Check for deep nesting
      const maxDepth = this.calculateNestingDepth(content);
      if (maxDepth > 5) {
        issues.push({
          file: filePath,
          type: 'deep-nesting',
          severity: 'warning',
          message: `Maximum nesting depth is ${maxDepth} (consider flattening)`
        });
      }
      
    } catch (error) {
      console.log(`⚠️  Could not analyze ${filePath}:`, error.message);
    }
  }

  findLongFunctions(content) {
    const functions = [];
    const lines = content.split('\n');
    let inFunction = false;
    let functionStart = 0;
    let functionName = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.match(/function\s+(\w+)/) || line.match(/(\w+)\s*[:=]\s*\(/)) {
        if (inFunction) {
          // End previous function
          functions.push({
            name: functionName,
            line: functionStart + 1,
            length: i - functionStart
          });
        }
        
        inFunction = true;
        functionStart = i;
        functionName = line.match(/function\s+(\w+)/)?.[1] || line.match(/(\w+)\s*[:=]\s*\(/)?.[1] || 'anonymous';
      } else if (line.match(/^\s*}\s*$/) && inFunction) {
        // End function
        functions.push({
          name: functionName,
          line: functionStart + 1,
          length: i - functionStart + 1
        });
        inFunction = false;
      }
    }
    
    return functions.filter(f => f.length > 50); // Functions longer than 50 lines
  }

  calculateNestingDepth(content) {
    let maxDepth = 0;
    let currentDepth = 0;
    
    for (const char of content) {
      if (char === '{') {
        currentDepth++;
        maxDepth = Math.max(maxDepth, currentDepth);
      } else if (char === '}') {
        currentDepth--;
      }
    }
    
    return maxDepth;
  }

  calculateMaintainabilityScore(issues) {
    if (issues.length === 0) return 100;
    
    const criticalIssues = issues.filter(issue => issue.severity === 'critical').length;
    const warningIssues = issues.filter(issue => issue.severity === 'warning').length;
    
    // Score based on issue severity and count
    let score = 100;
    score -= criticalIssues * 20;
    score -= warningIssues * 5;
    
    return Math.max(0, score);
  }

  generateMaintainabilityRecommendations(issues) {
    const recommendations = [];
    
    if (issues.length === 0) {
      recommendations.push('Code maintainability is excellent');
      return recommendations;
    }
    
    const largeFiles = issues.filter(issue => issue.type === 'large-file');
    if (largeFiles.length > 0) {
      recommendations.push(`Split ${largeFiles.length} large files into smaller modules`);
    }
    
    const longFunctions = issues.filter(issue => issue.type === 'long-function');
    if (longFunctions.length > 0) {
      recommendations.push(`Refactor ${longFunctions.length} long functions`);
      recommendations.push('Extract complex logic into separate functions');
    }
    
    const deepNesting = issues.filter(issue => issue.type === 'deep-nesting');
    if (deepNesting.length > 0) {
      recommendations.push('Flatten deeply nested code structures');
      recommendations.push('Use early returns to reduce nesting');
    }
    
    return recommendations;
  }

  async analyzeTestCoverage() {
    console.log('🧪 Analyzing test coverage...');
    
    try {
      // Run tests and analyze coverage
      const testOutput = execSync('npm test -- --coverage --watchAll=false', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      // Parse coverage information
      const coverageMatch = testOutput.match(/All files\s+\|\s+(\d+\.\d+)%/);
      const coverage = coverageMatch ? parseFloat(coverageMatch[1]) : 0;
      
      this.analysisResults.set('testCoverage', {
        coverage: coverage,
        score: this.calculateCoverageScore(coverage),
        recommendations: this.generateCoverageRecommendations(coverage)
      });
      
    } catch (error) {
      console.log('⚠️  Test coverage analysis failed:', error.message);
      this.analysisResults.set('testCoverage', { coverage: 0, score: 0, recommendations: ['Run tests to get coverage data'] });
    }
  }

  calculateCoverageScore(coverage) {
    if (coverage >= 90) return 100;
    if (coverage >= 80) return 80;
    if (coverage >= 70) return 60;
    if (coverage >= 50) return 40;
    return 20;
  }

  generateCoverageRecommendations(coverage) {
    const recommendations = [];
    
    if (coverage >= 90) {
      recommendations.push('Excellent test coverage maintained');
    } else if (coverage >= 80) {
      recommendations.push('Good test coverage, aim for 90%+');
    } else if (coverage >= 70) {
      recommendations.push('Moderate test coverage, add more tests');
      recommendations.push('Focus on critical business logic');
    } else {
      recommendations.push('Low test coverage, prioritize test development');
      recommendations.push('Start with unit tests for core functionality');
      recommendations.push('Consider implementing TDD practices');
    }
    
    return recommendations;
  }

  async analyzeCodeDuplication() {
    console.log('🔄 Analyzing code duplication...');
    
    try {
      // Simple duplication detection based on similar code patterns
      const duplicationIssues = [];
      const srcPath = path.join(process.cwd(), 'src');
      
      if (fs.existsSync(srcPath)) {
        this.detectCodeDuplication(srcPath, duplicationIssues);
      }
      
      this.analysisResults.set('duplication', {
        issues: duplicationIssues,
        score: this.calculateDuplicationScore(duplicationIssues),
        recommendations: this.generateDuplicationRecommendations(duplicationIssues)
      });
      
    } catch (error) {
      console.log('⚠️  Duplication analysis failed:', error.message);
      this.analysisResults.set('duplication', { issues: [], score: 0, recommendations: [] });
    }
  }

  detectCodeDuplication(dirPath, issues) {
    const codeBlocks = new Map();
    
    const walkDir = (currentPath) => {
      const items = fs.readdirSync(currentPath);
      
      items.forEach(item => {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {
          this.extractCodeBlocks(fullPath, codeBlocks);
        }
      });
    };
    
    walkDir(dirPath);
    
    // Find similar code blocks
    const blockArray = Array.from(codeBlocks.entries());
    for (let i = 0; i < blockArray.length; i++) {
      for (let j = i + 1; j < blockArray.length; j++) {
        const [block1, locations1] = blockArray[i];
        const [block2, locations2] = blockArray[j];
        
        if (this.calculateSimilarity(block1, block2) > 0.8) { // 80% similarity
          issues.push({
            type: 'duplicated-code',
            severity: 'warning',
            message: `Similar code found in ${locations1.length + locations2.length} locations`,
            locations: [...locations1, ...locations2]
          });
        }
      }
    }
  }

  extractCodeBlocks(filePath, codeBlocks) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      // Extract function bodies and other code blocks
      for (let i = 0; i < lines.length - 3; i++) {
        const block = lines.slice(i, i + 4).join('\n').trim();
        if (block.length > 20) { // Only consider meaningful blocks
          const hash = this.hashCode(block);
          if (!codeBlocks.has(hash)) {
            codeBlocks.set(hash, []);
          }
          codeBlocks.get(hash).push({ file: filePath, line: i + 1 });
        }
      }
    } catch (error) {
      console.log(`⚠️  Could not extract code blocks from ${filePath}:`, error.message);
    }
  }

  hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash;
  }

  calculateSimilarity(str1, str2) {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = this.levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  }

  levenshteinDistance(str1, str2) {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
    
    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
    
    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + indicator
        );
      }
    }
    
    return matrix[str2.length][str1.length];
  }

  calculateDuplicationScore(issues) {
    if (issues.length === 0) return 100;
    
    const totalDuplications = issues.length;
    if (totalDuplications <= 5) return 80;
    if (totalDuplications <= 10) return 60;
    if (totalDuplications <= 20) return 40;
    return 20;
  }

  generateDuplicationRecommendations(issues) {
    const recommendations = [];
    
    if (issues.length === 0) {
      recommendations.push('No significant code duplication detected');
      return recommendations;
    }
    
    recommendations.push(`Refactor ${issues.length} duplicated code blocks`);
    recommendations.push('Extract common functionality into utility functions');
    recommendations.push('Use composition over duplication');
    recommendations.push('Consider creating shared components or hooks');
    
    return recommendations;
  }

  async analyzeTechnicalDebt() {
    console.log('💳 Analyzing technical debt...');
    
    try {
      // Analyze various technical debt indicators
      const debtIssues = [];
      
      // Check for TODO comments
      const todoIssues = this.findTODOs();
      debtIssues.push(...todoIssues);
      
      // Check for deprecated patterns
      const deprecatedIssues = this.findDeprecatedPatterns();
      debtIssues.push(...deprecatedIssues);
      
      // Check for hardcoded values
      const hardcodedIssues = this.findHardcodedValues();
      debtIssues.push(...hardcodedIssues);
      
      this.analysisResults.set('technicalDebt', {
        issues: debtIssues,
        score: this.calculateTechnicalDebtScore(debtIssues),
        recommendations: this.generateTechnicalDebtRecommendations(debtIssues)
      });
      
    } catch (error) {
      console.log('⚠️  Technical debt analysis failed:', error.message);
      this.analysisResults.set('technicalDebt', { issues: [], score: 0, recommendations: [] });
    }
  }

  findTODOs() {
    const issues = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (!fs.existsSync(srcPath)) return issues;
    
    const walkDir = (currentPath) => {
      const items = fs.readdirSync(currentPath);
      
      items.forEach(item => {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            const lines = content.split('\n');
            
            lines.forEach((line, index) => {
              if (line.includes('TODO') || line.includes('FIXME') || line.includes('HACK')) {
                issues.push({
                  file: fullPath,
                  line: index + 1,
                  type: 'todo-comment',
                  severity: 'warning',
                  message: line.trim()
                });
              }
            });
          } catch (error) {
            console.log(`⚠️  Could not analyze ${fullPath}:`, error.message);
          }
        }
      });
    };
    
    walkDir(srcPath);
    return issues;
  }

  findDeprecatedPatterns() {
    const issues = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (!fs.existsSync(srcPath)) return issues;
    
    const deprecatedPatterns = [
      { pattern: /componentWillMount|componentWillReceiveProps|componentWillUpdate/, message: 'Deprecated React lifecycle method' },
      { pattern: /React\.createClass/, message: 'Deprecated React.createClass usage' },
      { pattern: /\.bind\(this\)/, message: 'Consider using arrow functions instead of .bind()' },
      { pattern: /var\s+/, message: 'Consider using const/let instead of var' }
    ];
    
    const walkDir = (currentPath) => {
      const items = fs.readdirSync(currentPath);
      
      items.forEach(item => {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            const lines = content.split('\n');
            
            lines.forEach((line, index) => {
              deprecatedPatterns.forEach(pattern => {
                if (pattern.pattern.test(line)) {
                  issues.push({
                    file: fullPath,
                    line: index + 1,
                    type: 'deprecated-pattern',
                    severity: 'warning',
                    message: pattern.message
                  });
                }
              });
            });
          } catch (error) {
            console.log(`⚠️  Could not analyze ${fullPath}:`, error.message);
          }
        }
      });
    };
    
    walkDir(srcPath);
    return issues;
  }

  findHardcodedValues() {
    const issues = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (!fs.existsSync(srcPath)) return issues;
    
    const hardcodedPatterns = [
      { pattern: /['"`]\d{4,}['"`]/, message: 'Hardcoded large number' },
      { pattern: /['"`]https?:\/\/[^'"]+['"`]/, message: 'Hardcoded URL' },
      { pattern: /['"`][A-Z]{2,}['"`]/, message: 'Potential hardcoded string constant' }
    ];
    
    const walkDir = (currentPath) => {
      const items = fs.readdirSync(currentPath);
      
      items.forEach(item => {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            const lines = content.split('\n');
            
            lines.forEach((line, index) => {
              hardcodedPatterns.forEach(pattern => {
                if (pattern.pattern.test(line)) {
                  issues.push({
                    file: fullPath,
                    line: index + 1,
                    type: 'hardcoded-value',
                    severity: 'info',
                    message: pattern.message
                  });
                }
              });
            });
          } catch (error) {
            console.log(`⚠️  Could not analyze ${fullPath}:`, error.message);
          }
        }
      });
    };
    
    walkDir(srcPath);
    return issues;
  }

  calculateTechnicalDebtScore(issues) {
    if (issues.length === 0) return 100;
    
    const criticalIssues = issues.filter(issue => issue.severity === 'critical').length;
    const warningIssues = issues.filter(issue => issue.severity === 'warning').length;
    const infoIssues = issues.filter(issue => issue.severity === 'info').length;
    
    let score = 100;
    score -= criticalIssues * 15;
    score -= warningIssues * 8;
    score -= infoIssues * 3;
    
    return Math.max(0, score);
  }

  generateTechnicalDebtRecommendations(issues) {
    const recommendations = [];
    
    if (issues.length === 0) {
      recommendations.push('No significant technical debt detected');
      return recommendations;
    }
    
    const todos = issues.filter(issue => issue.type === 'todo-comment');
    if (todos.length > 0) {
      recommendations.push(`Address ${todos.length} TODO/FIXME comments`);
    }
    
    const deprecated = issues.filter(issue => issue.type === 'deprecated-pattern');
    if (deprecated.length > 0) {
      recommendations.push(`Update ${deprecated.length} deprecated patterns`);
      recommendations.push('Follow current best practices and patterns');
    }
    
    const hardcoded = issues.filter(issue => issue.type === 'hardcoded-value');
    if (hardcoded.length > 0) {
      recommendations.push(`Extract ${hardcoded.length} hardcoded values to configuration`);
    }
    
    recommendations.push('Create technical debt reduction plan');
    recommendations.push('Prioritize debt reduction based on business impact');
    
    return recommendations;
  }

  async analyzeCodeStandards() {
    console.log('📋 Analyzing code standards compliance...');
    
    try {
      // Run ESLint for code standards
      const lintOutput = execSync('npm run lint -- --format=json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const lintResults = JSON.parse(lintOutput);
      const standardIssues = [];
      
      lintResults.forEach(file => {
        file.messages.forEach(message => {
          standardIssues.push({
            file: file.filePath,
            line: message.line,
            column: message.column,
            rule: message.ruleId,
            message: message.message,
            severity: message.severity === 2 ? 'error' : 'warning'
          });
        });
      });
      
      this.analysisResults.set('codeStandards', {
        issues: standardIssues,
        score: this.calculateStandardsScore(standardIssues),
        recommendations: this.generateStandardsRecommendations(standardIssues)
      });
      
    } catch (error) {
      console.log('⚠️  Code standards analysis failed:', error.message);
      this.analysisResults.set('codeStandards', { issues: [], score: 0, recommendations: [] });
    }
  }

  calculateStandardsScore(issues) {
    if (issues.length === 0) return 100;
    
    const errors = issues.filter(issue => issue.severity === 'error').length;
    const warnings = issues.filter(issue => issue.severity === 'warning').length;
    
    let score = 100;
    score -= errors * 20;
    score -= warnings * 5;
    
    return Math.max(0, score);
  }

  generateStandardsRecommendations(issues) {
    const recommendations = [];
    
    if (issues.length === 0) {
      recommendations.push('Code standards compliance is excellent');
      return recommendations;
    }
    
    const errors = issues.filter(issue => issue.severity === 'error');
    if (errors.length > 0) {
      recommendations.push(`Fix ${errors.length} critical code standard violations`);
    }
    
    const warnings = issues.filter(issue => issue.severity === 'warning');
    if (warnings.length > 0) {
      recommendations.push(`Address ${warnings.length} code standard warnings`);
    }
    
    recommendations.push('Run ESLint before committing code');
    recommendations.push('Consider using pre-commit hooks');
    
    return recommendations;
  }

  async analyzePerformancePatterns() {
    console.log('⚡ Analyzing performance patterns...');
    
    try {
      // Analyze potential performance issues
      const performanceIssues = [];
      const srcPath = path.join(process.cwd(), 'src');
      
      if (fs.existsSync(srcPath)) {
        this.detectPerformanceIssues(srcPath, performanceIssues);
      }
      
      this.analysisResults.set('performance', {
        issues: performanceIssues,
        score: this.calculatePerformanceScore(performanceIssues),
        recommendations: this.generatePerformanceRecommendations(performanceIssues)
      });
      
    } catch (error) {
      console.log('⚠️  Performance analysis failed:', error.message);
      this.analysisResults.set('performance', { issues: [], score: 0, recommendations: [] });
    }
  }

  detectPerformanceIssues(dirPath, issues) {
    const walkDir = (currentPath) => {
      const items = fs.readdirSync(currentPath);
      
      items.forEach(item => {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            const lines = content.split('\n');
            
            lines.forEach((line, index) => {
              // Check for common performance anti-patterns
              if (line.includes('.map(') && line.includes('.filter(') && line.includes('.find(')) {
                issues.push({
                  file: fullPath,
                  line: index + 1,
                  type: 'chained-array-methods',
                  severity: 'warning',
                  message: 'Consider combining chained array methods for better performance'
                });
              }
              
              if (line.includes('useEffect') && line.includes('[]') && !line.includes('useCallback')) {
                issues.push({
                  file: fullPath,
                  line: index + 1,
                  type: 'missing-dependencies',
                  severity: 'warning',
                  message: 'Check useEffect dependencies to prevent unnecessary re-renders'
                });
              }
              
              if (line.includes('useState') && line.includes('useEffect') && line.includes('setState')) {
                issues.push({
                  file: fullPath,
                  line: index + 1,
                  type: 'potential-infinite-loop',
                  severity: 'warning',
                  message: 'Potential infinite loop in useEffect with state updates'
                });
              }
            });
          } catch (error) {
            console.log(`⚠️  Could not analyze ${fullPath}:`, error.message);
          }
        }
      });
    };
    
    walkDir(dirPath);
  }

  calculatePerformanceScore(issues) {
    if (issues.length === 0) return 100;
    
    const criticalIssues = issues.filter(issue => issue.severity === 'critical').length;
    const warningIssues = issues.filter(issue => issue.severity === 'warning').length;
    
    let score = 100;
    score -= criticalIssues * 25;
    score -= warningIssues * 10;
    
    return Math.max(0, score);
  }

  generatePerformanceRecommendations(issues) {
    const recommendations = [];
    
    if (issues.length === 0) {
      recommendations.push('No significant performance issues detected');
      return recommendations;
    }
    
    const chainedMethods = issues.filter(issue => issue.type === 'chained-array-methods');
    if (chainedMethods.length > 0) {
      recommendations.push(`Optimize ${chainedMethods.length} chained array method calls`);
      recommendations.push('Use single-pass algorithms when possible');
    }
    
    const missingDeps = issues.filter(issue => issue.type === 'missing-dependencies');
    if (missingDeps.length > 0) {
      recommendations.push(`Review ${missingDeps.length} useEffect dependency arrays`);
      recommendations.push('Use useCallback and useMemo for expensive computations');
    }
    
    const infiniteLoops = issues.filter(issue => issue.type === 'potential-infinite-loop');
    if (infiniteLoops.length > 0) {
      recommendations.push(`Fix ${infiniteLoops.length} potential infinite loops`);
      recommendations.push('Review state update logic in useEffect hooks');
    }
    
    recommendations.push('Implement React.memo for expensive components');
    recommendations.push('Use React DevTools Profiler to identify bottlenecks');
    
    return recommendations;
  }

  generateQualityReport() {
    console.log('📊 Generating comprehensive quality report...');
    
    const overallScore = this.calculateOverallQualityScore();
    const report = {
      timestamp: new Date().toISOString(),
      overallScore: overallScore,
      grade: this.getQualityGrade(overallScore),
      analysis: Object.fromEntries(this.analysisResults),
      summary: this.generateQualitySummary(),
      recommendations: this.generateOverallRecommendations(),
      status: 'completed'
    };
    
    const reportPath = path.join(this.reportDir, 'code-quality-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`✅ Quality report saved: ${reportPath}`);
    console.log(`📊 Overall Quality Score: ${overallScore}/100 (${report.grade})`);
  }

  calculateOverallQualityScore() {
    const scores = Array.from(this.analysisResults.values()).map(result => result.score);
    if (scores.length === 0) return 0;
    
    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  }

  getQualityGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  generateQualitySummary() {
    const summary = {
      totalIssues: 0,
      criticalIssues: 0,
      warningIssues: 0,
      infoIssues: 0,
      areas: {}
    };
    
    this.analysisResults.forEach((result, area) => {
      summary.areas[area] = {
        score: result.score,
        issues: result.issues.length,
        recommendations: result.recommendations.length
      };
      
      summary.totalIssues += result.issues.length;
      
      result.issues.forEach(issue => {
        if (issue.severity === 'critical') summary.criticalIssues++;
        else if (issue.severity === 'warning') summary.warningIssues++;
        else if (issue.severity === 'info') summary.infoIssues++;
      });
    });
    
    return summary;
  }

  generateOverallRecommendations() {
    const allRecommendations = [];
    
    this.analysisResults.forEach(result => {
      allRecommendations.push(...result.recommendations);
    });
    
    // Remove duplicates and prioritize
    const uniqueRecommendations = [...new Set(allRecommendations)];
    
    // Sort by priority (critical issues first)
    const criticalAreas = ['complexity', 'maintainability', 'testCoverage'];
    const sortedRecommendations = uniqueRecommendations.sort((a, b) => {
      const aPriority = criticalAreas.some(area => a.toLowerCase().includes(area)) ? 1 : 0;
      const bPriority = criticalAreas.some(area => b.toLowerCase().includes(area)) ? 1 : 0;
      return bPriority - aPriority;
    });
    
    return sortedRecommendations.slice(0, 10); // Top 10 recommendations
  }

  updateQualityTrends() {
    const currentTrend = {
      timestamp: new Date().toISOString(),
      overallScore: this.calculateOverallQualityScore(),
      analysis: Object.fromEntries(this.analysisResults)
    };
    
    this.qualityTrends.push(currentTrend);
    
    // Keep only last 30 days of trends
    if (this.qualityTrends.length > 30) {
      this.qualityTrends = this.qualityTrends.slice(-30);
    }
    
    // Save trends
    const trendsPath = path.join(this.reportDir, 'quality-trends.json');
    fs.writeFileSync(trendsPath, JSON.stringify(this.qualityTrends, null, 2));
  }

  startContinuousAnalysis() {
    console.log('🔄 Starting continuous code quality analysis...');
    
    // Run initial analysis
    this.analyzeCodeQuality();
    
    // Set up continuous analysis every 2 hours
    setInterval(() => {
      this.analyzeCodeQuality();
    }, 7200000); // 2 hours
  }
}

// Main execution
if (require.main === module) {
  const analyzer = new AICodeQualityAnalyzer();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down AI Code Quality Analyzer...');
    process.exit(0);
  });
  
  process.on('SIGTERM', () => {
    console.log('\n🛑 Shutting down AI Code Quality Analyzer...');
    process.exit(0);
  });
  
  // Start continuous analysis
  analyzer.startContinuousAnalysis();
}

module.exports = AICodeQualityAnalyzer;