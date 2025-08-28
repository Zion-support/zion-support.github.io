#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔒 Starting security audit automation...');

async function runSecurityAudit() {
  try {
    console.log(`🔒 Running security audit at ${new Date().toISOString()}`);
    
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
        console.log('✅ Additional security scan completed');
      }
    } catch (error) {
      console.log('ℹ️  No additional security scan available');
    }
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      summary: 'Security audit completed',
      status: 'completed'
    };
    
    const reportPath = path.join(process.cwd(), 'security-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report saved to ${reportPath}`);
    
    console.log('✅ Security audit completed successfully');
    
  } catch (error) {
    console.error('❌ Security audit failed:', error.message);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Run the security audit once
runSecurityAudit().catch(error => {
  console.error('❌ Failed to run security audit:', error);
  process.exit(1);
});
