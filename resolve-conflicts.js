#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by choosing the newer version (after =======)
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by conflict markers and keep the newer version (after =======)
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<<')) {
        inConflict = true;
        conflictStart = i;
        continue;
      }
      
      if (line.trim().startsWith('=======')) {
        // Skip the older version (before =======)
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        conflictStart = -1;
        continue;
      }
      
      if (!inConflict) {
        resolvedLines.push(line);
      } else if (inConflict && i > conflictStart) {
        // We're in the newer version (after =======)
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and resolve conflicts in all files
function resolveAllConflicts(dir) {
  const files = fs.readdirSync(dir);
  let resolvedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip certain directories that might cause issues
      if (['node_modules', '.git', 'dist', 'build'].includes(file)) {
        continue;
      }
      resolvedCount += resolveAllConflicts(filePath);
    } else if (stat.isFile()) {
      // Only process text files
      if (file.endsWith('.js') || file.endsWith('.ts') || file.endsWith('.tsx') || 
          file.endsWith('.jsx') || file.endsWith('.css') || file.endsWith('.html') ||
          file.endsWith('.json') || file.endsWith('.md') || file.endsWith('.txt') ||
          file.endsWith('.cjs') || file.endsWith('.mjs')) {
        if (resolveConflicts(filePath)) {
          resolvedCount++;
        }
      }
    }
  }
  
  return resolvedCount;
}

// Main execution
console.log('🔧 Starting automated conflict resolution...');
const resolvedCount = resolveAllConflicts('/workspace');
console.log(`\n✅ Resolved conflicts in ${resolvedCount} files`);
console.log('🎉 Conflict resolution complete!');
/usr/bin/env node/usr/bin/env node/usr/bin/
/usr/bin/env node/usr/bin/env node/usr/bin/
/usr/bin/env node/usr/bin/env node/usr/bin/
/usr/bin/env node/usr/bin/env node/usr/bin/
