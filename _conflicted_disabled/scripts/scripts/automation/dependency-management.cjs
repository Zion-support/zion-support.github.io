#!/usr/bin/env node

/**
 * Dependency Management Automation
 * Replaces GitHub Actions dependencies workflow
 * Runs every 8 hours for comprehensive dependency management
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DependencyManagementAutomation {
  constructor() {
    this.interval = process.env.AUTOMATION_INTERVAL || 28800000; // 8 hours default
    this.reportsDir = path.join(process.cwd(), 'ci-cd-reports');
    this.ensureReportsDirectory();
  }

  ensureReportsDirectory() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runDependencyManagement() {
    try {
      console.log('📦 Starting dependency management automation...');
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportFile = path.join(this.reportsDir, `dependency-management-${timestamp}.json`);
      
      const report = {
        timestamp: new Date().toISOString(),
        type: 'dependency-management',
        checks: [],
        summary: {
          outdatedPackages: 0,
          securityVulnerabilities: 0,
          updatesApplied: 0,
          buildSuccess: false,
          testsPassed: false
        }
      };

      // Check for outdated packages
      await this.checkOutdatedPackages(report);
      
      // Run security audit
      await this.runSecurityAudit(report);
      
      // Update dependencies if needed
      await this.updateDependencies(report);
      
      // Verify build and tests
      await this.verifyBuildAndTests(report);
      
      // Save report
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      console.log(`📄 Dependency management report saved: ${reportFile}`);
      
      // Log summary
      this.logSummary(report);
      
      console.log('✅ Dependency management automation completed');
    } catch (error) {
      console.error('❌ Dependency management automation failed:', error.message);
    }
  }

  async checkOutdatedPackages(report) {
    try {
      console.log('🔍 Checking for outdated packages...');
      
      if (!fs.existsSync('package.json')) {
        report.checks.push({
          type: 'outdated-packages',
          status: 'error',
          message: 'No package.json found',
          count: 0
        });
        return;
      }

      try {
        const outdatedOutput = execSync('npm outdated --json', { encoding: 'utf8' });
        const outdatedPackages = JSON.parse(outdatedOutput);
        const packageCount = Object.keys(outdatedPackages).length;
        
        report.summary.outdatedPackages = packageCount;
        
        const check = {
          type: 'outdated-packages',
          status: packageCount > 0 ? 'warning' : 'pass',
          message: `Found ${packageCount} outdated packages`,
          count: packageCount,
          packages: outdatedPackages
        };
        
        report.checks.push(check);
        
        if (packageCount > 0) {
          console.log(`⚠️ Found ${packageCount} outdated packages`);
          Object.entries(outdatedPackages).forEach(([name, info]) => {
            console.log(`   ${name}: ${info.current} → ${info.latest}`);
          });
        } else {
          console.log('✅ All packages are up to date');
        }
        
      } catch (error) {
        // npm outdated returns non-zero exit code when packages are outdated
        if (error.status === 1) {
          const output = error.stdout?.toString() || '';
          try {
            const outdatedPackages = JSON.parse(output);
            const packageCount = Object.keys(outdatedPackages).length;
            
            report.summary.outdatedPackages = packageCount;
            
            report.checks.push({
              type: 'outdated-packages',
              status: 'warning',
              message: `Found ${packageCount} outdated packages`,
              count: packageCount,
              packages: outdatedPackages
            });
            
            console.log(`⚠️ Found ${packageCount} outdated packages`);
          } catch (parseError) {
            report.checks.push({
              type: 'outdated-packages',
              status: 'error',
              message: 'Failed to parse outdated packages output',
              count: 0
            });
          }
        } else {
          report.checks.push({
            type: 'outdated-packages',
            status: 'error',
            message: `Check failed: ${error.message}`,
            count: 0
          });
        }
      }
      
    } catch (error) {
      console.error('❌ Outdated packages check failed:', error.message);
      report.checks.push({
        type: 'outdated-packages',
        status: 'error',
        message: `Check failed: ${error.message}`,
        count: 0
      });
    }
  }

  async runSecurityAudit(report) {
    try {
      console.log('🔒 Running security audit...');
      
      if (!fs.existsSync('package.json')) {
        report.checks.push({
          type: 'security-audit',
          status: 'error',
          message: 'No package.json found',
          vulnerabilities: {},
          summary: { total: 0, critical: 0, high: 0, moderate: 0, low: 0 }
        });
        return;
      }

      try {
        const auditOutput = execSync('npm audit --json', { encoding: 'utf8' });
        const auditResult = JSON.parse(auditOutput);
        
        const vulnerabilities = auditResult.metadata?.vulnerabilities || {};
        const total = vulnerabilities.total || 0;
        
        report.summary.securityVulnerabilities = total;
        
        const check = {
          type: 'security-audit',
          status: total > 0 ? 'warning' : 'pass',
          message: total > 0 ? `Found ${total} security vulnerabilities` : 'No security vulnerabilities found',
          vulnerabilities: vulnerabilities,
          summary: {
            total: total,
            critical: vulnerabilities.critical || 0,
            high: vulnerabilities.high || 0,
            moderate: vulnerabilities.moderate || 0,
            low: vulnerabilities.low || 0
          }
        };
        
        report.checks.push(check);
        
        if (total > 0) {
          console.log(`⚠️ Found ${total} security vulnerabilities`);
          console.log(`   Critical: ${vulnerabilities.critical || 0}`);
          console.log(`   High: ${vulnerabilities.high || 0}`);
          console.log(`   Moderate: ${vulnerabilities.moderate || 0}`);
          console.log(`   Low: ${vulnerabilities.low || 0}`);
        } else {
          console.log('✅ No security vulnerabilities found');
        }
        
      } catch (error) {
        if (error.status === 1) {
          // npm audit found vulnerabilities
          const output = error.stdout?.toString() || '';
          try {
            const auditResult = JSON.parse(output);
            const vulnerabilities = auditResult.metadata?.vulnerabilities || {};
            const total = vulnerabilities.total || 0;
            
            report.summary.securityVulnerabilities = total;
            
            report.checks.push({
              type: 'security-audit',
              status: 'warning',
              message: `Found ${total} security vulnerabilities`,
              vulnerabilities: vulnerabilities,
              summary: {
                total: total,
                critical: vulnerabilities.critical || 0,
                high: vulnerabilities.high || 0,
                moderate: vulnerabilities.moderate || 0,
                low: vulnerabilities.low || 0
              }
            });
            
            console.log(`⚠️ Found ${total} security vulnerabilities`);
          } catch (parseError) {
            report.checks.push({
              type: 'security-audit',
              status: 'error',
              message: 'Failed to parse security audit output',
              vulnerabilities: {},
              summary: { total: 0, critical: 0, high: 0, moderate: 0, low: 0 }
            });
          }
        } else {
          report.checks.push({
            type: 'security-audit',
            status: 'error',
            message: `Security audit failed: ${error.message}`,
            vulnerabilities: {},
            summary: { total: 0, critical: 0, high: 0, moderate: 0, low: 0 }
          });
        }
      }
      
    } catch (error) {
      console.error('❌ Security audit failed:', error.message);
      report.checks.push({
        type: 'security-audit',
        status: 'error',
        message: `Security audit failed: ${error.message}`,
        vulnerabilities: {},
        summary: { total: 0, critical: 0, high: 0, moderate: 0, low: 0 }
      });
    }
  }

  async updateDependencies(report) {
    try {
      console.log('🔄 Updating dependencies...');
      
      if (report.summary.outdatedPackages === 0) {
        console.log('✅ No dependencies to update');
        report.checks.push({
          type: 'dependency-updates',
          status: 'pass',
          message: 'No dependencies to update',
          updatesApplied: 0
        });
        return;
      }

      // Create backup of package files
      this.createBackup();
      
      try {
        // Update dependencies
        execSync('npm update', { stdio: 'inherit' });
        
        // Install updated dependencies
        execSync('npm ci', { stdio: 'inherit' });
        
        report.summary.updatesApplied = report.summary.outdatedPackages;
        
        report.checks.push({
          type: 'dependency-updates',
          status: 'pass',
          message: `Successfully updated ${report.summary.updatesApplied} dependencies`,
          updatesApplied: report.summary.updatesApplied
        });
        
        console.log(`✅ Successfully updated ${report.summary.updatesApplied} dependencies`);
        
      } catch (error) {
        console.error('❌ Dependency update failed:', error.message);
        
        // Restore backup
        this.restoreBackup();
        
        report.checks.push({
          type: 'dependency-updates',
          status: 'error',
          message: `Dependency update failed: ${error.message}`,
          updatesApplied: 0
        });
      }
      
    } catch (error) {
      console.error('❌ Dependency update process failed:', error.message);
      report.checks.push({
        type: 'dependency-updates',
        status: 'error',
        message: `Dependency update process failed: ${error.message}`,
        updatesApplied: 0
      });
    }
  }

  createBackup() {
    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      if (fs.existsSync('package.json')) {
        fs.copyFileSync('package.json', `package.json.backup.${timestamp}`);
      }
      if (fs.existsSync('package-lock.json')) {
        fs.copyFileSync('package-lock.json', `package-lock.json.backup.${timestamp}`);
      }
      if (fs.existsSync('yarn.lock')) {
        fs.copyFileSync('yarn.lock', `yarn.lock.backup.${timestamp}`);
      }
      console.log('💾 Created backup of package files');
    } catch (error) {
      console.error('⚠️ Failed to create backup:', error.message);
    }
  }

  restoreBackup() {
    try {
      const files = fs.readdirSync('.');
      const backupFiles = files.filter(f => f.includes('.backup.'));
      
      for (const backupFile of backupFiles) {
        const originalFile = backupFile.replace(/\.backup\.[^.]*$/, '');
        if (fs.existsSync(originalFile)) {
          fs.copyFileSync(backupFile, originalFile);
          console.log(`🔄 Restored ${originalFile} from backup`);
        }
      }
    } catch (error) {
      console.error('⚠️ Failed to restore backup:', error.message);
    }
  }

  async verifyBuildAndTests(report) {
    try {
      console.log('🔨 Verifying build and tests...');
      
      // Try to build the project
      try {
        console.log('🔨 Building project...');
        execSync('npm run build', { stdio: 'inherit' });
        report.summary.buildSuccess = true;
        console.log('✅ Build successful');
      } catch (error) {
        report.summary.buildSuccess = false;
        console.error('❌ Build failed:', error.message);
      }
      
      // Try to run tests
      try {
        console.log('🧪 Running tests...');
        execSync('npm test', { stdio: 'inherit' });
        report.summary.testsPassed = true;
        console.log('✅ Tests passed');
      } catch (error) {
        report.summary.testsPassed = false;
        console.error('❌ Tests failed:', error.message);
      }
      
      // Run linting
      try {
        console.log('🔍 Running linting...');
        execSync('npm run lint', { stdio: 'inherit' });
        console.log('✅ Linting passed');
      } catch (error) {
        console.error('❌ Linting failed:', error.message);
      }
      
      // Run type checking if available
      try {
        if (fs.existsSync('tsconfig.json')) {
          console.log('🔍 Running type checking...');
          execSync('npm run type-check', { stdio: 'inherit' });
          console.log('✅ Type checking passed');
        }
      } catch (error) {
        console.error('❌ Type checking failed:', error.message);
      }
      
      const buildCheck = {
        type: 'build-verification',
        status: report.summary.buildSuccess ? 'pass' : 'error',
        message: report.summary.buildSuccess ? 'Build successful' : 'Build failed',
        buildSuccess: report.summary.buildSuccess
      };
      
      const testCheck = {
        type: 'test-verification',
        status: report.summary.testsPassed ? 'pass' : 'error',
        message: report.summary.testsPassed ? 'Tests passed' : 'Tests failed',
        testsPassed: report.summary.testsPassed
      };
      
      report.checks.push(buildCheck, testCheck);
      
    } catch (error) {
      console.error('❌ Build and test verification failed:', error.message);
      report.checks.push({
        type: 'verification',
        status: 'error',
        message: `Verification failed: ${error.message}`,
        buildSuccess: false,
        testsPassed: false
      });
    }
  }

  logSummary(report) {
    console.log('\n📊 Dependency Management Summary:');
    console.log(`   Outdated Packages: ${report.summary.outdatedPackages}`);
    console.log(`   Security Vulnerabilities: ${report.summary.securityVulnerabilities}`);
    console.log(`   Updates Applied: ${report.summary.updatesApplied}`);
    console.log(`   Build Success: ${report.summary.buildSuccess ? '✅' : '❌'}`);
    console.log(`   Tests Passed: ${report.summary.testsPassed ? '✅' : '❌'}`);
    
    console.log('\n🔍 Check Results:');
    report.checks.forEach(check => {
      const status = check.status === 'pass' ? '✅' : check.status === 'warning' ? '⚠️' : '❌';
      console.log(`   ${status} ${check.type}: ${check.message}`);
    });
  }

  async start() {
    console.log('🚀 Starting Dependency Management Automation...');
    console.log(`⏰ Running every ${this.interval / 1000 / 60 / 60} hours`);
    
    // Run immediately
    await this.runDependencyManagement();
    
    // Schedule recurring runs
    setInterval(async () => {
      await this.runDependencyManagement();
    }, this.interval);
  }
}

// Start the automation if run directly
if (require.main === module) {
  const automation = new DependencyManagementAutomation();
  automation.start().catch(console.error);
}

module.exports = DependencyManagementAutomation;