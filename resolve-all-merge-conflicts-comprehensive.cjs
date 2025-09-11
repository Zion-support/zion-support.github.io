#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveMergeConflictResolver {
  constructor(rootPath = '/workspace') {
    this.rootPath = rootPath;
    this.resolvedFiles = [];
    this.failedFiles = [];
    this.logFile = path.join(this.rootPath, 'comprehensive-merge-resolution.log');
    this.ensureLogDir();
  }

  ensureLogDir() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    fs.appendFileSync(this.logFile, `[${timestamp}] ${message}\n`);
    console.log(message);
  }

  async runCommand(command, description) {
    this.log(`🚀 ${description}: ${command}`);
    try {
      const output = execSync(command, { cwd: this.rootPath, encoding: 'utf8', stdio: 'pipe' });
      this.log(`✅ ${description} successful.`);
      return output;
    } catch (error) {
      this.log(`❌ ${description} failed: ${error.message}`);
      throw error;
    }
  }

  async findMergeConflictFiles() {
    this.log('🔍 Searching for files with merge conflicts...');
    const command = `git status --porcelain | grep "^UU\\|^AA\\|^DD\\|^AU\\|^UA\\|^DU\\|^UD" | cut -c4-`;
    try {
      const output = await this.runCommand(command, 'Find conflicted files');
      const files = output.split('\n').filter(line => line.trim()).map(line => line.trim());
      this.log(`Found ${files.length} files with merge conflicts.`);
      return files;
    } catch (error) {
      this.log(`No merge conflicts found or error during git status: ${error.message}`);
      return [];
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
      if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
        this.log(`File ${filePath} has no merge conflict markers, skipping...`);
        return;
      }

      // Strategy 1: Try to resolve by keeping HEAD version (our changes)
      content = content
        .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, (match) => {
          const parts = match.split('=======');
          return parts[0].replace('<<<<<<< HEAD', '').trim();
        })
        .replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, (match) => {
          const parts = match.split('=======');
          return parts[0].replace(/<<<<<<< [^\n]+/, '').trim();
        });

      // Strategy 2: Remove any remaining markers
      content = content
        .replace(/<<<<<<< HEAD/g, '')
        .replace(/=======/g, '')
        .replace(/>>>>>>> [^\n]+/g, '');

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
      
      for (const file of files) {
        if (fs.existsSync(file)) {
          fs.unlinkSync(file);
          this.log(`🗑️ Removed deleted file: ${file}`);
        }
      }
    } catch (error) {
      this.log(`Error removing deleted files: ${error.message}`);
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
      this.log('=====================================');
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

if (require.main === module) {
  const resolver = new ComprehensiveMergeConflictResolver();
  resolver.run().catch(console.error);
}

module.exports = ComprehensiveMergeConflictResolver;