#!/usr/bin/env node

/**
 * AI-Powered Development Assistant
 * 
 * This system provides intelligent development assistance including:
 * - Code quality analysis and suggestions
 * - Refactoring recommendations
 * - Development process optimization
 * - Performance improvement suggestions
 * - Best practices enforcement
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AIPoweredDevelopmentAssistant {
  constructor() {
    this.projectRoot = process.cwd();
    this.config = this.loadConfig();
    this.logFile = path.join(this.projectRoot, 'logs', 'ai-development-assistant.log');
    this.ensureLogDirectory();
    this.codeAnalysisCache = new Map();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  loadConfig() {
    const configPath = path.join(this.projectRoot, 'automation-config.json');
    if (fs.existsSync(configPath)) {
      try {
        return JSON.parse(fs.readFileSync(configPath, 'utf8'));
      } catch (error) {
        this.log('Error loading config, using defaults', 'ERROR');
      }
    }
    
    return {
      ai: {
        codeAnalysis: true,
        refactoringSuggestions: true,
        performanceOptimization: true,
        bestPracticesEnforcement: true,
        developmentProcessOptimization: true
      },
      thresholds: {
        minCodeQuality: 70,
        maxComplexity: 10,
        maxFileSize: 1000,
        maxFunctionLength: 50
      },
      fileTypes: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss']
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    console.log(logEntry.trim());
    
    try {
      fs.appendFileSync(this.logFile, logEntry);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async analyzeCodeQuality(filePath) {
    try {
      if (this.codeAnalysisCache.has(filePath)) {
        return this.codeAnalysisCache.get(filePath);
      }

      const content = fs.readFileSync(filePath, 'utf8');
      const stats = fs.statSync(filePath);
      const extension = path.extname(filePath);
      
      let analysis = {
        filePath,
        size: stats.size,
        lines: content.split('\n').length,
        quality: 100,
        issues: [],
        suggestions: [],
        complexity: 0
      };

      // Language-specific analysis
      if (extension === '.ts' || extension === '.tsx') {
        analysis = await this.analyzeTypeScriptFile(content, analysis);
      } else if (extension === '.js' || extension === '.jsx') {
        analysis = await this.analyzeJavaScriptFile(content, analysis);
      } else if (extension === '.css' || extension === '.scss') {
        analysis = await this.analyzeCSSFile(content, analysis);
      } else if (extension === '.json') {
        analysis = await this.analyzeJSONFile(content, analysis);
      }

      // Apply penalties based on thresholds
      analysis = this.applyQualityPenalties(analysis);
      
      this.codeAnalysisCache.set(filePath, analysis);
      return analysis;
    } catch (error) {
      this.log(`Error analyzing file ${filePath}: ${error.message}`, 'ERROR');
      return {
        filePath,
        quality: 0,
        issues: [`Error analyzing file: ${error.message}`],
        suggestions: []
      };
    }
  }

  async analyzeTypeScriptFile(content, analysis) {
    const lines = content.split('\n');
    let complexity = 0;
    const issues = [];
    const suggestions = [];

    // Check for TypeScript-specific patterns
    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      // Complexity analysis
      if (trimmedLine.includes('if(') || trimmedLine.includes('if (')) complexity++;
      if (trimmedLine.includes('for(') || trimmedLine.includes('for (')) complexity++;
      if (trimmedLine.includes('while(') || trimmedLine.includes('while (')) complexity++;
      if (trimmedLine.includes('switch(') || trimmedLine.includes('switch (')) complexity++;
      if (trimmedLine.includes('catch(') || trimmedLine.includes('catch (')) complexity++;
      if (trimmedLine.includes('&&') || trimmedLine.includes('||')) complexity += 0.5;
      
      // Best practices checks
      if (trimmedLine.includes('any')) {
        issues.push(`Line ${index + 1}: Avoid using 'any' type - consider proper typing`);
        suggestions.push(`Replace 'any' with a specific type or interface`);
      }
      
      if (trimmedLine.includes('console.log') && !trimmedLine.includes('//')) {
        issues.push(`Line ${index + 1}: Remove console.log in production code`);
        suggestions.push(`Use proper logging framework or remove console.log`);
      }
      
      if (trimmedLine.includes('setTimeout') && !trimmedLine.includes('clearTimeout')) {
        issues.push(`Line ${index + 1}: setTimeout without clearTimeout can cause memory leaks`);
        suggestions.push(`Store timeout ID and clear it when component unmounts`);
      }
    });

    // Check for proper imports
    const importLines = lines.filter(line => line.trim().startsWith('import'));
    const unusedImports = this.detectUnusedImports(content, importLines);
    
    if (unusedImports.length > 0) {
      issues.push(`Unused imports detected: ${unusedImports.join(', ')}`);
      suggestions.push('Remove unused imports to improve bundle size');
    }

    // Check for proper error handling
    if (content.includes('try') && !content.includes('catch')) {
      issues.push('Try block without catch - add proper error handling');
      suggestions.push('Add catch block or use try-finally pattern');
    }

    analysis.complexity = complexity;
    analysis.issues.push(...issues);
    analysis.suggestions.push(...suggestions);

    return analysis;
  }

  async analyzeJavaScriptFile(content, analysis) {
    const lines = content.split('\n');
    let complexity = 0;
    const issues = [];
    const suggestions = [];

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      // Complexity analysis
      if (trimmedLine.includes('if(') || trimmedLine.includes('if (')) complexity++;
      if (trimmedLine.includes('for(') || trimmedLine.includes('for (')) complexity++;
      if (trimmedLine.includes('while(') || trimmedLine.includes('while (')) complexity++;
      if (trimmedLine.includes('switch(') || trimmedLine.includes('switch (')) complexity++;
      if (trimmedLine.includes('catch(') || trimmedLine.includes('catch (')) complexity++;
      if (trimmedLine.includes('&&') || trimmedLine.includes('||')) complexity += 0.5;
      
      // JavaScript-specific checks
      if (trimmedLine.includes('var ')) {
        issues.push(`Line ${index + 1}: Use 'const' or 'let' instead of 'var'`);
        suggestions.push('Replace var with const (for constants) or let (for variables)');
      }
      
      if (trimmedLine.includes('==') && !trimmedLine.includes('===')) {
        issues.push(`Line ${index + 1}: Use strict equality (===) instead of loose equality (==)`);
        suggestions.push('Replace == with === for better type safety');
      }
      
      if (trimmedLine.includes('function(') && !trimmedLine.includes('function (')) {
        issues.push(`Line ${index + 1}: Add space after function keyword`);
        suggestions.push('Use consistent spacing: function (');
      }
    });

    analysis.complexity = complexity;
    analysis.issues.push(...issues);
    analysis.suggestions.push(...suggestions);

    return analysis;
  }

  async analyzeCSSFile(content, analysis) {
    const lines = content.split('\n');
    const issues = [];
    const suggestions = [];

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();
      
      // CSS best practices
      if (trimmedLine.includes('!important')) {
        issues.push(`Line ${index + 1}: Avoid using !important`);
        suggestions.push('Use more specific selectors instead of !important');
      }
      
      if (trimmedLine.includes('px') && !trimmedLine.includes('0px')) {
        issues.push(`Line ${index + 1}: Consider using relative units (rem, em) instead of px`);
        suggestions.push('Use rem for font-sizes and em for margins/paddings');
      }
      
      if (trimmedLine.includes('color: #') && trimmedLine.length > 20) {
        issues.push(`Line ${index + 1}: Long hex color value detected`);
        suggestions.push('Consider using CSS custom properties or shorter hex values');
      }
    });

    analysis.issues.push(...issues);
    analysis.suggestions.push(...suggestions);

    return analysis;
  }

  async analyzeJSONFile(content, analysis) {
    try {
      JSON.parse(content);
      analysis.suggestions.push('JSON file is valid');
    } catch (error) {
      analysis.issues.push(`Invalid JSON: ${error.message}`);
      analysis.quality = 0;
    }

    return analysis;
  }

  applyQualityPenalties(analysis) {
    let quality = analysis.quality;
    
    // Size penalties
    if (analysis.size > this.config.thresholds.maxFileSize * 1024) {
      quality -= 20;
      analysis.issues.push('File size exceeds recommended limit');
      analysis.suggestions.push('Consider splitting large files into smaller modules');
    }
    
    // Complexity penalties
    if (analysis.complexity > this.config.thresholds.maxComplexity) {
      quality -= 15;
      analysis.issues.push('Cyclomatic complexity is too high');
      analysis.suggestions.push('Break down complex functions into smaller, simpler functions');
    }
    
    // Line count penalties
    if (analysis.lines > this.config.thresholds.maxFunctionLength * 10) {
      quality -= 10;
      analysis.issues.push('File has too many lines');
      analysis.suggestions.push('Consider splitting file into multiple modules');
    }
    
    // Issue penalties
    quality -= analysis.issues.length * 5;
    
    analysis.quality = Math.max(0, quality);
    return analysis;
  }

  detectUnusedImports(content, importLines) {
    const unusedImports = [];
    
    importLines.forEach(importLine => {
      const match = importLine.match(/import\s+(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)\s+from\s+['"]([^'"]+)['"]/);
      if (match) {
        const importPath = match[1];
        const importName = importLine.match(/import\s+(\{[^}]*\}|\*\s+as\s+(\w+)|\w+)/);
        
        if (importName) {
          const names = importName[1];
          if (names.startsWith('{')) {
            // Destructured import
            const extractedNames = names.match(/\w+/g);
            extractedNames.forEach(name => {
              if (!content.includes(name) || content.indexOf(name) === content.indexOf(importLine)) {
                unusedImports.push(name);
              }
            });
          } else {
            // Default import
            const name = importName[2] || importName[1];
            if (!content.includes(name) || content.indexOf(name) === content.indexOf(importLine)) {
              unusedImports.push(name);
            }
          }
        }
      }
    });
    
    return unusedImports;
  }

  async generateRefactoringSuggestions(filePath) {
    const analysis = await this.analyzeCodeQuality(filePath);
    const suggestions = [];
    
    if (analysis.complexity > this.config.thresholds.maxComplexity) {
      suggestions.push({
        type: 'complexity',
        priority: 'high',
        description: 'Function complexity is too high',
        suggestion: 'Extract complex logic into smaller, focused functions',
        example: `
// Instead of one complex function:
function processData(data) {
  // 50+ lines of complex logic
}

// Break into smaller functions:
function validateData(data) { /* validation logic */ }
function transformData(data) { /* transformation logic */ }
function processData(data) {
  const validated = validateData(data);
  return transformData(validated);
}
        `
      });
    }
    
    if (analysis.issues.some(issue => issue.includes('any'))) {
      suggestions.push({
        type: 'typing',
        priority: 'medium',
        description: 'Using "any" type reduces type safety',
        suggestion: 'Define proper interfaces or types',
        example: `
