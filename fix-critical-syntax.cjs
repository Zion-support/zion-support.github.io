const fs = require('fs');
const path = require('path');

// Function to fix critical syntax errors
function fixCriticalSyntax(content) {
  let fixed = content;
  
  // Fix corrupted export statements
  fixed = fixed.replace(/export constmetadata:/g, 'export const metadata:');
  fixed = fixed.replace(/export constmetadata=/g, 'export const metadata =');
  
  // Fix corrupted JSX attributes
  fixed = fixed.replace(/<(\w+)className=/g, '<$1 className=');
  fixed = fixed.replace(/<(\w+)id=/g, '<$1 id=');
  fixed = fixed.replace(/<(\w+)src=/g, '<$1 src=');
  fixed = fixed.replace(/<(\w+)alt=/g, '<$1 alt=');
  fixed = fixed.replace(/<(\w+)href=/g, '<$1 href=');
  fixed = fixed.replace(/<(\w+)target=/g, '<$1 target=');
  fixed = fixed.replace(/<(\w+)rel=/g, '<$1 rel=');
  fixed = fixed.replace(/<(\w+)type=/g, '<$1 type=');
  fixed = fixed.replace(/<(\w+)value=/g, '<$1 value=');
  fixed = fixed.replace(/<(\w+)onClick=/g, '<$1 onClick=');
  fixed = fixed.replace(/<(\w+)onChange=/g, '<$1 onChange=');
  fixed = fixed.replace(/<(\w+)onSubmit=/g, '<$1 onSubmit=');
  fixed = fixed.replace(/<(\w+)onLoad=/g, '<$1 onLoad=');
  fixed = fixed.replace(/<(\w+)onError=/g, '<$1 onError=');
  
  // Fix corrupted function declarations
  fixed = fixed.replace(/const(\w+)=/g, 'const $1 =');
  fixed = fixed.replace(/let(\w+)=/g, 'let $1 =');
  fixed = fixed.replace(/var(\w+)=/g, 'var $1 =');
  
  // Fix corrupted arrow functions
  fixed = fixed.replace(/=>\s*{(\w+)/g, '=> { $1');
  fixed = fixed.replace(/=>\s*(\w+)\s*{/g, '=> $1 {');
  
  // Fix corrupted object properties
  fixed = fixed.replace(/(\w+):\s*(\w+):/g, '$1: $2:');
  fixed = fixed.replace(/(\w+):\s*(\w+)=/g, '$1: $2 =');
  
  // Fix corrupted array elements
  fixed = fixed.replace(/\[\s*(\w+)\s*,\s*(\w+)\s*\]/g, '[$1, $2]');
  
  // Fix corrupted string literals
  fixed = fixed.replace(/"(\w+)"(\w+)/g, '"$1" $2');
  fixed = fixed.replace(/'(\w+)'(\w+)/g, "'$1' $2");
  
  // Fix corrupted template literals
  fixed = fixed.replace(/`(\w+)`(\w+)/g, '`$1` $2');
  
  // Fix corrupted JSX elements
  fixed = fixed.replace(/<(\w+)\s*(\w+)\s*>/g, '<$1 $2>');
  fixed = fixed.replace(/<\/(\w+)\s*(\w+)\s*>/g, '</$1>');
  
  // Fix corrupted function calls
  fixed = fixed.replace(/(\w+)\((\w+)\)/g, '$1($2)');
  fixed = fixed.replace(/(\w+)\((\w+),(\w+)\)/g, '$1($2, $3)');
  
  // Fix corrupted destructuring
  fixed = fixed.replace(/\{\s*(\w+)\s*,\s*(\w+)\s*\}/g, '{$1, $2}');
  fixed = fixed.replace(/\[\s*(\w+)\s*,\s*(\w+)\s*\]/g, '[$1, $2]');
  
  // Fix corrupted imports
  fixed = fixed.replace(/import\s*(\w+)\s*from/g, 'import $1 from');
  fixed = fixed.replace(/import\s*{\s*(\w+)\s*}\s*from/g, 'import { $1 } from');
  fixed = fixed.replace(/import\s*{\s*(\w+)\s*,\s*(\w+)\s*}\s*from/g, 'import { $1, $2 } from');
  
  // Fix corrupted exports
  fixed = fixed.replace(/export\s*(\w+)/g, 'export $1');
  fixed = fixed.replace(/export\s*{\s*(\w+)\s*}/g, 'export { $1 }');
  fixed = fixed.replace(/export\s*{\s*(\w+)\s*,\s*(\w+)\s*}/g, 'export { $1, $2 }');
  
  // Fix corrupted return statements
  fixed = fixed.replace(/return\s*(\w+)/g, 'return $1');
  fixed = fixed.replace(/return\s*(\w+)\s*(\w+)/g, 'return $1 $2');
  
  // Fix corrupted conditional statements
  fixed = fixed.replace(/if\s*\((\w+)\)/g, 'if ($1)');
  fixed = fixed.replace(/if\s*\((\w+)\s*(\w+)\)/g, 'if ($1 $2)');
  fixed = fixed.replace(/else\s*(\w+)/g, 'else $1');
  fixed = fixed.replace(/else\s*if\s*\((\w+)\)/g, 'else if ($1)');
  
  // Fix corrupted loops
  fixed = fixed.replace(/for\s*\((\w+)\s*(\w+)\)/g, 'for ($1 $2)');
  fixed = fixed.replace(/while\s*\((\w+)\)/g, 'while ($1)');
  fixed = fixed.replace(/do\s*(\w+)/g, 'do $1');
  
  // Fix corrupted try-catch
  fixed = fixed.replace(/try\s*(\w+)/g, 'try $1');
  fixed = fixed.replace(/catch\s*\((\w+)\)/g, 'catch ($1)');
  fixed = fixed.replace(/finally\s*(\w+)/g, 'finally $1');
  
  // Fix corrupted switch statements
  fixed = fixed.replace(/switch\s*\((\w+)\)/g, 'switch ($1)');
  fixed = fixed.replace(/case\s*(\w+):/g, 'case $1:');
  fixed = fixed.replace(/default\s*(\w+)/g, 'default $1');
  
  // Fix corrupted class declarations
  fixed = fixed.replace(/class\s*(\w+)\s*(\w+)/g, 'class $1 $2');
  fixed = fixed.replace(/extends\s*(\w+)/g, 'extends $1');
  fixed = fixed.replace(/implements\s*(\w+)/g, 'implements $1');
  
  // Fix corrupted interface declarations
  fixed = fixed.replace(/interface\s*(\w+)\s*(\w+)/g, 'interface $1 $2');
  fixed = fixed.replace(/type\s*(\w+)\s*(\w+)/g, 'type $1 $2');
  
  // Fix corrupted enum declarations
  fixed = fixed.replace(/enum\s*(\w+)\s*(\w+)/g, 'enum $1 $2');
  
  // Fix corrupted namespace declarations
  fixed = fixed.replace(/namespace\s*(\w+)\s*(\w+)/g, 'namespace $1 $2');
  
  // Fix corrupted module declarations
  fixed = fixed.replace(/module\s*(\w+)\s*(\w+)/g, 'module $1 $2');
  
  // Fix corrupted declare statements
  fixed = fixed.replace(/declare\s*(\w+)/g, 'declare $1');
  
  // Fix corrupted async/await
  fixed = fixed.replace(/async\s*(\w+)/g, 'async $1');
  fixed = fixed.replace(/await\s*(\w+)/g, 'await $1');
  
  // Fix corrupted generators
  fixed = fixed.replace(/function\s*\*\s*(\w+)/g, 'function* $1');
  fixed = fixed.replace(/yield\s*(\w+)/g, 'yield $1');
  
  // Fix corrupted decorators
  fixed = fixed.replace(/@(\w+)/g, '@$1');
  
  // Fix corrupted comments
  fixed = fixed.replace(/\/\/(\w+)/g, '// $1');
  fixed = fixed.replace(/\/\*(\w+)\*\//g, '/* $1 */');
  
  // Fix corrupted regex
  fixed = fixed.replace(/\/\w+\//g, '/$1/');
  
  // Fix corrupted numbers
  fixed = fixed.replace(/(\d+)(\w+)/g, '$1 $2');
  
  // Fix corrupted booleans
  fixed = fixed.replace(/true(\w+)/g, 'true $1');
  fixed = fixed.replace(/false(\w+)/g, 'false $1');
  
  // Fix corrupted null/undefined
  fixed = fixed.replace(/null(\w+)/g, 'null $1');
  fixed = fixed.replace(/undefined(\w+)/g, 'undefined $1');
  
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
    
    // Fix critical syntax errors
    const contentWithSyntax = fixCriticalSyntax(content);
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