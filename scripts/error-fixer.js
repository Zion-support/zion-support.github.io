#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class ErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.fixesApplied = 0;
    this.errorsFixed = [];
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logsDir, 'error-fixer.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runCommand(command, options = {}) {
    return new Promise((resolve, reject) => {
      const child = spawn(command, options.args || [], {
        shell: true,
        stdio: 'pipe',
        cwd: this.projectRoot,
        ...options
      });

      let stdout = '';
      let stderr = '';

      child.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      child.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      child.on('close', (code) => {
        if (code === 0) {
          resolve({ stdout, stderr, code });
        } else {
          reject({ stdout, stderr, code });
        }
      });

      child.on('error', (error) => {
        reject({ error, stdout, stderr });
      });
    });
  }

  async fixLintingErrors() {
    this.log('Starting linting error fixes...');
    
    try {
      // Run ESLint with auto-fix
      const result = await this.runCommand('npm', { args: ['run', 'lint', '--', '--fix'] });
      this.log('ESLint auto-fix completed');
      this.fixesApplied++;
      this.errorsFixed.push('ESLint auto-fixes applied');
    } catch (error) {
      this.log(`ESLint auto-fix failed: ${error.stderr || error.message}`, 'WARN');
    }
  }

  async fixTypeScriptErrors() {
    this.log('Starting TypeScript error fixes...');
    
    try {
      // Check for TypeScript errors
      const result = await this.runCommand('npm', { args: ['run', 'type-check'] });
      this.log('TypeScript check completed - no errors found');
    } catch (error) {
      this.log('TypeScript errors detected, attempting fixes...', 'WARN');
      
      // Try to fix common TypeScript issues
      await this.fixCommonTypeScriptIssues();
    }
  }

  async fixCommonTypeScriptIssues() {
    this.log('Fixing common TypeScript issues...');
    
    // Fix JSX syntax issues
    await this.fixJSXSyntaxIssues();
    
    // Fix import/export issues
    await this.fixImportExportIssues();
    
    // Fix unused variable issues
    await this.fixUnusedVariableIssues();
  }

  async fixJSXSyntaxIssues() {
    this.log('Fixing JSX syntax issues...');
    
    const jsxFiles = this.findFiles('.tsx', '.jsx');
    
    for (const file of jsxFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fixed = false;
        
        // Fix missing React imports
        if (content.includes('JSX') && !content.includes("import React")) {
          content = "import React from 'react';\n" + content;
          fixed = true;
        }
        
        // Fix JSX fragment syntax
        content = content.replace(/<>\s*<\/>/g, '<></>');
        
        // Fix unclosed JSX tags
        content = this.fixUnclosedJSXTags(content);
        
        if (fixed) {
          fs.writeFileSync(file, content);
          this.log(`Fixed JSX issues in ${file}`);
          this.fixesApplied++;
          this.errorsFixed.push(`JSX fixes in ${file}`);
        }
      } catch (error) {
        this.log(`Error fixing JSX in ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  fixUnclosedJSXTags(content) {
    // Simple heuristic to fix common unclosed tag issues
    const lines = content.split('\n');
    const fixedLines = [];
    let openTags = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Count opening and closing tags
      const openMatches = line.match(/<([a-zA-Z][a-zA-Z0-9]*)/g);
      const closeMatches = line.match(/<\/([a-zA-Z][a-zA-Z0-9]*)/g);
      
      if (openMatches) {
        openMatches.forEach(match => {
          const tagName = match.slice(1);
          openTags.push(tagName);
        });
      }
      
      if (closeMatches) {
        closeMatches.forEach(match => {
          const tagName = match.slice(2);
          const index = openTags.lastIndexOf(tagName);
          if (index !== -1) {
            openTags.splice(index, 1);
          }
        });
      }
      
      fixedLines.push(line);
    }
    
    // Add missing closing tags
    while (openTags.length > 0) {
      const tagName = openTags.pop();
      fixedLines.push(`</${tagName}>`);
    }
    
    return fixedLines.join('\n');
  }

  async fixImportExportIssues() {
    this.log('Fixing import/export issues...');
    
    const tsFiles = this.findFiles('.ts', '.tsx');
    
    for (const file of tsFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fixed = false;
        
        // Fix missing React imports for JSX files
        if (file.endsWith('.tsx') && content.includes('JSX') && !content.includes("import React")) {
          content = "import React from 'react';\n" + content;
          fixed = true;
        }
        
        // Fix unused imports
        content = this.removeUnusedImports(content);
        
        if (fixed) {
          fs.writeFileSync(file, content);
          this.log(`Fixed import issues in ${file}`);
          this.fixesApplied++;
          this.errorsFixed.push(`Import fixes in ${file}`);
        }
      } catch (error) {
        this.log(`Error fixing imports in ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  removeUnusedImports(content) {
    // Simple heuristic to remove obviously unused imports
    const lines = content.split('\n');
    const usedImports = new Set();
    
    // Find used identifiers
    for (const line of lines) {
      const matches = line.match(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\b/g);
      if (matches) {
        matches.forEach(match => usedImports.add(match));
      }
    }
    
    // Remove unused import lines
    const filteredLines = lines.filter(line => {
      if (line.trim().startsWith('import')) {
        const importMatch = line.match(/import\s+.*?from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const moduleName = importMatch[1];
          // Keep React imports and other essential ones
          if (moduleName === 'react' || moduleName === 'react-dom') {
            return true;
          }
          // Check if any imported items are used
          const importItems = line.match(/\{([^}]+)\}/);
          if (importItems) {
            const items = importItems[1].split(',').map(item => item.trim());
            return items.some(item => usedImports.has(item));
          }
        }
      }
      return true;
    });
    
    return filteredLines.join('\n');
  }

  async fixUnusedVariableIssues() {
    this.log('Fixing unused variable issues...');
    
    const tsFiles = this.findFiles('.ts', '.tsx');
    
    for (const file of tsFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fixed = false;
        
        // Remove unused variables (simple heuristic)
        content = this.removeUnusedVariables(content);
        
        if (fixed) {
          fs.writeFileSync(file, content);
          this.log(`Fixed unused variables in ${file}`);
          this.fixesApplied++;
          this.errorsFixed.push(`Unused variable fixes in ${file}`);
        }
      } catch (error) {
        this.log(`Error fixing unused variables in ${file}: ${error.message}`, 'ERROR');
      }
    }
  }

  removeUnusedVariables(content) {
    // Simple heuristic to remove unused variables
    const lines = content.split('\n');
    const usedVars = new Set();
    
    // Find used variables
    for (const line of lines) {
      const matches = line.match(/\b([a-zA-Z_$][a-zA-Z0-9_$]*)\b/g);
      if (matches) {
        matches.forEach(match => usedVars.add(match));
      }
    }
    
    // Remove lines with unused variable declarations
    const filteredLines = lines.filter(line => {
      if (line.includes('const') || line.includes('let') || line.includes('var')) {
        const varMatch = line.match(/(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/);
        if (varMatch) {
          const varName = varMatch[1];
          // Keep variables that are used or are likely important
          if (usedVars.has(varName) || varName.startsWith('_') || varName === 'React') {
            return true;
          }
          return false;
        }
      }
      return true;
    });
    
    return filteredLines.join('\n');
  }

  findFiles(...extensions) {
    const files = [];
    
    function walkDir(dir) {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile()) {
          if (extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        }
      }
    }
    
    walkDir(this.projectRoot);
    return files;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixesApplied: this.fixesApplied,
      errorsFixed: this.errorsFixed,
      summary: `Applied ${this.fixesApplied} fixes to resolve ${this.errorsFixed.length} error categories`
    };
    
    const reportFile = path.join(this.logsDir, 'error-fix-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Error fix report generated: ${reportFile}`);
    return report;
  }

  async run() {
    this.log('Starting Error Fixer automation...');
    
    try {
      // Create logs directory if it doesn't exist
      if (!fs.existsSync(this.logsDir)) {
        fs.mkdirSync(this.logsDir, { recursive: true });
      }
      
      // Run all fix operations
      await this.fixLintingErrors();
      await this.fixTypeScriptErrors();
      
      // Generate report
      const report = await this.generateReport();
      
      this.log(`Error Fixer completed successfully. ${report.summary}`);
      
      // Exit successfully
      process.exit(0);
      
    } catch (error) {
      this.log(`Error Fixer failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the error fixer if this script is executed directly
if (require.main === module) {
  const fixer = new ErrorFixer();
  fixer.run();
}

module.exports = ErrorFixer;