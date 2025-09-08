#!/usr/bin/env node

const fs = require('fs');
const path = require(path');
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
const { execSync } = require('child_process');
<<<<<<< HEAD
<<<<<<< HEAD


    // Check if file has merge conflict markers
    if (
    ) {
      console.log(`Fixing merge conflicts in: ${filePath}`);

      const lines = content.split('\n');
      const fixedLines = [];
      let inConflict = false;
      let keepContent = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

          inConflict = true;
          keepContent = false;
          continue;

          inConflict = false;

        if (!inConflict || keepContent) {
          fixedLines.push(line);
<<<<<<< HEAD
      // Remove merge conflict markers and keep HEAD version
      content = content.replace(
<<<<<<< HEAD
        /<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n        '$1'
=======
      // Remove merge conflict markers and keep HEAD version,
  content = content.replace(
        /\n(.*?)\n        '$1'
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
      // Remove merge conflict markers and keep HEAD version,
  content = content.replace(
        /\n(.*?)\n        '$1'
>>>>>>> merged-prs-20250907-203621
      );
      // Clean up any remaining markers,
  content = content.replace(/\n/g, '');
=======
        /<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n        $1
      );

      // Clean up any remaining markers
      content = content.replace(/<<<<<<< HEAD\n/g, '');
      content = content.replace(/=======\n/g, );
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
      content = content.replace(/
      // Clean up any orphaned markers,
  content = content.replace(/[^]*?      content = content.replace(/[^]*?
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`✅ Resolved conflicts in: ${path.relative(this.projectRoot, filePath)}`);
        this.fixedFiles.push(filePath);
        return true;
      }

      this.log(`Fixing merge conflicts in: ${path.relative(this.projectRoot, filePath)}`);
      
      const resolvedContent = this.resolveMergeConflict(content);
      
      // Write the resolved content back
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      
      this.fixedFiles.push(filePath);
      return true;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixAllMergeConflicts() {
    this.log('🔧 Starting merge conflict resolution...');
    
    const files = this.getAllFiles(this.projectRoot);
    let totalConflicts = 0;
    let fixedConflicts = 0;

    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (this.hasMergeConflicts(content)) {
          totalConflicts++;
          if (this.fixFile(file)) {
            fixedConflicts++;
          }
        }
      } catch (error) {
        // Skip files that can't be read
        continue;
      }
    }

    this.log(`\n📊 Merge Conflict Resolution Summary:`);
    this.log(`Total files with conflicts: ${totalConflicts}`);
    this.log(`Successfully fixed: ${fixedConflicts}`);
    this.log(`Errors: ${this.errors.length}`);

    if (this.errors.length > 0) {
      this.log('\n❌ Files with errors:');
      this.errors.forEach(({ file, error }) => {
        this.log(`  - ${path.relative(this.projectRoot, file)}: ${error}`);
      });
    }

    return {
      totalConflicts,
      fixedConflicts,
      errors: this.errors.length,
      fixedFiles: this.fixedFiles
    };
  }

  async run() {
    try {
      this.log('🚀 Starting comprehensive merge conflict resolution...');
      
      // Fix merge conflicts in remaining files
      const results = await this.fixAllMergeConflicts();
      
      this.log('\n✅ Merge conflict resolution completed!');
      
      // Save report
      const report = {
        timestamp: new Date().toISOString(),
        results,
        fixedFiles: this.fixedFiles.map(f => path.relative(this.projectRoot, f)),
        errors: this.errors
      };
      
      fs.writeFileSync(
        path.join(this.projectRoot, 'merge-conflict-resolution-report.json'),
        JSON.stringify(report, null, 2)
      );
      
      this.log('📄 Report saved to merge-conflict-resolution-report.json');
      
      return results;
    } catch (error) {
      this.log(`❌ Merge conflict resolution failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const resolver = new MergeConflictResolver();
  resolver.run().catch(console.error);
}

module.exports = MergeConflictResolver;