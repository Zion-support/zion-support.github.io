#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
class SecurityScanner {
  constructor() {
    this.vulnerabilities = [];
    this.securityScore = 100;
  }

  async scanSecurity() {
    this.scanDependencies();
    this.scanCode();
    this.scanConfiguration();
    
    console.log(`Security scan completed. Score: ${this.securityScore}/100`);
    return {
      score: this.securityScore,
      vulnerabilities: this.vulnerabilities
    };
  }

  scanDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      // Check for known vulnerable packages
      const vulnerablePackages = ['lodash', 'moment']; // Example
      for (const [pkg, version] of Object.entries(dependencies)) {
        if (vulnerablePackages.includes(pkg)) {
          this.vulnerabilities.push({
            type: 'vulnerable-dependency',
            package: pkg,
            version: version,
            severity: 'medium'
          });
          this.securityScore -= 10;
        }
      }
    } catch (error) {
      console.error('Error scanning dependencies:', error.message);
    }
  }

  scanCode() {
    const patterns = [
      { pattern: /eval\(/, description: 'Use of eval() function', severity: 'high' },
      { pattern: /innerHTML/, description: 'Potential XSS vulnerability', severity: 'medium' },
      { pattern: /localStorage/, description: 'Sensitive data in localStorage', severity: 'low' }
    ];
    
    this.scanFiles(patterns);
  }

  scanConfiguration() {
    // Check for security headers
    const nextConfig = path.join(__dirname, '..', '..', 'next.config.js');
    if (fs.existsSync(nextConfig)) {
      const content = fs.readFileSync(nextConfig, 'utf8');
      if (!content.includes('securityHeaders')) {
        this.vulnerabilities.push({
          type: 'missing-security-headers',
          description: 'No security headers configured',
          severity: 'medium'
        });
        this.securityScore -= 15;
      }
    }
  }

  scanFiles(patterns) {
    const directories = ['pages', 'components', 'utils'];
    
    for (const dir of directories) {
      const dirPath = path.join(__dirname, '..', '..', dir);
      if (fs.existsSync(dirPath)) {
        this.scanDirectory(dirPath, patterns);
      }
    }
  }

  scanDirectory(dir, patterns) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        this.scanDirectory(filePath, patterns);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
        this.scanFile(filePath, patterns);
      }
    }
  }

  scanFile(filePath, patterns) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    for (const pattern of patterns) {
      if (pattern.pattern.test(content)) {
        this.vulnerabilities.push({
          type: 'code-vulnerability',
          file: filePath,
          description: pattern.description,
          severity: pattern.severity
        });
        
        if (pattern.severity === 'high') this.securityScore -= 20;
        else if (pattern.severity === 'medium') this.securityScore -= 10;
        else this.securityScore -= 5;
      }
    }
  }
}

const scanner = new SecurityScanner();
scanner.scanSecurity();
=======
console.log('🔒 Security Scanner Starting...');

// Basic security checks
const securityChecks = {
  // Check for common security issues in package.json
  packageSecurity: () => {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const issues = [];
      
      // Check for known vulnerable packages
      if (packageJson.dependencies && packageJson.dependencies.eslint === '8.57.1') {
        issues.push('ESLint v8.57.1 is deprecated and may have security vulnerabilities');
      }
      
      return issues;
    } catch (error) {
      return [`Error reading package.json: ${error.message}`];
    }
  },
  
  // Check for exposed secrets
  secretScan: () => {
    const sensitivePatterns = [
      /api[_-]?key/i,
      /password/i,
      /secret/i,
      /token/i,
      /private[_-]?key/i
    ];
    
    const issues = [];
    
    // Scan common files for potential secrets
    const filesToScan = [
      '.env',
      '.env.local',
      '.env.production',
      'config.json',
      'secrets.json'
    ];
    
    filesToScan.forEach(file => {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        sensitivePatterns.forEach(pattern => {
          if (pattern.test(content)) {
            issues.push(`Potential secret found in ${file}`);
          }
        });
      }
    });
    
    return issues;
  },
  
  // Check file permissions
  filePermissions: () => {
    const issues = [];
    
    // Check for world-writable files
    const criticalFiles = [
      '.env',
      'package.json',
      'package-lock.json'
    ];
    
    criticalFiles.forEach(file => {
      if (fs.existsSync(file)) {
        try {
          const stats = fs.statSync(file);
          if ((stats.mode & 0o777) === 0o666) {
            issues.push(`${file} has world-writable permissions`);
          }
        } catch (error) {
          // Ignore permission errors
        }
      }
    });
    
    return issues;
  }
};

// Run security checks
console.log('Running security checks...');

let allIssues = [];
Object.entries(securityChecks).forEach(([checkName, checkFn]) => {
  console.log(`Running ${checkName}...`);
  const issues = checkFn();
  if (issues.length > 0) {
    allIssues.push(...issues);
  }
});

// Generate report
const report = {
  timestamp: new Date().toISOString(),
  issues: allIssues,
  summary: {
    totalIssues: allIssues.length,
    severity: allIssues.length > 0 ? 'WARNING' : 'CLEAN'
  }
};

// Write report to file
fs.writeFileSync('security-scan-results.json', JSON.stringify(report, null, 2));

// Output summary
if (allIssues.length === 0) {
  console.log('✅ Security scan completed - No issues found');
} else {
  console.log(`⚠️  Security scan completed - ${allIssues.length} issues found:`);
  allIssues.forEach(issue => console.log(`  - ${issue}`));
}

console.log('Security scan completed');
>>>>>>> origin/auto/autonomy-17186719616
