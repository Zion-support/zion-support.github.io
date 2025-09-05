const fs = require('fs');
const path = require('path');

class ComprehensiveFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Remove merge conflict markers completely
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
      content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
      
      // Fix common syntax issues
      content = content.replace(/\{_/g, '{');
      content = content.replace(/_}/g, '}');
      content = content.replace(/_/g, ' ');
      content = content.replace(/,\s*$/gm, ';');
      content = content.replace(/import\s+([^,]+),\s*$/gm, 'import $1;');
      
      // Fix function parameters
      content = content.replace(/\(\s*\{_([^}]+)_\}\s*\)/g, '({ $1 })');
      content = content.replace(/\(\s*_([^)]+)_\s*\)/g, '($1)');
      
      // Fix interface definitions
      content = content.replace(/interface\s+(\w+)\s*\{_([^}]+)_\}/g, 'interface $1 { $2 }');
      
      // Fix object destructuring
      content = content.replace(/\{\s*_([^}]+)_\s*\}/g, '{ $1 }');
      
      // Fix array destructuring
      content = content.replace(/\[\s*_([^\]]+)_\s*\]/g, '[ $1 ]');
      
      // Fix function calls
      content = content.replace(/\(\s*_([^)]+)_\s*\)/g, '($1)');
      
      // Fix arrow functions
      content = content.replace(/=>\s*\{_([^}]+)_\}/g, '=> { $1 }');
      
      // Fix return statements
      content = content.replace(/return\s*\{_([^}]+)_\}/g, 'return { $1 }');
      
      // Fix JSX props
      content = content.replace(/<(\w+)\s+([^>]*)_([^>]*)>/g, '<$1 $2 $3>');
      
      // Fix HTML entities
      content = content.replace(/&quot;/g, '"');
      content = content.replace(/&amp;/g, '&');
      content = content.replace(/&lt;/g, '<');
      content = content.replace(/&gt;/g, '>');
      
      // Fix broken imports
      content = content.replace(/import\s+([^}]+)\}from\s+/g, 'import { $1 } from ');
      content = content.replace(/import\s+([^}]+)\}\s*from\s+/g, 'import { $1 } from ');
      
      // Fix broken function declarations
      content = content.replace(/const:\s*(\w+):\s*React\.FC/g, 'const $1: React.FC');
      content = content.replace(/interface\s+(\w+)\s*\{_([^}]+)_\}/g, 'interface $1 { $2 }');
      
      // Fix broken JSX
      content = content.replace(/<(\w+)\s+([^>]*)_([^>]*)>/g, '<$1 $2 $3>');
      
      // Fix broken return statements
      content = content.replace(/return\s*\(<(\w+)\s+([^>]*)_([^>]*)>/g, 'return (<$1 $2 $3>');
      
      // Fix broken function calls
      content = content.replace(/\(\s*_([^)]+)_\s*\)/g, '($1)');
      
      // Fix broken object properties
      content = content.replace(/(\w+):\s*n:\s*(\w+)/g, '$1: $2');
      content = content.replace(/(\w+):\s*s:\s*(\w+)/g, '$1: $2');
      
      // Fix broken array syntax
      content = content.replace(/\[\s*_([^\]]+)_\s*\]/g, '[ $1 ]');
      
      // Fix broken object syntax
      content = content.replace(/\{\s*_([^}]+)_\s*\}/g, '{ $1 }');
      
      // Fix broken string concatenation
      content = content.replace(/\.\s*concat\s*\(/g, '.concat(');
      
      // Fix broken function declarations
      content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*:\s*(\w+)\s*\{/g, 'function $1(): $2 {');
      
      // Fix broken return statements
      content = content.replace(/return\s+(\w+)\s*\}/g, 'return $1; }');
      
      // Fix broken JSX closing tags
      content = content.replace(/<\/(\w+)>\s*}/g, '</$1> }');
      
      // Fix broken object property access
      content = content.replace(/\.\s*(\w+)\s*\./g, '.$1.');
      
      // Fix broken array access
      content = content.replace(/\[\s*(\w+)\s*\]/g, '[$1]');
      
      // Fix broken function parameters
      content = content.replace(/\(\s*\{_([^}]+)_\}\s*\)/g, '({ $1 })');
      
      // Fix broken destructuring
      content = content.replace(/const\s*\{\s*_([^}]+)_\s*\}\s*=/g, 'const { $1 } =');
      
      // Fix broken arrow functions
      content = content.replace(/=>\s*\{_([^}]+)_\}/g, '=> { $1 }');
      
      // Fix broken template literals
      content = content.replace(/`\s*([^`]+)\s*`/g, '`$1`');
      
      // Fix broken string literals
      content = content.replace(/"\s*([^"]+)\s*"/g, '"$1"');
      content = content.replace(/'\s*([^']+)\s*'/g, "'$1'");
      
      // Fix broken comments
      content = content.replace(/\/\*\s*([^*]+)\s*\*\//g, '/* $1 */');
      
      // Fix broken regex
      content = content.replace(/\/\s*([^/]+)\s*\//g, '/$1/');
      
      // Fix broken class names
      content = content.replace(/className\s*=\s*"([^"]*)_([^"]*)"/g, 'className="$1 $2"');
      
      // Fix broken props
      content = content.replace(/(\w+)\s*=\s*\{_([^}]+)_\}/g, '$1={ $2 }');
      
      // Fix broken JSX attributes
      content = content.replace(/(\w+)\s*=\s*"([^"]*)_([^"]*)"/g, '$1="$2 $3"');
      
      // Fix broken function calls with objects
      content = content.replace(/\(\s*\{_([^}]+)_\}\s*\)/g, '({ $1 })');
      
      // Fix broken array literals
      content = content.replace(/\[\s*_([^\]]+)_\s*\]/g, '[ $1 ]');
      
      // Fix broken object literals
      content = content.replace(/\{\s*_([^}]+)_\s*\}/g, '{ $1 }');
      
      // Fix broken function declarations
      content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*:\s*(\w+)\s*\{/g, 'function $1(): $2 {');
      
      // Fix broken return statements
      content = content.replace(/return\s+(\w+)\s*\}/g, 'return $1; }');
      
      // Fix broken JSX closing tags
      content = content.replace(/<\/(\w+)>\s*}/g, '</$1> }');
      
      // Fix broken object property access
      content = content.replace(/\.\s*(\w+)\s*\./g, '.$1.');
      
      // Fix broken array access
      content = content.replace(/\[\s*(\w+)\s*\]/g, '[$1]');
      
      // Fix broken function parameters
      content = content.replace(/\(\s*\{_([^}]+)_\}\s*\)/g, '({ $1 })');
      
      // Fix broken destructuring
      content = content.replace(/const\s*\{\s*_([^}]+)_\s*\}\s*=/g, 'const { $1 } =');
      
      // Fix broken arrow functions
      content = content.replace(/=>\s*\{_([^}]+)_\}/g, '=> { $1 }');
      
      // Fix broken template literals
      content = content.replace(/`\s*([^`]+)\s*`/g, '`$1`');
      
      // Fix broken string literals
      content = content.replace(/"\s*([^"]+)\s*"/g, '"$1"');
      content = content.replace(/'\s*([^']+)\s*'/g, "'$1'");
      
      // Fix broken comments
      content = content.replace(/\/\*\s*([^*]+)\s*\*\//g, '/* $1 */');
      
      // Fix broken regex
      content = content.replace(/\/\s*([^/]+)\s*\//g, '/$1/');
      
      // Fix broken class names
      content = content.replace(/className\s*=\s*"([^"]*)_([^"]*)"/g, 'className="$1 $2"');
      
      // Fix broken props
      content = content.replace(/(\w+)\s*=\s*\{_([^}]+)_\}/g, '$1={ $2 }');
      
      // Fix broken JSX attributes
      content = content.replace(/(\w+)\s*=\s*"([^"]*)_([^"]*)"/g, '$1="$2 $3"');
      
      // Clean up extra spaces
      content = content.replace(/\s+/g, ' ');
      content = content.replace(/\s*{\s*/g, ' { ');
      content = content.replace(/\s*}\s*/g, ' } ');
      content = content.replace(/\s*\(\s*/g, ' (');
      content = content.replace(/\s*\)\s*/g, ') ');
      content = content.replace(/\s*,\s*/g, ', ');
      content = content.replace(/\s*;\s*/g, '; ');
      
      // Fix multiple spaces
      content = content.replace(/\s{2,}/g, ' ');
      
      // Fix line breaks
      content = content.replace(/;\s*}/g, ';\n}');
      content = content.replace(/{\s*/g, '{\n  ');
      content = content.replace(/}\s*/g, '\n}');
      content = content.replace(/;\s*/g, ';\n');
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`Fixed: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  findFilesToFix(dir) {
    const files = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
        files.push(...this.findFilesToFix(fullPath));
      } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.jsx') || entry.name.endsWith('.js'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>') || content.includes('{_') || content.includes('_}') || content.includes('_ ') || content.includes('&quot;') || content.includes('&amp;') || content.includes('&lt;') || content.includes('&gt;')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
    
    return files;
  }

  async run() {
    this.log('Starting comprehensive fix...');
    
    const filesToFix = this.findFilesToFix('/workspace');
    this.log(`Found ${filesToFix.length} files to fix`);
    
    for (const file of filesToFix) {
      this.fixFile(file);
    }
    
    this.log(`Fixed ${this.fixedFiles.length} files`);
    this.log(`Encountered ${this.errors.length} errors`);
    
    if (this.errors.length > 0) {
      this.log('Errors:');
      this.errors.forEach(err => this.log(`  ${err.file}: ${err.error}`));
    }
    
    return {
      fixedFiles: this.fixedFiles,
      errors: this.errors
    };
  }
}

// Run the comprehensive fixer
if (require.main === module) {
  const fixer = new ComprehensiveFixer();
  fixer.run()
    .then(result => {
      console.log('Comprehensive fix completed');
      console.log('Fixed files:', result.fixedFiles.length);
      console.log('Errors:', result.errors.length);
      process.exit(0);
    })
    .catch(error => {
      console.error('Comprehensive fix failed:', error);
      process.exit(1);
    });
}

module.exports = ComprehensiveFixer;