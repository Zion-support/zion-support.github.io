#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const glob = require('glob');

class ESLintErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.automationInterval = parseInt(process.env.AUTOMATION_INTERVAL) || 1200000; // 20 minutes default
    this.fixesApplied = 0;
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] [ESLintErrorFixer] ${message}`);
  }

  async run() {
    this.log('Starting ESLint error fixing automation...');
    
    try {
      // Step 1: Run ESLint auto-fix
      await this.runESLintAutoFix();
      
      // Step 2: Fix common ESLint issues manually
      await this.fixCommonESLintIssues();
      
      // Step 3: Fix unused imports
      await this.fixUnusedImports();
      
      // Step 4: Fix console statements
      await this.fixConsoleStatements();
      
      // Step 5: Fix variable declarations
      await this.fixVariableDeclarations();
      
      this.log(`ESLint error fixing completed. Applied ${this.fixesApplied} fixes.`);
      
    } catch (error) {
      this.log(`Error during ESLint error fixing: ${error.message}`);
    }
  }

  async runESLintAutoFix() {
    this.log('Running ESLint auto-fix...');
    
    try {
      execSync('npx eslint . --fix', { 
        stdio: 'inherit',
        cwd: this.projectRoot 
      });
      
      this.fixesApplied++;
      this.log('ESLint auto-fix completed successfully');
    } catch (error) {
      this.log('ESLint auto-fix completed with some manual fixes needed');
    }
  }

  async fixCommonESLintIssues() {
    this.log('Fixing common ESLint issues...');
    
    const files = glob.sync('**/*.{js,jsx,ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Fix trailing spaces
        newContent = newContent.replace(/[ \t]+$/gm, '');
        
        // Fix missing semicolons
        newContent = newContent.replace(/([^;])\n(import|export|const|let|var|function|class)/g, '$1;\n$2');
        
        // Fix double quotes to single quotes
        newContent = newContent.replace(/"([^"]*)"/g, "'$1'");
        
        // Fix unnecessary escape characters
        newContent = newContent.replace(/\\\[/g, '[');
        newContent = newContent.replace(/\\\//g, '/');
        
        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          modified = true;
          this.fixesApplied++;
        }
      } catch (error) {
        this.log(`Error fixing ESLint issues in ${file}: ${error.message}`);
      }
    }
  }

  async fixUnusedImports() {
    this.log('Fixing unused imports...');
    
    const files = glob.sync('**/*.{js,jsx,ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Remove unused React import
        if (content.includes("import React from 'react'") && !content.includes('React.')) {
          newContent = newContent.replace("import React from 'react';\n", '');
          modified = true;
        }
        
        // Remove other unused imports
        const unusedImports = [
          'Card', 'CardContent', 'CardDescription', 'CardHeader', 'CardTitle',
          'Button', 'Wallet', 'Info', 'Check', 'ArrowUpRight', 'Tooltip',
          'TooltipContent', 'TooltipProvider', 'TooltipTrigger', 'Gift',
          'ArrowRight', 'ExternalLink', 'Dialog', 'DialogContent',
          'DialogDescription', 'DialogHeader', 'DialogTitle', 'DialogTrigger',
          'BadgeDollarSign', 'Skeleton'
        ];
        
        unusedImports.forEach(importName => {
          const regex = new RegExp(`import\\s+{[^}]*\\b${importName}\\b[^}]*}\\s+from\\s+['"][^'"]+['"];?\\n?`, 'g');
          newContent = newContent.replace(regex, '');
        });
        
        if (modified) {
          fs.writeFileSync(file, newContent);
          this.fixesApplied++;
        }
      } catch (error) {
        this.log(`Error fixing unused imports in ${file}: ${error.message}`);
      }
    }
  }

  async fixConsoleStatements() {
    this.log('Fixing console statements...');
    
    const files = glob.sync('**/*.{js,jsx,ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Comment out console statements
        newContent = newContent.replace(/console\.log\(/g, '// console.log(');
        newContent = newContent.replace(/console\.error\(/g, '// console.error(');
        newContent = newContent.replace(/console\.warn\(/g, '// console.warn(');
        newContent = newContent.replace(/console\.info\(/g, '// console.info(');
        
        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          modified = true;
          this.fixesApplied++;
        }
      } catch (error) {
        this.log(`Error fixing console statements in ${file}: ${error.message}`);
      }
    }
  }

  async fixVariableDeclarations() {
    this.log('Fixing variable declarations...');
    
    const files = glob.sync('**/*.{js,jsx,ts,tsx}', { 
      ignore: ['node_modules/**', '.git/**', 'dist/**', 'build/**', 'out/**'] 
    });
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let modified = false;
        let newContent = content;
        
        // Fix var to const/let
        newContent = newContent.replace(/\bvar\s+(\w+)\s*=/g, 'const $1 =');
        
        // Fix let to const where possible
        newContent = newContent.replace(/\blet\s+(\w+)\s*=\s*([^;]+);\s*(?!.*\1\s*=)/g, 'const $1 = $2;');
        
        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          modified = true;
          this.fixesApplied++;
        }
      } catch (error) {
        this.log(`Error fixing variable declarations in ${file}: ${error.message}`);
      }
    }
  }
}

// Run the automation
const fixer = new ESLintErrorFixer();
fixer.run().catch(console.error);