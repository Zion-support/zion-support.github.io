import fs from 'fs';
import path from 'path';

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let conflictType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      }
      
      if (line.includes('=======')) {
        conflictType = 'separator';
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict) {
        result.push(line);
      } else if (conflictType === 'head') {
        // Keep HEAD content (before =======)
        result.push(line);
      }
      // Skip content after ======= (the other branch)
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Scanning for files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('./app');

console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also check some specific files that might have issues
const specificFiles = [
  './app/globals.css',
  './app/layout.tsx',
  './app/components/DynamicContentShowcase.tsx',
  './app/components/ContentStatistics.tsx'
];

for (const file of specificFiles) {
  if (fs.existsSync(file)) {
    fixMergeConflicts(file);
  }
}

console.log('Merge conflict fixing completed!');