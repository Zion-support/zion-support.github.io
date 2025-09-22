<<<<<<< HEAD

=======
const fs = require('fs');
const path = require('path');
;
console.log(' Starting Merge Conflict Resolution');
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/[\s\S]*?[\s\S]*?    content = content.replace(/[\s\S]*?    ;)
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(` Fixed merge conflicts in:${path.relative(process.cwd(), filePath)}`);
      return true;
    }
    return false;
  } catch (error) {;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    return false;
  }
}
;
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
// Function to get all files recursively;
<<<<<<< HEAD

=======
function getAllFiles(dir, extensions) {;
  let files = [];
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        files = files.concat(getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {;
        files.push(fullPath);}
}//Function to get all files recursively function getAllFiles (dir, extensions) {
try {
  // TODO: Implement
  const items = fs.readdirSync (dir);
for (const item of items) {
  const fullPath = path.join (dir, item);
const stat = fs.statSync (fullPath);
if (stat.isDirectory () && !item.startsWith ('.') && item !== 'node modules') {
  files = files.concat (getAllFiles (fullPath, extensions) ) 
}else if (extensions.some (ext => item.endsWith (ext) ) ) {
  files.push (fullPath) 
}catch (error) {
  //Skip directories that can't be read;
}return files;
}//Main execution async function main () {
  console.log (' Scanning for merge conflicts...');
const files = getAllFiles (process.cwd (), ['.tsx.ts.jsx.js', '.json.md']);
let fixedCount = 0;
for (const file of files) {
  // TODO: Implement
    const items = fs.readdirSync(dir),
      const fullPath = path.join(dir, item),
      const stat = fs.statSync(fullPath),
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(getAllFiles(fullPath, extensions))
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)
<<<<<<< HEAD
      }
    }
  } catch (error) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    // Skip directories that can't be read;
  return files;
// Main execution;
<<<<<<< HEAD

=======
async function main() {;
  console.log(' Scanning for merge conflicts...');
  const files = getAllFiles(process.cwd(), ['.tsx', '.ts', '.jsx', '.js', '.json', '.md']);
  for (const file of files) {;
      const content = fs.readFileSync(file, 'utf8');
        if (fixMergeConflicts(file)) {;
          fixedCount++;        }
      // Skip files that can't be read;
  ;`;
  console.log(` Fixed merge conflicts in ${fixedCount} files`);
  console.log(' Merge conflict resolution completed!');
main().catch(console.error);  const content = fs.readFileSync (file, 'utf8');
  if (fixMergeConflicts (file) ) {
  fixedCount++ 
  // Skip files that can't be read;
}`;
}console.log (` Fixed merge conflicts in $ {
  fixedCount;)`;
}files`);
console.log (' Merge conflict resolution completed!')
}main () .catch (console.error);
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
