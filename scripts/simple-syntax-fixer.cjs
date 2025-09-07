#!/usr/bin/env node

/**
 * Simple Syntax Fixer
 * Fixes basic syntax errors across the codebase
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting simple syntax fixing...');

// Configuration
const config = {
  outputDir: path.join(__dirname, '..', 'syntax-fix-reports'),
  extensions: ['.js', '.ts', '.jsx', '.tsx'],
  excludeDirs: ['node_modules', '.next', 'dist', 'build', 'out', 'coverage', 'recovered-branches'],
  maxFiles: 50 // Limit to prevent overwhelming
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
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
    
    if (stat.isDirectory() && !config.excludeDirs.includes(item) && !item.startsWith('.')) {
      files.push(...getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Fix basic syntax issues
function fixBasicSyntax(content) {
  let fixed = content;
  let changes = 0;
  
  // Fix missing semicolons after import statements
  const importRegex = /import\s+.*?from\s+['"][^'"]+['"](?!\s*;)/g;
  const importMatches = fixed.match(importRegex);
  if (importMatches) {
    importMatches.forEach(match => {
      fixed = fixed.replace(match, match + ';');
      changes++;
    });
  }
  
  // Fix missing semicolons after export statements
  const exportRegex = /export\s+.*?(?<!;)$/gm;
  const exportMatches = fixed.match(exportRegex);
  if (exportMatches) {
    exportMatches.forEach(match => {
      if (!match.trim().endsWith(';') && !match.trim().endsWith('{') && !match.trim().endsWith('}')) {
        fixed = fixed.replace(match, match + ';');
        changes++;
      }
    });
  }
  
  // Fix React imports
  if (content.includes('React') && !content.includes("import React")) {
    fixed = "import React from 'react';\n" + fixed;
    changes++;
  }
  
  // Fix missing quotes in className attributes
  const classNameRegex = /className=([^"'][^>\s]*)/g;
  const classNameMatches = fixed.match(classNameRegex);
  if (classNameMatches) {
    classNameMatches.forEach(match => {
      const newMatch = match.replace(/className=([^"'][^>\s]*)/, 'className="$1"');
      fixed = fixed.replace(match, newMatch);
      changes++;
    });
  }
  
  // Comment out console.log statements
  const consoleRegex = /console\.log\(/g;
  const consoleMatches = fixed.match(consoleRegex);
  if (consoleMatches) {
    fixed = fixed.replace(/console\.log\(/g, '// console.log(');
    changes += consoleMatches.length;
  }
  
  return { content: fixed, changes };
}

// Process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const result = fixBasicSyntax(content);
    
    // Write back if changes were made
    if (result.changes > 0) {
      fs.writeFileSync(filePath, result.content, 'utf8');
      console.log(`✅ Fixed ${result.changes} issues in ${path.relative(__dirname, filePath)}`);
    }
    
    return {
      file: path.relative(__dirname, filePath),
      changes: result.changes,
      success: true
    };
  } catch (error) {
    console.log(`❌ Failed to process ${path.relative(__dirname, filePath)}: ${error.message}`);
    return {
      file: path.relative(__dirname, filePath),
      changes: 0,
      success: false,
      error: error.message
    };
  }
}

// Main execution
function runSyntaxFixer() {
  const srcDir = path.join(__dirname, '..', 'src');
  const componentsDir = path.join(__dirname, '..', 'components');
  const pagesDir = path.join(__dirname, '..', 'pages');
  
  const allDirs = [srcDir, componentsDir, pagesDir].filter(dir => fs.existsSync(dir));
  const allFiles = allDirs.flatMap(dir => getAllFiles(dir, config.extensions));
  
  // Limit files to prevent overwhelming
  const filesToProcess = allFiles.slice(0, config.maxFiles);
  
  console.log(`🔍 Processing ${filesToProcess.length} files (limited from ${allFiles.length})`);
  
  const results = filesToProcess.map(processFile);
  
  const summary = {
    timestamp: new Date().toISOString(),
    totalFiles: filesToProcess.length,
    successfulFiles: results.filter(r => r.success).length,
    failedFiles: results.filter(r => !r.success).length,
    totalChanges: results.reduce((sum, r) => sum + r.changes, 0),
    results: results
  };
  
  // Save report
  const filename = `simple-syntax-fix-report-${Date.now()}.json`;
  const filepath = path.join(config.outputDir, filename);
  fs.writeFileSync(filepath, JSON.stringify(summary, null, 2));
  
  console.log(`📊 Simple Syntax Fix Summary:`);
  console.log(`   Total Files: ${summary.totalFiles}`);
  console.log(`   Successful: ${summary.successfulFiles}`);
  console.log(`   Failed: ${summary.failedFiles}`);
  console.log(`   Total Changes: ${summary.totalChanges}`);
  console.log(`   Report saved to: ${filename}`);
  
  return summary;
}

// Run the syntax fixer
try {
  const summary = runSyntaxFixer();
  console.log('✅ Simple syntax fixing completed');
} catch (error) {
  console.error('❌ Simple syntax fixing failed:', error.message);
  process.exit(1);
}