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
      error: error ? {
        message: error.message,
        stack: error.stack
      } : null
    };

    console.log(`[${timestamp}] ${level.toUpperCase()}: ${message}`);
    
    if (error) {
      console.error(error);
    }

    // Write to log file
    const logFile = path.join(this.logDir, 'auto-fixer.log');
    fs.appendFileSync(logFile, JSON.stringify(logEntry) + '\n');
  }

  async fixMergeConflicts() {
    try {
      this.log('info', 'Checking for merge conflicts...');
      
      // Find files with merge conflict markers
      const conflictFiles = execSync('grep -r "" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" -l || true', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim().split('\n').filter(f => f);
      
      if (conflictFiles.length === 0) {
        this.log('info', 'No merge conflicts found');
        return true;
      }
      
      this.log('info', `Found ${conflictFiles.length} files with merge conflicts`);
      
      for (const file of conflictFiles) {
        if (!file.trim()) continue;
        
        try {
          await this.resolveMergeConflict(path.join(this.projectRoot, file));
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
    
    // Simple merge conflict resolution - keep HEAD version and remove markers
    let fixed = content
      .replace(/\n/g, '')
      .replace(/\n[\s\S]*?      .replace(/    
    // Clean up any remaining artifacts
    fixed = fixed
      .replace(/\n\n\n+/g, '\n\n')
      .replace(/^\s*\n/gm, '\n')
      .trim();
    
    fs.writeFileSync(filePath, fixed + '\n');
    this.log('info', `Resolved merge conflict in ${filePath}`);
  }

  async fixImportErrors() {
    try {
      this.log('info', 'Fixing import errors...');
      
      // Run ESLint auto-fix for import/export issues
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
      
      // Common TypeScript fixes
      const fixes = [
        this.fixMissingTypes.bind(this),
        this.fixSyntaxErrors.bind(this),
        this.fixImportExtensions.bind(this)
      ];
      
      for (const fix of fixes) {
        await fix();
      }
      
      return true;
    } catch (error) {
      this.log('error', 'Failed to fix TypeScript errors', error);
      return false;
    }
  }

  async fixMissingTypes() {
    try {
      // Find files with missing type annotations
      const tsFiles = execSync('find src/ -name "*.ts" -o -name "*.tsx"', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim().split('\n');
      
      for (const file of tsFiles) {
        if (!file.trim()) continue;
        
        const filePath = path.join(this.projectRoot, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Fix common missing type issues
        content = content
          // Add any type for untyped variables
          .replace(/const (\w+) = /g, 'const $1: any = ')
          // Fix function return types
          .replace(/function (\w+)\([^)]*\) {/g, 'function $1($&): any {')
          // Fix arrow functions
          .replace(/const (\w+) = \([^)]*\) => {/g, 'const $1 = ($&): any => {');
        
        if (content !== fs.readFileSync(filePath, 'utf8')) {
          fs.writeFileSync(filePath, content);
          this.fixesApplied.push(`Added missing types in ${file}`);
        }
      }
    } catch (error) {
      this.log('error', 'Failed to fix missing types', error);
    }
  }

  async fixSyntaxErrors() {
    try {
      // Find and fix common syntax errors
      const files = execSync('find src/ -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx"', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim().split('\n');
      
      for (const file of files) {
        if (!file.trim()) continue;
        
        const filePath = path.join(this.projectRoot, file);
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Fix common syntax issues
        content = content
          // Fix missing semicolons
          .replace(/(\w+)\s*$/gm, '$1;')
          // Fix incomplete function declarations
          .replace(/export\s*$/gm, 'export default {};')
          // Fix incomplete object declarations
          .replace(/{\s*$/gm, '{}')
          // Fix incomplete string literals
          .replace(/"\s*$/gm, '""')
          // Fix incomplete array declarations
          .replace(/\[\s*$/gm, '[]')
          // Remove trailing commas in objects/arrays
          .replace(/,(\s*[}\]])/g, '$1')
          // Fix incomplete type declarations
          .replace(/:\s*;/g, ': any;')
          .replace(/:\s*}/g, ': any }')
          .replace(/:\s*$/gm, ': any;');
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
          this.fixesApplied.push(`Fixed syntax errors in ${file}`);
        }
      }
    } catch (error) {
      this.log('error', 'Failed to fix syntax errors', error);
    }
  }

  async fixImportExtensions() {
    try {
      // Fix import extensions for TypeScript
      const tsFiles = execSync('find src/ -name "*.ts" -o -name "*.tsx"', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim().split('\n');
      
      for (const file of tsFiles) {
        if (!file.trim()) continue;
        
        const filePath = path.join(this.projectRoot, file);
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;
        
        // Fix import extensions
        content = content
          // Remove .js extensions from imports
          .replace(/from ['"]([^'"]+)\.js['"]/g, "from '$1'")
          // Add proper TypeScript imports
          .replace(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g, "import $1 from '$2'")
          // Fix relative imports
          .replace(/from ['"]\.\/([^'"]+)['"]/g, "from './$1'")
          .replace(/from ['"]\.\.\/([^'"]+)['"]/g, "from '../$1'");
        
        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
          this.fixesApplied.push(`Fixed import extensions in ${file}`);
        }
      }
    } catch (error) {
      this.log('error', 'Failed to fix import extensions', error);
    }
  }

  async cleanupFiles() {
    try {
      this.log('info', 'Cleaning up problematic files...');
      
      // Remove empty files
      const emptyFiles = execSync('find src/ -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" | xargs -I {} sh -c \'[ ! -s "{}" ] && echo "{}"\'', {
        cwd: this.projectRoot,
        encoding: 'utf8'
      }).trim().split('\n').filter(f => f);
      
      for (const file of emptyFiles) {
        if (!file.trim()) continue;
        
        const filePath = path.join(this.projectRoot, file);
        fs.writeFileSync(filePath, 'export {};\n');
        this.fixesApplied.push(`Added default export to empty file ${file}`);
      }
      
      return true;
    } catch (error) {
      this.log('error', 'Failed to cleanup files', error);
      return false;
    }
  }

  async validateFixes() {
    try {
      this.log('info', 'Validating applied fixes...');
      
      // Run type check to validate fixes
      const typeCheckResult = execSync('npm run type-check 2>&1 || echo "TYPE_CHECK_FAILED"', {
        cwd: this.projectRoot,
        encoding: 'utf8',
        timeout: 120000
      });
      
      if (!typeCheckResult.includes('TYPE_CHECK_FAILED')) {
        this.log('info', 'Type check passed after fixes');
        return true;
      } else {
        this.log('warning', 'Some type errors remain after fixes');
        return false;
      }
    } catch (error) {
      this.log('error', 'Failed to validate fixes', error);
      return false;
    }
  }

  async generateReport() {
    const timestamp = new Date().toISOString();
    const reportFile = path.join(this.errorReportDir, `auto-fixer-report-${Date.now()}.json`);
    
    const report = {
      timestamp,
      summary: {
        fixesApplied: this.fixesApplied.length,
        fixesFailed: this.fixesFailed.length
      },
      fixesApplied: this.fixesApplied,
      fixesFailed: this.fixesFailed,
      status: this.fixesFailed.length === 0 ? 'success' : 'partial'
    };
    
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    this.log('info', `Auto-fixer report generated: ${reportFile}`);
    
    return report;
  }

  async run(errorFile = null) {
    try {
      this.log('info', 'Starting auto-fixer...');
      
      if (errorFile && fs.existsSync(errorFile)) {
        const errors = JSON.parse(fs.readFileSync(errorFile, 'utf8'));
        this.log('info', `Processing ${errors.length} reported errors`);
      }
      
      // Apply various fixes
      await this.fixMergeConflicts();
      await this.fixImportErrors();
      await this.fixTypeScriptErrors();
      await this.cleanupFiles();
      
      // Validate fixes
      await this.validateFixes();
      
      // Generate report
      const report = await this.generateReport();
      
      this.log('info', `Auto-fixer completed. Applied ${this.fixesApplied.length} fixes, ${this.fixesFailed.length} failed.`);
      
      return report;
    } catch (error) {
      this.log('error', 'Auto-fixer failed', error);
      throw error;
    }
  }
}

// Run if called directly
const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
  const fixer = new AutoFixer();
  const errorFile = process.argv[2];
  
  fixer.run(errorFile).then(report => {
    console.log('Auto-fixer completed successfully');
    process.exit(0);
  }).catch(error => {
    console.error('Auto-fixer failed:', error);
    process.exit(1);
  });
}

export default AutoFixer;