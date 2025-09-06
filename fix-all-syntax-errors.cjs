#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Comprehensive syntax error fixer
 */
class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixFile(filePath) {
    try {
      this.log(`Fixing: ${filePath}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Count opening and closing braces
      const openBraces = (content.match(/\{/g) || []).length;
      const closeBraces = (content.match(/\}/g) || []).length;
      
      if (openBraces > closeBraces) {
        const missingBraces = openBraces - closeBraces;
        content += '\n' + '}'.repeat(missingBraces);
        modified = true;
        this.log(`Added ${missingBraces} missing closing braces`);
      }
      
      // Fix common patterns
      content = content.replace(/(\s+return res\.status\([^)]+\);\s*)(\n\s*)(\w)/g, '$1\n  }\n\n  $3');
      content = content.replace(/(\s+} catch \([^)]+\) \{\s*\n\s*return res\.status\([^)]+\);\s*\n\s*\}\s*)(\n\s*)(\w)/g, '$1\n}\n\n$3');
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`, 'SUCCESS');
        return true;
      }
      
      return false;
    } catch (error) {
      this.log(`❌ Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixAllFiles() {
    this.log('🔧 Starting comprehensive syntax error fixing...');
    
    // Find all TypeScript files in pages/api
    const apiDir = path.join(this.projectRoot, 'pages', 'api');
    const files = this.findTsFiles(apiDir);
    
    let fixedCount = 0;
    
    for (const file of files) {
      if (this.fixFile(file)) {
        fixedCount++;
      }
    }
    
    this.log(`🎉 Comprehensive syntax error fixing completed!`, 'SUCCESS');
    this.log(`📊 Summary: ${fixedCount}/${files.length} files fixed`);
  }

  findTsFiles(dir) {
    const files = [];
    
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.findTsFiles(fullPath));
      } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
    
    return files;
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.fixAllFiles().catch(console.error);
}

module.exports = ComprehensiveSyntaxFixer;