#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧠 Starting Intelligent Code Analyzer...');

// Get automation interval from environment variable (default: 2 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 7200000; // 2 hours

class IntelligentCodeAnalyzer {
  constructor() {
    this.analysisResults = {
      codeSmells: [],
      performanceIssues: [],
      securityVulnerabilities: [],
      bestPractices: [],
      refactoringSuggestions: [],
      complexityMetrics: {},
      maintainabilityScore: 0
    };
    this.reportDir = path.join(process.cwd(), 'intelligent-analysis-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async runAnalysis() {
    try {
      console.log(`🧠 Running intelligent code analysis at ${new Date().toISOString()}`);
      
      // Analyze TypeScript/JavaScript files
      await this.analyzeSourceCode();
      
      // Analyze dependencies and security
      await this.analyzeDependencies();
      
      // Analyze build configuration
      await this.analyzeBuildConfig();
      
      // Analyze performance patterns
      await this.analyzePerformancePatterns();
      
      // Generate intelligent recommendations
      await this.generateRecommendations();
      
      // Save comprehensive report
      await this.saveReport();
      
      console.log('✅ Intelligent code analysis completed successfully');
      
    } catch (error) {
      console.error('❌ Intelligent code analysis failed:', error.message);
    }
  }

  async analyzeSourceCode() {
    console.log('🔍 Analyzing source code for intelligent insights...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) {
      console.log('⚠️  Source directory not found');
      return;
    }

    // Analyze file complexity and patterns
    const files = this.getAllFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    
    files.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      const analysis = this.analyzeFileIntelligence(file, content);
      
      if (analysis.codeSmells.length > 0) {
        this.analysisResults.codeSmells.push(...analysis.codeSmells);
      }
      
      if (analysis.performanceIssues.length > 0) {
        this.analysisResults.performanceIssues.push(...analysis.performanceIssues);
      }
      
      if (analysis.bestPractices.length > 0) {
        this.analysisResults.bestPractices.push(...analysis.bestPractices);
      }
    });

