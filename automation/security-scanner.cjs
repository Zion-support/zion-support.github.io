#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔒 Security Scanner Automation\n');

const findings = { critical: [], high: [], medium: [], low: [], total: 0 };

function log(message, type = 'info') {
  const timestamp = new Date().toISOString();
  const prefix = type === 'error' ? '❌' : type === 'warning' ? '⚠️' : '✅';
  console.log(`${prefix} [${timestamp}] ${message}`);
}

function scanFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    lines.forEach((line, lineNumber) => {
      // Check for common security issues
      if (line.includes('password') && line.includes('=') && line.includes('"')) {
        findings.critical.push({
          file: filePath,
          line: lineNumber + 1,
          content: line.trim(),
          type: 'hardcoded-secret',
          severity: 'critical'
        });
        findings.total++;
      }
      
      if (line.includes('eval(')) {
        findings.high.push({
          file: filePath,
          line: lineNumber + 1,
          content: line.trim(),
          type: 'unsafe-eval',
          severity: 'high'
        });
        findings.total++;
      }
      
      if (line.includes('http://') && !line.includes('localhost')) {
        findings.medium.push({
          file: filePath,
          line: lineNumber + 1,
          content: line.trim(),
          type: 'insecure-http',
          severity: 'medium'
        });
        findings.total++;
      }
    });
  } catch (error) {
    log(`Error scanning file ${filePath}: ${error.message}`, 'error');
  }
}

function scanDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath);
    
    items.forEach(item => {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules')) {
        scanDirectory(fullPath);
      } else if (stat.isFile() && ['.js', '.jsx', '.ts', '.tsx'].includes(path.extname(fullPath))) {
        scanFile(fullPath);
      }
    });
  } catch (error) {
    log(`Error scanning directory ${dirPath}: ${error.message}`, 'error');
  }
}

function runDependencyAudit() {
  log('Running dependency security audit...');
  
  try {
    execSync('npm audit --audit-level=moderate', { stdio: 'pipe' });
    log('Dependency audit completed');
  } catch (error) {
    log('Dependency audit found vulnerabilities', 'warning');
    findings.medium.push({
      file: 'package.json',
      line: 0,
      content: 'Dependency vulnerabilities found',
      type: 'dependency-vulnerability',
      severity: 'medium'
    });
    findings.total++;
  }
}

function generateSecurityReport() {
  log('Generating security report...');
  
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      total: findings.total,
      critical: findings.critical.length,
      high: findings.high.length,
      medium: findings.medium.length,
      low: findings.low.length
    },
    findings: findings
  };
  
  fs.writeFileSync('security-report.json', JSON.stringify(report, null, 2));
  log('Security report saved to security-report.json');
  
  console.log('\n🔒 Security Scan Summary:');
  console.log(`Total Issues: ${findings.total}`);
  console.log(`Critical: ${findings.critical.length}`);
  console.log(`High: ${findings.high.length}`);
  console.log(`Medium: ${findings.medium.length}`);
  console.log(`Low: ${findings.low.length}`);
  
  return report;
}

async function main() {
  try {
    log('Starting security scanning automation...');
    
    // Scan source directories
    ['src/', 'pages/', 'components/', 'utils/'].forEach(scanPath => {
      if (fs.existsSync(scanPath)) {
        log(`Scanning ${scanPath}...`);
        scanDirectory(scanPath);
      }
    });
    
    runDependencyAudit();
    generateSecurityReport();
    
    if (findings.critical.length === 0 && findings.high.length === 0) {
      log('Security scan completed - no critical issues found!');
      process.exit(0);
    } else {
      log('Security scan completed with issues found', 'warning');
      process.exit(1);
    }
    
  } catch (error) {
    log(`Security scanning failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main, findings };