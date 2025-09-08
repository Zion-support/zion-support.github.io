#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveConflictResolver {
  constructor(rootPath = '/workspace') {
    this.rootPath = rootPath;
    this.resolvedFiles = [];
    this.failedFiles = [];
    this.logFile = path.join(this.rootPath, 'conflict-resolution.log');
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
      this.log(`✅ Success: ${description}`);
      return output;
    } catch (error) {
      this.log(`❌ Error in ${description}: ${error.message}`);
      throw error;
    }
  }

  async getConflictedFiles() {
    try {
      const statusOutput = await this.runCommand('git status --porcelain', 'Get git status');
      const conflictedFiles = statusOutput
        .split('\n')
        .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
        .map(line => line.split(' ').pop());
      
      this.log(`📄 Found ${conflictedFiles.length} conflicted files`);
      return conflictedFiles;
    } catch (error) {
      this.log(`❌ Failed to get conflicted files: ${error.message}`);
      return [];
    }
  }

  async resolveFileConflicts(filePath) {
    try {
      this.log(`🔧 Resolving conflicts in: ${filePath}`);
      
      if (!fs.existsSync(filePath)) {
        this.log(`⚠️ File does not exist, skipping: ${filePath}`);
        return true;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if file has conflict markers
      if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
        this.log(`✅ No conflicts in: ${filePath}`);
        return true;
      }

      let resolvedContent = content;
      
      // Strategy 1: For temp_exclude files, prefer deletion (HEAD version)
      if (filePath.includes('temp_exclude/')) {
        this.log(`🗑️ Removing temp_exclude file: ${filePath}`);
        try {
          fs.unlinkSync(filePath);
          await this.runCommand(`git rm "${filePath}"`, `Remove temp_exclude file: ${filePath}`);
          this.resolvedFiles.push(filePath);
          return true;
        } catch (error) {
          this.log(`⚠️ Could not remove temp_exclude file: ${error.message}`);
        }
      }

      // Strategy 2: For modify/delete conflicts, prefer the current version (HEAD)
      if (content.includes('CONFLICT (modify/delete)')) {
        this.log(`🗑️ Resolving modify/delete conflict by keeping HEAD version: ${filePath}`);
        try {
          fs.unlinkSync(filePath);
          await this.runCommand(`git rm "${filePath}"`, `Remove file in modify/delete conflict: ${filePath}`);
          this.resolvedFiles.push(filePath);
          return true;
        } catch (error) {
          this.log(`⚠️ Could not remove file in modify/delete conflict: ${error.message}`);
        }
      }

      // Strategy 3: For content conflicts, prefer HEAD version (our main branch)
      resolvedContent = content
        // Remove conflict markers and keep the HEAD version
        .replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
        // Handle cases where there's no HEAD section
        .replace(/<<<<<<< [^\n]+\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$2')
        // Clean up any remaining conflict markers
        .replace(/<<<<<<< [^\n]+\n/g, '')
        .replace(/=======\n/g, '')
        .replace(/>>>>>>> [^\n]+\n/g, '');

      // Check if we actually resolved anything
      if (resolvedContent === content) {
        this.log(`⚠️ No changes made to: ${filePath}`);
        return false;
      }

      // Write the resolved content
      fs.writeFileSync(filePath, resolvedContent);
      this.resolvedFiles.push(filePath);
      this.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;

    } catch (error) {
      this.log(`❌ Failed to resolve conflicts in ${filePath}: ${error.message}`);
      this.failedFiles.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async resolveAllConflicts() {
    this.log('🚀 Starting comprehensive conflict resolution');
    
    // Get all conflicted files
    const conflictedFiles = await this.getConflictedFiles();
    
    if (conflictedFiles.length === 0) {
      this.log('ℹ️ No conflicted files found');
      return;
    }

    this.log(`🎯 Processing ${conflictedFiles.length} conflicted files`);
    
    // Process files in batches
    const batchSize = 50;
    for (let i = 0; i < conflictedFiles.length; i += batchSize) {
      const batch = conflictedFiles.slice(i, i + batchSize);
      this.log(`📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(conflictedFiles.length / batchSize)}`);
      
      for (const file of batch) {
        try {
          await this.resolveFileConflicts(file);
        } catch (error) {
          this.log(`❌ Critical error resolving ${file}: ${error.message}`);
          this.failedFiles.push({ file, error: error.message });
        }
      }
      
      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Add all resolved files
    if (this.resolvedFiles.length > 0) {
      await this.runCommand('git add .', 'Add all resolved files');
    }

    this.generateReport();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: this.resolvedFiles.length + this.failedFiles.length,
        resolvedFiles: this.resolvedFiles.length,
        failedFiles: this.failedFiles.length,
        successRate: `${((this.resolvedFiles.length / (this.resolvedFiles.length + this.failedFiles.length)) * 100).toFixed(2)}%`
      },
      resolvedFiles: this.resolvedFiles,
      failedFiles: this.failedFiles
    };
    
    const reportFile = path.join(this.rootPath, 'conflict-resolution-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log('\n📊 CONFLICT RESOLUTION REPORT');
    this.log('=' .repeat(50));
    this.log(`Total files processed: ${report.summary.totalFiles}`);
    this.log(`Successfully resolved: ${report.summary.resolvedFiles}`);
    this.log(`Failed to resolve: ${report.summary.failedFiles}`);
    this.log(`Success rate: ${report.summary.successRate}`);
    this.log(`Report saved to: ${reportFile}`);
    
    if (this.failedFiles.length > 0) {
      this.log('\n❌ Failed files:');
      this.failedFiles.forEach(({ file, error }) => {
        this.log(`  - ${file}: ${error}`);
      });
    }
  }

  async run() {
    try {
      await this.resolveAllConflicts();
    } catch (error) {
      this.log(`💥 Critical error in conflict resolver: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the resolver
const resolver = new ComprehensiveConflictResolver();
resolver.run().catch(console.error);