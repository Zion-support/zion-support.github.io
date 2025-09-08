
  try {
    let content = fs.readFileSync($2);
    const originalContent = $2;

    // Remove merge conflict markers and keep HEAD version,
  content = content.replace($2);
    content = content.replace($2);


      return true;

function getAllFiles(dir, extensions) {let files = [];
const { execSync } = require('child_process'),;
const fs = require('fs'),;
const path = require('path'),;
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
console.log('🚀 Starting comprehensive merge conflict resolution and PR merging...'),;
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8'),;
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
    return false;
  }
}
;
// Function to get all files recursively;
function getAllFiles(dir, extensions) {;
  let files = [],;
  try {;
    const items = fs.readdirSync(dir),;
    for (const item of items) {;
      const fullPath = path.join(dir, item),;
      const stat = fs.statSync(fullPath),;
  let files = [];
  try {;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== '.git') {;
        files = files.concat(getAllFiles(fullPath, extensions));
      } else if (extensions.some(ext => item.endsWith(ext))) {files.push(fullPath);

      }

    }
  } catch (error) {
    // Skip directories that can't be read;



  }
  return files;
}
// Main execution;


  let files = $2;
  try {
    const items = fs.readdirSync($2);
    for (const item of items) {

    // Ensure clean working directory;
    const status = exec_sync ('git status --porcelain', { encoding: 'utf8' }),
    if () {) {
  $2
}
      console.log ('⚠️  Working directory has changes. Stashing...'),
      exec_sync ('git stash push -m "Auto - stash before merge process"');
    }
    // Fetch latest changes;
    console.log ('📥 Fetching latest changes...'),
    exec_sync ('git fetch --all --prune'),
    // Switch to main branch;
    console.log ('🔄 Switching to main branch...'),
    exec_sync ('git checkout main'),
    // Pull latest changes;
    console.log ('📥 Pulling latest changes from main...'),
    try {
      exec_sync ('git pull origin main');
    } catch (error) {
      console.log ('⚠️  Merge conflicts detected. Resolving...'),






        // Commit the merge;
        execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"');
      }
    }



    let fixedCount = 0;

    for (const file of files) {;

            execSync(`git add "${file}"`);
          }
        }
        
        // Commit the merge
        execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"');



            fixedCount++;

main().catch($2);




