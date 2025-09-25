#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// More comprehensive conflict resolution;
function resolveAdvancedConflicts(content) {
  // Remove merge conflict markers more aggressively,
content = content.replace(/,
content = content.replace(/
  
  // Fix syntax issues more comprehensively,
content = content.replace(/^"use client",/gm, '"use client";');,
content = content.replace(/^"use client";\s*\n\s*import/gm, '"use client";\n\nimport');
  
  // Fix import statements,
content = content.replace(/;
import /g, ';\nimport ');,
content = content.replace(/;

export /g, ';\n\nexport ');,
content = content.replace(/;
const /g, ';\nconst ');,
content = content.replace(/;
let /g, ';\nlet ');,
content = content.replace(/;
var /g, ';\nvar ');,
content = content.replace(/;
function /g, ';\nfunction ');,
content = content.replace(/;
if /g, ';\nif ');,
content = content.replace(/;
return /g, ';\nreturn ');,
content = content.replace(/;
useEffect/g, ';\nuseEffect');,
content = content.replace(/;
useState/g, ';\nuseState');,
content = content.replace(/;
useCallback/g, ';\nuseCallback');,
content = content.replace(/;
useMemo/g, ';\nuseMemo');
  
  // Fix object and array syntax,
content = content.replace(/(\w+)\s*\n\s*{/g, '$1,\n{');,
content = content.replace(/(\w+)\s*\n\s*}/g, '$1\n}');,
content = content.replace(/(\w+)\s*\n\s*\[/g, '$1,\n[');,
content = content.replace(/(\w+)\s*\n\s*\]/g, '$1\n]');
  
  // Fix missing semicolons and commas,
content = content.replace(/([^;}])\s*\n\s*(const|let|var|function|if|return)/g, '$1;\n$2');,
content = content.replace(/([^,}])\s*\n\s*(\w+:\s*)/g, '$1,\n$2');,
content = content.replace(/([^,}])\s*\n\s*(\w+\s*=)/g, '$1,\n$2');
  
  // Fix JSX syntax,
content = content.replace(/,<(\w+)/g, ';\n<$1');,
content = content.replace(/<\/\w+>\s*,/g, '');
  
  // Fix React hooks,
content = content.replace(/,use([A-Z]\w*)/g, ';\nuse$1');
  
  // Fix destructuring,
content = content.replace(/,(\s*{[^}]*})/g, ',\n$1');,
content = content.replace(/,(\s*\[[^\]]*\])/g, ',\n$1');
  
  // Clean up multiple empty lines,
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
;
return content;
}

// Function to process a file;
function processFile(filePath) {
  try {;
const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts;
if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
      console.log(`Processing: ${filePath}`);
;
const resolvedContent = resolveAdvancedConflicts(content);
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      
      console.log(`✓ Resolved conflicts in: ${filePath}`);
      return true;
    }
;
return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with remaining conflicts;
function findFilesWithConflicts(dir, extensions = ['.ts', '.tsx', '.js', '.jsx', '.json']) {;
const files = [];
;
function walkDir(currentDir) {
    try {;
const items = fs.readdirSync(currentDir);
      
      for (const item of items) {;
const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
;
if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          try {;
const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files we can't read
}
        }
      }
    } catch (error) {
      // Skip directories we can't read
}
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('🔍 Scanning for remaining merge conflicts...');
;
const filesWithConflicts = findFilesWithConflicts('/workspace');
let processedCount = 0;
let resolvedCount = 0;

console.log(`Found ${filesWithConflicts.length} files with remaining conflicts`);

for (const file of filesWithConflicts) {;
if (processFile(file)) {
    resolvedCount++;
  }
  processedCount++;
}

console.log(`\n✅ Advanced conflict resolution complete!`);
console.log(`📊 Processed: ${processedCount} files`);
console.log(`🔧 Resolved: ${resolvedCount} files`);