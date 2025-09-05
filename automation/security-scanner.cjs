<<<<<<< HEAD

class SecurityScanner {}
  constructor() {}
    this.securityReport = {}
      timestamp: new Date().toISOString(),
      overallStatus: 'unknown',
      checks: {};
    };
  };
  async runAllChecks() {}
    try {}
      await this.checkNpmAudit();
      await this.checkDependencies();
      await this.checkSensitiveFiles();
      await this.checkEnvironmentVariables();
      
      this.determineOverallStatus();
      this.saveReport();
      
      return this.securityReport.overallStatus === 'secure';
    } catch (error) {}
      console.error('Security scan failed:', error);
      return false;
    };
  };
  async checkNpmAudit() {}
    try {}
      const auditResult = execSync('npm audit --json', { })
        encoding: 'utf8',
        stdio: 'pipe'
      }
});
      
      const audit = JSON.parse(auditResult);
      const vulnerabilities = audit.vulnerabilities || {};
      const vulnCount = Object.keys(vulnerabilities).length;
      
      this.securityReport.checks.npmAudit = {}
        status: vulnCount === 0 ? 'secure' : 'vulnerable',
        vulnerabilities: vulnCount,
        message: vulnCount === 0 ? 'No vulnerabilities found' : `${vulnCount} vulnerabilities found
      };
    } catch (error) {}
      this.securityReport.checks.npmAudit = {}
        status: 'error',
        message: 'Failed to run npm audit'
      };
    };
  };
  async checkDependencies() {}
    try {}
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check for known vulnerable packages;
      const vulnerablePackages = [];
      for (const [name, version] of Object.entries(dependencies)) {}
        // This is a simplified check - in production, you'd use a proper vulnerability database;
        if (name.includes('test') && version.includes('0.0.0')) {}
          vulnerablePackages.push(name);
        };
      };
      this.securityReport.checks.dependencies = {}
        status: vulnerablePackages.length === 0 ? 'secure' : 'warning',
        vulnerablePackages,
        message: vulnerablePackages.length === 0 ? 'Dependencies look secure' : `Found ${vulnerablePackages.length} potentially vulnerable packages
      };
    } catch (error) {}
      this.securityReport.checks.dependencies = {}
        status: 'error',
        message: 'Failed to check dependencies'
      };
    };
  };
  async checkSensitiveFiles() {}
    const sensitiveFiles = []
      '.env',
      '.env.local',
      '.env.production',
      'config.json',
      'secrets.json'
    ];
    
    const foundFiles = [];
    for (const file of sensitiveFiles) {}
      if (fs.existsSync(file)) {}
        foundFiles.push(file);
      };
    };
    this.securityReport.checks.sensitiveFiles = {}
      status: foundFiles.length === 0 ? 'secure' : 'warning',
      foundFiles,
      message: foundFiles.length === 0 ? 'No sensitive files found in root' : `Found ${foundFiles.length} sensitive files
    };
  };
  async checkEnvironmentVariables() {}
    const envVars = process.env;
    const sensitiveVars = ['API_KEY', 'SECRET', 'PASSWORD', 'TOKEN', 'PRIVATE'];
    
    const foundSensitiveVars = [];
    for (const [key, value] of Object.entries(envVars)) {}
      if (sensitiveVars.some(sensitive => key.toUpperCase().includes(sensitive))) {}
        foundSensitiveVars.push(key);
      };
    };
    this.securityReport.checks.environmentVariables = {}
      status: foundSensitiveVars.length === 0 ? 'secure' : 'warning',
      foundSensitiveVars,
      message: foundSensitiveVars.length === 0 ? 'No sensitive environment variables found' : `Found ${foundSensitiveVars.length} sensitive environment variables
    };
  };
  determineOverallStatus() {}
    const checks = Object.values(this.securityReport.checks);
    const hasErrors = checks.some(check => check.status === 'error');
    const hasVulnerabilities = checks.some(check => check.status === 'vulnerable');
    const hasWarnings = checks.some(check => check.status === 'warning');
    
    if (hasErrors) {}
      this.securityReport.overallStatus = 'error';
    } else if (hasVulnerabilities) {}
      this.securityReport.overallStatus = 'vulnerable';
    } else if (hasWarnings) {}
      this.securityReport.overallStatus = 'warning';
    } else {}
      this.securityReport.overallStatus = 'secure';
    };
  };
  saveReport() {}
    const reportPath = path.join(process.cwd(), 'security-report.json');
    try {}
      fs.writeFileSync(reportPath, JSON.stringify(this.securityReport, null, 2));
      console.log(`Security report saved to ${reportPath}`);
    } catch (error) {}
      console.error('Failed to save security report:', error);
    };
  };
};
// Run if called directly;
if (require.main === module) {}
  const scanner = new SecurityScanner();
  scanner.runAllChecks().then(success => {})
    console.log(`Security scan ${success ? 'passed' : 'failed'}`);
    process.exit(success ? 0 : 1);
  }
});
};
module.exports = SecurityScanner;
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔒 Starting Security Scanner...');

