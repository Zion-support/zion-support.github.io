#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityAuditEnhanced {
  constructor() {
    this.projectRoot = process.cwd();
    this.vulnerabilities = [];
    this.recommendations = [];
    this.securityScore = 100;
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runNpmAudit() {
    this.log('🔍 Running npm security audit...');
    
    try {
      const auditResult = execSync('npm audit --json', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      
      const audit = JSON.parse(auditResult);
      const vulnerabilities = audit.vulnerabilities || {};
      
      Object.entries(vulnerabilities).forEach(([pkg, vuln]) => {
        this.vulnerabilities.push({
          package: pkg,
          severity: vuln.severity,
          title: vuln.title,
          description: vuln.description,
          recommendation: vuln.recommendation
        });
      });
      
      this.log(`Found ${this.vulnerabilities.length} vulnerabilities`);
    } catch (error) {
      this.log(`❌ NPM audit failed: ${error.message}`);
    }
  }

  async checkDependencies() {
    this.log('📦 Checking dependencies for security issues...');
    
    try {
      // Check for known vulnerable packages
      const packageJson = JSON.parse(
        fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8')
      );
      
      const allDeps = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies
      };
      
      // Check for suspicious packages
      const suspiciousPackages = Object.keys(allDeps).filter(pkg => 
        pkg.includes('eval') || 
        pkg.includes('exec') || 
        pkg.includes('shell') ||
        pkg.includes('system')
      );
      
      if (suspiciousPackages.length > 0) {
        this.recommendations.push({
          type: 'suspicious_packages',
          message: `Review suspicious packages: ${suspiciousPackages.join(', ')}`,
          severity: 'medium'
        });
      }
      
    } catch (error) {
      this.log(`❌ Dependency check failed: ${error.message}`);
    }
  }

  async checkEnvironmentVariables() {
    this.log('🔐 Checking environment variables...');
    
    try {
      const envFiles = ['.env', '.env.local', '.env.production'];
      
      for (const envFile of envFiles) {
        const envPath = path.join(this.projectRoot, envFile);
        if (fs.existsSync(envPath)) {
          const content = fs.readFileSync(envPath, 'utf8');
          
          // Check for hardcoded secrets
          const secretPatterns = [
            /password\s*=\s*['"][^'"]+['"]/gi,
            /secret\s*=\s*['"][^'"]+['"]/gi,
            /key\s*=\s*['"][^'"]+['"]/gi,
            /token\s*=\s*['"][^'"]+['"]/gi
          ];
          
          secretPatterns.forEach(pattern => {
            if (pattern.test(content)) {
              this.recommendations.push({
                type: 'hardcoded_secrets',
                message: `Potential hardcoded secrets found in ${envFile}`,
                severity: 'high'
              });
            }
          });
        }
      }
    } catch (error) {
      this.log(`❌ Environment variables check failed: ${error.message}`);
    }
  }

  async checkFilePermissions() {
    this.log('📁 Checking file permissions...');
    
    try {
      const sensitiveFiles = [
        'package.json',
        'package-lock.json',
        '.env',
        '.env.local'
      ];
      
      for (const file of sensitiveFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          const stats = fs.statSync(filePath);
          const mode = stats.mode;
          
          // Check if file is world-readable (should not be)
          if (mode & 0o004) {
            this.recommendations.push({
              type: 'file_permissions',
              message: `${file} is world-readable`,
              severity: 'medium'
            });
          }
        }
      }
    } catch (error) {
      this.log(`❌ File permissions check failed: ${error.message}`);
    }
  }

  async checkCodeSecurity() {
    this.log('💻 Checking code for security issues...');
    
    try {
      const codeFiles = this.findCodeFiles();
      
      for (const file of codeFiles) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for dangerous patterns
        const dangerousPatterns = [
          { pattern: /eval\s*\(/g, message: 'eval() usage detected' },
          { pattern: /innerHTML\s*=/g, message: 'innerHTML usage detected' },
          { pattern: /document\.write/g, message: 'document.write usage detected' },
          { pattern: /setTimeout\s*\(\s*['"][^'"]*['"]/g, message: 'String-based setTimeout detected' }
        ];
        
        dangerousPatterns.forEach(({ pattern, message }) => {
          if (pattern.test(content)) {
            this.recommendations.push({
              type: 'code_security',
              message: `${message} in ${path.relative(this.projectRoot, file)}`,
              severity: 'medium'
            });
          }
        });
      }
    } catch (error) {
      this.log(`❌ Code security check failed: ${error.message}`);
    }
  }

  findCodeFiles() {
    const files = [];
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    
    const scanDir = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !['node_modules', '.git', '.next'].includes(item)) {
          scanDir(fullPath);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };
    
    scanDir(this.projectRoot);
    return files;
  }

  calculateSecurityScore() {
    let score = 100;
    
    // Deduct points for vulnerabilities
    this.vulnerabilities.forEach(vuln => {
      switch (vuln.severity) {
        case 'critical':
          score -= 20;
          break;
        case 'high':
          score -= 15;
          break;
        case 'moderate':
          score -= 10;
          break;
        case 'low':
          score -= 5;
          break;
      }
    });
    
    // Deduct points for recommendations
    this.recommendations.forEach(rec => {
      switch (rec.severity) {
        case 'high':
          score -= 10;
          break;
        case 'medium':
          score -= 5;
          break;
        case 'low':
          score -= 2;
          break;
      }
    });
    
    this.securityScore = Math.max(0, score);
  }

  generateReport() {
    this.calculateSecurityScore();
    
    const report = {
      timestamp: new Date().toISOString(),
      securityScore: this.securityScore,
      vulnerabilities: this.vulnerabilities,
      recommendations: this.recommendations,
      summary: {
        totalVulnerabilities: this.vulnerabilities.length,
        totalRecommendations: this.recommendations.length,
        securityScore: this.securityScore,
        status: this.securityScore >= 80 ? 'good' : 
                this.securityScore >= 60 ? 'fair' : 'poor'
      }
    };

    const reportPath = path.join(this.projectRoot, 'security-audit-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Security report saved to: ${reportPath}`);
  }

  async run() {
    this.log('🔒 Starting Enhanced Security Audit...');
    
    try {
      await this.runNpmAudit();
      await this.checkDependencies();
      await this.checkEnvironmentVariables();
      await this.checkFilePermissions();
      await this.checkCodeSecurity();
      
      this.generateReport();
      
      this.log('✅ Security audit completed!');
      this.log(`🛡️ Security Score: ${this.securityScore}/100`);
      this.log(`🚨 Found ${this.vulnerabilities.length} vulnerabilities`);
      this.log(`💡 Generated ${this.recommendations.length} recommendations`);
    } catch (error) {
      this.log(`❌ Security audit failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the security audit
const audit = new SecurityAuditEnhanced();
audit.run().catch(console.error);