// Instead of:
function processItem(item: any) { }

// Use proper typing:
interface Item {
  id: string;
  name: string;
  value: number;
}

function processItem(item: Item) { }
        `
      });
    }
    
    if (analysis.issues.some(issue => issue.includes('console.log'))) {
      suggestions.push({
        type: 'logging',
        priority: 'low',
        description: 'Console.log statements in production code',
        suggestion: 'Use proper logging framework or remove console.log',
        example: `
// Instead of:
console.log('Debug info:', data);

// Use proper logging:
import { logger } from './utils/logger';
logger.debug('Debug info:', data);
        `
      });
    }
    
    return suggestions;
  }

  async optimizeDevelopmentProcess() {
    try {
      this.log('Analyzing development process for optimization opportunities');
      
      const optimizations = [];
      
      // Check package.json for optimization opportunities
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        
        // Check for outdated dependencies
        if (packageJson.dependencies) {
          const outdatedDeps = await this.checkOutdatedDependencies();
          if (outdatedDeps.length > 0) {
            optimizations.push({
              type: 'dependencies',
              priority: 'medium',
              description: 'Outdated dependencies detected',
              suggestion: 'Update dependencies to latest versions',
              details: outdatedDeps
            });
          }
        }
        
        // Check for unused dependencies
        const unusedDeps = await this.checkUnusedDependencies();
        if (unusedDeps.length > 0) {
          optimizations.push({
            type: 'dependencies',
            priority: 'low',
            description: 'Unused dependencies detected',
            suggestion: 'Remove unused dependencies to reduce bundle size',
            details: unusedDeps
          });
        }
      }
      
      // Check build configuration
      const buildOptimizations = await this.analyzeBuildConfiguration();
      optimizations.push(...buildOptimizations);
      
      // Check for performance improvements
      const performanceOptimizations = await this.analyzePerformanceOpportunities();
      optimizations.push(...performanceOptimizations);
      
      return optimizations;
    } catch (error) {
      this.log(`Error analyzing development process: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async checkOutdatedDependencies() {
    try {
      const result = execSync('npm outdated --json', { cwd: this.projectRoot, encoding: 'utf8' });
      const outdated = JSON.parse(result);
      return Object.keys(outdated);
    } catch (error) {
      return [];
    }
  }

  async checkUnusedDependencies() {
    try {
      const result = execSync('npx depcheck --json', { cwd: this.projectRoot, encoding: 'utf8' });
      const depcheck = JSON.parse(result);
      return depcheck.dependencies || [];
    } catch (error) {
      return [];
    }
  }

  async analyzeBuildConfiguration() {
    const optimizations = [];
    
    // Check for common build optimizations
    const viteConfigPath = path.join(this.projectRoot, 'vite.config.ts');
    if (fs.existsSync(viteConfigPath)) {
      const viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
      
      if (!viteConfig.includes('build.rollupOptions')) {
        optimizations.push({
          type: 'build',
          priority: 'medium',
          description: 'Vite build optimization not configured',
          suggestion: 'Configure rollup options for better tree-shaking and chunk splitting',
          example: `
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lodash', 'moment']
        }
      }
    }
  }
})
          `
        });
      }
    }
    
    return optimizations;
  }

  async analyzePerformanceOpportunities() {
    const optimizations = [];
    
    // Check for React performance optimizations
    const reactFiles = this.findFilesByPattern('**/*.{tsx,jsx}');
    
    for (const file of reactFiles.slice(0, 10)) { // Limit to first 10 files
      const content = fs.readFileSync(file, 'utf8');
      
      if (content.includes('useState') && content.includes('useEffect') && !content.includes('useCallback')) {
        optimizations.push({
          type: 'performance',
          priority: 'medium',
          description: 'Missing useCallback optimization',
          suggestion: 'Wrap functions in useCallback to prevent unnecessary re-renders',
          example: `
// Instead of:
const handleClick = () => { /* logic */ };

// Use:
const handleClick = useCallback(() => { /* logic */ }, []);
          `
        });
      }
      
      if (content.includes('useMemo') && content.includes('useEffect') && !content.includes('useMemo')) {
        optimizations.push({
          type: 'performance',
          priority: 'medium',
          description: 'Missing useMemo optimization',
          suggestion: 'Use useMemo for expensive calculations',
          example: `
// Instead of:
const expensiveValue = expensiveCalculation(data);

// Use:
const expensiveValue = useMemo(() => expensiveCalculation(data), [data]);
          `
        });
      }
    }
    
    return optimizations;
  }

  findFilesByPattern(pattern) {
    const glob = require('glob');
    try {
      return glob.sync(pattern, { cwd: this.projectRoot });
    } catch (error) {
      return [];
    }
  }

  async generateDevelopmentReport() {
    try {
      this.log('Generating comprehensive development report');
      
      // Analyze all source files
      const sourceFiles = this.findFilesByPattern('src/**/*.{ts,tsx,js,jsx}');
      const analyses = [];
      
      for (const file of sourceFiles) {
        const analysis = await this.analyzeCodeQuality(file);
        analyses.push(analysis);
      }
      
      // Generate refactoring suggestions
      const refactoringSuggestions = [];
      for (const file of sourceFiles.slice(0, 20)) { // Limit to first 20 files
        const suggestions = await this.generateRefactoringSuggestions(file);
        if (suggestions.length > 0) {
          refactoringSuggestions.push({
            file,
            suggestions
          });
        }
      }
      
      // Analyze development process
      const processOptimizations = await this.optimizeDevelopmentProcess();
      
      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalFiles: analyses.length,
          averageQuality: Math.round(analyses.reduce((sum, a) => sum + a.quality, 0) / analyses.length),
          filesWithIssues: analyses.filter(a => a.issues.length > 0).length,
          highPriorityIssues: analyses.filter(a => a.quality < 50).length
        },
        fileAnalyses: analyses,
        refactoringSuggestions,
        processOptimizations,
        recommendations: this.generateOverallRecommendations(analyses, processOptimizations)
      };
      
      // Save report
      const reportPath = path.join(this.projectRoot, 'reports', 'ai-development-report.json');
      const reportDir = path.dirname(reportPath);
      if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
      }
      
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      this.log(`Development report saved to: ${reportPath}`, 'INFO');
      
      return report;
    } catch (error) {
      this.log(`Error generating development report: ${error.message}`, 'ERROR');
      return null;
    }
  }

  generateOverallRecommendations(analyses, processOptimizations) {
    const recommendations = [];
    
    const lowQualityFiles = analyses.filter(a => a.quality < this.config.thresholds.minCodeQuality);
    if (lowQualityFiles.length > 0) {
      recommendations.push(`Focus on improving ${lowQualityFiles.length} low-quality files first`);
    }
    
    const highComplexityFiles = analyses.filter(a => a.complexity > this.config.thresholds.maxComplexity);
    if (highComplexityFiles.length > 0) {
      recommendations.push(`Refactor ${highComplexityFiles.length} files with high complexity`);
    }
    
    const highPriorityOptimizations = processOptimizations.filter(o => o.priority === 'high');
    if (highPriorityOptimizations.length > 0) {
      recommendations.push(`Address ${highPriorityOptimizations.length} high-priority optimizations`);
    }
    
    return recommendations;
  }

  async run() {
    this.log('AI-Powered Development Assistant starting...', 'INFO');
    
    try {
      const report = await this.generateDevelopmentReport();
      
      if (!report) {
        this.log('Failed to generate development report', 'ERROR');
        return;
      }
      
      this.log(`Analysis complete. Found ${report.summary.totalFiles} files with average quality ${report.summary.averageQuality}`, 'INFO');
      
      if (report.summary.filesWithIssues > 0) {
        this.log(`${report.summary.filesWithIssues} files have issues that need attention`, 'WARN');
      }
      
      if (report.processOptimizations.length > 0) {
        this.log(`Identified ${report.processOptimizations.length} development process optimizations`, 'INFO');
      }
      
      this.log('AI-Powered Development Assistant completed successfully', 'INFO');
      
    } catch (error) {
      this.log(`Error in AI-Powered Development Assistant: ${error.message}`, 'ERROR');
    }
  }
}

// Run the system if called directly
if (require.main === module) {
  const assistant = new AIPoweredDevelopmentAssistant();
  assistant.run().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
}

module.exports = AIPoweredDevelopmentAssistant;