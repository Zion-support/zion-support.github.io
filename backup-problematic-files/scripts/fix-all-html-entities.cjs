#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AllHTMLEntityFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`);
  }

  fixHTMLEntities(content) {
    // Common HTML entities that need to be converted back
    const entityMap = {
      '&quot;': '"',
      '&apos;': "'",
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&nbsp;': ' ',
      '&#39;': "'",
      '&#x27;': "'",
      '&#x2F;': '/',
      '&#x60;': '`',
      '&#x3D;': '=',
      '&#x3C;': '<',
      '&#x3E;': '>',
      '&#x2B;': '+',
      '&#x2D;': '-',
      '&#x2A;': '*',
      '&#x5C;': '\\',
      '&#x7C;': '|',
      '&#x7B;': '{',
      '&#x7D;': '}',
      '&#x5B;': '[',
      '&#x5D;': ']',
      '&#x28;': '(',
      '&#x29;': ')',
      '&#x21;': '!',
      '&#x40;': '@',
      '&#x23;': '#',
      '&#x24;': '$',
      '&#x25;': '%',
      '&#x5E;': '^',
      '&#x26;': '&',
      '&#x2E;': '.',
      '&#x2C;': ',',
      '&#x3A;': ':',
      '&#x3B;': ';',
      '&#x3F;': '?',
      '&#x2F;': '/',
      '&#x5F;': '_',
      '&#x2D;': '-',
      '&#x3D;': '=',
      '&#x2B;': '+',
      '&#x7E;': '~'
    };

    let fixedContent = content;
    
    // Replace HTML entities
    for (const [entity, replacement] of Object.entries(entityMap)) {
      const regex = new RegExp(entity, 'g');
      fixedContent = fixedContent.replace(regex, replacement);
    }
    
    return fixedContent;
  }

  async findFilesWithEntities() {
    this.log('🔍 Finding files with HTML entities...');
    
    try {
      const result = execSync('grep -r "&quot;\\|&apos;\\|&amp;\\|&lt;\\|&gt;" pages/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" | cut -d: -f1 | sort | uniq', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      });
      
      const files = result.trim().split('\n').filter(file => file.length > 0);
      this.log(`Found ${files.length} files with HTML entities`);
      return files;
    } catch (error) {
      this.log('No files found with HTML entities or error occurred', 'WARN');
      return [];
    }
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = this.fixHTMLEntities(content);
      
      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed HTML entities in: ${path.relative(this.projectRoot, filePath)}`);
        return true;
      }
      return false;
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async run() {
    this.log('🚀 Starting comprehensive HTML entity fix...');
    
    try {
      const files = await this.findFilesWithEntities();
      
      for (const file of files) {
        await this.fixFile(file);
      }
      
      this.log(`\n📊 HTML Entity Fix Summary:`);
      this.log(`  - Files processed: ${files.length}`);
      this.log(`  - Files fixed: ${this.fixedFiles.length}`);
      
      this.log('\n🎉 Comprehensive HTML entity fix completed!');
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the fixer
const fixer = new AllHTMLEntityFixer();
fixer.run().catch(console.error);