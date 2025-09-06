#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Enhanced Error Fixer
 * Automatically fixes common syntax and parsing errors
 */
class EnhancedErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixes = {
      syntaxErrors: 0,
      parsingErrors: 0,
      importErrors: 0,
      typeErrors: 0,
      totalFiles: 0
    };
    this.startTime = Date.now();
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

  async fixSyntaxErrors() {
    this.log('🔧 Fixing syntax errors...', 'PROGRESS');
    
    const commonFixes = [
      // Fix missing semicolons
      {
        pattern: /([^;}])\s*$/gm,
        replacement: '$1;',
        description: 'Adding missing semicolons'
      },
      // Fix unescaped quotes in JSX
      {
        pattern: /([^\\])'/g,
        replacement: "$1\\'",
        description: 'Escaping single quotes in JSX'
      },
      // Fix missing commas in objects
      {
        pattern: /(\w+)\s*\n\s*(\w+)/g,
        replacement: '$1,\n$2',
        description: 'Adding missing commas in objects'
      },
      // Fix import statements
      {
        pattern: /import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?/g,
        replacement: "import { $1 } from '$2';",
        description: 'Fixing import statements'
      },
      // Fix export statements
      {
        pattern: /export\s+default\s+([^;]+);?/g,
        replacement: 'export default $1;',
        description: 'Fixing export statements'
      }
    ];

    const files = this.getFilesToFix();
    this.fixes.totalFiles = files.length;

    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        for (const fix of commonFixes) {
          const originalContent = content;
          content = content.replace(fix.pattern, fix.replacement);
          if (content !== originalContent) {
            modified = true;
            this.fixes.syntaxErrors++;
          }
        }

        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`Fixed syntax errors in: ${path.relative(this.projectRoot, file)}`, 'SUCCESS');
        }
      } catch (error) {
        this.log(`Error fixing ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixParsingErrors() {
    this.log('🔧 Fixing parsing errors...', 'PROGRESS');
    
    const parsingFixes = [
      // Fix missing function declarations
      {
        pattern: /function\s+(\w+)\s*\([^)]*\)\s*{/g,
        replacement: 'function $1() {',
        description: 'Fixing function declarations'
      },
      // Fix missing return statements
      {
        pattern: /}\s*$/gm,
        replacement: '}\n',
        description: 'Adding proper line breaks'
      },
      // Fix missing brackets
      {
        pattern: /if\s*\([^)]+\)\s*([^{][^;]*);/g,
        replacement: 'if ($1) {\n  $2\n}',
        description: 'Adding missing brackets to if statements'
      }
    ];

    const files = this.getFilesToFix();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        for (const fix of parsingFixes) {
          const originalContent = content;
          content = content.replace(fix.pattern, fix.replacement);
          if (content !== originalContent) {
            modified = true;
            this.fixes.parsingErrors++;
          }
        }

        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`Fixed parsing errors in: ${path.relative(this.projectRoot, file)}`, 'SUCCESS');
        }
      } catch (error) {
        this.log(`Error fixing ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixImportErrors() {
    this.log('🔧 Fixing import errors...', 'PROGRESS');
    
    const importFixes = [
      // Fix React imports
      {
        pattern: /import\s+React\s+from\s+['"]react['"];?/g,
        replacement: "import React from 'react';",
        description: 'Fixing React imports'
      },
      // Fix missing file extensions
      {
        pattern: /from\s+['"]([^'"]+)['"];?/g,
        replacement: (match, p1) => {
          if (!p1.includes('.') && !p1.startsWith('@')) {
            return `from './${p1}';`;
          }
          return match;
        },
        description: 'Adding missing file extensions'
      }
    ];

    const files = this.getFilesToFix();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        for (const fix of importFixes) {
          const originalContent = content;
          if (typeof fix.replacement === 'function') {
            content = content.replace(fix.pattern, fix.replacement);
          } else {
            content = content.replace(fix.pattern, fix.replacement);
          }
          if (content !== originalContent) {
            modified = true;
            this.fixes.importErrors++;
          }
        }

        if (modified) {
          fs.writeFileSync(file, content);
          this.log(`Fixed import errors in: ${path.relative(this.projectRoot, file)}`, 'SUCCESS');
        }
      } catch (error) {
        this.log(`Error fixing ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  getFilesToFix() {
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    const files = [];
    
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and other directories
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    };

    scanDirectory(this.projectRoot);
    return files;
  }

  async runBuildCheck() {
    this.log('🔧 Running build check...', 'PROGRESS');
    
    try {
      const result = execSync('npm run build', {
        cwd: this.projectRoot,
        stdio: 'pipe',
        encoding: 'utf8'
      });
      this.log('Build check passed', 'SUCCESS');
      return true;
    } catch (error) {
      this.log(`Build check failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  generateReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      fixes: this.fixes,
      summary: {
        totalFiles: this.fixes.totalFiles,
        syntaxErrorsFixed: this.fixes.syntaxErrors,
        parsingErrorsFixed: this.fixes.parsingErrors,
        importErrorsFixed: this.fixes.importErrors,
        typeErrorsFixed: this.fixes.typeErrors
      }
    };

    const reportPath = path.join(this.projectRoot, 'automation-reports', 'enhanced-error-fix-report.json');
    
    // Ensure directory exists
    const reportDir = path.dirname(reportPath);
    if (!fs.existsSync(reportDir)) {
      fs.mkdirSync(reportDir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log('📊 Enhanced Error Fix Report Generated', 'SUCCESS');
    this.log(`✅ Total Files Processed: ${report.summary.totalFiles}`);
    this.log(`🔧 Syntax Errors Fixed: ${report.summary.syntaxErrorsFixed}`);
    this.log(`🔧 Parsing Errors Fixed: ${report.summary.parsingErrorsFixed}`);
    this.log(`🔧 Import Errors Fixed: ${report.summary.importErrorsFixed}`);
    this.log(`🔧 Type Errors Fixed: ${report.summary.typeErrorsFixed}`);
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Enhanced Error Fixer...', 'PROGRESS');
    
    try {
      await this.fixSyntaxErrors();
      await this.fixParsingErrors();
      await this.fixImportErrors();
      await this.runBuildCheck();
      
      this.generateReport();
      this.log('✅ Enhanced Error Fixer completed successfully!', 'SUCCESS');
    } catch (error) {
      this.log(`❌ Enhanced Error Fixer failed: ${error.message}`, 'ERROR');
      this.generateReport();
    }
  }
}

// Run the error fixer
if (require.main === module) {
  const fixer = new EnhancedErrorFixer();
  fixer.run().catch(console.error);
}

module.exports = EnhancedErrorFixer;