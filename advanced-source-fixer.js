#!/usr/bin/env node

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

  async run() {
    this.log('Starting advanced source file fixing...');
    
    try {
      await this.fixDirectory(path.join(process.cwd(), 'src'));
      await this.fixDirectory(path.join(process.cwd(), 'pages'));
      await this.fixDirectory(path.join(process.cwd(), 'components'));
      
      this.generateReport();
      this.log('Source fixing completed successfully!');
    } catch (error) {
      this.log(`Error during source fixing: ${error.message}`, 'ERROR');
    }
  }

  async fixDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) {
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
      if (!content.includes(';') && content.includes('from')) {
        fixed = fixed.replace(/from\s+['"][^'"]+['"]/g, (match) => {
          if (!match.endsWith(';')) {
            hasChanges = true;
            return match + ';';
          }
          return match;
        });
      }

      // Fix missing closing parentheses
      const openParens = (fixed.match(/\(/g) || []).length;
      const closeParens = (fixed.match(/\)/g) || []).length;
      if (openParens > closeParens) {
        fixed += ')'.repeat(openParens - closeParens);
        hasChanges = true;
      }

      // Fix missing closing braces
      const openBraces = (fixed.match(/\{/g) || []).length;
      const closeBraces = (fixed.match(/\}/g) || []).length;
      if (openBraces > closeBraces) {
        fixed += '}'.repeat(openBraces - closeBraces);
        hasChanges = true;
      }

      // Fix unclosed strings
      fixed = fixed.replace(/"[^"]*$/gm, (match) => {
        if (!match.endsWith('"')) {
          hasChanges = true;
          return match + '"';
        }
        return match;
      });

      fixed = fixed.replace(/'[^']*$/gm, (match) => {
        if (!match.endsWith("'")) {
          hasChanges = true;
          return match + "'";
        }
        return match;
      });

      if (hasChanges) {
        fs.writeFileSync(filePath, fixed);
        this.fixes.push({
          file: filePath,
          timestamp: new Date().toISOString(),
          changes: 'Fixed syntax errors'
        });
        this.log(`Fixed: ${filePath}`);
      }

    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalFilesFixed: this.fixes.length,
      fixes: this.fixes
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report saved to: ${this.reportFile}`);
  }
}

// Run the fixer if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const fixer = new AdvancedSourceFixer();
  fixer.run();
}

export default AdvancedSourceFixer;