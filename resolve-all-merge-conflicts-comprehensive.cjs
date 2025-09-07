#!/usr/bin/env node
const fs = require('fs');
const path = require(path');
const { execSync } = require('child_process');

class ComprehensiveMergeConflictResolver {
  constructor(rootPath = '/workspace') {
    this.rootPath = rootPath;
    this.resolvedFiles = [];
    this.failedFiles = [];
    this.logFile = path.join(this.rootPath, 'comprehensive-merge-resolution.log');
    this.ensureLogDir();
  }

<<<<<<< HEAD
  log(message, level = INFO') {
=======
  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
>>>>>>> origin/chore/fix-lint-and-merge
    const timestamp = new Date().toISOString();
    fs.appendFileSync(this.logFile, `[${timestamp}] ${message}\n`);
    console.log(message);
  }

<<<<<<< HEAD
  findFilesWithConflicts() {
    const files = [];
    
    const searchDirectories = [
      'scripts,
      automation',
      'src,
      app',
      'pages,
      components'
    ];

    searchDirectories.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        this.findConflictsInDirectory(dirPath, files);
      }
    });

    // Also check root files
    const rootFiles = fs.readdirSync(this.projectRoot)
      .filter(file => file.endsWith('.cjs) || file.endsWith(.js') || file.endsWith('.ts) || file.endsWith(.tsx') || file.endsWith('.jsx) || file.endsWith(.json'));
    
    rootFiles.forEach(file => {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        if (this.hasMergeConflicts(filePath)) {
          files.push(filePath);
        }
      }
    });

    return files;
  }

  findConflictsInDirectory(dir, files) {
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        this.findConflictsInDirectory(fullPath, files);
      } else if (stat.isFile() && (item.endsWith('.cjs) || item.endsWith(.js') || item.endsWith('.ts) || item.endsWith(.tsx') || item.endsWith('.jsx) || item.endsWith(.json'))) {
        if (this.hasMergeConflicts(fullPath)) {
          files.push(fullPath);
        }
      }
    });
  }

  hasMergeConflicts(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      return content.includes(') || content.includes('
        // Extract the part after 
        const parts = match.split();
        if (parts.length > 1) {
          // Get the part after  and before >>>>>>>
          const incomingPart = parts[1].split('>>>>>>>')[0];
          return incomingPart.trim();
        }
        return ;
      });

      // Clean up any remaining conflict markers
      content = content.replace(/[\s\S]*?
      content = content.replace(/[\s\S]*?

      // Remove any remaining conflict markers
      content = content.replace(//g, '');
      content = content.replace(/

      // Clean up extra whitespace
      content = content.replace(/\n\s*\n\s*\n/g, \n\n);
      content = content.trim();

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed merge conflicts in ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, ERROR);
      return false;
=======
  async runCommand(command, description) {
    this.log(`🚀 ${description}: ${command}`);
    try {
      const output = execSync(command, { cwd: this.rootPath, encoding: 'utf8', stdio: 'pipe' });
      this.log(`✅ ${description} successful.`);
      return output;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`);
      throw error;
>>>>>>> origin/chore/fix-lint-and-merge
    }
  }

  async findMergeConflictFiles() {
    this.log('🔍 Searching for files with merge conflicts...');
<<<<<<< HEAD
    
    const conflictedFiles = this.findFilesWithConflicts();
    this.log(`Found ${conflictedFiles.length} files with merge conflicts`);

    if (conflictedFiles.length === 0) {
      this.log(✅ No merge conflicts found!);
      return;
=======
    const command = `git status --porcelain | grep "^UU\\|^AA\\|^DD\\|^AU\\|^UA\\|^DU\\|^UD" | cut -c4-`;
    try {
      const output = await this.runCommand(command, 'Find conflicted files');
      const files = output.split('\n').filter(line => line.trim()).map(line => line.trim());
      this.log(`Found ${files.length} files with merge conflicts.`);
      return files;
    } catch (error) {
      this.log(`No merge conflicts found or error during git status: ${error.message}`);
      return [];
>>>>>>> origin/chore/fix-lint-and-merge
    }
  }

  async resolveFileConflict(filePath) {
    this.log(`Attempting to resolve conflict in: ${filePath}`);
    try {
      if (!fs.existsSync(filePath)) {
        this.log(`File ${filePath} does not exist, skipping...`);
        return;
      }

      let content = fs.readFileSync(filePath, 'utf8');

      // Check if file has merge conflict markers
      if (!content.includes('<<<<<<<') && !content.includes('') && !content.includes('>>>>>>>')) {
        this.log(`File ${filePath} has no merge conflict markers, skipping...`);
        return;
      }

      // Strategy 1: Try to resolve by keeping HEAD version (our changes)
      content = content
        .replace(/
          const parts = match.split('');
          return parts[0].replace('
          const parts = match.split('');
          return parts[0].replace(/<<<<<<< [^\n]+/, '').trim();
        });

      // Strategy 2: Remove any remaining markers
      content = content
        .replace(/

      // Clean up any extra whitespace
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

      fs.writeFileSync(filePath, content, 'utf8');
      this.log(`✅ Resolved conflict in ${filePath}`);
      this.resolvedFiles.push(filePath);
    } catch (error) {
      this.log(`❌ Failed to resolve conflict in ${filePath}: ${error.message}`);
      this.failedFiles.push(filePath);
    }
  }

  async removeDeletedFiles() {
    this.log('🗑️ Removing files that were deleted in remote...');
    try {
      // Get list of deleted files
      const deletedFiles = await this.runCommand('git status --porcelain | grep "^DU\\|^UD" | cut -c4-', 'Get deleted files');
      const files = deletedFiles.split('\n').filter(line => line.trim()).map(line => line.trim());

<<<<<<< HEAD
    if (this.errors.length > 0) {
      this.log(\n❌ Files with errors:);
      this.errors.forEach(({ file, error }) => {
        this.log(`  - ${file}: ${error}`);
      });
=======
      for (const file of files) {
        if (fs.existsSync(file)) {
          fs.unlinkSync(file);
          this.log(`🗑️ Removed deleted file: ${file}`);
        }
      }
    } catch (error) {
      this.log(`Error removing deleted files: ${error.message}`);
>>>>>>> origin/chore/fix-lint-and-merge
    }
  }

  async addResolvedFiles() {
    this.log('📝 Adding resolved files to git...');
    try {
      await this.runCommand('git add .', 'Add all resolved files');
      this.log('✅ All files added to git');
    } catch (error) {
      this.log(`❌ Failed to add files: ${error.message}`);
    }
  }

  async run() {
    this.log('🚀 Starting comprehensive merge conflict resolution...');
    try {
      // Remove deleted files first
      await this.removeDeletedFiles();

      // Find and resolve conflicts
      const conflictFiles = await this.findMergeConflictFiles();

      if (conflictFiles.length === 0) {
        this.log('🎉 No merge conflicts found. Repository is clean.');
        await this.addResolvedFiles();
        return;
      }

      for (const file of conflictFiles) {
        await this.resolveFileConflict(file);
      }

      // Add resolved files
      await this.addResolvedFiles();

      this.log('\n📊 MERGE CONFLICT RESOLUTION REPORT');
      this.log('==');
      this.log(`✅ Resolved files: ${this.resolvedFiles.length}`);
      this.resolvedFiles.forEach(file => this.log(`  - ${file}`));
      this.log(`❌ Failed files: ${this.failedFiles.length}`);
      this.failedFiles.forEach(file => this.log(`  - ${file}`));

      if (this.failedFiles.length > 0) {
        this.log('⚠️ Some conflicts could not be resolved automatically. Manual intervention may be required.');
      } else {
        this.log('🎉 All detected merge conflicts have been resolved automatically.');
      }

    } catch (error) {
      this.log(`🚨 An error occurred during the resolution process: ${error.message}`);
    }
  }
}

<<<<<<< HEAD
// Run the resolver
const resolver = new ComprehensiveMergeConflictResolver();
resolver.resolveAllConflicts().then(() => {
  console.log(\n🎉 Merge conflict resolution completed!);
}).catch(error => {
  console.error('❌ Error during merge conflict resolution:', error);
  process.exit(1);
});
=======
if (require.main === module) {
  const resolver = new ComprehensiveMergeConflictResolver();
  resolver.run().catch(console.error);
}

module.exports = ComprehensiveMergeConflictResolver;
>>>>>>> origin/chore/fix-lint-and-merge
