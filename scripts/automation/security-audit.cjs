#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityAudit {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportPath = path.join(this.projectRoot, 'security-audit-report.json');
    this.vulnerabilities = [];
    this.outdatedPackages = [];
    this.securityIssues = [];
  }

  async run() {
    console.log('🔒 Starting Security Audit...');
    
    try {
      await this.runNpmAudit();
      await this.checkOutdatedPackages();
      await this.checkDependencies();
      await this.checkSecurityConfig();
      await this.generateReport();
      
      console.log('✅ Security Audit completed successfully');
    } catch (error) {
      console.error('❌ Security Audit failed:', error.message);
      process.exit(1);
    }
  }

  async runNpmAudit() {
    console.log('🔍 Running npm audit...');
    
    try {
      const auditOutput = execSync('npm audit --json --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(auditOutput);
      
      if (auditData.vulnerabilities) {
        Object.keys(auditData.vulnerabilities).forEach(packageName => {
          const vuln = auditData.vulnerabilities[packageName];
          this.vulnerabilities.push({
            package: packageName,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            recommendation: vuln.recommendation,
            via: vuln.via
          });
        });
      }
      
    } catch (error) {
      // npm audit failed, try alternative approach
      try {
        const auditOutput = execSync('npm audit --silent', { 
          encoding: 'utf8',
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        
        // Parse text output for vulnerabilities
        if (auditOutput.includes('found')) {
          this.securityIssues.push({
            type: 'npm_audit_found_vulnerabilities',
            details: 'Vulnerabilities found in npm audit'
          });
        }
      } catch (auditError) {
        this.securityIssues.push({
          type: 'npm_audit_failed',
          details: auditError.message
        });
      }
    }
  }

  async checkOutdatedPackages() {
    console.log('📦 Checking for outdated packages...');
    
    try {
      const outdatedOutput = execSync('npm outdated --json --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      const outdatedData = JSON.parse(outdatedOutput);
      
      Object.keys(outdatedData).forEach(packageName => {
        const pkg = outdatedData[packageName];
        this.outdatedPackages.push({
          package: packageName,
          current: pkg.current,
          wanted: pkg.wanted,
          latest: pkg.latest,
          location: pkg.location
        });
      });
      
    } catch (error) {
      // npm outdated failed, which might mean no outdated packages
      console.log('✅ No outdated packages found or check failed');
    }
  }

  async checkDependencies() {
    console.log('🔍 Checking dependencies...');
    
    try {
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        // Check for potentially risky dependencies
        const allDeps = {
          ...packageJson.dependencies,
          ...packageJson.devDependencies
        };
        
        Object.keys(allDeps).forEach(dep => {
          const version = allDeps[dep];
          
          // Check for known risky patterns
          if (version.includes('*') || version.includes('latest')) {
            this.securityIssues.push({
              type: 'unstable_version',
              package: dep,
              version: version,
              risk: 'Unstable version specification'
            });
          }
          
          if (version.includes('^') && !version.includes('0.')) {
            // Major version updates could introduce breaking changes
            this.securityIssues.push({
              type: 'major_version_update_risk',
              package: dep,
              version: version,
              risk: 'Major version updates may introduce breaking changes'
            });
          }
        });
      }
    } catch (error) {
      console.log('⚠️  Could not check dependencies:', error.message);
    }
  }

  async checkSecurityConfig() {
    console.log('🔒 Checking security configuration...');
    
    try {
      // Check for security-related files
      const securityFiles = [
        '.npmrc',
        '.yarnrc',
        'security.md',
        'SECURITY.md'
      ];
      
      securityFiles.forEach(file => {
        const filePath = path.join(this.projectRoot, file);
        if (fs.existsSync(filePath)) {
          this.securityIssues.push({
            type: 'security_file_found',
            file: file,
            status: 'present'
          });
        }
      });
      
      // Check package.json for security scripts
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        if (packageJson.scripts && packageJson.scripts.audit) {
          this.securityIssues.push({
            type: 'security_script_found',
            script: 'audit',
            status: 'present'
          });
        }
      }
      
    } catch (error) {
      console.log('⚠️  Could not check security configuration:', error.message);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      total_vulnerabilities: this.vulnerabilities.length,
      total_outdated_packages: this.outdatedPackages.length,
      total_security_issues: this.securityIssues.length,
      vulnerabilities: this.vulnerabilities,
      outdated_packages: this.outdatedPackages,
      security_issues: this.securityIssues,
      status: this.vulnerabilities.length === 0 ? 'secure' : 'vulnerable',
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Security report generated: ${this.reportPath}`);
    
    if (this.vulnerabilities.length > 0) {
      console.log(`⚠️  Found ${this.vulnerabilities.length} security vulnerabilities`);
    }
    
    if (this.outdatedPackages.length > 0) {
      console.log(`📦 Found ${this.outdatedPackages.length} outdated packages`);
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.vulnerabilities.length > 0) {
      recommendations.push('Run npm audit fix to automatically fix vulnerabilities');
      recommendations.push('Review and manually fix any remaining vulnerabilities');
    }
    
    if (this.outdatedPackages.length > 0) {
      recommendations.push('Update outdated packages to latest versions');
      recommendations.push('Test thoroughly after updating packages');
    }
    
    if (this.securityIssues.length > 0) {
      recommendations.push('Review security configuration files');
      recommendations.push('Add security scripts to package.json');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Maintain current security practices');
      recommendations.push('Regularly run security audits');
    }
    
    return recommendations;
  }
}

// Run the automation
if (require.main === module) {
  const audit = new SecurityAudit();
  audit.run();
}

module.exports = SecurityAudit;