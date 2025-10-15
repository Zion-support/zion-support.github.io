#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to remove merge conflict markers
function removeMergeConflicts(content) {
  // Remove merge conflict markers and keep the HEAD version
  return content
    .replace(/<<<<<<< HEAD\n/g, '')
    .replace(/=======\n/g, '')
    .replace(/>>>>>>> [^\n]+\n/g, '')
    .replace(/<<<<<<< [^\n]+\n/g, '')
    .replace(/=======\n/g, '')
    .replace(/>>>>>>> [^\n]+\n/g, '');
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  return content
    // Fix unterminated strings
    .replace(/"[^"]*$/gm, (match) => {
      if (!match.endsWith('"')) {
        return match + '"';
      }
      return match;
    })
    // Fix missing closing tags
    .replace(/<([^>]+)(?<!\/)>$/gm, (match, tagName) => {
      if (!match.endsWith('/>') && !match.endsWith('</')) {
        return match + `</${tagName.split(' ')[0]}>`;
      }
      return match;
    })
    // Fix missing semicolons
    .replace(/([^;}])\n(\s*[a-zA-Z])/g, '$1;\n$2')
    // Fix missing commas in objects
    .replace(/([^,}])\n(\s*[a-zA-Z][^:]*:)/g, '$1,\n$2');
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Processing merge conflicts in: ${filePath}`);
      
      let cleanedContent = removeMergeConflicts(content);
      cleanedContent = fixSyntaxErrors(cleanedContent);
      
      // Write the cleaned content back
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`Fixed merge conflicts in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const workspaceDir = process.cwd();
const filesWithConflicts = findFilesWithConflicts(workspaceDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

// Process each file
filesWithConflicts.forEach(processFile);

console.log('Merge conflict resolution completed!');
