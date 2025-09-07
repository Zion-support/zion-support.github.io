#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class IntelligentSecurityScanner {
  constructor() {
    this.securityMetrics = {
      vulnerabilities: 0,
      outdatedPackages: 0,
      securityIssues: 0,
      complianceScore: 100,
      lastScan: null
    };
    
    this.securityHistory = [];
    this.securityIssues = [];
    this.remediationActions = [];
    this.scanResults = {};
    
    this.startMonitoring();
  }

  async startMonitoring() {
    console.log('🔒 Intelligent Security Scanner Started');
    
    // Run security scan every 30 minutes
    setInterval(() => this.runSecurityScan(), 30 * 60 * 1000);
    
    // Monitor package changes
    this.watchPackageFiles();
    
    // Run initial scan
    await this.runSecurityScan();
  }

  async runSecurityScan() {
    try {
      console.log('🔍 Running comprehensive security scan...');
      
      // Scan npm packages for vulnerabilities
      await this.scanNpmVulnerabilities();
      
      // Check for outdated packages
      await this.checkOutdatedPackages();
      
      // Scan for security anti-patterns in code
      await this.scanCodeSecurity();
      
      // Check environment configuration
      await this.checkEnvironmentSecurity();
      
      // Check for exposed secrets
      await this.scanForSecrets();
      
      // Generate security report
      this.generateSecurityReport();
      
      // Update last scan time
      this.securityMetrics.lastScan = new Date();
      
    } catch (error) {
      console.error('❌ Security scan failed:', error.message);
    }
  }

  async scanNpmVulnerabilities() {
    try {
      // Run npm audit
      const auditResult = await this.runNpmAudit();
      
      if (auditResult.vulnerabilities) {
        this.securityMetrics.vulnerabilities = Object.keys(auditResult.vulnerabilities).length;
        
        // Process each vulnerability
        Object.entries(auditResult.vulnerabilities).forEach(([packageName, vulnData]) => {
          const vuln = vulnData[0]; // Get first vulnerability
          
          this.securityIssues.push({
            type: 'npm_vulnerability',
            severity: vuln.severity,
            package: packageName,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation,
            cwe: vuln.cwe,
            cvss: vuln.cvss,
            action: `Run: npm audit fix --force`,
            impact: 'Application security and data integrity'
          });
        });
      } else {
        this.securityMetrics.vulnerabilities = 0;
      }
      
      // Check for security advisories
      if (auditResult.advisories) {
        Object.entries(auditResult.advisories).forEach(([id, advisory]) => {
          this.securityIssues.push({
            type: 'security_advisory',
            severity: advisory.severity,
            package: advisory.module_name,
            title: advisory.title,
            description: advisory.overview,
            recommendation: advisory.recommendation,
            action: `Update ${advisory.module_name} to version ${advisory.recommendation}`,
            impact: 'Application security'
          });
        });
      }
      
    } catch (error) {
      console.error('❌ NPM vulnerability scan failed:', error.message);
    }
  }

  async runNpmAudit() {
    return new Promise((resolve) => {
      exec('npm audit --json', (error, stdout) => {
        if (error) {
          // Parse error output for vulnerabilities
          try {
            const result = JSON.parse(stdout);
            resolve(result);
          } catch {
            resolve({ vulnerabilities: {}, advisories: {} });
          }
        } else {
          try {
            const result = JSON.parse(stdout);
            resolve(result);
          } catch {
            resolve({ vulnerabilities: {}, advisories: {} });
          }
        }
      });
    });
  }

  async checkOutdatedPackages() {
    try {
      const outdatedResult = await this.runNpmOutdated();
      this.securityMetrics.outdatedPackages = outdatedResult.length;
      
      outdatedResult.forEach(package => {
        this.securityIssues.push({
          type: 'outdated_package',
          severity: 'medium',
          package: package.name,
          title: `Outdated package: ${package.name}`,
          description: `Current: ${package.current}, Latest: ${package.latest}`,
          recommendation: `Update to latest version for security patches`,
          action: `npm update ${package.name}`,
          impact: 'Missing security updates and bug fixes'
        });
      });
      
    } catch (error) {
      console.error('❌ Outdated packages check failed:', error.message);
    }
  }

  async runNpmOutdated() {
    return new Promise((resolve) => {
      exec('npm outdated --json', (error, stdout) => {
        if (error) {
          try {
            const result = JSON.parse(stdout);
            resolve(Object.values(result));
          } catch {
            resolve([]);
          }
        } else {
          resolve([]);
        }
      });
    });
  }

  async scanCodeSecurity() {
    try {
      const sourceFiles = this.getSourceFiles();
      
      for (const file of sourceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        await this.analyzeFileSecurity(content, file);
      }
      
    } catch (error) {
      console.error('❌ Code security scan failed:', error.message);
    }
  }

  async analyzeFileSecurity(content, filePath) {
    const fileName = path.basename(filePath);
    
    // Check for common security anti-patterns
    const securityPatterns = [
      {
        pattern: /eval\s*\(/g,
        type: 'code_injection',
        severity: 'critical',
        message: 'eval() function detected - potential code injection vulnerability',
        action: 'Replace eval() with safer alternatives like JSON.parse() or Function constructor',
        impact: 'Remote code execution'
      },
      {
        pattern: /innerHTML\s*=/g,
        type: 'xss',
        severity: 'high',
        message: 'innerHTML assignment detected - potential XSS vulnerability',
        action: 'Use textContent or createElement for safe DOM manipulation',
        impact: 'Cross-site scripting attacks'
      },
      {
        pattern: /document\.write\s*\(/g,
        type: 'xss',
        severity: 'high',
        message: 'document.write() detected - potential XSS vulnerability',
        action: 'Use safer DOM manipulation methods',
        impact: 'Cross-site scripting attacks'
      },
      {
        pattern: /localStorage\s*\.\s*setItem\s*\([^,]+,\s*[^)]*\)/g,
        type: 'data_exposure',
        severity: 'medium',
        message: 'Sensitive data stored in localStorage',
        action: 'Review data being stored and consider encryption or sessionStorage',
        impact: 'Data exposure in browser storage'
      },
      {
        pattern: /password\s*[:=]\s*['"][^'"]*['"]/g,
        type: 'hardcoded_credentials',
        severity: 'high',
        message: 'Hardcoded password detected',
        action: 'Move credentials to environment variables or secure configuration',
        impact: 'Credential exposure'
      },
      {
        pattern: /api_key\s*[:=]\s*['"][^'"]*['"]/g,
        type: 'hardcoded_credentials',
        severity: 'high',
        message: 'Hardcoded API key detected',
        action: 'Move API keys to environment variables',
        impact: 'API key exposure'
      },
      {
        pattern: /http:\/\//g,
        type: 'insecure_protocol',
        severity: 'medium',
        message: 'HTTP protocol detected - use HTTPS for security',
        action: 'Update URLs to use HTTPS protocol',
        impact: 'Data interception and man-in-the-middle attacks'
      },
      {
        pattern: /\.env\s*$/gm,
        type: 'env_file_exposure',
        severity: 'medium',
        message: 'Environment file reference detected',
        action: 'Ensure .env files are in .gitignore and not committed',
        impact: 'Environment variable exposure'
      }
    ];
    
    securityPatterns.forEach(pattern => {
      if (pattern.pattern.test(content)) {
        this.securityIssues.push({
          type: pattern.type,
          severity: pattern.severity,
          file: filePath,
          title: pattern.message,
          description: `Security issue detected in ${fileName}`,
          recommendation: pattern.action,
          action: pattern.action,
          impact: pattern.impact
        });
      }
    });
    
    // Check for specific security issues in different file types
    if (fileName.endsWith('.js') || fileName.endsWith('.ts') || fileName.endsWith('.jsx') || fileName.endsWith('.tsx')) {
      this.checkJavaScriptSecurity(content, filePath);
    }
    
    if (fileName.endsWith('.json')) {
      this.checkJsonSecurity(content, filePath);
    }
  }

  checkJavaScriptSecurity(content, filePath) {
    // Check for unsafe regex patterns
    const unsafeRegex = /new RegExp\s*\([^)]*\)/g;
    if (unsafeRegex.test(content)) {
      this.securityIssues.push({
        type: 'regex_injection',
        severity: 'medium',
        file: filePath,
        title: 'Dynamic regex construction detected',
        description: 'Potential regex injection vulnerability',
        recommendation: 'Validate and sanitize regex input',
        action: 'Add input validation for regex patterns',
        impact: 'Regex injection attacks'
      });
    }
    
    // Check for prototype pollution
    const prototypePollution = /__proto__|prototype|constructor/g;
    if (prototypePollution.test(content)) {
      this.securityIssues.push({
        type: 'prototype_pollution',
        severity: 'high',
        file: filePath,
        title: 'Prototype manipulation detected',
        description: 'Potential prototype pollution vulnerability',
        recommendation: 'Use Object.create(null) or validate object properties',
        action: 'Review object property assignments',
        impact: 'Prototype pollution attacks'
      });
    }
  }

  checkJsonSecurity(content, filePath) {
    try {
      const json = JSON.parse(content);
      
      // Check for sensitive keys in JSON files
      const sensitiveKeys = ['password', 'secret', 'key', 'token', 'auth', 'credential'];
      const checkSensitiveData = (obj, path = '') => {
        Object.entries(obj).forEach(([key, value]) => {
          const currentPath = path ? `${path}.${key}` : key;
          
          if (sensitiveKeys.some(sensitive => key.toLowerCase().includes(sensitive))) {
            this.securityIssues.push({
              type: 'sensitive_data_exposure',
              severity: 'high',
              file: filePath,
              title: `Sensitive data detected: ${currentPath}`,
              description: 'Sensitive information found in JSON file',
              recommendation: 'Move sensitive data to environment variables',
              action: 'Review and secure sensitive data',
              impact: 'Data exposure'
            });
          }
          
          if (typeof value === 'object' && value !== null) {
            checkSensitiveData(value, currentPath);
          }
        });
      };
      
      checkSensitiveData(json);
      
    } catch (error) {
      // Invalid JSON - this might be a security issue
      this.securityIssues.push({
        type: 'invalid_json',
        severity: 'low',
        file: filePath,
        title: 'Invalid JSON format',
        description: 'File contains invalid JSON syntax',
        recommendation: 'Fix JSON syntax errors',
        action: 'Validate JSON syntax',
        impact: 'Application errors'
      });
    }
  }

  async checkEnvironmentSecurity() {
    try {
      // Check for .env files
      const envFiles = ['.env', '.env.local', '.env.development', '.env.production'];
      
      envFiles.forEach(envFile => {
        if (fs.existsSync(envFile)) {
          const content = fs.readFileSync(envFile, 'utf8');
          
          // Check for exposed secrets
          const secretPatterns = [
            /password\s*=\s*[^#\n]+/gi,
            /secret\s*=\s*[^#\n]+/gi,
            /key\s*=\s*[^#\n]+/gi,
            /token\s*=\s*[^#\n]+/gi
          ];
          
          secretPatterns.forEach(pattern => {
            if (pattern.test(content)) {
              this.securityIssues.push({
                type: 'env_secret_exposure',
                severity: 'high',
                file: envFile,
                title: 'Environment secret detected',
                description: 'Sensitive data found in environment file',
                recommendation: 'Ensure .env files are not committed to version control',
                action: 'Add .env files to .gitignore',
                impact: 'Credential exposure'
              });
            }
          });
        }
      });
      
      // Check .gitignore for .env files
      if (fs.existsSync('.gitignore')) {
        const gitignore = fs.readFileSync('.gitignore', 'utf8');
        if (!gitignore.includes('.env')) {
          this.securityIssues.push({
            type: 'gitignore_missing',
            severity: 'medium',
            file: '.gitignore',
            title: '.env files not in .gitignore',
            description: 'Environment files may be committed accidentally',
            recommendation: 'Add .env* to .gitignore file',
            action: 'Update .gitignore to exclude environment files',
            impact: 'Accidental credential exposure'
          });
        }
      }
      
    } catch (error) {
      console.error('❌ Environment security check failed:', error.message);
    }
  }

  async scanForSecrets() {
    try {
      const sourceFiles = this.getSourceFiles();
      
      for (const file of sourceFiles) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for common secret patterns
        const secretPatterns = [
          {
            pattern: /sk_live_[a-zA-Z0-9]{24}/g,
            type: 'stripe_live_key',
            severity: 'critical',
            message: 'Stripe live key detected in source code'
          },
          {
            pattern: /pk_live_[a-zA-Z0-9]{24}/g,
            type: 'stripe_live_key',
            severity: 'critical',
            message: 'Stripe live public key detected in source code'
          },
          {
            pattern: /AIza[0-9A-Za-z-_]{35}/g,
            type: 'google_api_key',
            severity: 'high',
            message: 'Google API key detected in source code'
          },
          {
            pattern: /ghp_[a-zA-Z0-9]{36}/g,
            type: 'github_token',
            severity: 'critical',
            message: 'GitHub personal access token detected in source code'
          }
        ];
        
        secretPatterns.forEach(secret => {
          if (secret.pattern.test(content)) {
            this.securityIssues.push({
              type: secret.type,
              severity: secret.severity,
              file: file,
              title: secret.message,
              description: 'API key or secret found in source code',
              recommendation: 'Move secrets to environment variables immediately',
              action: 'Remove secrets from code and rotate keys',
              impact: 'Complete account compromise'
            });
          }
        });
      }
      
    } catch (error) {
      console.error('❌ Secret scanning failed:', error.message);
    }
  }

  getSourceFiles() {
    const sourceDirs = ['src', 'server/src', 'pages', 'components', 'utils'];
    const sourceFiles = [];
    
    sourceDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        this.walkDirectory(dir, sourceFiles);
      }
    });
    
    return sourceFiles.filter(file => 
      file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || 
      file.endsWith('.jsx') || file.endsWith('.json') || file.endsWith('.env')
    );
  }

  walkDirectory(dir, files) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.walkDirectory(fullPath, files);
      } else {
        files.push(fullPath);
      }
    });
  }

  generateSecurityReport() {
    const report = {
      timestamp: new Date(),
      securityMetrics: this.securityMetrics,
      securityIssues: this.securityIssues,
      securityHistory: this.securityHistory
    };
    
    // Calculate security score
    const securityScore = this.calculateSecurityScore();
    
    // Save report to file
    fs.writeFileSync(
      path.join(__dirname, '../logs/security-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    // Log summary
    console.log('\n🔒 Security Report:');
    console.log(`   Security Score: ${securityScore}/100`);
    console.log(`   Vulnerabilities: ${this.securityMetrics.vulnerabilities}`);
    console.log(`   Outdated Packages: ${this.securityMetrics.outdatedPackages}`);
    console.log(`   Security Issues: ${this.securityIssues.length}`);
    console.log(`   Compliance Score: ${this.securityMetrics.complianceScore}%`);
    
    if (this.securityIssues.length > 0) {
      console.log('\n⚠️  Security Issues Found:');
      this.securityIssues
        .sort((a, b) => this.getSeverityScore(b.severity) - this.getSeverityScore(a.severity))
        .slice(0, 10) // Show top 10 issues
        .forEach((issue, index) => {
          console.log(`   ${index + 1}. [${issue.severity.toUpperCase()}] ${issue.title}`);
          console.log(`      File: ${issue.file}`);
          console.log(`      Action: ${issue.action}`);
          console.log(`      Impact: ${issue.impact}`);
        });
    }
    
    // Update security history
    this.securityHistory.push({
      timestamp: new Date(),
      securityScore,
      metrics: { ...this.securityMetrics },
      issuesCount: this.securityIssues.length
    });
    
    // Keep only last 50 entries
    if (this.securityHistory.length > 50) {
      this.securityHistory = this.securityHistory.slice(-50);
    }
  }

  calculateSecurityScore() {
    let score = 100;
    
    // Deduct points for each vulnerability type
    score -= this.securityMetrics.vulnerabilities * 15;
    score -= this.securityMetrics.outdatedPackages * 5;
    
    // Deduct points for security issues by severity
    this.securityIssues.forEach(issue => {
      const severityDeduction = this.getSeverityScore(issue.severity) * 5;
      score -= severityDeduction;
    });
    
    return Math.max(0, score);
  }

  getSeverityScore(severity) {
    const scores = { critical: 4, high: 3, medium: 2, low: 1 };
    return scores[severity] || 0;
  }

  watchPackageFiles() {
    const packageFiles = ['package.json', 'package-lock.json', 'server/package.json'];
    
    packageFiles.forEach(file => {
      if (fs.existsSync(file)) {
        fs.watch(file, (eventType, filename) => {
          if (eventType === 'change') {
            console.log(`📦 Package file changed: ${filename}`);
            this.scheduleSecurityScan();
          }
        });
      }
    });
  }

  scheduleSecurityScan() {
    // Debounce security scan to avoid excessive runs
    if (this.scanTimeout) {
      clearTimeout(this.scanTimeout);
    }
    
    this.scanTimeout = setTimeout(() => {
      this.runSecurityScan();
    }, 30000); // Wait 30 seconds after last package change
  }
}

// Start the scanner
const scanner = new IntelligentSecurityScanner();

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Security Scanner...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down Security Scanner...');
  process.exit(0);
});