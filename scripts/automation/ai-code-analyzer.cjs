#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🤖 Starting AI-Powered Code Analysis Automation...');

class AICodeAnalyzer {
  constructor() {
    this.analysisData = {
      codeMetrics: new Map(),
      qualityIssues: [],
      improvementSuggestions: [],
      performanceInsights: [],
      securityFindings: [],
      bestPractices: [],
      technicalDebt: []
    };
    this.reportDir = path.join(process.cwd(), 'ai-code-analysis-reports');
    this.ensureReportDirectory();
    this.loadAnalysisData();
    this.initializeAnalysisRules();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  loadAnalysisData() {
    const dataFile = path.join(this.reportDir, 'analysis-data.json');
    if (fs.existsSync(dataFile)) {
      try {
        const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
        this.analysisData = { ...this.analysisData, ...data };
        console.log('📚 Loaded existing analysis data');
      } catch (error) {
        console.log('⚠️ Could not load analysis data, starting fresh');
      }
    }
  }

  saveAnalysisData() {
    const dataFile = path.join(this.reportDir, 'analysis-data.json');
    fs.writeFileSync(dataFile, JSON.stringify(this.analysisData, null, 2));
  }

  initializeAnalysisRules() {
    // Code quality rules
    this.analysisRules = {
      complexity: {
        maxCyclomaticComplexity: 10,
        maxCognitiveComplexity: 15,
        maxFunctionLength: 50,
        maxFileLength: 500
      },
      performance: {
        maxNestedLoops: 3,
        maxDatabaseQueries: 5,
        maxMemoryUsage: '100MB',
        maxResponseTime: '2000ms'
      },
      security: {
        forbiddenPatterns: [
          'eval(',
          'innerHTML',
          'document.write',
          'setTimeout(string',
          'setInterval(string'
        ],
        requiredPatterns: [
          'input validation',
          'output encoding',
          'authentication check',
          'authorization check'
        ]
      },
      maintainability: {
        minTestCoverage: 80,
        maxDuplicateCode: 5,
        maxMagicNumbers: 3,
        requiredDocumentation: ['functions', 'classes', 'interfaces']
      }
    };
  }

  async runCodeAnalysis() {
    console.log('🔍 Running comprehensive code analysis...');
    
    try {
      await this.analyzeCodeStructure();
      await this.analyzeCodeQuality();
      await this.analyzePerformance();
      await this.analyzeSecurity();
      await this.analyzeMaintainability();
      await this.generateAIInsights();
      
      console.log('✅ Code analysis completed');
    } catch (error) {
      console.log('❌ Code analysis failed:', error.message);
    }
  }

  async analyzeCodeStructure() {
    console.log('🏗️ Analyzing code structure...');
    
    try {
      const srcPath = path.join(process.cwd(), 'src');
      if (!fs.existsSync(srcPath)) return;
      
      const structure = this.analyzeDirectoryStructure(srcPath);
      this.analysisData.codeMetrics.set('structure', structure);
      
      // Analyze file organization
      const organizationScore = this.calculateOrganizationScore(structure);
      this.analysisData.codeMetrics.set('organizationScore', organizationScore);
      
    } catch (error) {
      console.log('❌ Structure analysis failed:', error.message);
    }
  }

  analyzeDirectoryStructure(dirPath, depth = 0, maxDepth = 5) {
    if (depth > maxDepth) return null;
    
    const structure = {
      path: dirPath,
      name: path.basename(dirPath),
      type: 'directory',
      children: [],
      stats: {
        fileCount: 0,
        lineCount: 0,
        size: 0
      }
    };
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          const childStructure = this.analyzeDirectoryStructure(itemPath, depth + 1, maxDepth);
          if (childStructure) {
            structure.children.push(childStructure);
            structure.stats.fileCount += childStructure.stats.fileCount;
            structure.stats.lineCount += childStructure.stats.lineCount;
            structure.stats.size += childStructure.stats.size;
          }
        } else if (stat.isFile() && this.isCodeFile(item)) {
          const fileStats = this.analyzeCodeFile(itemPath);
          structure.children.push({
            path: itemPath,
            name: item,
            type: 'file',
            stats: fileStats
          });
          structure.stats.fileCount++;
          structure.stats.lineCount += fileStats.lineCount;
          structure.stats.size += fileStats.size;
        }
      }
    } catch (error) {
      console.log(`⚠️ Could not analyze directory ${dirPath}:`, error.message);
    }
    
    return structure;
  }

  isCodeFile(filename) {
    const codeExtensions = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte', '.py', '.java', '.cpp', '.c', '.go', '.rs'];
    return codeExtensions.some(ext => filename.endsWith(ext));
  }

  analyzeCodeFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      return {
        lineCount: lines.length,
        size: fs.statSync(filePath).size,
        complexity: this.calculateFileComplexity(content),
        imports: this.extractImports(content),
        functions: this.extractFunctions(content),
        classes: this.extractClasses(content)
      };
    } catch (error) {
      return { lineCount: 0, size: 0, complexity: 0, imports: [], functions: [], classes: [] };
    }
  }

  calculateFileComplexity(content) {
    let complexity = 1; // Base complexity
    
    // Count control flow statements
    const controlFlowPatterns = [
      /if\s*\(/g,
      /else\s*if\s*\(/g,
      /else\s*{/g,
      /for\s*\(/g,
      /while\s*\(/g,
      /switch\s*\(/g,
      /case\s+/g,
      /catch\s*\(/g,
      /\?\s*\w+\s*:/g, // Ternary operators
      /&&|\|\|/g // Logical operators
    ];
    
    controlFlowPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) complexity += matches.length;
    });
    
    return complexity;
  }

  extractImports(content) {
    const importPatterns = [
      /import\s+.*?from\s+['"]([^'"]+)['"]/g,
      /import\s+['"]([^'"]+)['"]/g,
      /require\s*\(\s*['"]([^'"]+)['"]\s*\)/g
    ];
    
    const imports = new Set();
    importPatterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        imports.add(match[1]);
      }
    });
    
    return Array.from(imports);
  }

  extractFunctions(content) {
    const functionPatterns = [
      /function\s+(\w+)\s*\(/g,
      /(\w+)\s*[:=]\s*(?:async\s*)?(?:function\s*)?\s*\(/g,
      /(\w+)\s*[:=]\s*(?:async\s*)?\s*\(/g
    ];
    
    const functions = new Set();
    functionPatterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        functions.add(match[1]);
      }
    });
    
    return Array.from(functions);
  }

  extractClasses(content) {
    const classPatterns = [
      /class\s+(\w+)/g,
      /export\s+class\s+(\w+)/g,
      /export\s+default\s+class\s+(\w+)/g
    ];
    
    const classes = new Set();
    classPatterns.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        classes.add(match[1]);
      }
    });
    
    return Array.from(classes);
  }

  calculateOrganizationScore(structure) {
    if (!structure) return 0;
    
    let score = 100;
    
    // Penalize deep nesting
    const maxDepth = this.getMaxDepth(structure);
    if (maxDepth > 4) score -= (maxDepth - 4) * 10;
    
    // Penalize too many files in single directory
    if (structure.stats.fileCount > 20) score -= 20;
    
    // Penalize very large files
    const largeFiles = this.countLargeFiles(structure);
    score -= largeFiles * 5;
    
    return Math.max(0, score);
  }

  getMaxDepth(structure, currentDepth = 0) {
    if (!structure || !structure.children) return currentDepth;
    
    let maxDepth = currentDepth;
    structure.children.forEach(child => {
      if (child.type === 'directory') {
        maxDepth = Math.max(maxDepth, this.getMaxDepth(child, currentDepth + 1));
      }
    });
    
    return maxDepth;
  }

  countLargeFiles(structure) {
    let count = 0;
    
    if (structure.type === 'file' && structure.stats.lineCount > 200) {
      count++;
    }
    
    if (structure.children) {
      structure.children.forEach(child => {
        count += this.countLargeFiles(child);
      });
    }
    
    return count;
  }

  async analyzeCodeQuality() {
    console.log('✨ Analyzing code quality...');
    
    try {
      // Run ESLint
      await this.runESLint();
      
      // Run TypeScript checks
      await this.runTypeScriptCheck();
      
      // Analyze code patterns
      this.analyzeCodePatterns();
      
    } catch (error) {
      console.log('❌ Quality analysis failed:', error.message);
    }
  }

  async runESLint() {
    try {
      console.log('🔍 Running ESLint...');
      const output = execSync('npm run lint --silent', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const issues = this.parseESLintOutput(output);
      this.analysisData.qualityIssues.push(...issues);
      
    } catch (error) {
      // ESLint found issues
      const output = error.stdout || error.stderr || '';
      const issues = this.parseESLintOutput(output);
      this.analysisData.qualityIssues.push(...issues);
    }
  }

  async runTypeScriptCheck() {
    try {
      console.log('🔍 Running TypeScript check...');
      const output = execSync('npm run type-check --silent', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const issues = this.parseTypeScriptOutput(output);
      this.analysisData.qualityIssues.push(...issues);
      
    } catch (error) {
      // TypeScript found issues
      const output = error.stdout || error.stderr || '';
      const issues = this.parseTypeScriptOutput(output);
      this.analysisData.qualityIssues.push(...issues);
    }
  }

  parseESLintOutput(output) {
    const issues = [];
    const lines = output.split('\n');
    
    lines.forEach(line => {
      if (line.includes('error') || line.includes('warning')) {
        const match = line.match(/(.+):(\d+):(\d+):\s*(.+)/);
        if (match) {
          issues.push({
            type: 'eslint',
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            severity: line.includes('error') ? 'error' : 'warning'
          });
        }
      }
    });
    
    return issues;
  }

  parseTypeScriptOutput(output) {
    const issues = [];
    const lines = output.split('\n');
    
    lines.forEach(line => {
      if (line.includes('error TS')) {
        const match = line.match(/(.+):(\d+):(\d+)\s*-\s*(.+)/);
        if (match) {
          issues.push({
            type: 'typescript',
            file: match[1],
            line: parseInt(match[2]),
            column: parseInt(match[3]),
            message: match[4],
            severity: 'error'
          });
        }
      }
    });
    
    return issues;
  }

  analyzeCodePatterns() {
    console.log('🔍 Analyzing code patterns...');
    
    // Analyze for common anti-patterns
    const antiPatterns = this.findAntiPatterns();
    this.analysisData.qualityIssues.push(...antiPatterns);
    
    // Analyze for best practices
    const bestPractices = this.findBestPractices();
    this.analysisData.bestPractices.push(...bestPractices);
  }

  findAntiPatterns() {
    const antiPatterns = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (!fs.existsSync(srcPath)) return antiPatterns;
    
    this.scanDirectoryForPatterns(srcPath, antiPatterns, 'anti-pattern');
    return antiPatterns;
  }

  findBestPractices() {
    const bestPractices = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (!fs.existsSync(srcPath)) return bestPractices;
    
    this.scanDirectoryForPatterns(srcPath, bestPractices, 'best-practice');
    return bestPractices;
  }

  scanDirectoryForPatterns(dirPath, patterns, patternType) {
    try {
      const items = fs.readdirSync(dirPath);
      
      items.forEach(item => {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          this.scanDirectoryForPatterns(itemPath, patterns, patternType);
        } else if (stat.isFile() && this.isCodeFile(item)) {
          this.scanFileForPatterns(itemPath, patterns, patternType);
        }
      });
    } catch (error) {
      // Ignore directory access errors
    }
  }

  scanFileForPatterns(filePath, patterns, patternType) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      if (patternType === 'anti-pattern') {
        // Check for anti-patterns
        this.analysisRules.security.forbiddenPatterns.forEach(pattern => {
          if (content.includes(pattern)) {
            patterns.push({
              type: 'security-anti-pattern',
              file: filePath,
              pattern,
              message: `Found forbidden pattern: ${pattern}`,
              severity: 'high'
            });
          }
        });
        
        // Check for complex functions
        const functions = this.extractFunctions(content);
        functions.forEach(funcName => {
          const funcContent = this.extractFunctionContent(content, funcName);
          const complexity = this.calculateFunctionComplexity(funcContent);
          
          if (complexity > this.analysisRules.complexity.maxCyclomaticComplexity) {
            patterns.push({
              type: 'complexity-anti-pattern',
              file: filePath,
              function: funcName,
              complexity,
              message: `Function ${funcName} has high cyclomatic complexity: ${complexity}`,
              severity: 'medium'
            });
          }
        });
      } else if (patternType === 'best-practice') {
        // Check for best practices
        this.analysisRules.security.requiredPatterns.forEach(pattern => {
          if (content.toLowerCase().includes(pattern.toLowerCase())) {
            patterns.push({
              type: 'security-best-practice',
              file: filePath,
              pattern,
              message: `Good practice: ${pattern} found`,
              severity: 'info'
            });
          }
        });
      }
    } catch (error) {
      // Ignore file reading errors
    }
  }

  extractFunctionContent(content, funcName) {
    // Simple function extraction - could be improved with AST parsing
    const funcRegex = new RegExp(`(?:function\\s+${funcName}|${funcName}\\s*[:=]\\s*(?:async\\s*)?(?:function\\s*)?\\s*\\()[^}]*}`, 'g');
    const match = content.match(funcRegex);
    return match ? match[0] : '';
  }

  calculateFunctionComplexity(funcContent) {
    if (!funcContent) return 1;
    
    let complexity = 1;
    const controlFlowPatterns = [
      /if\s*\(/g,
      /else\s*if\s*\(/g,
      /for\s*\(/g,
      /while\s*\(/g,
      /switch\s*\(/g,
      /case\s+/g,
      /catch\s*\(/g,
      /\?\s*\w+\s*:/g,
      /&&|\|\|/g
    ];
    
    controlFlowPatterns.forEach(pattern => {
      const matches = funcContent.match(pattern);
      if (matches) complexity += matches.length;
    });
    
    return complexity;
  }

  async analyzePerformance() {
    console.log('⚡ Analyzing performance...');
    
    try {
      // Analyze build performance
      await this.analyzeBuildPerformance();
      
      // Analyze runtime performance patterns
      this.analyzeRuntimePerformance();
      
    } catch (error) {
      console.log('❌ Performance analysis failed:', error.message);
    }
  }

  async analyzeBuildPerformance() {
    try {
      console.log('🏗️ Analyzing build performance...');
      
      const startTime = Date.now();
      execSync('npm run build --silent', { stdio: 'pipe' });
      const buildTime = Date.now() - startTime;
      
      this.analysisData.performanceInsights.push({
        type: 'build-performance',
        metric: 'build-time',
        value: buildTime,
        unit: 'ms',
        timestamp: Date.now(),
        status: buildTime < 60000 ? 'good' : buildTime < 120000 ? 'warning' : 'poor'
      });
      
    } catch (error) {
      this.analysisData.performanceInsights.push({
        type: 'build-performance',
        metric: 'build-time',
        value: -1,
        unit: 'ms',
        timestamp: Date.now(),
        status: 'failed',
        error: error.message
      });
    }
  }

  analyzeRuntimePerformance() {
    // Analyze for performance anti-patterns
    const performanceIssues = this.findPerformanceIssues();
    this.analysisData.performanceInsights.push(...performanceIssues);
  }

  findPerformanceIssues() {
    const issues = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (!fs.existsSync(srcPath)) return issues;
    
    this.scanDirectoryForPerformancePatterns(srcPath, issues);
    return issues;
  }

  scanDirectoryForPerformancePatterns(dirPath, issues) {
    try {
      const items = fs.readdirSync(dirPath);
      
      items.forEach(item => {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          this.scanDirectoryForPerformancePatterns(itemPath, issues);
        } else if (stat.isFile() && this.isCodeFile(item)) {
          this.scanFileForPerformancePatterns(itemPath, issues);
        }
      });
    } catch (error) {
      // Ignore directory access errors
    }
  }

  scanFileForPerformancePatterns(filePath, issues) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for nested loops
      const nestedLoopPatterns = [
        /for\s*\([^)]*\)\s*{[^}]*for\s*\([^)]*\)/g,
        /while\s*\([^)]*\)\s*{[^}]*while\s*\([^)]*\)/g
      ];
      
      nestedLoopPatterns.forEach(pattern => {
        const matches = content.match(pattern);
        if (matches) {
          issues.push({
            type: 'performance-issue',
            file: filePath,
            pattern: 'nested-loops',
            message: 'Found nested loops which can cause performance issues',
            severity: 'medium'
          });
        }
      });
      
      // Check for expensive operations
      const expensivePatterns = [
        /\.map\([^)]*\)\.filter\([^)]*\)\.reduce\([^)]*\)/g,
        /JSON\.parse\([^)]*\)/g,
        /JSON\.stringify\([^)]*\)/g
      ];
      
      expensivePatterns.forEach(pattern => {
        const matches = content.match(pattern);
        if (matches) {
          issues.push({
            type: 'performance-issue',
            file: filePath,
            pattern: 'expensive-operation',
            message: 'Found potentially expensive operation',
            severity: 'low'
          });
        }
      });
      
    } catch (error) {
      // Ignore file reading errors
    }
  }

  async analyzeSecurity() {
    console.log('🔒 Analyzing security...');
    
    try {
      // Run security audit
      await this.runSecurityAudit();
      
      // Analyze code for security vulnerabilities
      this.analyzeCodeSecurity();
      
    } catch (error) {
      console.log('❌ Security analysis failed:', error.message);
    }
  }

  async runSecurityAudit() {
    try {
      console.log('🔍 Running security audit...');
      const output = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(output);
      const vulnerabilities = auditData.vulnerabilities || {};
      
      Object.values(vulnerabilities).forEach(vuln => {
        this.analysisData.securityFindings.push({
          type: 'dependency-vulnerability',
          package: vuln.name,
          severity: vuln.severity,
          title: vuln.title,
          description: vuln.description,
          recommendation: vuln.recommendation,
          timestamp: Date.now()
        });
      });
      
    } catch (error) {
      // Audit found vulnerabilities
      try {
        const output = error.stdout || error.stderr || '';
        const auditData = JSON.parse(output);
        const vulnerabilities = auditData.vulnerabilities || {};
        
        Object.values(vulnerabilities).forEach(vuln => {
          this.analysisData.securityFindings.push({
            type: 'dependency-vulnerability',
            package: vuln.name,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation,
            timestamp: Date.now()
          });
        });
      } catch (parseError) {
        console.log('⚠️ Could not parse security audit output');
      }
    }
  }

  analyzeCodeSecurity() {
    // Additional security analysis based on code patterns
    const securityIssues = this.findSecurityIssues();
    this.analysisData.securityFindings.push(...securityIssues);
  }

  findSecurityIssues() {
    const issues = [];
    const srcPath = path.join(process.cwd(), 'src');
    
    if (!fs.existsSync(srcPath)) return issues;
    
    this.scanDirectoryForSecurityPatterns(srcPath, issues);
    return issues;
  }

  scanDirectoryForSecurityPatterns(dirPath, issues) {
    try {
      const items = fs.readdirSync(dirPath);
      
      items.forEach(item => {
        const itemPath = path.join(dirPath, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          this.scanDirectoryForSecurityPatterns(itemPath, issues);
        } else if (stat.isFile() && this.isCodeFile(item)) {
          this.scanFileForSecurityPatterns(itemPath, issues);
        }
      });
    } catch (error) {
      // Ignore directory access errors
    }
  }

  scanFileForSecurityPatterns(filePath, issues) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for SQL injection patterns
      if (content.includes('query(') && content.includes('${') && content.includes('`')) {
        issues.push({
          type: 'security-vulnerability',
          file: filePath,
          pattern: 'sql-injection-risk',
          message: 'Potential SQL injection risk with template literals in queries',
          severity: 'high'
        });
      }
      
      // Check for XSS patterns
      if (content.includes('innerHTML') || content.includes('document.write')) {
        issues.push({
          type: 'security-vulnerability',
          file: filePath,
          pattern: 'xss-risk',
          message: 'Potential XSS vulnerability with innerHTML or document.write',
          severity: 'high'
        });
      }
      
      // Check for hardcoded secrets
      const secretPatterns = [
        /password\s*[:=]\s*['"][^'"]+['"]/gi,
        /api_key\s*[:=]\s*['"][^'"]+['"]/gi,
        /secret\s*[:=]\s*['"][^'"]+['"]/gi
      ];
      
      secretPatterns.forEach(pattern => {
        const matches = content.match(pattern);
        if (matches) {
          issues.push({
            type: 'security-vulnerability',
            file: filePath,
            pattern: 'hardcoded-secret',
            message: 'Potential hardcoded secret or credential',
            severity: 'medium'
          });
        }
      });
      
    } catch (error) {
      // Ignore file reading errors
    }
  }

  async analyzeMaintainability() {
    console.log('🔧 Analyzing maintainability...');
    
    try {
      // Analyze test coverage
      await this.analyzeTestCoverage();
      
      // Analyze technical debt
      this.analyzeTechnicalDebt();
      
    } catch (error) {
      console.log('❌ Maintainability analysis failed:', error.message);
    }
  }

  async analyzeTestCoverage() {
    try {
      console.log('🧪 Analyzing test coverage...');
      
      // Check if test coverage is available
      const hasCoverage = fs.existsSync(path.join(process.cwd(), 'coverage'));
      
      if (hasCoverage) {
        const coveragePath = path.join(process.cwd(), 'coverage', 'coverage-summary.json');
        if (fs.existsSync(coveragePath)) {
          const coverageData = JSON.parse(fs.readFileSync(coveragePath, 'utf8'));
          
          Object.entries(coverageData.total).forEach(([metric, value]) => {
            this.analysisData.codeMetrics.set(`coverage-${metric}`, value);
          });
        }
      }
      
      // Run tests to get current status
      try {
        execSync('npm test --silent', { stdio: 'pipe' });
        this.analysisData.codeMetrics.set('test-status', 'passing');
      } catch (error) {
        this.analysisData.codeMetrics.set('test-status', 'failing');
      }
      
    } catch (error) {
      console.log('⚠️ Test coverage analysis failed:', error.message);
    }
  }

  analyzeTechnicalDebt() {
    // Calculate technical debt based on various metrics
    let technicalDebt = 0;
    
    // Add debt for quality issues
    technicalDebt += this.analysisData.qualityIssues.length * 10;
    
    // Add debt for security issues
    this.analysisData.securityFindings.forEach(issue => {
      if (issue.severity === 'high') technicalDebt += 50;
      else if (issue.severity === 'medium') technicalDebt += 25;
      else technicalDebt += 10;
    });
    
    // Add debt for performance issues
    technicalDebt += this.analysisData.performanceInsights.length * 15;
    
    this.analysisData.technicalDebt.push({
      timestamp: Date.now(),
      score: technicalDebt,
      factors: {
        qualityIssues: this.analysisData.qualityIssues.length,
        securityIssues: this.analysisData.securityFindings.length,
        performanceIssues: this.analysisData.performanceInsights.length
      }
    });
  }

  async generateAIInsights() {
    console.log('🧠 Generating AI insights...');
    
    try {
      // Generate improvement suggestions
      this.generateImprovementSuggestions();
      
      // Generate performance recommendations
      this.generatePerformanceRecommendations();
      
      // Generate security recommendations
      this.generateSecurityRecommendations();
      
      // Generate maintainability recommendations
      this.generateMaintainabilityRecommendations();
      
    } catch (error) {
      console.log('❌ AI insights generation failed:', error.message);
    }
  }

  generateImprovementSuggestions() {
    // Analyze quality issues and suggest improvements
    this.analysisData.qualityIssues.forEach(issue => {
      const suggestion = this.generateSuggestionForIssue(issue);
      if (suggestion) {
        this.analysisData.improvementSuggestions.push(suggestion);
      }
    });
  }

  generateSuggestionForIssue(issue) {
    const suggestions = {
      'eslint': {
        message: `Fix ESLint issue in ${issue.file}: ${issue.message}`,
        action: 'Run ESLint with --fix flag or manually resolve the issue',
        priority: issue.severity === 'error' ? 'high' : 'medium'
      },
      'typescript': {
        message: `Fix TypeScript error in ${issue.file}: ${issue.message}`,
        action: 'Resolve type errors and ensure proper type definitions',
        priority: 'high'
      },
      'security-anti-pattern': {
        message: `Security concern in ${issue.file}: ${issue.message}`,
        action: 'Replace with secure alternative and review security practices',
        priority: 'high'
      },
      'complexity-anti-pattern': {
        message: `Complexity issue in ${issue.file}: ${issue.message}`,
        action: 'Refactor function to reduce complexity and improve readability',
        priority: 'medium'
      }
    };
    
    const suggestion = suggestions[issue.type];
    if (suggestion) {
      return {
        ...suggestion,
        file: issue.file,
        line: issue.line,
        timestamp: Date.now()
      };
    }
    
    return null;
  }

  generatePerformanceRecommendations() {
    this.analysisData.performanceInsights.forEach(insight => {
      if (insight.status === 'poor' || insight.status === 'warning') {
        this.analysisData.improvementSuggestions.push({
          type: 'performance-improvement',
          message: `Performance issue detected: ${insight.metric}`,
          action: this.getPerformanceAction(insight),
          priority: insight.status === 'poor' ? 'high' : 'medium',
          timestamp: Date.now()
        });
      }
    });
  }

  getPerformanceAction(insight) {
    const actions = {
      'build-time': 'Optimize build process, consider using build caching and parallel processing',
      'nested-loops': 'Refactor nested loops to reduce time complexity',
      'expensive-operation': 'Optimize expensive operations, consider caching and lazy loading'
    };
    
    return actions[insight.pattern] || 'Review and optimize the identified performance bottleneck';
  }

  generateSecurityRecommendations() {
    this.analysisData.securityFindings.forEach(finding => {
      this.analysisData.improvementSuggestions.push({
        type: 'security-improvement',
        message: `Security issue: ${finding.title || finding.message}`,
        action: finding.recommendation || 'Review and fix the security vulnerability',
        priority: finding.severity === 'high' ? 'critical' : finding.severity === 'medium' ? 'high' : 'medium',
        timestamp: Date.now()
      });
    });
  }

  generateMaintainabilityRecommendations() {
    // Suggest improvements based on technical debt
    const latestDebt = this.analysisData.technicalDebt[this.analysisData.technicalDebt.length - 1];
    
    if (latestDebt && latestDebt.score > 100) {
      this.analysisData.improvementSuggestions.push({
        type: 'maintainability-improvement',
        message: 'High technical debt detected',
        action: 'Prioritize refactoring and code quality improvements',
        priority: 'high',
        timestamp: Date.now()
      });
    }
    
    // Suggest test coverage improvements
    const coverage = this.analysisData.codeMetrics.get('coverage-statements');
    if (coverage && coverage < 80) {
      this.analysisData.improvementSuggestions.push({
        type: 'test-coverage-improvement',
        message: `Low test coverage: ${coverage}%`,
        action: 'Increase test coverage to at least 80% for better maintainability',
        priority: 'medium',
        timestamp: Date.now()
      });
    }
  }

  async generateAnalysisReport() {
    const report = {
      timestamp: Date.now(),
      summary: {
        totalIssues: this.analysisData.qualityIssues.length,
        securityFindings: this.analysisData.securityFindings.length,
        performanceIssues: this.analysisData.performanceInsights.length,
        improvementSuggestions: this.analysisData.improvementSuggestions.length
      },
      codeMetrics: Object.fromEntries(this.analysisData.codeMetrics),
      qualityIssues: this.analysisData.qualityIssues.slice(-20), // Last 20 issues
      securityFindings: this.analysisData.securityFindings,
      performanceInsights: this.analysisData.performanceInsights,
      improvementSuggestions: this.analysisData.improvementSuggestions,
      technicalDebt: this.analysisData.technicalDebt.slice(-5), // Last 5 debt entries
      recommendations: this.generateOverallRecommendations()
    };
    
    const reportFile = path.join(this.reportDir, `ai-analysis-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    console.log(`📊 AI analysis report generated: ${reportFile}`);
  }

  generateOverallRecommendations() {
    const recommendations = [];
    
    // High priority issues
    const highPriorityIssues = this.analysisData.improvementSuggestions.filter(s => s.priority === 'high' || s.priority === 'critical');
    if (highPriorityIssues.length > 0) {
      recommendations.push({
        type: 'immediate-action',
        message: `Address ${highPriorityIssues.length} high-priority issues immediately`,
        priority: 'critical'
      });
    }
    
    // Security recommendations
    const securityIssues = this.analysisData.securityFindings.filter(f => f.severity === 'high');
    if (securityIssues.length > 0) {
      recommendations.push({
        type: 'security-priority',
        message: `Fix ${securityIssues.length} high-severity security vulnerabilities`,
        priority: 'critical'
      });
    }
    
    // Performance recommendations
    const performanceIssues = this.analysisData.performanceInsights.filter(i => i.status === 'poor');
    if (performanceIssues.length > 0) {
      recommendations.push({
        type: 'performance-priority',
        message: `Optimize ${performanceIssues.length} poor performance areas`,
        priority: 'high'
      });
    }
    
    return recommendations;
  }

  async run() {
    console.log('🚀 Starting AI-powered code analysis...');
    
    try {
      await this.runCodeAnalysis();
      await this.generateAnalysisReport();
      this.saveAnalysisData();
      
      console.log('✅ AI-powered code analysis completed');
    } catch (error) {
      console.log('❌ AI-powered code analysis failed:', error.message);
    }
  }
}

// Run the automation
const automation = new AICodeAnalyzer();
automation.run().catch(console.error);