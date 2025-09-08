const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
<<<<<<< HEAD
  log(message, type = 'INFO')
          this.stats[riskLevel + 'Risk']
      this.log(`Found ${this.stats.vulnerabilitiesFound} dependency vulnerabilities`, 'WARNING'`)
      this.log(`Dependency scan failed: ${error.message}`, 'ERROR'`)
    this.log('Scanning code for security issues...', 'SECURITY')
        pattern: /password\s*=\s*['"][^'']
        pattern: /api[_-]?key\s*=\s*['"][^'']
=======
<<<<<<< HEAD
  log(message, type = INFO')
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

        pattern: /secret\s*=\s*['"][^'']


<<<<<<< HEAD



=======
        pattern: /secret\s*=\s*['][^]

        pattern: /secret\s*=\s*['"][^']
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
        pattern: /secret\s*=\s*["][^'']

=======
  log(message, type = 'INFO')
<<<<<<< HEAD
=======
<<<<<<< HEAD
      'INFO': 'ℹ'
      'SUCCESS': ''
      'ERROR': ''
      'WARNING': '⚠'
      'SECURITY': '�'
      'CRITICAL': '�'
    }[type] || 'ℹ'
    this.log('Scanning dependencies for vulnerabilities...', 'SECURITY')
      const auditOutput = execSync('npm audit --json')
        stdio: 'pipe'
        encoding: 'utf8'
          const severity = vuln.severity || 'low'
            type: 'dependency'
            description: vuln.description || 'No description available'
            recommendation: vuln.recommendation || 'Update to latest version'
          this.stats[riskLevel + 'Risk']
      this.log(`Found ${this.stats.vulnerabilitiesFound} dependency vulnerabilities`, 'WARNING'`)
      this.log(`Dependency scan failed: ${error.message}`, 'ERROR'`)
    this.log('Scanning code for security issues...', 'SECURITY')
        pattern: /password\s*=\s*['"][^'']
        pattern: /api[_-]?key\s*=\s*['"][^'']
        pattern: /secret\s*=\s*['"][^'']
