#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Split by conflict markers and keep the latest version (after =======)
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictCount++;
        continue;
      }
      
      if (line.startsWith('=======')) {
        continue; // Skip the separator
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        continue;
      }
      
      if (!inConflict) {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    
    // Write the resolved content back to the file
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    console.log(`Resolved ${conflictCount} merge conflicts in ${filePath}`);
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
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for common file extensions
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx', '.json', '.md'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const workspaceDir = process.cwd();
const conflictedFiles = findFilesWithConflicts(workspaceDir);

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved merge conflicts in ${resolvedCount} files`);

// Also fix common JSX issues
console.log('Fixing common JSX issues...');

// Fix unclosed JSX tags in specific files
const jsxFixFiles = [
  '/workspace/EnhancedFooter.tsx',
  '/workspace/app/blog/page.tsx',
  '/workspace/app/custom-development/page.tsx',
  '/workspace/app/data-analytics/page.tsx'
];

for (const file of jsxFixFiles) {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      
      // Fix common JSX issues
      content = content.replace(/<footer[^>]*>(?![\s\S]*<\/footer>)/g, (match) => {
        return match + '\n  </footer>';
      });
      
      content = content.replace(/<h1[^>]*>(?![\s\S]*<\/h1>)/g, (match) => {
        return match + '\n  </h1>';
      });
      
      content = content.replace(/<main[^>]*>(?![\s\S]*<\/main>)/g, (match) => {
        return match + '\n  </main>';
      });
      
      content = content.replace(/<div[^>]*>(?![\s\S]*<\/div>)/g, (match) => {
        return match + '\n  </div>';
      });
      
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed JSX issues in ${file}`);
    }
  } catch (error) {
    console.error(`Error fixing JSX in ${file}:`, error.message);
  }
}

console.log('Merge conflict resolution completed!');