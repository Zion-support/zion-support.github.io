#!/usr/bin/env node

/**
 * Dependency Updater Script
 * Replaces GitHub Actions dependencies workflow
 * Checks and updates project dependencies
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('📦 Dependency Updater Started');

class DependencyUpdater {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.updates = [];
    this.vulnerabilities = [];
    this.outdatedPackages = [];
  }

  async updateDependencies() {
    try {
      console.log('🔍 Checking dependencies...');
      
      // Check for outdated packages
      await this.checkOutdatedPackages();
      
      // Run security audit
      await this.runSecurityAudit();
      
      // Check for available updates
      await this.checkAvailableUpdates();
      
      // Generate update report
      await this.generateReport();
      
      console.log('✅ Dependency update check completed');
      
    } catch (error) {
      console.error('❌ Error during dependency update:', error.message);
    }
  }

  async checkOutdatedPackages() {
    try {
      console.log('📋 Checking for outdated packages...');
      
      const result = execSync('npm outdated --json', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe']
      });
      
      if (result.trim()) {
        const outdated = JSON.parse(result);
        this.outdatedPackages = Object.keys(outdated);
        
        console.log(`📦 Found ${this.outdatedPackages.length} outdated packages:`);
        this.outdatedPackages.forEach(pkg => {
          const info = outdated[pkg];
          console.log(`   - ${pkg}: ${info.current} → ${info.latest}`);
        });
      } else {
        console.log('✅ All packages are up to date');
      }
      
    } catch (error) {
      if (error.status === 1) {
        // npm outdated returns 1 when there are outdated packages
        console.log('📦 Found outdated packages (details above)');
      } else {
        console.warn('⚠️  Could not check outdated packages:', error.message);
      }
    }
  }

  async runSecurityAudit() {
    try {
      console.log('🔒 Running security audit...');
      
      const result = execSync('npm audit --audit-level moderate --json', { 
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe']
      });
      
      const audit = JSON.parse(result);
      
      if (audit.vulnerabilities) {
        const vulnCount = Object.keys(audit.vulnerabilities).length;
        this.vulnerabilities = Object.keys(audit.vulnerabilities);
        
        console.log(`⚠️  Found ${vulnCount} security vulnerabilities:`);
        this.vulnerabilities.forEach(vuln => {
          const info = audit.vulnerabilities[vuln];
          console.log(`   - ${vuln}: ${info.severity} - ${info.title}`);
        });
      } else {
        console.log('✅ No security vulnerabilities found');
      }
      
    } catch (error) {
      if (error.status === 1) {
        // npm audit returns 1 when vulnerabilities are found
        console.log('⚠️  Security vulnerabilities found (details above)');
      } else {
        console.warn('⚠️  Could not run security audit:', error.message);
      }
    }
  }

  async checkAvailableUpdates() {
    try {
      console.log('🔄 Checking for available updates...');
      
      // Check if package-lock.json exists
      const lockPath = path.join(this.projectRoot, 'package-lock.json');
      if (fs.existsSync(lockPath)) {
        const lockStats = fs.statSync(lockPath);
        const lockAge = Date.now() - lockStats.mtime.getTime();
        const lockAgeDays = Math.floor(lockAge / (1000 * 60 * 60 * 24));
        
        if (lockAgeDays > 30) {
          this.updates.push(`Package lock is ${lockAgeDays} days old - consider updating`);
        }
      }
      
      // Check for major version updates
      if (this.outdatedPackages.length > 0) {
        this.updates.push(`${this.outdatedPackages.length} packages have updates available`);
      }
      
      // Check for security updates
      if (this.vulnerabilities.length > 0) {
        this.updates.push(`${this.vulnerabilities.length} security vulnerabilities need attention`);
      }
      
    } catch (error) {
      console.warn('⚠️  Could not check available updates:', error.message);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        outdatedPackages: this.outdatedPackages.length,
        vulnerabilities: this.vulnerabilities.length,
        updates: this.updates.length
      },
      outdatedPackages: this.outdatedPackages,
      vulnerabilities: this.vulnerabilities,
      updateSuggestions: this.updates,
      recommendations: this.generateRecommendations()
    };
    
    // Save report to file
    const reportPath = path.join(this.projectRoot, 'logs', 'dependency-update-report.json');
    try {
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      console.log(`📊 Report saved to: ${reportPath}`);
    } catch (error) {
      console.warn('⚠️  Could not save report:', error.message);
    }
    
    // Display summary
    console.log('\n📋 Dependency Update Summary:');
    console.log('─'.repeat(50));
    console.log(`📦 Outdated packages: ${this.outdatedPackages.length}`);
    console.log(`🔒 Security vulnerabilities: ${this.vulnerabilities.length}`);
    console.log(`🔄 Update suggestions: ${this.updates.length}`);
    
    if (this.updates.length > 0) {
      console.log('\n💡 Recommendations:');
      this.updates.forEach((update, index) => {
        console.log(`   ${index + 1}. ${update}`);
      });
    }
    
    console.log('─'.repeat(50));
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.outdatedPackages.length > 0) {
      recommendations.push('Run "npm update" to update packages within version constraints');
      recommendations.push('Review major version updates with "npm outdated"');
    }
    
    if (this.vulnerabilities.length > 0) {
      recommendations.push('Run "npm audit fix" to automatically fix vulnerabilities');
      recommendations.push('Review and manually fix remaining vulnerabilities');
    }
    
    if (this.outdatedPackages.length === 0 && this.vulnerabilities.length === 0) {
      recommendations.push('Dependencies are up to date and secure');
    }
    
    return recommendations;
  }
}

// Run the dependency updater
const updater = new DependencyUpdater();
updater.updateDependencies().then(() => {
  console.log('📦 Dependency Updater Completed');
  process.exit(0);
}).catch((error) => {
  console.error('❌ Dependency Updater Failed:', error);
  process.exit(1);
});