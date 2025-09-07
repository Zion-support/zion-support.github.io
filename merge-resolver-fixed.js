
const fs = require ('fs'),const path = require ('path'),console.log ('🔧 Starting Merge Conflict Resolution'),// Function to fix merge conflicts in a file;
/**;
 * fixMergeConflicts - Function description;
 */;
function fixMergeConflicts() {try {let content = fs.readFileSync (file_path, 'utf8'),const original_content = content,// Remove merge conflict markers and keep HEAD version;
    content = content.replace (/[\s\S]*?;
    content = content.replace (/;
    // Check condition;
if ( {) {$2;
}
const fs = require('fs')const path = require('path')const fs = require('fs')const path  = require('path')console.log('🔧 Starting Merge Conflict Resolution'),// Function to fix merge conflicts in a file;
function fixMergeConflicts() {try {let content = fs.readFileSync(filePath, 'utf8'),// Remove merge conflict markers and keep HEAD version;
    const originalContent  = content;// Remove merge conflict markers and keep HEAD version;
    content = content.replace(/;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/[\s\S]*?[\s\S]*?[a-f0-9]+/g, ''),content = content.replace(/[\s\S]*?[a-f0-9]+/g, ''),const originalContent = content;
    // Remove merge conflict markers and keep HEAD version;
    if (content !== originalContent) {fs.writeFileSync(filePath, content, 'utf8'),console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`),return true;
    }
    return false;
  } catch (error) {console.log(`❌ Error fixing ${filePath}: ${error.message}`),return false;
  }
}// Function to get all files recursively;
function getAllFiles() {let files = [];
  try {content = content.replace(/;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/    content = content.replace(/;
    if (content !== originalContent) {fs.writeFileSync(filePath, content, 'utf8')console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`)return true;
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting Merge Conflict Resolution');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
<<<<<<< HEAD
<<<<<<< HEAD
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/[\s\S]*?[\s\S]*?[a-f0-9]+/g, ''),;
    content = content.replace(/[\s\S]*?[a-f0-9]+/g, ''),;


    const originalContent = content;
    // Remove merge conflict markers and keep HEAD version;
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8'),;
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`),;
      return true;
    }
    return false;
  } catch (error) {;
    console.log(`❌ Error fixing ${filePath}: ${error.message}`),;
    return false;
  }
}
;
// Function to get all files recursively;
function getAllFiles(dir, extensions) {;
  let files = [];
  try {;
    content = content.replace(/    
=======
    
    // Remove merge conflict markers and keep HEAD version
    
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
    
    // Remove merge conflict markers and keep HEAD version
    
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`);
      return true;
    }
    return false;
  } catch (error) {console.log(`❌ Error fixing ${filePath}: ${error.message}`)return false;
  }
}// Function to get all files recursively;
function getAllFiles() {let files = [];
  try {const items = fs.readdirSync(dir)for (const item of items) {const fullPath = path.join(dir, item)const stat  = fs.statSync(fullPath)if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {files = files.concat(getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {files.push(fullPath)}
    }
  } catch (error) {// Skip directories that can't be read;
  }
  return files;
}
// Main execution;
<<<<<<< HEAD
async function main() {;
  console.log('🔍 Scanning for merge conflicts...');
  const files = getAllFiles(process.cwd(), ['.tsx.ts.jsx.js', '.json.md']);
  let fixedCount = 0;
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8');
<<<<<<< HEAD
      if (content.includes('') |content.includes('
      } else if (extensions.some(ext => item.endsWith(ext))) {;
      }
    } catch (error) {;
      // Skip files that can't be read;
    }
  }
}
;
=======
=======
async function main() {console.log('🔍 Scanning for merge conflicts...')const files = getAllFiles(process.cwd(), ['.tsx.ts.jsx.js', '.json.md'])let fixedCount = 0;
  for (const file of files) {try {const content = fs.readFileSync(file, 'utf8')if (content.includes('') |content.includes(';
      } else if (extensions.some(ext => item.endsWith(ext))) {}
    } catch (error) {// Skip files that can't be read;
    }
  }
}let fixedCount = 0;
  for (const file of files) {try {const content = fs.readFileSync(file, 'utf8'),if (fixMergeConflicts(file)) {if (content.includes('        if (fixMergeConflicts(file)) {fixedCount++;

// Main execution
async function main() {
  console.log('🔍 Scanning for merge conflicts...');
  const files = getAllFiles(process.cwd(), ['.tsx', '.ts', '.jsx', '.js', '.json', '.md']);
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
        if (fixMergeConflicts(file)) {;
          fixedCount++;        }
  let fixedCount = 0,;
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('') || content.includes('
}
}
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
  let fixedCount = 0;
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8'),;
        if (fixMergeConflicts(file)) {;
<<<<<<< HEAD
<<<<<<< HEAD
      if (content.includes('        if (fixMergeConflicts(file)) {
=======
        if (fixMergeConflicts(file)) {
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======
        if (fixMergeConflicts(file)) {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
          fixedCount++;
        }
      }
    } catch (error) {// Skip files that can't be read;
    }
  }console.log(`✅ Fixed merge conflicts in ${fixedCount} files`)console.log('🎉 Merge conflict resolution completed!')}main().catch(console.error),main().catch(console.error),main().catch(console.error)
  }
  
  console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
  console.log('🎉 Merge conflict resolution completed!');
}
<<<<<<< HEAD
<<<<<<< HEAD
;
main().catch(console.error),;
main().catch(console.error),;
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
main().catch(console.error);
