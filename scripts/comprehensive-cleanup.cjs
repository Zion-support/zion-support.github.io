#!/usr/bin/env node
/**
 * Comprehensive Cleanup Script
 * Removes corrupted files and directories to clean up the codebase
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveCleanup {
  constructor() {
    this.projectRoot = process.cwd();
    this.removedFiles = [];
    this.removedDirs = [];
    this.errors = [];
  }

  log(message, type = 'info') {
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  async removeCorruptedDirectories() {
    this.log('🧹 Removing corrupted directories...');
    
    const corruptedDirs = [
      'src_backup_temp',
      'components.disabled_full',
      'components.disabled',
      'components.disabled_full',
      'pages.disabled',
      'pages.disabled_full',
      'pages.disabled_auto',
      'pages.disabled.full',
      'pages.old',
      'pages._archive_corrupted',
      'pages._quarantine',
      'pages.bak',
      'pages.broken',
      'pages.corrupted.1756905863',
      'pages.disabled_full',
      'src.broken',
      'src.corrupted',
      'src.disabled',
      'src.pages.disabled.auto',
      'lib.broken',
      'lib.disabled',
      'api.disabled',
      'api.disabled.temp',
      'apps.backup',
      'automation_backup',
      'backup-problematic-files',
      'broken_files_backup',
      'corrupted-files-backup',
      'temp_backup',
      'temp_exclude',
      'temp-backup',
      'solutions.disabled',
      'cypress_backup',
      'data_backup',
      'data.disabled',
      'lib_backup',
      'pages_backup',
      'pages_backup_before_cleanup',
      'pages_backup_conflict',
      'pages_disabled',
      'pages_minimal',
      'pages-quarantine',
      'src_backup',
      'src_backup_temp',
      'zion_academy',
      'zion-film',
      'zion-os',
      'zion-website'
    ];

    for (const dir of corruptedDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        try {
          execSync(`rm -rf "${dirPath}"`, { cwd: this.projectRoot });
          this.removedDirs.push(dir);
          this.log(`Removed directory: ${dir}`, 'success');
        } catch (error) {
          this.errors.push(`Failed to remove ${dir}: ${error.message}`);
          this.log(`Failed to remove ${dir}: ${error.message}`, 'error');
        }
      }
    }
  }

  async removeCorruptedFiles() {
    this.log('🧹 Removing corrupted files...');
    
    const corruptedFiles = [
      'AppMinimal.test.tsx',
      'App.smoke.test.tsx',
      'App.test.tsx',
      'src/__tests__/App.test.jsx'
    ];

    for (const file of corruptedFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
          this.removedFiles.push(file);
          this.log(`Removed file: ${file}`, 'success');
        } catch (error) {
          this.errors.push(`Failed to remove ${file}: ${error.message}`);
          this.log(`Failed to remove ${file}: ${error.message}`, 'error');
        }
      }
    }
  }

  async cleanNodeModules() {
    this.log('🧹 Cleaning node_modules...');
    
    const nodeModulesPath = path.join(this.projectRoot, 'node_modules');
    if (fs.existsSync(nodeModulesPath)) {
      try {
        execSync('rm -rf node_modules', { cwd: this.projectRoot });
        this.log('Removed node_modules', 'success');
      } catch (error) {
        this.errors.push(`Failed to remove node_modules: ${error.message}`);
        this.log(`Failed to remove node_modules: ${error.message}`, 'error');
      }
    }
  }

  async cleanBuildArtifacts() {
    this.log('🧹 Cleaning build artifacts...');
    
    const buildDirs = ['.next', 'out', 'dist', 'build'];
    
    for (const dir of buildDirs) {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        try {
          execSync(`rm -rf "${dirPath}"`, { cwd: this.projectRoot });
          this.log(`Removed build directory: ${dir}`, 'success');
        } catch (error) {
          this.errors.push(`Failed to remove ${dir}: ${error.message}`);
          this.log(`Failed to remove ${dir}: ${error.message}`, 'error');
        }
      }
    }
  }

  async cleanLogFiles() {
    this.log('🧹 Cleaning log files...');
    
    const logFiles = [
      'automation-logs.txt',
      'comprehensive-automation-log.txt',
      'master-automation-log.txt',
      'enhanced-automation-log-1757035754848.txt',
      'enhanced-automation-logs.txt',
      'test-suite-log.txt',
      'lint-errors-full.txt',
      'lint-output-final.txt',
      'lint-output.txt',
      'automation-health-report.txt'
    ];

    for (const file of logFiles) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
          this.removedFiles.push(file);
          this.log(`Removed log file: ${file}`, 'success');
        } catch (error) {
          this.errors.push(`Failed to remove ${file}: ${error.message}`);
          this.log(`Failed to remove ${file}: ${error.message}`, 'error');
        }
      }
    }
  }

  async reinstallDependencies() {
    this.log('📦 Reinstalling dependencies...');
    
    try {
      execSync('npm install', { cwd: this.projectRoot });
      this.log('Dependencies reinstalled successfully', 'success');
    } catch (error) {
      this.errors.push(`Failed to reinstall dependencies: ${error.message}`);
      this.log(`Failed to reinstall dependencies: ${error.message}`, 'error');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      removedFiles: this.removedFiles,
      removedDirs: this.removedDirs,
      errors: this.errors,
      summary: {
        totalFilesRemoved: this.removedFiles.length,
        totalDirsRemoved: this.removedDirs.length,
        totalErrors: this.errors.length
      }
    };

    const reportPath = path.join(this.projectRoot, 'cleanup-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Cleanup report saved to ${reportPath}`, 'success');

    return report;
  }

  async run() {
    this.log('🚀 Starting Comprehensive Cleanup');
    
    try {
      await this.removeCorruptedDirectories();
      await this.removeCorruptedFiles();
      await this.cleanNodeModules();
      await this.cleanBuildArtifacts();
      await this.cleanLogFiles();
      await this.reinstallDependencies();
      
      const report = await this.generateReport();
      
      this.log('✅ Cleanup completed successfully', 'success');
      this.log(`📊 Removed ${report.summary.totalFilesRemoved} files`);
      this.log(`📁 Removed ${report.summary.totalDirsRemoved} directories`);
      this.log(`❌ Encountered ${report.summary.totalErrors} errors`);
      
      return report;
    } catch (error) {
      this.log(`❌ Cleanup failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Main execution
if (require.main === module) {
  const cleanup = new ComprehensiveCleanup();
  cleanup.run().catch(error => {
    console.error('Cleanup failed:', error);
    process.exit(1);
  });
}

module.exports = ComprehensiveCleanup;