#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class DuplicateImportsFixer {
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
      
      // Find import statements from lucide-react
      const importRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/g;
      const matches = content.match(importRegex);
      
      if (matches) {
        for (const match of matches) {
          // Extract the imports
          const importsMatch = match.match(/{\s*([^}]+)\s*}/);
          if (importsMatch) {
            const imports = importsMatch[1].split(',').map(imp => imp.trim());
            const uniqueImports = [...new Set(imports)];
            
            if (imports.length !== uniqueImports.length) {
              const newImportStatement = `import { ${uniqueImports.join(', ')} } from 'lucide-react'`;
              content = content.replace(match, newImportStatement);
              modified = true;
            }
          }
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed duplicate imports in: ${path.relative(this.projectRoot, filePath)}`);
        return true;
      }
      return false;
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async findFilesWithDuplicates() {
    this.log('🔍 Finding files with duplicate imports...');
    
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
    this.log('🚀 Starting duplicate imports fix...');
    
    try {
      const files = await this.findFilesWithDuplicates();
      
      for (const file of files) {
        await this.fixFile(file);
      }
      
      this.log(`\n📊 Duplicate Imports Fix Summary:`);
      this.log(`  - Files processed: ${files.length}`);
      this.log(`  - Files fixed: ${this.fixedFiles.length}`);
      
      this.log('\n🎉 Duplicate imports fix completed!');
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the fixer
const fixer = new DuplicateImportsFixer();
fixer.run().catch(console.error);