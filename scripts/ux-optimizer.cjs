#!/usr/bin/env node

/**
 * UX Optimizer
 * Optimizes user experience elements
 */

const fs = require('fs');
const path = require('path');

console.log('🎨 Starting UX optimization...');

// UX Optimizer configuration
const config = {
  outputDir: path.join(__dirname, '..', 'ux-reports'),
  checks: {
    responsiveDesign: true,
    loadingStates: true,
    errorHandling: true,
    userFeedback: true,
    navigation: true
  }
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Check responsive design
function checkResponsiveDesign(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.jsx', '.tsx', '.js', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for responsive classes
    if (content.includes('className=') && !content.includes('sm:') && !content.includes('md:') && !content.includes('lg:') && !content.includes('xl:')) {
      issues.push({
        file: path.relative(__dirname, file),
        type: 'missing-responsive-classes',
        severity: 'medium',
        message: 'Consider adding responsive design classes'
      });
    }
  });
  
  return issues;
}

// Check loading states
function checkLoadingStates(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.jsx', '.tsx', '.js', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for async operations without loading states
    if (content.includes('fetch(') || content.includes('axios.') || content.includes('useEffect')) {
      if (!content.includes('loading') && !content.includes('isLoading') && !content.includes('spinner')) {
        issues.push({
          file: path.relative(__dirname, file),
          type: 'missing-loading-state',
          severity: 'medium',
          message: 'Consider adding loading states for async operations'
        });
      }
    }
  });
  
  return issues;
}

// Check error handling
function checkErrorHandling(dir) {
  const issues = [];
  const files = getAllFiles(dir, ['.jsx', '.tsx', '.js', '.ts']);
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check for try-catch blocks
    if (content.includes('fetch(') || content.includes('axios.') || content.includes('async')) {
      if (!content.includes('try') && !content.includes('catch') && !content.includes('ErrorBoundary')) {
        issues.push({
          file: path.relative(__dirname, file),
          type: 'missing-error-handling',
          severity: 'high',
          message: 'Consider adding error handling for async operations'
        });
      }
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

// Run UX optimization analysis
function runUXOptimization() {
  const srcDir = path.join(__dirname, '..', 'src');
  const componentsDir = path.join(__dirname, '..', 'components');
  const pagesDir = path.join(__dirname, '..', 'pages');
  
  const analysis = {
    timestamp: new Date().toISOString(),
    checks: {
      responsiveDesign: checkResponsiveDesign(srcDir).concat(checkResponsiveDesign(componentsDir)).concat(checkResponsiveDesign(pagesDir)),
      loadingStates: checkLoadingStates(srcDir).concat(checkLoadingStates(componentsDir)).concat(checkLoadingStates(pagesDir)),
      errorHandling: checkErrorHandling(srcDir).concat(checkErrorHandling(componentsDir)).concat(checkErrorHandling(pagesDir))
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
  const filename = `ux-optimization-${Date.now()}.json`;
  const filepath = path.join(config.outputDir, filename);
  
  fs.writeFileSync(filepath, JSON.stringify(analysis, null, 2));
  console.log(`🎨 UX optimization analysis saved to: ${filename}`);
  
  // Print summary
  console.log(`📊 UX Optimization Summary:`);
  console.log(`   Total Issues: ${analysis.summary.totalIssues}`);
  console.log(`   High Severity: ${analysis.summary.highSeverity}`);
  console.log(`   Medium Severity: ${analysis.summary.mediumSeverity}`);
  console.log(`   Low Severity: ${analysis.summary.lowSeverity}`);
}

// Main execution
try {
  const analysis = runUXOptimization();
  saveAnalysisResults(analysis);
  console.log('✅ UX optimization completed');
} catch (error) {
  console.error('❌ UX optimization failed:', error.message);
  process.exit(1);
}