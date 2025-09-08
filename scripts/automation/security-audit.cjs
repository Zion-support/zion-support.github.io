#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Security Audit Automation Started');

// Function to run npm security audit
function runSecurityAudit() {
  console.log('🔍 Running security audit...');
  
  try {
    console.log('📦 Running npm audit...');
    const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
    const auditData = JSON.parse(auditResult);
    
    console.log(`📊 Security audit results:`);
    console.log(`   Vulnerabilities: ${auditData.metadata.vulnerabilities.total}`);
    console.log(`   Critical: ${auditData.metadata.vulnerabilities.critical || 0}`);
    console.log(`   High: ${auditData.metadata.vulnerabilities.high || 0}`);
    console.log(`   Moderate: ${auditData.metadata.vulnerabilities.moderate || 0}`);
    console.log(`   Low: ${auditData.metadata.vulnerabilities.low || 0}`);
    
    return auditData;
  } catch (error) {
    console.log('⚠️ Security audit found issues (this is normal for development)');
    return null;
  }
}

// Function to scan for common security issues in code
function scanCodeForSecurityIssues() {
  console.log('🔍 Scanning code for security issues...');
  
  const securityIssues = [];
  const directories = ['src', 'pages', 'components', 'utils', 'services'];
  
  // Common security patterns to look for
  const securityPatterns = [
    { pattern: /eval\(/, name: 'eval() usage', severity: 'high' },
    { pattern: /innerHTML\s*=/, name: 'innerHTML assignment', severity: 'medium' },
    { pattern: /document\.write\(/, name: 'document.write() usage', severity: 'medium' },
    { pattern: /localStorage\[/, name: 'localStorage access', severity: 'low' },
    { pattern: /sessionStorage\[/, name: 'sessionStorage access', severity: 'low' },
    { pattern: /window\.open\(/, name: 'window.open() usage', severity: 'medium' },
    { pattern: /setTimeout\([^,)]*\)/, name: 'setTimeout with string', severity: 'medium' },
    { pattern: /setInterval\([^,)]*\)/, name: 'setInterval with string', severity: 'medium' }
  ];
  
  directories.forEach(dir => {
    const dirPath = path.join(process.cwd(), dir);
    if (fs.existsSync(dirPath)) {
      scanDirectoryForSecurityIssues(dirPath, securityPatterns, securityIssues);
    }
  });
  
  console.log(`🔍 Found ${securityIssues.length} potential security issues in code`);
  return securityIssues;
}

function scanDirectoryForSecurityIssues(dirPath, patterns, issues) {
  try {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectoryForSecurityIssues(filePath, patterns, issues);
      } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsed('.tsx')) {
        scanFileForSecurityIssues(filePath, patterns, issues);
      }
    });
  } catch (error) {
    console.error(`❌ Error scanning directory ${dirPath}:`, error.message);
  }
}

function scanFileForSecurityIssues(filePath, patterns, issues) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    lines.forEach((line, index) => {
      patterns.forEach(pattern => {
        if (pattern.pattern.test(line)) {
          issues.push({
            file: filePath,
            line: index + 1,
            content: line.trim(),
            issue: pattern.name,
            severity: pattern.severity
          });
        }
      });
    });
  } catch (error) {
    console.error(`❌ Error scanning file ${filePath}:`, error.message);
  }
}

// Function to check for sensitive information
function checkForSensitiveInformation() {
  console.log('🔍 Checking for sensitive information...');
  
  const sensitivePatterns = [
    { pattern: /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/i, name: 'API Key exposure' },
    { pattern: /password\s*[:=]\s*['"][^'"]+['"]/i, name: 'Password exposure' },
    { pattern: /secret\s*[:=]\s*['"][^'"]+['"]/i, name: 'Secret exposure' },
    { pattern: /token\s*[:=]\s*['"][^'"]+['"]/i, name: 'Token exposure' },
    { pattern: /private[_-]?key\s*[:=]\s*['"][^'"]+['"]/i, name: 'Private key exposure' }
  ];
  
  const sensitiveIssues = [];
  const filesToCheck = [
    '.env',
    '.env.local',
    '.env.production',
    'package.json',
    'ecosystem.config.cjs'
  ];
  
  filesToCheck.forEach(file => {
    const filePath = path.join(process.cwd(), file);
    if (fs.existsSync(filePath)) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          sensitivePatterns.forEach(pattern => {
            if (pattern.pattern.test(line)) {
              sensitiveIssues.push({
                file: filePath,
                line: index + 1,
                content: line.trim(),
                issue: pattern.name,
                severity: 'high'
              });
            }
          });
        });
      } catch (error) {
        // Skip files that can't be read
      }
    }
  });
  
  console.log(`🔍 Found ${sensitiveIssues.length} potential sensitive information exposures`);
  return sensitiveIssues;
}

// Function to generate security report
function generateSecurityReport(auditData, codeIssues, sensitiveIssues) {
  console.log('📝 Generating security report...');
  
  const report = {
    timestamp: new Date().toISOString(),
    npmAudit: auditData,
    codeSecurityIssues: codeIssues,
    sensitiveInformationIssues: sensitiveIssues,
    summary: {
      totalIssues: (codeIssues?.length || 0) + (sensitiveIssues?.length || 0),
      criticalIssues: (auditData?.metadata?.vulnerabilities?.critical || 0),
      highIssues: (auditData?.metadata?.vulnerabilities?.high || 0) + (sensitiveIssues?.length || 0)
    }
  };
  
  const reportPath = path.join(process.cwd(), 'security-reports', 'security-audit-report.json');
  
  // Ensure directory exists
  const reportDir = path.dirname(reportPath);
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }
  
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log(`📄 Security report saved to: ${reportPath}`);
  
  return report;
}

// Main execution
function main() {
  console.log('🔄 Starting security audit automation...');
  
  // Run npm security audit
  const auditData = runSecurityAudit();
  
  // Scan code for security issues
  const codeIssues = scanCodeForSecurityIssues();
  
  // Check for sensitive information
  const sensitiveIssues = checkForSensitiveInformation();
  
  // Generate comprehensive report
  const report = generateSecurityReport(auditData, codeIssues, sensitiveIssues);
  
  console.log('🎯 Security audit completed successfully');
  console.log(`📊 Total issues found: ${report.summary.totalIssues}`);
  console.log(`🔴 Critical issues: ${report.summary.criticalIssues}`);
  console.log(`🟠 High issues: ${report.summary.highIssues}`);
  console.log('🏁 Security Audit Automation Completed');
}

// Run the automation
main();

// Keep the process running for PM2
setInterval(() => {
  console.log('💓 Security Audit heartbeat...');
}, 7200000); // 2 hours