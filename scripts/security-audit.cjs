<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
<<<<<<< HEAD

#!/usr/bin/env node


=======
=======
>>>>>>> pr-12325


<<<<<<< HEAD
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
const { execSync } = require('child_process');

console.log('🔒 Starting Security Audit...');

class SecurityAudit {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'security-logs.txt');
    this.startTime = new Date();
    this.vulnerabilities = [];
    this.recommendations = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type}] ${message}`;
    console.log(logMessage);
    
    // Append to log file
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return result;
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`, 'ERROR');
      return null;
    }
  }

  async scanDependencies() {
    this.log('Scanning dependencies for vulnerabilities...');
    try {
      const result = await this.runCommand('npm audit --json', { silent: true });
      if (result) {
        const auditData = JSON.parse(result);
        
        if (auditData.vulnerabilities) {
          const vulnCount = Object.keys(auditData.vulnerabilities).length;
          this.vulnerabilities.push(`Found ${vulnCount} dependency vulnerabilities`);
          this.recommendations.push('Run npm audit fix to resolve vulnerabilities');
        } else {
          this.log('No dependency vulnerabilities found');
        }
      }
    } catch (error) {
      this.log(`Dependency scan failed: ${error.message}`, 'ERROR');
    }
  }

  async scanSecrets() {
    this.log('Scanning for exposed secrets...');
    try {
      const sensitivePatterns = [
        /password\s*[:=]\s*["'][^"']+["']/gi,
        /api[_-]?key\s*[:=]\s*["'][^"']+["']/gi,
        /secret\s*[:=]\s*["'][^"']+["']/gi,
        /token\s*[:=]\s*["'][^"']+["']/gi,
        /private[_-]?key\s*[:=]\s*["'][^"']+["']/gi
      ];
      
      const files = this.findSourceFiles();
      let secretCount = 0;
      
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          for (const pattern of sensitivePatterns) {
            if (pattern.test(content)) {
              this.vulnerabilities.push(`Potential secret in ${path.relative(this.projectRoot, file)}`);
              secretCount++;
            }
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
      
      if (secretCount === 0) {
        this.log('No exposed secrets found');
      } else {
        this.recommendations.push('Review files for exposed secrets and move them to environment variables');
      }
    } catch (error) {
      this.log(`Secret scan failed: ${error.message}`, 'ERROR');
    }
  }

  async scanConfiguration() {
    this.log('Scanning configuration files...');
    try {
      const configFiles = ['package.json', 'vite.config.ts', '.env', '.env.local'];
      
      for (const file of configFiles) {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Check for insecure configurations
            if (content.includes('NODE_ENV=development') && file.includes('.env')) {
              this.recommendations.push(`Review ${file} for production-ready configuration`);
            }
            
            if (content.includes('debug: true') || content.includes('debug:true')) {
              this.recommendations.push(`Remove debug flags from ${file} in production`);
            }
            
            if (content.includes('console.log') && file.includes('.env')) {
              this.recommendations.push(`Remove console.log statements from ${file}`);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      this.log(`Configuration scan failed: ${error.message}`, 'ERROR');
    }
  }

  async checkSecurityHeaders() {
    this.log('Checking security headers...');
    try {
      const publicDir = path.join(this.projectRoot, 'public');
      if (fs.existsSync(publicDir)) {
        const indexHtml = path.join(publicDir, 'index.html');
        if (fs.existsSync(indexHtml)) {
          const content = fs.readFileSync(indexHtml, 'utf8');
          
          const securityHeaders = [
            'Content-Security-Policy',
            'X-Frame-Options',
            'X-Content-Type-Options',
            'Referrer-Policy',
            'Permissions-Policy'
          ];
          
          for (const header of securityHeaders) {
            if (!content.includes(header)) {
              this.recommendations.push(`Add ${header} security header to index.html`);
            }
          }
        }
      }
    } catch (error) {
      this.log(`Security headers check failed: ${error.message}`, 'ERROR');
    }
  }

  async checkDependencies() {
    this.log('Checking for outdated dependencies...');
    try {
      const result = await this.runCommand('npm outdated --json', { silent: true });
      if (result) {
        const outdatedData = JSON.parse(result);
        const outdatedCount = Object.keys(outdatedData).length;
        
        if (outdatedCount > 0) {
          this.vulnerabilities.push(`Found ${outdatedCount} outdated dependencies`);
          this.recommendations.push('Run npm update to update outdated dependencies');
        } else {
          this.log('All dependencies are up to date');
        }
      }
    } catch (error) {
      this.log(`Dependency check failed: ${error.message}`, 'ERROR');
    }
  }

  findSourceFiles() {
    const files = [];
    const srcDir = path.join(this.projectRoot, 'src');
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath);
          } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    };
    
    scanDirectory(srcDir);
    return files;
  }

  async generateReport() {
    const endTime = new Date();
    const duration = endTime - this.startTime;
    
    const report = {
      timestamp: endTime.toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      vulnerabilities: this.vulnerabilities,
      recommendations: this.recommendations,
      summary: {
        totalVulnerabilities: this.vulnerabilities.length,
        totalRecommendations: this.recommendations.length,
        securityScore: Math.max(0, 100 - (this.vulnerabilities.length * 10) - (this.recommendations.length * 2))
      }
    };

    const reportPath = path.join(this.projectRoot, 'security-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log('\n=== SECURITY AUDIT REPORT ===');
    this.log(`Duration: ${report.duration}`);
    this.log(`Vulnerabilities found: ${report.summary.totalVulnerabilities}`);
    this.log(`Recommendations: ${report.summary.totalRecommendations}`);
    this.log(`Security Score: ${report.summary.securityScore}/100`);
    
    if (this.vulnerabilities.length > 0) {
      this.log('\nVulnerabilities:');
      this.vulnerabilities.forEach((vuln, index) => {
        this.log(`  ${index + 1}. ${vuln}`);
      });
    }
    
    if (this.recommendations.length > 0) {
      this.log('\nRecommendations:');
      this.recommendations.forEach((rec, index) => {
        this.log(`  ${index + 1}. ${rec}`);
      });
    }
    
    this.log(`\nFull report saved to: ${reportPath}`);
  }

  async run() {
    this.log('Starting Security Audit...');
    this.log('==========================');
    
    try {
      // Run all security checks
      await this.scanDependencies();
      await this.scanSecrets();
      await this.scanConfiguration();
      await this.checkSecurityHeaders();
      await this.checkDependencies();
      
      // Generate final report
      await this.generateReport();
      
      this.log('\nSecurity Audit completed!');
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      await this.generateReport();
      process.exit(1);
=======
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
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
    }
  }
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
// Run the security auditor
const auditor = new SecurityAuditor();
auditor.run().catch(console.error);
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
<<<<<<< HEAD
=======
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔒 Running security audit...');
console.log('✅ Security audit completed');
<<<<<<< HEAD




// Run the security audit
const audit = new SecurityAudit();
audit.run().catch(console.error);

=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
// Run the auditor
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.run().catch(console.error);
}

module.exports = SecurityAuditor;
>>>>>>> origin/cursor/automate-test-fix-improve-and-merge-code-bfbd
=======
>>>>>>> pr-12325
>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
