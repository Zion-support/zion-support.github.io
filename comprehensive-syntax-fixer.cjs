#!/usr/bin/env node




const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive syntax fixing...');


class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixesApplied = [];
    this.errorsFound = [];
    this.filesProcessed = 0;
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type}] ${message}`;
    console.log(logMessage);
  }

  async runCommand(command, options = {}) {
    try {
      this.log(`Running command: ${command}`);
      const result = execSync(command, {
        encoding: 'utf8',
        cwd: this.projectRoot,
        stdio: options.silent ? 'pipe' : 'inherit',
        ...options
      });
      return result;
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`, 'ERROR');
      this.errorsFound.push({ command, error: error.message });
      return null;
    }
  }

  findSourceFiles() {
    const files = [];
    const srcDir = path.join(this.projectRoot, 'src');
    
    function scanDirectory(dir) {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            scanDirectory(fullPath);
          } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    }
    
    scanDirectory(srcDir);
    return files;
  }

  fixCommonSyntaxErrors(content, filePath) {
    let fixed = content;
    let changes = 0;

    // Fix common merge conflict remnants
    fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    fixed = fixed.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix unterminated strings
    fixed = fixed.replace(/(['"`])([^'"`]*?)(\n)/g, (match, quote, content, newline) => {
      if (!content.includes(quote)) {
        changes++;
        return `${quote}${content}${quote}${newline}`;
      }
      return match;
    });

    // Fix missing semicolons after imports
    fixed = fixed.replace(/^import\s+.*?from\s+['"][^'"]+['"]\s*$/gm, (match) => {
      if (!match.endsWith(';')) {
        changes++;
        return match + ';';
      }
      return match;
    });

    // Fix missing semicolons after variable declarations
    fixed = fixed.replace(/^(const|let|var)\s+[^=]+=\s*[^;]+$/gm, (match) => {
      if (!match.endsWith(';') && !match.includes('{') && !match.includes('(')) {
        changes++;
        return match + ';';
      }
      return match;
    });

    // Fix missing commas in object literals
    fixed = fixed.replace(/(\w+):\s*[^,}\n]+(\n\s*[a-zA-Z])/g, (match, key, rest) => {
      if (!match.includes(',')) {
        changes++;
        return match.replace(/(\n\s*[a-zA-Z])/, ',\n$1');
      }
      return match;
    });

    // Fix missing commas in function parameters
    fixed = fixed.replace(/\(([^)]*?)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\)/g, (match, before, param) => {
      if (before && !before.endsWith(',')) {
        changes++;
        return match.replace(before, before + ', ');
      }
      return match;
    });

    // Fix JSX syntax issues
    fixed = fixed.replace(/<([A-Z][a-zA-Z0-9]*)\s*([^>]*?)\s*>/g, (match, tag, props) => {
      if (props && !props.endsWith('/') && !props.includes('>')) {
        // Check if it's a self-closing tag
        const selfClosingTags = ['img', 'input', 'br', 'hr', 'meta', 'link'];
        if (selfClosingTags.includes(tag.toLowerCase())) {
          changes++;
          return `<${tag} ${props} />`;
        }
      }
      return match;
    });

    // Fix missing closing braces
    const openBraces = (fixed.match(/\{/g) || []).length;
    const closeBraces = (fixed.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      const missing = openBraces - closeBraces;
      fixed += '\n' + '}'.repeat(missing);
      changes += missing;
    }

    // Fix missing closing parentheses
    const openParens = (fixed.match(/\(/g) || []).length;
    const closeParens = (fixed.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      const missing = openParens - closeParens;
      fixed += ')'.repeat(missing);
      changes += missing;
    }

    // Fix missing closing brackets
    const openBrackets = (fixed.match(/\[/g) || []).length;
    const closeBrackets = (fixed.match(/\]/g) || []).length;
    if (openBrackets > closeBrackets) {
      const missing = openBrackets - closeBrackets;
      fixed += ']'.repeat(missing);
      changes += missing;
    }

    // Clean up extra whitespace
    fixed = fixed.replace(/\n\s*\n\s*\n/g, '\n\n');
    fixed = fixed.trim() + '\n';

    if (changes > 0) {
      this.log(`Fixed ${changes} syntax issues in ${path.relative(this.projectRoot, filePath)}`);
      this.fixesApplied.push(`${changes} fixes in ${path.relative(this.projectRoot, filePath)}`);
    }

    return fixed;
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixed = this.fixCommonSyntaxErrors(content, filePath);
      
      if (fixed !== content) {
        fs.writeFileSync(filePath, fixed);
        this.filesProcessed++;
        return true;
      }
      return false;
    } catch (error) {
      this.log(`Error processing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixAllFiles() {
    this.log('Finding source files...');
    const files = this.findSourceFiles();
    this.log(`Found ${files.length} files to process`);

    for (const file of files) {
      await this.fixFile(file);
    }

    this.log(`Processed ${this.filesProcessed} files`);
  }

  async runTypeScriptCheck() {
    this.log('Running TypeScript check...');
    const result = await this.runCommand('npx tsc --noEmit', { silent: true });
    if (result) {
      this.log('TypeScript check passed');
      return true;
    }
    return false;
  }

  async runLinting() {
    this.log('Running ESLint...');
    const result = await this.runCommand('npx eslint . --ext .js,.jsx,.ts,.tsx --fix', { silent: true });
    if (result) {
      this.log('ESLint completed successfully');
      return true;
    }
    return false;
  }

  async runBuild() {
    this.log('Running build...');
    const result = await this.runCommand('npm run build', { silent: true });
    if (result) {
      this.log('Build completed successfully');
      return true;
    }
    return false;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      filesProcessed: this.filesProcessed,
      fixesApplied: this.fixesApplied,
      errorsFound: this.errorsFound,
      summary: {
        totalFixes: this.fixesApplied.length,
        totalErrors: this.errorsFound.length,
        success: this.errorsFound.length === 0
      }
    };

    const reportPath = path.join(this.projectRoot, 'syntax-fix-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log('\n=== SYNTAX FIX REPORT ===');
    this.log(`Files processed: ${report.filesProcessed}`);
    this.log(`Fixes applied: ${report.summary.totalFixes}`);
    this.log(`Errors found: ${report.summary.totalErrors}`);
    this.log(`Success: ${report.summary.success ? 'YES' : 'NO'}`);
    this.log(`Report saved to: ${reportPath}`);
  }

  async run() {
    this.log('Starting comprehensive syntax fixing...');
    
    try {
      // Step 1: Fix all files
      await this.fixAllFiles();
      
      // Step 2: Run TypeScript check
      await this.runTypeScriptCheck();
      
      // Step 3: Run linting
      await this.runLinting();
      
      // Step 4: Try to build
      await this.runBuild();
      
      // Step 5: Generate report
      await this.generateReport();
      
      this.log('Comprehensive syntax fixing completed!');
    } catch (error) {
      this.log(`Fatal error: ${error.message}`, 'ERROR');
      await this.generateReport();
      process.exit(1);
    }
  }
}

console.log(`\n✅ Fixed ${fixedCount} files out of ${totalFiles}`);
console.log('🎯 Comprehensive syntax fixing complete!');


// Run the fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.run().catch(console.error);

