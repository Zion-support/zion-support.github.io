const fs = require('fs');
const path = require('path');

// Function to fix duplicate const declarations in a file
function fixConstDeclarations(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix patterns like "const var = const var = const var ="
    const constPattern = /const\s+(\w+)\s*=\s*const\s+\1\s*=\s*const\s+\1\s*=/g;
    content = content.replace(constPattern, 'const $1 =');
    
    // Fix patterns like "const var = const var ="
    const constPattern2 = /const\s+(\w+)\s*=\s*const\s+\1\s*=/g;
    content = content.replace(constPattern2, 'const $1 =');
    
    // Fix patterns like "const var = const var = const var = ["
    const constPattern3 = /const\s+(\w+)\s*=\s*const\s+\1\s*=\s*const\s+\1\s*=\s*\[/g;
    content = content.replace(constPattern3, 'const $1 = [');
    
    // Fix patterns like "const var = const var = ["
    const constPattern4 = /const\s+(\w+)\s*=\s*const\s+\1\s*=\s*\[/g;
    content = content.replace(constPattern4, 'const $1 = [');
    
    // Fix patterns like "const var = const var = () => {"
    const constPattern5 = /const\s+(\w+)\s*=\s*const\s+\1\s*=\s*\(\)\s*=>\s*\{/g;
    content = content.replace(constPattern5, 'const $1 = () => {');
    
    // Fix patterns like "const var = const var = (param) => {"
    const constPattern6 = /const\s+(\w+)\s*=\s*const\s+\1\s*=\s*\([^)]*\)\s*=>\s*\{/g;
    content = content.replace(constPattern6, (match, varName) => {
      return match.replace(/const\s+\w+\s*=\s*const\s+\w+\s*=\s*/, 'const ' + varName + ' = ');
    });
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TypeScript/JavaScript files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to modify
      if (!['node_modules', '.git', 'dist', '.next'].includes(file)) {
        fixedCount += fixAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixConstDeclarations(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix const declarations...');
const fixedCount = fixAllFiles(appDir);
console.log(`Fixed ${fixedCount} files`);