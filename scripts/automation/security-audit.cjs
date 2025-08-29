#!/usr/bin/env node

/**
 * Security Audit Automation
 * Replaces GitHub Actions for security monitoring
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityAudit {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 7200000; // 2 hours default
    this.reportFile = path.join(process.cwd(), 'security-audit-report.json');
    this.vulnerabilities = [];
    this.metrics = {};
  }

  async start() {
    console.log('🚀 Security Audit Automation Started');
    console.log(`⏰ Running every ${this.interval / 1000} seconds`);
    
    // Run immediately
    await this.run();
    
    // Schedule recurring runs
    setInterval(async () => {
      await this.run();
    }, this.interval);
  }

  async run() {
    try {
      console.log('🔒 Running security audit...');
      
      // Run npm audit
      await this.runNpmAudit();
      
      // Check for known vulnerable packages
      await this.checkVulnerablePackages();
      
      // Check for outdated packages
      await this.checkOutdatedPackages();
      
      // Check for license compliance
      await this.checkLicenseCompliance();
      
      // Generate report
      await this.generateReport();
      
      console.log(`✅ Security audit complete. Found ${this.vulnerabilities.length} vulnerabilities.`);
      
    } catch (error) {
      console.error('❌ Error in security audit:', error);
    }
  }

  async runNpmAudit() {
    try {
      console.log('🔍 Running npm audit...');
      const result = execSync('npm audit --json', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(result);
      
      if (auditData.vulnerabilities) {
        Object.keys(auditData.vulnerabilities).forEach(pkgName => {
          const vuln = auditData.vulnerabilities[pkgName];
          vuln.via.forEach(via => {
            if (via.type === 'npm') {
              this.vulnerabilities.push({
                package: pkgName,
                severity: via.severity || 'unknown',
                title: via.title || 'Unknown vulnerability',
                description: via.description || 'No description available',
                cwe: via.cwe || [],
                cve: via.cve || null,
                timestamp: new Date().toISOString(),
                type: 'npm-audit'
              });
            }
          });
        });
      }
      
      this.metrics.npmAudit = {
        status: 'completed',
        vulnerabilities: this.vulnerabilities.filter(v => v.type === 'npm-audit').length,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      console.error('Error running npm audit:', error);
      this.metrics.npmAudit = {
        status: 'failed',
        error: error.message,
        timestamp: new Date().toISOString()
      };
    }
  }

  async checkVulnerablePackages() {
    try {
      console.log('📦 Checking for vulnerable packages...');
      
      // Read package.json and package-lock.json
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const packageLockJson = JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));
      
      // Check for packages with known security issues
      const knownVulnerablePackages = [
        'lodash', 'moment', 'jquery', 'express', 'webpack'
      ];
      
      const allDependencies = {
        ...packageJson.dependencies,
        ...packageJson.devDependencies
      };
      
      for (const pkg of knownVulnerablePackages) {
        if (allDependencies[pkg]) {
          this.vulnerabilities.push({
            package: pkg,
            severity: 'medium',
            title: 'Known vulnerable package',
            description: `${pkg} is a package with known security vulnerabilities`,
            timestamp: new Date().toISOString(),
            type: 'known-vulnerable'
          });
        }
      }
      
    } catch (error) {
      console.error('Error checking vulnerable packages:', error);
    }
  }

  async checkOutdatedPackages() {
    try {
      console.log('🔄 Checking for outdated packages...');
      
      const result = execSync('npm outdated --json', { 
        cwd: process.cwd(),
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const outdatedData = JSON.parse(result);
      
      Object.keys(outdatedData).forEach(pkgName => {
        const pkg = outdatedData[pkgName];
        this.vulnerabilities.push({
          package: pkgName,
          severity: 'low',
          title: 'Outdated package',
          description: `Package ${pkgName} is outdated. Current: ${pkg.current}, Latest: ${pkg.latest}`,
          current: pkg.current,
          latest: pkg.latest,
          timestamp: new Date().toISOString(),
          type: 'outdated'
        });
      });
      
      this.metrics.outdatedPackages = {
        count: Object.keys(outdatedData).length,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      // npm outdated returns non-zero exit code when there are outdated packages
      if (error.status === 1) {
        // This is expected when there are outdated packages
        console.log('Found outdated packages (this is normal)');
      } else {
        console.error('Error checking outdated packages:', error);
      }
    }
  }

  async checkLicenseCompliance() {
    try {
      console.log('📄 Checking license compliance...');
      
      // Check for problematic licenses
      const problematicLicenses = ['GPL', 'AGPL', 'LGPL'];
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      
      if (packageJson.license) {
        const license = packageJson.license.toUpperCase();
        if (problematicLicenses.some(lic => license.includes(lic))) {
          this.vulnerabilities.push({
            package: packageJson.name,
            severity: 'medium',
            title: 'Potentially problematic license',
            description: `License ${packageJson.license} may have compliance implications`,
            license: packageJson.license,
            timestamp: new Date().toISOString(),
            type: 'license-compliance'
          });
        }
      }
      
    } catch (error) {
      console.error('Error checking license compliance:', error);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      metrics: this.metrics,
      summary: {
        totalVulnerabilities: this.vulnerabilities.length,
        byType: this.groupByType(this.vulnerabilities),
        bySeverity: this.groupBySeverity(this.vulnerabilities),
        overallRisk: this.getOverallRisk()
      },
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    console.log(`📊 Security report generated: ${this.reportFile}`);
  }

  groupByType(vulnerabilities) {
    return vulnerabilities.reduce((acc, vuln) => {
      acc[vuln.type] = (acc[vuln.type] || 0) + 1;
      return acc;
    }, {});
  }

  groupBySeverity(vulnerabilities) {
    return vulnerabilities.reduce((acc, vuln) => {
      acc[vuln.severity] = (acc[vuln.severity] || 0) + 1;
      return acc;
    }, {});
  }

  getOverallRisk() {
    const critical = this.vulnerabilities.filter(v => v.severity === 'critical').length;
    const high = this.vulnerabilities.filter(v => v.severity === 'high').length;
    const medium = this.vulnerabilities.filter(v => v.severity === 'medium').length;
    
    if (critical > 0) return 'critical';
    if (high > 0) return 'high';
    if (medium > 3) return 'medium';
    if (medium > 0) return 'low';
    return 'none';
  }

  generateRecommendations() {
    const recommendations = [];
    
    const npmVulns = this.vulnerabilities.filter(v => v.type === 'npm-audit');
    if (npmVulns.length > 0) {
      recommendations.push({
        priority: 'high',
        action: 'Run npm audit fix to resolve vulnerabilities',
        details: `Found ${npmVulns.length} npm vulnerabilities`
      });
    }
    
    const outdated = this.vulnerabilities.filter(v => v.type === 'outdated');
    if (outdated.length > 0) {
      recommendations.push({
        priority: 'medium',
        action: 'Update outdated packages',
        details: `Found ${outdated.length} outdated packages`
      });
    }
    
    return recommendations;
  }
}

// Start the automation
const securityAudit = new SecurityAudit();
securityAudit.start().catch(console.error);