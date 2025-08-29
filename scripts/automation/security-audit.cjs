#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Security Audit Automation Started');

async function runSecurityAudit() {
  try {
    console.log('🔒 Running security audit...');
    
    const securityChecks = [];
    
    // Run npm audit
    console.log('📦 Running npm audit...');
    try {
      const npmAudit = execSync('npm audit --audit-level=moderate', { encoding: 'utf8' });
      securityChecks.push({
        type: 'npm-audit',
        result: 'Security vulnerabilities checked'
      });
    } catch (error) {
      console.log('⚠️ NPM audit found vulnerabilities or failed');
      securityChecks.push({
        type: 'npm-audit',
        result: 'Vulnerabilities found or check failed'
      });
    }
    
    // Check for sensitive files
    console.log('🔍 Checking for sensitive files...');
    const sensitivePatterns = [
      '.env',
      'secrets.json',
      'config.json',
      'credentials.json'
    ];
    
    const foundSensitive = [];
    for (const pattern of sensitivePatterns) {
      if (fs.existsSync(pattern)) {
        foundSensitive.push(pattern);
      }
    }
    
    if (foundSensitive.length > 0) {
      securityChecks.push({
        type: 'sensitive-files',
        result: `Found sensitive files: ${foundSensitive.join(', ')}`
      });
    }
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalChecks: securityChecks.length,
      checks: securityChecks
    };
    
    fs.writeFileSync('security-audit-report.json', JSON.stringify(report, null, 2));
    console.log('📊 Report generated: security-audit-report.json');
    
  } catch (error) {
    console.error('❌ Error in security audit:', error);
  }
}

// Run the automation
runSecurityAudit().then(() => {
  console.log('✅ Security Audit Automation Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Security Audit Automation Failed:', error);
  process.exit(1);
});