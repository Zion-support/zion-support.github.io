#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class MergeConflictResolver {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : type === 'WARNING' ? '⚠️' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async findFilesWithConflicts() {
    this.log('🔍 Searching for files with merge conflicts...');

    try {
      const result = execSync('grep -r "
        .replace(/
        .replace(/

      // Clean up any remaining conflict markers
      content = content
        .replace(/

      // Clean up extra whitespace and empty lines
      content = content
        .replace(/\n\s*\n\s*\n/g, '\n\n')
        .replace(/^\s+$/gm, '')
        .trim();

      fs.writeFileSync(filePath, content);
      this.fixedFiles.push(filePath);
      this.log(`✅ Fixed ${filePath}`, 'SUCCESS');
    } catch (error) {
      this.errors.push(`Failed to fix ${filePath}: ${error.message}`);
      this.log(`❌ Failed to fix ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async run() {
    this.log('🚀 Starting Merge Conflict Resolution...');
    this.log('='.repeat(60));

    // Fix specific critical files first
    this.fixNextConfig();
    this.fixSitemapGenerator();
    this.fixSearchIndexGenerator();

    // Find and fix remaining files
    const conflictedFiles = await this.findFilesWithConflicts();

    for (const file of conflictedFiles) {
      if (!this.fixedFiles.includes(file)) {
        await this.fixFile(file);
      }
    }

    // Generate report
    this.log('\n📊 MERGE CONFLICT RESOLUTION REPORT');
    this.log('='.repeat(60));
    this.log(`Files fixed: ${this.fixedFiles.length}`);
    this.log(`Errors: ${this.errors.length}`);

    if (this.fixedFiles.length > 0) {
      this.log('\n✅ Successfully fixed files:');
      this.fixedFiles.forEach(file => this.log(`  - ${file}`));
    }

    if (this.errors.length > 0) {
      this.log('\n❌ Errors encountered:');
      this.errors.forEach(error => this.log(`  - ${error}`));
    }

    // Save report
    const report = {
      timestamp: new Date().toISOString(),
      fixedFiles: this.fixedFiles,
      errors: this.errors,
      totalFixed: this.fixedFiles.length,
      totalErrors: this.errors.length
    };

    fs.writeFileSync('merge-conflict-resolution-report.json', JSON.stringify(report, null, 2));
    this.log('\n📄 Report saved to merge-conflict-resolution-report.json');

    return report;
  }
}

// Run if called directly
if (require.main === module) {
  const resolver = new MergeConflictResolver();
  resolver.run().catch(console.error);
}

module.exports = MergeConflictResolver;