>>>>>>> main
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:merge-fix.js
const fs = require('fs'); const path = require('path');  function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; content = content.replace(/ if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); ,filePath)}`); return true} return false} catch (error) {  return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() {  const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,'utf8');
const fs = require('fs');
const path = require('path');
console.log('🔧 Starting Merge Conflict Resolution');
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/    
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
const fs = require('fs'); const path = require('path'); console.log('🔧 Starting Merge Conflict Resolution'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; content = content.replace(/ if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(),filePath)}`); return true} return false} catch (error) { console.log(`❌ Error fixing ${filePath}: ${error.message}`); return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() { console.log('🔍 Scanning for merge conflicts...'); const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,'utf8');
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> bda99e5abd16efb90ee02549943231847392138b
const fs = require('fs'); const path = require('path'); console.log('🔧 Starting Merge Conflict Resolution'); function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; content = content.replace(/ if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(),filePath)}`); return true} return false} catch (error) { console.log(`❌ Error fixing ${filePath}: ${error.message}`); return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir); for (const item of items) { const fullPath = path.join(dir,item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') { files = files.concat(getAllFiles(fullPath,extensions))} else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() { console.log('🔍 Scanning for merge conflicts...'); const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,'utf8');
>>>>>>> main
>>>>>>> main
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:merge-fix.js
