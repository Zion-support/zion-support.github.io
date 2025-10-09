#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate imports
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import '));
    const uniqueImports = [...new Set(importLines)];
    
    if (importLines.length !== uniqueImports.length) {
      // Remove all import lines and add unique ones
      const lines = content.split('\n');
      const nonImportLines = lines.filter(line => !line.trim().startsWith('import '));
      
      // Find where imports should be placed (after the first non-empty line or at the beginning)
      let insertIndex = 0;
      for (let i = 0; i < nonImportLines.length; i++) {
        if (nonImportLines[i].trim() !== '') {
          insertIndex = i;
          break;
        }
      }
      
      // Insert unique imports at the beginning
      const fixedLines = [
        ...uniqueImports,
        '',
        ...nonImportLines.slice(insertIndex)
      ];
      
      content = fixedLines.join('\n');
      modified = true;
    }
    
    // Fix duplicate function/component definitions
    const lines = content.split('\n');
    const fixedLines = [];
    const seenComponents = new Set();
    let inComponent = false;
    let componentName = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is a component definition
      if (line.includes('const ') && line.includes(': React.FC') && line.includes('= () =>')) {
        const match = line.match(/const\s+(\w+):\s+React\.FC/);
        if (match) {
          const name = match[1];
          if (seenComponents.has(name)) {
            // Skip this duplicate component
            inComponent = true;
            componentName = name;
            continue;
          } else {
            seenComponents.add(name);
            inComponent = true;
            componentName = name;
          }
        }
      }
      
      // If we're in a duplicate component, skip until we find the export
      if (inComponent && componentName) {
        if (line.includes(`export default ${componentName}`)) {
          inComponent = false;
          componentName = '';
          // Include the export line
          fixedLines.push(line);
        }
        // Skip all other lines in the duplicate component
        continue;
      }
      
      // Check if we're ending a component (closing brace followed by export)
      if (inComponent && line.trim() === '};' && i + 1 < lines.length && lines[i + 1].includes('export default')) {
        inComponent = false;
        componentName = '';
      }
      
      // Add the line if we're not in a duplicate component
      if (!inComponent) {
        fixedLines.push(line);
      }
    }
    
    if (fixedLines.length !== lines.length) {
      content = fixedLines.join('\n');
      modified = true;
    }
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }
    
    // Fix JSX syntax issues
    content = content.replace(/<(\w+)\s*\/>/g, '<$1 />'); // Self-closing tags
    content = content.replace(/(\w+)\s*=\s*{([^}]+)}\s*\/>/g, '$1={$2} />'); // Fix attribute syntax
    
    // Remove empty lines at the end
    content = content.replace(/\n\s*\n\s*$/, '\n');
    
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

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if it's a source file
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
function main() {
  console.log('🔍 Searching for source files...');
  
  const sourceFiles = findSourceFiles(process.cwd());
  
  console.log(`📁 Found ${sourceFiles.length} source files`);
  
  console.log('\n🔧 Fixing syntax errors...');
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of sourceFiles) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
      console.log(`✅ Fixed: ${file}`);
    } else {
      // Check if file has syntax errors
      try {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('const ') && content.includes('React.FC')) {
          // This might be a page file that needs fixing
          console.log(`🔍 Checking: ${file}`);
        }
      } catch (error) {
        errorCount++;
        console.log(`❌ Error: ${file}`);
      }
    }
  }
  
  console.log(`\n✅ Fixed syntax in ${fixedCount} files`);
  if (errorCount > 0) {
    console.log(`❌ ${errorCount} files had errors`);
  }
}

// Run the script
main();