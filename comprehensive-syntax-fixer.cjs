#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
    this.reportFile = path.join(this.projectRoot, 'comprehensive-syntax-fix-report.json');
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;
      let hasChanges = false;

      // Fix unterminated string literals
      if (content.includes('Unterminated string') || content.includes('Unterminated string constant')) {
        // Fix common unterminated string patterns
        fixedContent = fixedContent.replace(/(['"`])([^'"`]*?)(\n|$)/g, (match, quote, content, newline) => {
          if (content.includes('\\' + quote) || content.includes('`')) return match;
          if (content.trim().length > 0 && !content.endsWith(quote)) {
            return quote + content + quote + ';' + newline;
          }
          return match;
        });
        hasChanges = true;
      }

      // Fix missing semicolons
      fixedContent = fixedContent.replace(/^import\s+.*from\s+["'][^"']+["']\s*$/gm, (match) => {
        return match.endsWith(';') ? match : match + ';';
      });

      // Fix missing commas in object literals
      fixedContent = fixedContent.replace(/(\w+):\s*([^,}\n]+)(\n\s*[^,}])/g, '$1: $2,$3');

      // Fix missing semicolons after variable declarations
      fixedContent = fixedContent.replace(/(const|let|var)\s+\w+\s*=\s*[^;]+$/gm, (match) => {
        return match.endsWith(';') ? match : match + ';';
      });

      // Fix React component syntax issues
      if (filePath.includes('.tsx') || filePath.includes('.jsx')) {
        // Fix missing React import
        if (fixedContent.includes('React') && !fixedContent.includes("import React")) {
          fixedContent = "import React from 'react';\n" + fixedContent;
          hasChanges = true;
        }

        // Fix JSX syntax issues
        fixedContent = fixedContent.replace(/<(\w+)([^>]*?)(\n|$)/g, (match, tag, attrs, newline) => {
          if (attrs.trim() && !attrs.endsWith('>') && !attrs.endsWith('/>')) {
            return `<${tag}${attrs}>${newline}`;
          }
          return match;
        });
      }

      // Fix TypeScript syntax issues
      if (filePath.includes('.ts') || filePath.includes('.tsx')) {
        // Fix missing type annotations
        fixedContent = fixedContent.replace(/function\s+(\w+)\s*\(([^)]*)\)\s*{/g, (match, name, params) => {
          if (!params.includes(':')) {
            return `function ${name}(${params}): any {`;
          }
          return match;
        });
      }

      // Fix common parsing errors
      fixedContent = fixedContent.replace(/Error:\s*Parsing error:/g, '');
      fixedContent = fixedContent.replace(/Unexpected token/g, '');
      fixedContent = fixedContent.replace(/Identifier expected/g, '');
      fixedContent = fixedContent.replace(/Declaration or statement expected/g, '');

      // Fix unterminated string literals more aggressively
      const lines = fixedContent.split('\n');
      const fixedLines = lines.map(line => {
        // Check for unterminated strings
        const singleQuotes = (line.match(/'/g) || []).length;
        const doubleQuotes = (line.match(/"/g) || []).length;
        const backticks = (line.match(/`/g) || []).length;

        if (singleQuotes % 2 !== 0 && !line.includes("'")) {
          return line + "'";
        }
        if (doubleQuotes % 2 !== 0 && !line.includes('"')) {
          return line + '"';
        }
        if (backticks % 2 !== 0 && !line.includes('`')) {
          return line + '`';
        }
        return line;
      });

      fixedContent = fixedLines.join('\n');

      if (hasChanges || fixedContent !== content) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  scanDirectory(dir) {
    try {
      const files = fs.readdirSync(dir);
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          this.scanDirectory(filePath);
        } else if (stat.isFile()) {
          const ext = path.extname(file);
          if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
            this.fixFile(filePath);
          }
        }
      });
    } catch (error) {
      this.log(`❌ Error scanning directory ${dir}: ${error.message}`);
    }
  }

  async run() {
    this.log('🚀 Starting comprehensive syntax fixing...');

    // Scan source directories
    const scanDirs = ['src', 'pages', 'components', 'scripts'];
    scanDirs.forEach(dir => {
      if (fs.existsSync(dir)) {
        this.log(`📁 Scanning directory: ${dir}`);
        this.scanDirectory(dir);
      }
    });

    // Generate report
    const report = {
      timestamp: new Date().toISOString(),
      totalFilesFixed: this.fixedFiles.length,
      totalErrors: this.errors.length,
      fixedFiles: this.fixedFiles,
      errors: this.errors
    };

    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`📊 Report generated: ${this.reportFile}`);

    this.log(`🎉 Comprehensive syntax fixing completed`);
    this.log(`✅ Fixed ${this.fixedFiles.length} files`);
    this.log(`❌ ${this.errors.length} files had errors`);

    return report;
  }
}

// Run the comprehensive syntax fixer
const fixer = new ComprehensiveSyntaxFixer();
fixer.run().then(report => {
  console.log("✅ Comprehensive syntax fixing completed successfully");
  process.exit(0);
}).catch(error => {
  console.error("❌ Comprehensive syntax fixing failed:", error.message);
  process.exit(1);
});