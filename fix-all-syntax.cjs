#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix all syntax errors
function fixAllSyntax(content) {
  // Fix extra quotes at end of lines
  content = content.replace(/;'$/gm, ';');
  content = content.replace(/''$/gm, '');
  content = content.replace(/;'$/gm, ';');
  
  // Fix unterminated string literals in imports
  content = content.replace(/import\s+.*\s+from\s+['"][^'"]+['"];'$/gm, (match) => {
    return match.replace(/;'$/, ';');
  });
  
  // Fix malformed function declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*return\s*\(\s*$/gm, 'const $1 = () => {\n  return (\n');
  
  // Fix missing closing braces
  content = content.replace(/\{\s*return\s*\(\s*$/gm, '{\n  return (\n');
  
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
  
  // Fix unterminated string constants
  content = content.replace(/['"`]([^'"`]*?)\n(?!['"`])/g, '$1\n');
  
  // Fix expression expected errors
  content = content.replace(/;\s*$/gm, ';\n');
  
  // Fix declaration or statement expected
  content = content.replace(/}\s*$/gm, '}\n');
  
  // Fix missing semicolons after variable declarations
  content = content.replace(/(const|let|var)\s+\w+\s*=.*\n(?!;)/g, (match) => {
    if (!match.endsWith(';')) {
      return match.trim() + ';\n';
    }
    return match;
  });
  
  // Fix missing semicolons after imports
  content = content.replace(/import\s+.*\s+from\s+['"][^'"]+['"]\n(?!;)/g, (match) => {
    if (!match.endsWith(';')) {
      return match.trim() + ';\n';
    }
    return match;
  });
  
  return content;
}

// Function to fix specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixAllSyntax(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all problematic files
function findProblematicFiles() {
  const problematicFiles = [];
  
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
          // Check for common syntax issues
          if (content.includes(";'") || content.includes("''") || content.includes('return (') || content.includes('Expression expected')) {
            problematicFiles.push(filePath);
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
  console.log('Fixing all syntax errors...');
  
  const filesToFix = findProblematicFiles();
  console.log(`Found ${filesToFix.length} files with syntax issues`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  filesToFix.forEach(filePath => {
    if (fixFile(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\nSyntax fixing complete:`);
  console.log(`- Files fixed: ${fixedCount}`);
  console.log(`- Files with errors: ${errorCount}`);
  console.log(`- Total files processed: ${filesToFix.length}`);
}

main();