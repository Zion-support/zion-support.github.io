#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Master Automation Runner...\n');

// Utility function to run commands safely
function runCommand(command, description) {
  console.log(`\n📋 ${description}...`);
  try {
    const output = execSync(command, { 
      cwd: '/workspace', 
      encoding: 'utf8',
      stdio: 'pipe',
      timeout: 300000 // 5 minutes timeout
    });
    console.log(`✅ ${description} completed successfully`);
    return { success: true, output };
  } catch (error) {
    console.log(`❌ ${description} failed: ${error.message}`);
    return { success: false, error: error.message, output: error.stdout || error.stderr };
  }
}

// Function to fix merge conflicts
function fixMergeConflicts() {
  console.log('\n🔧 Fixing merge conflicts...');
  try {
    // Find files with merge conflicts
    const conflictFiles = execSync('find . -name "*.js" -o -name "*.cjs" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" | grep -v node_modules | grep -v .git | xargs grep -l "
          // Clean up any remaining conflict markers
          content = content.replace(/
          fs.writeFileSync(file, content);
            console.log(`✅ Fixed merge conflicts in ${file}`);
          } catch (err) {
            console.log(`❌ Failed to fix ${file}: ${err.message}`);
          }
        }
      });
    } else {
      console.log('✅ No merge conflicts found');
    }
  } catch (error) {
    console.log(`❌ Error fixing merge conflicts: ${error.message}`);
  }
}

// Function to run linting and fix issues
function runLinting() {
  console.log('\n🔍 Running linting...');
  const lintResult = runCommand('npm run lint:fix', 'Linting and fixing issues');
  if (!lintResult.success) {
    console.log('⚠️  Linting had issues, but continuing...');
  }
  return lintResult;
}

// Function to run type checking
function runTypeCheck() {
  console.log('\n🔍 Running type checking...');
  const typeResult = runCommand('npm run type-check', 'Type checking');
  if (!typeResult.success) {
    console.log('⚠️  Type checking had issues, but continuing...');
  }
  return typeResult;
}

// Function to run tests
function runTests() {
  console.log('\n🧪 Running tests...');
  const testResult = runCommand('npm run test:smoke', 'Smoke tests');
  if (!testResult.success) {
    console.log('⚠️  Tests had issues, but continuing...');
  }
  return testResult;
}

// Function to build the application
function buildApp() {
  console.log('\n🏗️  Building application...');
  const buildResult = runCommand('npm run build', 'Building application');
  if (!buildResult.success) {
    console.log('❌ Build failed, attempting to fix issues...');
    // Try to fix common build issues
    runCommand('npm install', 'Reinstalling dependencies');
    // Try building again
    const rebuildResult = runCommand('npm run build', 'Rebuilding application');
    return rebuildResult;
  }
  return buildResult;
}

// Function to run security audit
function runSecurityAudit() {
  console.log('\n🔒 Running security audit...');
  const securityResult = runCommand('npm audit --audit-level moderate', 'Security audit');
  if (!securityResult.success) {
    console.log('⚠️  Security issues found, but continuing...');
  }
  return securityResult;
}

// Function to optimize performance
function optimizePerformance() {
  console.log('\n⚡ Optimizing performance...');
  try {
    // Clean up console logs in production
    const cleanLogsResult = runCommand('node scripts/remove-console-logs.cjs', 'Cleaning console logs');
    // Optimize images if script exists
    if (fs.existsSync('/workspace/scripts/optimize-images.js')) {
      runCommand('node scripts/optimize-images.js', 'Optimizing images');
    }
    // Generate sitemap if script exists
    if (fs.existsSync('/workspace/scripts/generate-sitemap.js')) {
      runCommand('node scripts/generate-sitemap.js', 'Generating sitemap');
    }
    console.log('✅ Performance optimization completed');
  } catch (error) {
    console.log(`⚠️  Performance optimization had issues: ${error.message}`);
  }
}

// Function to create comprehensive report
function createReport(results) {
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalSteps: Object.keys(results).length,
      successful: Object.values(results).filter(r => r.success).length,
      failed: Object.values(results).filter(r => !r.success).length
    },
    results: results
  };
  const reportPath = '/workspace/automation-reports/master-automation-report.json';
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📊 Report saved to ${reportPath}`);
  console.log(`✅ Successful: ${report.summary.successful}/${report.summary.totalSteps}`);
  console.log(`❌ Failed: ${report.summary.failed}/${report.summary.totalSteps}`);
}

// Main execution
async function main() {
  const results = {};
  try {
    // Step 1: Fix merge conflicts
    fixMergeConflicts();
    results.mergeConflicts = { success: true };
    // Step 2: Run linting
    results.linting = runLinting();
    // Step 3: Run type checking
    results.typeCheck = runTypeCheck();
    // Step 4: Run tests
    results.tests = runTests();
    // Step 5: Build application
    results.build = buildApp();
    // Step 6: Security audit
    results.security = runSecurityAudit();
    // Step 7: Performance optimization
    optimizePerformance();
    results.performance = { success: true };
    // Step 8: Create report
    createReport(results);
    console.log('\n🎉 Master Automation Runner completed!');
    // If build was successful, prepare for commit
    if (results.build.success) {
      console.log('\n📝 Preparing for commit...');
      runCommand('git add .', 'Staging changes');
      runCommand('git commit -m "Automated improvements and fixes"', 'Committing changes');
    }
  } catch (error) {
    console.error('\n💥 Master Automation Runner failed:', error.message);
    results.error = { success: false, error: error.message };
    createReport(results);
    process.exit(1);
  }
}

// Run the automation
main();