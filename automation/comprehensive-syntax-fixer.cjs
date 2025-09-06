#!/usr/bin/env node

fixer.run().catch(console.error);

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.logFile = path.join(__dirname, 'logs', 'syntax-fixer.log');
    this.fixedFiles = [];
    this.errors = [];
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}\n`;
    console.log(`[${level}] ${message}`);
    fs.appendFileSync(this.logFile, logMessage);
  }

  fixViteConfig() {
    const viteConfigPath = path.join(__dirname, '..', 'vite.config.ts');
    if (!fs.existsSync(viteConfigPath)) return;

    this.log('Fixing vite.config.ts...');
    try {
      let content = fs.readFileSync(viteConfigPath, 'utf8');
      
      // Fix trailing commas and semicolons
      content = content.replace(/,;/g, ',');
      content = content.replace(/,\s*}/g, '}');
      content = content.replace(/,\s*]/g, ']');
      content = content.replace(/,\s*\)/g, ')');
      
      // Fix object property syntax
      content = content.replace(/"([^"]+)":/g, '$1:');
      
      // Fix array syntax
      content = content.replace(/\[([^\]]+),\]/g, '[$1]');
      
      // Fix function syntax
      content = content.replace(/\(([^)]+),\)/g, '($1)');
      
      fs.writeFileSync(viteConfigPath, content);
      this.fixedFiles.push('vite.config.ts');
      this.log('Fixed vite.config.ts');
    } catch (error) {
      this.errors.push(`Error fixing vite.config.ts: ${error.message}`);
    }
  }

  fixComponentFiles() {
    const componentsDir = path.join(__dirname, '..', 'components');
    if (!fs.existsSync(componentsDir)) return;

    this.log('Fixing component files...');
    const files = this.getTypeScriptFiles(componentsDir);
    
    files.forEach(file => {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Fix import statements
        if (content.includes('import React from "react";')) {
          content = content.replace(/import React from "react";/g, 'import React from "react"');
          modified = true;
        }

        // Fix JSX syntax
        content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*\/>/g, '<$1 />');
        
        // Fix object destructuring
        content = content.replace(/\{\s*([^}]+),\s*\}/g, '{$1}');
        
        // Fix trailing commas in objects
        content = content.replace(/,(\s*[}\]])/g, '$1');

        if (modified) {
          fs.writeFileSync(file, content);
          this.fixedFiles.push(path.relative(__dirname, file));
        }
      } catch (error) {
        this.errors.push(`Error fixing ${file}: ${error.message}`);
      }
    });
  }

  fixDataFiles() {
    const dataDir = path.join(__dirname, '..', 'data');
    if (!fs.existsSync(dataDir)) return;

    this.log('Fixing data files...');
    const files = this.getTypeScriptFiles(dataDir);
    
    files.forEach(file => {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        // Fix trailing commas
        content = content.replace(/,(\s*[}\]])/g, '$1');
        
        // Fix object syntax
        content = content.replace(/"([^"]+)":/g, '$1:');

        if (modified) {
          fs.writeFileSync(file, content);
          this.fixedFiles.push(path.relative(__dirname, file));
        }
      } catch (error) {
        this.errors.push(`Error fixing ${file}: ${error.message}`);
      }
    });
  }

  getTypeScriptFiles(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    items.forEach(item => {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files.push(...this.getTypeScriptFiles(fullPath));
      } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    });
    
    return files;
  }

  async runLintFix() {
    this.log('Running ESLint fix...');
    try {
      execSync('npm run lint:fix', { stdio: 'pipe', cwd: path.join(__dirname, '..') });
      this.log('ESLint fix completed');
    } catch (error) {
      this.log(`ESLint fix failed: ${error.message}`, 'WARN');
    }
  }

  async runTypeCheck() {
    this.log('Running TypeScript check...');
    try {
      execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'pipe', cwd: path.join(__dirname, '..') });
      this.log('TypeScript check passed');
    } catch (error) {
      this.log(`TypeScript check failed: ${error.message}`, 'WARN');
    }
  }

  async run() {
    this.log('Starting comprehensive syntax fixing...');
    
    try {
      this.fixViteConfig();
      this.fixComponentFiles();
      this.fixDataFiles();
      
      await this.runLintFix();
      await this.runTypeCheck();
      
      const report = {
        timestamp: new Date().toISOString(),
        fixedFiles: this.fixedFiles,
        errors: this.errors,
        totalFixed: this.fixedFiles.length,
        totalErrors: this.errors.length
      };
      
      const reportFile = path.join(__dirname, 'logs', 'syntax-fix-report.json');
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      
      this.log(`Syntax fixing completed. Fixed ${this.fixedFiles.length} files, ${this.errors.length} errors`);
      
      if (this.errors.length > 0) {
        this.log('Errors encountered:', 'WARN');
        this.errors.forEach(error => this.log(`  - ${error}`, 'WARN'));
      }
      
    } catch (error) {
      this.log(`Error in syntax fixer: ${error.message}`, 'ERROR');
fixer.run().catch(console.error);    }
  }
}

      this.log('🎉 Comprehensive syntax fixing completed successfully!');
      this.log(`📊 Fixed ${this.fixedFiles.length} files`);
      this.log(`❌ ${this.errors.length} errors encountered`);
    } catch (error) {
      this.log(`❌ Comprehensive syntax fixing failed: ${error.message}`);
      process.exit(1);


    }
  }
}

// Main execution
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run().catch(console.error);
}

module.exports = ComprehensiveSyntaxFixer;
// Run the syntax fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.run().catch(console.error);
// Run the syntax fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.run().catch(console.error);



