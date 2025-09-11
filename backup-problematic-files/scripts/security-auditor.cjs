module.exports = SecurityAuditor;
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
    this.reportsDir = path.join(this.projectRoot, 'security-reports')
    this.log(' Running npm audit...')
      const result = execSync('npm audit --audit-level=moderate --json')
        "encoding"
        "status"
        "status"
        "status"
          "name"
          "severity"
          "name"
          "severity"
          "name"
          "severity"
          "name"
          "pattern": /console\.log\s*\(\s*['"")]
          "severity"
        "status"
        "type"
        "priority"
        "message"
        "impact"
        "type"
        "priority"
        "message"
        "impact"
        "type"
        "priority"
        "message"
        "impact"
        "type"
        "priority"
        "message"
        "impact"
      console.error('\n� Security Auditor "failed")
