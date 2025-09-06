<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing merge conflict markers...');

// Find all files with merge conflict markers
const findConflictFiles = () => {
  try {
    const result = execSync('grep -r "" . --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.cjs" --include="*.mjs" | cut -d: -f1 | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(Boolean);
  } catch (error) {
    return [];
  }
};

const conflictFiles = findConflictFiles();
console.log(`📋 Found ${conflictFiles.length} files with merge conflicts`);

let fixedCount = 0;

for (const filePath of conflictFiles) {
  try {
    console.log(`🔧 Fixing ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD
    let originalContent = content;
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n    
    // Remove any remaining conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Clean up any double newlines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
      fixedCount++;
    } else {
      console.log(`ℹ️  No changes needed for ${filePath}`);
=======

=======
    
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = null;
    let headLines = [];
    let separatorFound = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        headLines = [];
        continue;
      }
      
      if (line.trim().startsWith('=======')) {
        separatorFound = true;
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictType = null;
        separatorFound = false;
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headLines.push(line);
        }
        // Skip lines from other branches
        continue;
      }
      
      // Add non-conflict lines
      fixedLines.push(line);
    }
    
    // Write the fixed content
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules and other common directories
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check for merge conflict markers
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read as text
          }
        }
      }
<<<<<<< HEAD

      fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
      return true;
=======
const fs = require("fs");
const path = require("path");
function fixMergeConflicts(filePath) {;
  try {;
  let content = fs.readFileSync(filePath, "utf8");
    // Remove merge conflict markers and keep the content after the last marker;
    content = content.replace(/;
    content = content.replace(/;
    // Fix common syntax issues;
    content = content.replace(/},\s*}/g, "}");
    content = content.replace(/},\s*]/g, "]");
    content = content.replace(/},\s*\)/g, ")");
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);,
} catch (error) {;
  console.error(`Error fixing ${filePath}:`, error.message);,
}
}

function findAndFixFiles(dir) {;
  const files = fs.readdirSync(dir);
  for (const file of files) {;
  const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && !file.includes("node_modules") && !file.includes(".git")) {;
  findAndFixFiles(filePath);,
} else if (file.match(/\.(tsx?|jsx?)$/)) {;
  const content = fs.readFileSync(filePath, "utf8");
      if (content.includes("<<<<<<< HEAD") || content.includes("=======") || content.includes(">>>>>>>")) {;
  fixMergeConflicts(filePath);,
}
>>>>>>> origin/automation-fixes
=======
    } catch (error) {
      // Skip directories that can't be read
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
console.log('Scanning for files with merge conflicts...');

const conflictedFiles = findFilesWithConflicts(workspaceDir);
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {
      if (fixMergeConflicts(filePath)) fixedCount++;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
  } catch (error) {
    console.log(`⚠️  Could not fix ${filePath}: ${error.message}`);
  }
<<<<<<< HEAD
}

console.log(`🎉 Fixed ${fixedCount} files with merge conflicts!`);
=======

  return fixedCount;
}

console.log('Starting merge conflict fixes...');
const fixedCount = processDirectory('./components');
console.log(`Fixed ${fixedCount} files`);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
=======
console.log("Starting merge conflict resolution...");
findAndFixFiles(".");
console.log("Merge conflict resolution completed!")
>>>>>>> origin/automation-fixes
=======
console.log(`Fixed merge conflicts in ${fixedCount} files`);
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9381
