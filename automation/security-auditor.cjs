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
        info: 0,
      },
    };
    this.logFile = path.join(__dirname, 'logs', 'security-auditor.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runSecurityAudit() {
    this.log('🔒 Starting Security Audit...');

    try {
      // Run npm audit
      await this.runNpmAudit();

      // Check for security issues in code
      await this.checkCodeSecurity();

      // Check for sensitive data
      await this.checkSensitiveData();

      // Check for security headers
      await this.checkSecurityHeaders();

      // Generate recommendations
      this.generateRecommendations();

      // Save results
      await this.saveResults();

      this.log('Security audit completed successfully');
      return this.auditResults;
    } catch (error) {
      this.log(`Security audit failed: ${error.message}`, 'ERROR');
      return null;
    }
  }

  async runNpmAudit() {
    this.log('Running npm audit...');

    try {
      const result = execSync('npm audit --json', {
        encoding: 'utf8',
        cwd: process.cwd(),
      });

      const auditData = JSON.parse(result);

      if (auditData.vulnerabilities) {
        Object.entries(auditData.vulnerabilities).forEach(([name, vuln]) => {
          this.auditResults.vulnerabilities.push({
            name,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation,
          });

          this.auditResults.summary[vuln.severity]++;
        });
      }
    } catch (error) {
      this.log(`NPM audit failed: ${error.message}`, 'WARNING');
    }
  }

  async checkCodeSecurity() {
    this.log('Checking code security...');

    try {
      const issues = [];

      // Check for hardcoded secrets
      const hardcodedSecrets = this.findPattern(
        /password\s*=\s*['"][^'"]+['"]|api[_-]?key\s*=\s*['"][^'"]+['"]|secret\s*=\s*['"][^'"]+['"]/gi,
        '**/*.{js,jsx,ts,tsx}'
      );
      if (hardcodedSecrets.length > 0) {
        issues.push({
          type: 'hardcoded_secrets',
          severity: 'critical',
          count: hardcodedSecrets.length,
          description: 'Hardcoded secrets detected in code',
        });
      }

      // Check for dangerous functions
      const dangerousFunctions = this.findPattern(
        /eval\s*\(|innerHTML\s*=|document\.write\s*\(/g,
        '**/*.{js,jsx,ts,tsx}'
      );
      if (dangerousFunctions.length > 0) {
        issues.push({
          type: 'dangerous_functions',
          severity: 'high',
          count: dangerousFunctions.length,
          description: 'Dangerous functions detected',
        });
      }

      // Check for SQL injection patterns
      const sqlInjection = this.findPattern(
        /query\s*\(\s*['"][^'"]*\+/g,
        '**/*.{js,jsx,ts,tsx}'
      );
      if (sqlInjection.length > 0) {
        issues.push({
          type: 'sql_injection',
          severity: 'high',
          count: sqlInjection.length,
          description: 'Potential SQL injection vulnerabilities',
        });
      }

      this.auditResults.securityIssues = issues;
    } catch (error) {
      this.log(`Code security check failed: ${error.message}`, 'ERROR');
    }
  }

  async checkSensitiveData() {
    this.log('Checking for sensitive data...');

    try {
      const sensitivePatterns = [
        {
          pattern: /password\s*[:=]\s*['"][^'"]+['"]/gi,
          type: 'password',
          severity: 'critical',
        },
        {
          pattern: /api[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi,
          type: 'api_key',
          severity: 'critical',
        },
        {
          pattern: /secret\s*[:=]\s*['"][^'"]+['"]/gi,
          type: 'secret',
          severity: 'critical',
        },
        {
          pattern: /token\s*[:=]\s*['"][^'"]+['"]/gi,
          type: 'token',
          severity: 'high',
        },
        {
          pattern: /private[_-]?key\s*[:=]\s*['"][^'"]+['"]/gi,
          type: 'private_key',
          severity: 'critical',
        },
      ];

      const sensitiveData = [];

      sensitivePatterns.forEach(({ pattern, type, severity }) => {
        const matches = this.findPattern(
          pattern,
          '**/*.{js,jsx,ts,tsx,json,env}'
        );
        if (matches.length > 0) {
          sensitiveData.push({
            type,
            severity,
            count: matches.length,
            description: `Sensitive ${type} data detected`,
          });
        }
      });

      this.auditResults.securityIssues.push(...sensitiveData);
    } catch (error) {
      this.log(`Sensitive data check failed: ${error.message}`, 'ERROR');
    }
  }

  async checkSecurityHeaders() {
    this.log('Checking security headers...');

    try {
      // This would typically check a running application
      // For now, we'll check if security headers are configured
      const nextConfig = path.join(process.cwd(), 'next.config.js');
      const middleware = path.join(process.cwd(), 'middleware.ts');

      const securityConfig = {
        nextConfigExists: fs.existsSync(nextConfig),
        middlewareExists: fs.existsSync(middleware),
        hasSecurityHeaders: false,
      };

      if (fs.existsSync(nextConfig)) {
        const configContent = fs.readFileSync(nextConfig, 'utf8');
        securityConfig.hasSecurityHeaders =
          configContent.includes('security') ||
          configContent.includes('headers') ||
          configContent.includes('csp');
      }

      this.auditResults.securityIssues.push({
        type: 'security_headers',
        severity: 'medium',
        count: securityConfig.hasSecurityHeaders ? 0 : 1,
        description: securityConfig.hasSecurityHeaders
          ? 'Security headers configured'
          : 'Security headers not configured',
      });
    } catch (error) {
      this.log(`Security headers check failed: ${error.message}`, 'ERROR');
    }
  }

  findPattern(pattern, globPattern) {
    try {
      const result = execSync(
        `grep -r "${pattern}" --include="*.js" --include="*.jsx" --include="*.ts" --include="*.tsx" --include="*.json" --include="*.env" . || true`,
        {
          encoding: 'utf8',
          cwd: process.cwd(),
        }
      );
      return result.split('\n').filter(line => line.trim());
    } catch (error) {
      return [];
    }
  }

  generateRecommendations() {
    const recommendations = [];

    // Vulnerability recommendations
    if (this.auditResults.summary.critical > 0) {
      recommendations.push('Address critical vulnerabilities immediately');
    }

    if (this.auditResults.summary.high > 0) {
      recommendations.push(
        'Address high severity vulnerabilities as soon as possible'
      );
    }

    // Security issue recommendations
    const criticalIssues = this.auditResults.securityIssues.filter(
      i => i.severity === 'critical'
    );
    if (criticalIssues.length > 0) {
      recommendations.push(
        'Remove hardcoded secrets and sensitive data from code'
      );
    }

    const highIssues = this.auditResults.securityIssues.filter(
      i => i.severity === 'high'
    );
    if (highIssues.length > 0) {
      recommendations.push('Review and fix dangerous function usage');
    }

    // General recommendations
    recommendations.push('Implement proper security headers');
    recommendations.push('Use environment variables for sensitive data');
    recommendations.push('Regularly update dependencies');
    recommendations.push('Implement input validation and sanitization');

    this.auditResults.recommendations = recommendations;
  }

  async saveResults() {
    const resultsFile = path.join(
      __dirname,
      'reports',
      'security-audit-results.json'
    );
    fs.mkdirSync(path.dirname(resultsFile), { recursive: true });
    fs.writeFileSync(resultsFile, JSON.stringify(this.auditResults, null, 2));
    this.log(`Security audit results saved to: ${resultsFile}`);
  }
}

// Run if called directly
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.runSecurityAudit().catch(console.error);
}

module.exports = SecurityAuditor;
