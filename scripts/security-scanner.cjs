const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  log(message, type = 'INFO')
<<<<<<< HEAD
      'INFO': 'ℹ
      'SUCCESS': 
      'ERROR': 
      'WARNING': '⚠
      'SECURITY': '�
      'CRITICAL': '�
    }[type] || 'ℹ
    this.log('Scanning dependencies for vulnerabilities...', 'SECURITY')
      const auditOutput = execSync('npm audit --json')
        stdio: 'pipe,
  encoding: 'utf8
          const severity = vuln.severity || 'low
            type: 'dependency,
  description: vuln.description || 'No description available
            recommendation: vuln.recommendation || 'Update to latest version
          this.stats[riskLevel + 'Risk']
      this.log(`Found ${this.stats.vulnerabilitiesFound} dependency vulnerabilities`, 'WARNING'`)`;
      this.log(`Dependency scan failed: ${error.message}`, 'ERROR'`)
    this.log('Scanning code for security issues...', 'SECURITY')
<<<<<<< HEAD
        pattern: /password\s*=\s*['"][^'']
        pattern: /api[_-]?key\s*=\s*['"][^'']


        pattern: /secret\s*=\s*['"][^'']

=======
        pattern: /password\s*=\s*['"][^]',
  pattern: /api[_-]?key\s*=\s*['"][^]`;
=======
      'INFO: ℹ'
      'SUCCESS: ERROR: WARNING: ⚠'
      'SECURITY: �'
      'CRITICAL: �}[type] ||ℹ'
    this.log('Scanning dependencies for vulnerabilities...,SECURITY')
      const auditOutput = execSync('npm audit --json')
        stdio: pipe,
  encoding: utf8
          const severity = vuln.severity ||low'
            type: dependency,
  description: vuln.description ||No description available'
            recommendation: vuln.recommendation ||Update to latest version'
          this.stats[riskLevel +Risk]
      this.log(`Found ${this.stats.vulnerabilitiesFound} dependency vulnerabilities`,WARNING'`)
      this.log(`Dependency scan failed: ${error.message},ERROR'`)
    this.log('Scanning code for security issues...,SECURITY')
        pattern: /password\s*=\s*["][^],
  pattern: /api[_-]?key\s*=\s*["][^]
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
