#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove all merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1');
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1');
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]+\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    // Clean up any duplicate content that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    // Fix common syntax issues
    content = content.replace(/export const metadata = {;\s*title:/g, 'export const metadata = {\n  title:');
    content = content.replace(/;\s*description:/g, ',\n  description:');
    content = content.replace(/;\s*keywords:/g, ',\n  keywords:');
    content = content.replace(/;\s*};/g, '\n};');
    
    // Fix malformed imports
    content = content.replace(/import Link from 'next \/ link';/g, "import Link from 'next/link';");
    
    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*)\s-\s([^"]*)"/g, 'className="$1-$2"');
    content = content.replace(/view_box=/g, 'viewBox=');
    content = content.replace(/stroke_linecap=/g, 'strokeLinecap=');
    content = content.replace(/stroke_linejoin=/g, 'strokeLinejoin=');
    content = content.replace(/stroke_width=/g, 'strokeWidth=');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dir) {
  let filesProcessed = 0;
  let conflictsResolved = 0;
  
  function walkDir(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        try {
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            // Skip node_modules and other common directories
            if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
              walkDir(fullPath);
            }
          } else if (stat.isFile()) {
            // Process TypeScript, JavaScript, and JSX files
            if (item.match(/\.(ts|tsx|js|jsx)$/)) {
              filesProcessed++;
              if (resolveMergeConflicts(fullPath)) {
                conflictsResolved++;
              }
            }
          }
        } catch (error) {
          // Skip files/directories that can't be accessed
          console.log(`⚠️  Skipping ${fullPath}: ${error.message}`);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
      console.log(`⚠️  Skipping directory ${currentPath}: ${error.message}`);
    }
  }
  
  walkDir(dir);
  
  return { filesProcessed, conflictsResolved };
}

// Main execution
const startTime = Date.now();
const { filesProcessed, conflictsResolved } = processDirectory('./');

const endTime = Date.now();
const duration = ((endTime - startTime) / 1000).toFixed(2);

console.log('\n🎉 Merge conflict resolution completed!');
console.log(`📊 Files processed: ${filesProcessed}`);
console.log(`🔧 Conflicts resolved: ${conflictsResolved}`);
console.log(`⏱️  Duration: ${duration}s`);

if (conflictsResolved > 0) {
  console.log('\n✨ All merge conflicts have been resolved!');
  console.log('🚀 You can now run the build command.');
} else {
  console.log('\n✅ No merge conflicts found in the codebase.');
}