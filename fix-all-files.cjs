#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Find all files with React components in wrong locations
function findMisplacedComponents(dir) {
  const files = [];
  
  function searchDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes("'use client'") && content.includes('React.FC')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  searchDir(dir);
  return files;
}

// Move React components to page directories
function moveComponentToPage(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract component name from the file
  const componentMatch = content.match(/const\s+(\w+):\s*React\.FC/);
  if (!componentMatch) return;
  
  const componentName = componentMatch[1];
  const pageName = componentName.toLowerCase().replace(/page$/, '');
  
  // Create page directory
  const pageDir = path.join('/workspace/app', pageName);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }
  
  // Move file to page directory
  const newPath = path.join(pageDir, 'page.tsx');
  fs.renameSync(filePath, newPath);
  
  console.log(`Moved ${filePath} to ${newPath}`);
}

// Main execution
const workspaceDir = '/workspace/app';
const misplacedFiles = findMisplacedComponents(workspaceDir);

console.log(`Found ${misplacedFiles.length} misplaced React components`);

for (const file of misplacedFiles) {
  try {
    moveComponentToPage(file);
  } catch (error) {
    console.error(`Error moving ${file}:`, error.message);
  }
}

console.log('Component reorganization completed!');