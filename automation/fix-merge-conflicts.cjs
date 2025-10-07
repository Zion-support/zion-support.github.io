#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MergeConflictFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] [MERGE-CONFLICT-FIXER] ${message}`);
  }

  findFilesWithConflicts() {
    this.log('🔍 Finding files with merge conflicts...');
    
    try {
      const result = execSync('grep -r "
      
      // Clean up any remaining conflict markers
      content = content.replace(/
      
      // Clean up common merge conflict artifacts
      content = content.replace(/\s*,\s*$/gm, ','); // Fix trailing commas
      content = content.replace(/,\s*}/g, '}'); // Fix trailing commas before closing braces
      content = content.replace(/,\s*]/g, ']'); // Fix trailing commas before closing brackets
      content = content.replace(/\s*;\s*$/gm, ';'); // Fix trailing semicolons
      content = content.replace(/;\s*}/g, '}'); // Fix semicolons before closing braces
      content = content.replace(/;\s*]/g, ']'); // Fix semicolons before closing brackets
      
      // Fix common syntax issues
      content = content.replace(/\s*_\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*:/g, ' $1:'); // Fix _variable: to variable:
      content = content.replace(/\s*_\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g, ' $1='); // Fix _variable= to variable=
      content = content.replace(/\s*_\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/g, ' $1('); // Fix _function( to function(
      content = content.replace(/\s*_\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*{/g, ' $1{'); // Fix _object{ to object{
      content = content.replace(/\s*_\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\[/g, ' $1['); // Fix _array[ to array[
      
      // Remove empty lines at the end
      content = content.replace(/\n\s*\n\s*$/, '\n');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed merge conflicts in ${filePath}`);
        return true;
      } else {
        this.log(`ℹ️ No changes needed for ${filePath}`);
        return false;
      }
      
    } catch (error) {
      this.errors.push({
        file: filePath,
        error: error.message
      });
      this.log(`❌ Failed to fix ${filePath}: ${error.message}`);
      return false;
    }
  }

  fixAllConflicts() {
    this.log('🚀 Starting comprehensive merge conflict resolution...');
    
    const filesWithConflicts = this.findFilesWithConflicts();
    
    if (filesWithConflicts.length === 0) {
      this.log('✅ No merge conflicts found!');
      return;
    }
    
    let fixedCount = 0;
    
    for (const file of filesWithConflicts) {
      if (this.fixFileConflicts(file)) {
        fixedCount++;
      }
    }
    
    this.log(`✅ Fixed merge conflicts in ${fixedCount}/${filesWithConflicts.length} files`);
    
    if (this.errors.length > 0) {
      this.log(`⚠️ ${this.errors.length} files had errors during fixing`);
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      summary: {
        totalFilesProcessed: this.fixedFiles.length + this.errors.length,
        successfullyFixed: this.fixedFiles.length,
        errors: this.errors.length
      }
    };

    const reportPath = path.join(this.projectRoot, 'merge-conflict-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📊 Merge conflict fix report saved to: ${reportPath}`);
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Merge Conflict Fixer...');
    
    try {
      this.fixAllConflicts();
      const report = this.generateReport();
      
      this.log('✅ Merge Conflict Fixer completed!');
      this.log(`📈 Successfully fixed ${report.summary.successfullyFixed} files`);
      
      return report;
    } catch (error) {
      this.log(`❌ Merge Conflict Fixer failed: ${error.message}`);
      throw error;
    }
  }
}

// Run the merge conflict fixer
const fixer = new MergeConflictFixer();
fixer.run().catch(console.error);