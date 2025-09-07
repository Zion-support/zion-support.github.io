const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting syntax error fixes...');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Fix common syntax errors
    content = content.replace(/[\s\S]*?    content = content.replace(/[\s\S]*?    
    // Fix missing semicolons in imports
    content = content.replace(/import\s+([^;]+)\s*$/gm, 'import $1;');
    
    // Fix missing semicolons in exports
    content = content.replace(/export\s+([^;]+)\s*$/gm, 'export $1;');
    
    // Fix JSX syntax errors
    content = content.replace(/<([^>]+)>\s*$/gm, '<$1>');
    
    // Fix TypeScript interface syntax
    content = content.replace(/interface\s+(\w+)\s*\{\s*\}/g, 'interface $1 {}');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '\n}'.repeat(openBraces - closeBraces);
    }

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += processDirectory(filePath);
    } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  traverse(dir);
  return files;
}

const fixedCount = processDirectory('/workspace');
console.log(`🎉 Fixed ${fixedCount} files with syntax errors`);
