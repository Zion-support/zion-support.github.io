#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class MissingImportsFixer {
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
      
      // Find all icon references in the file
      const iconMatches = content.match(/icon:\s*([A-Z][a-zA-Z0-9]+)/g);
      if (iconMatches) {
        const icons = iconMatches.map(match => match.replace('icon: ', ''));
        
        // Check if there's already an import statement
        const hasImport = content.includes('from \'lucide-react\'');
        
        if (hasImport) {
          // Extract existing imports
          const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
          if (importMatch) {
            const existingImports = importMatch[1].split(',').map(imp => imp.trim());
            const newImports = [...new Set([...existingImports, ...icons])];
            const newImportStatement = `import { ${newImports.join(', ')} } from 'lucide-react';`;
            content = content.replace(importMatch[0], newImportStatement);
            modified = true;
          }
        } else {
          // Add new import statement at the top
          const newImportStatement = `import { ${icons.join(', ')} } from 'lucide-react';\n\n`;
          content = newImportStatement + content;
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed missing imports in: ${path.relative(this.projectRoot, filePath)}`);
        return true;
      }
      return false;
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async findFilesWithMissingImports() {
    this.log('🔍 Finding files with missing imports...');
    
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
    this.log('🚀 Starting missing imports fix...');
    
    try {
      const files = await this.findFilesWithMissingImports();
      
      for (const file of files) {
        await this.fixFile(file);
      }
      
      this.log(`\n📊 Missing Imports Fix Summary:`);
      this.log(`  - Files processed: ${files.length}`);
      this.log(`  - Files fixed: ${this.fixedFiles.length}`);
      
      this.log('\n🎉 Missing imports fix completed!');
      
    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the fixer
const fixer = new MissingImportsFixer();
fixer.run().catch(console.error);