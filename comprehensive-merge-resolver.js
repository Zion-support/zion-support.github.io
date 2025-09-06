#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveMergeResolver {
  constructor() {
    this.logFile = 'merge-resolution-report.json';
    this.resolvedConflicts = [];
    this.failedResolutions = [];
    this.deletedFiles = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async runCommand(command, description) {
    try {
      this.log(`Running: ${description}`);
      const result = execSync(command, { 
        encoding: 'utf8', 
        stdio: 'pipe',
        timeout: 30000 
      });
      this.log(`✅ Success: ${description}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`❌ Failed: ${description} - ${error.message}`);
      return { success: false, error: error.message, output: error.stdout || error.stderr };
    }
  }

  async resolveMergeConflicts() {
    this.log("Starting comprehensive merge conflict resolution...");
    
    // Step 1: Get list of conflicted files
    const conflictedFiles = this.getConflictedFiles();
    this.log(`Found ${conflictedFiles.length} conflicted files`);

    // Step 2: Resolve conflicts systematically
    for (const file of conflictedFiles) {
      await this.resolveFileConflicts(file);
    }

    // Step 3: Handle deleted files
    await this.handleDeletedFiles();

    // Step 4: Generate final report
    this.generateReport();

    this.log("Merge conflict resolution completed!");
  }

  getConflictedFiles() {
    try {
      const result = execSync('git status --porcelain | grep "^UU\\|^AA\\|^DD\\|^AU\\|^UA\\|^DU\\|^UD"', { encoding: 'utf8' });
      return result.trim().split('\n').filter(line => line.trim()).map(line => line.substring(3));
    } catch (error) {
      this.log("No conflicted files found or error getting status");
      return [];
    }
  }

  async resolveFileConflicts(filePath) {
    try {
      this.log(`Resolving conflicts in: ${filePath}`);
      
      if (!fs.existsSync(filePath)) {
        this.log(`File does not exist: ${filePath}`);
        return;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Remove merge conflict markers
      content = content.replace(/<<<<<<< HEAD\n/g, '');
      content = content.replace(/=======\n/g, '');
      content = content.replace(/>>>>>>> [a-f0-9]+\n/g, '');

      // Clean up any remaining conflict markers
      content = content.replace(/<<<<<<< HEAD/g, '');
      content = content.replace(/=======/g, '');
      content = content.replace(/>>>>>>> [a-f0-9]+/g, '');

      // Fix common syntax issues
      content = this.fixCommonSyntaxIssues(content);

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.resolvedConflicts.push(filePath);
        this.log(`✅ Resolved conflicts in: ${filePath}`);
      } else {
        this.log(`No changes needed for: ${filePath}`);
      }

    } catch (error) {
      this.log(`❌ Failed to resolve conflicts in ${filePath}: ${error.message}`);
      this.failedResolutions.push({ file: filePath, error: error.message });
    }
  }

  fixCommonSyntaxIssues(content) {
    // Fix trailing semicolons in type definitions
    content = content.replace(/type (\w+) = {;/, 'type $1 = {');
    
    // Fix const declarations with trailing commas
    content = content.replace(/const (\w+) = (.+?),;/, 'const $1 = $2;');
    
    // Fix missing semicolons
    content = content.replace(/([^;}])\n(\s*[})])/g, '$1;\n$2');
    
    // Fix duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanedLines = lines.filter(line => {
      if (line.trim().startsWith('import ')) {
        if (seenImports.has(line.trim())) {
          return false;
        }
        seenImports.add(line.trim());
      }
      return true;
    });
    content = cleanedLines.join('\n');
    
    // Fix empty object literals
    content = content.replace(/{\s*}/g, '{}');
    
    // Fix trailing commas in objects
    content = content.replace(/,(\s*[}\]])/g, '$1');
    
    return content;
  }

  async handleDeletedFiles() {
    try {
      // Get list of deleted files
      const result = execSync('git status --porcelain | grep "^D "', { encoding: 'utf8' });
      const deletedFiles = result.trim().split('\n').filter(line => line.trim()).map(line => line.substring(3));
      
      for (const file of deletedFiles) {
        this.log(`Handling deleted file: ${file}`);
        this.deletedFiles.push(file);
        
        // Remove from git index
        try {
          execSync(`git rm --cached "${file}"`, { stdio: 'pipe' });
          this.log(`✅ Removed from index: ${file}`);
        } catch (error) {
          this.log(`❌ Failed to remove from index: ${file}`);
        }
      }
    } catch (error) {
      this.log(`Error handling deleted files: ${error.message}`);
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalConflictedFiles: this.resolvedConflicts.length + this.failedResolutions.length,
        resolvedConflicts: this.resolvedConflicts.length,
        failedResolutions: this.failedResolutions.length,
        deletedFiles: this.deletedFiles.length
      },
      resolvedFiles: this.resolvedConflicts,
      failedFiles: this.failedResolutions,
      deletedFiles: this.deletedFiles
    };

    fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${this.logFile}`);
  }
}

// Run the resolver
if (require.main === module) {
  const resolver = new ComprehensiveMergeResolver();
  resolver.resolveMergeConflicts().catch(console.error);
}

module.exports = ComprehensiveMergeResolver;