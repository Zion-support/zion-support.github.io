#!/usr/bin/env node
/* eslint-env node */
/* global process console */

import fs from 'fs';
import path from 'path';

class AdvancedSourceFixer {
  constructor() {
    this.reportFile = path.join(process.cwd(), 'advanced-source-fix-report.json');
    this.fixes = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async fixDirectory(dirPath) {
    this.log(`Fixing directory: ${dirPath}`);
    
    if (!fs.existsSync(dirPath)) {
      this.log(`Directory does not exist: ${dirPath}`, 'WARN');
      return;
    }

    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        if (!item.startsWith('.') && item !== 'node_modules') {
          await this.fixDirectory(itemPath);
        }
      } else if (stat.isFile()) {
        if (item.endsWith('.ts') || item.endsWith('.tsx') || 
            item.endsWith('.js') || item.endsWith('.jsx')) {
          await this.fixFile(itemPath);
        }
      }
    }
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = content;
      let hasChanges = false;

      // Fix missing semicolons
      const semicolonPatterns = [
        /from\s+['"][^'"]*['"]\s*$/gm,
        /,\s*$/gm,
        /;\s*$/gm,
        /\)\s*$/gm,
        /\}\s*$/gm
      ];

      for (const pattern of semicolonPatterns) {
        if (pattern.test(fixed)) {
          fixed = fixed.replace(pattern, (match) => {
            if (!match.endsWith(';')) {
              hasChanges = true;
              return match + ';';
            }
            return match;
          });
        }
      }

      // Fix missing import statements
      if (content.includes('from') && 
          !content.includes('import') && 
          !content.includes('export')) {
        // This is a complex case that would need more sophisticated parsing
        this.log(`File may need manual import fixes: ${filePath}`, 'WARN');
      }

      // Fix incomplete strings
      fixed = fixed.replace(/"[^"]*$/gm, '"');
      fixed = fixed.replace(/'[^']*$/gm, "'");

      if (hasChanges) {
        fs.writeFileSync(filePath, fixed);
        this.fixes.push({
          file: filePath,
          type: 'syntax_fix',
          timestamp: new Date().toISOString()
        });
        this.log(`Fixed: ${filePath}`);
      }
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalFixes: this.fixes.length,
      fixes: this.fixes
    };
    
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report saved to: ${this.reportFile}`);
  }

  async start() {
    this.log('Starting advanced source file fixing...');
    
    await this.fixDirectory(path.join(process.cwd(), 'src'));
    await this.fixDirectory(path.join(process.cwd(), 'pages'));
    await this.fixDirectory(path.join(process.cwd(), 'components'));
    
    await this.generateReport();
    this.log(`Completed! Fixed ${this.fixes.length} files.`);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const fixer = new AdvancedSourceFixer();
  fixer.start().catch(console.error);
}

export default AdvancedSourceFixer;