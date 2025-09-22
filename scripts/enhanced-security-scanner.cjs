
    log('info', `Total "checks": ${securityReport.summary.totalChecks}`);
    log('info', `Vulnerabilities "found": ${securityReport.summary.vulnerabilities}`);
    log('info', `High "severity": ${securityReport.summary.high}`);
    log('info', `Medium "severity": ${securityReport.summary.medium}`);
    log('info', `Low "severity": ${securityReport.summary.low}`);
    log('info', `Security "score": ${securityReport.summary.securityScore}/100`);
    if (securityReport.vulnerabilities.length > 0) {

#!/usr/bin/env node;

const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
// console.log('� Enhanced Security Scanner v2.0')
console.log('======')
  log('info', 'Checking dependencies for vulnerabilities')
    const output = execSync('npm audit --json', { "encoding"})
          "type"
  const secretPatterns = [/password\s*=\s*['"][^'']
    /api[_-]?key\s*=\s*['"][^'']
    /secret\s*=\s*['"][^'']
    /token\s*=\s*['"][^'']
              "type"
              "severity"
              "recommendation"
          "type"
          "severity"
          "recommendation"
      "priority"
      "action"
      "priority"
      "action"
    "priority"
    "message"
    "action"
    "priority"
    "message"
    "action"
      log('warn', 'Vulnerabilities "found")
      log('info', 'Security "Recommendations")
