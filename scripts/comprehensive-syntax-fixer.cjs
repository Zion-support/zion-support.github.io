#!/usr/bin/env node

/**
 * Comprehensive Syntax Fixer
 * Fixes critical syntax errors across the codebase
 */

const fs = require('fs');
const path = require('path');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.startTime = Date.now();
    this.fixes = [];
    this.errors = [];
    this.filesProcessed = 0;
  }

  log(message, type = 'INFO') {
    const icons = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    };
    
    const timestamp = new Date().toISOString();
    console.log(`${icons[type]} [${timestamp}] ${message}`);
  }

  async fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return { success: false, error: 'File not found' };
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      let fixesApplied = 0;

      // Fix common syntax errors
      const fixes = [
        // Fix missing commas in object properties
        {
          pattern: /(\w+):\s*(\w+)\s*(\w+):/g,
          replacement: '$1: $2,\n  $3:',
          description: 'Add missing commas in object properties'
        },
        // Fix missing commas in style objects
        {
          pattern: /(\w+):\s*'([^']+)'\s*(\w+):/g,
          replacement: "$1: '$2',\n  $3:",
          description: 'Add missing commas in style objects'
        },
        // Fix missing commas in JSX props
        {
          pattern: /(\w+)="([^"]+)"\s*(\w+)=/g,
          replacement: '$1="$2"\n  $3=',
          description: 'Add missing commas in JSX props'
        },
        // Fix malformed rgba functions
        {
          pattern: /rgb,a\(([^)]+)\)/g,
          replacement: 'rgba($1)',
          description: 'Fix malformed rgba functions'
        },
        // Fix missing quotes in style properties
        {
          pattern: /(\w+):\s*([^,}]+)(?=\s*[,}])/g,
          replacement: (match, prop, value) => {
            if (!value.includes("'") && !value.includes('"') && !value.includes('(') && !value.includes('px') && !value.includes('%') && !value.includes('rem') && !value.includes('em') && !value.includes('vh') && !value.includes('vw')) {
              return `${prop}: '${value.trim()}'`;
            }
            return match;
          },
          description: 'Add missing quotes in style properties'
        },
        // Fix missing semicolons in style objects
        {
          pattern: /(\w+):\s*'([^']+)'\s*(\w+):/g,
          replacement: "$1: '$2';\n  $3:",
          description: 'Add missing semicolons in style objects'
        },
        // Fix malformed JSX closing tags
        {
          pattern: /<\/div>"/g,
          replacement: '</div>',
          description: 'Fix malformed JSX closing tags'
        },
        // Fix missing closing braces in style objects
        {
          pattern: /(\w+):\s*'([^']+)'\s*}/g,
          replacement: "$1: '$2'\n}",
          description: 'Fix missing closing braces in style objects'
        },
        // Fix malformed template literals
        {
          pattern: /`([^`]+)`"/g,
          replacement: '`$1`',
          description: 'Fix malformed template literals'
        },
        // Fix missing commas in arrays
        {
          pattern: /(\w+)\s*(\w+)\s*]/g,
          replacement: '$1,\n  $2\n]',
          description: 'Add missing commas in arrays'
        }
      ];

      // Apply fixes
      for (const fix of fixes) {
        const before = content;
        if (typeof fix.replacement === 'function') {
          content = content.replace(fix.pattern, fix.replacement);
        } else {
          content = content.replace(fix.pattern, fix.replacement);
        }
        
        if (content !== before) {
          fixesApplied++;
          this.fixes.push({
            file: filePath,
            description: fix.description,
            pattern: fix.pattern.toString()
          });
        }
      }

      // Write fixed content back to file
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.log(`Fixed ${fixesApplied} issues in ${path.basename(filePath)}`, 'SUCCESS');
        return { success: true, fixesApplied };
      }

      return { success: true, fixesApplied: 0 };
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      this.errors.push({ file: filePath, error: error.message });
      return { success: false, error: error.message };
    }
  }

  async fixDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    
    for (const file of files) {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        await this.fixDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
        await this.fixFile(filePath);
        this.filesProcessed++;
      }
    }
  }

  generateReport() {
    const duration = Date.now() - this.startTime;
    const report = {
      timestamp: new Date().toISOString(),
      duration: `${Math.round(duration / 1000)}s`,
      filesProcessed: this.filesProcessed,
      totalFixes: this.fixes.length,
      totalErrors: this.errors.length,
      fixes: this.fixes,
      errors: this.errors,
      summary: {
        success: this.errors.length === 0,
        successRate: this.filesProcessed > 0 ? Math.round((this.filesProcessed - this.errors.length) / this.filesProcessed * 100) : 0
      }
    };

    fs.writeFileSync('comprehensive-syntax-fix-report.json', JSON.stringify(report, null, 2));
    
    this.log('📊 Comprehensive Syntax Fix Report Generated', 'SUCCESS');
    this.log(`⏱️ Total Duration: ${report.duration}`, 'INFO');
    this.log(`📁 Files Processed: ${report.filesProcessed}`, 'INFO');
    this.log(`🔧 Total Fixes Applied: ${report.totalFixes}`, 'INFO');
    this.log(`❌ Total Errors: ${report.totalErrors}`, report.totalErrors > 0 ? 'ERROR' : 'SUCCESS');
    this.log(`📈 Success Rate: ${report.summary.successRate}%`, report.summary.successRate > 80 ? 'SUCCESS' : 'WARNING');
    
    return report;
  }

  async run() {
    this.log('🚀 Starting Comprehensive Syntax Fixer...', 'PROGRESS');
    
    try {
      // Fix pages directory
      this.log('🔧 Fixing pages directory...', 'PROGRESS');
      await this.fixDirectory('./pages');
      
      // Fix components directory
      this.log('🔧 Fixing components directory...', 'PROGRESS');
      await this.fixDirectory('./components');
      
      // Fix lib directory
      this.log('🔧 Fixing lib directory...', 'PROGRESS');
      await this.fixDirectory('./lib');
      
      const report = this.generateReport();
      
      if (report.summary.success) {
        this.log('🎉 Comprehensive Syntax Fix completed successfully!', 'SUCCESS');
        return true;
      } else {
        this.log('⚠️ Comprehensive Syntax Fix completed with some errors', 'WARNING');
        return false;
      }
    } catch (error) {
      this.log(`Comprehensive Syntax Fix failed: ${error.message}`, 'ERROR');
      return false;
    }
  }
}

// Run the syntax fixer
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run().then(success => {
    process.exit(success ? 0 : 1);
  }).catch(error => {
    console.error('Syntax fixer failed:', error);
    process.exit(1);
  });
}

module.exports = ComprehensiveSyntaxFixer;