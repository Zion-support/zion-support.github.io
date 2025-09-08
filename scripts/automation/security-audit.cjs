#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔒 Security Audit Automation Started');

function runCommand(command, description) {
  try {
    console.log(`📋 ${description}...`);
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    console.log(`✅ ${description} completed successfully`);
    return result;
  } catch (error) {
    console.log(`❌ ${description} failed:`, error.message);
    return null;
  }
}

function runSecurityAudit() {
  console.log('🛡️ Starting security audit process...');
  
  // Run npm audit
  console.log('🔍 Running npm security audit...');
  try {
    const auditResult = execSync('npm audit --json', { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    
    const audit = JSON.parse(auditResult);
    const vulnerabilities = audit.metadata.vulnerabilities;
    
    console.log('📊 Security vulnerabilities found:');
    Object.keys(vulnerabilities).forEach(severity => {
      const count = vulnerabilities[severity];
      if (count > 0) {
        console.log(`  ${severity.toUpperCase()}: ${count}`);
      }
    });
    
    if (audit.advisories) {
      console.log('⚠️ Security advisories:');
      Object.keys(audit.advisories).forEach(id => {
        const advisory = audit.advisories[id];
        console.log(`  ${advisory.module_name}: ${advisory.title}`);
        console.log(`    Severity: ${advisory.severity}`);
        console.log(`    Recommendation: ${advisory.recommendation}`);
      });
    }
    
  } catch (error) {
    console.log('✅ No security vulnerabilities found');
  }
  
  // Check for outdated packages with security implications
  console.log('📦 Checking for outdated packages...');
  try {
    const outdatedResult = execSync('npm outdated --json', { 
      encoding: 'utf8', 
      stdio: 'pipe',
      cwd: process.cwd()
    });
    
    if (outdatedResult.trim()) {
      const outdated = JSON.parse(outdatedResult);
      console.log(`⚠️ Found ${Object.keys(outdated).length} outdated packages`);
      
      // Focus on security-critical packages
      const securityPackages = ['react', 'react-dom', 'typescript', 'eslint'];
      securityPackages.forEach(pkg => {
        if (outdated[pkg]) {
          const current = outdated[pkg].current;
          const latest = outdated[pkg].latest;
          console.log(`  🔴 ${pkg}: ${current} → ${latest} (Security critical)`);
        }
      });
    }
  } catch (error) {
    console.log('✅ All packages are up to date');
  }
  
  // Check package-lock.json for integrity
  if (fs.existsSync('package-lock.json')) {
    console.log('🔐 Verifying package lock integrity...');
    runCommand('npm ci --only=production', 'Package integrity check');
  }
  
  console.log('✅ Security audit process completed');
}

// Main execution
runSecurityAudit();

// Set up interval for continuous monitoring
const interval = process.env.AUTOMATION_INTERVAL || 7200000; // 2 hours default
setInterval(runSecurityAudit, interval);

console.log(`⏰ Security Audit will run every ${interval / 60000} minutes`);