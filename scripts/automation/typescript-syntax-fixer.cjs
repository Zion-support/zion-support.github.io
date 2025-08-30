#!/usr/bin/env node

/**
 * TypeScript Syntax Fixer - PM2 Automation
 * Automatically fixes common TypeScript and JSX syntax errors
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class TypeScriptSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'typescript-syntax-fixer.log');
    this.fixesLog = path.join(this.projectRoot, 'logs', 'syntax-fixes.json');
    this.ensureLogsDirectory();
  }

  ensureLogsDirectory() {
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}\n`;
    fs.appendFileSync(this.logFile, logEntry);
    console.log(`[${level}] ${message}`);
  }

  async runSyntaxFix() {
    this.log('Starting TypeScript syntax fix automation...');
    
    const fixes = [];
    const errors = [];

    try {
      // 1. Scan for corrupted files
      const corruptedFiles = await this.scanForCorruptedFiles();
      
      // 2. Fix each corrupted file
      for (const file of corruptedFiles) {
        try {
          const fix = await this.fixFile(file);
          if (fix) fixes.push(fix);
        } catch (error) {
          errors.push({
            file: file,
            error: error.message
          });
        }
      }

      // 3. Run type check to verify fixes
      const typeCheckResult = await this.runTypeCheck();
      
      // 4. Generate report
      await this.generateReport(fixes, errors, typeCheckResult);
      
      // 5. Commit fixes if successful
      if (fixes.length > 0 && errors.length === 0) {
        await this.commitFixes(fixes);
      }

    } catch (error) {
      this.log(`Syntax fix automation failed: ${error.message}`, 'ERROR');
    }

    return { fixes, errors };
  }

  async scanForCorruptedFiles() {
    const corrupted = [];
    const srcPath = path.join(this.projectRoot, 'src');
    
    if (!fs.existsSync(srcPath)) return corrupted;

    try {
      const files = await this.getAllFiles(srcPath);
      
      for (const file of files) {
        if (file.endsWith('.tsx') || file.endsWith('.ts')) {
          try {
            const content = fs.readFileSync(file, 'utf8');
            
            // Check for corruption patterns
            if (this.isCorrupted(content)) {
              corrupted.push({
                path: file,
                content: content,
                issues: this.detectIssues(content)
              });
            }
          } catch (error) {
            this.log(`Error reading file ${file}: ${error.message}`, 'WARN');
          }
        }
      }
    } catch (error) {
      this.log(`Error scanning files: ${error.message}`, 'ERROR');
    }

    return corrupted;
  }

  isCorrupted(content) {
    const corruptionPatterns = [
      /import:\s*{/,
      /const:\s*[^,]+,\s*[^:]+:\s*\.FC/,
      /from,\s*'[^']+'/,
      /}, from,/,
      /import:\s*React,\s*from,\s*'react':/,
      /import:\s*{([^}]+)},\s*from,\s*'([^']+)':/
    ];

    return corruptionPatterns.some(pattern => pattern.test(content));
  }

  detectIssues(content) {
    const issues = [];
    
    // Check for malformed imports
    if (content.includes('import: {')) {
      issues.push('MALFORMED_IMPORT');
    }
    
    // Check for malformed const declarations
    if (content.includes('const: ')) {
      issues.push('MALFORMED_CONST');
    }
    
    // Check for malformed from statements
    if (content.includes('from,')) {
      issues.push('MALFORMED_FROM');
    }
    
    // Check for unclosed JSX tags
    const openTags = (content.match(/<([A-Z][a-zA-Z]*)/g) || []).length;
    const closeTags = (content.match(/<\/[^>]*>/g) || []).length;
    if (Math.abs(openTags - closeTags) > 5) {
      issues.push('UNBALANCED_JSX');
    }

    return issues;
  }

  async getAllFiles(dir) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const item of items) {
        const fullPath = path.join(dir, item.name);
        
        if (item.isDirectory() && !item.name.startsWith('.') && item.name !== 'node_modules') {
          files.push(...await this.getAllFiles(fullPath));
        } else if (item.isFile()) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip inaccessible directories
    }
    
    return files;
  }

  async fixFile(fileInfo) {
    const { path: filePath, content, issues } = fileInfo;
    
    try {
      this.log(`Fixing file: ${filePath}`);
      
      let fixedContent = content;
      let fixesApplied = [];

      // Fix malformed imports
      if (issues.includes('MALFORMED_IMPORT')) {
        fixedContent = this.fixMalformedImports(fixedContent);
        fixesApplied.push('MALFORMED_IMPORT');
      }

      // Fix malformed const declarations
      if (issues.includes('MALFORMED_CONST')) {
        fixedContent = this.fixMalformedConst(fixedContent);
        fixesApplied.push('MALFORMED_CONST');
      }

      // Fix malformed from statements
      if (issues.includes('MALFORMED_FROM')) {
        fixedContent = this.fixMalformedFrom(fixedContent);
        fixesApplied.push('MALFORMED_FROM');
      }

      // Fix JSX balance
      if (issues.includes('UNBALANCED_JSX')) {
        fixedContent = this.fixJSXBalance(fixedContent);
        fixesApplied.push('UNBALANCED_JSX');
      }

      // Write fixed content
      if (fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent);
        
        return {
          file: filePath,
          fixesApplied: fixesApplied,
          timestamp: new Date().toISOString()
        };
      }

    } catch (error) {
      this.log(`Failed to fix file ${filePath}: ${error.message}`, 'ERROR');
      throw error;
    }

    return null;
  }

  fixMalformedImports(content) {
    // Fix: import: { Component } from 'react'
    content = content.replace(/import:\s*{([^}]+)},\s*from,\s*'([^']+)'/g, "import { $1 } from '$2'");
    
    // Fix: import: React from 'react'
    content = content.replace(/import:\s*([^,]+),\s*from,\s*'([^']+)'/g, "import $1 from '$2'");
    
    // Fix: import: { Component }, from, 'react'
    content = content.replace(/import:\s*{([^}]+)},\s*from,\s*'([^']+)'/g, "import { $1 } from '$2'");
    
    return content;
  }

  fixMalformedConst(content) {
    // Fix: const: Component, React: .FC
    content = content.replace(/const:\s*([^,]+),\s*([^:]+):\s*\.FC/g, "const $1: React.FC");
    
    // Fix: const: Component: React.FC
    content = content.replace(/const:\s*([^:]+):\s*React\.FC/g, "const $1: React.FC");
    
    return content;
  }

  fixMalformedFrom(content) {
    // Fix: from, 'react'
    content = content.replace(/from,\s*'([^']+)'/g, "from '$1'");
    
    // Fix: }, from, 'react'
    content = content.replace(/},\s*from,\s*'([^']+)'/g, "} from '$1'");
    
    return content;
  }

  fixJSXBalance(content) {
    // Count open and close tags
    const openTags = content.match(/<([A-Z][a-zA-Z]*)/g) || [];
    const closeTags = content.match(/<\/([^>]*)/g) || [];
    
    if (openTags.length > closeTags.length) {
      const missingTags = openTags.length - closeTags.length;
      
      // Add missing closing tags at the end
      for (let i = 0; i < missingTags; i++) {
        content += '\n      </div>';
      }
    }
    
    return content;
  }

  async runTypeCheck() {
    try {
      this.log('Running TypeScript type check...');
      execSync('npm run type-check', { 
        cwd: this.projectRoot, 
        stdio: 'pipe' 
      });
      
      return { success: true, errors: 0 };
    } catch (error) {
      const output = String(error.stdout || error.stderr || '');
      const errorCount = (output.match(/error TS/g) || []).length;
      
      return { success: false, errors: errorCount, output };
    }
  }

  async generateReport(fixes, errors, typeCheckResult) {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalFixes: fixes.length,
        totalErrors: errors.length,
        typeCheckSuccess: typeCheckResult.success,
        remainingErrors: typeCheckResult.errors || 0
      },
      fixes: fixes,
      errors: errors,
      typeCheckResult: typeCheckResult
    };

    fs.writeFileSync(this.fixesLog, JSON.stringify(report, null, 2));
    
    this.log(`Syntax fix report generated: ${fixes.length} fixes applied, ${errors.length} errors encountered`);
    
    return report;
  }

  async commitFixes(fixes) {
    try {
      this.log('Committing syntax fixes...');
      
      // Add fixed files
      for (const fix of fixes) {
        execSync(`git add "${fix.file}"`, { cwd: this.projectRoot, stdio: 'pipe' });
      }
      
      // Commit
      const commitMessage = `fix: Auto-fix TypeScript/JSX syntax issues (${fixes.length} files)`;
      execSync(`git commit -m "${commitMessage}"`, { cwd: this.projectRoot, stdio: 'pipe' });
      
      this.log('Syntax fixes committed successfully');
      
    } catch (error) {
      this.log(`Failed to commit fixes: ${error.message}`, 'WARN');
    }
  }
}

// Main execution
async function main() {
  const fixer = new TypeScriptSyntaxFixer();
  
  try {
    const result = await fixer.runSyntaxFix();
    
    if (result.errors.length === 0 && result.fixes.length > 0) {
      process.exit(0); // Success
    } else if (result.errors.length > 0) {
      process.exit(1); // Errors occurred
    } else {
      process.exit(2); // No fixes needed
    }
    
  } catch (error) {
    fixer.log(`Fatal error: ${error.message}`, 'ERROR');
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = TypeScriptSyntaxFixer;
