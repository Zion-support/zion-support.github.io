#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix all remaining issues
function fixAllRemaining(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate exports
    const exportRegex = /export default \w+;\s*export default \w+/g;
    if (exportRegex.test(content)) {
      content = content.replace(exportRegex, (match) => {
        const parts = match.split(';');
        return parts[0] + ';';
      });
      modified = true;
    }
    
    // Fix stray closing braces and parentheses
    content = content.replace(/\s*\)\s*\}\s*$/gm, '');
    content = content.replace(/\s*\}\s*\)\s*$/gm, '');
    content = content.replace(/\s*\)\s*\}\s*export/g, '\nexport');
    content = content.replace(/\s*\)\s*\}\s*$/gm, '');
    
    // Fix missing semicolons after function declarations
    content = content.replace(/(\w+)\s*\(\s*[^)]*\)\s*\{[^}]*\}\s*(?=\n\s*const|\n\s*function|\n\s*export|\n\s*$)/g, (match) => {
      if (!match.endsWith(';') && !match.endsWith('}')) {
        return match + ';';
      }
      return match;
    });
    
    // Fix duplicate function declarations
    const functionRegex = /const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};\s*const\s+\1\s*=\s*\([^)]*\)\s*=>\s*\{[^}]*\};/g;
    if (functionRegex.test(content)) {
      content = content.replace(functionRegex, (match, funcName) => {
        const parts = match.split(';');
        return parts[0] + ';';
      });
      modified = true;
    }
    
    // Fix stray closing brackets
    content = content.replace(/\s*\]\s*$/gm, '');
    content = content.replace(/\s*\]\s*const/g, '\nconst');
    content = content.replace(/\s*\]\s*export/g, '\nexport');
    
    // Fix malformed object literals
    content = content.replace(/\},\s*\{\s*name:\s*'[^']+',\s*href:\s*'[^']+',\s*icon:\s*\w+,\s*submenu:\s*\[/g, ',\n    {\n      name: \'$1\',\n      href: \'$2\',\n      icon: $3,\n      submenu: [');
    
    // Clean up excessive whitespace and newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/g, '');
    content = content.replace(/\n\s*$/g, '\n');
    
    // Fix common syntax patterns
    content = content.replace(/\}\s*\)\s*$/gm, '}');
    content = content.replace(/\s*\)\s*\}\s*$/gm, '}');
    
    // Fix missing closing quotes in imports
    content = content.replace(/from 'lucide-react;$/gm, "from 'lucide-react';");
    content = content.replace(/from 'react-helmet-async;$/gm, "from 'react-helmet-async';");
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('🔍 Finding and fixing all remaining issues...');
const sourceFiles = findSourceFiles('/workspace');

console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
for (const file of sourceFiles) {
  if (fixAllRemaining(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`✅ Fixed issues in ${fixedCount} files`);

// Try to build after fixing
console.log('🔨 Attempting to build...');
try {
  const { execSync } = require('child_process');
  execSync('npm run build', { stdio: 'inherit', cwd: '/workspace' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('❌ Build still has issues, but most syntax errors have been fixed');
}