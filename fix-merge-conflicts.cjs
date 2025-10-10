#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = null;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.includes('=======')) {
        conflictType = 'separator';
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        // Skip lines in conflict sections, we'll handle them separately
        if (conflictType === 'head') {
          // Keep the HEAD version (before =======)
          if (!line.includes('>>>>>>>')) {
            fixedLines.push(line);
          }
        }
        // Skip the other side of the conflict
      } else {
        fixedLines.push(line);
      }
    }
    
    // Clean up any remaining syntax issues
    let fixedContent = fixedLines.join('\n');
    
    // Fix common syntax issues
    fixedContent = fixedContent
      .replace(/;\s*const\s+/g, ';\nconst ')
      .replace(/;\s*}\s*$/gm, ';\n}')
      .replace(/\}\s*const\s+/g, '}\nconst ')
      .replace(/\}\s*export\s+/g, '}\nexport ')
      .replace(/\}\s*function\s+/g, '}\nfunction ')
      .replace(/\}\s*class\s+/g, '}\nclass ')
      .replace(/PagePage:/g, 'Page:')
      .replace(/const PagePage/g, 'const Page')
      .replace(/export default PagePage/g, 'export default Page')
      .replace(/;\s*$/gm, ';')
      .replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive newlines
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix merge conflicts in app directory
function fixAppDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAppDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      if (fixMergeConflicts(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');
const appDir = path.join(__dirname, 'app');
const fixedCount = fixAppDirectory(appDir);
console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also fix some specific problematic files
const problematicFiles = [
  'App_minimal.tsx',
  'App_test.tsx',
  '__tests__/advanced-components.test.tsx',
  '__tests__/components.test.tsx',
  '__tests__/validation.test.ts'
];

for (const file of problematicFiles) {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    if (fixMergeConflicts(filePath)) {
      console.log(`Fixed: ${file}`);
    }
  }
}

console.log('Merge conflict resolution completed!');