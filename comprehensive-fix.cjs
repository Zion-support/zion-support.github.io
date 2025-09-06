const fs = require('fs');
const path = require('path');
;
// Function to fix common syntax issues;
function fixFile(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
;
    // Fix common syntax patterns;
    content = content;
      // Fix function calls with missing semicolons;
      .replace(/(\w+)\s*\(\s*\)\s*}/g, '$1();');
      .replace(/(\w+)\s*\(\s*\)\s*,/g, '$1();');
      // Fix missing semicolons after statements;
      .replace(/(\w+)\s*\(\s*\)\s*$/gm, '$1();');
      // Fix object method calls;
      .replace(/(\w+)\s*\(\s*\)\s*}/g, '$1();');
      // Fix missing semicolons in variable declarations;
      .replace(/(const|let|var)\s+(\w+)\s*=\s*[^;]+$/gm, match => {;
        if (!match.endsWith(';')) {;
          return match + ';';
        }
        return match;
      });
      // Fix missing semicolons in function calls;
      .replace(/(\w+)\s*\(\s*[^)]*\)\s*$/gm, match => {;
        if (;
          !match.endsWith(';') &&;
          !match.includes('{') &&;
          !match.includes('}');
        ) {;
          return match + ';';
        }
        return match;
      });
      // Fix malformed function calls;
      .replace(/(\w+)\s*\(\s*\)\s*}/g, '$1();');
      .replace(/(\w+)\s*\(\s*\)\s*,/g, '$1();');
      // Fix missing semicolons in useEffect;
      .replace(;
        /useEffect\s*\(\s*\(\)\s*=>\s*\{[^}]*\}\s*,\s*\[\s*\]\s*\)\s*$/gm,;
        match => {;
          if (!match.endsWith(';')) {;            return match + ';';

class ComprehensiveFixer {
  constructor() {
    this.fixedFiles = [],
    this.errors = []
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const originalContent = content;

      // Remove merge conflict markers completely
      content = content.replace(/[\s\S]*?[\s\S]*?      content = content.replace(/[\s\S]*?      content = content.replace(/[\s\S]*?      
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
      content = content.replace(/const:\s*(\w+):\s*React\.FC/g, 'const $1: React.FC'),
      content = content.replace(/interface\s+(\w+)\s*\{_([^}]+)_\}/g, 'interface $1 { $2 }');
      
      // Fix broken JSX
      content = content.replace(/<(\w+)\s+([^>]*)_([^>]*)>/g, '<$1 $2 $3>');
      
      // Fix broken return statements
      content = content.replace(/return\s*\(<(\w+)\s+([^>]*)_([^>]*)>/g, 'return (<$1 $2 $3>');
      
      // Fix broken function calls
      content = content.replace(/\(\s*_([^)]+)_\s*\)/g, '($1)');
      
      // Fix broken object properties
      content = content.replace(/(\w+):\s*n:\s*(\w+)/g, '$1: $2'),
      content = content.replace(/(\w+):\s*s:\s*(\w+)/g, '$1: $2'),
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>') || content.includes('{_') || content.includes('_}') || content.includes('_ ') || content.includes('&quot;') || content.includes('&amp;') || content.includes('&lt;') || content.includes('&gt;')) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      );
      // Fix missing semicolons in return statements;
      .replace(/return\s+[^;]+$/gm, match => {;
        if (;
          !match.endsWith(';') &&;
          !match.includes('{') &&;
          !match.includes('}');
        ) {;
          return match + ';';
        }
        return match;
      });
      // Fix trailing commas in function calls;
      .replace(/,\s*\)/g, ')');
      .replace(/,\s*}/g, '}');
      .replace(/,\s*]/g, ']');
      // Fix multiple semicolons;
      .replace(/;\s*;/g, ';');
      // Fix missing semicolons in if statements;
      .replace(/if\s*\([^)]+\)\s*\{[^}]*\}\s*$/gm, match => {;
        if (!match.endsWith(';')) {;
          return match + ';';
        }
        return match;
      });
      // Clean up extra whitespace;
      .replace(/\n\s*\n\s*\n/g, '\n\n');
      .replace(/^\s+$/gm, '');
;
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed ${filePath}`);
    return true;
  } catch (error) {;
    console.error(`❌ Error fixing ${filePath} `, error.message);
    return false;  }
}
;
// List of files to fix;
const filesToFix = [;
  'components/Header.tsx',;
  'components/OptimizedImage.tsx',;
  'components/Sidebar.tsx',;
  'components/SimpleLayout.tsx',;
  'components/SkeletonLoader.tsx',;
  'components/layout/EnhancedFooter.tsx',;
  'components/layout/Footer.tsx',;
  'components/layout/Header.tsx',;
  'components/layout/Layout.tsx',;
  'components/layout/MainLayout.tsx',;
  'components/performance/LazyComponent.tsx',;
  'components/performance/OptimizedImage.tsx',;
  'components/ui/EnhancedMarketplaceCard.tsx',;
  'components/ui/InteractiveNavigation.tsx',;
  'components/ui/NotificationSystem.tsx',;  'components/Header.tsx',
  'components/OptimizedImage.tsx',
  'components/Sidebar.tsx',
  'components/SimpleLayout.tsx',
  'components/SkeletonLoader.tsx',
  'components/layout/EnhancedFooter.tsx',
  'components/layout/Footer.tsx',
  'components/layout/Header.tsx',
  'components/layout/Layout.tsx',
  'components/layout/MainLayout.tsx',
  'components/performance/LazyComponent.tsx',
  'components/performance/OptimizedImage.tsx',
  'components/ui/EnhancedMarketplaceCard.tsx',
  'components/ui/InteractiveNavigation.tsx',
  'components/ui/NotificationSystem.tsx',
];
;
console.log('🔧 Starting comprehensive syntax fixes...');
;
let fixedCount = 0;
filesToFix.forEach(file => {;
  const fullPath = path.join('/workspace', file);
  if (fs.existsSync(fullPath)) {;
    if (fixFile(fullPath)) {;
      fixedCount++;
    }
  }
});
;
console.log(`\n🎉 Fixed ${fixedCount}/${filesToFix.length} files`);
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
