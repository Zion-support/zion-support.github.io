
=======
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

console.log('🔧 Starting Merge Conflict Resolution'),;
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8'),;

    const originalContent = content;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/
    content = content.replace(/
    return false;
  }
}
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

  let fixedCount = 0;
  for (const file of files) {;
    try {;
      const content = fs.readFileSync(file, 'utf8'),;
      if (content.includes('
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        files = files.concat(getAllFiles(fullPath, extensions));

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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
