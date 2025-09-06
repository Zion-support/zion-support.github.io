#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔒 Security Scanner Started...');

// Scan for security vulnerabilities
function scanSecurity() {
  const vulnerabilities = [];
  
  // Check for common security issues
  const filesToCheck = [
    '/workspace/package.json',
    '/workspace/next.config.js',
    '/workspace/tsconfig.json'
  ];
  
  filesToCheck.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for hardcoded secrets
      if (content.includes('password') || content.includes('secret') || content.includes('key')) {
        vulnerabilities.push({
          file,
          type: 'potential_hardcoded_secret',
          severity: 'high'
        });
      }
      
      // Check for insecure configurations
      if (content.includes('http://') && !content.includes('localhost')) {
        vulnerabilities.push({
          file,
          type: 'insecure_http',
          severity: 'medium'
        });
      }
    }
  });
  
  // Generate security report
  const report = {
    timestamp: new Date().toISOString(),
    vulnerabilities,
    totalVulnerabilities: vulnerabilities.length,
    highSeverity: vulnerabilities.filter(v => v.severity === 'high').length,
    mediumSeverity: vulnerabilities.filter(v => v.severity === 'medium').length,
    lowSeverity: vulnerabilities.filter(v => v.severity === 'low').length
  };
  
  fs.writeFileSync('/workspace/security-report.json', JSON.stringify(report, null, 2));
  console.log(`🔒 Security scan completed. Found ${vulnerabilities.length} potential issues.`);
  
  return report;
}

// Run security scan
scanSecurity();
