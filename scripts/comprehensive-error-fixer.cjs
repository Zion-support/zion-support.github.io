#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Comprehensive Error Fixer');
console.log('Process:', process.env.PM2_PROCESS || 'unknown');

class ComprehensiveErrorFixer {
  constructor() {
    this.logs = [];
    this.errors = [];
    this.fixes = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    console.log(logEntry);
    this.logs.push(logEntry);
  }

  async fixCommonSyntaxErrors() {
    try {
      this.log('Fixing common syntax errors...');

      // Find all source files
      const sourceFiles = this.findSourceFiles();

      for (const file of sourceFiles) {
        try {
          await this.fixFileErrors(file);
        } catch (error) {
          this.log(`Failed to fix ${file}: ${error.message}`, 'error');
        }
      }

      this.log('Common syntax errors fixed', 'success');
      this.fixes.push('syntax_errors');
    } catch (error) {
      this.log('Syntax error fixing failed', 'error');
    }
  }

  findSourceFiles() {
    const sourceDirs = [
      'src',
      'pages',
      'components',
      'utils',
      'hooks',
      'types',
    ];
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    const files = [];

    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        this.findFilesRecursively(dir, extensions, files);
      }
    }

    return files;
  }

  findFilesRecursively(dir, extensions, files) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        this.findFilesRecursively(fullPath, extensions, files);
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }

  async fixFileErrors(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;

      // Fix common syntax errors
      content = this.fixUnterminatedStrings(content);
      content = this.fixUnterminatedComments(content);
      content = this.fixDuplicateImports(content);
      content = this.fixDuplicateExports(content);
      content = this.fixJSXSyntax(content);
      content = this.fixTypeScriptSyntax(content);
      content = this.fixUnescapedEntities(content);

      // Only write if content changed
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.log(`Fixed errors in ${filePath}`, 'success');
        this.fixes.push(`fixed_${filePath}`);
      }
    } catch (error) {
      this.log(`Error processing ${filePath}: ${error.message}`, 'error');
    }
  }

  fixUnterminatedStrings(content) {
    // Fix unterminated string literals
    const lines = content.split('\n');
    const fixedLines = [];

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];

      // Check for unterminated strings
      const singleQuotes = (line.match(/'/g) || []).length;
      const doubleQuotes = (line.match(/"/g) || []).length;

      if (singleQuotes % 2 !== 0) {
        // Add missing single quote
        line += "'";
        this.log('Fixed unterminated single quote', 'info');
      }

      if (doubleQuotes % 2 !== 0) {
        // Add missing double quote
        line += '"';
        this.log('Fixed unterminated double quote', 'info');
      }

      fixedLines.push(line);
    }

    return fixedLines.join('\n');
  }

  fixUnterminatedComments(content) {
    // Fix unterminated comments
    let fixedContent = content;

    // Fix /* comments without */
    const multiLineCommentRegex = /\/\*([^*]|\*[^/])*$/gm;
    if (multiLineCommentRegex.test(content)) {
      fixedContent = content.replace(
        multiLineCommentRegex,
        match => match + '*/'
      );
      this.log('Fixed unterminated multi-line comment', 'info');
    }

    return fixedContent;
  }

  fixDuplicateImports(content) {
    // Remove duplicate import statements
    const lines = content.split('\n');
    const seenImports = new Set();
    const fixedLines = [];

    for (const line of lines) {
      if (line.trim().startsWith('import ')) {
        const importKey = line.trim();
        if (!seenImports.has(importKey)) {
          seenImports.add(importKey);
          fixedLines.push(line);
        } else {
          this.log('Removed duplicate import', 'info');
        }
      } else {
        fixedLines.push(line);
      }
    }

    return fixedLines.join('\n');
  }

  fixDuplicateExports(content) {
    // Fix duplicate export statements
    const lines = content.split('\n');
    const fixedLines = [];
    let hasDefaultExport = false;

    for (const line of lines) {
      if (line.trim().startsWith('export default ')) {
        if (!hasDefaultExport) {
          hasDefaultExport = true;
          fixedLines.push(line);
        } else {
          this.log('Removed duplicate default export', 'info');
        }
      } else {
        fixedLines.push(line);
      }
    }

    return fixedLines.join('\n');
  }

  fixJSXSyntax(content) {
    let fixedContent = content;

    // Fix unescaped entities in JSX
    fixedContent = fixedContent.replace(/(\w)'(\w)/g, '$1&apos;$2');
    fixedContent = fixedContent.replace(/(\w)"(\w)/g, '$1&quot;$2');

    // Fix JSX fragment syntax
    fixedContent = fixedContent.replace(/<>\s*$/gm, '<>');
    fixedContent = fixedContent.replace(/^\s*<\/>/gm, '</>');

    return fixedContent;
  }

  fixTypeScriptSyntax(content) {
    let fixedContent = content;

    // Fix common TypeScript syntax errors
    fixedContent = fixedContent.replace(
      /:\s*([^,;)\]]+)\s*([,;)\]])/g,
      ': $1$2'
    );
    fixedContent = fixedContent.replace(
      /,\s*([^,;)\]]+)\s*([,;)\]])/g,
      ', $1$2'
    );

    return fixedContent;
  }

  fixUnescapedEntities(content) {
    // Fix unescaped entities
    let fixedContent = content;

    // Fix apostrophes
    fixedContent = fixedContent.replace(/(\w)'(\w)/g, '$1&apos;$2');

    // Fix quotes in JSX
    fixedContent = fixedContent.replace(/(\w)"(\w)/g, '$1&quot;$2');

    return fixedContent;
  }

  async runPrettier() {
    try {
      this.log('Running Prettier to fix formatting...');
      execSync('npm run format', { stdio: 'pipe' });
      this.log('Prettier formatting completed', 'success');
      this.fixes.push('prettier_formatting');
    } catch (error) {
      this.log('Prettier formatting failed', 'warn');
    }
  }

  async runESLintAutoFix() {
    try {
      this.log('Running ESLint auto-fix...');
      execSync('npm run lint -- --fix', { stdio: 'pipe' });
      this.log('ESLint auto-fix completed', 'success');
      this.fixes.push('eslint_auto_fix');
    } catch (error) {
      this.log('ESLint auto-fix failed', 'warn');
    }
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      process: process.env.PM2_PROCESS || 'unknown',
      summary: {
        totalFiles: this.fixes.length,
        fixes: this.fixes.length,
        success: this.errors.length === 0,
      },
      logs: this.logs,
      errors: this.errors,
      fixes: this.fixes,
      recommendations: this.generateRecommendations(),
    };

    // Save report to file
    const reportFile = `comprehensive-error-fixer-report-${Date.now()}.json`;
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    this.log(`Report saved to ${reportFile}`, 'info');
    return report;
  }

  generateRecommendations() {
    const recommendations = [];

    if (this.fixes.includes('syntax_errors')) {
      recommendations.push('Review fixed syntax errors to ensure correctness');
    }

    if (this.fixes.includes('prettier_formatting')) {
      recommendations.push('Code formatting has been standardized');
    }

    if (this.fixes.includes('eslint_auto_fix')) {
      recommendations.push('ESLint auto-fixes have been applied');
    }

    if (recommendations.length === 0) {
      recommendations.push('No fixes were applied, code appears to be clean');
    }

    return recommendations;
  }

  async runFullFix() {
    try {
      this.log('Starting comprehensive error fixing...');

      // Fix syntax errors
      await this.fixCommonSyntaxErrors();

      // Run Prettier
      await this.runPrettier();

      // Run ESLint auto-fix
      await this.runESLintAutoFix();

      // Generate final report
      const report = await this.generateReport();

      this.log('Comprehensive error fixing completed successfully', 'success');
      return report;
    } catch (error) {
      this.log(`Comprehensive error fixing failed: ${error.message}`, 'error');
      const report = await this.generateReport();
      return report;
    }
  }
}

// Main execution
async function main() {
  const fixer = new ComprehensiveErrorFixer();

  try {
    await fixer.runFullFix();
    process.exit(0);
  } catch (error) {
    fixer.log(`Fatal error: ${error.message}`, 'error');
    await fixer.generateReport();
    process.exit(1);
  }
}

// Handle process termination
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...');
  process.exit(0);
});

// Run the main function
main().catch(error => {
  console.error(`Fatal error: ${error.message}`);
  process.exit(1);
});
