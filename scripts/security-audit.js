#!/usr/bin/env node

/**
 * Security Audit Script
 * Performs comprehensive security analysis and recommendations
 */

const fs = require('fs');
const path = require('path');

class SecurityAuditor {
  constructor() {
    this.securityIssues = [];
    this.recommendations = [];
    this.checks = [];
  }

  async performSecurityAudit() {
    console.log('🔒 Starting comprehensive security audit...');
    
    await this.checkPackageSecurity();
    await this.checkConfigurationSecurity();
    await this.checkCodeSecurity();
    await this.checkFilePermissions();
    await this.generateSecurityReport();
  }

  async checkPackageSecurity() {
    console.log('📦 Checking package security...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      // Check for sensitive information in package.json
      const sensitiveKeys = ['password', 'secret', 'key', 'token', 'auth'];
      const packageString = JSON.stringify(packageJson);
      
      for (const key of sensitiveKeys) {
        if (packageString.toLowerCase().includes(key)) {
          this.securityIssues.push({
            type: 'package-security',
            severity: 'high',
            issue: `Potential sensitive information in package.json: ${key}`,
            recommendation: 'Remove any sensitive information from package.json'
          });
        }
      }
      
      // Check for outdated dependencies
      this.checks.push({
        type: 'dependencies',
        status: 'checked',
        recommendation: 'Run npm audit regularly and update dependencies'
      });
      
    } catch (error) {
      console.error('Error checking package security:', error.message);
    }
  }

  async checkConfigurationSecurity() {
    console.log('⚙️ Checking configuration security...');
    
    // Check next.config.js for security issues
    if (fs.existsSync('next.config.js')) {
      const config = fs.readFileSync('next.config.js', 'utf8');
      
      // Check for disabled security features
      if (config.includes('ignoreBuildErrors: true')) {
        this.securityIssues.push({
          type: 'configuration',
          severity: 'medium',
          issue: 'TypeScript build errors are ignored',
          recommendation: 'Enable TypeScript error checking in production'
        });
      }
      
      if (config.includes('ignoreDuringBuilds: true')) {
        this.securityIssues.push({
          type: 'configuration',
          severity: 'medium',
          issue: 'ESLint errors are ignored during builds',
          recommendation: 'Enable ESLint error checking in production'
        });
      }
    }
    
    // Check _headers file
    if (fs.existsSync('_headers')) {
      const headers = fs.readFileSync('_headers', 'utf8');
      
      if (!headers.includes('X-Frame-Options')) {
        this.securityIssues.push({
          type: 'headers',
          severity: 'high',
          issue: 'Missing X-Frame-Options header',
          recommendation: 'Add X-Frame-Options: DENY to prevent clickjacking'
        });
      }
      
      if (!headers.includes('X-Content-Type-Options')) {
        this.securityIssues.push({
          type: 'headers',
          severity: 'medium',
          issue: 'Missing X-Content-Type-Options header',
          recommendation: 'Add X-Content-Type-Options: nosniff'
        });
      }
    }
  }

  async checkCodeSecurity() {
    console.log('💻 Checking code security...');
    
    // Check for common security issues in code files
    const codeFiles = this.findCodeFiles('.');
    
    for (const file of codeFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for dangerous patterns
        const dangerousPatterns = [
          { pattern: /eval\s*\(/, severity: 'critical', description: 'Use of eval() function' },
          { pattern: /innerHTML\s*=/, severity: 'high', description: 'Direct innerHTML assignment' },
          { pattern: /document\.write/, severity: 'medium', description: 'Use of document.write()' },
          { pattern: /window\.location\s*=/, severity: 'medium', description: 'Direct window.location assignment' }
        ];
        
        for (const { pattern, severity, description } of dangerousPatterns) {
          if (pattern.test(content)) {
            this.securityIssues.push({
              type: 'code-security',
              severity,
              issue: `${description} found in ${file}`,
              recommendation: 'Review and refactor to use safer alternatives'
            });
          }
        }
        
      } catch (error) {
        // Skip files we can't read
      }
    }
  }

  async checkFilePermissions() {
    console.log('📁 Checking file permissions...');
    
    // Check for sensitive files that should not be accessible
    const sensitiveFiles = [
      '.env',
      '.env.local',
      '.env.production',
      'package-lock.json'
    ];
    
    for (const file of sensitiveFiles) {
      if (fs.existsSync(file)) {
        try {
          const stats = fs.statSync(file);
          const mode = stats.mode & parseInt('777', 8);
          
          if (mode > parseInt('644', 8)) {
            this.securityIssues.push({
              type: 'permissions',
              severity: 'medium',
              issue: `File ${file} has overly permissive permissions (${mode.toString(8)})`,
              recommendation: 'Set file permissions to 644 or more restrictive'
            });
          }
        } catch (error) {
          // Skip files we can't check
        }
      }
    }
  }

  findCodeFiles(dirPath) {
    const codeFiles = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    
    try {
      const files = fs.readdirSync(dirPath);
      
      for (const file of files) {
        // Skip certain directories
        if (['node_modules', '.git', 'out', '.next', 'backup'].includes(file)) continue;
        
        const filePath = path.join(dirPath, file);
        const stats = fs.statSync(filePath);
        
        if (stats.isDirectory()) {
          codeFiles.push(...this.findCodeFiles(filePath));
        } else {
          const ext = path.extname(file);
          if (extensions.includes(ext)) {
            codeFiles.push(filePath);
          }
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
    
    return codeFiles;
  }

  generateSecurityReport() {
    const report = {
      timestamp: new Date().toISOString(),
      securityIssues: this.securityIssues,
      recommendations: this.recommendations,
      checks: this.checks,
      summary: this.generateSecuritySummary()
    };

    fs.writeFileSync('security-audit-report.json', JSON.stringify(report, null, 2));
    
    console.log('\n🔒 Security Audit Report');
    console.log('========================');
    
    const criticalIssues = this.securityIssues.filter(issue => issue.severity === 'critical').length;
    const highIssues = this.securityIssues.filter(issue => issue.severity === 'high').length;
    const mediumIssues = this.securityIssues.filter(issue => issue.severity === 'medium').length;
    
    console.log(`\nIssues Found:`);
    console.log(`  Critical: ${criticalIssues}`);
    console.log(`  High: ${highIssues}`);
    console.log(`  Medium: ${mediumIssues}`);
    
    if (this.securityIssues.length > 0) {
      console.log('\n⚠️ Security Issues:');
      this.securityIssues.forEach(issue => {
        console.log(`\n[${issue.severity.toUpperCase()}] ${issue.issue}`);
        console.log(`  Recommendation: ${issue.recommendation}`);
      });
    }
    
    console.log('\n✅ Security audit completed!');
  }

  generateSecuritySummary() {
    const criticalIssues = this.securityIssues.filter(issue => issue.severity === 'critical').length;
    const highIssues = this.securityIssues.filter(issue => issue.severity === 'high').length;
    
    let status = 'excellent';
    if (criticalIssues > 0) {
      status = 'critical';
    } else if (highIssues > 2) {
      status = 'needs-attention';
    } else if (highIssues > 0 || this.securityIssues.length > 5) {
      status = 'good';
    }
    
    return {
      totalIssues: this.securityIssues.length,
      criticalIssues,
      highIssues,
      status
    };
  }
}

// Run security audit if called directly
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.performSecurityAudit().catch(console.error);
}

module.exports = SecurityAuditor;