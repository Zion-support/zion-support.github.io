#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function runSecurityScan() {
  console.log('🔒 Starting Security Scan...');
  
  const securityReport = {
    timestamp: new Date().toISOString(),
    checks: [],
    vulnerabilities: [],
    recommendations: [],
    overallStatus: 'healthy'
  };

  try {
    // Check for known vulnerabilities in dependencies
    console.log('📋 Checking for known vulnerabilities...');
    try {
      const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
      const auditData = JSON.parse(auditResult);
      
      securityReport.checks.push({
        name: 'NPM Audit',
        status: auditData.vulnerabilities ? 'warning' : 'pass',
        details: auditData
      });
      
      if (auditData.vulnerabilities) {
        securityReport.vulnerabilities.push(...Object.values(auditData.vulnerabilities));
        securityReport.overallStatus = 'warning';
      }
    } catch (error) {
      securityReport.checks.push({
        name: 'NPM Audit',
        status: 'error',
        error: error.message
      });
    }

    // Check for sensitive files
    console.log('📋 Checking for sensitive files...');
    const sensitiveFiles = [
      '.env',
      '.env.local',
      '.env.production',
      'config/secrets.json',
      'private-key.pem',
      'database-credentials.json'
    ];

    const foundSensitiveFiles = sensitiveFiles.filter(file => {
      try {
        return fs.existsSync(file);
      } catch {
        return false;
      }
    });

    securityReport.checks.push({
      name: 'Sensitive Files Check',
      status: foundSensitiveFiles.length > 0 ? 'warning' : 'pass',
      details: { foundFiles: foundSensitiveFiles }
    });

    if (foundSensitiveFiles.length > 0) {
      securityReport.recommendations.push('Remove or secure sensitive files from repository');
      securityReport.overallStatus = 'warning';
    }

    // Check for hardcoded secrets in code
    console.log('📋 Checking for hardcoded secrets...');
    const secretPatterns = [
      /password\s*=\s*['"][^'"]+['"]/gi,
      /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
      /secret\s*=\s*['"][^'"]+['"]/gi,
      /token\s*=\s*['"][^'"]+['"]/gi
    ];

    const codeFiles = findCodeFiles('.');
    let foundSecrets = [];

    for (const file of codeFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        for (const pattern of secretPatterns) {
          const matches = content.match(pattern);
          if (matches) {
            foundSecrets.push({
              file: file,
              matches: matches
            });
          }
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }

    securityReport.checks.push({
      name: 'Hardcoded Secrets Check',
      status: foundSecrets.length > 0 ? 'warning' : 'pass',
      details: { foundSecrets: foundSecrets }
    });

    if (foundSecrets.length > 0) {
      securityReport.recommendations.push('Remove hardcoded secrets and use environment variables');
      securityReport.overallStatus = 'warning';
    }

    // Check file permissions
    console.log('📋 Checking file permissions...');
    const criticalFiles = ['package.json', 'package-lock.json', 'yarn.lock'];
    const permissionIssues = [];

    for (const file of criticalFiles) {
      try {
        const stats = fs.statSync(file);
        const mode = stats.mode & parseInt('777', 8);
        if (mode > parseInt('644', 8)) {
          permissionIssues.push({
            file: file,
            permissions: mode.toString(8)
          });
        }
      } catch (error) {
        // File doesn't exist, skip
      }
    }

    securityReport.checks.push({
      name: 'File Permissions Check',
      status: permissionIssues.length > 0 ? 'warning' : 'pass',
      details: { permissionIssues: permissionIssues }
    });

    if (permissionIssues.length > 0) {
      securityReport.recommendations.push('Review file permissions for sensitive files');
    }

    // Save report
    const reportPath = 'security-scan-report.json';
    fs.writeFileSync(reportPath, JSON.stringify(securityReport, null, 2));
    
    console.log(`✅ Security scan completed`);
    console.log(`📄 Report saved to: ${reportPath}`);
    console.log(`📊 Security Status: ${securityReport.overallStatus.toUpperCase()}`);
    
    if (securityReport.vulnerabilities.length > 0) {
      console.log(`⚠️  Found ${securityReport.vulnerabilities.length} vulnerabilities`);
    }
    
    if (securityReport.recommendations.length > 0) {
      console.log(`💡 Recommendations: ${securityReport.recommendations.length}`);
    }

    return securityReport;

  } catch (error) {
    console.error('❌ Security scan failed:', error.message);
    throw error;
  }
}

function findCodeFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx', '.json']) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules, .git, and other common directories
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
            traverse(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  traverse(dir);
  return files;
}

// Run if called directly
if (require.main === module) {
  runSecurityScan().catch(console.error);
}

module.exports = { runSecurityScan };