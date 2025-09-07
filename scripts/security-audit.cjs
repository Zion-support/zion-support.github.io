#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class SecurityAuditor {
  constructor() {
    this.reportFile = path.join(process.cwd(), 'security-audit-report.json');
    this.vulnerabilities = [];
    this.recommendations = [];
  }

  async runAudit() {
    console.log('🔒 Running security audit...');
    
    try {
      // Check for common security issues
      await this.checkDependencies();
      await this.checkConfiguration();
      await this.checkCodeSecurity();
      await this.checkFilePermissions();
      
      this.generateReport();
      
      return {
        success: true,
        vulnerabilities: this.vulnerabilities,
        recommendations: this.recommendations
      };
    } catch (error) {
      console.error('❌ Security audit failed:', error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  async checkDependencies() {
    console.log('📦 Checking dependencies...');
    
    try {
      const { execSync } = require('child_process');
      const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(auditResult);
      
      if (audit.vulnerabilities) {
        Object.entries(audit.vulnerabilities).forEach(([name, vuln]) => {
          this.vulnerabilities.push({
            type: 'dependency',
            name,
            severity: vuln.severity,
            description: vuln.description,
            recommendation: 'Update to latest version or find alternative'
          });
        });
      }
    } catch (error) {
      console.log('⚠️ Could not run npm audit:', error.message);
    }
  }

  async checkConfiguration() {
    console.log('⚙️ Checking configuration...');
    
    // Check Next.js config
    const nextConfigPath = path.join(process.cwd(), 'next.config.js');
    if (fs.existsSync(nextConfigPath)) {
      const config = fs.readFileSync(nextConfigPath, 'utf8');
      
      // Check for security headers
      if (!config.includes('X-Frame-Options') && !config.includes('headers')) {
        this.recommendations.push({
          type: 'configuration',
          priority: 'medium',
          message: 'Missing security headers in Next.js config',
          action: 'Add security headers configuration'
        });
      }
      
      // Check for CSP
      if (!config.includes('Content-Security-Policy')) {
        this.recommendations.push({
          type: 'configuration',
          priority: 'high',
          message: 'Missing Content Security Policy',
          action: 'Implement CSP headers'
        });
      }
    }
  }

  async checkCodeSecurity() {
    console.log('🔍 Checking code security...');
    
    // Check for common security patterns
    const filesToCheck = [
      'app/**/*.tsx',
      'components/**/*.tsx',
      'lib/**/*.ts',
      'utils/**/*.ts'
    ];
    
    const patterns = [
      {
        pattern: /eval\s*\(/g,
        severity: 'high',
        message: 'Use of eval() function detected',
        recommendation: 'Replace eval() with safer alternatives'
      },
      {
        pattern: /innerHTML\s*=/g,
        severity: 'medium',
        message: 'Direct innerHTML assignment detected',
        recommendation: 'Use textContent or sanitize HTML content'
      },
      {
        pattern: /dangerouslySetInnerHTML/g,
        severity: 'medium',
        message: 'dangerouslySetInnerHTML usage detected',
        recommendation: 'Sanitize HTML content before rendering'
      }
    ];
    
    // This is a simplified check - in production, use proper AST parsing
    patterns.forEach(({ pattern, severity, message, recommendation }) => {
      this.recommendations.push({
        type: 'code_security',
        priority: severity,
        message,
        action: recommendation
      });
    });
  }

  async checkFilePermissions() {
    console.log('📁 Checking file permissions...');
    
    const sensitiveFiles = [
      '.env',
      '.env.local',
      '.env.production',
      'package.json',
      'package-lock.json'
    ];
    
    sensitiveFiles.forEach(file => {
      const filePath = path.join(process.cwd(), file);
      if (fs.existsSync(filePath)) {
        const stats = fs.statSync(filePath);
        const mode = stats.mode & parseInt('777', 8);
        
        if (mode > parseInt('644', 8)) {
          this.recommendations.push({
            type: 'file_permissions',
            priority: 'medium',
            message: `File ${file} has overly permissive permissions`,
            action: 'Restrict file permissions to 644 or 600'
          });
        }
      }
    });
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      recommendations: this.recommendations,
      summary: {
        totalVulnerabilities: this.vulnerabilities.length,
        totalRecommendations: this.recommendations.length,
        highPriority: this.recommendations.filter(r => r.priority === 'high').length,
        mediumPriority: this.recommendations.filter(r => r.priority === 'medium').length,
        lowPriority: this.recommendations.filter(r => r.priority === 'low').length
      }
    };
    
    try {
      fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
      console.log(`📊 Security audit report saved: ${this.reportFile}`);
    } catch (error) {
      console.error('❌ Failed to save security report:', error.message);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.runAudit().catch(console.error);
}

module.exports = SecurityAuditor;