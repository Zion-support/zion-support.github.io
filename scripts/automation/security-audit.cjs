#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔒 Security Audit Automation Started');

async function runSecurityAudit() {
  try {
    console.log('📋 Running npm audit...');
    
    // Run npm audit
    try {
      execSync('npm audit', { stdio: 'inherit' });
      console.log('✅ Security audit completed');
    } catch (error) {
      console.log('⚠️ Security vulnerabilities found');
      
      // Try to fix automatically
      try {
        console.log('🔧 Attempting automatic security fixes...');
        execSync('npm audit fix', { stdio: 'inherit' });
        console.log('✅ Automatic security fixes applied');
      } catch (fixError) {
        console.log('❌ Automatic fixes failed, manual intervention required');
      }
    }

    // Check for outdated packages
    console.log('📋 Checking for outdated packages...');
    try {
      execSync('npm outdated', { stdio: 'inherit' });
      console.log('✅ Package version check completed');
    } catch (error) {
      console.log('📦 Some packages may be outdated');
    }

    // Check for known vulnerabilities in dependencies
    console.log('📋 Running security scan...');
    try {
      execSync('npm audit --audit-level=moderate', { stdio: 'inherit' });
      console.log('✅ Security scan completed');
    } catch (error) {
      console.log('⚠️ Moderate or higher security issues detected');
    }

    console.log('🎯 Security Audit completed');
    
  } catch (error) {
    console.error('❌ Security Audit failed:', error.message);
  }
}

// Run immediately
runSecurityAudit();

// Set up interval if running in PM2
if (process.env.AUTOMATION_INTERVAL) {
  const interval = parseInt(process.env.AUTOMATION_INTERVAL);
  setInterval(runSecurityAudit, interval);
  console.log(`⏰ Scheduled to run every ${interval / 1000} seconds`);
}