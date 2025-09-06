const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
    content = content.replace(/

    // Fix missing semicolons in imports
    content = content.replace(/import\s+([^;]+)\s*$/gm, 'import $1;');

    // Fix missing semicolons in exports
    content = content.replace(/export\s+([^;]+)\s*$/gm, 'export $1;');

    // Fix JSX syntax errors
    content = content.replace(/<([^>]+)>\s*$/gm, '<$1>');

    // Fix TypeScript interface syntax
    content = content.replace(/interface\s+(\w+)\s*\{\s*\}/g, 'interface $1 {}');

=======
console.log('🔧 Starting syntax error fixes...');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Fix common syntax errors
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix missing semicolons in imports
    content = content.replace(/import\s+([^;]+)\s*$/gm, 'import $1;');
    
    // Fix missing semicolons in exports
    content = content.replace(/export\s+([^;]+)\s*$/gm, 'export $1;');
    
    // Fix JSX syntax errors
    content = content.replace(/<([^>]+)>\s*$/gm, '<$1>');
    
    // Fix TypeScript interface syntax
    content = content.replace(/interface\s+(\w+)\s*\{\s*\}/g, 'interface $1 {}');
    
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD

=======
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    return false;
  }
}

<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
<<<<<<< HEAD

  traverse(dir);
  return files;
}
=======
  
  traverse(dir);
  return files;
}

const fixedCount = processDirectory('/workspace');
console.log(`🎉 Fixed ${fixedCount} files with syntax errors`);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
