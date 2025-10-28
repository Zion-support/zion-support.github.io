#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix import paths based on directory depth
function fixImportPath(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Calculate the relative path to components directory
    const fileDir = path.dirname(filePath);
    const componentsDir = path.join(process.cwd(), 'app', 'components');
    const relativePath = path.relative(fileDir, componentsDir);
    const importPath = relativePath.replace(/\\/g, '/'); // Convert backslashes to forward slashes
    
    // Fix the import statement
    content = content.replace(
      /]*';/,
      ``
    );
    
    fs.writeFileSync(filePath, content);
      } catch (error) {
    // Empty block
  }
}

// Function to fix all page files
function fixAllImportPaths() {
  
  pageFiles.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
      fixImportPath(fullPath);
    }
  });
}

// Main execution
fixAllImportPaths();
