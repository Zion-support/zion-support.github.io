#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has React component but missing export
    if (content.includes('const ') && content.includes(': React.FC') && !content.includes('export default')) {
      // Extract component name
      const componentMatch = content.match(/const\s+(\w+):\s*React\.FC/);
      if (componentMatch) {
        const componentName = componentMatch[1];
        content += `\n\nexport default ${componentName};`;
        modified = true;
        console.log(`Added missing export for ${componentName} in ${filePath}`);
      }
    }
    
    // Fix missing closing braces by checking for unbalanced braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
      console.log(`Added ${missingBraces} missing closing braces in ${filePath}`);
    }
    
    // Fix JSX syntax issues - look for unclosed tags
    const jsxTags = content.match(/<[^>]*$/gm);
    if (jsxTags) {
      // This is a simple check - more complex JSX parsing would be needed for complete fix
      console.log(`Potential unclosed JSX tags in ${filePath}`);
    }
    
    // Remove unused imports (basic cleanup)
    const lines = content.split('\n');
    const cleanedLines = lines.filter(line => {
      // Keep import lines that are actually used
      if (line.trim().startsWith('import ')) {
        const importMatch = line.match(/import\s+.*?\s+from\s+['"]([^'"]+)['"]/);
        if (importMatch) {
          const importPath = importMatch[1];
          // Check if the import is used in the file
          const isUsed = content.includes(importPath) && !line.includes(importPath);
          return isUsed || line.includes('React') || line.includes('lucide-react') || line.includes('react-helmet-async');
        }
      }
      return true;
    });
    
    if (cleanedLines.length !== lines.length) {
      content = cleanedLines.join('\n');
      modified = true;
      console.log(`Cleaned up unused imports in ${filePath}`);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findSourceFiles(dir) {
  const sourceFiles = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(item)) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        sourceFiles.push(fullPath);
      }
    }
  }
  
  searchDirectory(dir);
  return sourceFiles;
}

// Main execution
console.log('🔍 Searching for source files to fix...');
const sourceFiles = findSourceFiles(process.cwd());

console.log(`📋 Found ${sourceFiles.length} source files to check`);

console.log('\n🔧 Fixing syntax errors...');
let fixedCount = 0;

for (const file of sourceFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`\n✅ Fixed syntax errors in ${fixedCount} out of ${sourceFiles.length} files.`);

if (fixedCount > 0) {
  console.log('🎉 Syntax errors have been fixed!');
} else {
  console.log('ℹ️  No syntax errors found to fix.');
}