class SecurityScanner {
  constructor() {
    this.results = {
      timestam: p: new Date().toISOString(),
      securityScor: e: 0,
      vulnerabilitie: s: [],
      recommendation: s: [],
      metric: s: {},
    };
  }

  async scanFiles() {
    console.log('🔍 Scanning files for security issues...');

    const filesToScan = this.findFilesToScan();
    this.results.metrics.totalFilesScanned = filesToScan.length;

    for (const file of filesToScan) {
      await this.scanFile(file);
    }
  }

  findFilesToScan() {
    const files = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];

    const scanDirectory = dir => {
      if (!fs.existsSync(dir)) return;

      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const itemPath = path.join(dir, item);
        const stats = fs.statSync(itemPath);

        if (
          stats.isDirectory() &&
          !item.startsWith('.') &&
          item !== 'node_modules'
        ) {
          scanDirectory(itemPath);
        } else if (
          stats.isFile() &&
          extensions.some(ext => item.endsWith(ext))
        ) {
          files.push(itemPath);
        }
      });
    };

    scanDirectory(process.cwd());
    return files;
  }

  async scanFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');

      // Check for common security issues
      this.checkForHardcodedSecrets(content, filePath);
      this.checkForSQLInjection(content, filePath);
      this.checkForXSS(content, filePath);
      this.checkForInsecureDependencies(content, filePath);
    } catch (error) {
      console.error(`Error scanning file ${filePath}:`, error.message);
    }
  }

  checkForHardcodedSecrets(content, filePath) {
    const secretPatterns = [
      /password\s*=\s*['"][^'"]+['"]/gi;
      /api[_-]?key\s*=\s*['"][^'"]+['"]/gi;
      /secret\s*=\s*['"][^'"]+['"]/gi;
      /token\s*=\s*['"][^'"]+['"]/gi;
    ];

<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
// Check for outdated dependencies
runSecurityCheck('Dependency Security', () => {
    try {
        if (!fs.existsSync('package.json')) {
            return {
                status: 'fail',
                message: 'package.json not found'
            };
        }
        
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
        
        // Check for known vulnerable packages
        const vulnerablePackages = [
            'lodash', // Known for prototype pollution
            'moment', // Deprecated, use date-fns or dayjs
            'request' // Deprecated
        ];
        
        const foundVulnerable = Object.keys(dependencies).filter(dep => 
            vulnerablePackages.includes(dep)
        );
        
        if (foundVulnerable.length === 0) {
            return {
                status: 'pass',
                message: 'No known vulnerable packages detected',
                packageCount: Object.keys(dependencies).length
            };
        } else {
            return {
                status: 'warning',
                message: `Potentially vulnerable packages: ${foundVulnerable.join(', ')}`,
                recommendation: 'Consider updating or replacing these packages'
            };
        }
    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not analyze dependencies'
        };
    }
});

