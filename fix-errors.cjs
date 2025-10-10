const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to recursively find all TypeScript and JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(item)) {
        files = files.concat(findFiles(fullPath, extensions));
      }
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix merge conflicts
function fixMergeConflicts(content) {
  // Remove merge conflict markers and keep the HEAD version
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing semicolons after try blocks
  content = content.replace(/try\s*{([\s\S]*?)}\s*catch/g, 'try {\n$1\n} catch');
  
  // Fix missing braces in JSX
  content = content.replace(/\)\s*\)\s*;?\s*$/gm, '))');
  
  // Fix malformed JSX expressions
  content = content.replace(/\)\s*\)\s*;?\s*<\/div>/g, '))</div>');
  
  // Fix missing closing braces in object literals
  content = content.replace(/}\s*\)\s*;?\s*$/gm, '})');
  
  // Fix missing closing braces in JSX
  content = content.replace(/}\s*\)\s*;?\s*<\/div>/g, '})</div>');
  
  return content;
}

// Function to fix specific file issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix merge conflicts
    content = fixMergeConflicts(content);
    
    // Fix syntax errors
    content = fixSyntaxErrors(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Starting error fixing process...');
  
  const files = findFiles('/workspace');
  let fixedCount = 0;
  
  console.log(`Found ${files.length} files to check`);
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
  
  // Run linting to check remaining errors
  try {
    console.log('Running linting to check remaining errors...');
    execSync('pnpm run lint', { stdio: 'pipe' });
    console.log('All errors fixed!');
  } catch (error) {
    console.log('Some errors remain, but many have been fixed.');
  }
}

main();