const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't contain lucide-react imports
    if (!content.includes('from "lucide-react"') && !content.includes("from 'lucide-react'")) {
      return;
    }
    
    // Extract all lucide-react imports
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*["']lucide-react["'];?/g;
    const matches = [...content.matchAll(lucideImportRegex)];
    
    if (matches.length === 0) return;
    
    let newContent = content;
    
    for (const match of matches) {
      const fullImport = match[0];
      const imports = match[1].split(',').map(imp => imp.trim());
      
      // Check which imports are actually used in the file
      const usedImports = imports.filter(imp => {
        const importName = imp.split(' as ')[0].trim();
        const regex = new RegExp(`\\b${importName}\\b`, 'g');
        const usageCount = (content.match(regex) || []).length;
        return usageCount > 1; // More than 1 because the import itself counts as 1
      });
      
      if (usedImports.length === 0) {
        // Remove the entire import line
        newContent = newContent.replace(fullImport + '\n', '');
        newContent = newContent.replace(fullImport, '');
      } else if (usedImports.length !== imports.length) {
        // Replace with only used imports
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        newContent = newContent.replace(fullImport, newImport);
      }
    }
    
    // Also remove other common unused imports
    const otherUnusedImports = [
      'import { Helmet } from "react-helmet-async";',
      "import { Helmet } from 'react-helmet-async';",
      'import { Link } from "react-router-dom";',
      "import { Link } from 'react-router-dom';",
      'import { ArrowRight } from "lucide-react";',
      "import { ArrowRight } from 'lucide-react';"
    ];
    
    for (const unusedImport of otherUnusedImports) {
      if (newContent.includes(unusedImport)) {
        // Check if it's actually used
        const importName = unusedImport.includes('Helmet') ? 'Helmet' : 
                          unusedImport.includes('Link') ? 'Link' : 
                          unusedImport.includes('ArrowRight') ? 'ArrowRight' : '';
        
        if (importName) {
          const regex = new RegExp(`\\b${importName}\\b`, 'g');
          const usageCount = (newContent.match(regex) || []).length;
          if (usageCount <= 1) {
            newContent = newContent.replace(unusedImport + '\n', '');
            newContent = newContent.replace(unusedImport, '');
          }
        }
      }
    }
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
console.log('Removing unused imports...');

const files = findFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  const originalContent = fs.readFileSync(file, 'utf8');
  removeUnusedImports(file);
  const newContent = fs.readFileSync(file, 'utf8');
  if (originalContent !== newContent) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);