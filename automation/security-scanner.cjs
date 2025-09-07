#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');
;
console.log('🔒 Starting Security Scanner...');
;
class SecurityScanner {;
  constructor() {;
    this.results = {;
      "timestamp": new Date().toISOString(),
      "securityScore": 0,
      "vulnerabilities": [],
      "recommendations": [],
      "metrics": {}
    };
  }
;
  async scanFiles() {;
    console.log('🔍 Scanning files for security issues...');
;
    const filesToScan = this.findFilesToScan();
    this.results.metrics.totalFilesScanned = filesToScan.length;
;
    for (const file of filesToScan) {;
      await this.scanFile(file);
    }
  }
;
  findFilesToScan() {;
    const files = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json'];
;
    const scanDirectory = (dir) => {;
      if (!fs.existsSync(dir)) return;
;
      const items = fs.readdirSync(dir);
      items.forEach(item => {;
        const itemPath = path.join(dir, item);
        const stats = fs.statSync(itemPath);
;
        if (stats.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
          scanDirectory(itemPath);
        } else if (stats.isFile() && extensions.some(ext => item.endsWith(ext))) {;
          files.push(itemPath);
        }
      });
    };
;
    scanDirectory(process.cwd());
    return files;
  }
;
  async scanFile(filePath) {;
    try {;
      const content = fs.readFileSync(filePath, 'utf8');
;
      // Check for common security issues;
      this.checkForHardcodedSecrets(content, filePath);
      this.checkForSQLInjection(content, filePath);
      this.checkForXSS(content, filePath);
      this.checkForInsecureDependencies(content, filePath);
;
    } catch (error) {;
      console.error(`Error scanning file ${filePath}:`, error.message);
    }
  }
;
  checkForHardcodedSecrets(content, filePath) {;
    const secretPatterns = [;
      /password\s*=\s*['"][^'"]+['"]/gi,
      /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
      /secret\s*=\s*['"][^'"]+['"]/gi,
      /token\s*=\s*['"][^'"]+['"]/gi;
    ];
;
    secretPatterns.forEach(pattern => {;
      const matches = content.match(pattern);
      if (matches) {;
        this.results.vulnerabilities.push({;
          "type": 'hardcoded_secret',
          "severity": 'high',
          "file": filePath,
          "description": 'Potential hardcoded secret detected',
          "matches": matches;
        });
      }
    });
  }
;
  checkForSQLInjection(content, filePath) {;
    const sqlPatterns = [;
      /query\s*\(\s*['"][^'"]*\+[^'"]*['"]/gi,
      /execute\s*\(\s*['"][^'"]*\+[^'"]*['"]/gi;
    ];
;
    sqlPatterns.forEach(pattern => {;
      const matches = content.match(pattern);
      if (matches) {;
        this.results.vulnerabilities.push({;
          "type": 'sql_injection',
          "severity": 'high',
          "file": filePath,
          "description": 'Potential SQL injection vulnerability',
          "matches": matches;
        });
      }
    });
    if (foundIssues.length === 0) {
        return {
            status: 'pass',
            message: 'No sensitive data found in configuration files'
        };
    } else {
        return {
            status: 'fail',
            severity: 'high',
            message: `Sensitive data found: ${foundIssues.join(', ')}`,
            recommendation: 'Remove hardcoded credentials and use environment variables'
        };
    }
});
  }
;
  checkForXSS(content, filePath) {;
    const xssPatterns = [;
      /dangerouslySetInnerHTML/gi,
      /innerHTML\s*=/gi,
      /document\.write/gi;
    ];
;
    xssPatterns.forEach(pattern => {;
      const matches = content.match(pattern);
      if (matches) {;
        this.results.vulnerabilities.push({;
          "type": 'xss_vulnerability',
          "severity": 'medium',
          "file": filePath,
          "description": 'Potential XSS vulnerability',
          "matches": matches;
        });
      }
    });
  }
;
  checkForInsecureDependencies(content, filePath) {;
    if (filePath.endsWith('package.json')) {;
      const packageJson = JSON.parse(content);
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
;
      // Check for known vulnerable packages;
      const vulnerablePackages = [;
        'lodash',
        'moment',
        'jquery';
      ];
;
      vulnerablePackages.forEach(pkg => {;
        if (dependencies[pkg]) {;
          this.results.vulnerabilities.push({;
            "type": 'vulnerable_dependency',
            "severity": 'medium',
            "file": filePath,
            "description": `Potentially vulnerable "dependency": ${pkg}`,
            "package": pkg;
          });
        }




        
        // Check for known vulnerable packages
        const vulnerablePackages = [
            'lodash', // Known for prototype pollution
            'moment', // Deprecated, use date-fns or dayjs
            'request' // Deprecated
        ];
        




        }
    } catch (error) {
        return {
            status: 'fail',
            message: 'Could not analyze dependencies'
        };
    }




        }


      }

      // Try to fix vulnerabilities
      if (vulnerabilities > 0) {
        const fixResult = await this.runCommand(
          'npm audit fix',
          'Fix Security Vulnerabilities'
        );
        
        if (fixResult.success) {
          fixes.push('Successfully applied automatic fixes');
        }
      }

      this.results.dependencyAudit = {
        success: auditResult.success,
        vulnerabilities,
        fixes
      };




      }
      
      if (!permissionIssues) {
        this.fixes.push("File permissions are secure");
        this.log("✅ File permissions are secure");
      }

    } catch (error) {
      this.log(`❌ Failed to check file permissions: ${error.message}`, "ERROR");
      this.errors.push(error.message);
    }




});

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

  async scanCodeSecurity() {
    this.log('\n🔍 SCANNING CODE SECURITY');
    
    try {
      const issues = [];
      const fixes = [];

      // Check for common security issues
      const securityChecks = [
        {
          pattern: /eval\s*\(/g,
          issue: 'Use of eval() function detected',
          fix: 'Replace eval() with safer alternatives like JSON.parse() or Function constructor'
        },
        {
          pattern: /innerHTML\s*=/g,
          issue: 'Direct innerHTML assignment detected',
          fix: 'Use textContent or sanitize HTML before assignment'
        },
        {
          pattern: /document\.write\s*\(/g,
          issue: 'Use of document.write() detected',
          fix: 'Replace document.write() with DOM manipulation methods'
        },
        {
          pattern: /localStorage\.setItem\s*\([^,]+,\s*[^)]*\+/g,
          issue: 'Potential XSS in localStorage',
          fix: 'Sanitize data before storing in localStorage'



        }
      ];

      // Scan common file types
      const fileExtensions = ['.js', '.jsx', '.ts', '.tsx'];
      const scanDirs = ['components', 'pages', 'lib', 'utils', 'hooks'];

      for (const dir of scanDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          this.scanDirectoryForSecurity(dirPath, securityChecks, issues, fixes);
        }
      }

      this.results.codeSecurity = {
        success: true,
        issues,
        fixes
      };
    } catch (error) {
      this.results.codeSecurity = {
        success: false,
        issues: ['Failed to scan code security'],
        fixes: []
      };
    }
  }
;
  calculateSecurityScore() {;
    const totalVulnerabilities = this.results.vulnerabilities.length;
    const highSeverityVulns = this.results.vulnerabilities.filter(v => v.severity === 'high').length;
    const mediumSeverityVulns = this.results.vulnerabilities.filter(v => v.severity === 'medium').length;
;
    let score = 100;
    score -= highSeverityVulns * 30;
    score -= mediumSeverityVulns * 15;
    score -= (totalVulnerabilities - highSeverityVulns - mediumSeverityVulns) * 5;
;
    this.results.securityScore = Math.max(0, score);
  }
;
  async generateRecommendations() {;
    console.log('💡 Generating security recommendations...');
;
    const highSeverityVulns = this.results.vulnerabilities.filter(v => v.severity === 'high');
;
    if (highSeverityVulns.length > 0) {;
      this.results.recommendations.push({;
        "type": 'immediate_fix',
        "priority": 'critical',
        "description": 'Fix high severity vulnerabilities immediately';
      });
    }
;
    this.results.recommendations.push({;
      "type": 'security_audit',
      "priority": 'high',
      "description": 'Run regular security audits with npm audit';
    });
;
    this.results.recommendations.push({;
      "type": 'dependency_update',
      "priority": 'medium',
      "description": 'Keep dependencies updated to latest secure versions';
    });
;
    this.results.recommendations.push({;
      "type": 'code_review',
      "priority": 'medium',
      "description": 'Implement security-focused code review process';
    });
  }
;
  async saveReport() {;
    const logsDir = path.join(process.cwd(), 'logs');
    if (!fs.existsSync(logsDir)) {;
      fs.mkdirSync(logsDir, { "recursive": true });
    }
;
    const reportPath = path.join(logsDir, `security-scan-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`📊 Report saved "to": ${reportPath}`);
  }
;
  async run() {;
    console.log('🚀 Starting security scan...');
;
    await this.scanFiles();
    this.calculateSecurityScore();
    await this.generateRecommendations();
    await this.saveReport();
;
    console.log(`✅ Security scan completed! "Score": ${this.results.securityScore}/100`);
  }
}
;
// Run the security scanner;
const securityScanner = new SecurityScanner();
securityScanner.run().catch(console.error);