<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const fs = require('fs'); const path = require('path');  function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; # Resolved merge conflict - kept HEAD version if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); ,filePath)}`); return true} return false} catch (error) {  return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() {  const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,'utf8');
>>>>>>> main
=======
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
const fs = require('fs');
=======
const fs = require('fs'); const path = require('path');  function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; # Resolved merge conflict - kept HEAD version if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); ,filePath)}`); return true} return false} catch (error) {  return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() {  const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,'utf8');  try {
const fs = require('fs'); const path = require('path');  function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; # Resolved merge conflict - kept HEAD version if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); ,filePath)}`); return true} return false} catch (error) {  return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() {  const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,'utf8');
const fs = require('fs');
const fs = require('fs'); const path = require('path');  function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; # Resolved merge conflict - kept HEAD version if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); ,filePath)}`); return true} return false} catch (error) {  return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() {  const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,'utf8');  try {const fs = require('fs');
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
const path = require('path');
console.log('🔧 Starting Merge Conflict Resolution');
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
<<<<<<< HEAD
    // Remove merge conflict markers and keep HEAD version
# Resolved merge conflict - kept HEAD version
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed merge conflicts "in": ${path.relative(process.cwd(), filePath)}`);
      return true}
    return false} catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false}
}
// Function to get all files recursively
function getAllFiles(dir, extensions) {
  let files = [];
  try {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        files = files.concat(getAllFiles(fullPath, extensions))} else if (extensions.some(ext => item.endsWith(ext))) {
=======
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/[\s\S]*?[\s\S]*?    content = content.replace(/[\s\S]*?    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
}//Function to get all files recursively function getAllFiles (dir, extensions) {
  let files = [];
try {
  const items = fs.readdirSync (dir);
for (const item of items) {
  const fullPath = path.join (dir, item);
const stat = fs.statSync (fullPath);
if (stat.isDirectory () && !item.startsWith ('.') && item !== 'node modules') {
  files = files.concat (getAllFiles (fullPath, extensions) );
}else if (extensions.some (ext => item.endsWith (ext) ) ) {
  files.push (fullPath);
}
}
}catch (error) {
  //Skip directories that can't be read 
}return files;
}//Main execution async function main () {
  console.log ('🔍 Scanning for merge conflicts...');
const files = getAllFiles (process.cwd (), ['.tsx', '.ts', '.jsx', '.js', '.json', '.md']);
let fixedCount = 0;
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
        files.push(fullPath)}
    }
  } catch (error) {
    // Skip directories that can't be read
  }
  return files}
// Main execution
async function main() {
  console.log('🔍 Scanning for merge conflicts...');
  const files = getAllFiles(process.cwd(), ['.tsx', '.ts', '.jsx', '.js', '.json', '.md']);
  let fixedCount = 0;
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const fs = require('fs'); const path = require('path'); console.log('🔧 Starting Merge Conflict Resolution'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; # Resolved merge conflict - kept HEAD version if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(),filePath)}`); return true} return false} catch (error) { console.log(`❌ Error fixing ${filePath}: ${error.message}`); return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() { console.log('🔍 Scanning for merge conflicts...'); const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,'utf8');
=======
const fs = require('fs'); const path = require('path'); console.log('🔧 Starting Merge Conflict Resolution'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; # Resolved merge conflict - kept HEAD version if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(),filePath)}`); return true} return false} catch (error) { console.log(`❌ Error fixing ${filePath}: ${error.message}`); return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() { console.log('🔍 Scanning for merge conflicts...'); const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,'utf8');
>>>>>>> main
=======
const fs = require('fs'); const path = require('path'); console.log('🔧 Starting Merge Conflict Resolution'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; # Resolved merge conflict - kept HEAD version if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(),filePath)}`); return true} return false} catch (error) { console.log(`❌ Error fixing ${filePath}: ${error.message}`); return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() { console.log('🔍 Scanning for merge conflicts...'); const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,'utf8');
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
const fs = require('fs'); const path = require('path'); console.log('🔧 Starting Merge Conflict Resolution'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; # Resolved merge conflict - kept HEAD version if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(),filePath)}`); return true} return false} catch (error) { console.log(`❌ Error fixing ${filePath}: ${error.message}`); return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() { console.log('🔍 Scanning for merge conflicts...'); const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,'utf8');
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
  `); return true} return false} catch (error) { console.log(`❌ Error fixing ${filePath}: ${error.message}`); return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir);  else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() { console.log('🔍 Scanning for merge conflicts...'); const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,'utf8');
        if (fixMergeConflicts(file)) {
          fixedCount++;
        }
      }
    } catch (error) {
      // Skip files that can't be read
    }
  }
  
  console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
  console.log('🎉 Merge conflict resolution completed!');}
}
}catch (error) {
  // Skip files that can't be read 
}
}console.log (`✅ Fixed merge conflicts in $ {
  fixedCount 
}files`);
console.log ('🎉 Merge conflict resolution completed!');
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
