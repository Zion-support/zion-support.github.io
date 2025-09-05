#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class HTMLEntityFixer {
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
      '&#x7E;': '~',
      '&#x60;': '`',
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
    this.log('🚀 Starting HTML entity fix...');
    
    const filesToFix = [
      '/workspace/pages/AIServices.tsx',
      '/workspace/pages/ITServices.tsx',
      '/workspace/pages/MicroSAAS.tsx',
      '/workspace/pages/_app.tsx',
      '/workspace/pages/_document.tsx',
      '/workspace/pages/about.tsx',
      '/workspace/pages/ai-services.tsx',
      '/workspace/pages/api-docs.tsx',
      '/workspace/pages/api.tsx',
      '/workspace/pages/blog.tsx',
      '/workspace/pages/contact.tsx',
      '/workspace/pages/index.tsx',
      '/workspace/pages/pricing.tsx',
      '/workspace/pages/services.tsx'
    ];
    
    for (const file of filesToFix) {
      if (fs.existsSync(file)) {
        await this.fixFile(file);
      }
    }
    
    this.log(`\n📊 HTML Entity Fix Summary:`);
    this.log(`  - Files processed: ${filesToFix.length}`);
    this.log(`  - Files fixed: ${this.fixedFiles.length}`);
    
    this.log('\n🎉 HTML entity fix completed!');
  }
}

// Run the fixer
const fixer = new HTMLEntityFixer();
fixer.run().catch(console.error);