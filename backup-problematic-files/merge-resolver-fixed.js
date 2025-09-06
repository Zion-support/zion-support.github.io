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
      return true;
    }
    return false;
  } catch (error) {;
    console.log(`❌ Error fixing ${filePath} ${error.message}`);
    return false;
  }
}
;
// Function to get all files recursively;
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
      }
    } catch (error) {;
      // Skip files that can't be read;
    }
  }
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
