#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class IntelligentLintFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/intelligent-lint-fixer.log');
    this.learningFile = path.join(this.projectRoot, 'logs/pm2/lint-learning-data.json');
    this.patternsFile = path.join(this.projectRoot, 'logs/pm2/lint-patterns.json');
    this.startTime = Date.now();
    this.learningData = this.loadLearningData();
    this.patterns = this.loadPatterns();
    this.issueHistory = [];
    this.fixSuccessRate = 0;
    this.totalFixes = 0;
    this.successfulFixes = 0;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    try {
      // Ensure logs directory exists
      const logsDir = path.dirname(this.logFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // Silent fail for logging
    }
  }

  loadLearningData() {
    try {
      if (fs.existsSync(this.learningFile)) {
        return JSON.parse(fs.readFileSync(this.learningFile, 'utf8'));
      }
    } catch (error) {
      this.log('Failed to load learning data, starting fresh');
    }
    return {
      commonIssues: {},
      fixStrategies: {},
      fileTypePatterns: {},
      lastUpdated: Date.now()
    };
  }

  loadPatterns() {
    try {
      if (fs.existsSync(this.patternsFile)) {
        return JSON.parse(fs.readFileSync(this.patternsFile, 'utf8'));
      }
    } catch (error) {
      this.log('Failed to load patterns, starting fresh');
    }
    return {
      codeSmells: {},
      bestPractices: {},
      performancePatterns: {},
      securityPatterns: {}
    };
  }

  saveLearningData() {
    try {
      this.learningData.lastUpdated = Date.now();
      fs.writeFileSync(this.learningFile, JSON.stringify(this.learningData, null, 2));
    } catch (error) {
      this.log('Failed to save learning data');
    }
  }

  savePatterns() {
    try {
      fs.writeFileSync(this.patternsFile, JSON.stringify(this.patterns, null, 2));
    } catch (error) {
      this.log('Failed to save patterns');
    }
  }

  async analyzeCodePatterns(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileExt = path.extname(filePath);
      const lines = content.split('\n');
      
      const analysis = {
        file: filePath,
        extension: fileExt,
        totalLines: lines.length,
        issues: [],
        patterns: [],
        suggestions: []
      };

      // AI-powered pattern recognition
      const patterns = this.recognizePatterns(content, fileExt);
      analysis.patterns = patterns;

      // Generate intelligent suggestions
      analysis.suggestions = this.generateSuggestions(patterns, fileExt);

      // Learn from this analysis
      this.learnFromAnalysis(fileExt, patterns);

      return analysis;
    } catch (error) {
      this.log(`Error analyzing ${filePath}: ${error.message}`);
      return null;
    }
  }

  recognizePatterns(content, fileExt) {
    const patterns = {
      codeSmells: [],
      bestPractices: [],
      performance: [],
      security: []
    };

    const lines = content.split('\n');

    lines.forEach((line, index) => {
      const lineNum = index + 1;
      const trimmedLine = line.trim();

      // Code smell detection
      if (this.detectCodeSmell(trimmedLine, fileExt)) {
        patterns.codeSmells.push({
          line: lineNum,
          type: 'code-smell',
          description: this.getCodeSmellDescription(trimmedLine),
          severity: 'medium'
        });
      }

      // Best practice violations
      if (this.detectBestPracticeViolation(trimmedLine, fileExt)) {
        patterns.bestPractices.push({
          line: lineNum,
          type: 'best-practice',
          description: this.getBestPracticeDescription(trimmedLine),
          severity: 'low'
        });
      }

      // Performance issues
      if (this.detectPerformanceIssue(trimmedLine, fileExt)) {
        patterns.performance.push({
          line: lineNum,
          type: 'performance',
          description: this.getPerformanceDescription(trimmedLine),
          severity: 'high'
        });
      }

      // Security concerns
      if (this.detectSecurityIssue(trimmedLine, fileExt)) {
        patterns.security.push({
          line: lineNum,
          type: 'security',
          description: this.getSecurityDescription(trimmedLine),
          severity: 'critical'
        });
      }
    });

    return patterns;
  }

  detectCodeSmell(line, fileExt) {
    const codeSmells = [
      /console\.(log|warn|error|info|debug)/,
      /TODO|FIXME|HACK|XXX/,
      /[ \t]+$/, // trailing spaces
      /^\s*$/, // empty lines
      /var\s+\w+/, // var usage in modern JS
      /function\s+\w+\s*\([^)]*\)\s*\{[^}]*\}/, // long functions
      /if\s*\([^)]*\)\s*\{[^}]*\}/, // long if blocks
    ];

    return codeSmells.some(pattern => pattern.test(line));
  }

  detectBestPracticeViolation(line, fileExt) {
    const violations = [
      /import\s+\*\s+as/, // wildcard imports
      /export\s+default\s+function/, // default exports
      /React\.createElement/, // JSX preferred
      /document\.getElementById/, // React refs preferred
      /window\./, // global window access
    ];

    return violations.some(pattern => pattern.test(line));
  }

  detectPerformanceIssue(line, fileExt) {
    const performanceIssues = [
      /\.forEach\s*\(/, // forEach instead of for...of
      /\.map\s*\(.*\)\.filter/, // chained array methods
      /new\s+Date\s*\(\)/, // Date constructor in loops
      /JSON\.parse\s*\(/, // JSON parsing in loops
      /\.innerHTML\s*=/, // innerHTML usage
    ];

    return performanceIssues.some(pattern => pattern.test(line));
  }

  detectSecurityIssue(line, fileExt) {
    const securityIssues = [
      /eval\s*\(/, // eval usage
      /innerHTML\s*=/, // XSS potential
      /document\.write/, // XSS potential
      /localStorage\s*\[/, // unsafe storage access
      /sessionStorage\s*\[/, // unsafe storage access
    ];

    return securityIssues.some(pattern => pattern.test(line));
  }

  getCodeSmellDescription(line) {
    if (/console\./.test(line)) return 'Console statement should be removed in production';
    if (/TODO|FIXME/.test(line)) return 'Development note found';
    if (/[ \t]+$/.test(line)) return 'Trailing whitespace detected';
    if (/^\s*$/.test(line)) return 'Empty line detected';
    return 'Code smell detected';
  }

  getBestPracticeDescription(line) {
    if (/import\s+\*\s+as/.test(line)) return 'Wildcard import detected';
    if (/export\s+default\s+function/.test(line)) return 'Default export function detected';
    if (/React\.createElement/.test(line)) return 'JSX preferred over createElement';
    return 'Best practice violation detected';
  }

  getPerformanceDescription(line) {
    if (/\.forEach/.test(line)) return 'Consider for...of for better performance';
    if (/\.map.*\.filter/.test(line)) return 'Chained array methods can be optimized';
    if (/new\s+Date/.test(line)) return 'Date constructor in loop detected';
    return 'Performance issue detected';
  }

  getSecurityDescription(line) {
    if (/eval/.test(line)) return 'eval() usage detected - security risk';
    if (/innerHTML/.test(line)) return 'innerHTML usage - XSS potential';
    if (/document\.write/.test(line)) return 'document.write usage - XSS potential';
    return 'Security concern detected';
  }

  generateSuggestions(patterns, fileExt) {
    const suggestions = [];

    // Generate contextual suggestions based on patterns
    if (patterns.codeSmells.length > 0) {
      suggestions.push({
        type: 'code-cleanup',
        priority: 'medium',
        description: `Found ${patterns.codeSmells.length} code smells to address`,
        actions: ['Remove console statements', 'Clean up TODO comments', 'Fix formatting issues']
      });
    }

    if (patterns.performance.length > 0) {
      suggestions.push({
        type: 'performance-optimization',
        priority: 'high',
        description: `Found ${patterns.performance.length} performance issues`,
        actions: ['Optimize array operations', 'Reduce object creation', 'Implement caching']
      });
    }

    if (patterns.security.length > 0) {
      suggestions.push({
        type: 'security-hardening',
        priority: 'critical',
        description: `Found ${patterns.security.length} security concerns`,
        actions: ['Remove eval() usage', 'Sanitize user input', 'Use safe DOM methods']
      });
    }

    return suggestions;
  }

  learnFromAnalysis(fileExt, patterns) {
    if (!this.learningData.fileTypePatterns[fileExt]) {
      this.learningData.fileTypePatterns[fileExt] = {
        totalFiles: 0,
        commonIssues: {},
        fixSuccessRate: 0
      };
    }

    const fileTypeData = this.learningData.fileTypePatterns[fileExt];
    fileTypeData.totalFiles++;

    // Learn from patterns
    Object.keys(patterns).forEach(patternType => {
      patterns[patternType].forEach(issue => {
        const issueKey = issue.type;
        if (!fileTypeData.commonIssues[issueKey]) {
          fileTypeData.commonIssues[issueKey] = {
            count: 0,
            severity: issue.severity,
            lastSeen: Date.now()
          };
        }
        fileTypeData.commonIssues[issueKey].count++;
        fileTypeData.commonIssues[issueKey].lastSeen = Date.now();
      });
    });

    this.saveLearningData();
  }

  async runIntelligentLinting() {
    this.log('🧠 Starting Intelligent Lint Fixing...');
    
    try {
      // Get all source files
      const sourceFiles = this.getSourceFiles();
      this.log(`Found ${sourceFiles.length} source files to analyze`);

      let totalIssues = 0;
      let fixedIssues = 0;

      for (const file of sourceFiles) {
        const analysis = await this.analyzeCodePatterns(file);
        if (analysis && analysis.patterns) {
          const issueCount = Object.values(analysis.patterns).flat().length;
          totalIssues += issueCount;
          
          if (issueCount > 0) {
            this.log(`📁 ${file}: ${issueCount} issues found`);
            
            // Apply intelligent fixes
            const fixesApplied = await this.applyIntelligentFixes(file, analysis);
            fixedIssues += fixesApplied;
          }
        }
      }

      // Update success rate
      this.totalFixes += totalIssues;
      this.successfulFixes += fixedIssues;
      this.fixSuccessRate = this.totalFixes > 0 ? (this.successfulFixes / this.totalFixes) * 100 : 0;

      this.log(`✅ Linting complete! Fixed ${fixedIssues}/${totalIssues} issues (${this.fixSuccessRate.toFixed(1)}% success rate)`);
      
      // Generate improvement report
      await this.generateImprovementReport();
      
    } catch (error) {
      this.log(`❌ Error during intelligent linting: ${error.message}`);
    }
  }

  getSourceFiles() {
    const sourceDirs = ['src', 'pages', 'components', 'utils', 'scripts'];
    const sourceFiles = [];
    
    sourceDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        this.walkDirectory(dir, sourceFiles);
      }
    });

    return sourceFiles.filter(file => 
      /\.(js|jsx|ts|tsx)$/.test(file) && 
      !file.includes('node_modules') && 
      !file.includes('.git')
    );
  }

  walkDirectory(dir, files) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.walkDirectory(fullPath, files);
      } else {
        files.push(fullPath);
      }
    });
  }

  async applyIntelligentFixes(filePath, analysis) {
    let fixesApplied = 0;
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Apply automatic fixes based on patterns
      if (analysis.patterns.codeSmells.length > 0) {
        const result = this.fixCodeSmells(content);
        if (result.modified) {
          content = result.content;
          modified = true;
          fixesApplied += result.fixesApplied;
        }
      }

      if (analysis.patterns.bestPractices.length > 0) {
        const result = this.fixBestPractices(content);
        if (result.modified) {
          content = result.content;
          modified = true;
          fixesApplied += result.fixesApplied;
        }
      }

      // Write back if modified
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`🔧 Applied ${fixesApplied} fixes to ${filePath}`);
      }

    } catch (error) {
      this.log(`Error applying fixes to ${filePath}: ${error.message}`);
    }

    return fixesApplied;
  }

  fixCodeSmells(content) {
    let modified = false;
    let fixesApplied = 0;
    let lines = content.split('\n');

    lines = lines.map(line => {
      let newLine = line;
      
      // Remove trailing spaces
      if (line.match(/[ \t]+$/)) {
        newLine = line.replace(/[ \t]+$/, '');
        modified = true;
        fixesApplied++;
      }

      // Remove console statements (commented out for safety)
      // if (line.match(/console\.(log|warn|error|info|debug)/)) {
      //   newLine = `// ${line} // TODO: Remove console statement`;
      //   modified = true;
      //   fixesApplied++;
      // }

      return newLine;
    });

    return {
      content: lines.join('\n'),
      modified,
      fixesApplied
    };
  }

  fixBestPractices(content) {
    let modified = false;
    let fixesApplied = 0;
    let lines = content.split('\n');

    lines = lines.map(line => {
      let newLine = line;
      
      // Convert var to const/let where appropriate
      if (line.match(/var\s+(\w+)\s*=/)) {
        const varName = line.match(/var\s+(\w+)\s*=/)[1];
        if (!line.includes('=') || line.match(new RegExp(`\\b${varName}\\s*=`))) {
          newLine = line.replace(/var\s+/, 'const ');
          modified = true;
          fixesApplied++;
        }
      }

      return newLine;
    });

    return {
      content: lines.join('\n'),
      modified,
      fixesApplied
    };
  }

  async generateImprovementReport() {
    const report = {
      timestamp: Date.now(),
      sessionStats: {
        totalFiles: this.getSourceFiles().length,
        fixSuccessRate: this.fixSuccessRate,
        totalFixes: this.totalFixes,
        successfulFixes: this.successfulFixes
      },
      learningInsights: this.learningData,
      recommendations: this.generateRecommendations()
    };

    const reportFile = path.join(this.projectRoot, 'logs/pm2/lint-improvement-report.json');
    try {
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log('📊 Improvement report generated');
    } catch (error) {
      this.log('Failed to generate improvement report');
    }
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.fixSuccessRate < 80) {
      recommendations.push({
        type: 'fix-strategy',
        priority: 'high',
        description: 'Fix success rate is below 80%. Review fix strategies.',
        action: 'Analyze failed fixes and improve pattern recognition'
      });
    }

    if (this.learningData.fileTypePatterns) {
      Object.entries(this.learningData.fileTypePatterns).forEach(([ext, data]) => {
        if (data.totalFiles > 10 && Object.keys(data.commonIssues).length > 5) {
          recommendations.push({
            type: 'file-type-optimization',
            priority: 'medium',
            description: `${ext} files have many common issues`,
            action: `Focus on ${ext} file improvements and create specific rules`
          });
        }
      });
    }

    return recommendations;
  }

  async start() {
    this.log('🚀 Intelligent Lint Fixer started');
    
    // Run initial analysis
    await this.runIntelligentLinting();
    
    // Schedule periodic runs
    setInterval(async () => {
      await this.runIntelligentLinting();
    }, 4 * 60 * 60 * 1000); // Every 4 hours
  }
}

// Start the intelligent lint fixer
const fixer = new IntelligentLintFixer();
fixer.start().catch(error => {
  console.error('Intelligent Lint Fixer failed to start:', error);
  process.exit(1);
});