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
      console.log(`Fixing merge conflicts: in: ${filePath}`);

    const content = fs.readFileSync(filePath, utf8');
=======
const fs = require('fs');
const path = require('path');
function fixMergeConflicts(filePath) {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
    const content = fs.readFileSync(filePath, 'utf8');
>>>>>>> origin/chore/fix-lint-and-merge
    
ursor/automate-test-improve-and-merge-code-85f4
    // Check if file has merge conflict markers
    if (
      content.includes('
      content.includes() ||
      content.includes('>>>>>>>')
ursor/fix-lint-push-and-merge-to-main-28da
    ) {
      console.log(`Fixing merge conflicts: in: ${filePath}`);

      // Remove merge conflict markers and keep the content after 
ursor/fix-lint-push-and-merge-to-main-28da
<<<<<<< HEAD
      const lines = content.split(\n);
      const fixedLines = [];
      let inConflict = false;
      let keepContent = false;
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
>>>>>>> merged-prs-20250907-203621
class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.failedFiles = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs']) {
    const files = [];
    try {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...this.getAllFiles(fullPath, extensions));
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
    return files;
  }

  hasMergeConflicts(content) {
  }

  resolveMergeConflict(content) {
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let headContent = [];
    let separatorFound = false;
    let tailContent = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

        inConflict = true;
        headContent = [];
        tailContent = [];
        separatorFound = false;
        continue;
      }

        if (inConflict) {
          // Resolve conflict by keeping the HEAD version (first part)
          resolvedLines.push(...headContent);
          inConflict = false;
          headContent = [];
          tailContent = [];
          separatorFound = false;
        }
        continue;
      }

      if (inConflict) {
        if (!separatorFound) {
          headContent.push(line);
        } else {
          tailContent.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }

    return resolvedLines.join('\n');
  }

  fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
      return content.includes('') || 
<<<<<<< HEAD
=======
<<<<<<< HEAD
             content.includes('>>>>>>>');
=======
      return content.includes(<<<<<<< HEAD) || 
             content.includes('=======') || 
             content.includes(>>>>>>>);
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    } catch (error) {
      return false;
    }
  }
  resolveMergeConflicts(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
<<<<<<< HEAD
<<<<<<< HEAD

        if (line.includes(
ursor/fix-lint-push-and-merge-to-main-28da
    
    // Check if file has merge conflict markers
    if (

      content.includes('
      content.includes() ||
      content.includes('>>>>>>>')

    ) {
      console.log(`Fixing merge conflicts: in: ${filePath}`);

=======
=======

    // Check if file has merge conflict markers
    if (
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    ) {

<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      const lines = content.split('\n');
      const fixedLines = [];
      let inConflict = false;
      let keepContent = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

<<<<<<< HEAD
<<<<<<< HEAD
        if (line.includes('
ursor/fix-lint-push-and-merge-to-main-28da
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          inConflict = true;
          keepContent = false;
          continue;

<<<<<<< HEAD
<<<<<<< HEAD
        if (line.includes('')) {
          keepContent = true;
          continue;
        }

        if (line.includes('>>>>>>>')) {
ursor/fix-lint-push-and-merge-to-main-28da
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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