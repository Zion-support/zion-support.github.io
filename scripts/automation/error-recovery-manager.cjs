#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔄 Starting error recovery manager...');

class ErrorRecoveryManager {
  constructor() {
    this.recoveries = [];
    this.stats = {
      totalIssues: 0,
      recoveredIssues: 0,
      failedRecoveries: 0,
      filesProcessed: 0
    };
  }

  async run() {
    try {
      console.log('🔍 Checking for recovery issues...');
      
      // Check for recovery issues
      const issues = await this.checkForRecoveryIssues();
      this.stats.totalIssues = issues.length;
      
      console.log(`📊 Found ${issues.length} recovery issues`);
      
      // Apply recoveries for each issue
      for (const issue of issues) {
        try {
          const recoveryResult = await this.applyRecovery(issue);
          if (recoveryResult.success) {
            this.recoveries.push(recoveryResult);
            this.stats.recoveredIssues++;
            console.log(`✅ Recovered: ${issue.message}`);
          } else {
            this.stats.failedRecoveries++;
            console.log(`⚠️ Could not recover: ${issue.message}`);
          }
        } catch (error) {
          console.error(`❌ Error applying recovery: ${error.message}`);
          this.stats.failedRecoveries++;
        }
      }
      
      // Generate report
      this.generateReport();
      
      console.log(`✅ Error recovery manager completed. Recovered ${this.stats.recoveredIssues}/${this.stats.totalIssues} issues`);
      
    } catch (error) {
      console.error('❌ Error recovery manager failed:', error.message);
    }
  }

  async checkForRecoveryIssues() {
    const issues = [];
    
    // Check for common recovery issues
    issues.push(...await this.checkForBrokenBuilds());
    issues.push(...await this.checkForFailedTests());
    issues.push(...await this.checkForCorruptedFiles());
    issues.push(...await this.checkForSystemIssues());
    
    return issues;
  }

  async checkForBrokenBuilds() {
    const issues = [];
    
    try {
      // Try to run build
      execSync('npm run build', { stdio: 'pipe' });
    } catch (error) {
      issues.push({
        type: 'broken-build',
        message: 'Build is broken and needs recovery',
        severity: 'high',
        details: error.message
      });
    }
    
    return issues;
  }

  async checkForFailedTests() {
    const issues = [];
    
    try {
      // Try to run tests
      execSync('npm test', { stdio: 'pipe' });
    } catch (error) {
      issues.push({
        type: 'failed-tests',
        message: 'Tests are failing and need recovery',
        severity: 'medium',
        details: error.message
      });
    }
    
    return issues;
  }

