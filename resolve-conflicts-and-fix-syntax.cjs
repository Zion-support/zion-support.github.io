#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ConflictResolver {
  constructor() {
    this.resolvedFiles = [];
    this.failedFiles = [];
    this.logFile = 'conflict-resolution.log';
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    fs.appendFileSync(this.logFile, logMessage + '\n');
    console.log(logMessage);
  }

  async findFilesWithConflicts() {
    this.log('🔍 Searching for files with merge conflicts...');
    
    try {
      const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | xargs grep -l "<<<<<<< HEAD"', { 
        encoding: 'utf8',
        stdio: 'pipe'
      });
      
      const files = result.trim().split('\n').filter(f => f.length > 0);
      this.log(`📋 Found ${files.length} files with merge conflicts`);
      return files;
    } catch (error) {
      this.log('ℹ️ No files with merge conflicts found');
      return [];
    }
  }

  resolveConflicts(content) {
    // Remove merge conflict markers and keep the HEAD version (our main branch)
    let resolved = content
      // Handle standard merge conflict markers
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
      // Handle cases where there might be missing separators
      .replace(/<<<<<<< HEAD\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1')
      // Clean up any remaining conflict markers
      .replace(/<<<<<<< HEAD\n/g, '')
      .replace(/=======\n/g, '')
      .replace(/>>>>>>> [^\n]+\n/g, '');

    return resolved;
  }

  fixSyntaxErrors(content) {
    // Fix common syntax errors
    let fixed = content
      // Fix missing closing brackets/parentheses
      .replace(/(\w+):\s*\(\s*\)\s*=>\s*{,,,/g, '$1: () => {')
      .replace(/const\s+(\w+):\s*React\.FC:\s*\(\s*\)\s*=>\s*{,,,/g, 'const $1: React.FC = () => {')
      // Fix malformed className attributes
      .replace(/className="([^"]*)"([^>]*>)/g, 'className="$1"$2')
      .replace(/className=\s*"([^"]*)"\s*>/g, 'className="$1">')
      // Fix malformed quotes in strings
      .replace(/"([^"]*)",",/g, '"$1",')
      .replace(/",",/g, '",')
      // Fix missing closing tags
      .replace(/<div\s+className="([^"]*)"\s*([^>]*?)>/g, '<div className="$1"$2>')
      // Fix malformed JSX attributes
      .replace(/(\w+)=\s*"([^"]*)"\s*([^>]*>)/g, '$1="$2"$3')
      // Clean up extra semicolons and commas
      .replace(/;+/, ';')
      .replace(/,+/g, ',')
      .replace(/,\s*}/g, '}');

    return fixed;
  }

  async resolveFile(filePath) {
    try {
      this.log(`🔧 Resolving conflicts in: ${filePath}`);
      
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Resolve merge conflicts
      let resolvedContent = this.resolveConflicts(content);
      
      // Fix syntax errors
      resolvedContent = this.fixSyntaxErrors(resolvedContent);
      
      // Write the resolved content back
      fs.writeFileSync(filePath, resolvedContent);
      
      this.resolvedFiles.push(filePath);
      this.log(`✅ Successfully resolved: ${filePath}`);
      
      return true;
    } catch (error) {
      this.log(`❌ Failed to resolve ${filePath}: ${error.message}`);
      this.failedFiles.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async resolveAllConflicts() {
    const files = await this.findFilesWithConflicts();
    
    if (files.length === 0) {
      this.log('✅ No files with conflicts found');
      return true;
    }

    this.log(`🔄 Resolving conflicts in ${files.length} files...`);
    
    for (const file of files) {
      await this.resolveFile(file);
    }

    this.generateReport();
    return this.failedFiles.length === 0;
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFiles: this.resolvedFiles.length + this.failedFiles.length,
        resolvedFiles: this.resolvedFiles.length,
        failedFiles: this.failedFiles.length,
        successRate: this.resolvedFiles.length + this.failedFiles.length > 0 
          ? `${((this.resolvedFiles.length / (this.resolvedFiles.length + this.failedFiles.length)) * 100).toFixed(2)}%`
          : '100%'
      },
      resolvedFiles: this.resolvedFiles,
      failedFiles: this.failedFiles
    };

    const reportFile = 'conflict-resolution-report.json';
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

  async commitChanges() {
    try {
      this.log('💾 Committing resolved changes...');
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "🔧 Resolve merge conflicts and fix syntax errors"', { stdio: 'inherit' });
      this.log('✅ Changes committed successfully');
      return true;
    } catch (error) {
      this.log(`❌ Failed to commit changes: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log('🚀 Starting conflict resolution process...');
    
    const success = await this.resolveAllConflicts();
    
    if (success) {
      await this.commitChanges();
      this.log('🎉 Conflict resolution completed successfully!');
    } else {
      this.log('⚠️ Some conflicts could not be resolved automatically');
    }
  }
}

// Run the resolver
const resolver = new ConflictResolver();
resolver.run().catch(console.error);