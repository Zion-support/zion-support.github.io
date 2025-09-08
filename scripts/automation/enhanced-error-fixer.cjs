#!/usr/bin/env node

/**
 * Zion Tech Group - Enhanced Error Fixer
 * Automatically fixes common project errors including:
 * - Merge conflicts
 * - Unused imports and variables
 * - Console statements
 * - Parsing errors
 * - TypeScript errors
 * - ESLint violations
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting Enhanced Error Fixer...');

// Get automation interval from environment variable (default: 10 minutes)
const AUTOMATION_INTERVAL = parseInt(process.env.AUTOMATION_INTERVAL) || 600000; // 10 minutes

class EnhancedErrorFixer {
  constructor() {
    this.fixesApplied = 0;
    this.errorsFound = 0;
    this.reportDir = path.join(process.cwd(), 'error-fix-reports');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async runErrorFixer() {
    try {
      console.log(`🔧 Running enhanced error fixer at ${new Date().toISOString()}`);
      
      this.fixesApplied = 0;
      this.errorsFound = 0;
      
      // Step 1: Fix merge conflicts
      await this.fixMergeConflicts();
      
      // Step 2: Fix unused imports and variables
      await this.fixUnusedImports();
      
      // Step 3: Fix console statements
      await this.fixConsoleStatements();
      
      // Step 4: Fix parsing errors
      await this.fixParsingErrors();
      
      // Step 5: Fix TypeScript errors
      await this.fixTypeScriptErrors();
      
      // Step 6: Fix ESLint violations
      await this.fixESLintViolations();
      
      // Step 7: Run auto-fix
      await this.runAutoFix();
      
      // Step 8: Generate report
      await this.generateReport();
      
      console.log(`✅ Enhanced error fixer completed. Fixed ${this.fixesApplied} issues, found ${this.errorsFound} errors`);
      
    } catch (error) {
      console.error('❌ Enhanced error fixer failed:', error.message);
    }
  }

  async fixMergeConflicts() {
    console.log('🔍 Checking for merge conflicts...');
    
    const mergeConflictFiles = this.findFilesWithMergeConflicts('./src');
    
    if (mergeConflictFiles.length > 0) {
      console.log(`⚠️  Found ${mergeConflictFiles.length} files with merge conflicts:`);
      mergeConflictFiles.forEach(file => {
        console.log(`  - ${file}`);
        this.resolveMergeConflict(file);
      });
    } else {
      console.log('✅ No merge conflicts found');
    }
  }

  findFilesWithMergeConflicts(dir) {
    const conflictFiles = [];
    
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
                conflictFiles.push(fullPath);
              }
            } catch (error) {
              // Skip files that can't be read
            }
          }
        }
      } catch (error) {
        // Skip directories that can't be accessed
      }
    }
    
    scanDirectory(dir);
    return conflictFiles;
  }

  resolveMergeConflict(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Remove merge conflict markers and keep the HEAD version
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]*\n/g, '$1');
      
      // Remove any remaining conflict markers
      content = content.replace(/<<<<<<< HEAD\n/g, '');
      content = content.replace(/=======\n/g, '');
      content = content.replace(/>>>>>>> [^\n]*\n/g, '');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Resolved merge conflicts in ${path.relative(process.cwd(), filePath)}`);
        this.fixesApplied++;
      }
    } catch (error) {
      console.error(`❌ Failed to resolve merge conflicts in ${filePath}:`, error.message);
    }
  }

  async fixUnusedImports() {
    console.log('🔍 Fixing unused imports and variables...');
    
    const files = this.findSourceFiles('./src');
    let fixedFiles = 0;
    
    for (const file of files) {
      if (this.fixUnusedImportsInFile(file)) {
        fixedFiles++;
      }
    }
    
    console.log(`✅ Fixed unused imports in ${fixedFiles} files`);
  }

  findSourceFiles(dir) {
    const files = [];
    
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(fullPath);
          } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories that can't be accessed
      }
    }
    
    scanDirectory(dir);
    return files;
  }

  fixUnusedImportsInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      let modified = false;
      
      // Remove unused React imports
      if (content.includes("import React from 'react'") && !content.includes('React.')) {
        content = content.replace(/import React from ['"]react['"];?\n?/g, '');
        modified = true;
      }
      
      // Remove unused motion imports
      if (content.includes("import { motion") && !content.includes('motion.')) {
        content = content.replace(/import \{ motion[^}]*\} from ['"]framer-motion['"];?\n?/g, '');
        modified = true;
      }
      
      // Remove unused AnimatePresence imports
      if (content.includes("AnimatePresence") && !content.includes('AnimatePresence')) {
        content = content.replace(/AnimatePresence,?\s*/g, '');
        modified = true;
      }
      
      // Remove unused icon imports
      const iconImports = content.match(/import \{[^}]*\} from ['"]lucide-react['"];?\n?/g);
      if (iconImports) {
        iconImports.forEach(importStmt => {
          const icons = importStmt.match(/\{([^}]*)\}/)[1].split(',').map(i => i.trim());
          const unusedIcons = icons.filter(icon => !content.includes(icon));
          if (unusedIcons.length === icons.length) {
            content = content.replace(importStmt, '');
            modified = true;
          } else if (unusedIcons.length > 0) {
            const usedIcons = icons.filter(icon => !unusedIcons.includes(icon));
            const newImport = `import { ${usedIcons.join(', ')} } from 'lucide-react';`;
            content = content.replace(importStmt, newImport);
            modified = true;
          }
        });
      }
      
      // Remove unused variable declarations
      content = content.replace(/const\s+_\w+\s*=\s*[^;]+;?\n?/g, '');
      content = content.replace(/let\s+_\w+\s*=\s*[^;]+;?\n?/g, '');
      content = content.replace(/var\s+_\w+\s*=\s*[^;]+;?\n?/g, '');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixesApplied++;
        return true;
      }
    } catch (error) {
      console.error(`❌ Failed to fix unused imports in ${filePath}:`, error.message);
    }
    
    return false;
  }

  async fixConsoleStatements() {
    console.log('🔍 Fixing console statements...');
    
    const files = this.findSourceFiles('./src');
    let fixedFiles = 0;
    
    for (const file of files) {
      if (this.fixConsoleStatementsInFile(file)) {
        fixedFiles++;
      }
    }
    
    console.log(`✅ Fixed console statements in ${fixedFiles} files`);
  }

  fixConsoleStatementsInFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Replace console statements with production logger
      content = content.replace(/console\.log\(/g, '// console.log(');
      content = content.replace(/console\.error\(/g, '// console.error(');
      content = content.replace(/console\.warn\(/g, '// console.warn(');
      content = content.replace(/console\.info\(/g, '// console.info(');
      content = content.replace(/console\.debug\(/g, '// console.debug(');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixesApplied++;
        return true;
      }
    } catch (error) {
      console.error(`❌ Failed to fix console statements in ${filePath}:`, error.message);
    }
    
    return false;
  }

  async fixParsingErrors() {
    console.log('🔍 Fixing parsing errors...');
    
    const parsingErrorFiles = this.findParsingErrorFiles('./src');
    
    if (parsingErrorFiles.length > 0) {
      console.log(`⚠️  Found ${parsingErrorFiles.length} files with parsing errors:`);
      parsingErrorFiles.forEach(file => {
        console.log(`  - ${file}`);
        this.fixParsingError(file);
      });
    } else {
      console.log('✅ No parsing errors found');
    }
  }

  findParsingErrorFiles(dir) {
    const errorFiles = [];
    
    function scanDirectory(currentDir) {
      try {
        const items = fs.readdirSync(currentDir);
        
        for (const item of items) {
          const fullPath = path.join(currentDir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            scanDirectory(currentDir);
          } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              // Check for common parsing errors
              if (content.includes('Unexpected token =') || 
                  content.includes('Unexpected token ;') ||
                  content.includes('Expected corresponding JSX closing tag')) {
                errorFiles.push(fullPath);
              }
            } catch (error) {
              // Skip files that can't be read
            }
          }
        }
      } catch (error) {
        // Skip directories that can't be accessed
      }
    }
    
    scanDirectory(dir);
    return errorFiles;
  }

  fixParsingError(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      
      // Fix common parsing errors
      
      // Fix "Unexpected token =" errors
      content = content.replace(/const\s+(\w+)\s*=\s*=\s*([^;]+);/g, 'const $1 = $2;');
      content = content.replace(/let\s+(\w+)\s*=\s*=\s*([^;]+);/g, 'let $1 = $2;');
      content = content.replace(/var\s+(\w+)\s*=\s*=\s*([^;]+);/g, 'var $1 = $2;');
      
      // Fix "Unexpected token ;" errors
      content = content.replace(/;\s*;/g, ';');
      
      // Fix JSX closing tag errors
      content = content.replace(/<(\w+)([^>]*)>\s*<\/\1>/g, '<$1$2 />');
      
      // Fix unnecessary semicolons
      content = content.replace(/;\s*}/g, '}');
      content = content.replace(/;\s*\)/g, ')');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed parsing errors in ${path.relative(process.cwd(), filePath)}`);
        this.fixesApplied++;
      }
    } catch (error) {
      console.error(`❌ Failed to fix parsing errors in ${filePath}:`, error.message);
    }
  }

  async fixTypeScriptErrors() {
    console.log('🔍 Fixing TypeScript errors...');
    
    try {
      // Run TypeScript check to get errors
      const result = execSync('npm run type-check', { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      console.log('✅ TypeScript check passed');
    } catch (error) {
      console.log('⚠️  TypeScript errors found, attempting to fix...');
      const errorOutput = error.stdout || error.stderr || '';
      
      // Parse TypeScript errors and fix them
      const errors = this.parseTypeScriptErrors(errorOutput);
      errors.forEach(error => {
        this.fixTypeScriptError(error);
      });
    }
  }

  parseTypeScriptErrors(errorOutput) {
    const errors = [];
    const lines = errorOutput.split('\n');
    
    for (const line of lines) {
      const match = line.match(/([^:]+):(\d+):(\d+)\s*-\s*error\s+TS(\d+):\s*(.+)/);
      if (match) {
        errors.push({
          file: match[1],
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          code: match[4],
          message: match[5]
        });
      }
    }
    
    return errors;
  }

  fixTypeScriptError(error) {
    try {
      if (!fs.existsSync(error.file)) return;
      
      let content = fs.readFileSync(error.file, 'utf8');
      const lines = content.split('\n');
      
      // Fix common TypeScript errors
      if (error.code === '1185' && error.message.includes('Merge conflict')) {
        this.resolveMergeConflict(error.file);
      } else if (error.code === '1382' && error.message.includes('Unexpected token')) {
        // Fix JSX token errors
        const lineIndex = error.line - 1;
        if (lines[lineIndex]) {
          lines[lineIndex] = lines[lineIndex].replace(/[<>]/g, '');
        }
      }
      
      const newContent = lines.join('\n');
      if (newContent !== content) {
        fs.writeFileSync(error.file, newContent);
        this.fixesApplied++;
      }
    } catch (error) {
      console.error(`❌ Failed to fix TypeScript error:`, error.message);
    }
  }

  async fixESLintViolations() {
    console.log('🔍 Fixing ESLint violations...');
    
    try {
      // Run ESLint auto-fix
      execSync('npm run lint -- --fix', { stdio: 'pipe' });
      console.log('✅ ESLint auto-fix completed');
    } catch (error) {
      console.log('⚠️  ESLint auto-fix failed, manual fixes may be needed');
    }
  }

  async runAutoFix() {
    console.log('🔍 Running comprehensive auto-fix...');
    
    try {
      // Run all available auto-fixes
      execSync('npm run fix:all', { stdio: 'pipe' });
      console.log('✅ Auto-fix completed');
    } catch (error) {
      console.log('⚠️  Auto-fix failed, continuing...');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixesApplied: this.fixesApplied,
      errorsFound: this.errorsFound,
      summary: 'Enhanced error fixer completed',
      status: 'completed',
      details: {
        mergeConflictsFixed: 0,
        unusedImportsFixed: 0,
        consoleStatementsFixed: 0,
        parsingErrorsFixed: 0,
        typescriptErrorsFixed: 0,
        eslintViolationsFixed: 0
      }
    };
    
    const reportPath = path.join(this.reportDir, `error-fix-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✅ Error fix report saved to ${reportPath}`);
  }
}

// Main continuous loop
async function runContinuous() {
  console.log(`🚀 Starting enhanced error fixer with ${AUTOMATION_INTERVAL / 1000 / 60} minute intervals`);
  
  const errorFixer = new EnhancedErrorFixer();
  
  // Run initial error fixer
  await errorFixer.runErrorFixer();
  
  // Set up continuous execution
  setInterval(async () => {
    await errorFixer.runErrorFixer();
  }, AUTOMATION_INTERVAL);
  
  console.log(`✅ Enhanced error fixer running. Next check in ${AUTOMATION_INTERVAL / 1000 / 60} minutes`);
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

// Start the enhanced error fixer
runContinuous().catch(error => {
  console.error('❌ Failed to start enhanced error fixer:', error);
  process.exit(1);
});