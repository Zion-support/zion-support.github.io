#!/usr/bin/env node

/**
 * Comprehensive Code Improvements Script
 * After PR merge resolution, proceed with code improvements
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function execCommand(command, options = {}) {
  try {
    log(`Running: ${command}`, 'cyan');
    return execSync(command, { 
      stdio: 'pipe', 
      encoding: 'utf8',
      timeout: 60000,
      ...options 
    });
  } catch (error) {
    log(`Command failed: ${command}`, 'red');
    log(`Error: ${error.message}`, 'red');
    return null;
  }
}

function checkProjectHealth() {
  log('🔍 Checking project health...', 'blue');
  
  // Check if package.json exists
  if (!fs.existsSync('/workspace/package.json')) {
    log('❌ package.json not found', 'red');
    return false;
  }
  
  // Check if node_modules exists
  if (!fs.existsSync('/workspace/node_modules')) {
    log('⚠️  node_modules not found, installing dependencies...', 'yellow');
    const result = execCommand('npm install');
    if (!result) {
      log('❌ Failed to install dependencies', 'red');
      return false;
    }
  }
  
  log('✅ Project health check passed', 'green');
  return true;
}

function runLinting() {
  log('🔍 Running linting checks...', 'blue');
  
  const result = execCommand('npm run lint');
  if (result) {
    log('✅ Linting passed', 'green');
    return true;
  } else {
    log('⚠️  Linting failed, attempting to fix...', 'yellow');
    
    // Try to fix linting issues
    const fixResult = execCommand('npm run lint:fix');
    if (fixResult) {
      log('✅ Linting issues fixed', 'green');
      return true;
    } else {
      log('❌ Failed to fix linting issues', 'red');
      return false;
    }
  }
}

function runTypeChecking() {
  log('🔍 Running TypeScript type checking...', 'blue');
  
  const result = execCommand('npm run type-check');
  if (result) {
    log('✅ Type checking passed', 'green');
    return true;
  } else {
    log('❌ Type checking failed', 'red');
    return false;
  }
}

function runBuild() {
  log('🔨 Running build process...', 'blue');
  
  // Try fast build first
  let result = execCommand('npm run build:fast');
  if (result) {
    log('✅ Fast build succeeded', 'green');
    return true;
  }
  
  // Try regular build
  result = execCommand('npm run build');
  if (result) {
    log('✅ Build succeeded', 'green');
    return true;
  } else {
    log('❌ Build failed', 'red');
    return false;
  }
}

function runTests() {
  log('🧪 Running tests...', 'blue');
  
  const result = execCommand('npm test');
  if (result) {
    log('✅ Tests passed', 'green');
    return true;
  } else {
    log('⚠️  Tests failed or no tests found', 'yellow');
    return false;
  }
}

function optimizeCode() {
  log('⚡ Optimizing code...', 'blue');
  
  // Check for common optimization opportunities
  const optimizations = [];
  
  // Check for unused imports
  const srcFiles = findFiles('/workspace/src', ['.tsx', '.ts', '.jsx', '.js']);
  let unusedImports = 0;
  
  srcFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      if (line.includes('import') && line.includes('from')) {
        const importMatch = line.match(/import\s+.*\s+from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const importedModule = importMatch[1];
          const remainingContent = lines.slice(index + 1).join('\n');
          
          // Simple check for usage
          if (!remainingContent.includes(importedModule.split('/').pop())) {
            unusedImports++;
          }
        }
      }
    });
  });
  
  if (unusedImports > 0) {
    optimizations.push(`Found ${unusedImports} potentially unused imports`);
  }
  
  // Check for console.log statements
  let consoleLogs = 0;
  srcFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/console\.log/g);
    if (matches) {
      consoleLogs += matches.length;
    }
  });
  
  if (consoleLogs > 0) {
    optimizations.push(`Found ${consoleLogs} console.log statements`);
  }
  
  // Check for TODO comments
  let todos = 0;
  srcFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/TODO|FIXME|HACK/g);
    if (matches) {
      todos += matches.length;
    }
  });
  
  if (todos > 0) {
    optimizations.push(`Found ${todos} TODO/FIXME/HACK comments`);
  }
  
  if (optimizations.length > 0) {
    log('📋 Optimization opportunities found:', 'yellow');
    optimizations.forEach(opt => log(`  - ${opt}`, 'yellow'));
  } else {
    log('✅ No obvious optimization opportunities found', 'green');
  }
  
  return optimizations;
}

function findFiles(dir, extensions) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      items.forEach(item => {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          traverse(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      });
    } catch (error) {
      // Ignore errors (permissions, etc.)
    }
  }
  
  traverse(dir);
  return files;
}

function generateImprovementReport(results) {
  log('📊 Generating improvement report...', 'blue');
  
  const report = {
    timestamp: new Date().toISOString(),
    project: 'Zion Tech Group Website',
    results: results,
    summary: {
      totalChecks: Object.keys(results).length,
      passed: Object.values(results).filter(r => r === true).length,
      failed: Object.values(results).filter(r => r === false).length,
      warnings: Object.values(results).filter(r => r === 'warning').length
    }
  };
  
  const reportPath = '/workspace/improvement-report.json';
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  log(`✅ Improvement report saved to ${reportPath}`, 'green');
  
  // Display summary
  log('\n📊 Improvement Summary:', 'magenta');
  log(`✅ Passed: ${report.summary.passed}`, 'green');
  log(`❌ Failed: ${report.summary.failed}`, 'red');
  log(`⚠️  Warnings: ${report.summary.warnings}`, 'yellow');
  log(`📋 Total Checks: ${report.summary.totalChecks}`, 'blue');
  
  return report;
}

function main() {
  log('🚀 Starting Comprehensive Code Improvements', 'magenta');
  log('=' * 60, 'magenta');
  
  const results = {};
  
  try {
    // Step 1: Check project health
    results.healthCheck = checkProjectHealth();
    
    // Step 2: Run linting
    results.linting = runLinting();
    
    // Step 3: Run type checking
    results.typeChecking = runTypeChecking();
    
    // Step 4: Run build
    results.build = runBuild();
    
    // Step 5: Run tests
    results.tests = runTests();
    
    // Step 6: Optimize code
    const optimizations = optimizeCode();
    results.optimizations = optimizations.length > 0 ? 'warning' : true;
    
    // Step 7: Generate report
    const report = generateImprovementReport(results);
    
    // Step 8: Final summary
    log('\n🎉 Comprehensive Improvements Completed!', 'green');
    
    if (report.summary.failed === 0) {
      log('✅ All checks passed successfully!', 'green');
    } else {
      log(`⚠️  ${report.summary.failed} checks failed, review the report`, 'yellow');
    }
    
    return report;
    
  } catch (error) {
    log(`❌ Fatal error during improvements: ${error.message}`, 'red');
    process.exit(1);
  }
}

// Run the main function
if (require.main === module) {
  main();
}

module.exports = { main, checkProjectHealth, runLinting, runBuild };