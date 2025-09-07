<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')
  log(message, type = 'INFO')
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
          this.stats[riskLevel + 'Risk']
      this.log(`Found ${this.stats.vulnerabilitiesFound} dependency vulnerabilities`, 'WARNING'`)
      this.log(`Dependency scan failed: ${error.message}`, 'ERROR'`)
    this.log('Scanning code for security issues...', 'SECURITY')
        pattern: /password\s*=\s*['"][^'']
        pattern: /api[_-]?key\s*=\s*['"][^'']
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
        pattern: /secret\s*=\s*['"][^'']
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<<<<<<< HEAD
        pattern: /secret\s*=\s*['"][^'']
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
        pattern: /secret\s*=\s*['"][^'']
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


>>>>>>> 61d39dd026fe5549161165ead85b131541010508
