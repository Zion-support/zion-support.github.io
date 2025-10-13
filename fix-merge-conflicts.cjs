#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common merge conflict issues
function fixMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  // Fix common syntax issues
  content = content.replace(/\}\s*\)\s*}/g, '})}'); // Fix })}
  content = content.replace(/\}\s*\)\s*\)/g, '}))'); // Fix }))
  content = content.replace(/\}\s*\)\s*\)\s*\)/g, '})))'); // Fix })))
  content = content.replace(/\}\s*\)\s*\)\s*\)\s*\)/g, '}))))'); // Fix }))))
  
  // Fix missing semicolons after imports
  content = content.replace(/import[^;]+from[^;]+(?=\n)/g, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix missing semicolons after variable declarations
  content = content.replace(/(const|let|var)\s+[^=]+=[^;]+(?=\n)/g, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix JSX closing tags
  content = content.replace(/>\s*}/g, '>}');
  content = content.replace(/>\s*\)/g, '>)');
  
  // Fix function declarations
  content = content.replace(/function\s+[^{]+{\s*}/g, (match) => {
    return match.replace(/\s*}/, ' {}');
  });
  
  // Fix arrow functions
  content = content.replace(/=>\s*{\s*}/g, ' => {}');
  
  // Remove extra whitespace
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixMergeConflicts(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const filesWithConflicts = findFilesWithConflicts('.');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('Merge conflict resolution complete!');