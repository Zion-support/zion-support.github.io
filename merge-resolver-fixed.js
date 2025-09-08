<<<<<<< HEAD




=======

const fs = require($2);
const path = require($2);
console.log($2);
// Function to fix merge conflicts in a file,
  function fixMergeConflicts(filePath) {
  try {


>>>>>>> origin/cursor/delete-old-data-records-6bba
const fs = require ('fs'),
const path = require ('path'),
console.log ('🔧 Starting Merge Conflict Resolution'),
// Function to fix merge conflicts in a file;
/**
 * fixMergeConflicts - Function description
 */
function fixMergeConflicts() {
  try {

    content = content.replace(/
const fs = require('fs'),;
<<<<<<< HEAD
const path = require('path'),;    const items = fs.readdirSync(dir);
=======
const path = require('path'),;
const fs = require('fs');
const path = require('path');

      fs.writeFileSync (file_path, content, 'utf8'),
      console.log (`✅ Fixed merge conflicts in: ${path.relative (process.cwd (), file_path)}`),

<<<<<<< HEAD





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
>>>>>>> origin/cursor/delete-old-data-records-6bba
console.log('🔧 Starting Merge Conflict Resolution'),;
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8'),;

<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8'),;
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`),;

      return true;
<<<<<<< HEAD
    }
    return false;
  } catch (error) {
    console.log (`❌ Error fixing ${file_path}: ${error.message}`),


=======
    let content = fs.readFileSync($2);
    const originalContent = $2;
    // Remove merge conflict markers and keep HEAD version,
  content = content.replace($2);
    content = content.replace($2);
>>>>>>> origin/cursor/delete-old-data-records-6bba
    if (content !== originalContent) {
      fs.writeFileSync($2);
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`),
      return true
    }
    return false;
  } catch (error) {
    console.log (`❌ Error fixing ${file_path}: ${error.message}`),

    console.log($2);
    return false
  }
}
// Function to get all files recursively,
  function getAllFiles(dir, extensions) {
  let files = $2;
  try {
    const items = fs.readdirSync($2);
    for (const item of items) {
      const fullPath = path.join($2);
      const stat = fs.statSync($2);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(getAllFiles(fullPath, extensions))
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)
      }
    }
  } catch (error) {// Skip directories that can't be read;
  }
  return files
}

<<<<<<< HEAD
// Main execution,
  async function main() {

  console.log($2);
  const files = getAllFiles(process.cwd(), ['.tsx.ts.jsx.js.json.md']),
  let fixedCount = $2;


    return false;
  }
}
// Function to get all files recursively;

function getAllFiles(dir, extensions) {;






  try {;

    const items = fs.readdirSync(dir);
>>>>>>> origin/main
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);



/**
 * getAllFiles - Function description
 */
function getAllFiles() {
  let files = [],
=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

<<<<<<< HEAD
      }
    }
  } catch (error) {
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

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    // Skip directories that can't be read;
  }
  return files
}
;
// Main execution;



<<<<<<< HEAD
=======
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        files = files.concat(getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {files.push(fullPath);
      }
    }
  } catch (error) {// Skip directories that can't be read;
>>>>>>> origin/cursor/delete-old-data-records-6bba
  }
  return files;
}
// Main execution;
<<<<<<< HEAD


async /**
 * main - Function description
 */
function main() {
  console.log ('🔍 Scanning for merge conflicts...'),
  const files = getAllFiles (process.cwd (), ['.tsx.ts.jsx.js', '.json.md']),
  let fixed_count = 0,

  for (const file of files) {
    try {
      const content = fs.readFileSync($2);

=======
async function main() {;
  console.log('🔍 Scanning for merge conflicts...');
  const files = getAllFiles(process.cwd(), ['.tsx.ts.jsx.js', '.json.md']);
  let fixedCount = 0;
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('') |content.includes('
  } catch (error) {// Skip directories that can't be read;
  }
  return files
}
// Main execution,
  async function main() {
  console.log($2);
  const files = getAllFiles(process.cwd(), ['.tsx.ts.jsx.js.json.md']),
  let fixedCount = $2;
  for (const file of files) {
    try {
      const content = fs.readFileSync($2);
        if (fixMergeConflicts(file)) {
          fixedCount++;
        }
      }
    } catch (error) {
      // Skip files that can't be read
>>>>>>> origin/cursor/delete-old-data-records-6bba
        if (fixMergeConflicts(file)) {
          fixedCount++
        }
      }
    } catch (error) {;
      // Skip files that can't be read;
    }
  }
  console.log($2);
  console.log('🎉 Merge conflict resolution completed!')
}

<<<<<<< HEAD

main().catch($2);

  for (const file of files) {;
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {;
      if (content.includes() |content.includes()
      } else if (extensions.some(ext => item.endsWith(ext))) {;
    } catch (error) {;
      // Skip files that can't be read;

        if (fixMergeConflicts(file)) {;
          fixedCount++;        }
  let fixedCount = 0,;

      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        files = files.concat(getAllFiles(fullPath, extensions));


      } else if (extensions.some(ext => item.endsWith(ext))) {;
      }
    } catch (error) {;
      // Skip files that can't be read;
    }
  }
}
<<<<<<< HEAD
;  let fixedCount = 0;
=======
;
  let fixedCount = 0;
>>>>>>> origin/main
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8'),;
        if (fixMergeConflicts(file)) {;
      if (content.includes('        if (fixMergeConflicts(file)) {
          fixedCount++;
        }
      }
    } catch (error) {
      // Skip files that can't be read
    }
  }
  
  console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
  console.log('🎉 Merge conflict resolution completed!');
}
;
main().catch(console.error),;
<<<<<<< HEAD
main().catch(console.error),;main().catch(console.error);
=======
main().catch(console.error),;
main().catch(console.error);
>>>>>>> origin/main
