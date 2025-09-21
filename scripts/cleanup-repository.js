#!/usr/bin/env node

/**
 * Repository Cleanup Script
 * Removes temporary files and optimizes repository structure
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class RepositoryCleanup {
  constructor() {
    this.removedFiles = [];
    this.removedDirs = [];
    this.errors = [];
  }

  // Files and directories to remove
  getCleanupList() {
    return {
      files: [
        // Backup and temporary files
        'next.config.cjs.backup',
        'eslint.config.cjs.disabled2',
        'next.config.js.complex',
        'performance.config.js',
        
        // Report files (keep latest ones)
        'batch-pr-merge-report.json',
        'comprehensive-pr-merge-report.json',
        'quick-merge-report.json',
        'retry-failed-merges-report.json',
        'pr-processing-report.json',
        
        // Python scripts (if not needed)
        'advanced_merge_resolver.py',
        'batch_merge_processor.py',
        'continue_merge_batches.py',
        'final_merge_pusher.py',
        
        // JS merge scripts (if not needed)
        'advanced_merge_resolver.js',
        'batch_merge_processor.js',
        'continue_merge_batches.js',
        'final_merge_pusher.js',
        'comprehensive_pr_merger.js',
        'continue_pr_merges.js',
        'merge_prs_batch.js',
        'merge_specific_branches.js',
        'process_remaining_prs.js',
        'quick_merge_fix.js',
        'retry_failed_merges.js',
        'fix_divergent_branches.js',
        'fix-all-duplicates.js',
        'fix-duplicate-properties.js',
        'fix-incomplete-services.js',
        'fix-remaining-variants.js',
        'fix-variants.js',
        
        // Shell scripts (if not needed)
        'merge_branches.sh',
        'merge_recent_branches.sh',
        'build.sh',
        
        // Root component files (should be in components/)
        'Footer.jsx',
        'Header.jsx',
        'ThemeProvider.js',
        
        // Config files (keep only the active ones)
        'vite.config.js', // Using Next.js, not Vite
        'index.html', // Next.js handles this
      ],
      directories: [
        'backup',
      ]
    };
  }

  async cleanup() {
    console.log('🧹 Starting repository cleanup...');
    
    const cleanupList = this.getCleanupList();
    
    // Remove files
    for (const file of cleanupList.files) {
      await this.removeFile(file);
    }
    
    // Remove directories
    for (const dir of cleanupList.directories) {
      await this.removeDirectory(dir);
    }
    
    this.generateReport();
  }

  async removeFile(filePath) {
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        this.removedFiles.push(filePath);
        console.log(`✅ Removed file: ${filePath}`);
      }
    } catch (error) {
      this.errors.push(`Failed to remove ${filePath}: ${error.message}`);
      console.error(`❌ Failed to remove ${filePath}:`, error.message);
    }
  }

  async removeDirectory(dirPath) {
    try {
      if (fs.existsSync(dirPath)) {
        fs.rmSync(dirPath, { recursive: true, force: true });
        this.removedDirs.push(dirPath);
        console.log(`✅ Removed directory: ${dirPath}`);
      }
    } catch (error) {
      this.errors.push(`Failed to remove ${dirPath}: ${error.message}`);
      console.error(`❌ Failed to remove ${dirPath}:`, error.message);
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      removedFiles: this.removedFiles,
      removedDirectories: this.removedDirs,
      errors: this.errors,
      summary: {
        filesRemoved: this.removedFiles.length,
        directoriesRemoved: this.removedDirs.length,
        errors: this.errors.length
      }
    };

    fs.writeFileSync('cleanup-report.json', JSON.stringify(report, null, 2));
    
    console.log('\n📊 Cleanup Report');
    console.log('==================');
    console.log(`Files removed: ${this.removedFiles.length}`);
    console.log(`Directories removed: ${this.removedDirs.length}`);
    console.log(`Errors: ${this.errors.length}`);
    
    if (this.errors.length > 0) {
      console.log('\n❌ Errors:');
      this.errors.forEach(error => console.log(`  - ${error}`));
    }
    
    console.log('\n✅ Repository cleanup completed!');
  }
}

// Run cleanup if called directly
if (require.main === module) {
  const cleanup = new RepositoryCleanup();
  cleanup.cleanup().catch(console.error);
}

module.exports = RepositoryCleanup;