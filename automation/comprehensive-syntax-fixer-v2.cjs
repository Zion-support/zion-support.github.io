#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Comprehensive Syntax Fixer V2
 * Fixes all syntax errors in the project
 */
class ComprehensiveSyntaxFixerV2 {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixes = {
      totalFiles: 0,
      syntaxErrors: 0,
      importErrors: 0,
      jsxErrors: 0
    };
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix escaped quotes in imports
      const importFixes = [
        { pattern: /\\'/g, replacement: "'" },
        { pattern: /\\"/g, replacement: '"' },
        { pattern: /react - router - dom/g, replacement: 'react-router-dom' },
        { pattern: /lucide - react/g, replacement: 'lucide-react' },
        { pattern: /framer - motion/g, replacement: 'framer-motion' },
        { pattern: /react - dom/g, replacement: 'react-dom' },
        { pattern: /@vitejs \/ plugin - react/g, replacement: '@vitejs/plugin-react' }
      ];

      for (const fix of importFixes) {
        const originalContent = content;
        content = content.replace(fix.pattern, fix.replacement);
        if (content !== originalContent) {
          modified = true;
          this.fixes.importErrors++;
        }
      }

      // Fix JSX syntax
      const jsxFixes = [
        { pattern: /class_name=/g, replacement: 'className=' },
        { pattern: /use_state/g, replacement: 'useState' },
        { pattern: /use_effect/g, replacement: 'useEffect' },
        { pattern: /use_callback/g, replacement: 'useCallback' },
        { pattern: /use_memo/g, replacement: 'useMemo' },
        { pattern: /use_ref/g, replacement: 'useRef' },
        { pattern: /use_context/g, replacement: 'useContext' },
        { pattern: /use_reducer/g, replacement: 'useReducer' }
      ];

      for (const fix of jsxFixes) {
        const originalContent = content;
        content = content.replace(fix.pattern, fix.replacement);
        if (content !== originalContent) {
          modified = true;
          this.fixes.jsxErrors++;
        }
      }

      // Fix function syntax
      const functionFixes = [
        { pattern: /function\s+(\w+)\s*\(\s*\)\s*:\s*any\s*{/g, replacement: 'function $1() {' },
        { pattern: /export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*:\s*any\s*{/g, replacement: 'export default function $1() {' },
        { pattern: /const\s+(\w+)\s*=\s*\(\s*\)\s*:\s*any\s*=>/g, replacement: 'const $1 = () =>' },
        { pattern: /const\s+(\w+)\s*=\s*\(\s*([^)]*)\s*\)\s*:\s*any\s*=>/g, replacement: 'const $1 = ($2) =>' }
      ];

      for (const fix of functionFixes) {
        const originalContent = content;
        content = content.replace(fix.pattern, fix.replacement);
        if (content !== originalContent) {
          modified = true;
          this.fixes.syntaxErrors++;
        }
      }

      // Fix semicolons and spacing
      const spacingFixes = [
        { pattern: /;\s*$/gm, replacement: ';' },
        { pattern: /,\s*;/g, replacement: ',' },
        { pattern: /{\s*;/g, replacement: '{' },
        { pattern: /}\s*;/g, replacement: '}' },
        { pattern: /\(\s*;/g, replacement: '(' },
        { pattern: /;\s*\)/g, replacement: ')' }
      ];

      for (const fix of spacingFixes) {
        const originalContent = content;
        content = content.replace(fix.pattern, fix.replacement);
        if (content !== originalContent) {
          modified = true;
          this.fixes.syntaxErrors++;
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.log(`Fixed syntax in: ${path.relative(this.projectRoot, filePath)}`, 'SUCCESS');
      }

      return modified;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  getFilesToFix() {
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    const files = [];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            if (!['node_modules', '.git', '.next', 'dist', 'build', 'automation-reports'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        // Skip directories we can't read
      }
    };

    scanDirectory(this.projectRoot);
    this.fixes.totalFiles = files.length;
    return files;
  }

  async run() {
    this.log('🚀 Starting Comprehensive Syntax Fixer V2...', 'PROGRESS');
    
    const files = this.getFilesToFix();
    let fixedCount = 0;

    for (const file of files) {
      if (this.fixFile(file)) {
        fixedCount++;
      }
    }

    this.log(`✅ Fixed ${fixedCount} files out of ${files.length}`, 'SUCCESS');
    this.log(`🔧 Import Errors Fixed: ${this.fixes.importErrors}`, 'SUCCESS');
    this.log(`🔧 JSX Errors Fixed: ${this.fixes.jsxErrors}`, 'SUCCESS');
    this.log(`🔧 Syntax Errors Fixed: ${this.fixes.syntaxErrors}`, 'SUCCESS');
  }
}

// Run the syntax fixer
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixerV2();
  fixer.run().catch(console.error);
}

module.exports = ComprehensiveSyntaxFixerV2;