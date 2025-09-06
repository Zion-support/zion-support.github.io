#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Fix remaining syntax errors in API files
 */
class SyntaxErrorFixer {
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
      
      // Fix missing closing braces at end of files
      if (!content.trim().endsWith('}')) {
        // Check if it's a function that needs closing
        const lines = content.split('\n');
        const lastNonEmptyLine = lines.filter(line => line.trim()).pop();
        
        if (lastNonEmptyLine && (
          lastNonEmptyLine.includes('return res.status') ||
          lastNonEmptyLine.includes('res.status') ||
          lastNonEmptyLine.includes('} catch') ||
          lastNonEmptyLine.includes('} else')
        )) {
          content += '\n}';
          modified = true;
        }
      }
      
      // Fix missing closing braces in function bodies
      content = content.replace(/(\s+return res\.status\([^)]+\);\s*)(\n\s*)(\w)/g, '$1\n  }\n\n  $3');
      
      // Fix missing closing braces after catch blocks
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
    this.log('🔧 Starting syntax error fixing...');
    
    const filesToFix = [
      '/workspace/pages/api/admin/partners/update.ts',
      '/workspace/pages/api/admin/pitch/add-slide.ts',
      '/workspace/pages/api/admin/pitch/export.ts',
      '/workspace/pages/api/admin/pitch/generate.ts',
      '/workspace/pages/api/admin/pitch/metrics.ts'
    ];
    
    let fixedCount = 0;
    
    for (const file of filesToFix) {
      if (fs.existsSync(file)) {
        if (this.fixFile(file)) {
          fixedCount++;
        }
      }
    }
    
    this.log(`🎉 Syntax error fixing completed!`, 'SUCCESS');
    this.log(`📊 Summary: ${fixedCount}/${filesToFix.length} files fixed`);
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new SyntaxErrorFixer();
  fixer.fixAllFiles().catch(console.error);
}

module.exports = SyntaxErrorFixer;
