const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Fix common syntax issues
    content = content.replace(/,(\s*[}\]])/g, '$1'); // Remove trailing commas before closing braces
    content = content.replace(/(\w+)\s*,\s*(\w+)/g, '$1, $2'); // Fix missing spaces after commas
    content = content.replace(/(\w+)\s*=\s*>/g, '$1 = () =>'); // Fix arrow function syntax
    content = content.replace(/import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?/g, 'import $1 from "$2";'); // Fix import syntax
    content = content.replace(/export\s+default\s+(\w+);?/g, 'export default $1;'); // Fix export syntax
    
    // Fix JSX syntax issues
    content = content.replace(/<(\w+)\s*\/>/g, '<$1 />'); // Fix self-closing tags
    content = content.replace(/(\w+)\s*=\s*{([^}]+)}/g, '$1={$2}'); // Fix JSX props
    content = content.replace(/className\s*=\s*["']([^"']+)["']/g, 'className="$1"'); // Fix className quotes
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, '$1;');
    content = content.replace(/;\s*;/g, ';'); // Remove double semicolons
    
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1>');
    content = content.replace(/<\/div>\s*$/gm, '</div>');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all TypeScript/React files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
console.log('Starting to fix merge conflicts and syntax errors...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files`);

// Also fix components directory
const componentsFixedCount = fixAllFiles('./components');
console.log(`Fixed ${componentsFixedCount} files in components`);

console.log('Merge conflict fixing completed!');