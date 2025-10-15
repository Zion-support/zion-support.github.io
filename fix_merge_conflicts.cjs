#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep the HEAD version
    const lines = content.split('\n');
    const newLines = [];
    let inConflict = false;
    let keepLines = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepLines = true;
        continue;
      } else if (line.includes('=======')) {
        keepLines = false;
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepLines = false;
        continue;
      }

      if (!inConflict || keepLines) {
        newLines.push(line);
      }
    }

    const newContent = newLines.join('\n');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed merge conflicts in: ${filePath}`);
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common issues
    const fixes = [
      // Fix semicolons in JSX
      { pattern: /<(\w+);/g, replacement: '<$1' },
      { pattern: /<\/(\w+);/g, replacement: '</$1' },
      { pattern: /className="([^"]*)";/g, replacement: 'className="$1"' },
      { pattern: /<title>([^<]*)<\/title>;/g, replacement: '<title>$1</title>' },
      { pattern: /<meta[^>]*\/>;/g, replacement: (match) => match.replace(';', '') },
      
      // Fix function declarations
      { pattern: /export default async \(/g, replacement: 'export default async function handler(' },
      { pattern: /export default function handler\(/g, replacement: 'export default async function handler(' },
      
      // Fix JSX fragments
      { pattern: /<>;/g, replacement: '<>' },
      { pattern: /<\/>;/g, replacement: '</>' },
      
      // Fix trailing commas in function parameters
      { pattern: /,\s*\)/g, replacement: ')' },
      
      // Fix missing semicolons after imports
      { pattern: /import\s+[^;]+$/gm, replacement: (match) => match + ';' },
    ];

    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const filesWithConflicts = findFilesWithConflicts('.');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('Merge conflict resolution complete!');