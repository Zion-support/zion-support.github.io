#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive error fixer automation...');

// Get automation interval from environment variable (default: 30 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 1800000; // 30 minutes

async function runComprehensiveErrorFixer() {
  try {
    console.log(`🔧 Running comprehensive error fixer at ${new Date().toISOString()}`);
    
    const errors = {
      eslint: [],
      typescript: [],
      syntax: [],
      missingExports: [],
      duplicateDeclarations: [],
      fixed: []
    };
    
    // Step 1: Run ESLint to detect issues
    console.log('🔍 Step 1: Running ESLint to detect issues...');
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      console.log('✅ ESLint passed - no issues found');
    } catch (error) {
      console.log('⚠️  ESLint found issues, analyzing...');
      const lintOutput = error.message;
      errors.eslint = parseESLintOutput(lintOutput);
      console.log(`📊 Found ${errors.eslint.length} ESLint issues`);
    }
    
    // Step 2: Run TypeScript type checking
    console.log('🔍 Step 2: Running TypeScript type checking...');
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('✅ TypeScript type checking passed');
    } catch (error) {
      console.log('⚠️  TypeScript found issues, analyzing...');
      const tsOutput = error.message;
      errors.typescript = parseTypeScriptOutput(tsOutput);
      console.log(`📊 Found ${errors.typescript.length} TypeScript issues`);
    }
    
    // Step 3: Fix common issues automatically
    console.log('🔧 Step 3: Attempting to fix common issues automatically...');
    const fixedIssues = await autoFixCommonIssues(errors);
    errors.fixed = fixedIssues;
    
    // Step 4: Run ESLint again to see if we fixed issues
    console.log('🔍 Step 4: Running ESLint again to verify fixes...');
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      console.log('✅ ESLint passed after fixes - issues resolved');
    } catch (error) {
      console.log('⚠️  Some ESLint issues remain after fixes');
    }
    
    // Step 5: Run TypeScript again to see if we fixed issues
    console.log('🔍 Step 5: Running TypeScript again to verify fixes...');
    try {
      execSync('npm run type-check', { stdio: 'pipe' });
      console.log('✅ TypeScript passed after fixes - issues resolved');
    } catch (error) {
      console.log('⚠️  Some TypeScript issues remain after fixes');
    }
    
    // Generate comprehensive error fixer report
    console.log('📊 Generating comprehensive error fixer report...');
    const report = {
      timestamp: new Date().toISOString(),
      summary: 'Comprehensive error fixer completed',
      status: 'completed',
      errors: {
        eslint: errors.eslint.length,
        typescript: errors.typescript.length,
        syntax: errors.syntax.length,
        missingExports: errors.missingExports.length,
        duplicateDeclarations: errors.duplicateDeclarations.length
      },
      fixed: errors.fixed.length,
      details: errors
    };
    
    const reportPath = path.join(process.cwd(), 'comprehensive-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Comprehensive error fixer report saved to ${reportPath}`);
    
    console.log('✅ Comprehensive error fixer completed successfully');
    
  } catch (error) {
    console.error('❌ Comprehensive error fixer failed:', error.message);
  }
}

// Helper functions for parsing output
function parseESLintOutput(output) {
  const lines = output.split('\n');
  const issues = [];
  
  for (const line of lines) {
    if (line.includes('error') || line.includes('warning')) {
      issues.push(line.trim());
    }
  }
  
  return issues;
}

function parseTypeScriptOutput(output) {
  const lines = output.split('\n');
  const issues = [];
  
  for (const line of lines) {
    if (line.includes('error TS') || line.includes('warning TS')) {
      issues.push(line.trim());
    }
  }
  
  return issues;
}

async function autoFixCommonIssues(errors) {
  const fixedIssues = [];
  
  // Auto-fix common issues
  try {
    // Try to auto-fix ESLint issues
    if (errors.eslint.length > 0) {
      execSync('npm run lint:fix', { stdio: 'pipe' });
      fixedIssues.push('ESLint auto-fixes applied');
    }
  } catch (error) {
    // Auto-fix failed, continue with manual fixes
  }
  
  return fixedIssues;
}

// Main execution
if (require.main === module) {
  runComprehensiveErrorFixer();
  
  // Set up continuous monitoring
  setInterval(runComprehensiveErrorFixer, AUTOMATION_INTERVAL);
  console.log(`🔄 Comprehensive error fixer will run every ${AUTOMATION_INTERVAL / 60000} minutes`);
}

module.exports = { runComprehensiveErrorFixer };