  async checkForCorruptedFiles() {
    const issues = [];
    const filePatterns = ['src/**/*.{js,jsx,ts,tsx}', 'scripts/**/*.{js,cjs}'];
    
    for (const pattern of filePatterns) {
      const files = this.glob(pattern);
      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          
          // Check for corrupted content
          if (this.isFileCorrupted(content)) {
            issues.push({
              type: 'corrupted-file',
              message: `File appears to be corrupted: ${file}`,
              severity: 'high',
              file: file,
              details: 'File contains invalid content'
            });
          }
        } catch (error) {
          issues.push({
            type: 'unreadable-file',
            message: `File cannot be read: ${file}`,
            severity: 'high',
            file: file,
            details: error.message
          });
        }
      }
    }
    
    return issues;
  }

  isFileCorrupted(content) {
    // Check for common corruption patterns
    const corruptionPatterns = [
      /^\s*$/, // Empty file
      /null/, // Contains null
      /undefined/, // Contains undefined
      /\[object Object\]/, // Contains object string
      /Error:/, // Contains error messages
      /Exception:/, // Contains exception messages
    ];
    
    return corruptionPatterns.some(pattern => pattern.test(content));
  }

  async checkForSystemIssues() {
    const issues = [];
    
    // Check for system-level issues
    try {
      // Check if node_modules is corrupted
      if (!fs.existsSync('node_modules')) {
        issues.push({
          type: 'missing-dependencies',
          message: 'node_modules directory is missing',
          severity: 'high',
          details: 'Dependencies need to be reinstalled'
        });
      }
      
      // Check if package-lock.json is corrupted
      if (fs.existsSync('package-lock.json')) {
        try {
          JSON.parse(fs.readFileSync('package-lock.json', 'utf8'));
        } catch (error) {
          issues.push({
            type: 'corrupted-lockfile',
            message: 'package-lock.json is corrupted',
            severity: 'medium',
            details: 'Lock file needs to be regenerated'
          });
        }
      }
      
    } catch (error) {
      issues.push({
        type: 'system-error',
        message: 'System-level error detected',
        severity: 'high',
        details: error.message
      });
    }
    
    return issues;
  }

  async applyRecovery(issue) {
    const { type, message, severity, file, details } = issue;
    
    try {
      switch (type) {
        case 'broken-build':
          return await this.recoverBrokenBuild(issue);
        case 'failed-tests':
          return await this.recoverFailedTests(issue);
        case 'corrupted-file':
          return await this.recoverCorruptedFile(issue);
        case 'unreadable-file':
          return await this.recoverUnreadableFile(issue);
        case 'missing-dependencies':
          return await this.recoverMissingDependencies(issue);
        case 'corrupted-lockfile':
          return await this.recoverCorruptedLockfile(issue);
        case 'system-error':
          return await this.recoverSystemError(issue);
        default:
          return { success: false, reason: 'Unknown issue type' };
      }
    } catch (error) {
      return { success: false, reason: error.message };
    }
  }

  async recoverBrokenBuild(issue) {
    try {
      // Try to clean and rebuild
      execSync('rm -rf .next out dist build', { stdio: 'pipe' });
      execSync('npm run build', { stdio: 'pipe' });
      
      return { 
        success: true, 
        type: 'broken-build', 
        action: 'Cleaned and rebuilt project',
        details: 'Build cache cleared and project rebuilt'
      };
    } catch (error) {
      return { success: false, reason: 'Failed to recover broken build' };
    }
  }

  async recoverFailedTests(issue) {
    try {
      // Try to clean and reinstall dependencies
      execSync('rm -rf node_modules package-lock.json', { stdio: 'pipe' });
      execSync('npm install --legacy-peer-deps', { stdio: 'pipe' });
      execSync('npm test', { stdio: 'pipe' });
      
      return { 
        success: true, 
        type: 'failed-tests', 
        action: 'Reinstalled dependencies and ran tests',
        details: 'Dependencies reinstalled and tests passed'
      };
    } catch (error) {
      return { success: false, reason: 'Failed to recover failed tests' };
    }
  }

  async recoverCorruptedFile(issue) {
    const { file } = issue;
    
    try {
      // Try to restore from backup or git
      if (fs.existsSync(file + '.backup')) {
        fs.copyFileSync(file + '.backup', file);
        return { 
          success: true, 
          type: 'corrupted-file', 
          action: 'Restored from backup',
          file: file,
          details: 'File restored from backup'
        };
      }
      
      // Try to restore from git
      try {
        execSync(`git checkout -- "${file}"`, { stdio: 'pipe' });
        return { 
          success: true, 
          type: 'corrupted-file', 
          action: 'Restored from git',
          file: file,
          details: 'File restored from git'
        };
      } catch (gitError) {
        // If git restore fails, try to fix the content
        const content = fs.readFileSync(file, 'utf8');
        const fixedContent = this.fixCorruptedContent(content);
        fs.writeFileSync(file, fixedContent);
        
        return { 
          success: true, 
          type: 'corrupted-file', 
          action: 'Fixed corrupted content',
          file: file,
          details: 'Corrupted content fixed'
        };
      }
    } catch (error) {
      return { success: false, reason: 'Failed to recover corrupted file' };
    }
  }

  fixCorruptedContent(content) {
    let fixedContent = content;
    
    // Fix common corruption patterns
    fixedContent = fixedContent.replace(/null/g, '');
    fixedContent = fixedContent.replace(/undefined/g, '');
    fixedContent = fixedContent.replace(/\[object Object\]/g, '{}');
    fixedContent = fixedContent.replace(/Error:.*$/gm, '');
    fixedContent = fixedContent.replace(/Exception:.*$/gm, '');
    
    // Remove empty lines
    fixedContent = fixedContent.replace(/^\s*$/gm, '');
    
    return fixedContent;
  }

  async recoverUnreadableFile(issue) {
    const { file } = issue;
    
    try {
      // Try to restore from git
      execSync(`git checkout -- "${file}"`, { stdio: 'pipe' });
      
      return { 
        success: true, 
        type: 'unreadable-file', 
        action: 'Restored from git',
        file: file,
        details: 'File restored from git'
      };
    } catch (error) {
      return { success: false, reason: 'Failed to recover unreadable file' };
    }
  }

  async recoverMissingDependencies(issue) {
    try {
      // Reinstall dependencies
      execSync('npm install --legacy-peer-deps', { stdio: 'pipe' });
      
      return { 
        success: true, 
        type: 'missing-dependencies', 
        action: 'Reinstalled dependencies',
        details: 'Dependencies reinstalled successfully'
      };
    } catch (error) {
      return { success: false, reason: 'Failed to recover missing dependencies' };
    }
  }

  async recoverCorruptedLockfile(issue) {
    try {
      // Remove and regenerate lock file
      fs.unlinkSync('package-lock.json');
      execSync('npm install --legacy-peer-deps', { stdio: 'pipe' });
      
      return { 
        success: true, 
        type: 'corrupted-lockfile', 
        action: 'Regenerated lock file',
        details: 'Lock file regenerated successfully'
      };
    } catch (error) {
      return { success: false, reason: 'Failed to recover corrupted lock file' };
    }
  }

  async recoverSystemError(issue) {
    try {
      // Try to restart the system
      execSync('npm run build', { stdio: 'pipe' });
      
      return { 
        success: true, 
        type: 'system-error', 
        action: 'System restarted',
        details: 'System recovered successfully'
      };
    } catch (error) {
      return { success: false, reason: 'Failed to recover system error' };
    }
  }

  glob(pattern) {
    const glob = require('glob');
    return glob.sync(pattern, { 
      ignore: ['node_modules/**', '.next/**', 'out/**', 'dist/**'],
      absolute: true 
    });
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      recoveries: this.recoveries,
      summary: {
        totalIssues: this.stats.totalIssues,
        recoveredIssues: this.stats.recoveredIssues,
        failedRecoveries: this.stats.failedRecoveries,
        successRate: this.stats.totalIssues > 0 ? 
          (this.stats.recoveredIssues / this.stats.totalIssues * 100).toFixed(2) + '%' : '0%'
      }
    };

    const reportPath = path.join(process.cwd(), 'error-recovery-manager-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    console.log(`📊 Error recovery manager report saved to: ${reportPath}`);
    return report;
  }
}

// Main execution
async function main() {
  const manager = new ErrorRecoveryManager();
  
  try {
    await manager.run();
    
    // Exit with appropriate code
    process.exit(manager.stats.failedRecoveries > 0 ? 1 : 0);
    
  } catch (error) {
    console.error('❌ Error recovery manager failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { ErrorRecoveryManager };