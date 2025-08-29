#!/usr/bin/env node

/**
 * Dependency Updates Automation Script
 * Replaces GitHub Actions dependencies.yml workflow
 * Runs every 6 hours via PM2
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class DependencyUpdater {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'dependency-reports');
    this.ensureReportsDirectory();
  }

  ensureReportsDirectory() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  async runDependencyUpdate() {
    console.log('📦 Starting dependency update process...');
    
    try {
      // Check current status
      console.log('🔍 Checking current dependency status...');
      const currentStatus = this.checkCurrentStatus();
      
      // Check for outdated packages
      console.log('📋 Checking for outdated packages...');
      const outdatedResult = this.checkOutdatedPackages();
      
      if (outdatedResult.packages === 0) {
        console.log('✅ All packages are up to date');
        this.saveReport({
          timestamp: new Date().toISOString(),
          status: 'up-to-date',
          outdatedCount: 0,
          message: 'No outdated packages found'
        });
        return true;
      }
      
      // Run security audit before updates
      console.log('🔒 Running security audit before updates...');
      const preUpdateAudit = this.runSecurityAudit();
      
      // Update dependencies
      console.log('🔄 Updating dependencies...');
      const updateResult = this.updateDependencies();
      
      // Install updated dependencies
      console.log('📥 Installing updated dependencies...');
      const installResult = this.installDependencies();
      
      // Run security audit after updates
      console.log('🔒 Running security audit after updates...');
      const postUpdateAudit = this.runSecurityAudit();
      
      // Build project to ensure everything works
      console.log('🏗️ Building project to verify updates...');
      const buildResult = this.buildProject();
      
      // Run tests
      console.log('🧪 Running tests to verify functionality...');
      const testResult = this.runTests();
      
      // Generate comprehensive report
      const report = this.generateReport({
        currentStatus,
        outdatedResult,
        preUpdateAudit,
        updateResult,
        installResult,
        postUpdateAudit,
        buildResult,
        testResult
      });
      
      this.saveReport(report);
      
      console.log('✅ Dependency update process completed successfully');
      return true;
      
    } catch (error) {
      console.error('❌ Dependency update failed:', error.message);
      this.saveReport({
        timestamp: new Date().toISOString(),
        status: 'failed',
        error: error.message
      });
      return false;
    }
  }

  checkCurrentStatus() {
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(this.projectRoot, 'package.json'), 'utf8'));
      const packageLock = fs.existsSync(path.join(this.projectRoot, 'package-lock.json'));
      
      return {
        dependencies: Object.keys(packageJson.dependencies || {}).length,
        devDependencies: Object.keys(packageJson.devDependencies || {}).length,
        hasLockFile: packageLock,
        nodeVersion: packageJson.engines?.node || 'not specified'
      };
    } catch (error) {
      return { error: error.message };
    }
  }

  checkOutdatedPackages() {
    try {
      const output = execSync('npm outdated --json', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      const outdatedData = JSON.parse(output);
      return {
        success: true,
        packages: Object.keys(outdatedData).length,
        details: outdatedData
      };
      
    } catch (error) {
      if (error.status === 1 && error.stdout) {
        try {
          const outdatedData = JSON.parse(error.stdout);
          return {
            success: true,
            packages: Object.keys(outdatedData).length,
            details: outdatedData
          };
        } catch (parseError) {
          return { success: false, error: 'Failed to parse outdated output' };
        }
      }
      return { success: true, packages: 0, details: {} };
    }
  }

  runSecurityAudit() {
    try {
      const output = execSync('npm audit --audit-level=moderate --json', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      const auditData = JSON.parse(output);
      return {
        success: true,
        vulnerabilities: auditData.metadata?.vulnerabilities || {},
        summary: auditData.metadata?.summary || {}
      };
      
    } catch (error) {
      if (error.status === 1 && error.stdout) {
        try {
          const auditData = JSON.parse(error.stdout);
          return {
            success: false,
            vulnerabilities: auditData.metadata?.vulnerabilities || {},
            summary: auditData.metadata?.summary || {}
          };
        } catch (parseError) {
          return { success: false, error: 'Failed to parse audit output' };
        }
      }
      return { success: false, error: error.message };
    }
  }

  updateDependencies() {
    try {
      const output = execSync('npm update', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return {
        success: true,
        output: output,
        message: 'Dependencies updated successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || ''
      };
    }
  }

  installDependencies() {
    try {
      const output = execSync('npm ci', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return {
        success: true,
        output: output,
        message: 'Dependencies installed successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || ''
      };
    }
  }

  buildProject() {
    try {
      const output = execSync('npm run build', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return {
        success: true,
        output: output,
        message: 'Project built successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || ''
      };
    }
  }

  runTests() {
    try {
      const output = execSync('npm test', { 
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });
      
      return {
        success: true,
        output: output,
        message: 'Tests passed successfully'
      };
      
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr || ''
      };
    }
  }

  generateReport(data) {
    const timestamp = new Date().toISOString();
    
    const report = {
      timestamp,
      status: 'completed',
      summary: {
        outdatedPackages: data.outdatedResult?.packages || 0,
        preUpdateVulnerabilities: this.countVulnerabilities(data.preUpdateAudit),
        postUpdateVulnerabilities: this.countVulnerabilities(data.postUpdateAudit),
        buildSuccess: data.buildResult?.success || false,
        testsSuccess: data.testResult?.success || false
      },
      details: data,
      recommendations: this.generateRecommendations(data)
    };

    return report;
  }

  countVulnerabilities(auditResult) {
    if (!auditResult || !auditResult.vulnerabilities) return 0;
    
    return (auditResult.vulnerabilities.critical || 0) +
           (auditResult.vulnerabilities.high || 0) +
           (auditResult.vulnerabilities.moderate || 0);
  }

  generateRecommendations(data) {
    const recommendations = [];
    
    if (data.outdatedResult?.packages > 0) {
      recommendations.push('📦 Consider updating outdated packages to reduce security risks');
    }
    
    if (data.preUpdateAudit && this.countVulnerabilities(data.preUpdateAudit) > 0) {
      recommendations.push('🔒 Address security vulnerabilities before updating dependencies');
    }
    
    if (!data.buildResult?.success) {
      recommendations.push('🏗️ Fix build issues after dependency updates');
    }
    
    if (!data.testResult?.success) {
      recommendations.push('🧪 Fix test failures after dependency updates');
    }
    
    if (recommendations.length === 0) {
      recommendations.push('✅ All dependency updates completed successfully');
    }
    
    return recommendations;
  }

  saveReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `dependency-update-${timestamp}.json`;
    const filepath = path.join(this.reportsDir, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    console.log(`📄 Dependency update report saved: ${filename}`);
    
    // Also save a latest version
    const latestFilepath = path.join(this.reportsDir, 'dependency-update-latest.json');
    fs.writeFileSync(latestFilepath, JSON.stringify(report, null, 2));
    
    // Generate markdown summary
    this.generateMarkdownSummary(report, timestamp);
  }

  generateMarkdownSummary(report, timestamp) {
    const markdown = `# Dependency Update Report - ${timestamp}

## Summary
- **Outdated Packages**: ${report.summary.outdatedPackages}
- **Pre-Update Vulnerabilities**: ${report.summary.preUpdateVulnerabilities}
- **Post-Update Vulnerabilities**: ${report.summary.postUpdateVulnerabilities}
- **Build Success**: ${report.summary.buildSuccess ? '✅' : '❌'}
- **Tests Success**: ${report.summary.testsSuccess ? '✅' : '❌'}

## Recommendations
${report.recommendations.map(rec => `- ${rec}`).join('\n')}

## Status
${report.status === 'completed' ? '✅ Update Process Completed' : '❌ Update Process Failed'}

---
*Report generated automatically by PM2 Dependency Updater*
`;

    const filename = `dependency-update-${timestamp}.md`;
    const filepath = path.join(this.reportsDir, filename);
    fs.writeFileSync(filepath, markdown);
    
    const latestFilepath = path.join(this.reportsDir, 'dependency-update-latest.md');
    fs.writeFileSync(latestFilepath, markdown);
  }
}

// Main execution
async function main() {
  const updater = new DependencyUpdater();
  await updater.runDependencyUpdate();
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = DependencyUpdater;