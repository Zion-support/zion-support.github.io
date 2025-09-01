#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class DependencyErrorResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.reportsDir = path.join(this.projectRoot, 'error-reports');
    this.logsDir = path.join(this.projectRoot, 'automation/logs');
    this.checkInterval = parseInt(process.env.DEPENDENCY_CHECK_INTERVAL) || 1800000; // 30 minutes
    this.autoUpdateEnabled = process.env.AUTO_UPDATE_ENABLED === 'true';
    
    // Ensure directories exist
    [this.reportsDir, this.logsDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
    
    this.resolutionsApplied = 0;
    this.dependencyHistory = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async runDependencyCheck() {
    try {
      this.log('Running dependency audit...');
      execSync('npm audit --audit-level=moderate', { stdio: 'pipe' });
      return { success: true, vulnerabilities: [], count: 0 };
    } catch (error) {
      const output = error.stdout?.toString() || error.stderr?.toString() || '';
      const vulnerabilities = this.parseVulnerabilities(output);
      this.log(`Dependency audit failed with ${vulnerabilities.length} vulnerabilities`, 'ERROR');
      return { success: false, vulnerabilities, count: vulnerabilities.length };
    }
  }

  async runOutdatedCheck() {
    try {
      this.log('Checking for outdated dependencies...');
      const output = execSync('npm outdated --json', { stdio: 'pipe' }).toString();
      const outdated = JSON.parse(output);
      return { success: true, outdated, count: Object.keys(outdated).length };
    } catch (error) {
      // npm outdated returns non-zero exit code when there are outdated packages
      if (error.stdout) {
        try {
          const output = error.stdout.toString();
          const outdated = JSON.parse(output);
          return { success: true, outdated, count: Object.keys(outdated).length };
        } catch (parseError) {
          return { success: true, outdated: {}, count: 0 };
        }
      }
      return { success: true, outdated: {}, count: 0 };
    }
  }

  parseVulnerabilities(output) {
    const lines = output.split('\n');
    const vulnerabilities = [];
    
    for (const line of lines) {
      if (line.includes('vulnerability') || line.includes('VULNERABILITY')) {
        const match = line.match(/(\d+)\s+(low|moderate|high|critical)\s+vulnerabilities?/i);
        if (match) {
          vulnerabilities.push({
            count: parseInt(match[1]),
            severity: match[2].toLowerCase(),
            message: line.trim()
          });
        }
      }
    }
    
    return vulnerabilities;
  }

  async resolveDependencyIssues(vulnerabilities, outdated) {
    if (!this.autoUpdateEnabled) {
      this.log('Auto-update is disabled', 'INFO');
      return 0;
    }

    let resolutionsApplied = 0;
    
    try {
      // Fix vulnerabilities first
      if (vulnerabilities.length > 0) {
        this.log('Attempting to fix vulnerabilities...', 'INFO');
        try {
          execSync('npm audit fix', { stdio: 'pipe' });
          resolutionsApplied += vulnerabilities.length;
          this.log(`Fixed ${vulnerabilities.length} vulnerabilities`, 'INFO');
        } catch (fixError) {
          this.log(`Failed to fix vulnerabilities: ${fixError.message}`, 'WARN');
        }
      }

      // Update outdated dependencies
      if (outdated && Object.keys(outdated).length > 0) {
        this.log('Attempting to update outdated dependencies...', 'INFO');
        try {
          execSync('npm update', { stdio: 'pipe' });
          resolutionsApplied += Object.keys(outdated).length;
          this.log(`Updated ${Object.keys(outdated).length} outdated dependencies`, 'INFO');
        } catch (updateError) {
          this.log(`Failed to update dependencies: ${updateError.message}`, 'WARN');
        }
      }

      // Fix peer dependency issues
      this.log('Checking for peer dependency issues...', 'INFO');
      try {
        execSync('npm install --legacy-peer-deps', { stdio: 'pipe' });
        this.log('Resolved peer dependency issues', 'INFO');
        resolutionsApplied += 1;
      } catch (peerError) {
        this.log(`Failed to resolve peer dependencies: ${peerError.message}`, 'WARN');
      }

    } catch (error) {
      this.log(`Failed to resolve dependency issues: ${error.message}`, 'ERROR');
    }
    
    return resolutionsApplied;
  }

  async checkPackageLockIssues() {
    try {
      this.log('Checking package-lock.json integrity...', 'INFO');
      execSync('npm ci --dry-run', { stdio: 'pipe' });
      return { success: true, issues: [] };
    } catch (error) {
      const output = error.stdout?.toString() || error.stderr?.toString() || '';
      return { 
        success: false, 
        issues: [{
          type: 'package-lock',
          message: 'Package-lock.json integrity issues detected',
          details: output
        }]
      };
    }
  }

  async fixPackageLockIssues() {
    try {
      this.log('Fixing package-lock.json issues...', 'INFO');
      
      // Remove package-lock.json and node_modules
      if (fs.existsSync('package-lock.json')) {
        fs.unlinkSync('package-lock.json');
      }
      if (fs.existsSync('node_modules')) {
        execSync('rm -rf node_modules', { stdio: 'pipe' });
      }
      
      // Reinstall dependencies
      execSync('npm install --legacy-peer-deps', { stdio: 'pipe' });
      
      this.log('Package-lock.json issues resolved', 'INFO');
      return true;
    } catch (error) {
      this.log(`Failed to fix package-lock issues: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async checkDuplicateDependencies() {
    try {
      this.log('Checking for duplicate dependencies...', 'INFO');
      const output = execSync('npm ls --depth=0', { stdio: 'pipe' }).toString();
      
      const duplicates = [];
      const lines = output.split('\n');
      
      for (const line of lines) {
        if (line.includes('UNMET PEER DEPENDENCY') || line.includes('npm ERR!')) {
          duplicates.push({
            type: 'peer-dependency',
            message: line.trim()
          });
        }
      }
      
      return { success: duplicates.length === 0, duplicates };
    } catch (error) {
      const output = error.stdout?.toString() || error.stderr?.toString() || '';
      return { 
        success: false, 
        duplicates: [{
          type: 'dependency-conflict',
          message: 'Dependency conflicts detected',
          details: output
        }]
      };
    }
  }

  async runDependencyResolution() {
    this.log('Starting dependency resolution...');
    
    try {
      // Run comprehensive dependency checks
      const [vulnCheck, outdatedCheck, packageLockCheck, duplicateCheck] = await Promise.all([
        this.runDependencyCheck(),
        this.runOutdatedCheck(),
        this.checkPackageLockIssues(),
        this.checkDuplicateDependencies()
      ]);
      
      const totalIssues = vulnCheck.count + outdatedCheck.count + 
                         (packageLockCheck.success ? 0 : 1) + duplicateCheck.duplicates.length;
      
      if (totalIssues === 0) {
        this.log('No dependency issues found', 'INFO');
        return;
      }
      
      this.log(`Found ${totalIssues} dependency issues, attempting to resolve...`, 'INFO');
      
      // Resolve issues
      let resolutionsApplied = 0;
      
      // Fix vulnerabilities and outdated dependencies
      resolutionsApplied += await this.resolveDependencyIssues(
        vulnCheck.vulnerabilities, 
        outdatedCheck.outdated
      );
      
      // Fix package-lock issues
      if (!packageLockCheck.success) {
        if (await this.fixPackageLockIssues()) {
          resolutionsApplied += 1;
        }
      }
      
      // Fix duplicate dependencies
      if (duplicateCheck.duplicates.length > 0) {
        try {
          execSync('npm dedupe', { stdio: 'pipe' });
          resolutionsApplied += duplicateCheck.duplicates.length;
          this.log(`Resolved ${duplicateCheck.duplicates.length} duplicate dependencies`, 'INFO');
        } catch (dedupeError) {
          this.log(`Failed to dedupe dependencies: ${dedupeError.message}`, 'WARN');
        }
      }
      
      // Run final check
      const finalCheck = await this.runDependencyCheck();
      
      const report = {
        timestamp: new Date().toISOString(),
        initialIssues: totalIssues,
        resolutionsApplied,
        remainingIssues: finalCheck.count,
        success: finalCheck.success,
        details: {
          vulnerabilities: vulnCheck,
          outdated: outdatedCheck,
          packageLock: packageLockCheck,
          duplicates: duplicateCheck
        }
      };
      
      // Save report
      const reportPath = path.join(this.reportsDir, `dependency-resolution-report-${Date.now()}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
      
      // Update dependency history
      this.dependencyHistory.push(report);
      if (this.dependencyHistory.length > 50) {
        this.dependencyHistory = this.dependencyHistory.slice(-50);
      }
      
      this.log(`Dependency resolution completed. Report saved to ${reportPath}`, 'INFO');
      
    } catch (error) {
      this.log(`Dependency resolution failed: ${error.message}`, 'ERROR');
    }
  }

  async startResolver() {
    this.log('Starting dependency error resolver...');
    
    // Run initial resolution
    await this.runDependencyResolution();
    
    // Set up periodic resolution
    setInterval(async () => {
      try {
        await this.runDependencyResolution();
      } catch (error) {
        this.log(`Error in periodic resolution: ${error.message}`, 'ERROR');
      }
    }, this.checkInterval);

    this.log(`Dependency error resolver started. Running every ${this.checkInterval / 1000} seconds.`);
  }

  getStatus() {
    return {
      running: true,
      dependencyHistory: this.dependencyHistory.length,
      checkInterval: this.checkInterval,
      autoUpdateEnabled: this.autoUpdateEnabled
    };
  }
}

// Main execution
if (require.main === module) {
  const resolver = new DependencyErrorResolver();
  
  // Handle graceful shutdown
  process.on('SIGINT', () => {
    resolver.log('Shutting down dependency error resolver...');
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    resolver.log('Shutting down dependency error resolver...');
    process.exit(0);
  });

  // Start resolver
  resolver.startResolver().catch(error => {
    resolver.log(`Failed to start resolver: ${error.message}`, 'ERROR');
    process.exit(1);
  });
}

module.exports = DependencyErrorResolver;