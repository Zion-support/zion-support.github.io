#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DependencyUpdates {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportPath = path.join(this.projectRoot, 'dependency-updates-report.json');
    this.updates = [];
    this.failures = [];
    this.currentVersions = {};
  }

  async run() {
    console.log('📦 Starting Dependency Updates...');
    
    try {
      await this.checkCurrentVersions();
      await this.checkForUpdates();
      await this.updateDependencies();
      await this.runSecurityAudit();
      await this.runTests();
      await this.generateReport();
      
      console.log('✅ Dependency Updates completed successfully');
    } catch (error) {
      console.error('❌ Dependency Updates failed:', error.message);
      process.exit(1);
    }
  }

  async checkCurrentVersions() {
    console.log('🔍 Checking current dependency versions...');
    
    try {
      const packagePath = path.join(this.projectRoot, 'package.json');
      if (fs.existsSync(packagePath)) {
        const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
        
        this.currentVersions = {
          dependencies: packageJson.dependencies || {},
          devDependencies: packageJson.devDependencies || {},
          peerDependencies: packageJson.peerDependencies || {}
        };
      }
    } catch (error) {
      console.log('⚠️  Could not check current versions:', error.message);
    }
  }

  async checkForUpdates() {
    console.log('🔍 Checking for available updates...');
    
    try {
      const outdatedOutput = execSync('npm outdated --json --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      const outdatedData = JSON.parse(outdatedOutput);
      
      Object.keys(outdatedData).forEach(packageName => {
        const pkg = outdatedData[packageName];
        this.updates.push({
          package: packageName,
          current: pkg.current,
          wanted: pkg.wanted,
          latest: pkg.latest,
          location: pkg.location,
          type: this.getDependencyType(packageName)
        });
      });
      
      console.log(`📦 Found ${this.updates.length} packages with updates available`);
      
    } catch (error) {
      console.log('✅ No outdated packages found or check failed');
    }
  }

  getDependencyType(packageName) {
    if (this.currentVersions.dependencies[packageName]) {
      return 'dependency';
    } else if (this.currentVersions.devDependencies[packageName]) {
      return 'devDependency';
    } else if (this.currentVersions.peerDependencies[packageName]) {
      return 'peerDependency';
    }
    return 'unknown';
  }

  async updateDependencies() {
    if (this.updates.length === 0) {
      console.log('✅ No dependencies to update');
      return;
    }
    
    console.log('🔄 Updating dependencies...');
    
    try {
      // Update all dependencies
      execSync('npm update --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      // Update to latest versions for major updates
      const majorUpdates = this.updates.filter(update => {
        const currentMajor = update.current.split('.')[0];
        const latestMajor = update.latest.split('.')[0];
        return currentMajor !== latestMajor;
      });
      
      if (majorUpdates.length > 0) {
        console.log(`⚠️  Found ${majorUpdates.length} major version updates`);
        
        // For major updates, we'll just log them - manual review needed
        majorUpdates.forEach(update => {
          console.log(`📦 ${update.package}: ${update.current} → ${update.latest} (MAJOR)`);
        });
      }
      
      // Update package-lock.json
      execSync('npm install --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.updates.forEach(update => {
        update.status = 'updated';
        update.updatedAt = new Date().toISOString();
      });
      
    } catch (error) {
      this.failures.push({
        type: 'update_failed',
        error: error.message,
        timestamp: new Date().toISOString()
      });
      console.log('⚠️  Some dependency updates failed');
    }
  }

  async runSecurityAudit() {
    console.log('🔒 Running security audit after updates...');
    
    try {
      execSync('npm audit --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      console.log('✅ Security audit passed');
    } catch (error) {
      this.failures.push({
        type: 'security_audit_failed',
        error: error.message,
        timestamp: new Date().toISOString()
      });
      console.log('⚠️  Security audit failed after updates');
    }
  }

  async runTests() {
    console.log('🧪 Running tests after updates...');
    
    try {
      execSync('npm test --silent', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      console.log('✅ Tests passed after updates');
    } catch (error) {
      this.failures.push({
        type: 'tests_failed_after_update',
        error: error.message,
        timestamp: new Date().toISOString()
      });
      console.log('⚠️  Tests failed after updates');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      total_updates: this.updates.length,
      total_failures: this.failures.length,
      updates: this.updates,
      failures: this.failures,
      current_versions: this.currentVersions,
      status: this.failures.length === 0 ? 'success' : 'partial_success',
      recommendations: this.generateRecommendations()
    };
    
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    console.log(`📊 Dependency updates report generated: ${this.reportPath}`);
    
    if (this.updates.length > 0) {
      console.log(`✅ Successfully processed ${this.updates.length} dependency updates`);
    }
    
    if (this.failures.length > 0) {
      console.log(`⚠️  Encountered ${this.failures.length} failures`);
    }
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.failures.length > 0) {
      recommendations.push('Review failed updates and resolve issues');
      recommendations.push('Run npm audit fix to resolve security issues');
    }
    
    if (this.updates.length > 0) {
      recommendations.push('Test the application thoroughly after updates');
      recommendations.push('Review breaking changes in major version updates');
    }
    
    recommendations.push('Regularly run dependency updates');
    recommendations.push('Monitor for security vulnerabilities');
    
    return recommendations;
  }
}

// Run the automation
if (require.main === module) {
  const updater = new DependencyUpdates();
  updater.run();
}

module.exports = DependencyUpdates;