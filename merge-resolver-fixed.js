<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
=======

=======

=======


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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
console.log('🔧 Starting Merge Conflict Resolution'),;
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8'),;
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8'),;
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`),;

      return true;
    }
    return false;
  } catch (error) {
    console.log (`❌ Error fixing ${file_path}: ${error.message}`),
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
      return true;
    }
    return false;
  } catch (error) {;
    console.log(`❌ Error fixing ${filePath}: ${error.message}`),;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    return false;
  }
}
// Function to get all files recursively;

<<<<<<< HEAD
function getAllFiles(dir, extensions) {;



=======

function getAllFiles(dir, extensions) {;
  let files = [],;
  try {;
    const items = fs.readdirSync(dir),;
    for (const item of items) {;
      const fullPath = path.join(dir, item),;
      const stat = fs.statSync(fullPath),;
  let files = [];
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  try {;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
    // Skip directories that can't be read;

  }
  return files;
}
// Main execution;

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

=======
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
    // Skip directories that can't be read;
  }
  return files
}
;
// Main execution;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        files = files.concat(getAllFiles(fullPath, extensions));

<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
