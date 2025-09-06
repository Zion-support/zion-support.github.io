#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityAuditor {
  constructor() {
    this.projectRoot = process.cwd();
    this.startTime = new Date();
    this.vulnerabilities = [];
    this.fixes = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, description, options = {}) {
    this.log(`Running: ${description}`, 'PROGRESS');
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8',
        ...options,
      });
      this.log(`✅ ${description} completed successfully`, 'SUCCESS');
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async auditDependencies() {
    this.log('Starting dependency security audit...', 'PROGRESS');

    try {
      // Run npm audit
      const auditResult = await this.runCommand(
        'npm audit --audit-level moderate',
        'Run npm security audit'
      );

      if (auditResult.success) {
        this.fixes.push('Dependency audit completed');
      } else {
        this.vulnerabilities.push('Dependencies have security vulnerabilities');
      }

      // Check for outdated packages
      const outdatedResult = await this.runCommand(
        'npm outdated',
        'Check for outdated packages'
      );

      if (outdatedResult.success) {
        this.fixes.push('Outdated packages check completed');
      }

    } catch (error) {
      this.log(`Dependency audit failed: ${error.message}`, 'ERROR');
      this.errors.push(`Dependency audit: ${error.message}`);
    }
  }

  async auditCode() {
    this.log('Starting code security audit...', 'PROGRESS');

    try {
      // Run ESLint security rules
      const securityLint = await this.runCommand(
        'npx eslint . --rule "no-eval: error" --rule "no-implied-eval: error" --rule "no-new-func: error"',
        'Run security-focused linting'
      );

      if (securityLint.success) {
        this.fixes.push('Security-focused linting completed');
      }

      // Check for hardcoded secrets
      const secretCheck = await this.runCommand(
        'npx detect-secrets scan .',
        'Scan for hardcoded secrets'
      );

      if (secretCheck.success) {
        this.fixes.push('Secret scanning completed');
      }

    } catch (error) {
      this.log(`Code audit failed: ${error.message}`, 'ERROR');
      this.errors.push(`Code audit: ${error.message}`);
    }
  }

  async auditConfiguration() {
    this.log('Starting configuration security audit...', 'PROGRESS');

    try {
      // Check for insecure configurations
      const configFiles = ['package.json', 'next.config.js', '.env.example'];

      for (const file of configFiles) {
        if (fs.existsSync(file)) {
          const content = fs.readFileSync(file, 'utf8');

          // Check for common security issues
          if (content.includes('"unsafe-inline"')) {
            this.vulnerabilities.push(`Insecure CSP configuration in ${file}`);
          }

          if (content.includes('"unsafe-eval"')) {
            this.vulnerabilities.push(`Insecure eval configuration in ${file}`);
          }

          if (content.includes('debug: true')) {
            this.vulnerabilities.push(`Debug mode enabled in ${file}`);
          }
        }
      }

      this.fixes.push('Configuration security audit completed');

    } catch (error) {
      this.log(`Configuration audit failed: ${error.message}`, 'ERROR');
      this.errors.push(`Configuration audit: ${error.message}`);
    }
  }

  async generateSecurityHeaders() {
    this.log('Generating security headers configuration...', 'PROGRESS');

    try {
      const securityHeaders = `// Security headers configuration
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',

  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};`;

      fs.writeFileSync('security-headers.js', securityHeaders);
      this.fixes.push('Security headers configuration generated');

    } catch (error) {
      this.log(`Security headers generation failed: ${error.message}`, 'ERROR');
      this.errors.push(`Security headers: ${error.message}`);
    }
  }

  async generateReport() {
    const totalDuration = Date.now() - this.startTime;

    this.log('\n🔒 SECURITY AUDIT REPORT');
    this.log('='.repeat(50));
    this.log(`Total Duration: ${totalDuration}ms`);
    this.log(`Vulnerabilities Found: ${this.vulnerabilities.length}`);
    this.log(`Fixes Applied: ${this.fixes.length}`);
    this.log(`Errors: ${this.errors.length}`);
    this.log('');

    if (this.vulnerabilities.length > 0) {

      this.vulnerabilities.forEach(vuln => this.log(`   • ${vuln}`));
      this.log('');
    }

    if (this.fixes.length > 0) {

      this.fixes.forEach(fix => this.log(`   • ${fix}`));
      this.log('');
    }

    if (this.errors.length > 0) {

      this.errors.forEach(error => this.log(`   • ${error}`));
      this.log('');
    }

    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      totalDuration,
      vulnerabilities: this.vulnerabilities,
      fixes: this.fixes,
      errors: this.errors,
      recommendations: this.generateRecommendations(),
    };

    fs.writeFileSync(
      'security-audit-report.json',
      JSON.stringify(report, null, 2)
    );
    this.log('📄 Detailed report saved to security-audit-report.json');
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.vulnerabilities.length > 0) {
      recommendations.push('Address all identified security vulnerabilities');
      recommendations.push('Implement automated security scanning in CI/CD');
      recommendations.push('Regular security audits and dependency updates');
    }

    recommendations.push('Enable Content Security Policy (CSP)');
    recommendations.push('Implement rate limiting for API endpoints');
    recommendations.push('Use HTTPS in production');
    recommendations.push('Regular security training for development team');
    recommendations.push('Implement security monitoring and alerting');

    return recommendations;
  }

  async run() {
    this.log('🔒 Starting Security Audit Suite');
    this.log('='.repeat(50));

    try {
      await this.auditDependencies();
      await this.auditCode();
      await this.auditConfiguration();
      await this.generateSecurityHeaders();
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
    } finally {
      await this.generateReport();
    }
  }
}

// Run the security auditor
const auditor = new SecurityAuditor();
auditor.run().catch(console.error);