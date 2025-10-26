const fs = require('fs');
const path = require('path');

// Function to fix corrupted syntax
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix corrupted variable declarations
  fixed = fixed.replace(/const;\s*(\w+)\s*=/g, 'const $1 =');
  fixed = fixed.replace(/let;\s*(\w+)\s*=/g, 'let $1 =');
  fixed = fixed.replace(/var;\s*(\w+)\s*=/g, 'var $1 =');
  
  // Fix corrupted object properties
  fixed = fixed.replace(/(\w+),\s*(\w+)\s*:/g, '$1$2:');
  fixed = fixed.replace(/(\w+);\s*(\w+)\s*:/g, '$1$2:');
  
  // Fix corrupted JSX attributes
  fixed = fixed.replace(/(\w+),\s*(\w+)\s*=/g, '$1$2=');
  fixed = fixed.replace(/(\w+);\s*(\w+)\s*=/g, '$1$2=');
  
  // Fix corrupted JSX elements
  fixed = fixed.replace(/<(\w+);\s*className\s*=/g, '<$1 className=');
  fixed = fixed.replace(/<(\w+),\s*className\s*=/g, '<$1 className=');
  
  // Fix corrupted function calls
  fixed = fixed.replace(/(\w+),\s*(\w+)\s*\(/g, '$1$2(');
  fixed = fixed.replace(/(\w+);\s*(\w+)\s*\(/g, '$1$2(');
  
  // Fix corrupted array elements
  fixed = fixed.replace(/\[\s*(\w+),\s*(\w+)\s*\]/g, '[$1$2]');
  fixed = fixed.replace(/\[\s*(\w+);\s*(\w+)\s*\]/g, '[$1$2]');
  
  // Fix corrupted string concatenation
  fixed = fixed.replace(/(\w+),\s*(\w+)\s*\+/g, '$1$2 +');
  fixed = fixed.replace(/(\w+);\s*(\w+)\s*\+/g, '$1$2 +');
  
  // Fix corrupted template literals
  fixed = fixed.replace(/(\w+),\s*(\w+)\s*`/g, '$1$2`');
  fixed = fixed.replace(/(\w+);\s*(\w+)\s*`/g, '$1$2`');
  
  // Fix corrupted return statements
  fixed = fixed.replace(/return\s*(\w+),\s*(\w+)/g, 'return $1$2');
  fixed = fixed.replace(/return\s*(\w+);\s*(\w+)/g, 'return $1$2');
  
  // Fix corrupted arrow functions
  fixed = fixed.replace(/=>\s*(\w+),\s*(\w+)/g, '=> $1$2');
  fixed = fixed.replace(/=>\s*(\w+);\s*(\w+)/g, '=> $1$2');
  
  // Fix corrupted destructuring
  fixed = fixed.replace(/\{\s*(\w+),\s*(\w+)\s*\}/g, '{$1$2}');
  fixed = fixed.replace(/\{\s*(\w+);\s*(\w+)\s*\}/g, '{$1$2}');
  
  // Fix corrupted imports
  fixed = fixed.replace(/import\s*(\w+),\s*(\w+)\s*from/g, 'import $1$2 from');
  fixed = fixed.replace(/import\s*(\w+);\s*(\w+)\s*from/g, 'import $1$2 from');
  
  // Fix corrupted exports
  fixed = fixed.replace(/export\s*(\w+),\s*(\w+)/g, 'export $1$2');
  fixed = fixed.replace(/export\s*(\w+);\s*(\w+)/g, 'export $1$2');
  
  // Fix specific patterns that are common
  fixed = fixed.replace(/titl,\s*e:/g, 'title:');
  fixed = fixed.replace(/descriptio,\s*n:/g, 'description:');
  fixed = fixed.replace(/ico,\s*n:/g, 'icon:');
  fixed = fixed.replace(/colo,\s*r:/g, 'color:');
  fixed = fixed.replace(/stat,\s*s:/g, 'stats:');
  fixed = fixed.replace(/lin,\s*k:/g, 'link:');
  
  // Fix corrupted JSX closing tags
  fixed = fixed.replace(/<\/(\w+),\s*(\w+)>/g, '</$1$2>');
  fixed = fixed.replace(/<\/(\w+);\s*(\w+)>/g, '</$1$2>');
  
  // Fix corrupted function parameters
  fixed = fixed.replace(/\(\s*(\w+),\s*(\w+)\s*\)/g, '($1$2)');
  fixed = fixed.replace(/\(\s*(\w+);\s*(\w+)\s*\)/g, '($1$2)');
  
  // Fix corrupted array destructuring
  fixed = fixed.replace(/\[\s*(\w+),\s*(\w+)\s*\]/g, '[$1$2]');
  fixed = fixed.replace(/\[\s*(\w+);\s*(\w+)\s*\]/g, '[$1$2]');
  
  // Fix corrupted object destructuring
  fixed = fixed.replace(/\{\s*(\w+),\s*(\w+)\s*:\s*(\w+)\s*\}/g, '{$1$2: $3}');
  fixed = fixed.replace(/\{\s*(\w+);\s*(\w+)\s*:\s*(\w+)\s*\}/g, '{$1$2: $3}');
  
  // Fix corrupted ternary operators
  fixed = fixed.replace(/\?\s*(\w+),\s*(\w+)\s*:/g, '? $1$2 :');
  fixed = fixed.replace(/\?\s*(\w+);\s*(\w+)\s*:/g, '? $1$2 :');
  
  // Fix corrupted logical operators
  fixed = fixed.replace(/&&\s*(\w+),\s*(\w+)/g, '&& $1$2');
  fixed = fixed.replace(/&&\s*(\w+);\s*(\w+)/g, '&& $1$2');
  fixed = fixed.replace(/\|\|\s*(\w+),\s*(\w+)/g, '|| $1$2');
  fixed = fixed.replace(/\|\|\s*(\w+);\s*(\w+)/g, '|| $1$2');
  
  return fixed;
}

// Function to remove console statements
function removeConsoleStatements(content) {
  return content.replace(/console\.(log|warn|error|info)\([^)]*\);?\s*/g, '');
}

// Function to fix prefer-const issues
function fixPreferConst(content) {
  return content.replace(/let\s+(\w+)\s*=\s*[^;]+;\s*\/\/\s*never\s+reassigned/g, (match, varName) => {
    return match.replace(/let/, 'const');
  });
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix syntax errors
    const contentWithSyntax = fixSyntaxErrors(content);
    if (contentWithSyntax !== content) {
      content = contentWithSyntax;
      modified = true;
    }
    
    // Remove console statements
    const contentWithoutConsole = removeConsoleStatements(content);
    if (contentWithoutConsole !== content) {
      content = contentWithoutConsole;
      modified = true;
    }
    
    // Fix prefer-const issues
    const contentWithConst = fixPreferConst(content);
    if (contentWithConst !== content) {
      content = contentWithConst;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'app');

let totalFixed = 0;

// Process src directory
if (fs.existsSync(srcDir)) {
  const srcFiles = findTsxFiles(srcDir);
  console.log(`Processing ${srcFiles.length} files in src directory...`);
  
  for (const file of srcFiles) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
}

// Process app directory
if (fs.existsSync(appDir)) {
  const appFiles = findTsxFiles(appDir);
  console.log(`Processing ${appFiles.length} files in app directory...`);
  
  for (const file of appFiles) {
    if (processFile(file)) {
      totalFixed++;
    }
  }
}

console.log(`\nTotal files fixed: ${totalFixed}`);