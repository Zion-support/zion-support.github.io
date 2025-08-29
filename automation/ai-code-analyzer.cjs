#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class AICodeAnalyzer {
  constructor() {
    this.analysisResults = new Map();
    this.codePatterns = new Map();
    this.improvementSuggestions = new Map();
    this.logFile = path.join(__dirname, 'logs', 'ai-code-analyzer.log');
    this.ensureLogDirectory();
    this.loadCodePatterns();
    this.initializeAI();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
    console.log(`[${level.toUpperCase()}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  loadCodePatterns() {
    // Load predefined code patterns and best practices
    this.codePatterns.set('react', {
      hooks: ['useState', 'useEffect', 'useCallback', 'useMemo', 'useRef'],
      antiPatterns: ['setState in render', 'missing dependencies', 'unnecessary re-renders'],
      bestPractices: ['memoization', 'proper dependency arrays', 'custom hooks extraction']
    });

    this.codePatterns.set('typescript', {
      antiPatterns: ['any type', 'implicit any', 'unused variables', 'missing return types'],
      bestPractices: ['strict typing', 'interface definitions', 'generic types', 'union types']
    });

    this.codePatterns.set('performance', {
      antiPatterns: ['large bundle size', 'unnecessary re-renders', 'memory leaks', 'blocking operations'],
      bestPractices: ['code splitting', 'lazy loading', 'memoization', 'debouncing']
    });
  }

  initializeAI() {
    this.aiModel = process.env.AI_MODEL || 'gpt-4';
    this.autoSuggestions = process.env.AUTO_SUGGESTIONS === 'true';
    this.codeImprovement = process.env.CODE_IMPROVEMENT === 'true';
    this.log('AI Code Analyzer initialized with model:', this.aiModel);
  }

  async analyzeFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileExtension = path.extname(filePath);
      const analysis = {
        filePath,
        timestamp: new Date().toISOString(),
        size: content.length,
        lines: content.split('\n').length,
        issues: [],
        suggestions: [],
        score: 100
      };

      // Analyze based on file type
      if (fileExtension === '.tsx' || fileExtension === '.ts') {
        analysis.issues = this.analyzeTypeScript(content, filePath);
        analysis.suggestions = this.generateTypeScriptSuggestions(content, analysis.issues);
      } else if (fileExtension === '.jsx' || fileExtension === '.js') {
        analysis.issues = this.analyzeJavaScript(content, filePath);
        analysis.suggestions = this.generateJavaScriptSuggestions(content, analysis.issues);
      } else if (fileExtension === '.css' || fileExtension === '.scss') {
        analysis.issues = this.analyzeCSS(content, filePath);
        analysis.suggestions = this.generateCSSSuggestions(content, analysis.issues);
      }

      // Calculate quality score
      analysis.score = this.calculateQualityScore(analysis);
      this.analysisResults.set(filePath, analysis);

      return analysis;
    } catch (error) {
      this.log(`Error analyzing file ${filePath}: ${error.message}`, 'error');
      return null;
    }
  }

  analyzeTypeScript(content, filePath) {
    const issues = [];
    
    // Check for 'any' types
    const anyMatches = content.match(/:\s*any\b/g);
    if (anyMatches) {
      issues.push({
        type: 'warning',
        message: `Found ${anyMatches.length} 'any' types. Consider using proper TypeScript types.`,
        line: this.findLineNumber(content, 'any'),
        severity: 'medium'
      });
    }

    // Check for implicit any
    const implicitAnyMatches = content.match(/function\s+\w+\s*\([^)]*\)\s*{/g);
    if (implicitAnyMatches) {
      issues.push({
        type: 'warning',
        message: 'Function parameters should have explicit types',
        line: this.findLineNumber(content, 'function'),
        severity: 'medium'
      });
    }

    // Check for unused imports
    const importMatches = content.match(/import\s+.*\s+from\s+['"][^'"]+['"]/g);
    if (importMatches) {
      // This is a simplified check - in practice, you'd need more sophisticated analysis
      issues.push({
        type: 'info',
        message: 'Verify all imports are being used',
        line: this.findLineNumber(content, 'import'),
        severity: 'low'
      });
    }

    return issues;
  }

  analyzeJavaScript(content, filePath) {
    const issues = [];
    
    // Check for console.log statements in production code
    const consoleMatches = content.match(/console\.(log|warn|error|info)/g);
    if (consoleMatches) {
      issues.push({
        type: 'warning',
        message: `Found ${consoleMatches.length} console statements. Consider removing for production.`,
        line: this.findLineNumber(content, 'console'),
        severity: 'medium'
      });
    }

    // Check for var usage
    const varMatches = content.match(/\bvar\s+\w+/g);
    if (varMatches) {
      issues.push({
        type: 'warning',
        message: `Found ${varMatches.length} 'var' declarations. Consider using 'const' or 'let'.`,
        line: this.findLineNumber(content, 'var'),
        severity: 'medium'
      });
    }

    return issues;
  }

  analyzeCSS(content, filePath) {
    const issues = [];
    
    // Check for !important usage
    const importantMatches = content.match(/!important/g);
    if (importantMatches) {
      issues.push({
        type: 'warning',
        message: `Found ${importantMatches.length} !important declarations. Consider using more specific selectors.`,
        line: this.findLineNumber(content, '!important'),
        severity: 'medium'
      });
    }

    // Check for hardcoded colors
    const colorMatches = content.match(/#[0-9a-fA-F]{3,6}|rgb\([^)]+\)/g);
    if (colorMatches) {
      issues.push({
        type: 'info',
        message: `Found ${colorMatches.length} hardcoded colors. Consider using CSS variables.`,
        line: this.findLineNumber(content, '#'),
        severity: 'low'
      });
    }

    return issues;
  }

  findLineNumber(content, searchTerm) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(searchTerm)) {
        return i + 1;
      }
    }
    return 1;
  }

  generateTypeScriptSuggestions(content, issues) {
    const suggestions = [];
    
    issues.forEach(issue => {
      if (issue.message.includes('any')) {
        suggestions.push({
          type: 'improvement',
          message: 'Replace "any" with proper types like "unknown", "Record<string, unknown>", or create specific interfaces',
          example: '// Instead of: const data: any\n// Use: const data: Record<string, unknown>'
        });
      }
      
      if (issue.message.includes('implicit')) {
        suggestions.push({
          type: 'improvement',
          message: 'Add explicit parameter types to functions',
          example: '// Instead of: function process(data) {}\n// Use: function process(data: ProcessData): void {}'
        });
      }
    });

    return suggestions;
  }

  generateJavaScriptSuggestions(content, issues) {
    const suggestions = [];
    
    issues.forEach(issue => {
      if (issue.message.includes('console')) {
        suggestions.push({
          type: 'improvement',
          message: 'Use a proper logging library or remove console statements for production',
          example: '// Use: logger.info("message") or remove console.log'
        });
      }
      
      if (issue.message.includes('var')) {
        suggestions.push({
          type: 'improvement',
          message: 'Replace "var" with "const" for values that won\'t be reassigned, or "let" for mutable values',
          example: '// Instead of: var name = "John"\n// Use: const name = "John"'
        });
      }
    });

    return suggestions;
  }

  generateCSSSuggestions(content, issues) {
    const suggestions = [];
    
    issues.forEach(issue => {
      if (issue.message.includes('!important')) {
        suggestions.push({
          type: 'improvement',
          message: 'Use more specific selectors instead of !important',
          example: '// Instead of: .button { color: red !important; }\n// Use: .header .nav .button { color: red; }'
        });
      }
      
      if (issue.message.includes('hardcoded colors')) {
        suggestions.push({
          type: 'improvement',
          message: 'Define colors as CSS custom properties for better maintainability',
          example: ':root { --primary-color: #007bff; }\n.button { background-color: var(--primary-color); }'
        });
      }
    });

    return suggestions;
  }

  calculateQualityScore(analysis) {
    let score = 100;
    
    analysis.issues.forEach(issue => {
      switch (issue.severity) {
        case 'high':
          score -= 10;
          break;
        case 'medium':
          score -= 5;
          break;
        case 'low':
          score -= 2;
          break;
      }
    });

    // Bonus for good practices
    if (analysis.suggestions.length > 0) {
      score += Math.min(10, analysis.suggestions.length * 2);
    }

    return Math.max(0, Math.min(100, score));
  }

  async analyzeProject(projectPath = '.') {
    this.log('🚀 Starting AI-powered code analysis...');
    
    const files = this.getProjectFiles(projectPath);
    this.log(`📁 Found ${files.length} files to analyze`);

    const results = [];
    for (const file of files) {
      const analysis = await this.analyzeFile(file);
      if (analysis) {
        results.push(analysis);
        this.log(`✅ Analyzed: ${file} (Score: ${analysis.score})`);
      }
    }

    // Generate project-wide report
    const projectReport = this.generateProjectReport(results);
    this.saveAnalysisReport(projectReport);
    
    this.log(`📊 Analysis complete! Overall project score: ${projectReport.overallScore}`);
    
    return projectReport;
  }

  getProjectFiles(projectPath) {
    const files = [];
    const extensions = ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss'];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && extensions.includes(path.extname(item))) {
          files.push(fullPath);
        }
      }
    };

    scanDirectory(projectPath);
    return files;
  }

  generateProjectReport(analyses) {
    const totalFiles = analyses.length;
    const totalIssues = analyses.reduce((sum, analysis) => sum + analysis.issues.length, 0);
    const totalSuggestions = analyses.reduce((sum, analysis) => sum + analysis.suggestions.length, 0);
    const averageScore = analyses.reduce((sum, analysis) => sum + analysis.score, 0) / totalFiles;

    const report = {
      timestamp: new Date().toISOString(),
      totalFiles,
      totalIssues,
      totalSuggestions,
      overallScore: Math.round(averageScore),
      fileAnalyses: analyses,
      summary: {
        highPriorityIssues: analyses.reduce((sum, analysis) => 
          sum + analysis.issues.filter(issue => issue.severity === 'high').length, 0),
        mediumPriorityIssues: analyses.reduce((sum, analysis) => 
          sum + analysis.issues.filter(issue => issue.severity === 'medium').length, 0),
        lowPriorityIssues: analyses.reduce((sum, analysis) => 
          sum + analysis.issues.filter(issue => issue.severity === 'low').length, 0)
      }
    };

    return report;
  }

  saveAnalysisReport(report) {
    const reportPath = path.join(__dirname, 'logs', 'ai-analysis-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Analysis report saved to: ${reportPath}`);
  }

  async startContinuousAnalysis() {
    this.log('🔄 Starting continuous AI code analysis...');
    
    const analysisInterval = parseInt(process.env.ANALYSIS_INTERVAL) || 600000; // 10 minutes
    
    setInterval(async () => {
      this.log('🔄 Running scheduled code analysis...');
      await this.analyzeProject();
    }, analysisInterval);

    // Initial analysis
    await this.analyzeProject();
  }
}

// CLI handling
const analyzer = new AICodeAnalyzer();
const command = process.argv[2];

switch (command) {
  case 'analyze':
    const projectPath = process.argv[3] || '.';
    analyzer.analyzeProject(projectPath).then(() => {
      process.exit(0);
    });
    break;
  case 'continuous':
    analyzer.startContinuousAnalysis();
    break;
  case 'analyze-file':
    const filePath = process.argv[3];
    if (filePath) {
      analyzer.analyzeFile(filePath).then((result) => {
        console.log(JSON.stringify(result, null, 2));
        process.exit(0);
      });
    } else {
      console.log('Usage: node ai-code-analyzer.cjs analyze-file <file-path>');
      process.exit(1);
    }
    break;
  default:
    console.log('Usage: node ai-code-analyzer.cjs [analyze|continuous|analyze-file] [path]');
    console.log('\nCommands:');
    console.log('  analyze        - Analyze entire project');
    console.log('  continuous     - Start continuous analysis mode');
    console.log('  analyze-file   - Analyze specific file');
    process.exit(1);
}

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down AI Code Analyzer...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down AI Code Analyzer...');
  process.exit(0);
});