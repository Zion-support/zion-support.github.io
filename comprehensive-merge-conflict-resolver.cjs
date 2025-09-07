#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MergeConflictResolver {
  constructor() {
    this.resolvedFiles = [];
    this.failedFiles = [];
    this.skippedFiles = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'WARN' ? '⚠️' : '✅';
    console.log(`[${timestamp}] ${prefix} ${message}`);
  }

  async resolveMergeConflicts() {
    this.log('Starting comprehensive merge conflict resolution...');
    
    try {
      // First, let's get all files with merge conflicts
      const conflictedFiles = this.findConflictedFiles();
      this.log(`Found ${conflictedFiles.length} files with merge conflicts`);

      for (const filePath of conflictedFiles) {
        try {
          await this.resolveFileConflicts(filePath);
        } catch (error) {
          this.log(`Failed to resolve conflicts in ${filePath}: ${error.message}`, 'ERROR');
          this.failedFiles.push(filePath);
        }
      }

      this.log(`Resolved conflicts in ${this.resolvedFiles.length} files`);
      this.log(`Failed to resolve ${this.failedFiles.length} files`);
      this.log(`Skipped ${this.skippedFiles.length} files`);

      // Generate report
      await this.generateReport();

    } catch (error) {
      this.log(`Error during merge conflict resolution: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  findConflictedFiles() {
    const conflictedFiles = [];
    
    try {
      // Use git to find files with merge conflicts
      const result = execSync('git diff --name-only --diff-filter=U', { 
        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      if (result.trim()) {
        conflictedFiles.push(...result.trim().split('\n'));
      }
    } catch (error) {
      // Fallback to grep search
      try {
        const result = execSync('grep -r -l "
      .replace(/
  }

  resolveByKeepingLongerContent(content) {
    return content.replace(/
      // Keep the longer content
      return headContent.length >= otherContent.length ? headContent : otherContent;
    });
  }

  removeAllConflictMarkers(content) {
    return content
      .replace(/
      .replace(/
  }

  hasConflictMarkers(content) {
    return content.includes('') || 
           content.includes('') || 
           content.includes('>>>>>>>');
  }

  validateFile(filePath) {
    try {
      // Basic validation - check if file can be read and doesn't have obvious syntax errors
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check for remaining conflict markers
      if (this.hasConflictMarkers(content)) {
        return false;
      }

      // For TypeScript/JavaScript files, check for basic syntax
      if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        // Basic syntax check - look for unmatched braces, parentheses, etc.
        const openBraces = (content.match(/\{/g) || []).length;
        const closeBraces = (content.match(/\}/g) || []).length;
        const openParens = (content.match(/\(/g) || []).length;
        const closeParens = (content.match(/\)/g) || []).length;
        
        if (Math.abs(openBraces - closeBraces) > 2 || Math.abs(openParens - closeParens) > 2) {
          return false;
        }
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: this.resolvedFiles.length + this.failedFiles.length + this.skippedFiles.length,
        resolved: this.resolvedFiles.length,
        failed: this.failedFiles.length,
        skipped: this.skippedFiles.length
      },
      resolvedFiles: this.resolvedFiles,
      failedFiles: this.failedFiles,
      skippedFiles: this.skippedFiles
    };

    fs.writeFileSync('merge-conflict-resolution-report.json', JSON.stringify(report, null, 2));
    this.log('Generated merge conflict resolution report: merge-conflict-resolution-report.json');
  }

  async run() {
    try {
      await this.resolveMergeConflicts();
      this.log('Merge conflict resolution completed successfully!');
    } catch (error) {
      this.log(`Merge conflict resolution failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the resolver
if (require.main === module) {
  const resolver = new MergeConflictResolver();
  resolver.run();
}

module.exports = MergeConflictResolver;