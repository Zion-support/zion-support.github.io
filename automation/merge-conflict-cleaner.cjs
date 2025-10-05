#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

console.log('🧹 Starting Merge Conflict Cleaner...');

class MergeConflictCleaner {
  constructor() {
    this.reportsDir = './automation-reports';
    this.cleanedFiles = [];
    this.errors = [];
  }

  ensureDirectories() {
    if (!fs.existsSync(this.reportsDir)) {
      fs.mkdirSync(this.reportsDir, { recursive: true });
    }
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async runCommand(command, description) {
    return new Promise((resolve, reject) => {
      this.log(`🚀 ${description}`);
      exec(command, { timeout: 60000 }, (error, stdout, stderr) => {
        if (error) {
          this.log(`❌ Failed: ${description} - ${error.message}`);
          reject(error);
        } else {
          this.log(`✅ Success: ${description}`);
          resolve({ stdout, stderr });
        }
      });
    });
  }

  async run() {
    this.log('🎯 Starting merge conflict cleanup process...');
    this.ensureDirectories();

    try {
      // Phase 1: Find files with merge conflicts
      await this.findConflictedFiles();
      
      // Phase 2: Clean merge conflicts
      await this.cleanMergeConflicts();
      
      // Phase 3: Fix common syntax issues
      await this.fixCommonIssues();
      
      // Phase 4: Validate fixes
      await this.validateFixes();
      
      // Generate report
      await this.generateReport();
      
      this.log('🎉 Merge conflict cleanup completed successfully!');
    } catch (error) {
      this.log(`❌ Merge conflict cleanup failed: ${error.message}`);
      this.errors.push(error.message);
    }
  }

  async findConflictedFiles() {
    this.log('🔍 Finding files with merge conflicts...');
    
    try {
      const result = await this.runCommand('git diff --name-only --diff-filter=U', 'Find conflicted files');
      this.conflictedFiles = result.stdout.trim().split('\n').filter(file => file.length > 0);
      this.log(`Found ${this.conflictedFiles.length} conflicted files`);
    } catch (error) {
      this.log('No merge conflicts found or git command failed');
      this.conflictedFiles = [];
    }
  }

  async cleanMergeConflicts() {
    this.log('🧹 Cleaning merge conflicts...');
    
    // Find all files with merge conflict markers
    const filesWithConflicts = await this.findFilesWithConflictMarkers();
    
    for (const file of filesWithConflicts) {
      try {
        await this.cleanFileConflicts(file);
        this.cleanedFiles.push(file);
      } catch (error) {
        this.log(`❌ Failed to clean ${file}: ${error.message}`);
        this.errors.push(`Failed to clean ${file}: ${error.message}`);
      }
    }
  }

  async findFilesWithConflictMarkers() {
    const files = [];
    const extensions = ['.js', '.ts', '.tsx', '.jsx', '.json', '.md', '.yml', '.yaml'];
    
    const searchDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          searchDir(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (content.includes('
                files.push(fullPath);
              }
            } catch (error) {
              // Skip files that can't be read
            }
          }
        }
      }
    };
    
    searchDir('.');
    return files;
  }

  async cleanFileConflicts(filePath) {
    this.log(`🧹 Cleaning conflicts in ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(
      /
      '$1'
    );
    
    // Clean up any remaining markers
    content = content.replace(/
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      this.log(`✅ Cleaned conflicts in ${filePath}`);
    }
  }

  async fixCommonIssues() {
    this.log('🔧 Fixing common syntax issues...');
    
    // Fix common JSON issues
    await this.fixJSONFiles();
    
    // Fix common JavaScript/TypeScript issues
    await this.fixJSFiles();
  }

  async fixJSONFiles() {
    const jsonFiles = await this.findFilesByExtension('.json');
    
    for (const file of jsonFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const parsed = JSON.parse(content);
        const fixed = JSON.stringify(parsed, null, 2);
        fs.writeFileSync(file, fixed, 'utf8');
        this.log(`✅ Fixed JSON formatting in ${file}`);
      } catch (error) {
        // Skip invalid JSON files
      }
    }
  }

  async fixJSFiles() {
    const jsFiles = await this.findFilesByExtension(['.js', '.ts', '.tsx', '.jsx']);
    
    for (const file of jsFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        const originalContent = content;
        
        // Fix common issues
        content = content.replace(/,\s*}/g, '}');
        content = content.replace(/,\s*]/g, ']');
        content = content.replace(/;\s*;/g, ';');
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          this.log(`✅ Fixed common issues in ${file}`);
        }
      } catch (error) {
        // Skip files that can't be processed
      }
    }
  }

  async findFilesByExtension(extensions) {
    const files = [];
    const extArray = Array.isArray(extensions) ? extensions : [extensions];
    
    const searchDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          searchDir(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extArray.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    };
    
    searchDir('.');
    return files;
  }

  async validateFixes() {
    this.log('✅ Validating fixes...');
    
    try {
      // Try to parse package.json
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      this.log('✅ package.json is valid');
    } catch (error) {
      this.log(`❌ package.json validation failed: ${error.message}`);
      this.errors.push(`package.json validation failed: ${error.message}`);
    }
  }

  async generateReport() {
    this.log('📊 Generating cleanup report...');
    
    const report = {
      timestamp: new Date().toISOString();
      cleanedFiles: this.cleanedFiles;
      errors: this.errors;
      summary: {
        totalFilesCleaned: this.cleanedFiles.length;
        totalErrors: this.errors.length;
        successRate: this.cleanedFiles.length / (this.cleanedFiles.length + this.errors.length) * 100
      }
    };

    const reportPath = path.join(this.reportsDir, 'merge-conflict-cleanup-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`📊 Report saved to: ${reportPath}`);
  }
}

// Run the cleaner if called directly
if (require.main === module) {
  const cleaner = new MergeConflictCleaner();
  cleaner.run().catch(console.error);
}

module.exports = MergeConflictCleaner;