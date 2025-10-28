const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Remove unused imports and console statements from a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused ErrorBoundary imports
    if (content.includes("import { ErrorBoundary } from '../components/ErrorBoundary';") && 
        !content.includes('<ErrorBoundary') && 
        !content.includes('ErrorBoundary(')) {
      content = content.replace("import { ErrorBoundary } from '../components/ErrorBoundary';\n", '');
      modified = true;
    }
    
    if (content.includes("import { ErrorBoundary } from './components/ErrorBoundary';") && 
        !content.includes('<ErrorBoundary') && 
        !content.includes('ErrorBoundary(')) {
      content = content.replace("import { ErrorBoundary } from './components/ErrorBoundary';\n", '');
      modified = true;
    }
    
    // Remove unused ReactNode imports
    if (content.includes("import { ReactNode } from 'react';") && 
        !content.includes('ReactNode')) {
      content = content.replace("import { ReactNode } from 'react';\n", '');
      modified = true;
    }
    
    // Remove unused useEffect imports
    if (content.includes("import { useEffect } from 'react';") && 
        !content.includes('useEffect(')) {
      content = content.replace("import { useEffect } from 'react';\n", '');
      modified = true;
    }
    
    // Remove unused variable declarations
    const unusedVarPatterns = [
      /const\s+_props\s*=\s*[^;]+;/g,
      /const\s+[A-Z][a-zA-Z]*Page\s*=\s*[^;]+;/g,
      /const\s+PerformanceEventTiming\s*=\s*[^;]+;/g,
      /const\s+LayoutShift\s*=\s*[^;]+;/g,
    ];
    
    for (const pattern of unusedVarPatterns) {
      const matches = content.match(pattern);
      if (matches) {
        for (const match of matches) {
          content = content.replace(match + '\n', '');
          modified = true;
        }
      }
    }
    
    // Remove console statements (but keep them in development files)
    if (!filePath.includes('development') && !filePath.includes('test')) {
      const consolePatterns = [
        /console\.log\([^)]*\);/g,
        /console\.warn\([^)]*\);/g,
        /console\.error\([^)]*\);/g,
        /console\.info\([^)]*\);/g,
        /console\.debug\([^)]*\);/g,
      ];
      
      for (const pattern of consolePatterns) {
        const matches = content.match(pattern);
        if (matches) {
          for (const match of matches) {
            content = content.replace(match + '\n', '');
            modified = true;
          }
        }
      }
    }
    
    // Clean up multiple empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting comprehensive cleanup...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = getAllTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TypeScript/TSX files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed issues in ${fixedCount} files`);

// Run lint to check if there are any remaining issues
console.log('Running lint check...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('Lint check completed successfully');
} catch (error) {
  console.log('Lint check found remaining issues');
}