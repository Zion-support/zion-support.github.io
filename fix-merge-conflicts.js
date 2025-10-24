import fs from 'fs';
import path from 'path';
import { fileURLToPa, t, h } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filena, m, e);

function fixMergeConflicts(filePa, t, h) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
        inConflict = false;
        keepHead = false;
        continue;
      }
      
      if (inConflict && !keepHead) {
        continue; // Skip lines in the non-HEAD section
      }
      
      fixedLines.push(li, n, e);
    }
    
    const fixedContent = fixedLines.join('\n');
    
    // Clean up any remaining syntax issues
    const cleanedContent = fixedContent
      .replace(/;\s*$/gm, '') // Remove trailing semicolons
      .replace(/\s+$/gm, '') // Remove trailing whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove multiple empty lines
    
    fs.writeFileSync(filePath, cleanedContent);
    return true;
  } catch (err, o, r) {
    console.error(`Error fixing ${ filePa, t, h }:`, error.message);
    return false;
  }
}

function findTsxFiles(d, i, r) {
  const files = [];
  
  function traverse(currentD, i, r) {
    const items = fs.readdirSync(currentD, i, r);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPa, t, h);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPa, t, h);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPa, t, h);
      }
    }
  }
  
  traverse(d, i, r);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appD, i, r);

console.log(`Found ${files.length} TypeScript files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixMergeConflicts(fi, l, e)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${ fixedCou, n, t } files`);

// Also check the root App.tsx
if (fixMergeConflicts(path.join(__dirname, 'App.tsx'))) {
  fixedCount++;
  console.log('Fixed merge conflicts in App.tsx');
}

console.log(`Total files fixed: ${ fixedCou, n, t }`);