#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class AutomationScriptFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.automationDir = path.join(this.projectRoot, 'scripts', 'automation');
    this.fixedCount = 0;
    this.errorCount = 0;
  }

  async fixAllScripts() {
    console.log('🔧 Starting automation script fixes...');
    
    try {
      const files = fs.readdirSync(this.automationDir);
      const cjsFiles = files.filter(file => file.endsWith('.cjs'));
      
      for (const file of cjsFiles) {
        await this.fixScript(file);
      }
      
      console.log(`✅ Fixed ${this.fixedCount} scripts`);
      console.log(`❌ ${this.errorCount} scripts had errors`);
      
    } catch (error) {
      console.error('Error fixing scripts:', error.message);
    }
  }

  async fixScript(filename) {
    const filePath = path.join(this.automationDir, filename);
    
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix common syntax errors
      content = this.fixCommonErrors(content);
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed: ${filename}`);
        this.fixedCount++;
      }
      
    } catch (error) {
      console.error(`❌ Error fixing ${filename}:`, error.message);
      this.errorCount++;
    }
  }

  fixCommonErrors(content) {
    // Fix missing quotes in path.join
    content = content.replace(
      /path\.join\(\s*([^,]+),\s*([^,]+),\s*([^)]+)\s*\)/g,
      (match, p1, p2, p3) => {
        if (!p2.includes("'") && !p2.includes('"')) {
          return `path.join(${p1}, '${p2}', ${p3})`;
        }
        return match;
      }
    );
    
    // Fix template literal syntax errors
    content = content.replace(
      /console\.log\(([^`]+)`([^`]+)`([^)]*)\)/g,
      'console.log(`$1$2$3`)'
    );
    
    // Fix missing quotes in string arrays
    content = content.replace(
      /\[([^[\]]*[^'",\s][^[\]]*)\]/g,
      (match, content) => {
        if (content.includes(',')) {
          const items = content.split(',').map(item => {
            const trimmed = item.trim();
            if (!trimmed.startsWith("'") && !trimmed.startsWith('"')) {
              return `'${trimmed}'`;
            }
            return trimmed;
          });
          return `[${items.join(', ')}]`;
        }
        return match;
      }
    );
    
    // Fix missing quotes in file paths
    content = content.replace(
      /([a-zA-Z_][a-zA-Z0-9_]*\/[a-zA-Z0-9_\/\-\.]+)/g,
      (match) => {
        if (!match.includes("'") && !match.includes('"') && 
            !match.includes('path.join') && !match.includes('require')) {
          return `'${match}'`;
        }
        return match;
      }
    );
    
    return content;
  }
}

// Run the fixer
const fixer = new AutomationScriptFixer();
fixer.fixAllScripts().then(() => {
  console.log('🎉 Automation script fixing completed!');
}).catch(error => {
  console.error('💥 Error:', error);
  process.exit(1);
});