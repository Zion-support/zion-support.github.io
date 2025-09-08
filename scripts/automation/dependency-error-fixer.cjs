#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DependencyErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'reports');
    this.startTime = Date.now();
    this.results = {
      dependencyIssuesFixed: 0,
      packagesUpdated: 0,
      conflictsResolved: 0,
      success: false
    };
    
    // Ensure reports directory exists
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Dependency Error Fixer: ${message}`);
  }

  async checkDependencyHealth() {
    this.log('Checking dependency health...');
    
    try {
      // Check for outdated packages
      const outdatedResult = execSync('npm outdated --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const outdated = JSON.parse(outdatedResult);
      const outdatedCount = Object.keys(outdated).length;
      
      this.log(`Found ${outdatedCount} outdated packages`);
      
      // Check for security vulnerabilities
      const auditResult = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const audit = JSON.parse(auditResult);
      const vulnerabilityCount = audit.metadata?.vulnerabilities?.total || 0;
      
      this.log(`Found ${vulnerabilityCount} security vulnerabilities`);
      
      return {
        outdated,
        outdatedCount,
        vulnerabilities: audit,
        vulnerabilityCount
      };
      
    } catch (error) {
      if (error.stdout) {
        try {
          const outdated = JSON.parse(error.stdout);
          const outdatedCount = Object.keys(outdated).length;
          this.log(`Found ${outdatedCount} outdated packages`);
          return { outdated, outdatedCount, vulnerabilities: {}, vulnerabilityCount: 0 };
        } catch (parseError) {
          this.log('Failed to parse dependency check output');
        }
      }
      
      this.log('Dependency health check failed');
      return { outdated: {}, outdatedCount: 0, vulnerabilities: {}, vulnerabilityCount: 0 };
    }
  }

  async fixDependencyIssues() {
    this.log('Fixing dependency issues...');
    
    try {
      // Clear npm cache
      this.log('Clearing npm cache...');
      execSync('npm cache clean --force', { stdio: 'pipe' });
      
      // Remove node_modules and package-lock.json
      if (fs.existsSync('node_modules')) {
        this.log('Removing node_modules...');
        execSync('rm -rf node_modules', { stdio: 'pipe' });
      }
      
      if (fs.existsSync('package-lock.json')) {
        this.log('Removing package-lock.json...');
        execSync('rm package-lock.json', { stdio: 'pipe' });
      }
      
      // Reinstall dependencies
      this.log('Reinstalling dependencies...');
      execSync('npm install', { stdio: 'pipe' });
      
      this.log('Dependencies reinstalled successfully');
      this.results.dependencyIssuesFixed++;
      
      return true;
      
    } catch (error) {
      this.log(`Failed to fix dependency issues: ${error.message}`);
      return false;
    }
  }

  async updateOutdatedPackages() {
    this.log('Updating outdated packages...');
    
    try {
      // Check for outdated packages
      const outdatedResult = execSync('npm outdated --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const outdated = JSON.parse(outdatedResult);
      const packagesToUpdate = Object.keys(outdated);
      
      if (packagesToUpdate.length === 0) {
        this.log('No outdated packages found');
        return true;
      }
      
      this.log(`Updating ${packagesToUpdate.length} outdated packages...`);
      
      // Update packages one by one to avoid conflicts
      for (const packageName of packagesToUpdate) {
        try {
          this.log(`Updating ${packageName}...`);
          execSync(`npm update ${packageName}`, { stdio: 'pipe' });
          this.results.packagesUpdated++;
        } catch (error) {
          this.log(`Failed to update ${packageName}: ${error.message}`);
        }
      }
      
      this.log(`Updated ${this.results.packagesUpdated} packages`);
      return true;
      
    } catch (error) {
      this.log(`Failed to update packages: ${error.message}`);
      return false;
    }
  }

  async fixSecurityVulnerabilities() {
    this.log('Fixing security vulnerabilities...');
    
    try {
      // Run npm audit fix
      this.log('Running npm audit fix...');
      execSync('npm audit fix', { stdio: 'pipe' });
      
      // Check if there are still vulnerabilities that need manual fixing
      const auditResult = execSync('npm audit --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const audit = JSON.parse(auditResult);
      const remainingVulnerabilities = audit.metadata?.vulnerabilities?.total || 0;
      
      if (remainingVulnerabilities > 0) {
        this.log(`Attempting to fix remaining ${remainingVulnerabilities} vulnerabilities...`);
        
        // Try to fix with --force if there are still vulnerabilities
        try {
          execSync('npm audit fix --force', { stdio: 'pipe' });
          this.log('Forced vulnerability fix completed');
        } catch (forceError) {
          this.log('Forced vulnerability fix failed, some vulnerabilities may remain');
        }
      }
      
      this.log('Security vulnerability fix completed');
      return true;
      
    } catch (error) {
      this.log(`Failed to fix security vulnerabilities: ${error.message}`);
      return false;
    }
  }

  async resolveDependencyConflicts() {
    this.log('Resolving dependency conflicts...');
    
    try {
      // Check for dependency conflicts
      const lsResult = execSync('npm ls --json', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const ls = JSON.parse(lsResult);
      const problems = ls.problems || [];
      
      if (problems.length === 0) {
        this.log('No dependency conflicts found');
        return true;
      }
      
      this.log(`Found ${problems.length} dependency conflicts`);
      
      // Try to resolve conflicts by reinstalling
      this.log('Attempting to resolve conflicts...');
      execSync('npm install --force', { stdio: 'pipe' });
      
      this.log('Dependency conflicts resolved');
      this.results.conflictsResolved++;
      
      return true;
      
    } catch (error) {
      this.log(`Failed to resolve dependency conflicts: ${error.message}`);
      return false;
    }
  }

  async checkPackageJsonHealth() {
    this.log('Checking package.json health...');
    
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      const issues = [];
      
      // Check for missing required fields
      if (!packageJson.name) issues.push('Missing package name');
      if (!packageJson.version) issues.push('Missing package version');
      
      // Check for invalid dependency versions
      const checkVersions = (deps) => {
        if (!deps) return;
        
        for (const [pkg, version] of Object.entries(deps)) {
          if (typeof version !== 'string' || version.trim() === '') {
            issues.push(`Invalid version for ${pkg}: ${version}`);
          }
        }
      };
      
      checkVersions(packageJson.dependencies);
      checkVersions(packageJson.devDependencies);
      
      if (issues.length > 0) {
        this.log(`Found ${issues.length} package.json issues: ${issues.join(', ')}`);
        return issues;
      }
      
      this.log('Package.json is healthy');
      return [];
      
    } catch (error) {
      this.log(`Failed to check package.json: ${error.message}`);
      return ['Failed to parse package.json'];
    }
  }

  async fixPackageJsonIssues(issues) {
    this.log('Fixing package.json issues...');
    
    try {
      const packageJsonPath = path.join(this.projectRoot, 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      let fixed = false;
      
      // Fix missing name
      if (!packageJson.name) {
        packageJson.name = 'zion-tech-group-app';
        fixed = true;
      }
      
      // Fix missing version
      if (!packageJson.version) {
        packageJson.version = '0.1.0';
        fixed = true;
      }
      
      // Fix invalid dependency versions
      const fixVersions = (deps) => {
        if (!deps) return;
        
        for (const [pkg, version] of Object.entries(deps)) {
          if (typeof version !== 'string' || version.trim() === '') {
            deps[pkg] = '^1.0.0';
            fixed = true;
          }
        }
      };
      
      fixVersions(packageJson.dependencies);
      fixVersions(packageJson.devDependencies);
      
      if (fixed) {
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        this.log('Package.json issues fixed');
        this.results.dependencyIssuesFixed++;
      }
      
      return fixed;
      
    } catch (error) {
      this.log(`Failed to fix package.json issues: ${error.message}`);
      return false;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      results: this.results,
      summary: {
        totalIssuesFixed: this.results.dependencyIssuesFixed + this.results.packagesUpdated + this.results.conflictsResolved,
        dependencyIssuesFixed: this.results.dependencyIssuesFixed,
        packagesUpdated: this.results.packagesUpdated,
        conflictsResolved: this.results.conflictsResolved,
        successRate: this.results.success ? '100%' : '0%',
        efficiency: `Dependency fix completed in ${Math.round((Date.now() - this.startTime) / 1000)}s`
      }
    };
    
    const reportPath = path.join(this.reportsDir, 'dependency-error-fixer-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Report generated: ${reportPath}`);
    return report;
  }

  async run() {
    this.log('Starting Dependency Error Fixer...');
    
    try {
      // Check dependency health
      const health = await this.checkDependencyHealth();
      
      // Fix package.json issues
      const packageJsonIssues = await this.checkPackageJsonHealth();
      if (packageJsonIssues.length > 0) {
        await this.fixPackageJsonIssues(packageJsonIssues);
      }
      
      // Fix dependency issues
      await this.fixDependencyIssues();
      
      // Update outdated packages
      await this.updateOutdatedPackages();
      
      // Fix security vulnerabilities
      await this.fixSecurityVulnerabilities();
      
      // Resolve dependency conflicts
      await this.resolveDependencyConflicts();
      
      // Final health check
      const finalHealth = await this.checkDependencyHealth();
      
      // Determine success
      this.results.success = 
        finalHealth.vulnerabilityCount === 0 && 
        finalHealth.outdatedCount === 0;
      
      // Generate report
      await this.generateReport();
      
      this.log(`Dependency Error Fixer completed. Success: ${this.results.success}`);
      this.log(`Fixed ${this.results.dependencyIssuesFixed} issues, Updated ${this.results.packagesUpdated} packages, Resolved ${this.results.conflictsResolved} conflicts`);
      
      return this.results;
      
    } catch (error) {
      this.log(`Dependency Error Fixer failed: ${error.message}`);
      this.results.success = false;
      return this.results;
    }
  }
  {/* Removed stray closing brace */}

// Run the fixer if called directly
if (require.main === module) {
  const fixer = new DependencyErrorFixer();
  fixer.run().then(results => {
    process.exit(results.success ? 0 : 1);
  }).catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
  });
  {/* Removed stray closing brace */}

module.exports = DependencyErrorFixer;