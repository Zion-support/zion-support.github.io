#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔒 Starting Security Scan...');

const report = {
  timestamp: new Date().toISOString(),
  checks: [],
  vulnerabilities: [],
  overallStatus: 'healthy'
};

// npm audit (non-fatal)
try {
  const auditJson = execSync('npm audit --json', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  const audit = JSON.parse(auditJson);
  const vulnCount = audit.metadata && audit.metadata.vulnerabilities
    ? Object.values(audit.metadata.vulnerabilities).reduce((a, b) => a + b, 0)
    : 0;
  report.checks.push({ name: 'npm audit', status: vulnCount ? 'warning' : 'pass', summary: vulnCount });
  if (vulnCount) {
    report.overallStatus = 'warning';
  }
} catch (e) {
  report.checks.push({ name: 'npm audit', status: 'error', error: e.message });
}

// sensitive files
const sensitiveFiles = ['.env', '.env.local', '.env.production', 'private-key.pem'];
const found = sensitiveFiles.filter((f) => fs.existsSync(f));
report.checks.push({ name: 'sensitive files', status: found.length ? 'warning' : 'pass', found });
if (found.length) report.overallStatus = 'warning';

const out = `security-scan-report-${Date.now()}.json`;
fs.writeFileSync(out, JSON.stringify(report, null, 2));
console.log(`✅ Security scan completed. Report: ${out}`);