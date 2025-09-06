#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ImportPathsFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type}] ${message}`);
  }

  async fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix Layout import paths for nested directories
      if (filePath.includes('/industries/') || filePath.includes('/solutions/') || filePath.includes('/services/')) {
        if (content.includes("import Layout from '../components/Layout'")) {
          content = content.replace("import Layout from '../components/Layout'", "import Layout from '../../components/Layout'");
          modified = true;
        }
      }
      
      // Fix duplicate Image imports
      const imageImportRegex = /import Image from 'next\/image';\s*import.*Image.*from 'lucide-react'/g;
      if (imageImportRegex.test(content)) {
        content = content.replace(/import Image from 'next\/image';\s*/, '');
        modified = true;
      }
      
      // Fix duplicate semicolons
      content = content.replace(/;;/g, ';');
      if (content.includes(';;')) {
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed import paths in: ${path.relative(this.projectRoot, filePath)}`);
        return true;
      }
      return false;
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async findFilesToFix() {
    this.log('🔍 Finding files that need import path fixes...');
    
    const pagesDir = path.join(this.projectRoot, 'pages');
    const files = [];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
            files.push(fullPath);
          }
        }
      } catch (err) {
        // Skip directories that can't be accessed
      }
    };
    
    scanDirectory(pagesDir);
    this.log(`Found ${files.length} files to check`);
    return files;
  }

  async run() {
    this.log('🚀 Starting import paths fix...');
    
    try {
      const files = await this.findFilesToFix();
      
      for (const file of files) {
        await this.fixFile(file);
      }
      
      this.log(`\n📊 Import Paths Fix Summary:`);
      this.log(`  - Files processed: ${files.length}`);
      this.log(`  - Files fixed: ${this.fixedFiles.length}`);
      
      this.log('\n🎉 Import paths fix completed!');
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the fixer
const fixer = new ImportPathsFixer();
fixer.run().catch(console.error);