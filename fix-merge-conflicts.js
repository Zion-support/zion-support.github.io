#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
=======

// List of files with merge conflicts
const filesWithConflicts = [
  '/workspace/vite.config.ts',
  '/workspace/tailwind.config.js',
  '/workspace/main.tsx',
  '/workspace/jest.config.js',
  '/workspace/app/contact/page.tsx',
  '/workspace/app/components/Footer.tsx',
  '/workspace/app/components/LoadingStates.tsx',
  '/workspace/app/components/OptimizedImage.tsx',
  '/workspace/app/components/Navigation.tsx',
  '/workspace/app/privacy/page.tsx',
  '/workspace/app/demo/page.tsx',
  '/workspace/app/page.tsx',
  '/workspace/app/pricing/page.tsx',
  '/workspace/app/tutorials/page.tsx',
  '/workspace/app/terms/page.tsx',
  '/workspace/app/support/page.tsx',
  '/workspace/app/contexts/AnalyticsContext.tsx',
  '/workspace/app/about/page.tsx',
  '/workspace/app/services/page.tsx',
  '/workspace/app/blog/page.tsx'
];

>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
<<<<<<< HEAD
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let headContent = [];
    let separatorFound = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        headContent = [];
        separatorFound = false;
        continue;
      }
      
      if (line.startsWith('=======')) {
        separatorFound = true;
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        // Use HEAD content (before =======)
        result.push(...headContent);
        continue;
      }
      
      if (inConflict) {
        if (!separatorFound) {
          headContent.push(line);
        }
        // Skip lines after ======= until >>>>>>>
      } else {
        result.push(line);
      }
    }
    
    // Write the fixed content
    fs.writeFileSync(filePath, result.join('\n'), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
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
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
const files = findFilesWithConflicts(workspaceDir);

console.log(`Found ${files.length} files to check for merge conflicts...`);

let fixedCount = 0;
for (const file of files) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files.`);
=======
    if (!content.includes('<<<<<<< HEAD')) {
      console.log(`No merge conflicts in ${filePath}`);
      return;
    }
    
    console.log(`Fixing merge conflicts in ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n?/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesWithConflicts.forEach(fixMergeConflicts);

console.log('Merge conflict fixing completed!');
>>>>>>> cursor/fix-errors-and-merge-to-main-1cdc
