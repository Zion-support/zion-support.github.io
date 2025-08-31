#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/security-scanner.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/security-report.json');
    this.startTime = Date.now();
    
    // Configuration from environment variables
    this.config = {
      scanDependencies: process.env.SCAN_DEPENDENCIES === 'true',
      scanCode: process.env.SCAN_CODE === 'true',
      scanConfigs: process.env.SCAN_CONFIGS === 'true',
      alertOnCritical: process.env.ALERT_ON_CRITICAL === 'true',
      maxSeverity: 'high', // low, medium, high, critical
      excludedPatterns: [
        'node_modules/**',
        'dist/**',
        'build/**',
        'coverage/**',
        '*.min.js',
        '*.bundle.js'
      ]
    };
    
    this.securityIssues = {
      critical: [],
      high: [],
      medium: [],
      low: [],
      info: []
    };
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async scanDependencies() {
    if (!this.config.scanDependencies) {
      this.log('⏭️  Dependency scanning disabled');
      return [];
    }

    this.log('🔒 Scanning dependencies for security vulnerabilities...');
    
    const vulnerabilities = [];
    
    try {
      // Run npm audit
      const auditResult = execSync('npm audit --json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });

      const audit = JSON.parse(auditResult);
      
      if (audit.vulnerabilities) {
        Object.values(audit.vulnerabilities).forEach(vuln => {
          vulnerabilities.push({
            type: 'dependency',
            package: vuln.name,
            version: vuln.version,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation,
            cwe: vuln.cwe,
            cve: vuln.cve
          });
        });
      }

      // Check for outdated packages with known vulnerabilities
      try {
        const outdatedResult = execSync('npm outdated --json', {
          cwd: this.projectRoot,
          encoding: 'utf8',
          stdio: 'pipe'
        });

        const outdated = JSON.parse(outdatedResult);
        Object.entries(outdated).forEach(([packageName, info]) => {
          if (info.latest && info.current !== info.latest) {
            vulnerabilities.push({
              type: 'outdated',
              package: packageName,
              current: info.current,
              latest: info.latest,
              severity: 'medium',
              title: 'Outdated package',
              description: `Package ${packageName} is outdated (${info.current} -> ${info.latest})`,
              recommendation: `Update to latest version: npm install ${packageName}@latest`
            });
          }
        });
      } catch (error) {
        // npm outdated returns non-zero exit code if there are outdated packages
        // This is expected behavior
      }

    } catch (error) {
      this.log(`Error scanning dependencies: ${error.message}`, 'ERROR');
    }

    this.log(`Found ${vulnerabilities.length} dependency vulnerabilities`);
    return vulnerabilities;
  }

  async scanCode() {
    if (!this.config.scanCode) {
      this.log('⏭️  Code scanning disabled');
      return [];
    }

    this.log('🔍 Scanning code for security issues...');
    
    const securityIssues = [];
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        items.forEach(item => {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !this.isExcluded(fullPath)) {
            scanDirectory(fullPath);
          } else if (this.isScannableFile(fullPath)) {
            const issues = this.scanFile(fullPath);
            securityIssues.push(...issues);
          }
        });
      } catch (error) {
        this.log(`Error scanning directory ${dir}: ${error.message}`, 'ERROR');
      }
    };

    scanDirectory(this.projectRoot);
    this.log(`Found ${securityIssues.length} code security issues`);
    return securityIssues;
  }

  isExcluded(filePath) {
    return this.config.excludedPatterns.some(pattern => {
      const regex = new RegExp(pattern.replace(/\*\*/g, '.*'));
      return regex.test(filePath);
    });
  }

  isScannableFile(filePath) {
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.vue', '.html', '.json', '.yaml', '.yml'];
    return extensions.some(ext => filePath.endsWith(ext));
  }

  scanFile(filePath) {
    const issues = [];
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');

      // Security patterns to scan for
      const securityPatterns = {
        // Critical security issues
        'eval(': {
          severity: 'critical',
          title: 'Use of eval()',
          description: 'eval() can execute arbitrary code and is a major security risk',
          recommendation: 'Replace with safer alternatives like JSON.parse() or Function constructor'
        },
        'innerHTML': {
          severity: 'high',
          title: 'Potential XSS via innerHTML',
          description: 'innerHTML can lead to XSS attacks if used with untrusted data',
          recommendation: 'Use textContent or sanitize input data'
        },
        'document.write': {
          severity: 'high',
          title: 'Use of document.write()',
          description: 'document.write() can lead to XSS and other security issues',
          recommendation: 'Use DOM manipulation methods instead'
        },
        
        // Medium security issues
        'localStorage': {
          severity: 'medium',
          title: 'Sensitive data in localStorage',
          description: 'localStorage is not secure for sensitive information',
          recommendation: 'Use secure alternatives or encrypt sensitive data'
        },
        'sessionStorage': {
          severity: 'medium',
          title: 'Sensitive data in sessionStorage',
          description: 'sessionStorage is not secure for sensitive information',
          recommendation: 'Use secure alternatives or encrypt sensitive data'
        },
        'setTimeout\\(0': {
          severity: 'medium',
          title: 'Potential timing attack',
          description: 'setTimeout(0) can be exploited for timing attacks',
          recommendation: 'Use requestAnimationFrame or proper async handling'
        },
        
        // Low security issues
        'console.log': {
          severity: 'low',
          title: 'Debug information exposure',
          description: 'Console logs may expose sensitive information in production',
          recommendation: 'Remove or conditionally log debug information'
        },
        'alert(': {
          severity: 'low',
          title: 'Use of alert()',
          description: 'alert() can be annoying and is not user-friendly',
          recommendation: 'Use custom modal dialogs or toast notifications'
        }
      };

      lines.forEach((line, index) => {
        const lineNum = index + 1;
        
        Object.entries(securityPatterns).forEach(([pattern, issue]) => {
          if (line.includes(pattern)) {
            issues.push({
              file: filePath,
              line: lineNum,
              severity: issue.severity,
              title: issue.title,
              description: issue.description,
              recommendation: issue.recommendation,
              pattern: pattern,
              code: line.trim()
            });
          }
        });

        // Check for hardcoded secrets
        const secretPatterns = [
          /(api_key|apikey|secret|password|token)\s*[:=]\s*['"][^'"]{8,}['"]/gi,
          /(sk_|pk_|AKIA|ghp_|gho_|ghu_|ghs_|ghr_)[a-zA-Z0-9]{20,}/g
        ];

        secretPatterns.forEach(pattern => {
          const matches = line.match(pattern);
          if (matches) {
            issues.push({
              file: filePath,
              line: lineNum,
              severity: 'critical',
              title: 'Hardcoded secret detected',
              description: 'Potential hardcoded API key, secret, or token found',
              recommendation: 'Move secrets to environment variables or secure secret management',
              pattern: 'hardcoded-secret',
              code: line.trim()
            });
          }
        });
      });

    } catch (error) {
      this.log(`Error scanning file ${filePath}: ${error.message}`, 'ERROR');
    }

    return issues;
  }

  async scanConfigs() {
    if (!this.config.scanConfigs) {
      this.log('⏭️  Configuration scanning disabled');
      return [];
    }

    this.log('⚙️  Scanning configuration files for security issues...');
    
    const configIssues = [];
    const configFiles = [
      'package.json',
      'package-lock.json',
      'yarn.lock',
      '.env',
      '.env.local',
      '.env.production',
      'netlify.toml',
      'vercel.json',
      'next.config.js',
      'vite.config.ts',
      'tailwind.config.js',
      'tsconfig.json'
    ];

    configFiles.forEach(configFile => {
      const filePath = path.join(this.projectRoot, configFile);
      if (fs.existsSync(filePath)) {
        const issues = this.scanConfigFile(filePath);
        configIssues.push(...issues);
      }
    });

    this.log(`Found ${configIssues.length} configuration security issues`);
    return configIssues;
  }

  scanConfigFile(filePath) {
    const issues = [];
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fileName = path.basename(filePath);

      // Check for common configuration security issues
      if (fileName === '.env' || fileName.startsWith('.env.')) {
        // Check for exposed secrets in .env files
        const lines = content.split('\n');
        lines.forEach((line, index) => {
          if (line.includes('=') && !line.startsWith('#')) {
            const [key, value] = line.split('=');
            if (value && value.length > 0 && !value.startsWith('$')) {
              issues.push({
                file: filePath,
                line: index + 1,
                severity: 'medium',
                title: 'Environment variable value',
                description: `Environment variable ${key} has a hardcoded value`,
                recommendation: 'Use environment-specific values or secret management',
                pattern: 'env-hardcoded',
                code: line.trim()
              });
            }
          }
        });
      }

      if (fileName === 'package.json') {
        // Check for potentially dangerous scripts
        try {
          const packageJson = JSON.parse(content);
          if (packageJson.scripts) {
            Object.entries(packageJson.scripts).forEach(([scriptName, script]) => {
              if (typeof script === 'string') {
                const dangerousPatterns = [
                  'rm -rf',
                  'sudo',
                  'chmod 777',
                  'eval',
                  'curl | bash'
                ];

                dangerousPatterns.forEach(pattern => {
                  if (script.includes(pattern)) {
                    issues.push({
                      file: filePath,
                      line: 0,
                      severity: 'high',
                      title: 'Potentially dangerous script',
                      description: `Script '${scriptName}' contains potentially dangerous command`,
                      recommendation: 'Review and sanitize script commands',
                      pattern: 'dangerous-script',
                      code: script
                    });
                  }
                });
              }
            });
          }
        } catch (parseError) {
          this.log(`Error parsing package.json: ${parseError.message}`, 'ERROR');
        }
      }

    } catch (error) {
      this.log(`Error scanning config file ${filePath}: ${error.message}`, 'ERROR');
    }

    return issues;
  }

  categorizeIssues(issues) {
    issues.forEach(issue => {
      const severity = issue.severity || 'medium';
      if (this.securityIssues[severity]) {
        this.securityIssues[severity].push(issue);
      }
    });
  }

  async generateSecurityReport(dependencyIssues, codeIssues, configIssues) {
    this.log('📊 Generating security report...');
    
    // Categorize all issues
    this.categorizeIssues(dependencyIssues);
    this.categorizeIssues(codeIssues);
    this.categorizeIssues(configIssues);

    const totalIssues = Object.values(this.securityIssues).reduce((sum, issues) => sum + issues.length, 0);
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      summary: {
        total: totalIssues,
        critical: this.securityIssues.critical.length,
        high: this.securityIssues.high.length,
        medium: this.securityIssues.medium.length,
        low: this.securityIssues.low.length,
        info: this.securityIssues.info.length
      },
      issues: this.securityIssues,
      recommendations: this.generateRecommendations(),
      riskScore: this.calculateRiskScore()
    };

    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`📊 Security report generated: ${this.reportFile}`);
    } catch (error) {
      this.log(`Failed to write report: ${error.message}`, 'ERROR');
    }

    return report;
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.securityIssues.critical.length > 0) {
      recommendations.push({
        priority: 'critical',
        message: 'Immediate action required: Critical security vulnerabilities detected',
        actions: [
          'Review and fix all critical issues immediately',
          'Consider blocking deployment until resolved',
          'Conduct security audit of affected components'
        ]
      });
    }

    if (this.securityIssues.high.length > 0) {
      recommendations.push({
        priority: 'high',
        message: 'High priority: Address high-severity security issues',
        actions: [
          'Fix high-severity issues within 24 hours',
          'Update vulnerable dependencies',
          'Review code for potential XSS and injection vulnerabilities'
        ]
      });
    }

    if (this.securityIssues.medium.length > 0) {
      recommendations.push({
        priority: 'medium',
        message: 'Medium priority: Plan to address medium-severity issues',
        actions: [
          'Fix medium-severity issues within 1 week',
          'Implement security best practices',
          'Consider automated security scanning in CI/CD'
        ]
      });
    }

    return recommendations;
  }

  calculateRiskScore() {
    let score = 100; // Start with perfect score
    
    // Deduct points based on severity
    score -= this.securityIssues.critical.length * 25;
    score -= this.securityIssues.high.length * 15;
    score -= this.securityIssues.medium.length * 10;
    score -= this.securityIssues.low.length * 5;
    
    return Math.max(0, score);
  }

  async run() {
    this.log('🚀 Starting Security Scanner...');
    
    try {
      // 1. Scan dependencies
      const dependencyIssues = await this.scanDependencies();
      
      // 2. Scan code
      const codeIssues = await this.scanCode();
      
      // 3. Scan configurations
      const configIssues = await this.scanConfigs();
      
      // 4. Generate comprehensive report
      const report = await this.generateSecurityReport(dependencyIssues, codeIssues, configIssues);
      
      // 5. Log summary
      this.log('\n🔒 Security Scan Summary:');
      this.log(`Total issues: ${report.summary.total}`);
      this.log(`Critical: ${report.summary.critical}`);
      this.log(`High: ${report.summary.high}`);
      this.log(`Medium: ${report.summary.medium}`);
      this.log(`Low: ${report.summary.low}`);
      this.log(`Risk Score: ${report.riskScore}/100`);
      
      if (report.summary.critical > 0) {
        this.log('🚨 CRITICAL SECURITY ISSUES DETECTED!', 'ERROR');
      } else if (report.summary.high > 0) {
        this.log('⚠️  High-severity security issues found', 'WARN');
      } else {
        this.log('✅ Security scan completed - no critical issues found');
      }
      
      return report;
      
    } catch (error) {
      this.log(`❌ Security scan failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run the security scanner
if (require.main === module) {
  const scanner = new SecurityScanner();
  scanner.run().catch(error => {
    console.error('Security scanner failed:', error);
    process.exit(1);
  });
}

module.exports = SecurityScanner;