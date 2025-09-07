#!/usr/bin/env node

const fs = require('fs');
const path = require(path');
const { execSync } = require('child_process');


    // Check if file has merge conflict markers
    if (

    ) {
      console.log(`Fixing merge conflicts: in: ${filePath}`);

    const content = fs.readFileSync(filePath, utf8');
    
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
      const lines = content.split(\n);
      const fixedLines = [];
      let inConflict = false;
      let keepContent = false;
class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.failedFiles = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  getAllFiles(dir, extensions = ['.js', .jsx, '.ts', .tsx, '.cjs', .mjs]) {
    let files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== node_modules) {
        files = files.concat(this.getAllFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  hasMergeConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return content.includes(<<<<<<< HEAD) || 
             content.includes('=======') || 
             content.includes(>>>>>>>);
    } catch (error) {
      return false;
    }
  }

  resolveMergeConflicts(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

        if (line.includes(
ursor/fix-lint-push-and-merge-to-main-28da
    
    // Check if file has merge conflict markers
    if (

      content.includes('
      content.includes() ||
      content.includes('>>>>>>>')

    ) {
      console.log(`Fixing merge conflicts: in: ${filePath}`);


          inConflict = true;
          keepContent = false;
          continue;
        }

          inConflict = false;
          keepContent = false;
          continue;
        }

        if (!inConflict || keepContent) {
          fixedLines.push(line);
      // Remove merge conflict markers and keep HEAD version
      content = content.replace(
        /<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n        $1
      );

      // Clean up any remaining markers
      content = content.replace(/<<<<<<< HEAD\n/g, '');
      content = content.replace(/=======\n/g, );
      content = content.replace(/
      // Clean up any orphaned markers
      content = content.replace(/<<<<<<< HEAD[^]*?=======[^]*?      content = content.replace(/<<<<<<< HEAD[^]*?      content = content.replace(/=======[^]*?
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`✅ Resolved conflicts in: ${path.relative(this.projectRoot, filePath)}`);
        this.fixedFiles.push(filePath);
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`❌ Failed to resolve conflicts in: ${path.relative(this.projectRoot, filePath)} - ${error.message}`);
      this.failedFiles.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async run() {
    this.log(🔧 Starting comprehensive merge conflict resolution...);
    
    const files = this.getAllFiles(this.projectRoot);
    this.log(`📁 Found ${files.length} files to check`);
    
    let conflictCount = 0;
    let resolvedCount = 0;
    
    for (const file of files) {
      if (this.hasMergeConflicts(file)) {
        conflictCount++;
        this.log(`🔍 Found conflicts in: ${path.relative(this.projectRoot, file)}`);
        
        if (this.resolveMergeConflicts(file)) {
          resolvedCount++;
        }
      }
    }
    
    this.log(`\n📊 Resolution Summary:`);
    this.log(`   - Files with conflicts: ${conflictCount}`);
    this.log(`   - Successfully resolved: ${resolvedCount}`);
    this.log(`   - Failed to resolve: ${this.failedFiles.length}`);
    
    if (this.failedFiles.length > 0) {
      this.log(`\n❌ Failed files:`);
      this.failedFiles.forEach(({ file, error }) => {
        this.log(`   - ${path.relative(this.projectRoot, file)}: ${error}`);
      });
    }
    
    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalFiles: files.length,
      filesWithConflicts: conflictCount,
      resolvedFiles: resolvedCount,
      failedFiles: this.failedFiles.length,
      fixedFiles: this.fixedFiles.map(f => path.relative(this.projectRoot, f)),
      failedFilesDetails: this.failedFiles
    }
    
    const reportPath = path.join(this.projectRoot, 'merge-conflict-resolution-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Report saved to: ${reportPath}`);
    
    this.log('🎉 Merge conflict resolution completed!');
  }
}

// Run the resolver
const resolver = new MergeConflictResolver();
resolver.run().catch(console.error);