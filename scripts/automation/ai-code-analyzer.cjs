#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🤖 Starting AI-Powered Code Quality Analyzer...');

// Get automation interval from environment variable (default: 4 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 14400000; // 4 hours

class AICodeAnalyzer {
  constructor() {
    this.analysisResults = {
      codeSmells: [],
      complexityIssues: [],
      performanceIssues: [],
      maintainabilityScore: 0,
      suggestions: [],
      timestamp: new Date().toISOString()
    };
    this.reportDir = path.join(process.cwd(), 'ai-analysis-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async analyzeCodeQuality() {
    try {
      console.log(`🤖 Running AI code analysis at ${new Date().toISOString()}`);
      
      // Analyze TypeScript/JavaScript files
      await this.analyzeSourceFiles();
      
      // Analyze component complexity
      await this.analyzeComponentComplexity();
      
      // Analyze performance patterns
      await this.analyzePerformancePatterns();
      
      // Analyze maintainability
      await this.analyzeMaintainability();
      
      // Generate AI-powered suggestions
      await this.generateAISuggestions();
      
      // Save comprehensive report
      await this.saveAnalysisReport();
      
      console.log('✅ AI code analysis completed successfully');
      
    } catch (error) {
      console.error('❌ AI code analysis failed:', error.message);
    }
  }

  async analyzeSourceFiles() {
    console.log('🔍 Analyzing source code patterns...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) return;

    const files = this.getAllFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const analysis = this.analyzeFileContent(content, file);
      
      if (analysis.codeSmells.length > 0) {
        this.analysisResults.codeSmells.push(...analysis.codeSmells);
      }
      
      if (analysis.complexityIssues.length > 0) {
        this.analysisResults.complexityIssues.push(...analysis.complexityIssues);
      }
    }
  }

  analyzeFileContent(content, filePath) {
    const analysis = {
      codeSmells: [],
      complexityIssues: []
    };

    const lines = content.split('\n');
    
    // Detect code smells
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      
      // Long functions (>50 lines)
      if (line.includes('function') || line.includes('=>')) {
        const functionEnd = this.findFunctionEnd(lines, index);
        if (functionEnd - index > 50) {
          analysis.codeSmells.push({
            type: 'long-function',
            file: filePath,
            line: lineNum,
            severity: 'medium',
            description: `Function spans ${functionEnd - index} lines (consider breaking it down)`
          });
        }
      }
      
      // Deep nesting (>4 levels)
      if (line.includes('{') || line.includes('}')) {
        const nestingLevel = this.calculateNestingLevel(lines, index);
        if (nestingLevel > 4) {
          analysis.codeSmells.push({
            type: 'deep-nesting',
            file: filePath,
            line: lineNum,
            severity: 'high',
            description: `Deep nesting detected (${nestingLevel} levels)`
          });
        }
      }
      
      // Magic numbers
      const magicNumberMatch = line.match(/\b\d{3,}\b/);
      if (magicNumberMatch && !line.includes('//') && !line.includes('/*')) {
        analysis.codeSmells.push({
          type: 'magic-number',
          file: filePath,
          line: lineNum,
          severity: 'low',
          description: `Magic number detected: ${magicNumberMatch[0]}`
        });
      }
      
      // Inline styles
      if (line.includes('style=') && line.includes('{')) {
        analysis.codeSmells.push({
          type: 'inline-styles',
          file: filePath,
          line: lineNum,
          severity: 'low',
          description: 'Inline styles detected (consider using CSS classes)'
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
      
      if (line.includes('function') || line.includes('=>')) {
        inFunction = true;
      }
      
      if (inFunction) {
        braceCount += (line.match(/{/g) || []).length;
        braceCount -= (line.match(/}/g) || []).length;
        
        if (braceCount === 0 && inFunction) {
          return i;
        }
      }
    }
    
    return lines.length;
  }

  calculateNestingLevel(lines, currentIndex) {
    let level = 0;
    let maxLevel = 0;
    
    for (let i = 0; i <= currentIndex; i++) {
      const line = lines[i];
      level += (line.match(/{/g) || []).length;
      level -= (line.match(/}/g) || []).length;
      maxLevel = Math.max(maxLevel, level);
    }
    
    return maxLevel;
  }

  async analyzeComponentComplexity() {
    console.log('🧩 Analyzing component complexity...');
    
    const componentsPath = path.join(process.cwd(), 'src/components');
    if (!fs.existsSync(componentsPath)) return;

    const componentFiles = this.getAllFiles(componentsPath, ['.tsx', '.jsx']);
    
    for (const file of componentFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const complexity = this.calculateComponentComplexity(content, file);
      
      if (complexity > 10) {
        this.analysisResults.complexityIssues.push({
          file: file,
          complexity: complexity,
          severity: complexity > 20 ? 'high' : 'medium',
          description: `Component complexity: ${complexity} (consider breaking down)`
        });
      }
    }
  }

  calculateComponentComplexity(content, filePath) {
    let complexity = 0;
    
    // Count conditional statements
    complexity += (content.match(/if\s*\(/g) || []).length;
    complexity += (content.match(/else\s*if\s*\(/g) || []).length;
    complexity += (content.match(/switch\s*\(/g) || []).length;
    complexity += (content.match(/case\s+/g) || []).length;
    complexity += (content.match(/\?\s*[^:]+:/g) || []).length;
    
    // Count loops
    complexity += (content.match(/for\s*\(/g) || []).length;
    complexity += (content.match(/while\s*\(/g) || []).length;
    complexity += (content.match(/\.map\s*\(/g) || []).length;
    complexity += (content.match(/\.filter\s*\(/g) || []).length;
    complexity += (content.match(/\.reduce\s*\(/g) || []).length;
    
    // Count logical operators
    complexity += (content.match(/&&/g) || []).length;
    complexity += (content.match(/\|\|/g) || []).length;
    
    return complexity;
  }

  async analyzePerformancePatterns() {
    console.log('⚡ Analyzing performance patterns...');
    
    const srcPath = path.join(process.cwd(), 'src');
    if (!fs.existsSync(srcPath)) return;

    const files = this.getAllFiles(srcPath, ['.ts', '.tsx', '.js', '.jsx']);
    
    for (const file of files) {
      const content = fs.readFileSync(file, 'utf8');
      const performanceIssues = this.detectPerformanceIssues(content, file);
      
      if (performanceIssues.length > 0) {
        this.analysisResults.performanceIssues.push(...performanceIssues);
      }
    }
  }

  detectPerformanceIssues(content, filePath) {
    const issues = [];
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      const lineNum = index + 1;
      
      // Expensive operations in render
      if (line.includes('useEffect') && line.includes('[]')) {
        const hasExpensiveOp = this.checkForExpensiveOperations(lines, index);
        if (hasExpensiveOp) {
          issues.push({
            type: 'expensive-operation-in-effect',
            file: filePath,
            line: lineNum,
            severity: 'medium',
            description: 'Expensive operation detected in useEffect dependency array'
          });
        }
      }
      
      // Missing React.memo
      if (line.includes('export default') && line.includes('function') && !content.includes('React.memo')) {
        issues.push({
          type: 'missing-react-memo',
          file: filePath,
          line: lineNum,
          severity: 'low',
          description: 'Consider wrapping component with React.memo for performance'
        });
      }
      
      // Inline object creation
      if (line.includes('style=') && line.includes('{{')) {
        issues.push({
          type: 'inline-object-creation',
          file: filePath,
          line: lineNum,
          severity: 'low',
          description: 'Inline object creation in render (consider moving outside)'
        });
      }
    });
    
    return issues;
  }

  checkForExpensiveOperations(lines, startIndex) {
    const expensivePatterns = [
      /\.filter\(/,
      /\.map\(/,
      /\.reduce\(/,
      /\.sort\(/,
      /JSON\.parse\(/,
      /JSON\.stringify\(/,
      /new Date\(/,
      /Math\./
    ];
    
    for (let i = startIndex; i < Math.min(startIndex + 10, lines.length); i++) {
      const line = lines[i];
      if (expensivePatterns.some(pattern => pattern.test(line))) {
        return true;
      }
    }
    
    return false;
  }

  async analyzeMaintainability() {
    console.log('🔧 Analyzing code maintainability...');
    
    let maintainabilityScore = 100;
    
    // Deduct points for code smells
    maintainabilityScore -= this.analysisResults.codeSmells.length * 2;
    
    // Deduct points for complexity issues
    this.analysisResults.complexityIssues.forEach(issue => {
      maintainabilityScore -= issue.complexity > 20 ? 5 : 3;
    });
    
    // Deduct points for performance issues
    maintainabilityScore -= this.analysisResults.performanceIssues.length * 1;
    
    // Ensure score doesn't go below 0
    maintainabilityScore = Math.max(0, maintainabilityScore);
    
    this.analysisResults.maintainabilityScore = maintainabilityScore;
  }

  async generateAISuggestions() {
    console.log('💡 Generating AI-powered suggestions...');
    
    const suggestions = [];
    
    // Suggest based on code smells
    if (this.analysisResults.codeSmells.length > 5) {
      suggestions.push({
        type: 'refactoring',
        priority: 'high',
        description: 'Multiple code smells detected. Consider scheduling a refactoring session.',
        action: 'Review and refactor code with high complexity and deep nesting'
      });
    }
    
    // Suggest based on maintainability score
    if (this.analysisResults.maintainabilityScore < 70) {
      suggestions.push({
        type: 'quality-improvement',
        priority: 'high',
        description: 'Low maintainability score detected. Focus on code quality improvements.',
        action: 'Implement code review guidelines and refactor complex components'
      });
    }
    
    // Suggest based on performance issues
    if (this.analysisResults.performanceIssues.length > 3) {
      suggestions.push({
        type: 'performance-optimization',
        priority: 'medium',
        description: 'Multiple performance issues detected. Consider performance optimization.',
        action: 'Review useEffect dependencies and implement React.memo where appropriate'
      });
    }
    
    this.analysisResults.suggestions = suggestions;
  }

  getAllFiles(dir, extensions) {
    const files = [];
    
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (stat.isFile() && extensions.some(ext => fullPath.endsWith(ext))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        console.log(`⚠️  Error scanning directory ${currentDir}:`, error.message);
      }
    }
    
    scanDirectory(dir);
    return files;
  }

  async saveAnalysisReport() {
    console.log('📊 Saving AI analysis report...');
    
    const reportPath = path.join(this.reportDir, `ai-analysis-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.analysisResults, null, 2));
    
    // Also save latest report
    const latestReportPath = path.join(this.reportDir, 'latest-ai-analysis.json');
    fs.writeFileSync(latestReportPath, JSON.stringify(this.analysisResults, null, 2));
    
    console.log(`✅ AI analysis report saved to ${reportPath}`);
    
    // Log summary
    console.log('\n📊 AI Analysis Summary:');
    console.log(`  - Code Smells: ${this.analysisResults.codeSmells.length}`);
    console.log(`  - Complexity Issues: ${this.analysisResults.complexityIssues.length}`);
    console.log(`  - Performance Issues: ${this.analysisResults.performanceIssues.length}`);
    console.log(`  - Maintainability Score: ${this.analysisResults.maintainabilityScore}/100`);
    console.log(`  - Suggestions: ${this.analysisResults.suggestions.length}`);
  }
}

async function runAICodeAnalyzer() {
  const analyzer = new AICodeAnalyzer();
  await analyzer.analyzeCodeQuality();
}

// Run the analyzer
runAICodeAnalyzer();

// Set up continuous monitoring
setInterval(runAICodeAnalyzer, AUTOMATION_INTERVAL);

console.log(`🤖 AI Code Analyzer will run every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);