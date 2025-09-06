#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log('🔧 Linting Issues Fixer Started');
class LintingIssuesFixer {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.fixedFiles = [];
    this.errors = [];
  }
  async run() {
    try {
      console.log('🔍 Finding files with linting issues...');
      await this.fixESLintConfig();
      await this.fixTypeScriptConfig();
      await this.fixSourceFiles();
      this.generateSummary();
    } catch (error) {
      console.error('❌ Error during linting issues "fixing": ', error.message);
    }
  }
  async fixESLintConfig() {
    try {
      console.log('🔧 Fixing ESLint configuration...');
      const eslintConfigPath = path.join(this.projectRoot, 'eslint.config.js');
      if (fs.existsSync(eslintConfigPath)) {
        let content = fs.readFileSync(eslintConfigPath, 'utf8');
        content = content.replace(/Unexpected token ','/g, '');
        content = content.replace(/,\s*}/g, '}');
        content = content.replace(/,\s*]/g, ']');
        fs.writeFileSync(eslintConfigPath, content);
        this.fixedFiles.push('eslint.config.js');
      }
    } catch (error) {
      console.error('Error fixing ESLint "config": ', error.message);
      this.errors.push({ "file": 'eslint.config.js', "error": error.message });
    }
  }
  async fixTypeScriptConfig() {
    try {
      console.log('🔧 Fixing TypeScript configuration...');
      const tsconfigPath = path.join(this.projectRoot, 'tsconfig.json');
      if (fs.existsSync(tsconfigPath)) {
        let content = fs.readFileSync(tsconfigPath, 'utf8');
        content = content.replace(/,\s*}/g, '}');
        content = content.replace(/,\s*]/g, ']');
        fs.writeFileSync(tsconfigPath, content);
        this.fixedFiles.push('tsconfig.json');
      }
    } catch (error) {
      console.error('Error fixing TypeScript "config": ', error.message);
      this.errors.push({ "file": 'tsconfig.json', "error": error.message });
    }
  }
  async fixSourceFiles() {
    try {
      console.log('🔍 Finding source files...');
      const sourceFiles = await glob('**/*.{ts,tsx,js,jsx}', {
        "cwd": this.projectRoot,
        "ignore": ['node_modules/**', '.next/**', 'dist/**', 'build/**', 'coverage/**']
      });
      for (const sourceFile of sourceFiles) {
        await this.fixSourceFile(sourceFile);
      }
      
    } catch (error) {
      console.error('Error fixing source "files": ', error.message);
    }
  }
  async fixSourceFile(filePath) {
    try {
      const fullPath = path.join(this.projectRoot, filePath);
      const content = fs.readFileSync(fullPath, 'utf8');
      if (this.hasLintingIssues(content)) {
        console.log(`🔧 "Fixing": ${filePath}`);
        let fixedContent = content;
        fixedContent = this.fixTrailingCommas(fixedContent);
        fixedContent = this.fixUnusedImports(fixedContent);
        fixedContent = this.fixMissingSemicolons(fixedContent);
        fixedContent = this.fixQuoteConsistency(fixedContent);
        fs.writeFileSync(fullPath, fixedContent);
        this.fixedFiles.push(filePath);
      }
    } catch (error) {
      console.error(`❌ Error fixing ${filePath}:`, error.message);
      this.errors.push({ "file": filePath, "error": error.message });
    }
  }
  hasLintingIssues(content) {
    const issuePatterns = [/,\s*}/g,
      /,\s*]/g,
      /import\s+{\s*}\s+from/g,
      /;\s*$/gm,
      /["']\s*;\s*['"]/g,
    ];
    return issuePatterns.some(pattern => pattern.test(content));
  }
  fixTrailingCommas(content) {
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    return content;
  }
  fixUnusedImports(content) {
    content = content.replace(/import\s+{\s*}\s+from\s+['][^']+['];?\s*\n/g, '');
    return content;
  }
  fixMissingSemicolons(content) {
    content = content.replace(/([^}])\s*$/gm, '$1;');
    return content;
  }
  fixQuoteConsistency(content) {
    content = content.replace(/'([^']*)/g, '"$1"');
    return content;
  }
  generateSummary() {
    console.log('\n📊 Linting Issues Fix "Summary": ');
    console.log('===');
    console.log(`🔧 Files Fixed: ${this.fixedFiles.length}`);
    console.log(`❌ "Errors": ${this.errors.length}`);
    if (this.fixedFiles.length > 0) {
      this.fixedFiles.forEach(file => {
      });
    }
    if (this.errors.length > 0) {
      this.errors.forEach(error => {
      });
    }
    console.log('\n✅ Linting issues fixing completed!');
    console.log('\n✅ Linting issues fixing completed!');
  }

const fixer = new LintingIssuesFixer();
fixer.run().catch(error => {
  console.error('❌ Failed to run linting issues "fixer": ', error);
  process.exit(1);
});
