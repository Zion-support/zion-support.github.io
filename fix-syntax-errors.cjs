#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing semicolons after imports
  content = content.replace(/import\s+.*\s+from\s+['"][^'"]+['"]\n(?!;)/g, (match) => {
    if (!match.endsWith(';')) {
      return match.trim() + ';\n';
    }
    return match;
  });

  // Fix missing semicolons after variable declarations
  content = content.replace(/(const|let|var)\s+\w+\s*=.*\n(?!;)/g, (match) => {
    if (!match.endsWith(';')) {
      return match.trim() + ';\n';
    }
    return match;
  });

  // Fix malformed JSX closing tags
  content = content.replace(/<(\w+)\s+[^>]*>\s*<\/\1>\s*<\/\1>/g, '<$1 $2></$1>');
  
  // Fix duplicate className attributes
  content = content.replace(/className="[^"]*"\s+className="[^"]*"/g, (match) => {
    const classes = match.match(/className="([^"]*)"/g);
    if (classes && classes.length > 1) {
      const allClasses = classes.map(c => c.replace('className="', '').replace('"', '')).join(' ');
      return `className="${allClasses}"`;
    }
    return match;
  });

  // Fix malformed function declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*return\s*\(\s*$/gm, 'const $1 = () => {\n  return (\n');
  
  // Fix missing closing braces
  content = content.replace(/\{\s*return\s*\(\s*$/gm, '{\n  return (\n');
  
  // Fix unterminated strings
  content = content.replace(/(['"`])([^'"`]*?)\n(?!['"`])/g, '$1$2$1\n');
  
  // Fix duplicate return statements
  content = content.replace(/return\s*\(\s*\n\s*return\s*\(/g, 'return (');
  
  // Fix malformed JSX elements
  content = content.replace(/<(\w+)\s+([^>]*?)\s*>\s*<\/\1>\s*<\/\1>/g, '<$1 $2></$1>');
  
  // Fix missing closing parentheses
  content = content.replace(/\(\s*$/gm, '(\n');
  
  // Fix malformed arrow functions
  content = content.replace(/=\s*\(\s*\)\s*=>\s*{\s*return\s*\(\s*$/gm, '= () => {\n  return (\n');
  
  // Clean up extra semicolons
  content = content.replace(/;;+/g, ';');
  
  // Fix malformed JSX attributes
  content = content.replace(/className="[^"]*"\s+onClick="[^"]*"\s+className="[^"]*"/g, (match) => {
    const classNameMatch = match.match(/className="([^"]*)"/g);
    const onClickMatch = match.match(/onClick="([^"]*)"/g);
    if (classNameMatch && onClickMatch) {
      return `className="${classNameMatch[0].replace('className="', '').replace('"', '')}" ${onClickMatch[0]}`;
    }
    return match;
  });

  return content;
}

// Function to fix specific file types
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply syntax fixes
    content = fixSyntaxErrors(content);
    
    // If content changed, write it back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
=======
// Common syntax fixes
const fixes = [
  // Fix unterminated string literals in import statements
  {
    pattern: /import Navigation from '\.\.\/components$/gm,
    replacement: "import Navigation from '../components/Navigation';"
  },
  {
    pattern: /import Footer from '\.\.\/components$/gm,
    replacement: "import Footer from '../components/Footer';"
  },
  // Fix missing semicolons and malformed function declarations
  {
    pattern: /;\nconst \w+Page: React\.FC = \(\) => \{const/gm,
    replacement: ';\n\nconst $1Page: React.FC = () => {\n  const'
  },
  // Fix malformed icon properties
  {
    pattern: /ico,\s*n:/gm,
    replacement: 'icon:'
  },
  // Fix unterminated string literals in titles
  {
    pattern: /title: '[^']*$/gm,
    replacement: (match) => match + "'"
  },
  // Fix malformed descriptions
  {
    pattern: /descriptio,\s*n:/gm,
    replacement: 'description:'
  },
  // Fix missing closing quotes in strings
  {
    pattern: /description: '[^']*$/gm,
    replacement: (match) => match + "'"
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
// Function to find all problematic files
function findProblematicFiles() {
  const problematicFiles = [];
  
  // Check for files with common syntax issues
  const patterns = [
    /import\s+.*\s+from\s+['"][^'"]+['"]\n(?!;)/,
    /const\s+\w+\s*=.*\n(?!;)/,
    /<(\w+)\s+[^>]*>\s*<\/\1>\s*<\/\1>/,
    /className="[^"]*"\s+className="[^"]*"/,
    /return\s*\(\s*\n\s*return\s*\(/
  ];
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.includes('node_modules') && !file.startsWith('.')) {
        scanDirectory(filePath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(file)) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          for (const pattern of patterns) {
            if (pattern.test(content)) {
              problematicFiles.push(filePath);
              break;
            }
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory('.');
  return problematicFiles;
}

// Main function
function main() {
  console.log('Starting syntax error fixing...');
  
  // Get list of files to fix
  const filesToFix = findProblematicFiles();
  console.log(`Found ${filesToFix.length} files with potential syntax issues`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  filesToFix.forEach(filePath => {
    if (fixFile(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\nSyntax error fixing complete:`);
  console.log(`- Files fixed: ${fixedCount}`);
  console.log(`- Files with errors: ${errorCount}`);
  console.log(`- Total files processed: ${filesToFix.length}`);
}

// Run the script
main();
=======
function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting syntax error fixes...');
const fixedCount = walkDirectory('./app');
console.log(`Fixed ${fixedCount} files`);
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
