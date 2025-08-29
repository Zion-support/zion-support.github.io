#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('✅ Starting continuous quality checks automation...');

// Get automation interval from environment variable (default: 3 hours)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 10800000; // 3 hours

async function runQualityChecks() {
  try {
    console.log(`✅ Running quality checks at ${new Date().toISOString()}`);
    
    // Build the project first
    console.log('🏗️ Building project for quality analysis...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build completed');
    } catch (error) {
      console.log('⚠️  Build failed but continuing...');
      return;
    }
    
    // Run linting
    console.log('🔍 Running linting checks...');
    let lintIssues = 0;
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      console.log('✅ Linting passed');
    } catch (error) {
      console.log('⚠️  Linting found issues');
      lintIssues = 1;
    }
    
    // Run type checking
    console.log('🔍 Running type checking...');
    let typeIssues = 0;
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('✅ Type checking passed');
    } catch (error) {
      console.log('⚠️  Type checking found issues');
      typeIssues = 1;
    }
    
    // Run tests
    console.log('🧪 Running tests...');
    let testIssues = 0;
    try {
      execSync('npm test', { stdio: 'pipe' });
      console.log('✅ Tests passed');
    } catch (error) {
      console.log('⚠️  Tests failed');
      testIssues = 1;
    }
    
    // Check code coverage if available
    console.log('📊 Checking code coverage...');
    let coverageIssues = 0;
    try {
      if (fs.existsSync('coverage/lcov-report/index.html')) {
        console.log('✅ Code coverage report found');
      } else {
        console.log('ℹ️  No code coverage report found');
      }
    } catch (error) {
      console.log('ℹ️  Code coverage check not available');
    }
    
    // Check for code quality issues
    console.log('🔍 Scanning for code quality issues...');
    const qualityIssues = findQualityIssues('./src');
    if (qualityIssues.length > 0) {
      console.log(`⚠️  Found ${qualityIssues.length} potential quality issues:`);
      qualityIssues.forEach(issue => {
        console.log(`  - ${issue.file}:${issue.line}: ${issue.issue}`);
      });
    } else {
      console.log('✅ No obvious quality issues found');
    }
    
    // Check for duplicate code
    console.log('🔍 Checking for duplicate code...');
    const duplicateIssues = findDuplicateCode('./src');
    if (duplicateIssues.length > 0) {
      console.log(`⚠️  Found ${duplicateIssues.length} potential duplicate code patterns:`);
      duplicateIssues.forEach(issue => {
        console.log(`  - ${issue.file}:${issue.line}: ${issue.issue}`);
      });
    } else {
      console.log('✅ No obvious duplicate code found');
    }
    
    // Check for unused imports
    console.log('🔍 Checking for unused imports...');
    const unusedImports = findUnusedImports('./src');
    if (unusedImports.length > 0) {
      console.log(`⚠️  Found ${unusedImports.length} potentially unused imports:`);
      unusedImports.forEach(import => {
        console.log(`  - ${import.file}:${import.line}: ${import.import}`);
      });
    } else {
      console.log('✅ No obvious unused imports found');
    }
    
    // Generate quality report
    console.log('📊 Generating quality checks report...');
    const report = {
      timestamp: new Date().toISOString(),
      lintIssues: lintIssues,
      typeIssues: typeIssues,
      testIssues: testIssues,
      coverageIssues: coverageIssues,
      qualityIssues: qualityIssues.length,
      duplicateIssues: duplicateIssues.length,
      unusedImports: unusedImports.length,
      summary: `Quality checks completed. Lint: ${lintIssues}, Type: ${typeIssues}, Tests: ${testIssues}`,
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'quality-checks-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Quality checks report saved to ${reportPath}`);
    
    console.log('✅ Continuous quality checks completed successfully');
    
  } catch (error) {
    console.error('❌ Continuous quality checks failed:', error.message);
    
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      summary: 'Quality checks failed',
      status: 'error'
    };
    
    const reportPath = path.join(process.cwd(), 'quality-checks-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

function findQualityIssues(srcPath) {
  const issues = [];
  
  if (!fs.existsSync(srcPath)) return issues;
  
  function scanDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        scanDirectory(itemPath);
      } else if (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.tsx')) {
        const content = fs.readFileSync(itemPath, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          // Check for common quality issues
          if (line.includes('TODO') || line.includes('FIXME')) {
            issues.push({
              file: itemPath,
              line: index + 1,
              issue: 'TODO/FIXME comment found'
            });
          }
          
          if (line.includes('console.log') || line.includes('console.error')) {
            issues.push({
              file: itemPath,
              line: index + 1,
              issue: 'Console statement found (should be removed in production)'
            });
          }
          
          if (line.includes('debugger;')) {
            issues.push({
              file: itemPath,
              line: index + 1,
              issue: 'Debugger statement found'
            });
          }
          
          if (line.includes('var ') && !line.includes('var ')) {
            issues.push({
              file: itemPath,
              line: index + 1,
              issue: 'Consider using const/let instead of var'
            });
          }
        });
      }
    });
  }
  
  scanDirectory(srcPath);
  return issues;
}

function findDuplicateCode(srcPath) {
  const issues = [];
  
  if (!fs.existsSync(srcPath)) return issues;
  
  // Simple duplicate code detection (basic implementation)
  const codeBlocks = new Map();
  
  function scanDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        scanDirectory(itemPath);
      } else if (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.tsx')) {
        const content = fs.readFileSync(itemPath, 'utf8');
        const lines = content.split('\n');
        
        // Look for repeated code blocks
        for (let i = 0; i < lines.length - 2; i++) {
          const block = lines.slice(i, i + 3).join('\n');
          if (block.length > 50) { // Only consider blocks longer than 50 chars
            if (codeBlocks.has(block)) {
              issues.push({
                file: itemPath,
                line: i + 1,
                issue: 'Potential duplicate code block'
              });
            } else {
              codeBlocks.set(block, itemPath);
            }
          }
        }
      }
    });
  }
  
  scanDirectory(srcPath);
  return issues;
}

function findUnusedImports(srcPath) {
  const issues = [];
  
  if (!fs.existsSync(srcPath)) return issues;
  
  function scanDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);
    items.forEach(item => {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        scanDirectory(itemPath);
      } else if (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.tsx')) {
        const content = fs.readFileSync(itemPath, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          // Look for import statements
          const importMatch = line.match(/import\s+.*?from\s+['"]([^'"]+)['"]/);
          if (importMatch) {
            const importPath = importMatch[1];
            const importName = line.match(/import\s+(\w+)/);
            
            if (importName && !content.includes(importName[1])) {
              issues.push({
                file: itemPath,
                line: index + 1,
                import: importName[1]
              });
            }
          }
        });
      }
    });
  }
  
  scanDirectory(srcPath);
  return issues;
}

// Run the quality checks immediately
runQualityChecks();

// Set up continuous execution
setInterval(runQualityChecks, AUTOMATION_INTERVAL);

console.log(`✅ Quality checks automation started. Running every ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
console.log('Press Ctrl+C to stop the automation');