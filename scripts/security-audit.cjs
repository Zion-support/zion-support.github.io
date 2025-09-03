#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔒 Security Audit');
console.log('================');

class SecurityAuditor {
  constructor() {
    this.vulnerabilities = [];
    this.recommendations = [];
    this.startTime = Date.now();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
  }

  async runNpmAudit() {
    this.log('🔍 Running npm audit...');
    
    try {
      const result = execSync('npm audit --json', {
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: process.cwd()
      });
      
      const auditData = JSON.parse(result);
      
      if (auditData.vulnerabilities) {
        const vulnCount = Object.keys(auditData.vulnerabilities).length;
        this.log(`⚠️ Found ${vulnCount} vulnerabilities`, 'warning');
        
        for (const [packageName, vuln] of Object.entries(auditData.vulnerabilities)) {
          this.vulnerabilities.push({
            package: packageName,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation,
            type: 'npm-audit'
          });
        }
      } else {
        this.log('✅ No npm vulnerabilities found', 'success');
      }
      
      return auditData;
    } catch (error) {
      this.log(`⚠️ npm audit failed: ${error.message}`, 'warning');
      return null;
    }
  }

  async checkEnvironmentFiles() {
    this.log('🔍 Checking environment files...');
    
    const envFiles = ['.env', '.env.local', '.env.production', '.env.development'];
    const issues = [];
    
    for (const envFile of envFiles) {
      const envPath = path.join(process.cwd(), envFile);
      
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        const lines = content.split('\n');
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          
          // Check for hardcoded secrets
          if (line.includes('password') || line.includes('secret') || line.includes('key')) {
            if (!line.includes('=') || line.split('=')[1].trim() === '') {
              issues.push({
                file: envFile,
                line: i + 1,
                issue: 'Potential hardcoded secret',
                severity: 'high'
              });
            }
          }
          
          // Check for commented out secrets
          if (line.startsWith('#') && (line.includes('password') || line.includes('secret'))) {
            issues.push({
              file: envFile,
              line: i + 1,
              issue: 'Commented secret found',
              severity: 'medium'
            });
          }
        }
        
        this.log(`✅ Checked ${envFile}`, 'success');
      }
    }
    
    if (issues.length > 0) {
      this.vulnerabilities.push(...issues.map(issue => ({
        ...issue,
        type: 'environment'
      })));
    }
    
    return issues;
  }

  async checkPackageJson() {
    this.log('🔍 Checking package.json for security issues...');
    
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    
    if (!fs.existsSync(packageJsonPath)) {
      this.log('⚠️ package.json not found', 'warning');
      return;
    }
    
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    const issues = [];
    
    // Check for scripts that might be dangerous
    if (packageJson.scripts) {
      for (const [scriptName, script] of Object.entries(packageJson.scripts)) {
        if (script.includes('rm -rf') || script.includes('sudo') || script.includes('chmod 777')) {
          issues.push({
            script: scriptName,
            issue: 'Potentially dangerous script',
            severity: 'high',
            scriptContent: script
          });
        }
      }
    }
    
    // Check for packages with known security issues
    const dangerousPackages = ['eval', 'vm', 'child_process'];
    const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    for (const [packageName, version] of Object.entries(allDeps)) {
      if (dangerousPackages.some(dangerous => packageName.includes(dangerous))) {
        issues.push({
          package: packageName,
          version: version,
          issue: 'Potentially dangerous package',
          severity: 'medium'
        });
      }
    }
    
    if (issues.length > 0) {
      this.vulnerabilities.push(...issues.map(issue => ({
        ...issue,
        type: 'package-json'
      })));
    }
    
    return issues;
  }

  async checkFilePermissions() {
    this.log('🔍 Checking file permissions...');
    
    const sensitiveFiles = [
      'package.json',
      'package-lock.json',
      '.env',
      '.env.local',
      'next.config.js',
      'next.config.cjs'
    ];
    
    const issues = [];
    
    for (const file of sensitiveFiles) {
      const filePath = path.join(process.cwd(), file);
      
      if (fs.existsSync(filePath)) {
        try {
          const stats = fs.statSync(filePath);
          const mode = stats.mode;
          
          // Check if file is world-writable (dangerous)
          if (mode & 0o002) {
            issues.push({
              file: file,
              issue: 'File is world-writable',
              severity: 'high',
              permissions: mode.toString(8)
            });
          }
          
          // Check if file is group-writable (potentially dangerous)
          if (mode & 0o020) {
            issues.push({
              file: file,
              issue: 'File is group-writable',
              severity: 'medium',
              permissions: mode.toString(8)
            });
          }
        } catch (error) {
          // Ignore permission errors
        }
      }
    }
    
    if (issues.length > 0) {
      this.vulnerabilities.push(...issues.map(issue => ({
        ...issue,
        type: 'permissions'
      })));
    }
    
    return issues;
  }

  generateRecommendations() {
    const recommendations = [];
    
    // Generate recommendations based on vulnerabilities
    const highSeverity = this.vulnerabilities.filter(v => v.severity === 'high');
    const mediumSeverity = this.vulnerabilities.filter(v => v.severity === 'medium');
    
    if (highSeverity.length > 0) {
      recommendations.push({
        priority: 'high',
        message: `Address ${highSeverity.length} high-severity security issues immediately`,
        count: highSeverity.length
      });
    }
    
    if (mediumSeverity.length > 0) {
      recommendations.push({
        priority: 'medium',
        message: `Review ${mediumSeverity.length} medium-severity security issues`,
        count: mediumSeverity.length
      });
    }
    
    // General recommendations
    recommendations.push({
      priority: 'low',
      message: 'Regularly update dependencies to latest secure versions',
      action: 'npm update'
    });
    
    recommendations.push({
      priority: 'low',
      message: 'Use environment variables for all sensitive configuration',
      action: 'Review .env files'
    });
    
    recommendations.push({
      priority: 'low',
      message: 'Implement Content Security Policy (CSP) headers',
      action: 'Add CSP to next.config.js'
    });
    
    return recommendations;
  }

  async generateReport() {
    const duration = Date.now() - this.startTime;
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}ms`,
      vulnerabilities: this.vulnerabilities,
      recommendations: this.generateRecommendations(),
      summary: {
        totalVulnerabilities: this.vulnerabilities.length,
        highSeverity: this.vulnerabilities.filter(v => v.severity === 'high').length,
        mediumSeverity: this.vulnerabilities.filter(v => v.severity === 'medium').length,
        lowSeverity: this.vulnerabilities.filter(v => v.severity === 'low').length
      }
    };
    
    const reportPath = path.join(process.cwd(), 'security-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📄 Report saved to: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('🚀 Starting security audit...');
    
    try {
      await this.runNpmAudit();
      await this.checkEnvironmentFiles();
      await this.checkPackageJson();
      await this.checkFilePermissions();
      
      const report = await this.generateReport();
      
      this.log('🎉 Security audit completed!');
      this.log(`📊 Summary: ${report.summary.totalVulnerabilities} vulnerabilities found (${report.summary.highSeverity} high, ${report.summary.mediumSeverity} medium, ${report.summary.lowSeverity} low)`);
      
      if (report.recommendations.length > 0) {
        this.log('💡 Recommendations:');
        report.recommendations.forEach(rec => {
          this.log(`  - [${rec.priority.toUpperCase()}] ${rec.message}`, 'info');
        });
      }
      
      return report;
    } catch (error) {
      this.log(`❌ Security audit failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run the auditor
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.run().catch(console.error);
}

module.exports = SecurityAuditor;