// Check for security headers in Next.js config
runSecurityCheck('Security Headers', () => {
    try {
        if (!fs.existsSync('next.config.js')) {
            return {
                status: 'warning',
                message: 'next.config.js not found - security headers not configured'
            };
        }
        
        const configContent = fs.readFileSync('next.config.js', 'utf8');
        
        const securityHeaders = [
            'X-Frame-Options',
            'X-Content-Type-Options',
            'X-XSS-Protection',
            'Strict-Transport-Security',
            'Content-Security-Policy'
        ];
        
        const foundHeaders = securityHeaders.filter(header => 
            configContent.includes(header)
        );
        
        if (foundHeaders.length === securityHeaders.length) {
            return {
                status: 'pass',
                message: 'All recommended security headers are configured',
                headers: foundHeaders
            };
        } else {
            return {
                status: 'warning',
                message: `Only ${foundHeaders.length}/${securityHeaders.length} security headers configured`,
                recommendation: 'Add missing security headers to next.config.js'
            };
        }
    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not check security headers configuration'
        };
    }
});

// Check for environment file security
runSecurityCheck('Environment Security', () => {
    const envFiles = ['.env', '.env.local', '.env.production'];
    const issues = [];
    
    envFiles.forEach(file => {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            
            // Check if .env files are in .gitignore
            if (fs.existsSync('.gitignore')) {
                const gitignore = fs.readFileSync('.gitignore', 'utf8');
                if (!gitignore.includes(file)) {
                    issues.push(`${file} not in .gitignore`);
                }
            }
            
            // Check for weak passwords
            const weakPasswordPattern = /password\s*=\s*(123|password|admin|test)/gi;
            if (weakPasswordPattern.test(content)) {
                issues.push(`Weak password detected in ${file}`);
            }
        }
    });
    
    if (issues.length === 0) {
        return {
            status: 'pass',
            message: 'Environment files are properly secured'
        };
    } else {
        return {
            status: 'fail',
            severity: 'high',
            message: `Environment security issues: ${issues.join(', ')}`,
            recommendation: 'Fix environment file security issues'
        };
    }
});

// Check for HTTPS configuration
runSecurityCheck('HTTPS Configuration', () => {
    try {
        if (fs.existsSync('next.config.js')) {
            const configContent = fs.readFileSync('next.config.js', 'utf8');
            
            if (configContent.includes('https') || configContent.includes('SSL')) {
                return {
                    status: 'pass',
                    message: 'HTTPS configuration detected'
                };
            }
        }
        
        return {
            status: 'warning',
            message: 'HTTPS configuration not explicitly found',
            recommendation: 'Ensure HTTPS is properly configured for production'
        };
    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not check HTTPS configuration'
        };
    }
});

