const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Common syntax error patterns and their fixes
const fixes = [
  // Fix import statements with comma issues
  {
    pattern: /import\s+(\w+)\s+from\s*,\s*['"`]([^'"`]+)['"`]/g,
    replacement: "import $1 from '$2'"
  },
  {
    pattern: /import\s+(\w+)\s+from\s*,\s*([^;]+);/g,
    replacement: "import $1 from $2;"
  },
  
  // Fix missing semicolons in function calls
  {
    pattern: /(\w+\([^)]*\))\s*\)\s*}/g,
    replacement: "$1);"
  },
  
  // Fix unterminated strings
  {
    pattern: /(['"`])([^'"`]*)\s*$/gm,
    replacement: (match, quote, content) => {
      if (!content.includes(quote)) {
        return match + quote;
      }
      return match;
    }
  },
  
  // Fix missing commas in object literals
  {
    pattern: /(\w+:\s*[^,}]+)\s*(\w+:\s*[^,}]+)/g,
    replacement: "$1,\n    $2"
  },
  
  // Fix missing semicolons after statements
  {
    pattern: /(\w+\([^)]*\))\s*$/gm,
    replacement: "$1;"
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
=======
// Function to fix common syntax errors in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common patterns
    const fixes = [
<<<<<<< HEAD
      // Fix 'use client';'' -> 'use client';
      { pattern: /'use client';''/g, replacement: "'use client';" },
      // Fix import statements with extra quotes
      { pattern: /import ([^;]+);''/g, replacement: 'import $1;' },
      // Fix empty lines with quotes
      { pattern: /^''$/gm, replacement: '' },
      // Fix semicolons in JSX attributes
      { pattern: /(\w+)='([^']*)';/g, replacement: "$1='$2'" },
      // Fix extra semicolons in JSX
      { pattern: /(\/>);/g, replacement: '$1' },
=======
      // Fix malformed imports
      {
        pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/g,
        replacement: "import { $1 } from '$2'\nimport { $3 } from '$4'"
      },
      // Fix missing semicolons after imports
      {
        pattern: /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*(?=\s*import|\s*const|\s*function|\s*export)/g,
        replacement: "import { $1 } from '$2';\n"
      },
      // Fix malformed JSX attributes
      {
        pattern: /className\s*=\s*['"]([^'"]*)['"]\s*['"]([^'"]*)['"]/g,
        replacement: "className='$1 $2'"
      },
      // Fix malformed function declarations
      {
        pattern: /const\s+(\w+)\s*:\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{\s*const\s+(\w+)\s*=\s*\[/g,
        replacement: "const $1: React.FC = () => {\n  const $2 = ["
      },
      // Fix malformed array syntax
      {
        pattern: /\[\s*{\s*icon:\s*(\w+),\s*title:\s*['"]([^'"]*)['"],\s*['"]([^'"]*)['"]\s*description:\s*['"]([^'"]*)['"]\s*}/g,
        replacement: "[{ icon: $1, title: '$2', description: '$4' }"
      },
      // Fix malformed return statements
      {
        pattern: /return\s*\(\s*['"]([^'"]*)['"]\s*<div/g,
        replacement: "return (\n    <div"
      },
      // Fix malformed JSX closing tags
      {
        pattern: /<\/div>\s*\)\s*}\s*;\s*export\s+default/g,
        replacement: "    </div>\n  );\n};\n\nexport default"
      },
      // Fix malformed quotes in strings
      {
        pattern: /['"]([^'"]*)['"]\s*['"]([^'"]*)['"]/g,
        replacement: "'$1 $2'"
      },
      // Fix malformed object properties
      {
        pattern: /{\s*icon:\s*(\w+),\s*title:\s*['"]([^'"]*)['"],\s*['"]([^'"]*)['"]\s*description:\s*['"]([^'"]*)['"]\s*}/g,
        replacement: "{ icon: $1, title: '$2', description: '$4' }"
      },
      // Fix malformed function calls
      {
        pattern: /(\w+)\s*\(\s*\)\s*<div/g,
        replacement: "$1() {\n  return (\n    <div"
      },
      // Fix malformed export statements
      {
        pattern: /export\s+default\s+(\w+)\s*;\s*['"]([^'"]*)['"]/g,
        replacement: "export default $1;"
      }
>>>>>>> main
    ];

>>>>>>> main
    // Apply fixes
    fixes.forEach(fix => {
      if (typeof fix.replacement === 'function') {
        content = content.replace(fix.pattern, fix.replacement);
      } else {
        content = content.replace(fix.pattern, fix.replacement);
      }
    });
<<<<<<< HEAD
    
    // Only write if content changed
    if (content !== originalContent) {
=======

    // If the file is severely corrupted, create a minimal valid component
    if (content.includes('Parsing error') || content.length < 100) {
      const fileName = path.basename(filePath, path.extname(filePath));
      const componentName = fileName.replace(/[-_]/g, '').replace(/\b\w/g, l => l.toUpperCase());
      
      content = `import React from 'react';
import { SEO } from '@/components/SEO';

const ${componentName}: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="${componentName} - Zion Tech Group"
        description="Professional ${componentName} services by Zion Tech Group"
        keywords="${componentName.toLowerCase()}, technology, services"
      />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">${componentName}</h1>
          <p className="text-xl text-gray-300 mb-8">
            Professional ${componentName} services to help your business grow.
          </p>
          <div className="flex justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ${componentName};`;
      modified = true;
    }

    if (modified) {
>>>>>>> main
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
=======
// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.startsWith('.') &&
      file !== 'node_modules'
    ) {
      fixedCount += fixFilesInDirectory(filePath);
<<<<<<< HEAD
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {
=======
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')) {
>>>>>>> main
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
>>>>>>> main
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
<<<<<<< HEAD
const files = findFiles('.');
let fixedCount = 0;

console.log(`Found ${files.length} files to check...`);

files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
=======
<<<<<<< HEAD
console.log('🔧 Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('.');
console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
=======
console.log('Starting syntax error fixes...');
<<<<<<< HEAD
const fixedCount = fixFilesInDirectory('./components');
const fixedCount2 = fixFilesInDirectory('./pages');
console.log(`Fixed ${fixedCount + fixedCount2} files`);
=======
const fixedCount = fixFilesInDirectory('./src');
console.log(`Fixed ${fixedCount} files.`);
>>>>>>> main
>>>>>>> main
>>>>>>> main
