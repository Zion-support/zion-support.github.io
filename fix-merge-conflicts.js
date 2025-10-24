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
    
    console.log(`Fixing merge conflicts in: ${filePath}`)
    //Split content by lines
    const lines = content.split("\n")
    const fixedLines = []
    let inConflict = false
    let conflictType = null
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
        inConflict = true
        conflictType = "head"
        continue; //Skip the conflict marker
        conflictType = "separator"
        continue; //Skip the separator
        inConflict = false
        conflictType = null
        continue; //Skip the end marker
      }
      
      if (inConflict) {
        if (conflictType === "head") {
          fixedLines.push(line)
        }
      } else {
        // Normal line, keep it
        fixedLines.push(line);
        continue; // Skip this line;
      }
      if (inConflict) {;
        // We're inside a conflict block;
        if (conflictType === 'head') {;
          fixedLines.push(line)}
      } else {;
        // Normal line, keep it;
        fixedLines.push(line)}
    }
    // Join lines back together;
    const fixedContent = fixedLines.join('\n');
;
    // Write the fixed content back to the file;
    fs.writeFileSync(filePath, fixedContent, 'utf8');
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

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of files) {
  if (fixMergeConflicts(fi, l, e)) {
    fixedCount++;
  }
  traverse(dir);
  return files}
// Main execution;
console.log('Starting merge conflict resolution...');
;
const appDir = '/workspace/app'
const files = findTsxFiles(appDir);
;
let fixedCount = 0;
let errorCount = 0;
;`
console.log(`Found ${files.length} TypeScript files to check`);
;
for (const file of files) {;
  try {;
    const wasFixed = fixMergeConflicts(file);
    if (wasFixed) {;
      fixedCount++}
  } catch (error) {;`
    console.error(`Error processing ${file}:`, error.message);
  return fixedCount;
}"
"
// Main execution"'"
console.log('Starting merge conflict resolution...");"'"
const fixedCount = fixAllMergeConflicts('/workspace/app");
console.log(`Fixed merge conflicts in ${fixedCount} files`);"
"
// Also check other directories"'"
const otherDirs = ['/workspace/components', '/workspace/api"];
let totalFixed = fixedCount;

  return fixedCount
}

console.log(`Fixed merge conflicts in ${ fixedCou, n, t } files`);

// Also check the root App.tsx
if (fixMergeConflicts(path.join(__dirname, 'App.tsx'))) {
  fixedCount++;
  console.log('Fixed merge conflicts in App.tsx');
}

console.log(`Total files fixed: ${ fixedCou, n, t }`);
