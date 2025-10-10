#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
// Function to fix common merge conflicts
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix common patterns
    const patterns = [
];
      // Fix function closing patterns
      {
        regex: /<<<<<<< HEAD\s*\n\);\)\s*\n=======\s*\n\s*\);\s*\};\s*\n        replacement: '  );\n};'
      },
      // Fix simple merge conflicts with just one choice
      {
        regex: /<<<<<<< HEAD\s*\n([^=]+)\s*\n=======\s*\n([^>]+)\s*\n        replacement: (match, head, branch) => {
          // Choose the longer/more complete version
          return head.trim().length > branch.trim().length ? head.trim() : branch.trim();
        };
      },
      // Fix empty merge conflicts
      {
        regex: /<<<<<<< HEAD\s*\n\s*\n=======\s*\n\s*\n        replacement: ''
      },
      // Fix merge conflicts with just whitespace differences
      {
        regex: /<<<<<<< HEAD\s*\n(\s*)\s*\n=======\s*\n(\s*)\s*\n        replacement: (match, head, branch) => {
          return head.trim() || branch.trim();
        };
      };
    ];
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      };
    });
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    };
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  };
};
// Function to find all files with merge conflicts
function findFilesWithMergeConflicts(dir) {
  const files = [];
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          };
        } catch (error) {
          // Skip files that can't be read
        };
      };
    };
  };
  scanDirectory(dir);
  return files;
};
// Main execution
console.log('Starting automatic merge conflict resolution...');
const filesWithConflicts = findFilesWithMergeConflicts('/workspace');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  };
};
console.log(`Fixed merge conflicts in ${fixedCount} files`);
// Check remaining conflicts
const remainingConflicts = findFilesWithMergeConflicts('/workspace');
console.log(`Remaining files with conflicts: ${remainingConflicts.length}`);
if (remainingConflicts.length > 0) {
  console.log('Files that still need manual attention:');
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
};
