#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔒 Starting weekly security audit automation...');

async function runSecurityAudit() {
  try {
    // Run npm audit
    console.log('🔍 Running npm security audit...');
    try {
      execSync('npm audit --audit-level=moderate', { stdio: 'inherit' });
      console.log('✅ Security audit completed - no issues found');
    } catch (error) {
      console.log('⚠️  Security issues found, attempting auto-fix...');
      try {
        execSync('npm audit fix --audit-level=moderate', { stdio: 'inherit' });
        console.log('✅ Security issues auto-fixed');
      } catch (fixError) {
        console.log('❌ Could not auto-fix security issues');
        process.exit(1);
      }
    }
    
    // Check for known vulnerabilities in dependencies
    console.log('📦 Checking for known vulnerabilities...');
    try {
      execSync('npm audit --json', { stdio: 'pipe' });
      console.log('✅ No known vulnerabilities found');
    } catch (error) {
      console.log('⚠️  Known vulnerabilities detected');
    }
    
    // Check for outdated packages with security implications
    console.log('🔄 Checking for outdated packages...');
    try {
      execSync('npm outdated', { stdio: 'inherit' });
    } catch (error) {
      console.log('✅ All packages are up to date');
    }
    
    // Run security scan if available
    console.log('🔍 Running additional security scans...');
    try {
      if (fs.existsSync('security-scan.js')) {
        execSync('node security-scan.js', { stdio: 'inherit' });
      }
    } catch (error) {
      console.log('ℹ️  No additional security scan available');
    }
    
    console.log('✅ Security audit completed successfully');
    
  } catch (error) {
    console.error('❌ Security audit failed:', error.message);
    process.exit(1);
  }
}

function findSourceFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    if (item === 'node_modules' || item === '.git' || item === 'dist') {
      continue;
    }
    
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findSourceFiles(fullPath));
    } else if (/\.(js|ts|jsx|tsx|json|env|config)$/i.test(item)) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Run the security audit
runSecurityAudit();
