#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to recursively find all files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Function to fix incomplete components
function fixIncompleteComponents(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;
    
    // Check if file is incomplete (missing closing brace or export)
    const hasReactImport = content.includes('import React from \'react\'');
    const hasComponentDeclaration = content.includes(': React.FC = () => {');
    const hasClosingBrace = content.includes('};');
    const hasExportDefault = content.includes('export default');
    
    if (hasReactImport && hasComponentDeclaration && (!hasClosingBrace || !hasExportDefault)) {
      console.log(`Fixing incomplete component: ${filePath}`);
      
      // Extract component name from file path
      const fileName = path.basename(filePath, path.extname(filePath));
      const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase()) + 'Page';
      
      // If missing closing brace, add it
      if (!hasClosingBrace) {
        // Find the last closing parenthesis and add the missing brace
        const lastParenIndex = content.lastIndexOf(')');
        if (lastParenIndex !== -1) {
          content = content.substring(0, lastParenIndex + 1) + '\n  };\n' + content.substring(lastParenIndex + 1);
          fixed = true;
        }
      }
      
      // If missing export default, add it
      if (!hasExportDefault) {
        content += '\n\nexport default ' + componentName + ';';
        fixed = true;
      }
      
      // Fix component name if it's generic
      if (content.includes('const ComponentName:')) {
        content = content.replace(/const ComponentName:/g, `const ${componentName}:`);
        fixed = true;
      }
    }
    
    // Fix files that have return statement without proper component structure
    if (content.includes('import React from \'react\';\n  return (')) {
      const fileName = path.basename(filePath, path.extname(filePath));
      const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase()) + 'Page';
      
      content = content.replace(
        /import React from 'react';\n  return \(/,
        `import React from 'react';\n\nconst ${componentName}: React.FC = () => {\n  return (`
      );
      
      if (!content.includes('export default')) {
        content += '\n\nexport default ' + componentName + ';';
      }
      
      fixed = true;
    }
    
    if (fixed && content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed incomplete component: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔍 Searching for incomplete components...');

const srcDir = path.join(__dirname, 'src');
const files = findFiles(srcDir);

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;

files.forEach(file => {
  try {
    if (fixIncompleteComponents(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\n📊 Summary:`);
console.log(`Files fixed: ${fixedCount}`);

if (fixedCount > 0) {
  console.log('\n✅ Incomplete components have been fixed!');
} else {
  console.log('\n✅ No incomplete components found.');
}