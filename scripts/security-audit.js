#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityAuditor {
  constructor() {
    this.issues = [];
    this.recommendations = [];
    this.score = 100;
    this.reportPath = path.join(__dirname, '..', 'security-audit-report.json');
  }

  async runAudit() {
    console.log('🔒 Starting security audit...');
    
    this.checkDependencies();
    this.checkEnvironmentVariables();
    this.checkFilePermissions();
    this.checkSecurityHeaders();
    this.checkInputValidation();
    this.checkAuthentication();
    this.checkDataProtection();
    this.checkNetworkSecurity();
    
    this.generateReport();
    this.displayResults();
  }

  checkDependencies() {
    console.log('📦 Checking dependencies...');
    
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const vulnerabilities = this.checkForVulnerabilities();
      
      if (vulnerabilities.length > 0) {
        this.addIssue('dependencies', 'high', 'Vulnerable dependencies found', vulnerabilities);
        this.score -= 20;
      }
      
      // Check for outdated packages
      const outdatedPackages = this.checkOutdatedPackages();
      if (outdatedPackages.length > 0) {
        this.addIssue('dependencies', 'medium', 'Outdated packages detected', outdatedPackages);
        this.score -= 10;
      }
      
    } catch (error) {
      this.addIssue('dependencies', 'high', 'Could not read package.json', [error.message]);
      this.score -= 15;
    }
  }

  checkForVulnerabilities() {
    try {
      const result = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(result);
      
      if (audit.vulnerabilities) {
        return Object.keys(audit.vulnerabilities).map(pkg => ({
          package: pkg,
          severity: audit.vulnerabilities[pkg].severity,
          description: audit.vulnerabilities[pkg].description
        }));
      }
      
      return [];
    } catch (error) {
      return [{ error: 'Could not run npm audit' }];
    }
  }

  checkOutdatedPackages() {
    try {
      const result = execSync('npm outdated --json', { encoding: 'utf8' });
      const outdated = JSON.parse(result);
      return Object.keys(outdated);
    } catch (error) {
      return [];
    }
  }

  checkEnvironmentVariables() {
    console.log('🔐 Checking environment variables...');
    
    const envFiles = ['.env', '.env.local', '.env.production'];
    const sensitiveKeys = ['SECRET', 'PASSWORD', 'KEY', 'TOKEN', 'API_KEY'];
    
    envFiles.forEach(file => {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach(line => {
          if (line.includes('=') && !line.startsWith('#')) {
            const [key, value] = line.split('=');
            
            // Check for hardcoded secrets
            if (sensitiveKeys.some(sensitive => key.toUpperCase().includes(sensitive))) {
              if (value && value.length > 0 && !value.includes('${')) {
                this.addIssue('environment', 'high', `Hardcoded secret in ${file}: ${key}`);
                this.score -= 15;
              }
            }
          }
        });
      }
    });
  }

  checkFilePermissions() {
    console.log('📁 Checking file permissions...');
    
    const sensitiveFiles = [
      'package.json',
      'package-lock.json',
      '.env',
      '.env.local',
      '.env.production'
    ];
    
    sensitiveFiles.forEach(file => {
      if (fs.existsSync(file)) {
        try {
          const stats = fs.statSync(file);
          const mode = stats.mode.toString(8);
          
          // Check if file is world-readable (permission 644 or higher)
          if (parseInt(mode.slice(-3)) >= 644) {
            this.addIssue('permissions', 'medium', `File ${file} has overly permissive permissions`);
            this.score -= 5;
          }
        } catch (error) {
          // Ignore permission errors
        }
      }
    });
  }

  checkSecurityHeaders() {
    console.log('🛡️  Checking security headers...');
    
    const nextConfigPath = 'next.config.js';
    if (fs.existsSync(nextConfigPath)) {
      const content = fs.readFileSync(nextConfigPath, 'utf8');
      
      const requiredHeaders = [
        'X-Frame-Options',
        'X-Content-Type-Options',
        'X-XSS-Protection',
        'Strict-Transport-Security',
        'Content-Security-Policy'
      ];
      
      const missingHeaders = requiredHeaders.filter(header => 
        !content.includes(header)
      );
      
      if (missingHeaders.length > 0) {
        this.addIssue('headers', 'medium', 'Missing security headers', missingHeaders);
        this.score -= 10;
      }
    }
  }

  checkInputValidation() {
    console.log('🔍 Checking input validation...');
    
    const pagesDir = 'pages';
    if (fs.existsSync(pagesDir)) {
      const files = this.getAllFiles(pagesDir, ['.js', '.jsx', '.ts', '.tsx']);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for dangerous patterns
        const dangerousPatterns = [
          /innerHTML\s*=/,
          /document\.write\s*\(/,
          /eval\s*\(/,
          /Function\s*\(/,
          /setTimeout\s*\(\s*['"`][^'"`]*['"`]/,
          /setInterval\s*\(\s*['"`][^'"`]*['"`]/
        ];
        
        dangerousPatterns.forEach(pattern => {
          if (pattern.test(content)) {
            this.addIssue('validation', 'high', `Potentially dangerous code in ${file}`);
            this.score -= 15;
          }
        });
        
        // Check for input sanitization
        if (content.includes('req.body') || content.includes('req.query') || content.includes('req.params')) {
          if (!content.includes('sanitize') && !content.includes('validate') && !content.includes('escape')) {
            this.addIssue('validation', 'medium', `Missing input validation in ${file}`);
            this.score -= 5;
          }
        }
      });
    }
  }

  checkAuthentication() {
    console.log('🔑 Checking authentication...');
    
    const authFiles = [
      'pages/api/auth',
      'utils/auth',
      'middleware.ts',
      'src/lib/auth.js',
      'src/components/LoginForm.jsx',
      'src/components/ProtectedRoute.jsx'
    ];
    
    let hasAuth = false;
    authFiles.forEach(file => {
      if (fs.existsSync(file)) {
        hasAuth = true;
      }
    });
    
    if (!hasAuth) {
      this.addIssue('authentication', 'high', 'No authentication system detected');
      this.score -= 20;
    }
  }

  checkDataProtection() {
    console.log('🔒 Checking data protection...');
    
    const pagesDir = 'pages';
    if (fs.existsSync(pagesDir)) {
      const files = this.getAllFiles(pagesDir, ['.js', '.jsx', '.ts', '.tsx']);
      
      files.forEach(file => {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for sensitive data exposure
        if (content.includes('console.log') && 
            (content.includes('password') || content.includes('token') || content.includes('secret'))) {
          this.addIssue('data-protection', 'high', `Potential sensitive data logging in ${file}`);
          this.score -= 15;
        }
      });
    }
  }

  checkNetworkSecurity() {
    console.log('🌐 Checking network security...');
    
    const nextConfigPath = 'next.config.js';
    if (fs.existsSync(nextConfigPath)) {
      const content = fs.readFileSync(nextConfigPath, 'utf8');
      
      // Check for HTTPS enforcement
      if (!content.includes('https') && !content.includes('secure')) {
        this.addIssue('network', 'medium', 'HTTPS enforcement not configured');
        this.score -= 10;
      }
    }
  }

  getAllFiles(dir, extensions) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files = files.concat(this.getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  addIssue(category, severity, message, details = []) {
    this.issues.push({
      category,
      severity,
      message,
      details,
      timestamp: new Date().toISOString()
    });
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      score: Math.max(0, this.score),
      issues: this.issues,
      recommendations: this.generateRecommendations(),
      summary: {
        totalIssues: this.issues.length,
        criticalIssues: this.issues.filter(i => i.severity === 'high').length,
        mediumIssues: this.issues.filter(i => i.severity === 'medium').length,
        lowIssues: this.issues.filter(i => i.severity === 'low').length
      }
    };

    try {
      fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
      console.log(`📄 Security audit report saved to: ${this.reportPath}`);
    } catch (error) {
      console.log('❌ Could not save security audit report:', error.message);
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.issues.some(i => i.category === 'dependencies' && i.severity === 'high')) {
      recommendations.push({
        priority: 'high',
        action: 'Update vulnerable dependencies',
        description: 'Run npm audit fix to update vulnerable packages'
      });
    }
    
    if (this.issues.some(i => i.category === 'environment' && i.severity === 'high')) {
      recommendations.push({
        priority: 'high',
        action: 'Secure environment variables',
        description: 'Move secrets to environment variables and use proper secret management'
      });
    }
    
    if (this.issues.some(i => i.category === 'headers' && i.severity === 'medium')) {
      recommendations.push({
        priority: 'medium',
        action: 'Add security headers',
        description: 'Implement security headers in next.config.js'
      });
    }
    
    if (this.issues.some(i => i.category === 'validation' && i.severity === 'high')) {
      recommendations.push({
        priority: 'high',
        action: 'Implement input validation',
        description: 'Add proper input sanitization and validation'
      });
    }
    
    return recommendations;
  }

  displayResults() {
    console.log('\n🔒 Security Audit Results:');
    console.log(`Security Score: ${Math.max(0, this.score)}/100`);
    console.log(`Total Issues: ${this.issues.length}`);
    console.log(`Critical Issues: ${this.issues.filter(i => i.severity === 'high').length}`);
    console.log(`Medium Issues: ${this.issues.filter(i => i.severity === 'medium').length}`);
    console.log(`Low Issues: ${this.issues.filter(i => i.severity === 'low').length}`);
    
    if (this.issues.length > 0) {
      console.log('\n🚨 Issues Found:');
      this.issues.forEach((issue, index) => {
        console.log(`${index + 1}. [${issue.severity.toUpperCase()}] ${issue.message}`);
        if (issue.details.length > 0) {
          issue.details.forEach(detail => {
            console.log(`   - ${detail}`);
          });
        }
      });
    }
    
    if (this.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      this.recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. [${rec.priority.toUpperCase()}] ${rec.action}`);
        console.log(`   ${rec.description}`);
      });
    }
  }
}

// Run the audit
const auditor = new SecurityAuditor();
auditor.runAudit().catch(console.error);