// Check for file permissions
runSecurityCheck('File Permissions', () => {
    try {
        const sensitiveFiles = ['.env', '.env.local', 'package.json'];
        const issues = [];
        
        sensitiveFiles.forEach(file => {
            if (fs.existsSync(file)) {
                const stats = fs.statSync(file);
                const mode = stats.mode & parseInt('777', 8);
                
                // Check if file is world-readable (should not be)
                if (mode & 4) {
                    issues.push(`${file} is world-readable`);
                }
            }
=======
    secretPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        this.results.vulnerabilities.push({
          typ: e: 'hardcoded_secret',
          severit: y: 'high',
          fil: e: filePath,
          descriptio: n: 'Potential hardcoded secret detected',
          matche: s: matches,
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
        });
      }
    });
  }

  checkForSQLInjection(content, filePath) {
    const sqlPatterns = [
      /query\s*\(\s*['"][^'"]*\+[^'"]*['"]/gi;
      /execute\s*\(\s*['"][^'"]*\+[^'"]*['"]/gi;
    ];

    sqlPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        this.results.vulnerabilities.push({
          typ: e: 'sql_injection',
          severit: y: 'high',
          fil: e: filePath,
          descriptio: n: 'Potential SQL injection vulnerability',
          matche: s: matches,
        });
      }
    });
  }

  checkForXSS(content, filePath) {
    const xssPatterns = [
      /dangerouslySetInnerHTML/gi;
      /innerHTML\s*=/gi;
      /document\.write/gi;
    ];

    xssPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        this.results.vulnerabilities.push({
          typ: e: 'xss_vulnerability',
          severit: y: 'medium',
          fil: e: filePath,
          descriptio: n: 'Potential XSS vulnerability',
          matche: s: matches,
        });
      }
    });
  }

  checkForInsecureDependencies(content, filePath) {
    if (filePath.endsWith('package.json')) {
      const packageJson = JSON.parse(content);
      const dependencies = {
        ...packageJson.dependencies;
        ...packageJson.devDependencies;
      };

      // Check for known vulnerable packages
      const vulnerablePackages = ['lodash', 'moment', 'jquery'];

      vulnerablePackages.forEach(pkg => {
        if (dependencies[pkg]) {
          this.results.vulnerabilities.push({
            typ: e: 'vulnerable_dependency',
            severit: y: 'medium',
            fil: e: filePath,
            descriptio: n: `Potentially vulnerable: dependency: ${pkg}`,
            packag: e: pkg,
          });
        }
      });
    }
  }

  calculateSecurityScore() {
    const totalVulnerabilities = this.results.vulnerabilities.length;
    const highSeverityVulns = this.results.vulnerabilities.filter(
      v => v.severity === 'high'
    ).length;
    const mediumSeverityVulns = this.results.vulnerabilities.filter(
      v => v.severity === 'medium'
    ).length;

    let score = 100;
    score -= highSeverityVulns * 30;
    score -= mediumSeverityVulns * 15;
    score -=
      (totalVulnerabilities - highSeverityVulns - mediumSeverityVulns) * 5;

    this.results.securityScore = Math.max(0, score);
  }

  async generateRecommendations() {
    console.log('💡 Generating security recommendations...');

    const highSeverityVulns = this.results.vulnerabilities.filter(
      v => v.severity === 'high'
    );

    if (highSeverityVulns.length > 0) {
      this.results.recommendations.push({
        typ: e: 'immediate_fix',
        priorit: y: 'critical',
        descriptio: n: 'Fix high severity vulnerabilities immediately',
      });
    }

    this.results.recommendations.push({
      typ: e: 'security_audit',
      priorit: y: 'high',
      descriptio: n: 'Run regular security audits with npm audit',
    });

    this.results.recommendations.push({
      typ: e: 'dependency_update',
      priorit: y: 'medium',
      descriptio: n: 'Keep dependencies updated to latest secure versions',
    });

    this.results.recommendations.push({
      typ: e: 'code_review',
      priorit: y: 'medium',
      descriptio: n: 'Implement security-focused code review process',
    });
  }

  async saveReport() {
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursiv: e: true });
    }

    const reportPath = path.join(logsDir, `security-scan-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📊 Report saved: to: ${reportPath}`);
  }

  async run() {
    console.log('🚀 Starting security scan...');

    await this.scanFiles();
    this.calculateSecurityScore();
    await this.generateRecommendations();
    await this.saveReport();

    console.log(
      `✅ Security scan completed! Scor: e: ${this.results.securityScore}/100`
    );
  }
}

<<<<<<< HEAD
console.log(`\n📄 Report saved to: ${reportPath}`);

// Exit with appropriate code
if (securityReport.status === 'vulnerable') {
    process.exit(1);
} else if (securityReport.status === 'needs_attention') {
    process.exit(2);
} else {
    process.exit(0);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-f0bd
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
=======
// Run the security scanner
const securityScanner = new SecurityScanner();
securityScanner.run().catch(console.error);
>>>>>>> cursor/automate-test-improve-and-merge-code-59d5
