<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
    this.reportFile = path.join(__dirname, '../logs/security-enhancement-report.json')
    console.log('� Enhancing security...')
    const files = this.getAllFiles(this.projectRoot, ['.js', '.jsx', '.ts', '.tsx')]
        const content = fs.readFileSync(file, 'utf8')
    if (content.includes('eval(')
      issues.push('Use of eval() - potential security risk'
    if (content.includes('innerHTML')
      issues.push('Use of innerHTML - consider using textContent for security')
    if (content.includes('document.write')
      issues.push('Use of document.write - potential XSS risk')
    if (content.includes('localStorage.setItem')
      issues.push('Use of localStorage - ensure sensitive data is not stored')
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules'
      // Skip directories that can'
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class SecurityEnhancer {
  constructor() {
    this.securityChecks = [];
    this.recommendations = [];
  }

  checkDependencies() {
    // Check for known vulnerabilities
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check for common vulnerable packages
      const vulnerablePackages = [
        'lodash',
        'jquery',
        'moment',
        'express',
        'mongoose'
      ];
      
      vulnerablePackages.forEach(pkg => {
        if (dependencies[pkg]) {
          this.securityChecks.push({
            type: 'dependency',
            package: pkg,
            status: 'warning',
            message: `Consider updating ${pkg} to latest version`
          });
        }
      });
    }
  }

  checkConfiguration() {
    // Check for security configuration issues
    const configChecks = [
      {
        file: 'next.config.js',
        check: 'security headers',
        recommendation: 'Add security headers to Next.js config'
      },
      {
        file: '.env',
        check: 'environment variables',
        recommendation: 'Ensure sensitive data is not in .env files'
      },
      {
        file: 'package.json',
        check: 'scripts security',
        recommendation: 'Review npm scripts for security issues'
      }
    ];
    
    configChecks.forEach(check => {
      const filePath = path.join(process.cwd(), check.file);
      if (fs.existsSync(filePath)) {
        this.securityChecks.push({
          type: 'configuration',
          file: check.file,
          status: 'info',
          message: check.recommendation
        });
      }
    });
  }

  generateRecommendations() {
    const recommendations = [
      'Implement Content Security Policy (CSP)',
      'Use HTTPS in production',
      'Implement rate limiting',
      'Add input validation and sanitization',
      'Use secure authentication methods',
      'Regularly update dependencies',
      'Implement proper error handling',
      'Use environment variables for secrets',
      'Implement proper logging and monitoring',
      'Add security headers'
    ];
    
    this.recommendations.push(...recommendations);
  }

  generateReport() {
    this.checkDependencies();
    this.checkConfiguration();
    this.generateRecommendations();
    
    const report = {
      timestamp: new Date().toISOString(),
      securityChecks: this.securityChecks,
      recommendations: this.recommendations,
      summary: {
        totalChecks: this.securityChecks.length,
        warnings: this.securityChecks.filter(check => check.status === 'warning').length,
        info: this.securityChecks.filter(check => check.status === 'info').length
      }
    };
    
    const reportPath = path.join(process.cwd(), 'security-enhancement-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log('Security enhancement report generated:', reportPath);
    
    return report;
  }
}

const enhancer = new SecurityEnhancer();
enhancer.generateReport();
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
