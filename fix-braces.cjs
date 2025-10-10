const fs = require('fs');
const path = require('path');

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

// Function to fix missing braces and syntax issues
function fixBraces(content) {
  // Fix missing closing braces in JSX
  content = content.replace(/\)\s*\)\s*;?\s*$/gm, '))');
  content = content.replace(/\)\s*\)\s*;?\s*<\/div>/g, '))</div>');
  content = content.replace(/\)\s*\)\s*;?\s*<\/section>/g, '))</section>');
  content = content.replace(/\)\s*\)\s*;?\s*<\/main>/g, '))</main>');
  content = content.replace(/\)\s*\)\s*;?\s*<\/article>/g, '))</article>');
  
  // Fix missing braces in object literals
  content = content.replace(/}\s*\)\s*;?\s*$/gm, '})');
  content = content.replace(/}\s*\)\s*;?\s*<\/div>/g, '})</div>');
  
  // Fix missing braces in function calls
  content = content.replace(/\)\s*\)\s*;?\s*$/gm, '))');
  
  // Fix malformed JSX expressions
  content = content.replace(/\)\s*\)\s*;?\s*<\/div>/g, '))</div>');
  
  // Fix missing semicolons after try blocks
  content = content.replace(/try\s*{([\s\S]*?)}\s*catch/g, 'try {\n$1\n} catch');
  
  // Fix duplicate return statements
  content = content.replace(/return\s*\(\s*\n\s*return\s*\(/g, 'return (');
  
  // Fix malformed function declarations
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*return\s*\(\s*\n\s*return\s*\(/g, 'const $1: React.FC = () => {\n  return (');
  
  // Fix missing closing braces in JSX components
  content = content.replace(/\)\s*\)\s*;?\s*export\s+default/g, '))};\n\nexport default');
  
  // Fix missing closing braces in functions
  content = content.replace(/\)\s*\)\s*;?\s*}\s*$/gm, '))}');
  
  return content;
}

// Function to fix specific file issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix braces and syntax
    content = fixBraces(content);
    
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
  console.log('Starting brace fixing process...');
  
  const files = findFiles('/workspace');
  let fixedCount = 0;
  
  console.log(`Found ${files.length} files to check`);
  
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

main();