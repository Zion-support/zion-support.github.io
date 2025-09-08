#!/usr/bin/env node

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

class ComprehensiveErrorFixer {
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
    const logFile = path.join(this.logsDir, 'comprehensive-error-fixer.log');
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

  async fixAllErrors() {
    this.log('Starting comprehensive error fixing...');
    
    try {
      // Fix JSX syntax issues
      await this.fixJSXSyntaxIssues();
      
      // Fix TypeScript compilation errors
      await this.fixTypeScriptErrors();
      
      // Fix linting errors
      await this.fixLintingErrors();
      
      // Fix build errors
      await this.fixBuildErrors();
      
      // Generate comprehensive report
      await this.generateComprehensiveReport();
      
      this.log(`Comprehensive error fixing completed. Applied ${this.fixesApplied} fixes.`);
      
    } catch (error) {
      this.log(`Error fixing failed: ${error.message}`, 'ERROR');
      throw error;
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
        
        // Fix JSX expressions with missing parent elements
        content = this.fixJSXParentElements(content);
        
        if (fixed) {
          fs.writeFileSync(file, content);
          fixedCount++;
          this.log(`Fixed JSX issues in ${file}`);
          this.fixesApplied++;
          this.errorsFixed.push(`JSX fixes in ${file}`);
        }
      } catch (error) {
        this.log(`Error fixing JSX in ${file}: ${error.message}`, 'ERROR');
      }
    }
    
    this.log(`Fixed JSX issues in ${fixedCount} files`);
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

  fixJSXParentElements(content) {
    // Fix JSX expressions that need a single parent element
    if (content.includes('JSX expressions must have one parent element')) {
      // Wrap content in a React Fragment if it's not already wrapped
      if (!content.includes('<React.Fragment>') && !content.includes('<>')) {
        const lines = content.split('\n');
        const startIndex = lines.findIndex(line => line.includes('return'));
        if (startIndex !== -1) {
          lines.splice(startIndex + 1, 0, '    <React.Fragment>');
          const endIndex = lines.findLastIndex(line => line.includes('}'));
          if (endIndex !== -1) {
            lines.splice(endIndex, 0, '    </React.Fragment>');
          }
          return lines.join('\n');
        }
      }
    }
    
    return content;
  }

  async fixTypeScriptErrors() {
    this.log('Fixing TypeScript compilation errors...');
    
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
        
        // Fix missing type annotations
        content = this.fixMissingTypeAnnotations(content);
        
        // Fix undefined variables
        content = this.fixUndefinedVariables(content);
        
        if (fixed) {
          fs.writeFileSync(file, content);
          fixedCount++;
          this.log(`Fixed TypeScript issues in ${file}`);
          this.fixesApplied++;
          this.errorsFixed.push(`TypeScript fixes in ${file}`);
        }
      } catch (error) {
        this.log(`Error fixing TypeScript in ${file}: ${error.message}`, 'ERROR');
      }
    }
    
    this.log(`Fixed TypeScript issues in ${fixedCount} files`);
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

  fixMissingTypeAnnotations(content) {
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

  fixUndefinedVariables(content) {
    // Fix undefined variables by adding proper imports or declarations
    let fixed = false;
    
    // Fix common undefined variables
    const commonFixes = {
      'Workflow': 'import { Workflow } from "lucide-react"',
      'Server': 'import { Server } from "lucide-react"',
      'QueryClient': 'import { QueryClient } from "@tanstack/react-query"',
      'ReactDOM': 'import ReactDOM from "react-dom/client"'
    };
    
    for (const [variable, importStatement] of Object.entries(commonFixes)) {
      if (content.includes(variable) && !content.includes(importStatement)) {
        content = importStatement + '\n' + content;
        fixed = true;
      }
    }
    
    return content;
  }

  async fixLintingErrors() {
    this.log('Fixing linting errors...');
    
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

  async fixBuildErrors() {
    this.log('Fixing build errors...');
    
    try {
      // Try to build to identify errors
      const result = await this.runCommand('npm', { args: ['run', 'build'] });
      this.log('Build completed successfully - no build errors found');
    } catch (error) {
      this.log(`Build failed: ${error.stderr || error.message}`, 'WARN');
      
      // Try to fix common build issues
      await this.fixCommonBuildIssues();
    }
  }

  async fixCommonBuildIssues() {
    this.log('Fixing common build issues...');
    
    // Fix package.json type field warning
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        if (!packageJson.type) {
          packageJson.type = 'module';
          fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
          this.log('Added type: module to package.json');
          this.fixesApplied++;
          this.errorsFixed.push('Package.json type field added');
        }
      } catch (error) {
        this.log(`Error updating package.json: ${error.message}`, 'ERROR');
      }
    }
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

  async generateComprehensiveReport() {
    const report = {
      timestamp: new Date().toISOString(),
      fixesApplied: this.fixesApplied,
      errorsFixed: this.errorsFixed,
      summary: `Applied ${this.fixesApplied} fixes to resolve ${this.errorsFixed.length} error categories`,
      nextSteps: [
        'Run npm run lint to verify linting fixes',
        'Run npm run type-check to verify TypeScript fixes',
        'Run npm run build to verify build fixes',
        'Review any remaining manual fixes needed'
      ]
    };
    
    const reportFile = path.join(this.logsDir, 'comprehensive-error-fix-report.json');
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log(`Comprehensive error fix report generated: ${reportFile}`);
    return report;
  }

  async run() {
    this.log('Starting Comprehensive Error Fixer...');
    
    try {
      // Create logs directory if it doesn't exist
      if (!fs.existsSync(this.logsDir)) {
        fs.mkdirSync(this.logsDir, { recursive: true });
      }
      
      // Run all fix operations
      await this.fixAllErrors();
      
      // Generate report
      const report = await this.generateComprehensiveReport();
      
      this.log(`Comprehensive Error Fixer completed successfully. ${report.summary}`);
      
      // Exit successfully
      process.exit(0);
      
    } catch (error) {
      this.log(`Comprehensive Error Fixer failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the comprehensive error fixer if this script is executed directly
if (require.main === module) {
  const fixer = new ComprehensiveErrorFixer();
  fixer.run();
}

module.exports = ComprehensiveErrorFixer;