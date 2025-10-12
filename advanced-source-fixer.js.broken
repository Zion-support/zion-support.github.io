#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

class AdvancedSourceFixer {
  constructor() {
    this.fixes = [];
    this.errors = [];
    this.reportFile = path.join(__dirname, 'advanced-source-fix-report.json');
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level}] ${message}`);
  }

  async fixAllSourceFiles() {
    this.log('🔧 Starting advanced source file fixing...');
    await this.fixDirectory(path.join(__dirname, 'src'));
    await this.fixDirectory(path.join(__dirname, 'pages'));
    this.log(`✅ Fixed ${this.fixes.length} files`);
    if (this.errors.length > 0) {
      this.log(`❌ ${this.errors.length} errors encountered`);
    }
    await this.generateReport();
  }

  async fixDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (
        stat.isDirectory() &&
        !item.startsWith('.') &&
        item !== 'node_modules'
      ) {
        await this.fixDirectory(fullPath);
      } else if (
        item.endsWith('.ts') ||
        item.endsWith('.tsx') ||
        item.endsWith('.js') ||
        item.endsWith('.jsx')
      ) {
        await this.fixFile(fullPath);
      }
    }
  }

  async fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixedContent = content;
      let wasFixed = false;

      if (this.hasParsingErrors(content)) {
        fixedContent = this.fixParsingErrors(content, filePath);
        wasFixed = true;
      }

      if (this.hasImportExportIssues(content)) {
        fixedContent = this.fixImportExportIssues(fixedContent, filePath);
        wasFixed = true;
      }

      if (this.hasSyntaxIssues(content)) {
        fixedContent = this.fixSyntaxIssues(fixedContent, filePath);
        wasFixed = true;
      }

      if (wasFixed) {
        fs.writeFileSync(filePath, fixedContent);
        this.fixes.push({
          file: filePath,
          timestamp: new Date().toISOString(),
          fixes: this.getAppliedFixes(content, fixedContent),
        });
        this.log(`Fixed: ${filePath}`);
      }
    } catch (error) {
      this.errors.push({
        file: filePath,
        error: error.message,
        timestamp: new Date().toISOString(),
      });
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  hasParsingErrors(content) {
    const errorPatterns = [
      /Error: 'Parsing error:/,
      /Unterminated string literal/,
      /Identifier expected/,
      /Declaration or statement expected/,
      /Expression expected/,
      /Property or signature expected/,
      /Unexpected token/,
      /'from' expected/,
      /',' expected/,
      /'' expected/,
      /'\)' expected/,
      /'\}' expected/,
    ];
    return errorPatterns.some((pattern) => pattern.test(content));
  }

  hasImportExportIssues(content) {
    return (
      content.includes('from') &&
      !content.includes('import') &&
      !content.includes('export')
    );
  }

  hasSyntaxIssues(content) {
    const syntaxIssues = [
      /import.*from.*from/,
      /export.*from.*from/,
      /function.*function/,
      /const.*const.*const/,
      /let.*let.*let/,
    ];
    return syntaxIssues.some((pattern) => pattern.test(content));
  }

  fixParsingErrors(content, filePath) {
    let fixed = content;
    fixed = fixed.replace(/"[^"]*$/gm, '"');
    fixed = fixed.replace(/'[^']*$/gm, "'");
    fixed = fixed.replace(/import\s+from\s+from/g, 'import React from');
    fixed = fixed.replace(/export\s+from\s+from/g, 'export default');
    fixed = fixed.replace(/function\s+function/g, 'function');
    fixed = fixed.replace(/const\s+const/g, 'const');
    fixed = fixed.replace(/let\s+let/g, 'let');
    return fixed;
  }

  fixImportExportIssues(content, filePath) {
    let fixed = content;
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
      if (
        !fixed.includes('import React') &&
        !fixed.includes('import * as React')
      ) {
        fixed = "import React from 'react';\n" + fixed;
      }
    }
    fixed = fixed.replace(/import\s+{\s*}\s*from/g, 'import React from');
    fixed = fixed.replace(/import\s+from\s+['"]/g, "import React from 'react'");
    if (!fixed.includes('export default') && !fixed.includes('export {')) {
      fixed += '\n\nexport default {};';
    }
    return fixed;
  }

  fixSyntaxIssues(content, filePath) {
    let fixed = content;
    fixed = fixed.replace(/\bconst\s+const\b/g, 'const');
    fixed = fixed.replace(/\blet\s+let\b/g, 'let');
    fixed = fixed.replace(/\bvar\s+var\b/g, 'var');
    fixed = fixed.replace(/\bfunction\s+function\b/g, 'function');
    fixed = fixed.replace(/\{\s*}\s*\}/g, '{}');
    fixed = fixed.replace(/\{\s*,\s*/g, '{');
    fixed = fixed.replace(/\[\s*,\s*\]/g, '[]');
    fixed = fixed.replace(/\[\s*,\s*/g, '[');
    fixed = fixed.replace(/\(\s*)\s*\)/g, '()');
    fixed = fixed.replace(/\(\s*)\s*/g, '(');
    return fixed;
  }

  getAppliedFixes(original, fixed) {
    const fixes = [];
    if (original !== fixed) {
      if (original.length !== fixed.length) {
        fixes.push('Content length changed');
      }
      if (fixed.includes('import React')) {
        fixes.push('Added React import');
      }
      if (fixed.includes('export default')) {
        fixes.push('Added default export');
      }
    }
    return fixes;
  }

  async generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      totalFilesFixed: this.fixes.length,
      totalErrors: this.errors.length,
      fixes: this.fixes,
      errors: this.errors,
    };
    fs.writeFileSync(this.reportFile, JSON.stringify(report, null, 2));
    this.log(`Report generated: ${this.reportFile}`);
  }
}

if (require.main === module) {
  const fixer = new AdvancedSourceFixer();
  fixer.fixAllSourceFiles().catch(console.error);
}

module.exports = AdvancedSourceFixer;