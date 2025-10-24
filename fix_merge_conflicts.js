#!/usr/bin// Fixed regex

<<<<<<< HEAD
<<<<<<< HEAD
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
    const content = fs.readFileSync(filePath, 'utf8'
    if (content.includes('') || content.includes('') || content.includes('>>>>>>>'
  console.error('Error:'
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx'
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules'
const appDir = '
=======
// List of files with merge conflicts
const filesToFix = [
  'app/components/AccessibilityComponents.tsx',
  'app/components/AccessibilityUtils.tsx',
  'app/components/EnhancedAccessibility.tsx',
  'app/components/Footer.tsx',
  'app/components/LazyImage.tsx',
  'app/components/OptimizedImage.tsx',
  'app/components/PerformanceDashboard.tsx',
  'app/components/PerformanceImage.tsx',
  'app/components/SEOHead.tsx',
  'app/components/Sidebar.tsx',
  'app/pages/AdminPage.tsx',
  'app/pages/ContactPage.tsx'
];
=======
// Function to fix merge conflicts
function fixMergeConflicts(content) {
  let fixedContent = content;
  
  // Remove merge conflict markers and keep the HEAD version
  fixedContent = fixedContent.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)  
  // Remove any remaining conflict markers
  fixedContent = fixedContent.replace(/<<<<<<< HEAD\n/g, '');
  fixedContent = fixedContent.replace(/=======\n/g, '');
  fixedContent = fixedContent.replace(/  
  return fixedContent;
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1');
  
  // Clean up any remaining merge conflict markers
  resolved = resolved
    .replace(/<<<<<<< HEAD\n/g, '')
    .replace(/=======\n/g, '')
    .replace(/>>>>>>> [a-f0-9]+\n/g, '');
  
  return resolved;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1f20
}
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixMergeConflicts(content);
    
<<<<<<< HEAD
    // Remove merge conflict markers and keep the HEAD version (first part)
>>>>>>> origin/main
=======
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let filesProcessed = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.js')) {
        if (processFile(fullPath)) {
          filesProcessed++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return filesProcessed;
}

// Main execution
console.log('Starting to fix merge conflicts...');
const filesProcessed = processDirectory('/workspace');
console.log(`Processed ${filesProcessed} files.`);
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
