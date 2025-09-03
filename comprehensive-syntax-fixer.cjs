#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
  }

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) return false;
      
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      // Fix common syntax errors
      content = content.replace(/export default function (\w+)\(\) {;/g, 'export default function $1() {');
      content = content.replace(/return \(;/g, 'return (');
      content = content.replace(/<>;/g, '<>');
      content = content.replace(/<\/>;/g, '</>');
      content = content.replace(/<(\w+)>;/g, '<$1>');
      content = content.replace(/<\/(\w+)>;/g, '</$1>');
      content = content.replace(/<(\w+)\s+([^>]+)>;/g, '<$1 $2>');
      content = content.replace(/<(\w+)\s+([^>]+)\/>;/g, '<$1 $2/>');
      content = content.replace(/\)\s*;$/gm, ')');
      content = content.replace(/\]\s*;$/gm, ']');
      content = content.replace(/\}\s*;$/gm, '}');
      content = content.replace(/,\s*;$/gm, ',');
      content = content.replace(/;\s*$/gm, '');
      content = content.replace(/<Component \{\.\.\.pageProps\} \/>\s*,/g, '<Component {...pageProps} />');
      content = content.replace(/<(\w+)\s+([^>]*)\/>\s*,/g, '<$1 $2/>');
      content = content.replace(/<\/\w+>\s*,/g, (match) => match.replace(',', ''));
      content = content.replace(/<(\w+)>\s*,/g, (match) => match.replace(',', ''));
      content = content.replace(/\)\s*,/g, ')');
      content = content.replace(/\]\s*,/g, ']');
      content = content.replace(/\}\s*,/g, '}');
      
      // Fix string literal issues
      content = content.replace(/content="([^"]*)"([^"]*)"([^"]*)"/g, 'content="$1$2$3"');
      
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

  fixDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) return;
    
    const files = fs.readdirSync(dirPath, { withFileTypes: true });
    let fixedCount = 0;

    files.forEach(file => {
      if (file.isFile() && (file.name.endsWith('.tsx') || file.name.endsWith('.jsx') || file.name.endsWith('.ts') || file.name.endsWith('.js'))) {
        const filePath = path.join(dirPath, file.name);
        if (this.fixFile(filePath)) {
          fixedCount++;
        }
      } else if (file.isDirectory() && !file.name.startsWith('.') && file.name !== 'node_modules') {
        this.fixDirectory(path.join(dirPath, file.name));
      }
    });

    return fixedCount;
  }

  run() {
    console.log('Starting comprehensive syntax fixer...');
    
    const directories = ['pages', 'src', 'components', 'lib'];
    let totalFixed = 0;
    
    directories.forEach(dir => {
      const dirPath = path.join(this.projectRoot, dir);
      if (fs.existsSync(dirPath)) {
        console.log(`Fixing directory: ${dir}`);
        const fixed = this.fixDirectory(dirPath);
        totalFixed += fixed;
        console.log(`Fixed ${fixed} files in ${dir}`);
      }
    });
    
    console.log(`Total files fixed: ${totalFixed}`);
    console.log('Comprehensive syntax fixer completed!');
  }
}

if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run();
}

module.exports = ComprehensiveSyntaxFixer;