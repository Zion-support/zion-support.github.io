#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class PagesSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.pagesDir = path.join(this.projectRoot, 'pages');
    this.fixedFiles = [];
  }

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) return false;
      
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix common syntax errors in React/TSX files
      content = content.replace(/export default function (\w+)\(\) {;/g, 'export default function $1() {');
      content = content.replace(/return \(;/g, 'return (');
      content = content.replace(/<>;/g, '<>');
      content = content.replace(/<\/>;/g, '</>');
      content = content.replace(/<(\w+)>;/g, '<$1>');
      content = content.replace(/<\/(\w+)>;/g, '</$1>');
      content = content.replace(/<(\w+)\s+([^>]+)>;/g, '<$1 $2>');
      content = content.replace(/<(\w+)\s+([^>]+)\/>;/g, '<$1 $2/>');
      content = content.replace(/;$/gm, '');
      content = content.replace(/,\s*;$/gm, ',');
      content = content.replace(/}\s*;$/gm, '}');
      content = content.replace(/\)\s*;$/gm, ')');
      content = content.replace(/\]\s*;$/gm, ']');
      content = content.replace(/\}\s*;$/gm, '}');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        this.fixedFiles.push(filePath);
        console.log(`Fixed: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
      return false;
    }
  }

  fixAllPages() {
    if (!fs.existsSync(this.pagesDir)) {
      console.log('Pages directory not found');
      return;
    }

    const files = fs.readdirSync(this.pagesDir, { withFileTypes: true });
    let fixedCount = 0;

    files.forEach(file => {
      if (file.isFile() && (file.name.endsWith('.tsx') || file.name.endsWith('.jsx'))) {
        const filePath = path.join(this.pagesDir, file.name);
        if (this.fixFile(filePath)) {
          fixedCount++;
        }
      }
    });

    console.log(`Fixed ${fixedCount} page files`);
  }

  run() {
    console.log('Fixing syntax errors in pages...');
    this.fixAllPages();
    console.log('Pages syntax fixer completed!');
  }
}

if (require.main === module) {
  const fixer = new PagesSyntaxFixer();
  fixer.run();
}

module.exports = PagesSyntaxFixer;