<<<<<<< HEAD
<<<<<<< HEAD
#!/usr/bin/env node,
  const fs = require('fs');
const path = require('path');
=======
#!/usr/bin/env node

const fs = require('fs');
const path = require(path');
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
const { execSync } = require('child_process');
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
class MergeConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.failedFiles = [];
  }
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
<<<<<<< HEAD
  getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs']) {
=======

  getAllFiles(dir, extensions = ['.js', .jsx, '.ts', .tsx, '.cjs', .mjs]) {
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
    let files = [];
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
<<<<<<< HEAD
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
=======
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== node_modules) {
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
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
<<<<<<< HEAD
      return content.includes('') || 
             content.includes('>>>>>>>');
=======
      return content.includes(<<<<<<< HEAD) || 
             content.includes('=======') || 
             content.includes(>>>>>>>);
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
    } catch (error) {
      return false;
    }
  }
  resolveMergeConflicts(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
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
      return false;
    } catch (error) {
      this.log(`❌ Failed to resolve conflicts in: ${path.relative(this.projectRoot, filePath)} - ${error.message}`);
      this.failedFiles.push({ file: filePath, error: error.message });
      return false;
    }
  }
  async run() {
<<<<<<< HEAD
    this.log('🔧 Starting comprehensive merge conflict resolution...');
=======
    this.log(🔧 Starting comprehensive merge conflict resolution...);
    
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
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
    // Generate report,
  const report = {
      timestamp: new Date().toISOString(),
      totalFiles: files.length,
      filesWithConflicts: conflictCount,
      resolvedFiles: resolvedCount,
      failedFiles: this.failedFiles.length,
      fixedFiles: this.fixedFiles.map(f => path.relative(this.projectRoot, f)),
      failedFilesDetails: this.failedFiles
<<<<<<< HEAD
    };
=======
    }
    
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
    const reportPath = path.join(this.projectRoot, 'merge-conflict-resolution-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Report saved to: ${reportPath}`);
    this.log('🎉 Merge conflict resolution completed!');
  }
}
// Run the resolver,
  const resolver = new MergeConflictResolver();
resolver.run().catch(console.error);
=======

      return true;

    return false;
  } catch (error) {`;
    console.error(`Error processing ${filePath}:`, error.message);

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if ()
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')

      if (fixMergeConflicts(filePath)) fixedCount++;

  return fixedCount;

console.log(`Fixed ${fixedCount} files`);
`;
>>>>>>> origin/chore/fix-lint-and-merge
