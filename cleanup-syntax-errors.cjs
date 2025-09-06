#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class SyntaxCleanup {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = 0;
  }

  async cleanup() {
    console.log('🧹 Starting syntax cleanup...');
    
    const files = this.findFiles('.ts', '.tsx', '.js', '.jsx');
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix React && React.FC patterns
        content = content.replace(/React && React\.FC/g, 'React.FC');
        if (content !== fs.readFileSync(file, 'utf8')) modified = true;
        
        // Fix function declarations with && patterns
        content = content.replace(/function\s+(\w+)\s*\([^)]*\)\s*:\s*any\s*\(\s*\)\s*{/g, 'function $1() {');
        if (content !== fs.readFileSync(file, 'utf8')) modified = true;
        
        // Fix JSX with && patterns
        content = content.replace(/<(\w+)\s*&&\s*(\w+)>/g, '<$1>');
        if (content !== fs.readFileSync(file, 'utf8')) modified = true;
        
        // Fix closing tags with && patterns
        content = content.replace(/<\/(\w+)\s*&&\s*(\w+)>/g, '</$1>');
        if (content !== fs.readFileSync(file, 'utf8')) modified = true;
        
        // Fix import statements with && patterns
        content = content.replace(/import\s+([^;]+)\s*&&\s*([^;]+);/g, 'import $1;');
        if (content !== fs.readFileSync(file, 'utf8')) modified = true;
        
        // Fix standalone semicolons
        content = content.replace(/^\s*;\s*$/gm, '');
        if (content !== fs.readFileSync(file, 'utf8')) modified = true;
        
        // Fix JSX elements with semicolons
        content = content.replace(/<(\w+)\s*([^>]*?)\s*>/g, (match, tag, attrs) => {
          if (attrs.includes(';')) {
            return `<${tag}${attrs.replace(/;/g, '')}>`;
          }
          return match;
        });
        if (content !== fs.readFileSync(file, 'utf8')) modified = true;
        
        // Fix closing JSX elements with semicolons
        content = content.replace(/<\/(\w+)\s*>/g, (match, tag) => {
          return `</${tag}>`;
        });
        if (content !== fs.readFileSync(file, 'utf8')) modified = true;
        
        // Fix return statements with semicolons
        content = content.replace(/return\s*\(/g, 'return (');
        if (content !== fs.readFileSync(file, 'utf8')) modified = true;
        
        // Fix JSX return statements
        content = content.replace(/return\s*\(\s*;/g, 'return (');
        if (content !== fs.readFileSync(file, 'utf8')) modified = true;
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.fixedFiles++;
          console.log(`✅ Fixed syntax in ${file}`);
        }
        
      } catch (error) {
        console.log(`⚠️ Could not fix ${file}: ${error.message}`);
      }
    }
    
    console.log(`🧹 Cleanup completed! Fixed ${this.fixedFiles} files.`);
  }

  findFiles(...extensions) {
    const files = [];
    
    const walkDir = (dir) => {
      if (!fs.existsSync(dir)) return;
      
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };
    
    walkDir(this.projectRoot);
    return files;
  }
}

// Run the cleanup
if (require.main === module) {
  const cleanup = new SyntaxCleanup();
  cleanup.cleanup().catch(console.error);
}

module.exports = SyntaxCleanup;