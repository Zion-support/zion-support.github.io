#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining syntax errors...');

// Find all TypeScript and JavaScript files
const findFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'temp_conflicts') {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix syntax errors in a file
const fixSyntaxErrors = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax errors
    const fixes = [
      // Fix const declarations with commas
      { pattern: /const\s+(\w+)\s*=\s*useState\([^)]*\),\s*$/gm, replacement: 'const $1 = useState($2);' },
      // Fix const declarations with colons
      { pattern: /const:\s*(\w+):\s*/g, replacement: 'const $1: ' },
      // Fix property syntax errors
      { pattern: /(\w+):\s*(\w+):\s*/g, replacement: '$1: $2: ' },
      // Fix interface property syntax
      { pattern: /(\w+):\s*(\w+)\s*$/gm, replacement: '$1: $2' },
      // Fix export type syntax
      { pattern: /export type (\w+) = [^,]+,\s*$/gm, replacement: 'export type $1 = $2;' },
      // Fix function parameter syntax
      { pattern: /(\w+):\s*(\w+)\s*\)/g, replacement: '$1: $2)' },
      // Fix object property syntax
      { pattern: /(\w+):\s*(\w+)\s*,/g, replacement: '$1: $2,' },
      // Fix array syntax
      { pattern: /(\w+):\s*(\w+)\s*\]/g, replacement: '$1: $2]' },
      // Fix string concatenation issues
      { pattern: /(\w+):\s*(\w+)\s*\+/g, replacement: '$1: $2 +' },
      // Fix template literal syntax
      { pattern: /(\w+):\s*(\w+)\s*`/g, replacement: '$1: $2`' },
      // Fix JSX attribute syntax
      { pattern: /(\w+):\s*(\w+)\s*>/g, replacement: '$1: $2>' },
      // Fix function call syntax
      { pattern: /(\w+):\s*(\w+)\s*\(/g, replacement: '$1: $2(' },
      // Fix assignment syntax
      { pattern: /(\w+):\s*(\w+)\s*=/g, replacement: '$1: $2 =' },
      // Fix comparison syntax
      { pattern: /(\w+):\s*(\w+)\s*===/g, replacement: '$1: $2 ===' },
      // Fix logical operators
      { pattern: /(\w+):\s*(\w+)\s*&&/g, replacement: '$1: $2 &&' },
      { pattern: /(\w+):\s*(\w+)\s*\|\|/g, replacement: '$1: $2 ||' },
      // Fix ternary operators
      { pattern: /(\w+):\s*(\w+)\s*\?/g, replacement: '$1: $2 ?' },
      { pattern: /(\w+):\s*(\w+)\s*:/g, replacement: '$1: $2:' },
      // Fix arrow functions
      { pattern: /(\w+):\s*(\w+)\s*=>/g, replacement: '$1: $2 =>' },
      // Fix destructuring
      { pattern: /(\w+):\s*(\w+)\s*}/g, replacement: '$1: $2}' },
      { pattern: /(\w+):\s*(\w+)\s*]/g, replacement: '$1: $2]' },
      // Fix specific patterns found in errors
      { pattern: /childre:\s*ReactNode/g, replacement: 'children: ReactNode' },
      { pattern: /const:\s*Layout:\s*/g, replacement: 'const Layout: ' },
      { pattern: /style\)\s*=>\s*{/g, replacement: 'style}) => {' },
      { pattern: /focus:\s*outline-none/g, replacement: 'focus:outline-none' },
      { pattern: /focus:\s*ring-2/g, replacement: 'focus:ring-2' },
      { pattern: /focus:\s*ring-offset-2/g, replacement: 'focus:ring-offset-2' },
      { pattern: /focus:\s*ring-offset-black/g, replacement: 'focus:ring-offset-black' },
      { pattern: /focus:\s*ring-blue-500/g, replacement: 'focus:ring-blue-500' },
      { pattern: /disabled:\s*opacity-50/g, replacement: 'disabled:opacity-50' },
      { pattern: /disabled:\s*cursor-not-allowed/g, replacement: 'disabled:cursor-not-allowed' },
      { pattern: /hover:\s*scale-105/g, replacement: 'hover:scale-105' },
      { pattern: /active:\s*scale-95/g, replacement: 'active:scale-95' },
      { pattern: /hover:\s*bg-blue-700/g, replacement: 'hover:bg-blue-700' },
      { pattern: /hover:\s*bg-gray-700/g, replacement: 'hover:bg-gray-700' },
      { pattern: /hover:\s*bg-white\/5/g, replacement: 'hover:bg-white/5' },
      { pattern: /hover:\s*text-white/g, replacement: 'hover:text-white' },
      { pattern: /hover:\s*shadow-xl/g, replacement: 'hover:shadow-xl' },
      { pattern: /hover:\s*shadow-lg/g, replacement: 'hover:shadow-lg' },
      { pattern: /hover:\s*shadow-md/g, replacement: 'hover:shadow-md' },
      { pattern: /hover:\s*-translate-y-0\.5/g, replacement: 'hover:-translate-y-0.5' },
      { pattern: /hover:\s*border-gray-500/g, replacement: 'hover:border-gray-500' },
      // Fix specific error patterns
      { pattern: /LegalStructure = '[^']+',\s*$/gm, replacement: 'LegalStructure = \'Cayman Foundation\' | \'Swiss Verein\' | \'US 501(c)(6)\' | \'DAO-native Wrapper\';' },
      { pattern: /setLegalStructure<LegalStructure>\([^)]+\),\s*$/gm, replacement: 'setLegalStructure<LegalStructure>(\'Cayman Foundation\');' },
      // Fix missing semicolons after statements
      { pattern: /(\w+)\s*=\s*useState\([^)]*\)\s*,\s*$/gm, replacement: '$1 = useState($2);' },
      { pattern: /(\w+)\s*=\s*useState<[^>]*>\([^)]*\)\s*,\s*$/gm, replacement: '$1 = useState<$2>($3);' },
      // Fix missing semicolons after function calls
      { pattern: /(\w+)\s*\([^)]*\)\s*,\s*$/gm, replacement: '$1($2);' },
      // Fix missing semicolons after assignments
      { pattern: /(\w+)\s*=\s*[^,;]+,\s*$/gm, replacement: '$1 = $2;' },
    ];
    
    fixes.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  const files = findFiles(process.cwd());
  let fixedCount = 0;
  
  console.log(`Found ${files.length} files to check...`);
  
  for (const file of files) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n🎉 Fixed ${fixedCount} files`);
};

main();