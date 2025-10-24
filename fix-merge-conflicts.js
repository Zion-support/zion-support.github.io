#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head' or 'incoming'
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.includes('=======')) {
        conflictType = 'incoming';
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        // For now, prefer the incoming changes (after =======)
        if (conflictType === 'incoming') {
          resolvedLines.push(line);
        }
        // Skip HEAD changes (before =======)
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write the resolved content
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const appDir = path.join(process.cwd(), 'app');
const filesWithConflicts = findFilesWithConflicts(appDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);

// Also check for missing imports and fix them
console.log('Checking for missing imports...');

// Fix common missing import issues
const commonFixes = [
  {
    pattern: /import.*SEOOptimizer.*from.*['"]\.\.\/components\/SEOOptimizer['"]/g,
    replacement: 'import SEOOptimizer from \'../components/EnhancedSEOOptimizer\''
  },
  {
    pattern: /import.*SEOHead.*from.*['"]\.\.\/components\/SEOHead['"]/g,
    replacement: 'import SEOHead from \'../components/EnhancedSEOHead\''
  }
];

// Apply fixes to all TypeScript/JavaScript files
function applyFixes(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      applyFixes(fullPath);
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
      try {
        let content = fs.readFileSync(fullPath, 'utf8');
        let modified = false;
        
        for (const fix of commonFixes) {
          if (fix.pattern.test(content)) {
            content = content.replace(fix.pattern, fix.replacement);
            modified = true;
          }
        }
        
        if (modified) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`Applied fixes to: ${fullPath}`);
        }
      } catch (error) {
        console.error(`Error applying fixes to ${fullPath}:`, error.message);
      }
    }
  }
}

applyFixes(appDir);

console.log('Merge conflict resolution completed!');