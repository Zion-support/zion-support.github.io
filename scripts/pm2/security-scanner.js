#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const crypto = require('crypto');

class SecurityScanner {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/security-scanner.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/security-report.json');
    this.vulnerabilityDB = this.loadVulnerabilityDB();
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;

    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      // Silent fail for logging
    }
  }

  loadVulnerabilityDB() {
    // Common security patterns and vulnerabilities
    return {
      patterns: {
        hardcodedSecrets: [
          /password\s*[:=]\s*['"][^'"]+['"]/gi,
          /api_key\s*[:=]\s*['"][^'"]+['"]/gi,
          /secret\s*[:=]\s*['"][^'"]+['"]/gi,
          /token\s*[:=]\s*['"][^'"]+['"]/gi,
          /key\s*[:=]\s*['"][^'"]+['"]/gi
        ],
        sqlInjection: [
          /SELECT.*WHERE.*\$\{.*\}/gi,
          /INSERT.*VALUES.*\$\{.*\}/gi,
          /UPDATE.*SET.*\$\{.*\}/gi,
          /DELETE.*WHERE.*\$\{.*\}/gi
        ],
        xssVulnerabilities: [
          /dangerouslySetInnerHTML/gi,
          /innerHTML\s*[:=]/gi,
          /document\.write/gi,
          /eval\s*\(/gi
        ],
        weakCrypto: [
          /crypto\.createHash\('md5'\)/gi,
          /crypto\.createHash\('sha1'\)/gi,
          /md5\s*\(/gi,
          /sha1\s*\(/gi
        ],
        unsafeFileOperations: [
          /fs\.readFileSync\s*\(/gi,
          /fs\.writeFileSync\s*\(/gi,
          /path\.join\s*\(.*userInput/gi
        ]
      },
      severity: {
        critical: ['hardcodedSecrets', 'sqlInjection'],
        high: ['xssVulnerabilities', 'weakCrypto'],
        medium: ['unsafeFileOperations'],
        low: ['consoleLogs', 'deprecatedAPIs']
      }
    };
  }

  async scanFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) return null;

      const content = fs.readFileSync(filePath, 'utf8');
      const stats = fs.statSync(filePath);
      const vulnerabilities = [];

      // Check for hardcoded secrets
      this.vulnerabilityDB.patterns.hardcodedSecrets.forEach((pattern, index) => {
        const matches = content.match(pattern);
        if (matches) {
          matches.forEach(match => {
            vulnerabilities.push({
              type: 'hardcodedSecrets',
              severity: 'critical',
              message: `Hardcoded secret found: ${match.substring(0, 50)}...`,
              line: this.findLineNumber(content, match),
              pattern: pattern.toString(),
              recommendation: 'Move secrets to environment variables or secure configuration files'
            });
          });
        }
      });

      // Check for SQL injection patterns
      this.vulnerabilityDB.patterns.sqlInjection.forEach((pattern, index) => {
        const matches = content.match(pattern);
        if (matches) {
          matches.forEach(match => {
            vulnerabilities.push({
              type: 'sqlInjection',
              severity: 'critical',
              message: `Potential SQL injection: ${match.substring(0, 50)}...`,
              line: this.findLineNumber(content, match),
              pattern: pattern.toString(),
              recommendation: 'Use parameterized queries or ORM methods'
            });
          });
        }
      });

      // Check for XSS vulnerabilities
      this.vulnerabilityDB.patterns.xssVulnerabilities.forEach((pattern, index) => {
        const matches = content.match(pattern);
        if (matches) {
          matches.forEach(match => {
            vulnerabilities.push({
              type: 'xssVulnerabilities',
              severity: 'high',
              message: `Potential XSS vulnerability: ${match.substring(0, 50)}...`,
              line: this.findLineNumber(content, match),
              pattern: pattern.toString(),
              recommendation: 'Sanitize user input and avoid direct DOM manipulation'
            });
          });
        }
      });

      // Check for weak crypto
      this.vulnerabilityDB.patterns.weakCrypto.forEach((pattern, index) => {
        const matches = content.match(pattern);
        if (matches) {
          matches.forEach(match => {
            vulnerabilities.push({
              type: 'weakCrypto',
              severity: 'high',
              message: `Weak cryptographic algorithm: ${match.substring(0, 50)}...`,
              line: this.findLineNumber(content, match),
              pattern: pattern.toString(),
              recommendation: 'Use SHA-256 or stronger algorithms'
            });
          });
        }
      });

      // Check for unsafe file operations
      this.vulnerabilityDB.patterns.unsafeFileOperations.forEach((pattern, index) => {
        const matches = content.match(pattern);
        if (matches) {
          matches.forEach(match => {
            vulnerabilities.push({
              type: 'unsafeFileOperations',
              severity: 'medium',
              message: `Unsafe file operation: ${match.substring(0, 50)}...`,
              line: this.findLineNumber(content, match),
              pattern: pattern.toString(),
              recommendation: 'Validate file paths and use safe file operation methods'
            });
          });
        }
      });

      return {
        file: filePath,
        size: stats.size,
        vulnerabilities,
        riskScore: this.calculateRiskScore(vulnerabilities)
      };
    } catch (error) {
      this.log(`Error scanning file ${filePath}: ${error.message}`);
      return null;
    }
  }

  findLineNumber(content, match) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(match.substring(0, 20))) {
        return i + 1;
      }
    }
    return 0;
  }

  calculateRiskScore(vulnerabilities) {
    let score = 0;
    vulnerabilities.forEach(vuln => {
      switch (vuln.severity) {
        case 'critical': score += 10; break;
        case 'high': score += 7; break;
        case 'medium': score += 4; break;
        case 'low': score += 1; break;
      }
    });
    return Math.min(score, 100);
  }

  async scanDependencies() {
    try {
      this.log('🔒 Scanning dependencies for vulnerabilities...');

      // Check npm audit
      let npmAudit = null;
      try {
        const auditResult = execSync('npm audit --json', {
          cwd: this.projectRoot,
          encoding: 'utf8',
          stdio: 'pipe'
        });
        npmAudit = JSON.parse(auditResult);
      } catch (error) {
        // npm audit might fail if there are vulnerabilities
        try {
          const output = error.stdout?.toString() || error.stderr?.toString() || '';
          if (output.includes('npm ERR!')) {
            npmAudit = { error: true, vulnerabilities: this.parseNpmAuditOutput(output) };
          }
        } catch (parseError) {
          npmAudit = { error: true, message: error.message };
        }
      }

      // Check for outdated packages
      let outdatedPackages = null;
      try {
        const outdatedResult = execSync('npm outdated --json', {
          cwd: this.projectRoot,
          encoding: 'utf8',
          stdio: 'pipe'
        });
        outdatedPackages = JSON.parse(outdatedResult);
      } catch (error) {
        try {
          const output = error.stdout?.toString() || '';
          if (output) {
            outdatedPackages = JSON.parse(output);
          }
        } catch (parseError) {
          outdatedPackages = {};
        }
      }

      return {
        npmAudit,
        outdatedPackages,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      this.log(`Error scanning dependencies: ${error.message}`);
      return null;
    }
  }

  parseNpmAuditOutput(output) {
    const vulnerabilities = [];
    const lines = output.split('\n');
    
    lines.forEach(line => {
      if (line.includes('│')) {
        const parts = line.split('│').map(p => p.trim()).filter(Boolean);
        if (parts.length >= 4) {
          vulnerabilities.push({
            package: parts[0],
            severity: parts[1],
            title: parts[2],
            path: parts[3]
          });
        }
      }
    });

    return vulnerabilities;
  }

  async scanConfigurationFiles() {
    try {
      this.log('🔧 Scanning configuration files for security issues...');

      const configFiles = [
        'package.json',
        'package-lock.json',
        'yarn.lock',
        '.env',
        '.env.local',
        '.env.production',
        'vite.config.ts',
        'tailwind.config.js',
        'tsconfig.json'
      ];

      const configIssues = [];

      for (const configFile of configFiles) {
        const filePath = path.join(this.projectRoot, configFile);
        if (fs.existsSync(filePath)) {
          const issues = await this.analyzeConfigFile(filePath);
          if (issues.length > 0) {
            configIssues.push({
              file: configFile,
              issues
            });
          }
        }
      }

      return configIssues;
    } catch (error) {
      this.log(`Error scanning configuration files: ${error.message}`);
      return [];
    }
  }

  async analyzeConfigFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const issues = [];

      // Check for exposed ports
      if (content.includes('"port"') || content.includes('PORT')) {
        issues.push({
          type: 'exposedPort',
          severity: 'medium',
          message: 'Port configuration found - ensure ports are not exposed in production',
          recommendation: 'Use environment variables for port configuration'
        });
      }

      // Check for debug flags
      if (content.includes('"debug": true') || content.includes('debug: true')) {
        issues.push({
          type: 'debugEnabled',
          severity: 'medium',
          message: 'Debug mode enabled - disable in production',
          recommendation: 'Set debug to false in production environment'
        });
      }

      // Check for verbose logging
      if (content.includes('"verbose": true') || content.includes('verbose: true')) {
        issues.push({
          type: 'verboseLogging',
          severity: 'low',
          message: 'Verbose logging enabled - consider reducing in production',
          recommendation: 'Use appropriate log levels for production'
        });
      }

      return issues;
    } catch (error) {
      this.log(`Error analyzing config file ${filePath}: ${error.message}`);
      return [];
    }
  }

  async scanEnvironmentVariables() {
    try {
      this.log('🌍 Scanning environment variables for security issues...');

      const envFiles = [
        '.env',
        '.env.local',
        '.env.production',
        '.env.development'
      ];

      const envIssues = [];

      for (const envFile of envFiles) {
        const filePath = path.join(this.projectRoot, envFile);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf8');
          const lines = content.split('\n');

          lines.forEach((line, index) => {
            if (line.includes('=') && !line.startsWith('#')) {
              const [key, value] = line.split('=');
              
              // Check for hardcoded secrets
              if (key.toLowerCase().includes('secret') || 
                  key.toLowerCase().includes('key') || 
                  key.toLowerCase().includes('password') ||
                  key.toLowerCase().includes('token')) {
                
                if (value && value.length > 0 && value !== '""' && value !== "''") {
                  envIssues.push({
                    file: envFile,
                    line: index + 1,
                    key: key.trim(),
                    severity: 'critical',
                    message: `Hardcoded secret in environment file: ${key.trim()}`,
                    recommendation: 'Use placeholder values and set actual secrets in production environment'
                  });
                }
              }
            }
          });
        }
      }

      return envIssues;
    } catch (error) {
      this.log(`Error scanning environment variables: ${error.message}`);
      return [];
    }
  }

  async generateSecurityReport() {
    try {
      this.log('📊 Generating comprehensive security report...');

      const report = {
        timestamp: new Date().toISOString(),
        summary: {
          totalFiles: 0,
          filesWithVulnerabilities: 0,
          totalVulnerabilities: 0,
          criticalVulnerabilities: 0,
          highVulnerabilities: 0,
          mediumVulnerabilities: 0,
          lowVulnerabilities: 0,
          overallRiskScore: 0
        },
        fileScans: [],
        dependencyScan: null,
        configIssues: [],
        envIssues: [],
        recommendations: []
      };

      // Scan source files
      const sourceDirs = ['src', 'scripts', 'utils', 'components'];
      for (const dir of sourceDirs) {
        const dirPath = path.join(this.projectRoot, dir);
        if (fs.existsSync(dirPath)) {
          const files = this.getFilesRecursively(dirPath);
          for (const file of files) {
            if (this.isCodeFile(file)) {
              const scanResult = await this.scanFile(file);
              if (scanResult) {
                report.fileScans.push(scanResult);
                report.summary.totalFiles++;
                
                if (scanResult.vulnerabilities.length > 0) {
                  report.summary.filesWithVulnerabilities++;
                  report.summary.totalVulnerabilities += scanResult.vulnerabilities.length;
                  
                  scanResult.vulnerabilities.forEach(vuln => {
                    switch (vuln.severity) {
                      case 'critical': report.summary.criticalVulnerabilities++; break;
                      case 'high': report.summary.highVulnerabilities++; break;
                      case 'medium': report.summary.mediumVulnerabilities++; break;
                      case 'low': report.summary.lowVulnerabilities++; break;
                    }
                  });
                }
              }
            }
          }
        }
      }

      // Calculate overall risk score
      const totalRiskScore = report.fileScans.reduce((sum, file) => sum + file.riskScore, 0);
      report.summary.overallRiskScore = Math.round(totalRiskScore / Math.max(report.fileScans.length, 1));

      // Scan dependencies
      report.dependencyScan = await this.scanDependencies();

      // Scan configuration files
      report.configIssues = await this.scanConfigurationFiles();

      // Scan environment variables
      report.envIssues = await this.scanEnvironmentVariables();

      // Generate recommendations
      if (report.summary.criticalVulnerabilities > 0) {
        report.recommendations.push('Critical vulnerabilities detected! Address these immediately before deployment.');
      }

      if (report.summary.highVulnerabilities > 0) {
        report.recommendations.push('High severity vulnerabilities found. Review and fix these issues soon.');
      }

      if (report.summary.overallRiskScore > 50) {
        report.recommendations.push('Overall risk score is high. Consider security review before deployment.');
      }

      if (report.envIssues.length > 0) {
        report.recommendations.push('Environment variables contain hardcoded secrets. Use proper secret management.');
      }

      if (report.dependencyScan?.npmAudit?.vulnerabilities?.length > 0) {
        report.recommendations.push('Dependencies have known vulnerabilities. Run npm audit fix and update packages.');
      }

      return report;
    } catch (error) {
      this.log(`Error generating security report: ${error.message}`);
      return null;
    }
  }

  getFilesRecursively(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getFilesRecursively(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  isCodeFile(filePath) {
    const codeExtensions = ['.js', '.jsx', '.ts', '.tsx', '.json', '.env'];
    return codeExtensions.some(ext => filePath.endsWith(ext));
  }

  async saveReport(report) {
    try {
      const logsDir = path.dirname(this.reportFile);
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }

      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      this.log(`📊 Security report saved: ${this.reportFile}`);
    } catch (error) {
      this.log(`Error saving report: ${error.message}`);
    }
  }

  async run() {
    this.log('🚀 Security Scanner starting...');

    try {
      // Generate comprehensive security report
      const report = await this.generateSecurityReport();
      
      if (report) {
        await this.saveReport(report);

        // Log summary
        this.log(`📊 Security scan completed. Overall risk score: ${report.summary.overallRiskScore}/100`);
        this.log(`🔍 Scanned ${report.summary.totalFiles} files, found ${report.summary.totalVulnerabilities} vulnerabilities`);
        
        if (report.summary.criticalVulnerabilities > 0) {
          this.log(`🚨 CRITICAL: ${report.summary.criticalVulnerabilities} critical vulnerabilities found!`);
        }
        
        if (report.summary.highVulnerabilities > 0) {
          this.log(`⚠️  HIGH: ${report.summary.highVulnerabilities} high severity vulnerabilities found`);
        }

        if (report.recommendations.length > 0) {
          this.log('💡 Security Recommendations:');
          report.recommendations.forEach(rec => this.log(`   - ${rec}`);
        }

        // Exit with appropriate code based on severity
        if (report.summary.criticalVulnerabilities > 0) {
          process.exit(1); // Exit with error for critical issues
        } else if (report.summary.highVulnerabilities > 0) {
          process.exit(2); // Exit with warning for high issues
        } else {
          process.exit(0); // Exit successfully
        }
      } else {
        this.log('❌ Failed to generate security report');
        process.exit(1);
      }

    } catch (error) {
      this.log(`❌ Security Scanner failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const scanner = new SecurityScanner();
  scanner.run();
}

module.exports = SecurityScanner;