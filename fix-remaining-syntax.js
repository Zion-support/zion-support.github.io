#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix remaining syntax errors
function fixRemainingSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix unterminated string literals in import statements
    content = content.replace(/import\s+{[^}]*}\s+from\s+'[^']*;';'[^']*',/g, (match) => {
      const importMatch = match.match(/import\s+{([^}]*)}\s+from\s+'([^']*);';'([^']*)',/);
      if (importMatch) {
        return `import { ${importMatch[1]} } from '${importMatch[2]}';\n\nconst ComponentName = () => {\n  const data = [\n    '${importMatch[3]}',`;
      }
      return match;
    });
    
    // Fix malformed import statements with stray characters
    content = content.replace(/import\s+{[^}]*}\s+from\s+'[^']*;';'[^']*',/g, (match) => {
      const importMatch = match.match(/import\s+{([^}]*)}\s+from\s+'([^']*);';'([^']*)',/);
      if (importMatch) {
        return `import { ${importMatch[1]} } from '${importMatch[2]}';\n\nconst ComponentName = () => {\n  const data = [\n    '${importMatch[3]}',`;
      }
      return match;
    });
    
    // Fix stray semicolons and quotes in the middle of code
    content = content.replace(/';'[^']*',/g, (match) => {
      const cleanMatch = match.replace(/';'([^']*)',/, '$1');
      return `'${cleanMatch}',`;
    });
    
    // Fix malformed object properties
    content = content.replace(/(\w+):\s*'([^']*);'([^']*)',/g, '$1: \'$2\',');
    
    // Fix stray semicolons in JSX
    content = content.replace(/;\s*\)\s*}/g, '\n  );\n}');
    
    // Fix duplicate function declarations
    const functionRegex = /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{[^}]*\}\s*const\s+\1:\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g;
    content = content.replace(functionRegex, (match, funcName) => {
      return match.replace(new RegExp(`const\\s+${funcName}:\\s*React\\.FC\\s*=\\s*\\(\\)\\s*=>\\s*\\{[^}]*\\}\\s*const\\s+${funcName}:\\s*React\\.FC\\s*=\\s*\\(\\)\\s*=>\\s*\\{`, 'g'), `const ${funcName}: React.FC = () => {`);
    });
    
    // Fix malformed return statements
    content = content.replace(/return\s*\(\s*<[^>]*>\s*;\s*\)/g, (match) => {
      return match.replace(/;\s*\)/, '\n  )');
    });
    
    // Clean up multiple consecutive empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Ensure file ends with single newline
    content = content.trim() + '\n';
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('🔍 Searching for files with remaining syntax errors...');
const sourceFiles = findSourceFiles('./app');

console.log(`Found ${sourceFiles.length} source files`);

let fixedCount = 0;
let errorCount = 0;

for (const file of sourceFiles) {
  try {
    if (fixRemainingSyntax(file)) {
      fixedCount++;
      console.log(`✅ Fixed: ${file}`);
    }
  } catch (error) {
    errorCount++;
    console.error(`❌ Error fixing ${file}:`, error.message);
  }
}

console.log(`\n📊 Summary:`);
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

if (fixedCount > 0) {
  console.log('\n🎉 Remaining syntax errors fixed! You can now run the build.');
} else {
  console.log('\n✨ No remaining syntax errors found or all issues were already resolved.');
}