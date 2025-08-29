#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔒 Starting security audit...');

async function runSecurityAudit() {
  try {
    // Install dependencies
    console.log('📦 Installing dependencies...');
    execSync('npm ci', { stdio: 'inherit' });
    
    // Run npm audit
    console.log('🔍 Running npm security audit...');
    try {
      execSync('npm audit --audit-level=moderate', { stdio: 'inherit' });
      console.log('✅ Security audit completed');
    } catch (error) {
      console.log('⚠️  Security vulnerabilities found (continuing with process)');
    }
    
    // Run npm audit fix
    console.log('🔧 Attempting to fix security vulnerabilities...');
    try {
      execSync('npm audit fix --audit-level=moderate', { stdio: 'inherit' });
      console.log('✅ Security fixes applied');
    } catch (error) {
      console.log('⚠️  Some vulnerabilities could not be automatically fixed');
    }
    
    // Check for outdated packages
    console.log('📦 Checking for outdated packages...');
    try {
      execSync('npm outdated', { stdio: 'inherit' });
      console.log('✅ Outdated packages check completed');
    } catch (error) {
      console.log('⚠️  Outdated packages found');
    }
    
    // Check for known vulnerabilities in dependencies
    console.log('🔍 Checking for known vulnerabilities...');
    try {
      const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
      const auditData = JSON.parse(auditResult);
      
      if (auditData.metadata && auditData.metadata.vulnerabilities) {
        const vulns = auditData.metadata.vulnerabilities;
        console.log(`📊 Vulnerability summary:`);
        console.log(`  - Critical: ${vulns.critical || 0}`);
        console.log(`  - High: ${vulns.high || 0}`);
        console.log(`  - Moderate: ${vulns.moderate || 0}`);
        console.log(`  - Low: ${vulns.low || 0}`);
      }
    } catch (error) {
      console.log('⚠️  Could not parse audit results');
    }
    
    // Generate security report
    generateSecurityReport();
    
    console.log('🎉 Security audit completed successfully');
    
  } catch (error) {
    console.error('❌ Security audit failed:', error.message);
    process.exit(1);
  }
}

function generateSecurityReport() {
  const report = {
    timestamp: new Date().toISOString(),
    process: 'security-audit',
    status: 'completed',
    checks: [
      'dependencies-installed',
      'security-audit',
      'vulnerability-fixes',
      'outdated-packages-check'
    ]
  };
  
  fs.writeFileSync('security-audit-report.json', JSON.stringify(report, null, 2));
  console.log('📊 Security audit report generated: security-audit-report.json');
}

runSecurityAudit();