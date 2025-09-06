#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Code Quality Analyzer Started...');

// Analyze code quality
function analyzeCodeQuality() {
  const issues = [];
  const stats = {
    totalFiles: 0,
    totalLines: 0,
    functions: 0,
    classes: 0,
    comments: 0
  };
  
  // Scan source files
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !['node_modules', '.git', '.next'].includes(file)) {
        scanDirectory(filePath);
      } else if (file.match(/\.(js|jsx|ts|tsx)$/)) {
        stats.totalFiles++;
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        stats.totalLines += lines.length;
        
        // Count functions
        const functionMatches = content.match(/function\s+\w+|const\s+\w+\s*=\s*\(/g);
        if (functionMatches) stats.functions += functionMatches.length;
        
        // Count classes
        const classMatches = content.match(/class\s+\w+/g);
        if (classMatches) stats.classes += classMatches.length;
        
        // Count comments
        const commentMatches = content.match(/\/\/|\/\*|\*\//g);
        if (commentMatches) stats.comments += commentMatches.length;
        
        // Check for code quality issues
        lines.forEach((line, index) => {
          // Check for long lines
          if (line.length > 120) {
            issues.push({
              file: filePath,
              line: index + 1,
              type: 'long_line',
              message: 'Line exceeds 120 characters'
            });
          }
          
          // Check for console.log in production code
          if (line.includes('console.log') && !filePath.includes('test')) {
            issues.push({
              file: filePath,
              line: index + 1,
              type: 'console_log',
              message: 'Console.log found in production code'
            });
          }
        });
      }
    });
  }
  
  // Scan source directories
  ['/workspace/src', '/workspace/pages_minimal'].forEach(dir => {
    if (fs.existsSync(dir)) {
      scanDirectory(dir);
    }
  });
  
  // Generate quality report
  const report = {
    timestamp: new Date().toISOString(),
    stats,
    issues,
    qualityScore: Math.max(0, 100 - (issues.length * 2)),
    recommendations: [
      'Consider breaking down long functions',
      'Add more comments to complex code',
      'Remove console.log statements from production code',
      'Consider using TypeScript for better type safety'
    ]
  };
  
  fs.writeFileSync('/workspace/code-quality-report.json', JSON.stringify(report, null, 2));
  console.log(`🔍 Code quality analysis completed. Quality score: ${report.qualityScore}/100`);
  
  return report;
}

// Run code quality analysis
analyzeCodeQuality();
