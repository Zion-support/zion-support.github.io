<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:merge-resolver-fixed.js
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/merge-resolver-fixed.js
const fs = require ('fs'),
const path = require ('path'),
console.log ('🔧 Starting Merge Conflict Resolution'),
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
      fs.writeFileSync (file_path, content, 'utf8'),
      console.log (`✅ Fixed merge conflicts in: ${path.relative (process.cwd (), file_path)}`),
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
const fs = require('fs');
const path = require('path');
console.log('🔧 Starting Merge Conflict Resolution');
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {try {;
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/[\s\S]*?
    content = content.replace(/
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`);
      return true;
    }
    return false;
  } catch (error) {console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}
// Function to get all files recursively;
function getAllFiles(dir, extensions) {let files = [];
const fs = require('fs'),;
const path = require('path'),;
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
console.log('🔧 Starting Merge Conflict Resolution'),;
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8'),;
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
    const originalContent = content;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/
    content = content.replace(/
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8'),;
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`),;

      return true;
    }
    return false;
  } catch (error) {
    console.log (`❌ Error fixing ${file_path}: ${error.message}`),
=======
const fs = require('fs');
const path = require('path');
;
console.log('🔧 Starting Merge Conflict Resolution');
;
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    ;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/[\s\S]*?[\s\S]*?    content = content.replace(/[\s\S]*?    ;
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed merge conflicts in:${path.relative(process.cwd(), filePath)}`);
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const originalContent = content,;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/[\s\S]*?
    content = content.replace(/
    const originalContent = content;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/[\s\S]*?[\s\S]*?[a-f0-9]+/g, ''),;
    content = content.replace(/[\s\S]*?[a-f0-9]+/g, ''),;
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8'),;
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      return true;
    }
    return false;
  } catch (error) {;
<<<<<<< HEAD
    console.log(`❌ Error fixing ${filePath} ${error.message}`);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
    console.log(`❌ Error fixing ${filePath}: ${error.message}`),;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return false;
  }
}
;
// Function to get all files recursively;
<<<<<<< HEAD

function getAllFiles(dir, extensions) {;

<<<<<<< HEAD
<<<<<<<< HEAD:merge-resolver-fixed.js
  let files = [];
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
function getAllFiles(dir, extensions) {;
  let files = [],;
  try {;
    const items = fs.readdirSync(dir),;
    for (const item of items) {;
      const fullPath = path.join(dir, item),;
      const stat = fs.statSync(fullPath),;
  let files = [];
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  try {;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        files = files.concat(getAllFiles(fullPath, extensions));

  let fixedCount = 0;
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8'),;
      if (content.includes('

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/merge-resolver-fixed.js
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
      }
    }
  } catch (error) {
<<<<<<<< HEAD:merge-resolver-fixed.js
    // Skip directories that can't be read;

  }
  return files;
========
=======
function getAllFiles(dir, extensions) {;
  let files = [];
  try {;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        files = files.concat(getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {;
        files.push(fullPath);}
}//Function to get all files recursively function getAllFiles (dir, extensions) {
  let files = [];
try {
  const items = fs.readdirSync (dir);
for (const item of items) {
  const fullPath = path.join (dir, item);
const stat = fs.statSync (fullPath);
if (stat.isDirectory () && !item.startsWith ('.') && item !== 'node modules') {
  files = files.concat (getAllFiles (fullPath, extensions) ) 
}else if (extensions.some (ext => item.endsWith (ext) ) ) {
  files.push (fullPath) 
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/merge-resolver-fixed.js
}
}
}catch (error) {
  //Skip directories that can't be read 
}return files;
}//Main execution async function main () {
  console.log ('🔍 Scanning for merge conflicts...');
const files = getAllFiles (process.cwd (), ['.tsx.ts.jsx.js', '.json.md']);
let fixedCount = 0;
for (const file of files) {
  try {
    const items = fs.readdirSync(dir),
    for (const item of items) {
      const fullPath = path.join(dir, item),
      const stat = fs.statSync(fullPath),
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(getAllFiles(fullPath, extensions))
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)
      }
    }
  } catch (error) {;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    // Skip directories that can't be read;
  }
  return files
}
;
// Main execution;
<<<<<<<< HEAD:merge-resolver-fixed.js

========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/merge-resolver-fixed.js
async /**
 * main - Function description
 */
function main() {
  console.log ('🔍 Scanning for merge conflicts...'),
  const files = getAllFiles (process.cwd (), ['.tsx.ts.jsx.js', '.json.md']),
  let fixed_count = 0,
  for (const file of files) {
    try {
      const content = fs.readFileSync (file, 'utf8'),
      // Check condition
if (|| content.includes (') {
  $2
}
<<<<<<<< HEAD:merge-resolver-fixed.js

=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        files = files.concat(getAllFiles(fullPath, extensions));

=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        files = files.concat(getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {files.push(fullPath);
      }
    }
  } catch (error) {// Skip directories that can't be read;
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
async function main() {;
  console.log('🔍 Scanning for merge conflicts...');
  const files = getAllFiles(process.cwd(), ['.tsx', '.ts', '.jsx', '.js', '.json', '.md']);
  let fixedCount = 0;
  ;
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {;
        if (fixMergeConflicts(file)) {;
          fixedCount++;        }
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  let fixedCount = 0,;
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8'),;
      if (content.includes('') || content.includes('
}
}
}
  let fixedCount = 0;
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8'),;
      if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {;
        if (fixMergeConflicts(file)) {;
          fixedCount++;
        }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    } catch (error) {;
      // Skip files that can't be read;
    }
  }
<<<<<<< HEAD
  ;
  console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
  console.log('🎉 Merge conflict resolution completed!');
}
;
main().catch(console.error);  const content = fs.readFileSync (file, 'utf8');
if (content.includes ('') || content.includes ('') || content.includes ('>>>>>>>') ) {
  if (fixMergeConflicts (file) ) {
  fixedCount++ 
}
}
}catch (error) {
  // Skip files that can't be read 
}
}console.log (`✅ Fixed merge conflicts in $ {
  fixedCount 
}files`);
console.log ('🎉 Merge conflict resolution completed!') 
}main () .catch (console.error);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/merge-resolver-fixed.js
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
