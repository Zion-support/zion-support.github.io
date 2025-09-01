#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class SyntaxErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.automationInterval = parseInt(process.env.AUTOMATION_INTERVAL) || 1500000; // 25 minutes default
    this.fixesApplied = 0;
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] [SyntaxErrorFixer] ${message}`);
  }

  async run() {
    this.log('Starting syntax error fixing automation...');
    
    try {
      await this.fixSyntaxErrors();
      this.log(`Syntax error fixing completed. Applied ${this.fixesApplied} fixes.`);
    } catch (error) {
      this.log(`Error during syntax error fixing: ${error.message}`);
    }
  }

  async fixSyntaxErrors() {
    this.log('Fixing syntax errors...');
    
    const files = glob.sync('**/*.{js,jsx,ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Fix trailing commas in objects
        newContent = newContent.replace(/,(\s*[}\]])/g, '$1');
        
        // Fix missing semicolons
        newContent = newContent.replace(/([^;])\n(import|export|const|let|var|function|class)/g, '$1;\n$2');
        
        // Fix unclosed brackets
        const openBrackets = (newContent.match(/\{/g) || []).length;
        const closeBrackets = (newContent.match(/\}/g) || []).length;
        if (openBrackets > closeBrackets) {
          newContent += '\n'.repeat(openBrackets - closeBrackets) + '}';
        }
        
        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          modified = true;
          this.fixesApplied++;
        }
      } catch (error) {
        this.log(`Error fixing syntax in ${file}: ${error.message}`);
      }
    }
  }
}

const fixer = new SyntaxErrorFixer();
fixer.run().catch(console.error);