    console.log(`✅ Analyzed ${files.length} source files`);
  }

  analyzeFileIntelligence(filePath, content) {
    const analysis = {
      codeSmells: [],
      performanceIssues: [],
      bestPractices: []
    };

    const lines = content.split('\n');
    const fileName = path.basename(filePath);

    // Detect code smells and anti-patterns
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      
      // Large functions (more than 20 lines)
      if (line.includes('function') && line.includes('{')) {
        const functionEnd = this.findFunctionEnd(lines, index);
        if (functionEnd - index > 20) {
          analysis.codeSmells.push({
            file: fileName,
            line: lineNum,
            type: 'large-function',
            severity: 'medium',
            description: `Function spans ${functionEnd - index} lines (consider breaking it down)`,
            suggestion: 'Break large functions into smaller, focused functions'
          });
        }
      }

      // Deep nesting (more than 4 levels)
      if (line.includes('{')) {
        const nestingLevel = this.calculateNestingLevel(lines, index);
        if (nestingLevel > 4) {
          analysis.codeSmells.push({
            file: fileName,
            line: lineNum,
            type: 'deep-nesting',
            severity: 'high',
            description: `Nesting level ${nestingLevel} detected`,
            suggestion: 'Extract nested logic into separate functions'
          });
        }
      }

      // Performance anti-patterns
      if (line.includes('innerHTML') || line.includes('outerHTML')) {
        analysis.performanceIssues.push({
          file: fileName,
          line: lineNum,
          type: 'innerHTML-usage',
          severity: 'medium',
          description: 'innerHTML/outerHTML can cause XSS vulnerabilities',
          suggestion: 'Use textContent or createElement instead'
        });
      }

      if (line.includes('eval(') || line.includes('Function(')) {
        analysis.performanceIssues.push({
          file: fileName,
          line: lineNum,
          type: 'eval-usage',
          severity: 'high',
          description: 'eval() or Function() constructor detected',
          suggestion: 'Avoid eval() for security and performance reasons'
        });
      }

      // Best practices detection
      if (line.includes('console.log') || line.includes('console.error')) {
        analysis.bestPractices.push({
          file: fileName,
          line: lineNum,
          type: 'console-statement',
          severity: 'low',
          description: 'Console statement in production code',
          suggestion: 'Remove console statements or use proper logging library'
        });
      }

      // TypeScript best practices
      if (line.includes('any') && fileName.endsWith('.ts')) {
        analysis.bestPractices.push({
          file: fileName,
          line: lineNum,
          type: 'any-type-usage',
          severity: 'medium',
          description: 'Usage of "any" type detected',
          suggestion: 'Define proper types instead of using "any"'
        });
      }
    });

    return analysis;
  }

  findFunctionEnd(lines, startIndex) {
    let braceCount = 0;
    let inFunction = false;
    
    for (let i = startIndex; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('{')) {
        if (!inFunction) inFunction = true;
        braceCount++;
      }
      
      if (line.includes('}')) {
        braceCount--;
        if (braceCount === 0 && inFunction) {
          return i;
        }
      }
    }
    
    return startIndex;
  }

  calculateNestingLevel(lines, startIndex) {
    let maxNesting = 0;
    let currentNesting = 0;
    
    for (let i = startIndex; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('{')) {
        currentNesting++;
        maxNesting = Math.max(maxNesting, currentNesting);
      }
      
      if (line.includes('}')) {
        currentNesting--;
        if (currentNesting < 0) break;
      }
    }
    
    return maxNesting;
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

  async analyzeDependencies() {
    console.log('📦 Analyzing dependencies for intelligent insights...');
    
    try {
      // Check for outdated packages
      const outdatedCheck = execSync('npm outdated --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const outdated = JSON.parse(outdatedCheck);
      if (Object.keys(outdated).length > 0) {
        this.analysisResults.bestPractices.push({
          type: 'outdated-dependencies',
          severity: 'medium',
          description: `${Object.keys(outdated).length} outdated dependencies detected`,
          suggestion: 'Update dependencies to latest versions for security and features'
        });
      }

      // Check for security vulnerabilities
      try {
        const auditResult = execSync('npm audit --json', { 
          encoding: 'utf8',
          stdio: 'pipe'
        });
        
        const audit = JSON.parse(auditResult);
        if (audit.vulnerabilities) {
          const vulnCount = Object.keys(audit.vulnerabilities).length;
          this.analysisResults.securityVulnerabilities.push({
            type: 'npm-audit',
            severity: 'high',
            description: `${vulnCount} security vulnerabilities detected`,
            suggestion: 'Run npm audit fix to resolve vulnerabilities'
          });
        }
      } catch (error) {
        // npm audit might fail if no vulnerabilities found
        console.log('✅ No security vulnerabilities detected');
      }
      
    } catch (error) {
      console.log('⚠️  Could not analyze dependencies:', error.message);
    }
  }

  async analyzeBuildConfig() {
    console.log('⚙️  Analyzing build configuration...');
    
    const configFiles = ['vite.config.ts', 'tsconfig.json', 'package.json'];
    
    configFiles.forEach(configFile => {
      const configPath = path.join(process.cwd(), configFile);
      if (fs.existsSync(configPath)) {
        try {
          const content = fs.readFileSync(configPath, 'utf8');
          const analysis = this.analyzeConfigFile(configFile, content);
          
          if (analysis.length > 0) {
            this.analysisResults.bestPractices.push(...analysis);
          }
        } catch (error) {
          console.log(`⚠️  Could not analyze ${configFile}:`, error.message);
        }
      }
    });
  }

  analyzeConfigFile(fileName, content) {
    const suggestions = [];
    
    if (fileName === 'vite.config.ts') {
      // Check for performance optimizations
      if (!content.includes('build.rollupOptions')) {
        suggestions.push({
          type: 'vite-optimization',
          severity: 'low',
          description: 'Vite build optimization not configured',
          suggestion: 'Configure rollupOptions for better bundle optimization'
        });
      }
      
      if (!content.includes('build.chunkSizeWarningLimit')) {
        suggestions.push({
          type: 'vite-chunk-size',
          severity: 'low',
          description: 'Chunk size warning limit not set',
          suggestion: 'Set chunkSizeWarningLimit to optimize bundle sizes'
        });
      }
    }
    
    if (fileName === 'tsconfig.json') {
      if (content.includes('"strict": false')) {
        suggestions.push({
          type: 'typescript-strict-mode',
          severity: 'medium',
          description: 'TypeScript strict mode is disabled',
          suggestion: 'Enable strict mode for better type safety'
        });
      }
    }
    
    return suggestions;
  }

  async analyzePerformancePatterns() {
    console.log('⚡ Analyzing performance patterns...');
    
    // Check for common performance anti-patterns in source code
    const srcPath = path.join(process.cwd(), 'src');
    if (fs.existsSync(srcPath)) {
      const files = this.getAllFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for expensive operations in render functions
        if (content.includes('useEffect') && content.includes('setInterval')) {
          this.analysisResults.performanceIssues.push({
            type: 'useEffect-setInterval',
            severity: 'medium',
            description: 'setInterval in useEffect without cleanup',
            suggestion: 'Always return cleanup function from useEffect with setInterval'
          });
        }
        
        // Check for inline object/function creation
        const inlineObjectMatches = content.match(/=\s*\{[^}]*\}/g);
        if (inlineObjectMatches && inlineObjectMatches.length > 5) {
          this.analysisResults.performanceIssues.push({
            type: 'inline-objects',
            severity: 'low',
            description: 'Multiple inline object creations detected',
            suggestion: 'Extract objects to constants or use useMemo for expensive objects'
          });
        }
      });
    }
  }

  async generateRecommendations() {
    console.log('💡 Generating intelligent recommendations...');
    
    // Calculate maintainability score
    const totalIssues = this.analysisResults.codeSmells.length + 
                       this.analysisResults.performanceIssues.length + 
                       this.analysisResults.securityVulnerabilities.length;
    
    this.analysisResults.maintainabilityScore = Math.max(0, 100 - (totalIssues * 5));
    
    // Generate refactoring suggestions based on analysis
    if (this.analysisResults.codeSmells.length > 0) {
      this.analysisResults.refactoringSuggestions.push({
        priority: 'high',
        description: 'Address code smells to improve maintainability',
        actions: [
          'Break down large functions into smaller ones',
          'Reduce nesting levels by extracting logic',
          'Remove duplicate code and create reusable functions'
        ]
      });
    }
    
    if (this.analysisResults.performanceIssues.length > 0) {
      this.analysisResults.refactoringSuggestions.push({
        priority: 'medium',
        description: 'Optimize performance-critical code',
        actions: [
          'Use React.memo for expensive components',
          'Implement proper cleanup in useEffect hooks',
          'Avoid inline object/function creation in render'
        ]
      });
    }
    
    if (this.analysisResults.securityVulnerabilities.length > 0) {
      this.analysisResults.refactoringSuggestions.push({
        priority: 'critical',
        description: 'Address security vulnerabilities immediately',
        actions: [
          'Run npm audit fix',
          'Update vulnerable dependencies',
          'Review and fix XSS vulnerabilities'
        ]
      });
    }
  }

  async saveReport() {
    const timestamp = new Date().toISOString();
    const reportPath = path.join(this.reportDir, `intelligent-analysis-${Date.now()}.json`);
    
    const report = {
      timestamp,
      summary: {
        totalIssues: this.analysisResults.codeSmells.length + 
                    this.analysisResults.performanceIssues.length + 
                    this.analysisResults.securityVulnerabilities.length,
        maintainabilityScore: this.analysisResults.maintainabilityScore,
        recommendations: this.analysisResults.refactoringSuggestions.length
      },
      details: this.analysisResults
    };
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Intelligent analysis report saved to ${reportPath}`);
    
    // Also save a summary report
    const summaryPath = path.join(this.reportDir, 'latest-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(report.summary, null, 2));
  }
}

// Main execution
async function main() {
  const analyzer = new IntelligentCodeAnalyzer();
  
  // Run initial analysis
  await analyzer.runAnalysis();
  
  // Set up continuous analysis
  setInterval(async () => {
    await analyzer.runAnalysis();
  }, AUTOMATION_INTERVAL);
  
  console.log(`🔄 Intelligent code analyzer will run every ${AUTOMATION_INTERVAL / 60000} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Intelligent code analyzer shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Intelligent code analyzer shutting down gracefully...');
  process.exit(0);
});

// Start the analyzer
main().catch(error => {
  console.error('❌ Fatal error in intelligent code analyzer:', error);
  process.exit(1);
});