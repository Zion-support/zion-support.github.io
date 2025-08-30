#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class TypeCheckAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logsDir = path.join(this.projectRoot, 'logs');
    this.isRunning = false;
    this.checkInterval = 10 * 60 * 1000; // 10 minutes
    this.lastCheck = null;
    this.errorCount = 0;
    this.lastErrorReport = null;
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    
    // Write to log file
    const logFile = path.join(this.logsDir, 'type-check-automation.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  async runTypeCheck() {
    if (this.isRunning) {
      this.log('Type check already in progress, skipping...', 'WARN');
      return;
    }

    this.isRunning = true;
    this.log('Starting TypeScript type check...');

    try {
      const result = await this.runCommand('npm', { args: ['run', 'type-check'] });
      this.log('TypeScript check completed successfully - no errors found');
      this.lastCheck = new Date();
      this.errorCount = 0;
      
      // Clear error report if no errors
      if (this.lastErrorReport) {
        this.lastErrorReport = null;
      }
    } catch (error) {
      this.errorCount++;
      this.log(`TypeScript check failed with ${this.errorCount} error(s): ${error.stderr || error.message}`, 'WARN');
      
      // Store error details for analysis
      this.lastErrorReport = {
        timestamp: new Date().toISOString(),
        errorCount: this.errorCount,
        errorOutput: error.stderr || error.message
      };
      
      // Try to auto-fix common TypeScript issues
      await this.autoFixTypeScriptIssues();
    } finally {
      this.isRunning = false;
    }
  }

  async autoFixTypeScriptIssues() {
    this.log('Attempting to auto-fix TypeScript issues...');
    
    try {
      // Fix common JSX syntax issues
      await this.fixJSXSyntaxIssues();
      
      // Fix import/export issues
      await this.fixImportExportIssues();
      
      // Fix type annotation issues
      await this.fixTypeAnnotationIssues();
      
      // Run type check again to verify fixes
      await this.verifyFixes();
    } catch (error) {
      this.log(`Auto-fix failed: ${error.message}`, 'ERROR');
    }
  }

  async fixJSXSyntaxIssues() {
    this.log('Fixing JSX syntax issues...');
    
    const jsxFiles = this.findFiles('.tsx', '.jsx');
    let fixedCount = 0;
    
    for (const file of jsxFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fixed = false;
        
        // Fix missing React imports for JSX files
        if (file.endsWith('.tsx') && content.includes('JSX') && !content.includes("import React")) {
          content = "import React from 'react';\n" + content;
          fixed = true;
        }
        
        // Fix JSX fragment syntax
        content = content.replace(/<>\s*<\/>/g, '<></>');
        
        // Fix unclosed JSX tags
        content = this.fixUnclosedJSXTags(content);
        
        if (fixed) {
          fs.writeFileSync(file, content);
          fixedCount++;
          this.log(`Fixed JSX issues in ${file}`);
        }
      } catch (error) {
        this.log(`Error fixing JSX in ${file}: ${error.message}`, 'ERROR');
      }
    }
    
    if (fixedCount > 0) {
      this.log(`Fixed JSX issues in ${fixedCount} files`);
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
    let fixedCount = 0;
    
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
          fixedCount++;
          this.log(`Fixed import issues in ${file}`);
        }
      } catch (error) {
        this.log(`Error fixing imports in ${file}: ${error.message}`, 'ERROR');
      }
    }
    
    if (fixedCount > 0) {
      this.log(`Fixed import issues in ${fixedCount} files`);
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

  async fixTypeAnnotationIssues() {
    this.log('Fixing type annotation issues...');
    
    const tsFiles = this.findFiles('.ts', '.tsx');
    let fixedCount = 0;
    
    for (const file of tsFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let fixed = false;
        
        // Fix common type annotation issues
        content = this.fixCommonTypeIssues(content);
        
        if (fixed) {
          fs.writeFileSync(file, content);
          fixedCount++;
          this.log(`Fixed type issues in ${file}`);
        }
      } catch (error) {
        this.log(`Error fixing types in ${file}: ${error.message}`, 'ERROR');
      }
    }
    
    if (fixedCount > 0) {
      this.log(`Fixed type issues in ${fixedCount} files`);
    }
  }

  fixCommonTypeIssues(content) {
    // Fix common TypeScript type issues
    let fixed = false;
    
    // Fix missing return type annotations
    content = content.replace(
      /function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g,
      'function $1(): any('
    );
    
    // Fix missing parameter types
    content = content.replace(
      /\(\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:/g,
      '($1: any:'
    );
    
    // Fix missing variable types
    content = content.replace(
      /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^;]+);/g,
      (match, varName, value) => {
        if (value.includes('useState') || value.includes('useEffect')) {
          return match; // Keep React hooks as is
        }
        return `const ${varName}: any = ${value};`;
      }
    );
    
    return content;
  }

  async verifyFixes() {
    this.log('Verifying TypeScript fixes...');
    
    try {
      const result = await this.runCommand('npm', { args: ['run', 'type-check'] });
      this.log('Verification successful - all TypeScript issues resolved');
    } catch (error) {
      this.log(`Verification failed - some TypeScript issues remain: ${error.stderr || error.message}`, 'WARN');
      
      // Generate detailed report of remaining issues
      await this.generateTypeCheckReport();
    }
  }

  async generateTypeCheckReport() {
    this.log('Generating TypeScript check report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      errorCount: this.errorCount,
      lastErrorReport: this.lastErrorReport,
      summary: `TypeScript check failed with ${this.errorCount} error(s)`
    };
    
    const reportFile = path.join(this.logsDir, 'typescript-check-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`TypeScript check report generated: ${reportFile}`);
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

  async startMonitoring() {
    this.log('Starting TypeScript check automation monitoring...');
    
    // Create logs directory if it doesn't exist
    if (!fs.existsSync(this.logsDir)) {
      fs.mkdirSync(this.logsDir, { recursive: true });
    }
    
    // Initial check
    await this.runTypeCheck();
    
    // Set up periodic checks
    setInterval(async () => {
      await this.runTypeCheck();
    }, this.checkInterval);
    
    this.log(`TypeScript check automation monitoring started. Checking every ${this.checkInterval / 1000 / 60} minutes.`);
    
    // Keep the process alive
    process.on('SIGINT', () => {
      this.log('Received SIGINT, shutting down gracefully...');
      process.exit(0);
    });
    
    process.on('SIGTERM', () => {
      this.log('Received SIGTERM, shutting down gracefully...');
      process.exit(0);
    });
  }

  async run() {
    try {
      await this.startMonitoring();
    } catch (error) {
      this.log(`TypeScript check automation failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the TypeScript check automation if this script is executed directly
if (require.main === module) {
  const automation = new TypeCheckAutomation();
  automation.run();
}

module.exports = TypeCheckAutomation;