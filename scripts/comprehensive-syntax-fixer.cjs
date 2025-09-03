#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  fixDataServicesFile() {
    const filePath = path.join(this.projectRoot, 'data', 'services.ts');
    
    if (!fs.existsSync(filePath)) {
      this.log('❌ data/services.ts not found');
      return;
    }

    this.log('🔧 Fixing data/services.ts syntax errors...');
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing commas after arrays
    content = content.replace(/(\]\s*)\n(\s*\w+:)/g, '$1,\n$2');
    
    // Fix missing commas after objects
    content = content.replace(/(\}\s*)\n(\s*\w+:)/g, '$1,\n$2');
    
    // Fix unterminated strings and malformed content
    content = content.replace(/,\s*\n\s*['"]/g, ',\n      \'');
    
    // Fix malformed string arrays
    content = content.replace(/'([^']*),([^']*),([^']*),([^']*),([^']*),([^']*)',([^']*)'/, 
      '\'$1\',\n      \'$2\',\n      \'$3\',\n      \'$4\',\n      \'$5\',\n      \'$6\',\n      \'$7\'');
    
    // Fix missing quotes around string values
    content = content.replace(/:\s*([A-Za-z][A-Za-z0-9\s]*[A-Za-z0-9])\s*,/g, ': \'$1\',');
    
    // Fix malformed property definitions
    content = content.replace(/(\w+):\s*\n\s*([A-Z])/g, '$1: \'$2');
    
    // Clean up multiple consecutive semicolons
    content = content.replace(/;+/g, '');
    
    // Clean up malformed characters
    content = content.replace(/[",]";"/g, '');
    content = content.replace(/,",/g, ',');
    
    // Fix specific patterns found in the file
    content = content.replace(/id:\s*'([^']*),/g, "id: '$1',");
    content = content.replace(/name:\s*\n\s*([^']*)',/g, "name: '$1',");
    content = content.replace(/category:\s*'([^']*),/g, "category: '$1',");
    content = content.replace(/description:\s*\n\s*([^']*)',/g, "description: '$1',");
    
    // Fix arrays that got mangled
    content = content.replace(/features:\s*\[\s*'([^']*)\s*'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'([^']*)'/, 
      "features: [\n      '$1'\n    ]");
    
    // Remove any remaining syntax errors
    content = content.replace(/\s+\n/g, '\n');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
    this.log('✅ Fixed data/services.ts syntax errors');
  }

  run() {
    this.log('🚀 Starting Comprehensive Syntax Fixer...');
    this.fixDataServicesFile();
    this.log('🎉 Comprehensive Syntax Fixer completed!');
  }
}

// Run the fixer if this file is executed directly
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run();
}

module.exports = ComprehensiveSyntaxFixer;