#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxErrorFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

<<<<<<< HEAD
// Common syntax fixes
// Common syntax error patterns and their fixes
const fixes = [
  // Fix import statements with comma issues
  {
    pattern: /import\s+(\w+)\s+from\s*,\s*['"`]([^'`]+)['`]/g,
    replacement: "import $1 from '$2'";
},
  {
    pattern: /import\s+(\w+)\s+from\s*,\s*([^;]+);/g,
    replacement: import $1 from $2;;
},
    pattern: /import\s+(\w+)\s+from\s*,\s*['"`]([^'`]+)['`]/g,
    replacement: "import $1 from '$2'
  },
  {
    pattern: /import\s+(\w+)\s+from\s*,\s*([^;]+);/g,
    replacement: import $1 from $2;
  },
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
  
  // Fix missing semicolons in function calls
  {
    pattern: /(\w+\([^)]*\))\s*\)\s*}/g,
    replacement: $1);";
},
  
  // Fix unterminated strings
  {
    pattern: /(['`])([^'`]*)\s*$/gm,
    replacement: (match, quote, content) => {
      if (!content.includes(quote)) {
        return match + quote;
      }
      return match;
    }
  },
  
  // Fix missing commas in object literals
  {
    pattern: /(\w+:\s*[^}]+)\s*(\w+:\s*[^}]+)/g,
    replacement: "$1,\n    $2;
},
  
  // Fix missing semicolons after statements
  {
    pattern: /(\w+)\s*-\s*(\w+)\s*=/g,
    replacement: '$1-$2='},
  // Fix array access with spaces
  {
    pattern: /\[\s*([^\]]+)\s*\]/g,
    replacement: '[$1]'},
  // Fix object property access with spaces
  {
    pattern: /\.\s*([^\s]+)/g,
    replacement: '.$1'},
  // Fix function calls with spaces
  {
    pattern: /(\w+)\s*\(\s*([^)]+)\s*\)/g,
    replacement: '$1($2)'},
  // Fix template literals with spaces
  {
    pattern: /\$\{\s*([^}]+)\s*\}/g,
    replacement: '${$1}'},
    pattern: /(\w+\([^)]*\))\s*$/gm,
    replacement: $1;";
}
];
    replacement: '${$1}',
  },];
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
// Function to fix common syntax errors in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax errors;
    const fixes = [
      // Fix extra semicolons in object literals and function calls;
      { pattern: /(\w+)\s*\(\s*;/g, replacement: '$1(' },
      { pattern: /{\s*;/g, replacement: '{' },
      { pattern: /}\s*;/g, replacement: '}' },
      { pattern: /,\s*;/g, replacement: ',' },
      { pattern: /;\s*;/g, replacement: ';' },
      { pattern: /\(\s*;/g, replacement: '(' },
      { pattern: /;\s*\)/g, replacement: ')' },
      { pattern: /;\s*}/g, replacement: '}' },
      { pattern: /;\s*{/g, replacement: '{' },
      { pattern: /;\s*,/g, replacement: ',' },
      { pattern: /,\s*;/g, replacement: ',' },
      // Fix semicolons in import statements;
      { pattern: /import\s*{\s*([^}]+);\s*}/g, replacement: 'import { $1 }' },
      // Fix semicolons in function declarations;
      { pattern: /\)\s*=>\s*{;/g, replacement: ') => {' },
      { pattern: /}\s*\)\s*;/g, replacement: '})' },
      // Fix semicolons in JSX;
      { pattern: /className={cn\(\s*;/g, replacement: 'className={cn(' },
      { pattern: /}\s*\)\s*}/g, replacement: '})}' },
    // Fix common patterns
    const fixes = [
      // Fix 'use client';'' -> 'use client';
      { pattern: /'use client';''/g, replacement: "'use client'; },
      // Fix import statements with extra quotes
      { pattern: /import ([^;]+);''/g, replacement: 'import $1;' },
      // Fix empty lines with quotes
      { pattern: /^''$/gm, replacement: '' },
      // Fix semicolons in JSX attributes
      { pattern: /(\w+)='([^']*)';/g, replacement: $1='$2'" },
      // Fix extra semicolons in JSX
      { pattern: /(\/>);/g, replacement: '$1' },
      // Fix malformed imports
      {
        pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^']+)[']\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)[']/g,
        replacement: import { $1 } from '$2'\nimport { $3 } from '$4'";
},
      // Fix missing semicolons after imports
      {
        pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^']+)[']\s*(?=\s*import|\s*const|\s*function|\s*export)/g,
        replacement: "import { $1 } from '$2';\n";
},
      // Fix malformed JSX attributes
      {
        pattern: /className\s*=\s*[']([^']*)['"]\s*['"]([^']*)[']/g,
        replacement: "className='$1 $2'";
},
      // Fix malformed function declarations
      {
        pattern: /const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*const\s+(\w+)\s*=\s*\[/g,
        replacement: const $1: React.FC = () => {\n  const $2 = [;
},
      // Fix malformed array syntax
      {
        pattern: /\[\s*{\s*icon:\s*(\w+),\s*title: \s*['"]([^'"]*)['],\s*[']([^'"]*)['"]\s*description:\s*[']([^']*)['"]\s*}/g,
        replacement: "[{ icon: $1, title: '$2', description: '$4' };
},
      // Fix malformed return statements
      {
        pattern: /return\s*\(\s*[']([^'"]*)['"]\s*<div/g,
        replacement: return (\n    <div;
},
      // Fix malformed JSX closing tags
      {
        pattern: /<\/div>\s*\)\s*}\s*;\s*export\s+default/g,
        replacement: "    </div>\n  );\n};\n\nexport default";
},
      // Fix malformed quotes in strings
      {
        pattern: /[']([^']*)['"]\s*['"]([^']*)[']/g,
        replacement: "'$1 $2'";
},
      // Fix malformed object properties
      {
        pattern: /{\s*icon:\s*(\w+),\s*title: \s*[']([^']*)['"],\s*['"]([^']*)[']\s*description:\s*['"]([^'"]*)[']\s*}/g,
        replacement: { icon: $1, title: '$2', description: '$4' }";
},
      // Fix malformed function calls
      {
        pattern: /(\w+)\s*\(\s*\)\s*<div/g,
        replacement: "$1() {\n  return (\n    <div;
},
      // Fix malformed export statements
      {
        pattern: /export\s+default\s+(\w+)\s*;\s*[']([^'"]*)['"]/g,
        replacement: "export default $1;";
}
    ]

    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
=======
  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Fix common syntax errors
      const fixes = [
        // Fix trailing semicolons in object properties
        { pattern: /(\w+):\s*([^,}]+),;/g, replacement: '$1: $2' },
        // Fix trailing semicolons in arrays
        { pattern: /(\w+):\s*\[([^\]]+)\];/g, replacement: '$1: [$2]' },
        // Fix missing semicolons in imports
        { pattern: /import\s+([^;]+)\s*$/gm, replacement: 'import $1;' },
        // Fix trailing semicolons in function calls
        { pattern: /(\w+):\s*\(\)\s*=>\s*([^,}]+);/g, replacement: '$1: () => $2' },
        // Fix trailing semicolons in object methods
        { pattern: /(\w+):\s*\([^)]*\)\s*=>\s*([^,}]+);/g, replacement: '$1: ($2) => $3' },
      ];

      fixes.forEach(fix => {
        const newContent = content.replace(fix.pattern, fix.replacement);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(filePath, content);
        this.fixedFiles.push(filePath);
        this.log(`✅ Fixed syntax errors in: ${filePath}`);
      }

>>>>>>> cursor/automate-test-fix-improve-and-merge-code-1c7d
      return true;
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      this.log(`❌ Error fixing ${filePath}: ${error.message}`);
      return false;
    }
  }

  findFilesWithExtensions(extensions) {
    const files = [];
    
    function walkDir(dir) {
      const items = fs.readdirSync(dir);
      
<<<<<<< HEAD
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.startsWith(`.`) &&
      file !== 'node_modules'
    ) {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {;
} else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
    ) {
      if (fixSyntaxErrors(filePath)) {
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
        fixedCount++;
=======
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-1c7d
      }
    }
    
    walkDir(this.projectRoot);
    return files;
  }

  async run() {
    this.log('🔧 Starting comprehensive syntax error fixing...');

    // Find all TypeScript and JavaScript files
    const files = this.findFilesWithExtensions(['.tsx', '.ts', '.jsx', '.js']);
    
    this.log(`📁 Found ${files.length} files to check`);

    // Fix each file
    for (const file of files) {
      this.fixFile(file);
    }

    // Summary
    this.log(`\n📊 Summary:`);
    this.log(`✅ Fixed ${this.fixedFiles.length} files`);
    this.log(`❌ ${this.errors.length} errors encountered`);

    if (this.fixedFiles.length > 0) {
      this.log('\n🔧 Fixed files:');
      this.fixedFiles.forEach(file => this.log(`  - ${file}`));
    }

    if (this.errors.length > 0) {
      this.log('\n❌ Errors:');
      this.errors.forEach(error => this.log(`  - ${error.file}: ${error.error}`));
    }

    return this.fixedFiles.length > 0;
  }
}

// Run the fixer
const fixer = new SyntaxErrorFixer();
fixer.run().then(success => {
  if (success) {
    console.log('\n🎉 Syntax error fixing completed successfully!');
  } else {
    console.log('\n⚠️ No syntax errors were found or fixed.');
  }
<<<<<<< HEAD
});

console.log(`Fixed ${fixedCount} files`);
console.log('🔧 Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('.');
console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
console.log('Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('./components');
const fixedCount2 = fixFilesInDirectory('./pages');
console.log(`Fixed ${fixedCount + fixedCount2} files`);
=======
}).catch(error => {
  console.error('❌ Error running syntax fixer:', error);
  process.exit(1);
});
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-1c7d
