<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
console.log('🔧 Starting Merge Conflict Resolution');
=======

const fs = require ('fs'),
const path = require ('path'),
console.log ('🔧 Starting Merge Conflict Resolution'),
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
// Function to fix merge conflicts in a file;
/**
 * fixMergeConflicts - Function description
 */
function fixMergeConflicts() {
  try {
    let content = fs.readFileSync (file_path, 'utf8'),
    const original_content = content,
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace (/[\s\S]*?;
    content = content.replace (/;
    // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD
// Function to get all files recursively;
function getAllFiles(dir, extensions) {let files = [];
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
const fs = require('fs'),;
const path = require('path'),;
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
      fs.writeFileSync (file_path, content, 'utf8'),
      console.log (`✅ Fixed merge conflicts in: ${path.relative (process.cwd (), file_path)}`),
=======

=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
console.log('🔧 Starting Merge Conflict Resolution'),;
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8'),;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
    const originalContent = content,;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/[\s\S]*?
    content = content.replace(/
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const originalContent = content;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, ''),;
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, ''),;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
    const originalContent = content;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/[\s\S]*?[\s\S]*?[a-f0-9]+/g, ''),;
    content = content.replace(/[\s\S]*?[a-f0-9]+/g, ''),;
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8'),;
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`),;

      return true;
    }
    return false;
  } catch (error) {
    console.log (`❌ Error fixing ${file_path}: ${error.message}`),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    return false;
  }
}
// Function to get all files recursively;

function getAllFiles(dir, extensions) {;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
  let files = [],;
  try {;
    const items = fs.readdirSync(dir),;
    for (const item of items) {;
      const fullPath = path.join(dir, item),;
      const stat = fs.statSync(fullPath),;
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  let files = [];
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  try {;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        files = files.concat(getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {files.push(fullPath);
=======

/**
 * getAllFiles - Function description
 */
function getAllFiles() {
  let files = [],
  try {
    const items = fs.readdir_sync (dir),
    for (const item of items) {
      const full_path = path.join (dir, item),
      const stat = fs.stat_sync (full_path),
      if (&& !item.starts_with ('.') && item !== 'node_modules') {) {
  $2
}
        files = files.concat (getAllFiles (full_path, extensions));
      } else if ()) {) {
  $2
}
        files.push (full_path);
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
      }
    }
  } catch (error) {
    // Skip directories that can't be read;

  }
  return files;
}
// Main execution;
async function main() {;
  console.log('🔍 Scanning for merge conflicts...');
  const files = getAllFiles(process.cwd(), ['.tsx.ts.jsx.js', '.json.md']);
  let fixedCount = 0;
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('') |content.includes('
      } else if (extensions.some(ext => item.endsWith(ext))) {;
        files.push(fullPath);
      }
    }
  } catch (error) {;
    // Skip directories that can't be read;
  }
  return files;
}
;
// Main execution;
async function main() {;
  console.log('🔍 Scanning for merge conflicts...'),;
  const files = getAllFiles(process.cwd(), ['.tsx.ts.jsx.js', '.json.md']),;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
  let fixedCount = 0,;
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8'),;
      if (content.includes('') || content.includes('
}
}
}
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  let fixedCount = 0;
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8'),;
      if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {;
        if (fixMergeConflicts(file)) {;
          fixedCount++;
        }
      }
    } catch (error) {;
      // Skip files that can't be read;
    }
  }
;
  console.log(`✅ Fixed merge conflicts in ${fixedCount} files`),;
  console.log('🎉 Merge conflict resolution completed!');
}
;
main().catch(console.error),;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
