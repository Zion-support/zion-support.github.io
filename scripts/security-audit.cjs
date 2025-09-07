#!/usr/bin/env node

/**
 * Security Audit Script
 * Performs comprehensive security audit
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Starting security audit...');

// Security audit configuration
const config = {
  outputDir: path.join(__dirname, '..', 'security-reports'),
  checks: {
    npmAudit: true,
    dependencyCheck: true,
    filePermissions: true,
    sensitiveData: true
  }
};

// Ensure output directory exists
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
}

// Run npm audit
function runNpmAudit() {
  try {
    console.log('🔍 Running npm audit...');
    const result = execSync('npm audit --json', { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (error) {
    console.log('⚠️  NPM audit failed:', error.message);
    return { error: error.message };
  }
}

// Check for sensitive data
function checkSensitiveData() {
  const sensitivePatterns = [
    /password\s*=\s*['"][^'"]+['"]/gi,
    /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
    /secret\s*=\s*['"][^'"]+['"]/gi,
    /token\s*=\s*['"][^'"]+['"]/gi
  ];

  const issues = [];
  const srcDir = path.join(__dirname, '..', 'src');

  if (fs.existsSync(srcDir)) {
    const files = getAllFiles(srcDir);
    
    files.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      sensitivePatterns.forEach(pattern => {
        const matches = content.match(pattern);
        if (matches) {
          issues.push({
            file: path.relative(__dirname, file),
            matches: matches.length,
            pattern: pattern.toString()
          });
        }
      });
    });
  }

  return issues;
}

// Get all files recursively
function getAllFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath));
    } else if (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  });
  
  return files;
}

// Main security audit
function runSecurityAudit() {
  const audit = {
    timestamp: new Date().toISOString(),
    npmAudit: runNpmAudit(),
    sensitiveData: checkSensitiveData(),
    summary: {
      totalIssues: 0,
      criticalIssues: 0,
      warnings: 0
    }
  };

  // Calculate summary
  if (audit.npmAudit.vulnerabilities) {
    audit.summary.totalIssues += Object.keys(audit.npmAudit.vulnerabilities).length;
  }
  
  audit.summary.totalIssues += audit.sensitiveData.length;
  audit.summary.warnings = audit.sensitiveData.length;

  return audit;
}

// Save audit results
function saveAuditResults(audit) {
  const filename = `security-audit-${Date.now()}.json`;
  const filepath = path.join(config.outputDir, filename);
  
  fs.writeFileSync(filepath, JSON.stringify(audit, null, 2));
  console.log(`🔒 Security audit saved to: ${filename}`);
  
  // Print summary
  console.log(`📊 Security Audit Summary:`);
  console.log(`   Total Issues: ${audit.summary.totalIssues}`);
  console.log(`   Critical Issues: ${audit.summary.criticalIssues}`);
  console.log(`   Warnings: ${audit.summary.warnings}`);
}

// Main execution
try {
  const audit = runSecurityAudit();
  saveAuditResults(audit);
  console.log('✅ Security audit completed');
} catch (error) {
  console.error('❌ Security audit failed:', error.message);
  process.exit(1);
}