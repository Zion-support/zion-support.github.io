#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

class SyntaxFixer {
  constructor() {
    this.logFile = path.join(__dirname, '../logs/syntax-fixer.log');
    this.reportFile = path.join(__dirname, '../logs/syntax-fixes.json');
    this.projectRoot = path.join(__dirname, '..');
  }

  async log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    
    try {
      await fs.appendFile(this.logFile, logEntry);
      console.log(logEntry.trim());
    } catch (error) {
      console.error('Failed to write to log file:', error);
    }
  }

  async findMergeConflicts() {
    try {
      const { stdout } = await execAsync(`find ${this.projectRoot} -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.json" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true`);
      
      const files = stdout.trim().split('\n').filter(line => line && !line.includes('node_modules'));
      await this.log(`Found ${files.length} files with merge conflicts`, 'INFO');
      return files;
    } catch (error) {
      await this.log(`Error finding merge conflicts: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async findSyntaxErrors() {
    const syntaxPatterns = [
      { pattern: /const\s+\w+\s*=\s*lazy\s*\(\s*['"]/, replacement: 'const $1 = lazy(' },
      { pattern: /\)\s*\(\s*["']/, replacement: ')(' },
      { pattern: /["']\s*\(\s*$/, replacement: '(' },
      { pattern: /^\s*["']\s*$/, replacement: '' },
      { pattern: /description:\s*['"]$/, replacement: 'description: ' },
      { pattern: /['"]$\n\s*['"]/, replacement: '' }
    ];

    try {
      const { stdout } = await execAsync(`find ${this.projectRoot}/src -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | head -50`);
      const files = stdout.trim().split('\n').filter(line => line);
      
      const problemFiles = [];
      
      for (const filePath of files) {
        try {
          const content = await fs.readFile(filePath, 'utf8');
          
          // Check for common syntax issues
          if (content.includes('lazy(\'') || 
              content.includes('description:\'') ||
              content.includes('() => ("') ||
              content.includes('" import(')) {
            problemFiles.push(filePath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
      
      return problemFiles;
    } catch (error) {
      await this.log(`Error finding syntax errors: ${error.message}`, 'ERROR');
      return [];
    }
  }

  async fixMergeConflict(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf8');
      
      // Simple merge conflict resolution - take the HEAD version
      const fixed = content
        .replace(/<<<<<<< HEAD\n/g, '')
        .replace(/=======\n[\s\S]*?>>>>>>> [^\n]+\n/g, '')
        .replace(/>>>>>>> [^\n]+\n/g, '');
      
      await fs.writeFile(filePath, fixed);
      await this.log(`Fixed merge conflict in ${filePath}`, 'INFO');
      return true;
    } catch (error) {
      await this.log(`Failed to fix merge conflict in ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixSyntaxError(filePath) {
    try {
      let content = await fs.readFile(filePath, 'utf8');
      let changed = false;
      
      // Fix common syntax issues
      const fixes = [
        // Fix lazy import syntax
        { from: /const\s+(\w+)\s*=\s*lazy\s*\(\s*['"]([^'"]*)/g, to: 'const $1 = lazy(' },
        // Fix unterminated strings in JSX
        { from: /\)\s*\(\s*["']/g, to: ')(' },
        { from: /["']\s*\(\s*$/gm, to: '(' },
        { from: /^\s*["']\s*$/gm, to: '' },
        // Fix object property syntax
        { from: /description:\s*['"]$/gm, to: 'description: ' },
        { from: /['"]$/gm, to: '"' },
        // Fix semicolon at end of import
        { from: /import.*;\s*;$/gm, to: (match) => match.replace(';;', ';') }
      ];
      
      for (const fix of fixes) {
        const newContent = content.replace(fix.from, fix.to);
        if (newContent !== content) {
          content = newContent;
          changed = true;
        }
      }
      
      if (changed) {
        await fs.writeFile(filePath, content);
        await this.log(`Fixed syntax errors in ${filePath}`, 'INFO');
        return true;
      }
      
      return false;
    } catch (error) {
      await this.log(`Failed to fix syntax errors in ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async run() {
    try {
      await this.log('Starting syntax fixer', 'INFO');
      
      const results = {
        timestamp: new Date().toISOString(),
        mergeConflicts: { found: 0, fixed: 0 },
        syntaxErrors: { found: 0, fixed: 0 }
      };
      
      // Fix merge conflicts
      const conflictFiles = await this.findMergeConflicts();
      results.mergeConflicts.found = conflictFiles.length;
      
      for (const file of conflictFiles) {
        const success = await this.fixMergeConflict(file);
        if (success) results.mergeConflicts.fixed++;
      }
      
      // Fix syntax errors
      const syntaxFiles = await this.findSyntaxErrors();
      results.syntaxErrors.found = syntaxFiles.length;
      
      for (const file of syntaxFiles) {
        const success = await this.fixSyntaxError(file);
        if (success) results.syntaxErrors.fixed++;
      }
      
      await fs.writeFile(this.reportFile, JSON.stringify(results, null, 2));
      
      const totalFixed = results.mergeConflicts.fixed + results.syntaxErrors.fixed;
      await this.log(`Syntax fixer completed: ${totalFixed} files fixed`, 'INFO');
      
      // If fixes were made, restart error monitor to re-check
      if (totalFixed > 0) {
        exec('pm2 restart error-monitor');
      }
      
    } catch (error) {
      await this.log(`Syntax fixer failed: ${error.message}`, 'ERROR');
    }
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new SyntaxFixer();
  
  // Run once immediately, then every 10 minutes
  fixer.run();
  setInterval(() => fixer.run(), 10 * 60 * 1000);
  
  // Keep process alive
  process.on('SIGINT', () => {
    fixer.log('Syntax fixer shutting down', 'INFO');
    process.exit(0);
  });
}

module.exports = SyntaxFixer;