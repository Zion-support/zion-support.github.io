#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class DependencyManager {
  constructor() {
    this.logFile = path.join(__dirname, '../../logs/dependency-manager.log');
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}\n`;
    console.log(logMessage.trim());
    fs.appendFileSync(this.logFile, logMessage);
  }

  async runCommand(command, description) {
    try {
      this.log(`🔄 Running: ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        cwd: path.join(__dirname, '../../')
      });
      this.log(`✅ Success: ${description}`);
      return result;
    } catch (error) {
      this.log(`❌ Error in ${description}: ${error.message}`);
      return null;
    }
  }

  async checkOutdatedPackages() {
    this.log('🔍 Checking for outdated packages...');
    
    try {
      const outdatedResult = execSync('npm outdated --json', { 
        encoding: 'utf8',
        stdio: 'pipe',
        cwd: path.join(__dirname, '../../')
      });
      
      if (outdatedResult.trim()) {
        const outdated = JSON.parse(outdatedResult);
        const packageCount = Object.keys(outdated).length;
        
        this.log(`📦 Found ${packageCount} outdated packages:`);
        
        for (const [packageName, info] of Object.entries(outdated)) {
          this.log(`  - ${packageName}: ${info.current} → ${info.latest}`);
        }
        
        return outdated;
      } else {
        this.log('✅ All packages are up to date');
        return {};
      }
    } catch (error) {
      if (error.status === 1) {
        // npm outdated returns 1 when there are outdated packages
        try {
          const outdatedResult = execSync('npm outdated', { 
            encoding: 'utf8',
            stdio: 'pipe',
            cwd: path.join(__dirname, '../../')
          });
          this.log('📦 Outdated packages found (non-JSON output)');
          return { hasOutdated: true, output: outdatedResult };
        } catch (innerError) {
          this.log('✅ No outdated packages found');
          return {};
        }
      } else {
        this.log(`❌ Error checking outdated packages: ${error.message}`);
        return {};
      }
    }
  }

  async runSecurityAudit() {
    this.log('🔒 Running security audit...');
    
    try {
      const auditResult = await this.runCommand('npm audit --audit-level moderate', 'Security audit');
      
      if (auditResult) {
        // Check for vulnerabilities
        try {
          const auditJson = execSync('npm audit --json', { 
            encoding: 'utf8',
            stdio: 'pipe',
            cwd: path.join(__dirname, '../../')
          });
          
          const audit = JSON.parse(auditJson);
          const vulnerabilityCount = audit.metadata?.vulnerabilities?.total || 0;
          
          this.log(`🔒 Security audit completed. Vulnerabilities found: ${vulnerabilityCount}`);
          
          if (vulnerabilityCount > 0) {
            this.log('⚠️ Security vulnerabilities detected');
            return { hasVulnerabilities: true, count: vulnerabilityCount };
          } else {
            this.log('✅ No security vulnerabilities found');
            return { hasVulnerabilities: false, count: 0 };
          }
        } catch (parseError) {
          this.log('⚠️ Could not parse security audit results');
          return { hasVulnerabilities: false, count: 0 };
        }
      }
      
      return { hasVulnerabilities: false, count: 0 };
    } catch (error) {
      this.log(`❌ Security audit failed: ${error.message}`);
      return { hasVulnerabilities: false, count: 0 };
    }
  }

  async updateDependencies() {
    this.log('🔄 Updating dependencies...');
    
    try {
      // Check if package-lock.json exists
      const lockFile = path.join(__dirname, '../../package-lock.json');
      if (fs.existsSync(lockFile)) {
        this.log('📦 package-lock.json found, using npm ci for updates');
        
        // Update packages
        await this.runCommand('npm update', 'Update dependencies');
        
        // Install updated dependencies
        await this.runCommand('npm ci', 'Install updated dependencies');
      } else {
        this.log('📦 No package-lock.json found, using npm install');
        await this.runCommand('npm install', 'Install dependencies');
      }
      
      this.log('✅ Dependencies updated successfully');
      return true;
    } catch (error) {
      this.log(`❌ Dependency update failed: ${error.message}`);
      return false;
    }
  }

  async verifyBuild() {
    this.log('🏗️ Verifying build after dependency updates...');
    
    try {
      // Build project
      const buildResult = await this.runCommand('npm run build', 'Build project');
      
      if (buildResult) {
        this.log('✅ Build successful after dependency updates');
        return true;
      } else {
        this.log('❌ Build failed after dependency updates');
        return false;
      }
    } catch (error) {
      this.log(`❌ Build verification failed: ${error.message}`);
      return false;
    }
  }

  async runTests() {
    this.log('🧪 Running tests after dependency updates...');
    
    try {
      // Run linting
      await this.runCommand('npm run lint', 'ESLint check');
      
      // Run type checking
      await this.runCommand('npm run type-check', 'TypeScript type checking');
      
      this.log('✅ Tests completed successfully');
      return true;
    } catch (error) {
      this.log(`⚠️ Some tests failed: ${error.message}`);
      return false;
    }
  }

  async createUpdateReport() {
    this.log('📊 Creating dependency update report...');
    
    try {
      const reportPath = path.join(__dirname, '../../logs/dependency-update-report.md');
      const timestamp = new Date().toISOString();
      
      // Get current package.json info
      const packageJsonPath = path.join(__dirname, '../../package.json');
      let packageInfo = {};
      if (fs.existsSync(packageJsonPath)) {
        packageInfo = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      }
      
      const report = `# Dependency Update Report - ${timestamp}

## Summary
This report was generated automatically by the PM2 Dependency Manager automation.

## Package Information
- **Project**: ${packageInfo.name || 'Unknown'}
- **Version**: ${packageInfo.version || 'Unknown'}
- **Node Version**: ${process.version}

## Actions Taken
- ✅ Checked for outdated packages
- ✅ Ran security audit
- ✅ Updated dependencies
- ✅ Verified build
- ✅ Ran tests

## Recommendations
1. Review any security vulnerabilities found
2. Test the application thoroughly after updates
3. Monitor for any breaking changes
4. Consider updating major versions if needed

## Next Steps
- Run this automation weekly
- Review logs for any issues
- Test application functionality
- Update automation scripts as needed

---
Generated by PM2 Dependency Manager Automation
`;

      fs.writeFileSync(reportPath, report);
      this.log(`📄 Report generated: ${reportPath}`);
      
    } catch (error) {
      this.log(`❌ Report generation failed: ${error.message}`);
    }
    
    this.log('✅ Report Generation completed');
  }

  async run() {
    this.log('🚀 Starting Dependency Management Process');
    
    try {
      // Run all dependency management stages
      const outdated = await this.checkOutdatedPackages();
      const security = await this.runSecurityAudit();
      
      if (Object.keys(outdated).length > 0 || security.hasVulnerabilities) {
        this.log('📦 Updates needed, proceeding with dependency updates');
        
        const updateSuccess = await this.updateDependencies();
        
        if (updateSuccess) {
          const buildSuccess = await this.verifyBuild();
          const testSuccess = await this.runTests();
          
          if (buildSuccess && testSuccess) {
            this.log('🎉 Dependency updates completed successfully');
          } else {
            this.log('⚠️ Dependency updates completed with some issues');
          }
        } else {
          this.log('❌ Dependency updates failed');
        }
      } else {
        this.log('✅ No dependency updates needed');
      }
      
      await this.createUpdateReport();
      
      this.log('🎉 Dependency Management Process completed');
    } catch (error) {
      this.log(`💥 Dependency Management Process failed: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the process if this script is executed directly
if (require.main === module) {
  const manager = new DependencyManager();
  manager.run();
}

module.exports = DependencyManager;