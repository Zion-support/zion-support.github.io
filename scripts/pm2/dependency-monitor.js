#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DependencyMonitor {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs/pm2/dependency-monitor.log');
    this.reportFile = path.join(this.projectRoot, 'logs/pm2/dependency-report.json');
    this.startTime = Date.now();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    
    try {
      fs.appendFileSync(this.logFile, logMessage);
    } catch (error) {
      console.error('Failed to write to log file:', error.message);
    }
  }

  async checkNpmAudit() {
    try {
      this.log('🔒 Running npm audit...');
      const auditResult = execSync('npm audit --json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const audit = JSON.parse(auditResult);
      return audit;
    } catch (error) {
      // npm audit might fail if there are vulnerabilities
      try {
        const output = error.stdout?.toString() || error.stderr?.toString() || '';
        if (output.includes('npm ERR!')) {
          // Try to parse the error output for vulnerability info
          const lines = output.split('\n');
          const vulnerabilities = [];
          
          for (const line of lines) {
            if (line.includes('vulnerabilities found')) {
              const match = line.match(/(\d+) vulnerabilities found/);
              if (match) {
                vulnerabilities.push({
                  count: parseInt(match[1]),
                  severity: 'unknown'
                });
              }
            }
          }
          
          return {
            vulnerabilities: vulnerabilities,
            error: 'Audit failed due to vulnerabilities'
          };
        }
      } catch (parseError) {
        this.log(`Failed to parse audit error: ${parseError.message}`);
      }
      
      this.log(`npm audit failed: ${error.message}`);
      return { vulnerabilities: [], error: error.message };
    }
  }

  async checkOutdatedPackages() {
    try {
      this.log('📦 Checking for outdated packages...');
      const outdatedResult = execSync('npm outdated --json', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const outdated = JSON.parse(outdatedResult);
      return outdated;
    } catch (error) {
      // npm outdated returns non-zero exit code when packages are outdated
      try {
        const output = error.stdout?.toString() || '';
        if (output.trim()) {
          const outdated = JSON.parse(output);
          return outdated;
        }
      } catch (parseError) {
        this.log(`Failed to parse outdated packages: ${parseError.message}`);
      }
      
      this.log(`npm outdated failed: ${error.message}`);
      return {};
    }
  }

  async checkPackageLock() {
    try {
      const packageLockPath = path.join(this.projectRoot, 'package-lock.json');
      
      if (!fs.existsSync(packageLockPath)) {
        return { exists: false, issues: ['package-lock.json not found'] };
      }
      
      const packageLock = JSON.parse(fs.readFileSync(packageLockPath, 'utf8'));
      
      const issues = [];
      
      // Check for lockfile version
      if (packageLock.lockfileVersion < 2) {
        issues.push('Outdated lockfile version');
      }
      
      // Check for integrity issues
      const packages = packageLock.packages || {};
      for (const [pkgName, pkgData] of Object.entries(packages)) {
        if (pkgData.integrity && !pkgData.integrity.startsWith('sha512-')) {
          issues.push(`Weak integrity hash for ${pkgName}`);
        }
      }
      
      return {
        exists: true,
        lockfileVersion: packageLock.lockfileVersion,
        issues
      };
    } catch (error) {
      this.log(`Error checking package-lock.json: ${error.message}`);
      return { exists: false, issues: [`Error reading package-lock.json: ${error.message}`] };
    }
  }

  async checkNodeModules() {
    try {
      const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
      
      if (!fs.existsSync(nodeModulesPath)) {
        return { exists: false, issues: ['node_modules not found'] };
      }
      
      const stats = fs.statSync(nodeModulesPath);
      const issues = [];
      
      // Check if node_modules is a directory
      if (!stats.isDirectory()) {
        issues.push('node_modules is not a directory');
      }
      
      // Check for common problematic files
      const problematicFiles = ['.DS_Store', 'Thumbs.db', '.git'];
      for (const file of problematicFiles) {
        const filePath = path.join(nodeModulesPath, file);
        if (fs.existsSync(filePath)) {
          issues.push(`Found ${file} in node_modules`);
        }
      }
      
      return {
        exists: true,
        isDirectory: stats.isDirectory(),
        issues
      };
    } catch (error) {
      this.log(`Error checking node_modules: ${error.message}`);
      return { exists: false, issues: [`Error checking node_modules: ${error.message}`] };
    }
  }

  async updateDependencies() {
    try {
      if (process.env.AUTO_UPDATE_DEV === 'true') {
        this.log('🔄 Updating development dependencies...');
        
        // Update dev dependencies
        execSync('npm update --save-dev', {
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        
        this.log('Development dependencies updated');
        return true;
      } else {
        this.log('Auto-update disabled for development dependencies');
        return false;
      }
    } catch (error) {
      this.log(`Error updating dependencies: ${error.message}`);
      return false;
    }
  }

  async installMissingDependencies() {
    try {
      this.log('📥 Checking for missing dependencies...');
      
      // Try to install dependencies
      execSync('npm install', {
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      this.log('Dependencies installation completed');
      return true;
    } catch (error) {
      this.log(`Error installing dependencies: ${error.message}`);
      return false;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      duration: Date.now() - this.startTime,
      audit: await this.checkNpmAudit(),
      outdated: await this.checkOutdatedPackages(),
      packageLock: await this.checkPackageLock(),
      nodeModules: await this.checkNodeModules(),
      updates: {
        devDependencies: await this.updateDependencies(),
        missing: await this.installMissingDependencies()
      }
    };

    // Save report
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Dependency report generated: ${this.reportFile}`);
    return report;
  }

  async checkSecurityAlerts() {
    try {
      if (process.env.SECURITY_ALERTS === 'true') {
        const audit = await this.checkNpmAudit();
        
        if (audit.vulnerabilities && audit.vulnerabilities.length > 0) {
          this.log('🚨 Security vulnerabilities detected!');
          
          for (const vuln of audit.vulnerabilities) {
            this.log(`  - ${vuln.count} ${vuln.severity} vulnerabilities`);
          }
          
          return true;
        } else {
          this.log('✅ No security vulnerabilities found');
          return false;
        }
      }
      
      return false;
    } catch (error) {
      this.log(`Error checking security alerts: ${error.message}`);
      return false;
    }
  }

  async start() {
    this.log('Dependency Monitor started');
    
    try {
      // Check for security alerts
      const hasSecurityIssues = await this.checkSecurityAlerts();
      
      // Generate comprehensive report
      const report = await this.generateReport();
      
      // Log summary
      this.log(`Dependency monitoring completed in ${report.duration}ms`);
      this.log(`  - Vulnerabilities: ${report.audit.vulnerabilities?.length || 0}`);
      this.log(`  - Outdated packages: ${Object.keys(report.outdated).length}`);
      this.log(`  - Package lock issues: ${report.packageLock.issues?.length || 0}`);
      this.log(`  - Node modules issues: ${report.nodeModules.issues?.length || 0}`);
      
      if (hasSecurityIssues) {
        this.log('⚠️  Security issues detected - manual review recommended');
        process.exit(1);
      }
      
    } catch (error) {
      this.log(`Dependency Monitor error: ${error.message}`);
      process.exit(1);
    }
  }
}

// Start the monitor if this script is run directly
if (require.main === module) {
  const monitor = new DependencyMonitor();
  monitor.start().catch(error => {
    console.error('Dependency Monitor failed:', error.message);
    process.exit(1);
  });
}

module.exports = DependencyMonitor;