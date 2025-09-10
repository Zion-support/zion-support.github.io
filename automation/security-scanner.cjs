#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const report = {
  timestamp: new Date().toISOString(),
  checks: [],
  vulnerabilities: [],
  overallStatus: 'healthy',
};

console.log('🔍 Starting Security Scan...');

// npm audit (non-fatal)
try {
  const auditJson = execSync('npm audit --json', {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  const audit = JSON.parse(auditJson);
  const vulnCount =
    audit.metadata && audit.metadata.vulnerabilities
      ? Object.values(audit.metadata.vulnerabilities).reduce((a, b) => a + b, 0)
      : 0;
  report.checks.push({
    name: 'npm audit',
    status: vulnCount ? 'warning' : 'pass',
    summary: vulnCount,
  });
  if (vulnCount) {
    report.overallStatus = 'warning';
  }
} catch (e) {
  report.checks.push({
    name: 'npm audit',
    status: 'error',
    error: e.message,
  });
}

// Check for sensitive files
const sensitiveFiles = [
  '.env',
  '.env.local',
  '.env.production',
  'private-key.pem',
  'config.json',
  'secrets.json',
];

const found = sensitiveFiles.filter(f => fs.existsSync(f));
report.checks.push({
  name: 'sensitive files',
  status: found.length ? 'warning' : 'pass',
  found,
});
if (found.length) {
  report.overallStatus = 'warning';
}

// Check for hardcoded secrets
const secretPatterns = [
  /password\s*=\s*['"][^'"]+['"]/gi,
  /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
  /secret\s*=\s*['"][^'"]+['"]/gi,
  /token\s*=\s*['"][^'"]+['"]/gi,
];

let secretCount = 0;
const checkFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    secretPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        secretCount += matches.length;
        report.vulnerabilities.push({
          type: 'hardcoded secret',
          file: filePath,
          count: matches.length,
        });
      }
    });
  } catch (e) {
    // Ignore files that can't be read
  }
};

// Check common file types
const extensions = ['.js', '.ts', '.jsx', '.tsx', '.json', '.env', '.config'];
const checkDirectory = (dir) => {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        checkDirectory(filePath);
      } else if (stat.isFile()) {
        const ext = path.extname(file);
        if (extensions.includes(ext)) {
          checkFile(filePath);
        }
      }
    });
  } catch (e) {
    // Ignore directories that can't be read
  }
};

checkDirectory('.');

if (secretCount > 0) {
  report.overallStatus = 'warning';
  report.checks.push({
    name: 'hardcoded secrets',
    status: 'warning',
    summary: secretCount,
  });
} else {
  report.checks.push({
    name: 'hardcoded secrets',
    status: 'pass',
    summary: 0,
  });
}

// Generate report
const out = `security-scan-report-${Date.now()}.json`;
fs.writeFileSync(out, JSON.stringify(report, null, 2));

console.log(`✅ Security scan completed. Report: ${out}`);
console.log(`📊 Overall Status: ${report.overallStatus}`);
console.log(`🔍 Checks: ${report.checks.length}`);
console.log(`⚠️  Vulnerabilities: ${report.vulnerabilities.length}`);

if (report.overallStatus !== 'healthy') {
  process.exit(1);
}