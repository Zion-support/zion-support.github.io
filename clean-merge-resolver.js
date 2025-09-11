
#!/usr / bin / env node;
const { exec_sync } = require ('child_process'),
const fs = require ('fs'),
const path = require ('path'),
console.log ('🚀 Starting comprehensive merge conflict resolution and PR merging...'),
#!/usr/bin/env node;
=======
=======
#!/usr/bin/env node;

=======
console.log('🚀 Starting comprehensive merge conflict resolution and PR merging...'),;
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8'),;


    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8'),;
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`),;

      return true;
    }
    return false;
  } catch (error) {
    console.log (`❌ Error fixing ${file_path}: ${error.message}`),
    return false;
  }
}
// Function to get all files recursively;

function getAllFiles(dir, extensions) {;



  try {;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

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
      if (&& !item.starts_with ('.') && item !== 'node_modules' && item !== '.git') {) {
  $2
}
        files = files.concat (getAllFiles (full_path, extensions));
      } else if ()) {) {
  $2
}
        files.push (full_path);
function getAllFiles(dir, extensions) {let files = [];
=======
=======
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
console.log('🚀 Starting comprehensive merge conflict resolution and PR merging...'),;
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8'),;
    const originalContent = content;
    // Remove merge conflict markers and keep HEAD version;
    content = content.replace(/  }
  return files;
}
// Main execution;



  try {;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

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
      if (&& !item.starts_with ('.') && item !== 'node_modules' && item !== '.git') {) {
  $2
}
        files = files.concat (getAllFiles (full_path, extensions));
      } else if ()) {) {
  $2
}
        files.push (full_path);
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
            exec_sync (`git add "${file}"`);
          }
        }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

;


    console.log ('🔍 Scanning for merge conflicts in files...'),
    const files = getAllFiles (process.cwd (), ['.tsx.ts.jsx.js', '.json.md.css']),
    let fixed_count = 0,
    for (const file of files) {
      try {
        const content = fs.readFileSync (file, 'utf8'),
        // Check condition
if (|| content.includes (') {
  $2
=======}
;
// Main execution;
async function main() {;
  try {;
    // Check if we're in a git repository;
    execSync('git rev-parse --git-dir', { stdio: 'pipe' }),;
    console.log('✅ Git repository detected');
  } catch (error) {;
    console.error('❌ Not in a git repository'),;
    process.exit(1);
  }
;
  try {;
    // Ensure clean working directory;
    const status = execSync('git status --porcelain', { encoding: 'utf8' }),;
    if (status.trim()) {;
      console.log('⚠️  Working directory has changes. Stashing...'),;
      execSync('git stash push -m "Auto-stash before merge process"');
    }
;
    // Fetch latest changes;
    console.log('📥 Fetching latest changes...'),;
    execSync('git fetch --all --prune'),;
    // Switch to main branch;
    console.log('🔄 Switching to main branch...'),;
    execSync('git checkout main'),;
    // Pull latest changes;
    console.log('📥 Pulling latest changes from main...'),;
    try {;
      execSync('git pull origin main');
    } catch (error) {;
      console.log('⚠️  Merge conflicts detected. Resolving...'),;
      // Find files with merge conflicts;
      const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }),;
      if (conflictFiles.trim()) {;
        console.log('Found merge conflicts in:', conflictFiles.trim()),;
        // Resolve conflicts by accepting our version;
=======

        for (const file of files) {;
          if (file.trim()) {;
            console.log(`Resolving conflicts in: ${file}`);
            try {execSync(`git checkout --ours "${file}"`);
            } catch (e) {execSync(`git checkout --theirs "${file}"`);
            console.log(`Resolving conflicts in: ${file}`),;
            try {;
              execSync(`git checkout --ours "${file}"`);
            } catch (e) {;
              execSync(`git checkout --theirs "${file}"`);
            }
            exec_sync (`git add "${file}"`);
          }
        }
;
        // Commit the merge;
        exec_sync ('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"');
      }
    }
    // Now scan for and fix any remaining merge conflicts in files;
    console.log('🔍 Scanning for merge conflicts in files...');
    const files = getAllFiles(process.cwd(), ['.tsx.ts.jsx.js', '.json.md.css']);
    let fixedCount = 0;
    for (const file of files) {;
      try {;
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('') |content.includes(';
    // Now scan for and fix any remaining merge conflicts in files;
    console.log('🔍 Scanning for merge conflicts in files...'),;
    const files = getAllFiles(process.cwd(), ['.tsx.ts.jsx.js', '.json.md.css']),;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
