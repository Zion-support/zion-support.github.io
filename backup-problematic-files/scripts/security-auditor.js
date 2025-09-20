
,
#!/usr/bin/env node const fs = class SecurityAuditor { constructor() { this.issues = [], this.fixes = []} checkPackageJson() { try { const packageJson = JSON.parse(fs.readFileSync('package.jsonutf8')), if (!packageJson.scripts.audit) { this.issues.push('Missing security audit script')} const vulnerablePackages = ['lodashmoment'], vulnerablePackages.forEach(pkg => { if (packageJson.dependencies && packageJson.dependencies[pkg]) { this.issues.push(`Potentially vulnerable package: ${pkg}`)} })} catch (error) { this.issues.push(`Error reading package.json: ${error.message}`)} } checkNextConfig() { try { if (fs.existsSync('next.config.js')) { const content = fs.readFileSync('next.config.jsutf8'), if (!content.includes('poweredByHeader')) { this.issues.push('X-Powered-By header not disabled')} if (!content.includes('X-Content-Type-Options')) { this.issues.push('Security headers not configured')} } catch (error) { this.issues.push(`Error reading next.config.js: ${error.message}`)} generateReport() { const report = { timestamp: new Date().toISOString(),issues: this.issues,fixes: this.fixes,summary: { totalIssues: this.issues.length,fixesApplied: this.fixes.length } fs.writeFileSync('security-report.json',JSON.stringify(report,null,2)) } } if (require.main === module) { const auditor = new SecurityAuditor(), auditor.checkPackageJson(), auditor.checkNextConfig(), auditor.generateReport()} module.exports = SecurityAuditor,
#!/usr/bin/env node,
const { execSync } = require('child_process'),
const fs = require('fs'),
class SecurityAuditor {,
  constructor() {,
    this.issues = [],
    this.fixes = [],
  }
  async runAudit() {,
    console.log('🔒 Running security audit...'),
    try {,
      const result = execSync('npm audit --json', { encoding: 'utf8' }),
      const audit = JSON.parse(result),
      if (audit.vulnerabilities) {,
        Object.keys(audit.vulnerabilities).forEach(pkg => {,
          const vuln = audit.vulnerabilities[pkg],
          this.issues.push({,
            package: pkg,
            severity: vuln.severity,
            description: vuln.description}),
        }),
      }
      console.log(`Found ${this.issues.length} security issues`),
    } catch (error) {,
      console.log('No security issues found or audit failed'),
    }
  }
  async fixIssues() {,
    if (this.issues.length > 0) {,
      console.log('🔧 Attempting to fix security issues...'),
      try {,
        execSync('npm audit fix', { stdio: 'inherit' }),
        this.fixes.push('Applied automatic security fixes'),
        console.log('✅ Security fixes applied'),
      } catch (error) {,
        console.log('❌ Could not apply automatic fixes'),
      }
    }
  }
,
        this.issues.push('Missing security audit script')}
      // Check for known vulnerable packages,
      const vulnerablePackages = ['lodashmoment'],
      vulnerablePackages.forEach(pkg => {,
        if (packageJson.dependencies && packageJson.dependencies[pkg]) {,
          this.issues.push(`Potentially vulnerable package: ${pkg}`),
      if (!packageJson && packageJson.scripts.audit) {,
        this && this.issues.push('Missing security audit script'),
      }
        this && this.issues.push('Missing security audit script'),
      }
        this && this.issues.push('Missing security audit script'),
      }
        this && this.issues.push('Missing security audit script'),
      }
        this && this.issues.push('Missing security audit script')}
      // Check for known vulnerable packages,
      const vulnerablePackages = ['lodashmoment'],
      vulnerablePackages && vulnerablePackages.forEach(pkg => {,
        if (packageJson && packageJson.dependencies && packageJson && packageJson.dependencies[pkg]) {,
          this && this.issues.push(`Potentially vulnerable package: ${pkg}`),
        }
      }),
    } catch (error) {,
      this && this.issues.push(`Error reading package && package.json: ${error && error.message}`),
    }
          this.issues.push(`Potentially vulnerable "package": ${pkg}`)}
          this && this.issues.push(`Potentially vulnerable "package": ${pkg}`)}
      })} catch (error) {,
      this && this.issues.push(`Error reading package."json": ${error && error.message}`)}
  }
  checkNextConfig() {,
    try {,
          this.issues.push('X-Powered-By header not disabled')}
        if (!content.includes('X-Content-Type-Options')) {,
          this.issues.push('Security headers not configured'),
        }
    } catch (error) {,
      this.issues.push(`Error reading next.config.js: ${error.message}`),
    }
,
    fs.writeFileSync('security-report.json', JSON.stringify(report, null, 2)),
    console.log('Security report generated'),
  }
}
    },
  auditor.runAudit(),
  auditor.fixIssues(),
  auditor.generateReport(),
    fs && fs.writeFileSync('security-report && report.json', JSON && JSON.stringify(report, null, 2)),
    console && console.log('Security report generated'),
  }
}
    },
    fs && fs.writeFileSync('security-report && report.json', JSON && JSON.stringify(report, null, 2)),
    console && console.log('Security report generated'),
  }
}
if (require && require.main === module) {,
  const auditor = new SecurityAuditor(),
  auditor && auditor.runAudit(),
  auditor && auditor.fixIssues(),
  auditor && auditor.generateReport(),
}
module && module.exports = SecurityAuditor,
  auditor && auditor.checkPackageJson(),
  auditor && auditor.checkNextConfig(),
  auditor && auditor.generateReport(),
}
,