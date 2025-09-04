#!/usr/bin/env node

/**
 * Security Auditor
 * Performs comprehensive security audits of the application
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class SecurityAuditor {
  constructor() {
    this.vulnerabilities = [];
    this.recommendations = [];
    this.startTime = Date.now();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async auditSecurity() {
    this.log('🔒 Starting security audit...');
    
    try {
      // Run npm audit
      this.log('Running npm security audit...');
      try {
        execSync('npm audit --audit-level=moderate', { stdio: 'inherit' });
        this.log('✅ No critical vulnerabilities found');
      } catch (error) {
        this.log('⚠️ Vulnerabilities found - attempting to fix', 'WARN');
        try {
          execSync('npm audit fix', { stdio: 'inherit' });
          this.log('✅ Vulnerabilities fixed automatically');
        } catch (fixError) {
          this.log('❌ Could not fix vulnerabilities automatically', 'ERROR');
          this.vulnerabilities.push('Manual intervention required for security fixes');
        }
      }
      
      // Check for sensitive files
      this.log('Checking for sensitive files...');
      this.checkSensitiveFiles();
      
      // Check environment variables
      this.log('Checking environment configuration...');
      this.checkEnvironmentConfig();
      
      this.log('✅ Security audit completed successfully');
      return { success: true, vulnerabilities: this.vulnerabilities };
    } catch (error) {
      this.log(`❌ Security audit failed: ${error.message}`, 'ERROR');
      return { success: false, error: error.message, vulnerabilities: this.vulnerabilities };
    }
  }

  checkSensitiveFiles() {
    const sensitiveFiles = [
      '.env',
      '.env.local',
      '.env.production',
      'config.json',
      'secrets.json'
    ];

    for (const file of sensitiveFiles) {
      if (fs.existsSync(file)) {
        this.log(`⚠️ Sensitive file found: ${file}`, 'WARN');
        this.recommendations.push(`Ensure ${file} is in .gitignore and not committed`);
      }
    }
  }

  checkEnvironmentConfig() {
    const envFile = '.env';
    if (fs.existsSync(envFile)) {
      const content = fs.readFileSync(envFile, 'utf8');
      
      // Check for common security issues
      if (content.includes('password') && !content.includes('PASSWORD=')) {
        this.recommendations.push('Review password configuration in .env file');
      }
      
      if (content.includes('secret') && !content.includes('SECRET=')) {
        this.recommendations.push('Review secret configuration in .env file');
      }
      
      if (content.includes('key') && !content.includes('KEY=')) {
        this.recommendations.push('Review API key configuration in .env file');
      }
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      vulnerabilities: this.vulnerabilities,
      recommendations: this.recommendations,
      securityScore: this.calculateSecurityScore()
    };

    const reportPath = path.join(__dirname, '..', 'automation', 'logs', 'security-audit-report.json');
    const logDir = path.dirname(reportPath);
    
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Report saved to: ${reportPath}`);
    
    return report;
  }

  calculateSecurityScore() {
    let score = 100;
    
    // Deduct points for vulnerabilities
    score -= this.vulnerabilities.length * 10;
    
    // Deduct points for recommendations
    score -= this.recommendations.length * 5;
    
    return Math.max(0, score);
  }

  async run() {
    try {
      const result = await this.auditSecurity();
      const report = await this.generateReport();
      
      this.log('🎉 Security audit completed!');
      this.log(`🔒 Security score: ${report.securityScore}/100`);
      
      if (this.vulnerabilities.length > 0) {
        this.log('⚠️ Vulnerabilities found:');
        this.vulnerabilities.forEach(vuln => this.log(`  - ${vuln}`));
      }
      
      if (this.recommendations.length > 0) {
        this.log('💡 Security recommendations:');
        this.recommendations.forEach(rec => this.log(`  - ${rec}`));
      }
      
      return report;
    } catch (error) {
      this.log(`💥 Security audit failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.run().catch(console.error);
}

module.exports = SecurityAuditor;