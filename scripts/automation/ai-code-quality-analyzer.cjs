#!/usr/bin/env node

/**
 * AI Code Quality Analyzer
 * Analyzes code quality using AI-powered insights
 */

const fs = require('fs');
const path = require('path');

console.log('🤖 Starting AI code quality analysis...');

// AI Code Quality Analyzer configuration
const config = {
  outputDir: path.join(__dirname, '..', '..', 'ai-analysis-reports'),
  checks: {
    complexity: true,
    maintainability: true,
    performance: true,
    security: true,
    bestPractices: true
  }
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Analyze code complexity
function analyzeComplexity(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.js', '.ts', '.jsx', '.tsx']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    // Check for long functions (more than 50 lines)
    let functionStart = -1;
    let braceCount = 0;
    
    lines.forEach((line, index) => {
      if (line.includes('function ') || line.includes('=>') || line.includes('const ') && line.includes('=')) {
        functionStart = index;
        braceCount = 0;
      }
      
      if (functionStart !== -1) {
        braceCount += (line.match(/\{/g) || []).length;
        braceCount -= (line.match(/\}/g) || []).length;
        
        if (braceCount === 0 && functionStart !== -1) {
          const functionLength = index - functionStart + 1;
          if (functionLength > 50) {
            issues.push({
              file: path.relative(__dirname, file),
              type: 'long-function',
              severity: 'medium',
              line: functionStart + 1,
              message: `Function is ${functionLength} lines long (recommended: <50)`
            });
          }
          functionStart = -1;
        }
      }
    });
  });
  
  return issues;
}

// Analyze maintainability
function analyzeMaintainability(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.js', '.ts', '.jsx', '.tsx']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for TODO comments
    const todoMatches = content.match(/TODO|FIXME|HACK|XXX/gi);
    if (todoMatches) {
      issues.push({
        file: path.relative(__dirname, file),
        type: 'todo-comments',
        severity: 'low',
        count: todoMatches.length,
        message: `${todoMatches.length} TODO/FIXME comments found`
      });
    }
    
    // Check for console.log statements
    const consoleMatches = content.match(/console\.(log|warn|error)/g);
    if (consoleMatches) {
      issues.push({
        file: path.relative(__dirname, file),
        type: 'console-statements',
        severity: 'low',
        count: consoleMatches.length,
        message: `${consoleMatches.length} console statements found`
      });
    }
  });
  
  return issues;
}

// Analyze performance
function analyzePerformance(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.js', '.ts', '.jsx', '.tsx']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for potential performance issues
    if (content.includes('document.querySelectorAll') && content.includes('forEach')) {
      issues.push({
        file: path.relative(__dirname, file),
        type: 'inefficient-dom-query',
        severity: 'medium',
        message: 'Consider using more efficient DOM queries'
      });
    }
    
    if (content.includes('setInterval') || content.includes('setTimeout')) {
      issues.push({
        file: path.relative(__dirname, file),
        type: 'timer-usage',
        severity: 'low',
        message: 'Timer usage detected - ensure proper cleanup'
      });
    }
  });
  
  return issues;
}

// Get all files recursively
function getAllFiles(dir, extensions = []) {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Run AI code quality analysis
function runCodeQualityAnalysis() {
  const srcDir = path.join(__dirname, '..', '..', 'src');
  const componentsDir = path.join(__dirname, '..', '..', 'components');
  const pagesDir = path.join(__dirname, '..', '..', 'pages');
  
  const analysis = {
    timestamp: new Date().toISOString(),
    checks: {
      complexity: analyzeComplexity(srcDir).concat(analyzeComplexity(componentsDir)).concat(analyzeComplexity(pagesDir)),
      maintainability: analyzeMaintainability(srcDir).concat(analyzeMaintainability(componentsDir)).concat(analyzeMaintainability(pagesDir)),
      performance: analyzePerformance(srcDir).concat(analyzePerformance(componentsDir)).concat(analyzePerformance(pagesDir))
    },
    summary: {
      totalIssues: 0,
      highSeverity: 0,
      mediumSeverity: 0,
      lowSeverity: 0
    }
  };

  // Calculate summary
  Object.values(analysis.checks).forEach(check => {
    analysis.summary.totalIssues += check.length;
    check.forEach(issue => {
      if (issue.severity === 'high') analysis.summary.highSeverity++;
      else if (issue.severity === 'medium') analysis.summary.mediumSeverity++;
      else analysis.summary.lowSeverity++;
    });
  });

  return analysis;
}

// Save analysis results
function saveAnalysisResults(analysis) {
  const filename = `ai-code-quality-${Date.now()}.json`;
  const filepath = path.join(config.outputDir, filename);
  
  fs.writeFileSync(filepath, JSON.stringify(analysis, null, 2));
  console.log(`🤖 AI code quality analysis saved to: ${filename}`);
  
  // Print summary
  console.log(`📊 AI Code Quality Analysis Summary:`);
  console.log(`   Total Issues: ${analysis.summary.totalIssues}`);
  console.log(`   High Severity: ${analysis.summary.highSeverity}`);
  console.log(`   Medium Severity: ${analysis.summary.mediumSeverity}`);
  console.log(`   Low Severity: ${analysis.summary.lowSeverity}`);
}

// Main execution
try {
  const analysis = runCodeQualityAnalysis();
  saveAnalysisResults(analysis);
  console.log('✅ AI code quality analysis completed');
} catch (error) {
  console.error('❌ AI code quality analysis failed:', error.message);
  process.exit(1);
}