const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax errors
    const originalContent = content;
    
    content = content
      // Remove extra semicolons in various places
      .replace(/;\s*$/gm, '')
      .replace(/;\s*{/g, ' {')
      .replace(/;\s*\(/g, ' (')
      .replace(/;\s*</g, ' <')
      .replace(/;\s*if/g, ' if')
      .replace(/;\s*const/g, ' const')
      .replace(/;\s*let/g, ' let')
      .replace(/;\s*var/g, ' var')
      .replace(/;\s*function/g, ' function')
      .replace(/;\s*return/g, ' return')
      .replace(/;\s*export/g, ' export')
      .replace(/;\s*import/g, ' import')
      // Fix function parameters with extra commas
      .replace(/\(event: KeyboardEvent\)\s*,\s*{/g, '(event: KeyboardEvent) => {')
      .replace(/\(event: KeyboardEvent\)\s*,\s*=>/g, '(event: KeyboardEvent) =>')
      // Fix object literals with extra semicolons
      .replace(/\{\s*;\s*([^}]+)\s*;\s*\}/g, '{\n    $1\n  }')
      .replace(/\{\s*;\s*([^}]+)\s*;\s*\}/g, '{\n    $1\n  }')
      // Fix JSX with extra semicolons
      .replace(/;\s*<[^>]+>/g, (match) => match.replace(/;\s*/, '\n        '))
      .replace(/;\s*<\/[^>]+>/g, (match) => match.replace(/;\s*/, '\n      '))
      // Fix comments with extra semicolons
      .replace(/\/\/\s*[^;]+;\s*$/gm, (match) => match.replace(/;\s*$/, ''))
      // Fix if statements with extra semicolons
      .replace(/if\s*\([^)]+\)\s*{\s*;\s*$/gm, (match) => match.replace(/{\s*;\s*$/, ' {'))
      // Fix function declarations with extra semicolons
      .replace(/function\s+[^(]+\s*\([^)]*\)\s*{\s*;\s*$/gm, (match) => match.replace(/{\s*;\s*$/, ' {'))
      // Fix arrow functions with extra semicolons
      .replace(/=>\s*{\s*;\s*$/gm, (match) => match.replace(/{\s*;\s*$/, ' {'))
      // Fix return statements with extra semicolons
      .replace(/return\s+[^;]+;\s*$/gm, (match) => match.replace(/;\s*$/, ''))
      // Fix variable declarations with extra semicolons
      .replace(/(const|let|var)\s+[^=]+=\s*[^;]+;\s*$/gm, (match) => match.replace(/;\s*$/, ''))
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/\s+$/gm, '');
    
    if (content !== originalContent) {
      modified = true;
    }
    
    if (modified) {
      // Write the fixed content back to the file
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files
const appDir = path.join(__dirname, 'app');
const filesToFix = [];

function findFilesToFix(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findFilesToFix(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      filesToFix.push(filePath);
    }
  }
}

// Find all files to fix
findFilesToFix(appDir);

console.log(`Found ${filesToFix.length} files to check for syntax errors`);

// Fix all files
let fixedCount = 0;
for (const file of filesToFix) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} out of ${filesToFix.length} files`);