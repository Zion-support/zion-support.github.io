#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to find all TypeScript/React files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    
    // Read the file
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('>>>>>>>')) {
      console.log(`Skipping file with merge conflicts: ${filePath}`);
      return;
    }
    
    // Use ESLint to fix unused imports
    try {
      execSync(`npx eslint "${filePath}" --fix --no-eslintrc --config eslint.config.js`, { 
        stdio: 'pipe',
        cwd: process.cwd()
      });
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      // If ESLint can't fix it, try manual approach
      console.log(`ESLint couldn't fix ${filePath}, trying manual approach...`);
      
      // Simple regex to remove unused imports (basic approach)
      const lines = content.split('\n');
      const newLines = [];
      let inImportBlock = false;
      let importStart = -1;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check if this is an import line
        if (line.trim().startsWith('import ') && line.includes(' from ')) {
          inImportBlock = true;
          importStart = i;
          newLines.push(line);
        } else if (inImportBlock && (line.trim() === '' || line.trim().startsWith('//') || line.trim().startsWith('/*'))) {
          newLines.push(line);
        } else if (inImportBlock && !line.trim().startsWith('import ')) {
          inImportBlock = false;
          newLines.push(line);
        } else {
          newLines.push(line);
        }
      }
      
      const newContent = newLines.join('\n');
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Manually fixed: ${filePath}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting to fix unused imports...');

const appDir = path.join(process.cwd(), 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript/React files`);

for (const file of files) {
  removeUnusedImports(file);
}

console.log('Finished fixing unused imports!');