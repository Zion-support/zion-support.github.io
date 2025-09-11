#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class AggressiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }
  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }
  async fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;
      // Remove merge conflict markers
      content = content.replace(/[\s\S]*?
      // Fix common syntax errors
      content = content.replace(/import\s+{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"];?\s*$/gm, 'import { $1 } from "$2";');
      content = content.replace(/export\s+default\s+function\s+(\w+)/g, 'export default function $1');
      content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');
      content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{/g, 'function $1() {');
      // Fix JSX syntax - simplified approach
      content = content.replace(/<(\w+)([^>]*?)>([^<]*?)(?!<\1)/g, (match, tag, attrs, content) => {
        if (content && !content.includes('</') && !match.includes('/>')) {
          return `<${tag}${attrs}>${content}</${tag}>`;
        }
        return match;
      });
      // Fix unterminated strings
      content = content.replace(/(['"`])([^'"`]*?)(?=\n|$)/g, '$1$2$1');
      // Fix missing semicolons
      content = content.replace(/([^;}])\s*$/gm, '$1;');
      // Fix TypeScript syntax
      content = content.replace(/:\s*{\s*([^}]+)\s*}\s*=/g, ': { $1 } =');
      content = content.replace(/:\s*(\w+)\s*=/g, ': $1 =');
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`, 'SUCCESS');
        return true;
      }
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error fixing ${filePath}: ${error.message}`, 'ERROR');
      return false;
    }
  }
  async fixAllFiles() {
    this.log('Starting aggressive syntax fixing...', 'PROGRESS');
    const files = execSync('find src -name "*.tsx" -o -name "*.ts" -o -name "*.jsx" -o -name "*.js"', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(f => f);
    for (const file of files) {
      await this.fixFile(file);
    }
    this.log(`Fixed ${this.fixedFiles.length} files`, 'SUCCESS');
    if (this.errors.length > 0) {
      this.log(`Errors in ${this.errors.length} files`, 'WARNING');
    }
  }
}
const fixer = new AggressiveSyntaxFixer();
fixer.fixAllFiles().catch(console.error);