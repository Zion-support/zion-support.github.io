#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MergeConflictFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixMergeConflicts(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return false;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has merge conflicts
      if (!content.includes('          !content.includes('') && 
          !content.includes('        return false;
      }

      this.log(`Fixing merge conflicts in: ${filePath}`, 'PROGRESS');

      let fixedContent = content
        // Remove merge conflict markers and keep HEAD version
        .replace(/        // Remove any remaining conflict markers
        .replace(/        .replace(/\n?/g, '')
        .replace(/        // Clean up extra newlines
        .replace(/\n{3,}/g, '\n\n')
        .trim();

      // Write the fixed content back
      fs.writeFileSync(filePath, fixedContent);
      this.fixedFiles.push(filePath);
      this.log(`Fixed merge conflicts in: ${filePath}`, 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async findAndFixConflicts() {
    this.log('🔍 Searching for files with merge conflicts...', 'PROGRESS');
    
    try {
      // Use git to find files with merge conflicts
      const result = execSync('git grep -l "        encoding: 'utf8',
        cwd: process.cwd()
      });
      
      const files = result.trim().split('\n').filter(f => f.length > 0);
      
      if (files.length === 0) {
        this.log('No merge conflicts found', 'SUCCESS');
        return;
      }

      this.log(`Found ${files.length} files with merge conflicts`, 'INFO');

      for (const file of files) {
        this.fixMergeConflicts(file);
      }

      this.log(`✅ Fixed merge conflicts in ${this.fixedFiles.length} files`, 'SUCCESS');
      
      if (this.errors.length > 0) {
        this.log(`❌ ${this.errors.length} files had errors`, 'WARNING');
        this.errors.forEach(err => {
          this.log(`   - ${err.file}: ${err.error}`, 'ERROR');
        });
      }

    } catch (error) {
      this.log(`Error searching for conflicts: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🚀 Starting merge conflict fixer...', 'PROGRESS');
    await this.findAndFixConflicts();
    
    const report = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      files: this.fixedFiles,
      errorDetails: this.errors
    };

    fs.writeFileSync('merge-conflict-fix-report.json', JSON.stringify(report, null, 2));
    this.log('📊 Report saved to merge-conflict-fix-report.json', 'SUCCESS');
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new MergeConflictFixer();
  fixer.run().catch(error => {
    console.error('Merge conflict fixer failed:', error);
    process.exit(1);
  });
}

module.exports = MergeConflictFixer;