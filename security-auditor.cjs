#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityAuditor {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      securityScore: 0,
      vulnerabilities: [],
      recommendations: [],
      checks: []
    };
  }

  async checkDependencyVulnerabilities() {
    try {
      const result = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(result);
      
      if (audit.vulnerabilities) {
        Object.entries(audit.vulnerabilities).forEach(([pkg, vuln]) => {
          this.results.vulnerabilities.push({
            package: pkg,
            severity: vuln.severity,
            title: vuln.title,
            url: vuln.url,
            fixAvailable: vuln.fixAvailable
          });
        });
      }
      
      this.results.checks.push({
        name: 'Dependency Vulnerabilities',
        status: this.results.vulnerabilities.length === 0 ? 'pass' : 'fail',
        count: this.results.vulnerabilities.length
      });
      
    } catch (error) {
      this.results.checks.push({
        name: 'Dependency Vulnerabilities',
        status: 'error',
        error: error.message
      });
    }
  }

  async checkFilePermissions() {
    try {
      const sensitiveFiles = [
        '.env',
        '.env.local',
        '.env.production',
        'package.json',
        'next.config.js'
      ];
      
      let issues = 0;
      sensitiveFiles.forEach(file => {
        const filePath = path.join(process.cwd(), file);
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          const mode = stats.mode & parseInt('777', 8);
          
          if (mode > parseInt('644', 8)) {
            this.results.vulnerabilities.push({
              type: 'file_permissions',
              file: file,
              permissions: mode.toString(8),
              severity: 'medium',
              description: 'File has overly permissive permissions'
            });
            issues++;
          }
        }
      });
      
      this.results.checks.push({
        name: 'File Permissions',
        status: issues === 0 ? 'pass' : 'fail',
        issues: issues
      });
      
    } catch (error) {
      this.results.checks.push({
        name: 'File Permissions',
        status: 'error',
        error: error.message
      });
    }
  }

  async checkEnvironmentVariables() {
    try {
      const envFiles = ['.env', '.env.local', '.env.production'];
      let exposedSecrets = 0;
      
      envFiles.forEach(envFile => {
        const filePath = path.join(process.cwd(), envFile);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf8');
          const lines = content.split('\n');
          
          lines.forEach((line, index) => {
            if (line.includes('password') || line.includes('secret') || line.includes('key')) {
              if (line.includes('=') && !line.startsWith('#')) {
                const value = line.split('=')[1];
                if (value && value.length < 20) {
                  this.results.vulnerabilities.push({
                    type: 'weak_secret',
                    file: envFile,
                    line: index + 1,
                    severity: 'high',
                    description: 'Potentially weak or exposed secret'
                  });
                  exposedSecrets++;
                }
              }
            }
          });
        }
      });
      
      this.results.checks.push({
        name: 'Environment Variables',
        status: exposedSecrets === 0 ? 'pass' : 'fail',
        issues: exposedSecrets
      });
      
    } catch (error) {
      this.results.checks.push({
        name: 'Environment Variables',
        status: 'error',
        error: error.message
      });
    }
  }

  async checkCodeSecurity() {
    try {
      const dangerousPatterns = [
        { pattern: /eval\s*\(/, description: 'Use of eval() function', severity: 'high' },
        { pattern: /innerHTML\s*=/, description: 'Direct innerHTML assignment', severity: 'medium' },
        { pattern: /document\.write\s*\(/, description: 'Use of document.write()', severity: 'medium' },
        { pattern: /\.exec\s*\(/, description: 'Use of exec() method', severity: 'high' }
      ];
      
      let securityIssues = 0;
      const filesToCheck = this.getJavaScriptFiles();
      
      filesToCheck.forEach(filePath => {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          dangerousPatterns.forEach(({ pattern, description, severity }) => {
            if (pattern.test(line)) {
              this.results.vulnerabilities.push({
                type: 'code_security',
                file: path.relative(process.cwd(), filePath),
                line: index + 1,
                severity: severity,
                description: description,
                code: line.trim()
              });
              securityIssues++;
            }
          });
        });
      });
      
      this.results.checks.push({
        name: 'Code Security',
        status: securityIssues === 0 ? 'pass' : 'fail',
        issues: securityIssues
      });
      
    } catch (error) {
      this.results.checks.push({
        name: 'Code Security',
        status: 'error',
        error: error.message
      });
    }
  }

  getJavaScriptFiles() {
    const files = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    
    const searchDirs = ['pages', 'components', 'lib', 'utils'];
    
    searchDirs.forEach(dir => {
      const dirPath = path.join(process.cwd(), dir);
      if (fs.existsSync(dirPath)) {
        this.findFilesRecursive(dirPath, extensions, files);
      }
    });
    
    return files;
  }

  findFilesRecursive(dirPath, extensions, files) {
    try {
      const items = fs.readdirSync(dirPath);
      
      items.forEach(item => {
        const itemPath = path.join(dirPath, item);
        const stats = fs.statSync(itemPath);
        
        if (stats.isDirectory()) {
          this.findFilesRecursive(itemPath, extensions, files);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(itemPath);
        }
      });
    } catch (error) {
      // Ignore permission errors
    }
  }

  calculateSecurityScore() {
    let score = 100;
    
    this.results.vulnerabilities.forEach(vuln => {
      switch (vuln.severity) {
        case 'critical':
          score -= 20;
          break;
        case 'high':
          score -= 15;
          break;
        case 'medium':
          score -= 10;
          break;
        case 'low':
          score -= 5;
          break;
      }
    });
    
    this.results.securityScore = Math.max(0, score);
  }

  generateRecommendations() {
    if (this.results.vulnerabilities.length > 0) {
      this.results.recommendations.push('Run npm audit fix to address dependency vulnerabilities');
    }
    
    const hasHighSeverity = this.results.vulnerabilities.some(v => v.severity === 'high' || v.severity === 'critical');
    if (hasHighSeverity) {
      this.results.recommendations.push('Address high and critical severity vulnerabilities immediately');
    }
    
    this.results.recommendations.push('Regularly update dependencies to latest secure versions');
    this.results.recommendations.push('Implement Content Security Policy (CSP) headers');
    this.results.recommendations.push('Use environment variables for sensitive configuration');
    this.results.recommendations.push('Enable security headers in production');
  }

  async run() {
    console.log('🔒 Starting Security Auditor...');
    
    await this.checkDependencyVulnerabilities();
    await this.checkFilePermissions();
    await this.checkEnvironmentVariables();
    await this.checkCodeSecurity();
    
    this.calculateSecurityScore();
    this.generateRecommendations();
    
    // Save results
    fs.writeFileSync('security-audit-report.json', JSON.stringify(this.results, null, 2));
    
    console.log(`🔒 Security audit completed. Score: ${this.results.securityScore}/100`);
    console.log(`🚨 ${this.results.vulnerabilities.length} vulnerabilities found`);
    console.log(`💡 ${this.results.recommendations.length} recommendations generated`);
    
    return this.results;
  }
}

// Run security auditor
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.run().catch(console.error);
}

module.exports = SecurityAuditor;
