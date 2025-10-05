#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveConflictResolver {
  constructor() {
    this.resolvedFiles = [];
    this.failedFiles = [];
    this.logFile = 'comprehensive-conflict-resolution.log';
    this.startTime = Date.now();
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
    // More aggressive conflict resolution
    let resolved = content;
    
    // Remove all merge conflict markers and keep HEAD version
    resolved = resolved.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Handle cases where there might be missing separators
    resolved = resolved.replace(/<<<<<<< HEAD\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Clean up any remaining conflict markers
    resolved = resolved.replace(/<<<<<<< HEAD\n/g, '');
    resolved = resolved.replace(/=======\n/g, '');
    resolved = resolved.replace(/>>>>>>> [^\n]+\n/g, '');

    return resolved;
  }

  fixSyntaxErrors(content) {
    // Comprehensive syntax fixes
    let fixed = content;
    
    // Fix function declarations
    fixed = fixed.replace(/const\s+(\w+):\s*React\.FC:\s*\(\s*\)\s*=>\s*{,,,/g, 'const $1: React.FC = () => {');
    fixed = fixed.replace(/(\w+):\s*\(\s*\)\s*=>\s*{,,,/g, '$1: () => {');
    fixed = fixed.replace(/(\w+):\s*React\.FC:\s*\(\s*\)\s*=>\s*{,,,/g, '$1: React.FC = () => {');
    
    // Fix JSX syntax
    fixed = fixed.replace(/className="([^"]*)"([^>]*>)/g, 'className="$1"$2');
    fixed = fixed.replace(/className=\s*"([^"]*)"\s*>/g, 'className="$1">');
    fixed = fixed.replace(/className=\s*"([^"]*)"\s*([^>]*>)/g, 'className="$1"$2');
    
    // Fix malformed quotes and strings
    fixed = fixed.replace(/"([^"]*)",",/g, '"$1",');
    fixed = fixed.replace(/",",/g, '",');
    fixed = fixed.replace(/"([^"]*)",",/g, '"$1",');
    
    // Fix missing closing brackets and parentheses
    fixed = fixed.replace(/<div\s+className="([^"]*)"\s*([^>]*?)>/g, '<div className="$1"$2>');
    fixed = fixed.replace(/<section\s+className="([^"]*)"\s*([^>]*?)>/g, '<section className="$1"$2>');
    fixed = fixed.replace(/<h1\s+className="([^"]*)"\s*([^>]*?)>/g, '<h1 className="$1"$2>');
    fixed = fixed.replace(/<h2\s+className="([^"]*)"\s*([^>]*?)>/g, '<h2 className="$1"$2>');
    fixed = fixed.replace(/<h3\s+className="([^"]*)"\s*([^>]*?)>/g, '<h3 className="$1"$2>');
    fixed = fixed.replace(/<p\s+className="([^"]*)"\s*([^>]*?)>/g, '<p className="$1"$2>');
    
    // Fix malformed JSX attributes
    fixed = fixed.replace(/(\w+)=\s*"([^"]*)"\s*([^>]*>)/g, '$1="$2"$3');
    
    // Clean up extra semicolons, commas, and syntax issues
    fixed = fixed.replace(/;+/g, ';');
    fixed = fixed.replace(/,+/g, ',');
    fixed = fixed.replace(/,\s*}/g, '}');
    fixed = fixed.replace(/,\s*]/g, ']');
    fixed = fixed.replace(/,\s*\)/g, ')');
    
    // Fix import statements
    fixed = fixed.replace(/import\s+React\s+from\s+'react';\s*;/g, "import React from 'react';");
    
    // Fix export statements
    fixed = fixed.replace(/export\s+default\s+(\w+);\s*;/g, 'export default $1;');

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
    
    // Process files in batches to avoid overwhelming the system
    const batchSize = 20;
    for (let i = 0; i < files.length; i += batchSize) {
      const batch = files.slice(i, i + batchSize);
      this.log(`📦 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(files.length / batchSize)} (${batch.length} files)`);
      
      for (const file of batch) {
        await this.resolveFile(file);
      }
      
      // Small delay between batches
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    this.generateReport();
    return this.failedFiles.length === 0;
  }

  generateReport() {
    const endTime = Date.now();
    const duration = ((endTime - this.startTime) / 1000).toFixed(2);
    
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration} seconds`,
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

    const reportFile = 'comprehensive-conflict-resolution-report.json';
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log('\n📊 COMPREHENSIVE CONFLICT RESOLUTION REPORT');
    this.log('=' .repeat(60));
    this.log(`Duration: ${duration} seconds`);
    this.log(`Total files processed: ${report.summary.totalFiles}`);
    this.log(`Successfully resolved: ${report.summary.resolvedFiles}`);
    this.log(`Failed to resolve: ${report.summary.failedFiles}`);
    this.log(`Success rate: ${report.summary.successRate}`);
    this.log(`Report saved to: ${reportFile}`);

    if (this.failedFiles.length > 0) {
      this.log('\n❌ Failed files:');
      this.failedFiles.slice(0, 10).forEach(({ file, error }) => {
        this.log(`  - ${file}: ${error}`);
      });
      if (this.failedFiles.length > 10) {
        this.log(`  ... and ${this.failedFiles.length - 10} more (see report for details)`);
      }
    }
  }

  async commitChanges() {
    try {
      this.log('💾 Committing resolved changes...');
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "🔧 Resolve all merge conflicts and fix syntax errors comprehensively"', { stdio: 'inherit' });
      this.log('✅ Changes committed successfully');
      return true;
    } catch (error) {
      this.log(`❌ Failed to commit changes: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log('🚀 Starting comprehensive conflict resolution process...');
    
    const success = await this.resolveAllConflicts();
    
    if (success) {
      await this.commitChanges();
      this.log('🎉 Comprehensive conflict resolution completed successfully!');
    } else {
      this.log('⚠️ Some conflicts could not be resolved automatically');
      this.log('📋 Manual intervention may be required for some files');
    }
  }
}

// Run the resolver
const resolver = new ComprehensiveConflictResolver();
resolver.run().catch(console.error);