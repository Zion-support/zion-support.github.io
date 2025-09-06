const fs = require('fs'); const path = require('path');  function fixMergeConflicts(filePath) { try { let content = fs.readFileSync(filePath,'utf8'); const originalContent = content; content = content.replace(/ if (content !== originalContent) { fs.writeFileSync(filePath,content,'utf8'); ,filePath)}`); return true} return false} catch (error) {  return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir);  else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() {  const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; `);
      return true}
    return false} catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false}

// Function to get all files recursively
function getAllFiles(dir, extensions) {
  let files = [];
  try {
    const items = fs.readdirSync(dir);
     else if (extensions.some(ext => item.endsWith(ext))) {
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
  `); return true} return false} catch (error) { console.log(`❌ Error fixing ${filePath}: ${error.message}`); return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir);  else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() { console.log('🔍 Scanning for merge conflicts...'); const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; `); return true} return false} catch (error) { console.log(`❌ Error fixing ${filePath}: ${error.message}`); return false} } function getAllFiles(dir,extensions) { let files = []; try { const items = fs.readdirSync(dir);  else if (extensions.some(ext => item.endsWith(ext))) { files.push(fullPath)} } } catch (error) { } return files} async function main() { console.log('🔍 Scanning for merge conflicts...'); const files = getAllFiles(process.cwd(),['.tsx','.ts','.jsx','.js','.json','.md']); let fixedCount = 0; for (const file of files) { try { const content = fs.readFileSync(file,'utf8');
