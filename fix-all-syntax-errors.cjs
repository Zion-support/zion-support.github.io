#!/usr/bin/env node

<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
const { execSync } = require('child_process');

function findFilesWithSyntaxErrors() {
  const files = [];
  
  function walkDir(dir) {
=======

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
    
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
<<<<<<< HEAD
        // Skip node_modules and other directories
        if (!['node_modules', '.next', '.git', 'dist', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir('/workspace');
  return files;
}

function fixSyntaxErrorsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix import statements with trailing commas
    const importFix = content.replace(/import\s+([^;]+),\s*$/gm, 'import $1;');
    if (importFix !== content) {
      content = importFix;
      modified = true;
    }
    
    // Fix export statements with trailing commas
    const exportFix = content.replace(/export\s+([^;]+),\s*$/gm, 'export $1;');
    if (exportFix !== content) {
      content = exportFix;
      modified = true;
    }
    
    // Fix type definitions with missing commas
    const typeFix = content.replace(/export type (\w+) = \{/g, 'export type $1 = {');
    if (typeFix !== content) {
      content = typeFix;
      modified = true;
    }
    
    // Fix missing semicolons after statements
    const semicolonFix = content.replace(/([^;}])\s*$/gm, '$1;');
    if (semicolonFix !== content) {
      content = semicolonFix;
      modified = true;
    }
    
    // Fix specific syntax errors
    const fixes = [
      // Fix missing comma in type definitions
      { pattern: /Omit<Toast 'id'>/g, replacement: "Omit<Toast, 'id'>" },
      // Fix missing semicolons in imports
      { pattern: /import\s+([^;]+),\s*$/gm, replacement: 'import $1;' },
      // Fix missing semicolons in exports
      { pattern: /export\s+([^;]+),\s*$/gm, replacement: 'export $1;' },
      // Fix missing semicolons after statements
      { pattern: /(\w+)\s*$/gm, replacement: '$1;' },
    ];
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

function main() {
  console.log('🔧 Starting comprehensive syntax error fix...');
  
  const files = findFilesWithSyntaxErrors();
  console.log(`Found ${files.length} files to check`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixSyntaxErrorsInFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`🎉 Fixed syntax errors in ${fixedCount} files`);
}

main();
=======
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
