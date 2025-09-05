#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    
  }

  async findFilesWithConflicts() {
    this.log('🔍 Searching for files with merge conflicts...');
    
    try {
        conflictType = 'branch';
        continue;
        // End of conflict - choose the newer version (branch content)
        if (branchContent.length > 0) {
          resolvedLines.push(...branchContent);
        } else if (headContent.length > 0) {
          resolvedLines.push(...headContent);
        }
        
        inConflict = false;
        conflictType = null;
        headContent = [];
        branchContent = [];
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headContent.push(line);
        } else if (conflictType === 'branch') {
          branchContent.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }
    
    return resolvedLines.join('\n');
  }

  async fixFile(filePath) {
    try {
      this.log(`🔧 Fixing merge conflicts in ${filePath}...`);
      
      const content = fs.readFileSync(filePath, 'utf8');
      const resolvedContent = this.resolveConflict(content, filePath);
      
      // Check if there are still conflict markers
        this.log(`⚠️  Still has conflict markers in ${filePath}`, 'WARN');
        return false;
      }
      
      fs.writeFileSync(filePath, resolvedContent);
      this.fixedFiles.push(filePath);
      this.log(`✅ Fixed merge conflicts in ${filePath}`);
      return true;
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async run() {
    this.log('🚀 Starting merge conflict resolution...');
    
    const filesWithConflicts = await this.findFilesWithConflicts();
    
    if (filesWithConflicts.length === 0) {
      this.log('✅ No merge conflicts found!');
      return;
    }
    
    for (const file of filesWithConflicts) {
      await this.fixFile(file);
    }
    
    this.log('\n📊 Merge Conflict Resolution Report');
    this.log(`Files processed: ${filesWithConflicts.length}`);
    this.log(`Files fixed: ${this.fixedFiles.length}`);
    this.log(`Errors: ${this.errors.length}`);
    
    if (this.fixedFiles.length > 0) {
      this.log('\n✅ Successfully fixed files:');
      this.fixedFiles.forEach(file => this.log(`   - ${file}`));
    }
    
    if (this.errors.length > 0) {
      this.log('\n❌ Errors encountered:');
      this.errors.forEach(({ file, error }) => this.log(`   - ${file}: ${error}`));
    }
    
    this.log('\n🎉 Merge conflict resolution completed!');
  }
}

if (require.main === module) {
  const resolver = new MergeConflictResolver();
  resolver.run().catch(console.error);
}

module.exports = MergeConflictResolver;