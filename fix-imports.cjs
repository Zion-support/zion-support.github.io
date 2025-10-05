#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Fix lucide-react imports
function fixLucideImports(content) {
  // Pattern to match lucide-react imports
  const lucideImportPattern = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
  
  return content.replace(lucideImportPattern, (match, imports) => {
    const iconNames = imports.split(',').map(name => name.trim());
    const importStatements = iconNames.map(name => 
      `import ${name} from 'lucide-react';`
    ).join('\n');
    return importStatements;
  });
}

// Remove unused React imports
function removeUnusedReactImports(content) {
  // Remove React import if it's not used in JSX
  if (content.includes('import React') && !content.includes('<') && !content.includes('React.')) {
    content = content.replace(/import React[^;]*;?\n?/g, '');
  }
  return content;
}

// Add missing Link imports
function addMissingLinkImports(content) {
  if (content.includes('<Link') && !content.includes('import') && !content.includes('from "next/link"')) {
    // Add Link import at the top
    const lines = content.split('\n');
    let insertIndex = 0;
    
    // Find the first import statement
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ')) {
        insertIndex = i;
        break;
      }
    }
    
    lines.splice(insertIndex, 0, 'import Link from "next/link";');
    return lines.join('\n');
  }
  return content;
}

// Fix className props on components that don't accept them
function fixClassNameProps(content) {
  // This is a more complex fix that would need component-specific knowledge
  // For now, we'll just remove className from components that don't support it
  return content.replace(/className=\{[^}]+\}/g, '');
}

// Process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const originalContent = content;
    
    // Apply fixes
    content = fixLucideImports(content);
    content = removeUnusedReactImports(content);
    content = addMissingLinkImports(content);
    content = fixClassNameProps(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  const patterns = [
    'app/blog/**/*.tsx',
    'app/case-studies/**/*.tsx',
    'app/**/*.tsx'
  ];
  
  let totalFiles = 0;
  let modifiedFiles = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    
    files.forEach(file => {
      totalFiles++;
      if (processFile(file)) {
        modifiedFiles++;
      }
    });
  });
  
  console.log(`\nProcessed ${totalFiles} files, modified ${modifiedFiles} files`);
}

if (require.main === module) {
  main();
}

module.exports = { processFile, fixLucideImports, removeUnusedReactImports, addMissingLinkImports };