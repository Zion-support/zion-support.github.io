const fs = require('fs');
const path = require('path');

// Function to fix common parsing errors
function fixParsingErrors(content) {
  let fixed = content;
  
  // Fix common syntax issues
  fixed = fixed
    // Fix missing commas in object literals
    .replace(/(\w+):\s*([^,}\n]+)\n(\s*)([a-zA-Z_])/g, '$1: $2,\n$3$4')
    // Fix missing commas in arrays
    .replace(/([^,\n\]])\n(\s*)([a-zA-Z_])/g, '$1,\n$2$3')
    // Fix JSX closing tag issues
    .replace(/<(\w+)([^>]*)>\s*<\/\1>/g, '<$1$2></$1>')
    // Fix missing semicolons
    .replace(/([^;}])\n(\s*)(export|import|const|let|var|function)/g, '$1;\n$2$3')
    // Fix enum syntax
    .replace(/enum\s+(\w+)\s*{\s*([^}]+)\s*}/g, (match, name, body) => {
      const items = body.split(',').map(item => item.trim()).filter(item => item);
      return `enum ${name} {\n  ${items.join(',\n  ')}\n}`;
    })
    // Fix any type annotations
    .replace(/:\s*any\b/g, ': unknown')
    // Remove unused imports
    .replace(/import\s*{\s*([^}]+)\s*}\s*from\s*['"][^'"]+['"];\s*\n/g, (match, imports) => {
      const importList = imports.split(',').map(imp => imp.trim());
      const usedImports = [];
      
      // This is a simplified check - in practice, you'd need to analyze the file content
      return match; // Keep all imports for now
    })
    // Fix missing closing braces
    .replace(/(\w+)\s*{\s*([^}]*)\s*$/gm, (match, keyword, body) => {
      if (body.trim() && !body.includes('}')) {
        return `${keyword} {\n  ${body.trim()}\n}`;
      }
      return match;
    });
  
  return fixed;
}

// Function to remove unused imports
function removeUnusedImports(content) {
  const lines = content.split('\n');
  const importLines = [];
  const otherLines = [];
  let inImportBlock = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.trim().startsWith('import ')) {
      inImportBlock = true;
      importLines.push(line);
    } else if (inImportBlock && line.trim() === '') {
      importLines.push(line);
    } else {
      inImportBlock = false;
      otherLines.push(line);
    }
  }
  
  // For now, keep all imports - this is a simplified version
  return [...importLines, ...otherLines].join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    let fixed = fixParsingErrors(content);
    fixed = removeUnusedImports(fixed);
    
    // Only write if content changed
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed);
      console.log(`✓ Fixed issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

console.log('Starting comprehensive fix...');
const files = getAllFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  if (processFile(file)) {
    fixedCount++;
  }
});

console.log(`\nCompleted! Fixed issues in ${fixedCount} files.`);
