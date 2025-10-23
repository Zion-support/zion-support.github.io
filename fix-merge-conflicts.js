import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepHead = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepHead = true;
        continue;
      }
      
      if (line.includes('=======')) {
        keepHead = false;
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepHead = false;
        continue;
      }
      
      if (inConflict && !keepHead) {
        continue; // Skip lines in the non-HEAD section
      }
      
      fixedLines.push(line);
    }
    
    const fixedContent = fixedLines.join('\n');
    
    // Clean up any remaining syntax issues
    const cleanedContent = fixedContent
      .replace(/;\s*$/gm, '') // Remove trailing semicolons
      .replace(/\s+$/gm, '') // Remove trailing whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove multiple empty lines
    
    fs.writeFileSync(filePath, cleanedContent);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also check the root App.tsx
if (fixMergeConflicts(path.join(__dirname, 'App.tsx'))) {
  fixedCount++;
  console.log('Fixed merge conflicts in App.tsx');
}

console.log(`Total files fixed: ${fixedCount}`);