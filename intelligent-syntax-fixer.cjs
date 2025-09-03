#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class IntelligentSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;
      let hasChanges = false;

      // Fix missing commas in object literals
      fixedContent = fixedContent.replace(/(\w+):\s*([^,}\n]+)(\n\s*[^,}])/g, '$1: $2,$3');
      
      // Fix missing commas in style objects
      fixedContent = fixedContent.replace(/(\w+):\s*'([^']+)'(\s+[a-z])/g, '$1: \'$2\',$3');
      
      // Fix missing commas in interface properties
      fixedContent = fixedContent.replace(/(\w+):\s*([^,;\n]+);,/g, '$1: $2;');
      
      // Fix missing commas in array elements
      fixedContent = fixedContent.replace(/(\w+):\s*'([^']+)'(\s*[^,}\n])/g, '$1: \'$2\',$3');

      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        hasChanges = true;
      }

      return hasChanges;
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  async run() {
    this.log('🚀 Starting intelligent syntax fixing...');

    const files = [
      'pages/_app.tsx',
      'pages/services-catalog.tsx', 
      'pages/services.tsx',
      'components/Layout.tsx'
    ];

    files.forEach(file => {
      if (fs.existsSync(file)) {
        this.fixFile(file);
      }
    });

    this.log(`✅ Fixed ${this.fixedFiles.length} files`);
    return { fixedFiles: this.fixedFiles };
  }
}

const fixer = new IntelligentSyntaxFixer();
fixer.run().then(() => {
  console.log("✅ Intelligent syntax fixing completed");
  process.exit(0);
}).catch(error => {
  console.error("❌ Intelligent syntax fixing failed:", error.message);
  process.exit(1);
});