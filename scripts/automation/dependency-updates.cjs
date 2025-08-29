#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📦 Starting Dependency Updates Automation...');

class DependencyUpdates {
  constructor() {
    this.reportDir = path.join(process.cwd(), 'ci-cd-reports');
    this.ensureReportDirectory();
    this.startTime = Date.now();
    this.outdatedPackages = [];
    this.updatedPackages = [];
    this.failedUpdates = [];
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async run() {
    try {
      console.log('🔍 Checking for outdated dependencies...');
      
      // Check for outdated packages
      await this.checkOutdatedPackages();
      
      // Update packages if needed
      if (this.outdatedPackages.length > 0) {
        await this.updatePackages();
      }
      
      // Generate report
      await this.generateReport();
      
      console.log(`✅ Dependency Updates completed. Found ${this.outdatedPackages.length} outdated packages, updated ${this.updatedPackages.length} packages.`);
      
    } catch (error) {
      console.error('❌ Dependency Updates failed:', error.message);
      await this.generateErrorReport(error);
    }
  }

  async checkOutdatedPackages() {
    try {
      console.log('🔍 Checking for outdated packages...');
      
      try {
        const outdatedOutput = execSync('npm outdated --json', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        if (outdatedOutput.trim()) {
          const outdated = JSON.parse(outdatedOutput);
          
          for (const [packageName, packageInfo] of Object.entries(outdated)) {
            this.outdatedPackages.push({
              name: packageName,
              current: packageInfo.current,
              wanted: packageInfo.wanted,
              latest: packageInfo.latest,
              location: packageInfo.location,
              timestamp: new Date().toISOString()
            });
          }
          
          console.log(`⚠️  Found ${this.outdatedPackages.length} outdated packages`);
          
          // Log outdated packages
          for (const pkg of this.outdatedPackages) {
            console.log(`  - ${pkg.name}: ${pkg.current} → ${pkg.latest}`);
          }
        } else {
          console.log('✅ All packages are up to date');
        }
        
      } catch (error) {
        // npm outdated exits with code 1 if packages are outdated
        console.log('ℹ️  Some packages may be outdated');
      }
      
    } catch (error) {
      console.log('ℹ️  Error checking outdated packages:', error.message);
    }
  }

  async updatePackages() {
    try {
      console.log('🔄 Updating outdated packages...');
      
      // Update packages using npm update
      try {
        const updateOutput = execSync('npm update', { 
          encoding: 'utf8',
          cwd: process.cwd(),
          stdio: 'pipe'
        });
        
        console.log('✅ Packages updated successfully');
        
        // Check what was actually updated
        await this.checkWhatWasUpdated();
        
      } catch (error) {
        console.log('❌ Package update failed:', error.message);
        this.failedUpdates.push({
          type: 'npm_update',
          error: error.message,
          timestamp: new Date().toISOString()
        });
      }
      
      // Try to update to latest versions for major updates
      await this.updateToLatest();
      
    } catch (error) {
      console.log('ℹ️  Error updating packages:', error.message);
    }
  }

  async updateToLatest() {
    try {
      console.log('🔄 Updating packages to latest versions...');
      
      // Get list of packages that can be updated to latest
      const majorUpdates = this.outdatedPackages.filter(pkg => 
        pkg.wanted !== pkg.latest && pkg.wanted !== pkg.current
      );
      
      if (majorUpdates.length > 0) {
        console.log(`🔄 Found ${majorUpdates.length} packages that can be updated to latest versions`);
        
        for (const pkg of majorUpdates) {
          try {
            console.log(`🔄 Updating ${pkg.name} to latest version...`);
            
            const updateOutput = execSync(`npm install ${pkg.name}@latest`, { 
              encoding: 'utf8',
              cwd: process.cwd(),
              stdio: 'pipe'
            });
            
            this.updatedPackages.push({
              name: pkg.name,
              from: pkg.current,
              to: pkg.latest,
              type: 'major_update',
              timestamp: new Date().toISOString()
            });
            
            console.log(`✅ Updated ${pkg.name} to latest version`);
            
          } catch (error) {
            console.log(`❌ Failed to update ${pkg.name}:`, error.message);
            this.failedUpdates.push({
              package: pkg.name,
              error: error.message,
              timestamp: new Date().toISOString()
            });
          }
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error updating to latest versions:', error.message);
    }
  }

  async checkWhatWasUpdated() {
    try {
      console.log('🔍 Checking what packages were updated...');
      
      // Check package-lock.json for changes
      if (fs.existsSync('package-lock.json')) {
        const lockFile = fs.readFileSync('package-lock.json', 'utf8');
        
        // Look for updated version numbers
        for (const pkg of this.outdatedPackages) {
          if (lockFile.includes(`"${pkg.name}": "~${pkg.wanted}"`) || 
              lockFile.includes(`"${pkg.name}": "^${pkg.wanted}"`) ||
              lockFile.includes(`"${pkg.name}": "${pkg.latest}"`)) {
            
            this.updatedPackages.push({
              name: pkg.name,
              from: pkg.current,
              to: pkg.wanted || pkg.latest,
              type: 'minor_update',
              timestamp: new Date().toISOString()
            });
          }
        }
      }
      
    } catch (error) {
      console.log('ℹ️  Error checking what was updated:', error.message);
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      outdatedPackages: this.outdatedPackages,
      updatedPackages: this.updatedPackages,
      failedUpdates: this.failedUpdates,
      totalOutdated: this.outdatedPackages.length,
      totalUpdated: this.updatedPackages.length,
      totalFailed: this.failedUpdates.length,
      status: this.outdatedPackages.length === 0 ? 'up_to_date' : 'updates_applied'
    };

    const reportPath = path.join(this.reportDir, 'dependency-updates-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Report saved to ${reportPath}`);
  }

  async generateErrorReport(error) {
    const errorReport = {
      timestamp: new Date().toISOString(),
      error: error.message,
      stack: error.stack,
      status: 'failed'
    };

    const reportPath = path.join(this.reportDir, 'dependency-updates-error.json');
    fs.writeFileSync(reportPath, JSON.stringify(errorReport, null, 2));
  }
}

// Run the automation
const updates = new DependencyUpdates();
updates.run().catch(console.error);