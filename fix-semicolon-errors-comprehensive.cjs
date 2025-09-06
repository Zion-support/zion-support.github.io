#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SemicolonFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
    this.startTime = new Date();
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async fixSemicolonsInFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let fixed = false;
      let newContent = content;

      // Fix import statements missing semicolons
      newContent = newContent.replace(
        /import\s+.*?from\s+['"][^'"]+['"]\s*,/g,
        (match) => {
          if (!match.endsWith(';')) {
            fixed = true;
            return match.replace(/,$/, ';');
          }
          return match;
        }
      );

      // Fix import statements with trailing commas instead of semicolons
      newContent = newContent.replace(
        /import\s+.*?from\s+['"][^'"]+['"]\s*,(\s*$)/gm,
        (match, whitespace) => {
          fixed = true;
          return match.replace(/,(\s*)$/, ';$1');
        }
      );

      // Fix export statements missing semicolons
      newContent = newContent.replace(
        /export\s+.*?from\s+['"][^'"]+['"]\s*,/g,
        (match) => {
          if (!match.endsWith(';')) {
            fixed = true;
            return match.replace(/,$/, ';');
          }
          return match;
        }
      );

      // Fix export statements with trailing commas instead of semicolons
      newContent = newContent.replace(
        /export\s+.*?from\s+['"][^'"]+['"]\s*,(\s*$)/gm,
        (match, whitespace) => {
          fixed = true;
          return match.replace(/,(\s*)$/, ';$1');
        }
      );

      if (fixed) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed semicolons in: ${filePath}`);
        return true;
      }

      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  async processDirectory(dirPath) {
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip node_modules, .git, .next, out, dist directories
        if (!['node_modules', '.git', '.next', 'out', 'dist', 'cache'].includes(item)) {
          await this.processDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Process TypeScript and JavaScript files
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          await this.fixSemicolonsInFile(fullPath);
        }
      }
    }
  }

  async run() {
    this.log('🚀 Starting comprehensive semicolon fix...');

    try {
      await this.processDirectory(this.projectRoot);

      const endTime = new Date();
      const duration = endTime - this.startTime;

      this.log(`✅ Files fixed: ${this.fixedFiles.length}`);
      this.log(`❌ Errors: ${this.errors.length}`);
      this.log(`⏱️  Duration: ${duration}ms`);

      if (this.fixedFiles.length > 0) {

        this.fixedFiles.forEach(file => {
          this.log(`  - ${file}`);
        });
      }

      if (this.errors.length > 0) {

        this.errors.forEach(error => {
          this.log(`  - ${error.file}: ${error.error}`);
        });
      }

      this.log('\n🎉 Semicolon fix completed!');

    } catch (error) {
      this.log(`❌ Fatal error: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run the fixer
const fixer = new SemicolonFixer();
fixer.run().catch(console.error);