const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax issues left by merge conflict resolution
    content = content.replace(/;\s*;\s*/g, ';');
    content = content.replace(/,\s*,\s*/g, ',');
    content = content.replace(/{\s*{\s*/g, '{');
    content = content.replace(/}\s*}\s*/g, '}');
    content = content.replace(/\(\s*\(\s*/g, '(');
    content = content.replace(/\)\s*\)\s*/g, ')');
    
    // Fix unterminated string literals
    content = content.replace(/"([^"]*?)\n/g, '"$1"');
    content = content.replace(/'([^']*?)\n/g, "'$1'");
    
    // Fix malformed JSX
    content = content.replace(/<([^>]*?)\n/g, '<$1>');
    
    // Remove empty lines that might have been left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Fix common TypeScript/JSX issues
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      // Fix missing semicolons in import statements
      content = content.replace(/import\s+([^;]+)\n/g, 'import $1;\n');
      
      // Fix malformed export statements
      content = content.replace(/export\s+default\s+([^;]+)\n/g, 'export default $1;\n');
      
      // Fix malformed function declarations
      content = content.replace(/function\s+([^(]+)\s*\(\s*\)\s*{\s*\n/g, 'function $1() {\n');
      
      // Fix malformed arrow functions
      content = content.replace(/const\s+([^=]+)=\s*\(\s*\)\s*=>\s*{\s*\n/g, 'const $1 = () => {\n');
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        fixedCount += walkDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting syntax error fixing...');
const fixedCount = walkDirectory('.');
console.log(`Fixed syntax errors in ${fixedCount} files`);
