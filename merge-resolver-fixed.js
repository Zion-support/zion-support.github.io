<<<<<<< HEAD
const fs = require('fs');
const path = require('path');
<<<<<<< HEAD
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
=======
=======
<<<<<<< HEAD
const fs = require('fs'),;
const path = require('path'),;
=======
const fs = require('fs');
const path = require('path');
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
console.log('🔧 Starting Merge Conflict Resolution'),;
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8'),;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const originalContent = content,;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/[\s\S]*?
    content = content.replace(/
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
  let files = [],;
  try {;
    const items = fs.readdirSync(dir),;
    for (const item of items) {;
      const fullPath = path.join(dir, item),;
      const stat = fs.statSync(fullPath),;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  let files = [];
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  try {;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        files = files.concat(getAllFiles(fullPath, extensions));
<<<<<<< HEAD
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
=======
<<<<<<< HEAD
const fs = require ('fs');
const path = require ('path');
console.log ('🔧 Starting Merge Conflict Resolution');
//Function to fix merge conflicts in a file function fixMergeConflicts (filePath) {
  try {
  let content = fs.readFileSync (filePath, 'utf8');
const originalContent = content;
//Remove merge conflict markers and keep HEAD version content = content.replace (/ content = content.replace (/if (content !== originalContent) {
  fs.writeFileSync (filePath, content, 'utf8');
console.log (`✅ Fixed merge conflicts in: $ {
  path.relative (process.cwd (), filePath) 
}`);
return true;
}return false;
}catch (error) {
  console.log (`❌ Error fixing $ {
  filePath 
}: $ {
  error.message 
}`);
return false;

}//Function to get all files recursively function getAllFiles (dir, extensions) {
  let files = [];
try {
  const items = fs.readdirSync (dir);
else if (extensions.some (ext => item.endsWith (ext) ) ) {
  files.push (fullPath) 

}catch (error) {
  //Skip directories that can't be read 
}return files;
}//Main execution async function main () {
  console.log ('🔍 Scanning for merge conflicts...');
const files = getAllFiles (process.cwd (), ['.tsx.ts.jsx.js', '.json.md']);
let fixedCount = 0;
catch (error) {
  // Skip files that can't be read 

}console.log (`✅ Fixed merge conflicts in $ {
  fixedCount 
}files`);
console.log ('🎉 Merge conflict resolution completed!') 
}main () .catch (console.error);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
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
=======
<<<<<<< HEAD
  let fixedCount = 0,;
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8'),;
      if (content.includes('') || content.includes('
}
}
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  let fixedCount = 0;
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8'),;
      if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {;
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
