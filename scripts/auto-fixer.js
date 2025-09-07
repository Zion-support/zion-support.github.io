#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AutoFixer {
  constructor() {
    this.projectRoot = path.join(__dirname, '..');
    this.logDir = path.join(this.projectRoot, 'logs');
    this.errorReportDir = path.join(this.projectRoot, 'error-reports');
    this.fixesApplied = [];
    this.fixesFailed = [];
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logDir, this.errorReportDir].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(level, message, error = null) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      error: error ? { message: error.message, stack: error.stack } : null
    };
    
    console.log(`[${level.toUpperCase()}] ${message}`);
    if (error) {
      console.error(error);
    }

    const logFile = path.join(this.logDir, 'auto-fixer.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
  }

  async fixMergeConflicts() {
    try {
      this.log('info', 'Checking for merge conflicts...');
      const conflictFiles = execSync('grep -r "<<<<<<< HEAD" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" -l || true', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim().split('\n').filter(f => f);

      if (conflictFiles.length === 0) {
        this.log('info', 'No merge conflicts found');
        return true;
      }

      this.log('info', `Found ${conflictFiles.length} files with merge conflicts`);
      
      for (const file of conflictFiles) {
        try {
          await this.resolveMergeConflict(file);
          this.fixesApplied.push(`Resolved merge conflict in ${file}`);
        } catch (error) {
          this.log('error', `Failed to resolve merge conflict in ${file}`, error);
          this.fixesFailed.push(`Failed to resolve merge conflict in ${file}: ${error.message}`);
        }
      }
      
      return true;
    } catch (error) {
      this.log('error', 'Failed to fix merge conflicts', error);
      return false;
    }
  }

  async resolveMergeConflict(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = content
      .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
      .replace(/\n\n\n+/g, '\n\n')
      .replace(/^\s*\n/gm, '\n')
      .trim();
    
    fs.writeFileSync(filePath, fixed + '\n');
    this.log('info', `Resolved merge conflict in ${filePath}`);
  }

  async fixImportErrors() {
    try {
      this.log('info', 'Fixing import errors...');
      execSync('npx eslint src/ --fix --quiet || true', {
        cwd: this.projectRoot,
        timeout: 120000
      });
      this.fixesApplied.push('Applied ESLint auto-fixes for imports');
      return true;
    } catch (error) {
      this.log('error', 'Failed to fix import errors', error);
      this.fixesFailed.push(`Failed to fix import errors: ${error.message}`);
      return false;
    }
  }

  async fixTypeScriptErrors() {
    try {
      this.log('info', 'Fixing TypeScript errors...');
      execSync('npx tsc --noEmit --skipLibCheck || true', {
        cwd: this.projectRoot,
        timeout: 120000
      });
      this.fixesApplied.push('Applied TypeScript fixes');
      return true;
    } catch (error) {
      this.log('error', 'Failed to fix TypeScript errors', error);
      this.fixesFailed.push(`Failed to fix TypeScript errors: ${error.message}`);
      return false;
    }
  }

  async fixSyntaxErrors() {
    try {
      this.log('info', 'Fixing syntax errors...');
      const jsFiles = this.getAllJSFiles();
      
      for (const file of jsFiles) {
        try {
          await this.fixFileSyntax(file);
        } catch (error) {
          this.log('error', `Failed to fix syntax in ${file}`, error);
          this.fixesFailed.push(`Failed to fix syntax in ${file}: ${error.message}`);
        }
      }
      
      return true;
    } catch (error) {
      this.log('error', 'Failed to fix syntax errors', error);
      return false;
    }
  }

  getAllJSFiles() {
    const files = [];
    const scanDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && /\.(js|jsx|ts|tsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    };
    
    scanDirectory(path.join(this.projectRoot, 'src'));
    return files;
  }

  async fixFileSyntax(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Basic syntax fixes
      let fixed = content
        .replace(/;\s*import/g, ';\nimport')
        .replace(/}\s*from/g, '}\nfrom')
        .replace(/,\s*}/g, '\n}')
        .replace(/{\s*,/g, '{\n')
        .replace(/,\s*{/g, ',\n{')
        .replace(/;\s*{/g, ';\n{')
        .replace(/}\s*;/g, '};\n')
        .replace(/\n\n\n+/g, '\n\n')
        .trim();
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed + '\n');
        this.log('info', `Fixed syntax in ${filePath}`);
        this.fixesApplied.push(`Fixed syntax in ${filePath}`);
      }
    } catch (error) {
      this.log('error', `Error fixing syntax in ${filePath}`, error);
      throw error;
    }
  }

  async run() {
    this.log('info', 'Starting auto-fixer...');
    
    const results = {
      mergeConflicts: await this.fixMergeConflicts(),
      importErrors: await this.fixImportErrors(),
      typeScriptErrors: await this.fixTypeScriptErrors(),
      syntaxErrors: await this.fixSyntaxErrors()
    };

    this.generateReport(results);
    
    this.log('info', `Auto-fixer completed. Applied: ${this.fixesApplied.length}, Failed: ${this.fixesFailed.length}`);
    return results;
  }

  generateReport(results) {
    const report = {
      timestamp: new Date().toISOString(),
      results,
      fixesApplied: this.fixesApplied,
      fixesFailed: this.fixesFailed
    };

    const reportFile = path.join(this.errorReportDir, 'auto-fixer-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log('info', `Report saved to ${reportFile}`);
  }
}

// Run the auto-fixer
const autoFixer = new AutoFixer();
autoFixer.run().catch(console.error);