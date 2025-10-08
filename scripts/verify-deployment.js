#!/usr/bin/env node

/**
 * Deployment Verification Script
 * Runs comprehensive checks before deployment
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

const CHECKS = {
  lint: { command: 'npm run lint', name: 'Linting', critical: true },
  typeCheck: { command: 'npm run type-check', name: 'Type Check', critical: true },
  test: { command: 'npm run test', name: 'Tests', critical: true },
  build: { command: 'npm run build', name: 'Build', critical: true },
};

let results = {
  passed: 0,
  failed: 0,
  warnings: 0,
  checks: []
};

async function runCheck(checkName, config) {
  console.log(`\n🔍 Running ${config.name}...`);
  
  try {
    const { stdout, stderr } = await execAsync(config.command);
    
    console.log(`✅ ${config.name} passed`);
    results.passed++;
    results.checks.push({
      name: config.name,
      status: 'passed',
      critical: config.critical
    });
    
    if (stdout) console.log(stdout);
    if (stderr) console.warn(stderr);
    
    return true;
  } catch (error) {
    console.error(`❌ ${config.name} failed`);
    console.error(error.message);
    
    if (config.critical) {
      results.failed++;
      results.checks.push({
        name: config.name,
        status: 'failed',
        critical: true,
        error: error.message
      });
      return false;
    } else {
      results.warnings++;
      results.checks.push({
        name: config.name,
        status: 'warning',
        critical: false,
        error: error.message
      });
      return true;
    }
  }
}

async function checkBundleSize() {
  console.log('\n📦 Checking bundle sizes...');
  
  try {
    const distPath = path.join(process.cwd(), 'dist');
    const files = await fs.readdir(distPath, { recursive: true });
    
    let totalSize = 0;
    const jsFiles = files.filter(f => f.endsWith('.js'));
    
    for (const file of jsFiles) {
      const filePath = path.join(distPath, file);
      const stats = await fs.stat(filePath);
      totalSize += stats.size;
    }
    
    const totalSizeMB = (totalSize / 1024 / 1024).toFixed(2);
    console.log(`📊 Total JS bundle size: ${totalSizeMB} MB`);
    
    if (totalSize > 500 * 1024) { // 500KB warning
      console.warn('⚠️  Warning: Bundle size is large. Consider code splitting.');
      results.warnings++;
    } else {
      console.log('✅ Bundle size is within acceptable limits');
    }
    
    return true;
  } catch (error) {
    console.warn('⚠️  Could not check bundle sizes:', error.message);
    return true;
  }
}

async function checkEnvironmentFiles() {
  console.log('\n🔐 Checking environment configuration...');
  
  try {
    const envExample = await fs.readFile('.env.example', 'utf-8');
    
    try {
      await fs.access('.env');
      console.log('✅ .env file exists');
    } catch {
      console.warn('⚠️  Warning: .env file not found. Using defaults.');
      results.warnings++;
    }
    
    return true;
  } catch (error) {
    console.warn('⚠️  Could not verify environment files:', error.message);
    return true;
  }
}

async function generateReport() {
  console.log('\n' + '='.repeat(60));
  console.log('📋 DEPLOYMENT VERIFICATION REPORT');
  console.log('='.repeat(60));
  
  console.log(`\n✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`⚠️  Warnings: ${results.warnings}`);
  
  console.log('\n📊 Check Details:');
  results.checks.forEach(check => {
    const icon = check.status === 'passed' ? '✅' : check.status === 'failed' ? '❌' : '⚠️ ';
    console.log(`${icon} ${check.name}: ${check.status.toUpperCase()}`);
    if (check.error) {
      console.log(`   Error: ${check.error.substring(0, 100)}...`);
    }
  });
  
  console.log('\n' + '='.repeat(60));
  
  if (results.failed > 0) {
    console.log('❌ VERIFICATION FAILED - Cannot deploy');
    console.log('Please fix the issues above before deploying.');
    return false;
  } else if (results.warnings > 0) {
    console.log('⚠️  VERIFICATION PASSED WITH WARNINGS');
    console.log('Review warnings before deploying.');
    return true;
  } else {
    console.log('✅ ALL CHECKS PASSED - Ready for deployment!');
    return true;
  }
}

async function main() {
  console.log('🚀 Starting deployment verification...\n');
  console.log('This may take a few minutes...\n');
  
  // Run all checks
  for (const [checkName, config] of Object.entries(CHECKS)) {
    const passed = await runCheck(checkName, config);
    
    // Stop on critical failures
    if (!passed && config.critical) {
      console.log('\n❌ Critical check failed. Stopping verification.');
      break;
    }
  }
  
  // Additional checks
  await checkBundleSize();
  await checkEnvironmentFiles();
  
  // Generate report
  const success = await generateReport();
  
  process.exit(success ? 0 : 1);
}

// Run the verification
main().catch(error => {
  console.error('\n❌ Verification script failed:', error);
  process.exit(1);
});
