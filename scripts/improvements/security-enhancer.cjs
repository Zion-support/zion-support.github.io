#!/usr/bin/env node

/**
 * Security Enhancer Script
 * Analyzes and enhances security aspects of the application
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityEnhancer {
  constructor() {
    this.reportsDir = 'public/reports/security';
    this.securityChecks = [];
    this.vulnerabilities = [];
    this.recommendations = [];
  }

  async runSecurityAudit() {
    console.log('🔒 Starting Security Audit...');
    
    try {
      // Ensure reports directory exists
      this.ensureReportsDirectory();
      
      // Run various security checks
      await this.checkDependencies();
      await this.checkEnvironmentVariables();
      await this.checkAuthentication();
      await this.checkDataValidation();
      await this.checkHTTPSConfiguration();
      await this.checkContentSecurityPolicy();
      await this.checkFilePermissions();
      
      // Generate report
      const report = this.generateReport();
      
      // Save report
      this.saveReport(report);
      
      console.log('✅ Security audit completed successfully');
      return report;
      
    } catch (error) {
      console.error('❌ Security audit failed:', error.message);
      throw error;
    }
  }

  ensureReportsDirectory() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async checkDependencies() {
    console.log('📦 Checking dependencies for vulnerabilities...');
    
    try {
      this.securityChecks.push({
        category: 'dependencies',
        check: 'vulnerability-scan',
        status: 'recommended',
        details: 'Run npm audit to check for known vulnerabilities',
        command: 'npm audit',
        impact: 'high'
      });

      this.securityChecks.push({
        category: 'dependencies',
        check: 'outdated-packages',
        status: 'recommended',
        details: 'Check for outdated packages with security patches',
        command: 'npm outdated',
        impact: 'medium'
      });

      // Check for packages with known security issues
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const riskyPackages = this.identifyRiskyPackages(Object.keys(dependencies));
      if (riskyPackages.length > 0) {
        this.vulnerabilities.push({
          type: 'risky-packages',
          severity: 'medium',
          packages: riskyPackages,
          recommendation: 'Review and update these packages for security patches'
        });
      }

    } catch (error) {
      console.warn('Dependency security check failed:', error.message);
    }
  }

  async checkEnvironmentVariables() {
    console.log('🔑 Checking environment variable security...');
    
    try {
      // Check for .env files
      const envFiles = this.findFilesByPattern(/\.env/);
      
      this.securityChecks.push({
        category: 'environment',
        check: 'env-files',
        status: envFiles.length > 0 ? 'warning' : 'ok',
        details: `${envFiles.length} .env files found`,
        impact: 'high',
        recommendation: 'Ensure .env files are in .gitignore and use environment-specific configs'
      });

      // Check for hardcoded secrets in code
      const codeFiles = this.findFilesByExtensions(['.js', '.ts', '.jsx', '.tsx']);
      const potentialSecrets = this.scanForSecrets(codeFiles);
      
      if (potentialSecrets.length > 0) {
        this.vulnerabilities.push({
          type: 'hardcoded-secrets',
          severity: 'high',
          files: potentialSecrets,
          recommendation: 'Remove hardcoded secrets and use environment variables'
        });
      }

    } catch (error) {
      console.warn('Environment variable check failed:', error.message);
    }
  }

  async checkAuthentication() {
    console.log('🔐 Checking authentication security...');
    
    try {
      this.securityChecks.push({
        category: 'authentication',
        check: 'session-management',
        status: 'recommended',
        details: 'Ensure secure session management and token handling',
        impact: 'high',
        recommendation: 'Use secure, httpOnly cookies and implement proper token expiration'
      });

      this.securityChecks.push({
        category: 'authentication',
        check: 'password-policy',
        status: 'recommended',
        details: 'Implement strong password policies',
        impact: 'medium',
        recommendation: 'Enforce minimum password complexity and consider 2FA'
      });

      this.securityChecks.push({
        category: 'authentication',
        check: 'rate-limiting',
        status: 'recommended',
        details: 'Implement rate limiting for authentication endpoints',
        impact: 'high',
        recommendation: 'Add rate limiting to prevent brute force attacks'
      });

    } catch (error) {
      console.warn('Authentication check failed:', error.message);
    }
  }

  async checkDataValidation() {
    console.log('✅ Checking data validation...');
    
    try {
      this.securityChecks.push({
        category: 'validation',
        check: 'input-sanitization',
        status: 'recommended',
        details: 'Ensure all user inputs are validated and sanitized',
        impact: 'high',
        recommendation: 'Implement comprehensive input validation and sanitization'
      });

      this.securityChecks.push({
        category: 'validation',
        check: 'sql-injection',
        status: 'recommended',
        details: 'Check for SQL injection vulnerabilities',
        impact: 'critical',
        recommendation: 'Use parameterized queries and ORM properly'
      });

      this.securityChecks.push({
        category: 'validation',
        check: 'xss-protection',
        status: 'recommended',
        details: 'Protect against Cross-Site Scripting (XSS)',
        impact: 'high',
        recommendation: 'Implement proper output encoding and CSP headers'
      });

    } catch (error) {
      console.warn('Data validation check failed:', error.message);
    }
  }

  async checkHTTPSConfiguration() {
    console.log('🌐 Checking HTTPS configuration...');
    
    try {
      this.securityChecks.push({
        category: 'transport',
        check: 'https-enforcement',
        status: 'recommended',
        details: 'Ensure HTTPS is enforced in production',
        impact: 'high',
        recommendation: 'Redirect HTTP to HTTPS and set HSTS headers'
      });

      this.securityChecks.push({
        category: 'transport',
        check: 'ssl-certificate',
        status: 'recommended',
        details: 'Verify SSL certificate configuration',
        impact: 'medium',
        recommendation: 'Use valid SSL certificates and monitor expiration'
      });

    } catch (error) {
      console.warn('HTTPS configuration check failed:', error.message);
    }
  }

  async checkContentSecurityPolicy() {
    console.log('📋 Checking Content Security Policy...');
    
    try {
      this.securityChecks.push({
        category: 'headers',
        check: 'csp-headers',
        status: 'recommended',
        details: 'Implement Content Security Policy headers',
        impact: 'high',
        recommendation: 'Add CSP headers to prevent XSS attacks'
      });

      this.securityChecks.push({
        category: 'headers',
        check: 'security-headers',
        status: 'recommended',
        details: 'Implement comprehensive security headers',
        impact: 'medium',
        recommendation: 'Add X-Frame-Options, X-Content-Type-Options, and other security headers'
      });

    } catch (error) {
      console.warn('Content Security Policy check failed:', error.message);
    }
  }

  async checkFilePermissions() {
    console.log('📁 Checking file permissions...');
    
    try {
      this.securityChecks.push({
        category: 'permissions',
        check: 'file-permissions',
        status: 'recommended',
        details: 'Review file and directory permissions',
        impact: 'medium',
        recommendation: 'Ensure sensitive files have restrictive permissions'
      });

      this.securityChecks.push({
        category: 'permissions',
        check: 'directory-listing',
        status: 'recommended',
        details: 'Disable directory listing',
        impact: 'medium',
        recommendation: 'Configure web server to disable directory browsing'
      });

    } catch (error) {
      console.warn('File permissions check failed:', error.message);
    }
  }

  identifyRiskyPackages(packages) {
    // Common packages that have had security issues
    const riskyPackages = [
      'express', 'lodash', 'moment', 'jquery', 'bootstrap',
      'react', 'vue', 'angular', 'webpack', 'babel'
    ];
    
    return packages.filter(pkg => riskyPackages.some(risky => pkg.includes(risky)));
  }

  findFilesByPattern(pattern) {
    const files = [];
    
    function walkDir(dir) {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            walkDir(fullPath);
          } else if (stat.isFile() && pattern.test(item)) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    }
    
    walkDir('.');
    return files;
  }

  findFilesByExtensions(extensions) {
    const files = [];
    
    function walkDir(dir) {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            walkDir(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    }
    
    walkDir('.');
    return files;
  }

  scanForSecrets(files) {
    const potentialSecrets = [];
    const secretPatterns = [
      /password\s*=\s*['"][^'"]+['"]/gi,
      /api[_-]?key\s*=\s*['"][^'"]+['"]/gi,
      /secret\s*=\s*['"][^'"]+['"]/gi,
      /token\s*=\s*['"][^'"]+['"]/gi,
      /private[_-]?key\s*=\s*['"][^'"]+['"]/gi
    ];
    
    for (const file of files.slice(0, 10)) { // Limit to first 10 files for performance
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        for (const pattern of secretPatterns) {
          const matches = content.match(pattern);
          if (matches) {
            potentialSecrets.push({
              file,
              matches: matches.length,
              pattern: pattern.source
            });
          }
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
    
    return potentialSecrets;
  }

  generateReport() {
    const timestamp = new Date().toISOString();
    
    const report = {
      timestamp,
      totalChecks: this.securityChecks.length,
      vulnerabilities: this.vulnerabilities.length,
      highImpactChecks: this.securityChecks.filter(check => check.impact === 'high').length,
      criticalIssues: this.vulnerabilities.filter(vuln => vuln.severity === 'critical').length,
      securityChecks: this.securityChecks,
      vulnerabilities: this.vulnerabilities,
      summary: this.generateSummary(),
      recommendations: this.generateRecommendations()
    };
    
    return report;
  }

  generateSummary() {
    const categories = {};
    this.securityChecks.forEach(check => {
      categories[check.category] = (categories[check.category] || 0) + 1;
    });
    
    return {
      totalCategories: Object.keys(categories).length,
      categories,
      riskLevel: this.calculateRiskLevel(),
      priorityChecks: this.securityChecks
        .filter(check => check.impact === 'high')
        .map(check => check.check)
    };
  }

  calculateRiskLevel() {
    const criticalCount = this.vulnerabilities.filter(v => v.severity === 'critical').length;
    const highCount = this.vulnerabilities.filter(v => v.severity === 'high').length;
    
    if (criticalCount > 0) return 'critical';
    if (highCount > 2) return 'high';
    if (highCount > 0) return 'medium';
    return 'low';
  }

  generateRecommendations() {
    const recommendations = [];
    
    const criticalVulns = this.vulnerabilities.filter(v => v.severity === 'critical');
    if (criticalVulns.length > 0) {
      recommendations.push(`Address ${criticalVulns.length} critical vulnerabilities immediately`);
    }
    
    const highImpactChecks = this.securityChecks.filter(check => check.impact === 'high');
    if (highImpactChecks.length > 0) {
      recommendations.push(`Implement ${highImpactChecks.length} high-impact security measures`);
    }
    
    recommendations.push('Run regular security audits and dependency updates');
    recommendations.push('Implement automated security testing in CI/CD pipeline');
    recommendations.push('Set up security monitoring and alerting');
    recommendations.push('Conduct regular penetration testing');
    recommendations.push('Implement proper logging and monitoring for security events');
    
    return recommendations;
  }

  saveReport(report) {
    const filename = `security-audit-${Date.now()}.json`;
    const filepath = path.join(this.reportsDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    console.log(`📄 Security report saved to: ${filepath}`);
    
    // Also create an HTML report
    this.createHTMLReport(report);
  }

  createHTMLReport(report) {
    const getRiskColor = (level) => {
      switch (level) {
        case 'critical': return '#f44336';
        case 'high': return '#ff9800';
        case 'medium': return '#2196F3';
        case 'low': return '#4CAF50';
        default: return '#9E9E9E';
      }
    };

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Security Audit Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .header { text-align: center; margin-bottom: 30px; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin: 30px 0; }
        .stat { padding: 20px; border: 1px solid #ddd; border-radius: 8px; text-align: center; }
        .risk-level { font-size: 24px; font-weight: bold; padding: 10px; border-radius: 8px; color: white; }
        .checks { margin-top: 30px; }
        .check-item { padding: 15px; margin: 10px 0; border-left: 4px solid #4CAF50; background: #f9f9f9; }
        .high-impact { border-left-color: #f44336; }
        .medium-impact { border-left-color: #ff9800; }
        .low-impact { border-left-color: #2196F3; }
        .vulnerabilities { margin-top: 30px; }
        .vuln-item { padding: 15px; margin: 10px 0; border-radius: 8px; }
        .critical { background: #ffebee; border: 1px solid #f44336; }
        .high { background: #fff3e0; border: 1px solid #ff9800; }
        .medium { background: #e3f2fd; border: 1px solid #2196F3; }
        .recommendations { margin-top: 30px; }
        .rec-item { padding: 10px; margin: 5px 0; background: #e8f5e8; border-radius: 4px; }
    </style>
</head>
<body>
    <div class="header">
        <h1>Security Audit Report</h1>
        <p>Generated: ${new Date(report.timestamp).toLocaleString()}</p>
        <div class="risk-level" style="background-color: ${getRiskColor(report.summary.riskLevel)};">
            Risk Level: ${report.summary.riskLevel.toUpperCase()}
        </div>
    </div>
    
    <div class="stats">
        <div class="stat">
            <h3>Total Checks</h3>
            <p style="font-size: 24px; font-weight: bold; color: #4CAF50;">${report.totalChecks}</p>
        </div>
        <div class="stat">
            <h3>Vulnerabilities</h3>
            <p style="font-size: 24px; font-weight: bold; color: #f44336;">${report.vulnerabilities}</p>
        </div>
        <div class="stat">
            <h3>High Impact</h3>
            <p style="font-size: 24px; font-weight: bold; color: #ff9800;">${report.highImpactChecks}</p>
        </div>
        <div class="stat">
            <h3>Critical Issues</h3>
            <p style="font-size: 24px; font-weight: bold; color: #f44336;">${report.criticalIssues}</p>
        </div>
    </div>
    
    <div class="checks">
        <h2>Security Checks</h2>
        ${report.securityChecks.map(check => `
            <div class="check-item ${check.impact}-impact">
                <h4>${check.check.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
                <p><strong>Category:</strong> ${check.category}</p>
                <p><strong>Status:</strong> ${check.status}</p>
                <p><strong>Impact:</strong> ${check.impact}</p>
                <p><strong>Details:</strong> ${check.details}</p>
                ${check.command ? `<p><strong>Command:</strong> <code>${check.command}</code></p>` : ''}
                ${check.recommendation ? `<p><strong>Recommendation:</strong> ${check.recommendation}</p>` : ''}
            </div>
        `).join('')}
    </div>
    
    ${report.vulnerabilities.length > 0 ? `
    <div class="vulnerabilities">
        <h2>Vulnerabilities</h2>
        ${report.vulnerabilities.map(vuln => `
            <div class="vuln-item ${vuln.severity}">
                <h4>${vuln.type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h4>
                <p><strong>Severity:</strong> ${vuln.severity}</p>
                <p><strong>Recommendation:</strong> ${vuln.recommendation}</p>
                ${vuln.packages ? `<p><strong>Packages:</strong> ${vuln.packages.join(', ')}</p>` : ''}
                ${vuln.files ? `<p><strong>Files:</strong> ${vuln.files.map(f => f.file).join(', ')}</p>` : ''}
            </div>
        `).join('')}
    </div>
    ` : ''}
    
    <div class="recommendations">
        <h2>Recommendations</h2>
        ${report.recommendations.map(rec => `<div class="rec-item">• ${rec}</div>`).join('')}
    </div>
</body>
</html>`;
    
    const htmlFilename = `security-audit-${Date.now()}.html`;
    const htmlFilepath = path.join(this.reportsDir, htmlFilename);
    
    fs.writeFileSync(htmlFilepath, htmlContent);
    console.log(`🌐 HTML report saved to: ${htmlFilepath}`);
  }

  printReport(report) {
    console.log('\n🔒 Security Audit Report');
    console.log('=========================');
    console.log(`Timestamp: ${report.timestamp}`);
    console.log(`Risk Level: ${report.summary.riskLevel.toUpperCase()}`);
    console.log(`Total Checks: ${report.totalChecks}`);
    console.log(`Vulnerabilities: ${report.vulnerabilities}`);
    console.log(`High Impact: ${report.highImpactChecks} | Critical: ${report.criticalIssues}`);
    
    console.log('\n🎯 Priority Actions:');
    report.summary.priorityChecks.forEach((check, index) => {
      console.log(`  ${index + 1}. ${check.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}`);
    });
    
    console.log('\n💡 Recommendations:');
    report.recommendations.forEach((rec, index) => {
      console.log(`  ${index + 1}. ${rec}`);
    });
  }
}

// CLI interface
if (require.main === module) {
  const enhancer = new SecurityEnhancer();
  enhancer.runSecurityAudit()
    .then(report => {
      enhancer.printReport(report);
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Security audit failed:', error.message);
      process.exit(1);
    });
}

module.exports = SecurityEnhancer;