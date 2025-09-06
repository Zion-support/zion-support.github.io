#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityAuditor {
  constructor() {
    this.auditResults = {
      timestamp: new Date().toISOString(),
      vulnerabilities: [],
      securityIssues: [],
      recommendations: [],
      summary: {
        critical: 0,
        high: 0,
        medium: 0,
        low: 0,
        info: 0
      }
    };
  }

  async runSecurityAudit() {
    console.log('🔒 Starting Security Audit...');
    
    try {
      // Run npm audit
      await this.runNpmAudit();
      
      // Check for security anti-patterns
      await this.checkSecurityAntiPatterns();
      
      // Check for sensitive data exposure
      await this.checkSensitiveData();
      
      // Check for insecure dependencies
      await this.checkInsecureDependencies();
      
      // Generate security recommendations
      this.generateSecurityRecommendations();
      
      console.log('✅ Security Audit completed');
      
    } catch (error) {
      console.error('❌ Security Audit failed:', error.message);
    }
  }

  async runNpmAudit() {
    try {
      console.log('Running npm audit...');
      const output = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(output);
      
      if (auditData.vulnerabilities) {
        Object.entries(auditData.vulnerabilities).forEach(([name, vuln]) => {
          this.auditResults.vulnerabilities.push({
            name,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation,
            via: vuln.via
          });
          
          this.auditResults.summary[vuln.severity]++;
        });
      }
      
    } catch (error) {
      console.warn('npm audit failed:', error.message);
    }
  }

  async checkSecurityAntiPatterns() {
    console.log('Checking for security anti-patterns...');
    
    const antiPatterns = [
      {
        pattern: /eval\s*\(/g,
        severity: 'high',
        message: 'eval() usage detected - potential code injection vulnerability',
        file: null
      },
      {
        pattern: /innerHTML\s*=/g,
        severity: 'medium',
        message: 'innerHTML usage detected - potential XSS vulnerability',
        file: null
      },
      {
        pattern: /document\.write\s*\(/g,
        severity: 'medium',
        message: 'document.write() usage detected - potential XSS vulnerability',
        file: null
      },
      {
        pattern: /localStorage\.setItem\s*\([^,]+,\s*[^)]*password/gi,
        severity: 'high',
        message: 'Password stored in localStorage - security risk',
        file: null
      },
      {
        pattern: /sessionStorage\.setItem\s*\([^,]+,\s*[^)]*password/gi,
        severity: 'high',
        message: 'Password stored in sessionStorage - security risk',
        file: null
      }
    ];
    
    this.scanFilesForPatterns(antiPatterns);
  }

  async checkSensitiveData() {
    console.log('Checking for sensitive data exposure...');
    
    const sensitivePatterns = [
      {
        pattern: /(api[_-]?key|secret|password|token)\s*[:=]\s*['"][^'"]+['"]/gi,
        severity: 'high',
        message: 'Hardcoded API key or secret detected',
        file: null
      },
      {
        pattern: /(mongodb|mysql|postgresql):\/\/[^:]+:[^@]+@/gi,
        severity: 'high',
        message: 'Database connection string with credentials detected',
        file: null
      },
      {
        pattern: /(sk_|pk_|rk_)[a-zA-Z0-9]{20,}/g,
        severity: 'high',
        message: 'Stripe API key detected',
        file: null
      },
      {
        pattern: /(AIza[0-9A-Za-z\\-_]{35})/g,
        severity: 'high',
        message: 'Google API key detected',
        file: null
      }
    ];
    
    this.scanFilesForPatterns(sensitivePatterns);
  }

  async checkInsecureDependencies() {
    console.log('Checking for insecure dependencies...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const insecureDeps = [
        'request', // deprecated
        'node-uuid', // deprecated
        'hoek', // vulnerable
        'lodash', // if old version
        'moment' // if old version
      ];
      
      insecureDeps.forEach(dep => {
        if (dependencies[dep]) {
          this.auditResults.securityIssues.push({
            type: 'insecure-dependency',
            severity: 'medium',
            message: `Potentially insecure dependency: ${dep}`,
            recommendation: `Consider updating or replacing ${dep}`,
            file: 'package.json'
          });
          
          this.auditResults.summary.medium++;
        }
      });
      
    } catch (error) {
      console.warn('Could not check dependencies:', error.message);
    }
  }

  scanFilesForPatterns(patterns) {
    const scanDirectory = (dir) => {
      try {
        const files = fs.readdirSync(dir);
        
        files.forEach(file => {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
            scanDirectory(filePath);
          } else if (stat.isFile() && this.isCodeFile(file)) {
            this.scanFileForPatterns(filePath, patterns);
          }
        });
      } catch (error) {
        // Ignore directory read errors
      }
    };
    
    scanDirectory(process.cwd());
  }

  isCodeFile(filename) {
    const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
    return extensions.some(ext => filename.endsWith(ext));
  }

  scanFileForPatterns(filePath, patterns) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      patterns.forEach(pattern => {
        const matches = content.match(pattern.pattern);
        if (matches) {
          this.auditResults.securityIssues.push({
            type: 'security-anti-pattern',
            severity: pattern.severity,
            message: pattern.message,
            file: filePath,
            matches: matches.length
          });
          
          this.auditResults.summary[pattern.severity]++;
        }
      });
      
    } catch (error) {
      // Ignore file read errors
    }
  }

  generateSecurityRecommendations() {
    const recommendations = [];
    
    // Vulnerability recommendations
    if (this.auditResults.vulnerabilities.length > 0) {
      const criticalVulns = this.auditResults.vulnerabilities.filter(v => v.severity === 'critical');
      const highVulns = this.auditResults.vulnerabilities.filter(v => v.severity === 'high');
      
      if (criticalVulns.length > 0) {
        recommendations.push({
          type: 'vulnerabilities',
          priority: 'critical',
          message: `${criticalVulns.length} critical vulnerabilities found. Fix immediately.`,
          actions: [
            'Run npm audit fix to automatically fix vulnerabilities',
            'Update dependencies to latest secure versions',
            'Review and test after updates'
          ]
        });
      }
      
      if (highVulns.length > 0) {
        recommendations.push({
          type: 'vulnerabilities',
          priority: 'high',
          message: `${highVulns.length} high severity vulnerabilities found.`,
          actions: [
            'Review vulnerability details and apply fixes',
            'Consider updating to newer versions of affected packages',
            'Implement additional security measures if needed'
          ]
        });
      }
    }
    
    // Security anti-patterns recommendations
    const highSeverityIssues = this.auditResults.securityIssues.filter(issue => issue.severity === 'high');
    if (highSeverityIssues.length > 0) {
      recommendations.push({
        type: 'security-issues',
        priority: 'high',
        message: `${highSeverityIssues.length} high severity security issues found.`,
        actions: [
          'Remove or replace eval() usage with safer alternatives',
          'Use textContent instead of innerHTML where possible',
          'Implement proper input validation and sanitization',
          'Use secure storage for sensitive data'
        ]
      });
    }
    
    // General security recommendations
    recommendations.push({
      type: 'general',
      priority: 'medium',
      message: 'General security best practices',
      actions: [
        'Implement Content Security Policy (CSP)',
        'Use HTTPS in production',
        'Implement proper authentication and authorization',
        'Regular security audits and dependency updates',
        'Use environment variables for sensitive configuration'
      ]
    });
    
    this.auditResults.recommendations = recommendations;
  }

  saveReport() {
    const reportFile = path.join(__dirname, 'reports', 'security-audit-report.json');
    fs.mkdirSync(path.dirname(reportFile), { recursive: true });
    fs.writeFileSync(reportFile, JSON.stringify(this.auditResults, null, 2));
    
    console.log(`📊 Security audit report saved to: ${reportFile}`);
  }
}

// Run if called directly
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.runSecurityAudit()
    .then(() => {
      auditor.saveReport();
    })
    .catch(console.error);
}

module.exports = SecurityAuditor;