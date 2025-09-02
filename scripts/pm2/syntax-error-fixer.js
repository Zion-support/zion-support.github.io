#!/usr/bin/env node

import { execSync, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

class SyntaxErrorFixer {
  constructor() {
    this.scanInterval = process.env.SCAN_INTERVAL || 300000; // 5 minutes
    this.autoFix = process.env.AUTO_FIX === 'true';
    this.logFile = 'error-reports/syntax-error-fixer-report.json';
    
    console.log('🔧 Syntax Error Fixer started');
    console.log(`Scan interval: ${this.scanInterval}ms`);
    console.log(`Auto-fix enabled: ${this.autoFix}`);
  }

  async start() {
    // Initial scan
    await this.scanAndFix();
    
    // Set up interval scanning
    setInterval(async () => {
      await this.scanAndFix();
    }, this.scanInterval);
  }

  async scanAndFix() {
    console.log('🔍 Starting syntax error scan...');
    
    const report = {
      timestamp: new Date().toISOString(),
      errors: [],
      fixes: {
        applied: [],
        failed: [],
        skipped: []
      }
    };

    try {
      // Find files with common syntax error patterns
      const files = this.findSyntaxErrorFiles();
      
      for (const file of files) {
        try {
          const errors = await this.checkFileForSyntaxErrors(file);
          if (errors.length > 0) {
            report.errors.push({ file, errors });
            
            if (this.autoFix) {
              const fixed = await this.fixSyntaxErrors(file, errors);
              if (fixed) {
                report.fixes.applied.push(file);
                console.log(`✅ Fixed syntax errors in: ${file}`);
              } else {
                report.fixes.failed.push(file);
                console.log(`❌ Failed to fix syntax errors in: ${file}`);
              }
            } else {
              report.fixes.skipped.push(file);
            }
          }
        } catch (error) {
          console.error(`Error processing ${file}:`, error.message);
        }
      }

      // Save report
      this.saveReport(report);
      
      console.log(`📊 Scan complete. Found ${report.errors.length} files with syntax errors.`);
      console.log(`✅ Fixed: ${report.fixes.applied.length}, ❌ Failed: ${report.fixes.failed.length}, ⏭️ Skipped: ${report.fixes.skipped.length}`);
      
    } catch (error) {
      console.error('Error during syntax scan:', error);
    }
  }

  findSyntaxErrorFiles() {
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    const directories = ['src', 'pages', 'components', 'utils', 'types'];
    const files = [];

    for (const dir of directories) {
      if (fs.existsSync(dir)) {
        const found = this.walkDirectory(dir, extensions);
        files.push(...found);
      }
    }

    return files;
  }

  walkDirectory(dir, extensions) {
    const files = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        files.push(...this.walkDirectory(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }

    return files;
  }

  async checkFileForSyntaxErrors(filePath) {
    const errors = [];
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\\n');

      // Check for common syntax error patterns
      const patterns = [
        { pattern: /export\s*$/, error: 'Incomplete export statement' },
        { pattern: /:\s*;/, error: 'Missing type annotation' },
        { pattern: /{\s*$/, error: 'Unclosed brace' },
        { pattern: /\w+:\s*$/, error: 'Missing type or value' },
        { pattern: /return\s*}/, error: 'Missing return value' },
        { pattern: /<<<<<<< HEAD/, error: 'Git merge conflict marker' },
        { pattern: />>>>>>> /, error: 'Git merge conflict marker' },
        { pattern: /=======/, error: 'Git merge conflict marker' },
        { pattern: /'\s*$/, error: 'Unterminated string literal' },
        { pattern: /"\s*$/, error: 'Unterminated string literal' },
      ];

      lines.forEach((line, index) => {
        patterns.forEach(({ pattern, error }) => {
          if (pattern.test(line)) {
            errors.push({
              line: index + 1,
              content: line.trim(),
              error,
              type: 'syntax'
            });
          }
        });
      });

    } catch (error) {
      errors.push({
        line: 1,
        content: '',
        error: `File read error: ${error.message}`,
        type: 'file-error'
      });
    }

    return errors;
  }

  async fixSyntaxErrors(filePath, errors) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Handle merge conflicts first
      if (content.includes('<<<<<<< HEAD')) {
        content = this.fixMergeConflicts(content);
        modified = true;
      }

      // Fix incomplete exports
      content = content.replace(/export\\s*$/gm, 'export default {};');
      if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;

      // Fix missing type annotations
      content = content.replace(/(\\w+):\\s*;/g, '$1: any;');
      if (content !== fs.readFileSync(filePath, 'utf8')) modified = true;

      // Fix unclosed braces
      const openBraces = (content.match(/{/g) || []).length;
      const closeBraces = (content.match(/}/g) || []).length;
      if (openBraces > closeBraces) {
        content += '\\n'.repeat(openBraces - closeBraces) + '}'.repeat(openBraces - closeBraces);
        modified = true;
      }

      // Fix unterminated strings
      content = content.replace(/'/g, "'").replace(/"/g, '"');

      if (modified) {
        // Create backup
        fs.writeFileSync(filePath + '.backup', fs.readFileSync(filePath, 'utf8'));
        
        // Write fixed content
        fs.writeFileSync(filePath, content);
        return true;
      }

      return false;
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
      return false;
    }
  }

  fixMergeConflicts(content) {
    // Simple merge conflict resolution - take HEAD version
    return content
      .replace(/<<<<<<< HEAD\\n([\\s\\S]*?)=======\\n[\\s\\S]*?>>>>>>> .*?\\n/g, '$1')
      .replace(/<<<<<<< HEAD\\n([\\s\\S]*?)>>>>>>> .*?\\n/g, '$1');
  }

  saveReport(report) {
    try {
      fs.writeFileSync(this.logFile, JSON.stringify(report, null, 2));
    } catch (error) {
      console.error('Error saving report:', error.message);
    }
  }
}

// Start the fixer
const fixer = new SyntaxErrorFixer();
fixer.start().catch(console.error);

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('🔧 Syntax Error Fixer shutting down...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('🔧 Syntax Error Fixer interrupted');
  process.exit(0);
});