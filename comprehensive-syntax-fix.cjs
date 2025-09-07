#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ComprehensiveSyntaxFixer {
  constructor() {
    this.fixes = [];
    this.errors = [];
  }

  log(message, type = 'info') {
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} ${message}`);
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      let hasChanges = false;

      // Fix specific syntax issues
      const fixes = [
        // Fix unterminated strings with escaped quotes
        { 
          pattern: /className="([^"]*\\"[^"]*)"\s*\/>/g, 
          replacement: (match, className) => {
            const fixed = className.replace(/\\"/g, '"');
            return `className="${fixed}" />`;
          }
        },
        // Fix JSX self-closing tags with escaped quotes
        { 
          pattern: /<(\w+)\s+className="([^"]*\\"[^"]*)"\s*\/>/g, 
          replacement: (match, tag, className) => {
            const fixed = className.replace(/\\"/g, '"');
            return `<${tag} className="${fixed}" />`;
          }
        },
        // Fix duplicate metadata properties
        { 
          pattern: /(title:\s*'[^']*',\s*description:\s*'[^']*',\s*)+/g, 
          replacement: (match) => {
            const lines = match.split('\n').filter(line => line.trim());
            const unique = [];
            const seen = new Set();
            
            for (const line of lines) {
              const key = line.split(':')[0].trim();
              if (!seen.has(key)) {
                seen.add(key);
                unique.push(line);
              }
            }
            return unique.join('\n') + '\n';
          }
        },
        // Fix import statements in wrong places
        { 
          pattern: /export\s+const\s+metadata[^}]*\{\s*import\s+[^}]*\}/g, 
          replacement: (match) => {
            const importMatch = match.match(/import\s+[^}]+/);
            const metadataMatch = match.match(/export\s+const\s+metadata[^}]*\{[^}]*\}/);
            if (importMatch && metadataMatch) {
              return importMatch[0] + '\n\n' + metadataMatch[0];
            }
            return match;
          }
        },
        // Fix JSX structure issues
        { 
          pattern: /<div\s+className="[^"]*"\s*\/>\s*<div\s+className="[^"]*"\s*\/>/g, 
          replacement: (match) => {
            return match.replace(/\/>/g, '>').replace(/>\s*<div/g, '>\n      <div');
          }
        },
        // Fix missing closing tags
        { 
          pattern: /<(\w+)\s+className="[^"]*"\s*\/>\s*<div\s+className="[^"]*"\s*\/>\s*<div\s+className="[^"]*"\s*\/>\s*}/g, 
          replacement: (match) => {
            return match.replace(/\/>/g, '>').replace(/>\s*<div/g, '>\n        <div').replace(/>\s*}/g, '>\n      </div>\n    </div>\n  }');
          }
        },
        // Fix unterminated strings
        { 
          pattern: /className="([^"]*\\"[^"]*)$/gm, 
          replacement: (match, className) => {
            const fixed = className.replace(/\\"/g, '"');
            return `className="${fixed}"`;
          }
        },
        // Fix duplicate imports
        { 
          pattern: /import\s+(\w+)\s+from\s+['"]([^'"]+)['"];\s*import\s+\1\s+from\s+['"]\2['"];/g, 
          replacement: (match, name, module) => {
            return `import ${name} from '${module}';`;
          }
        },
        // Fix malformed JSX
        { 
          pattern: /<(\w+)\s+className="([^"]*)"\s*\/>\s*([^<]+)\s*<\/\1>/g, 
          replacement: (match, tag, className, content) => {
            return `<${tag} className="${className}">${content}</${tag}>`;
          }
        },
        // Fix broken string literals
        { 
          pattern: /import\s+(\w+)\s+from\s+"([^"]*\\"[^"]*)"\s*;/g, 
          replacement: (match, name, module) => {
            const fixed = module.replace(/\\"/g, '"');
            return `import ${name} from "${fixed}";`;
          }
        }
      ];

      for (const fix of fixes) {
        if (typeof fix.replacement === 'function') {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            hasChanges = true;
          }
        } else {
          const newContent = content.replace(fix.pattern, fix.replacement);
          if (newContent !== content) {
            content = newContent;
            hasChanges = true;
          }
        }
      }

      if (hasChanges) {
        fs.writeFileSync(filePath, content);
        this.log(`Fixed syntax in: ${filePath}`, 'success');
        this.fixes.push({ file: filePath, type: 'syntax' });
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error processing ${filePath}: ${error.message}`, 'error');
      this.errors.push({ file: filePath, error: error.message });
      return false;
    }
  }

  fixSpecificFiles() {
    const filesToFix = [
      '/workspace/app/about/page.tsx',
      '/workspace/app/layout.tsx',
      '/workspace/app/not-found.tsx',
      '/workspace/app/page.tsx',
      '/workspace/app/research/page.tsx'
    ];

    this.log('🔧 Fixing specific syntax errors...');
    
    let fixedCount = 0;
    for (const file of filesToFix) {
      if (fs.existsSync(file)) {
        if (this.fixFile(file)) {
          fixedCount++;
        }
      }
    }

    this.log(`Fixed ${fixedCount} files`, 'success');
    return fixedCount;
  }

  run() {
    this.log('🚀 Starting Comprehensive Syntax Fixer...');
    this.fixSpecificFiles();
    this.log('✅ Comprehensive syntax fixer completed!');
  }
}

// Run the fixer
if (require.main === module) {
  const fixer = new ComprehensiveSyntaxFixer();
  fixer.run();
}

module.exports = ComprehensiveSyntaxFixer;