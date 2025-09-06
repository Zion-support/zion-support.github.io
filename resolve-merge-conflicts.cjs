<<<<<<< HEAD
const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Remove all merge conflict markers and keep only the main branch content
    // This regex removes everything between <<<<<<< HEAD and =======, and everything between ======= and >>>>>>> branch-name
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Also handle cases where there might be multiple conflict sections
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findAndResolveConflicts(dir) {
  const files = fs.readdirSync(dir);
  let resolvedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      resolvedCount += findAndResolveConflicts(filePath);
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.css') || file.endsWith('.html') || file.endsWith('.json'))) {
      if (resolveMergeConflicts(filePath)) {
        resolvedCount++;
      }
    }
  }
  
  return resolvedCount;
}

console.log('Starting merge conflict resolution...');
const resolvedCount = findAndResolveConflicts('./src');
console.log(`Resolved merge conflicts in ${resolvedCount} files.`);

// Also check root level files
const rootFiles = ['package.json', 'tsconfig.json', 'vite.config.js', 'index.html'];
let rootResolvedCount = 0;

for (const file of rootFiles) {
  if (fs.existsSync(file)) {
    if (resolveMergeConflicts(file)) {
      rootResolvedCount++;
=======


const { execSync } = require('child_process');

console.log('Resolving merge conflicts...');

// Get all conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U').toString().trim().split('\n').filter(f => f);

console.log(`Found ${conflictedFiles.length} conflicted files`);

// Categorize conflicts
const modifyDeleteConflicts = [];
const contentConflicts = [];
const addAddConflicts = [];

conflictedFiles.forEach(file => {
  const status = execSync(`git status --porcelain "${file}"`).toString().trim();
  
  if (status.startsWith('UD') || status.startsWith('DU')) {
    modifyDeleteConflicts.push(file);
  } else if (status.startsWith('UU')) {
    contentConflicts.push(file);
  } else if (status.startsWith('AA')) {
    addAddConflicts.push(file);
  }
});

console.log(`Modify/Delete conflicts: ${modifyDeleteConflicts.length}`);
console.log(`Content conflicts: ${contentConflicts.length}`);
console.log(`Add/Add conflicts: ${addAddConflicts.length}`);

// Resolve modify/delete conflicts by accepting remote deletion
console.log('\nResolving modify/delete conflicts...');
modifyDeleteConflicts.forEach(file => {
  try {
    execSync(`git rm "${file}"`);
    console.log(`✓ Deleted: ${file}`);
  } catch (error) {
    console.error(`✗ Failed to delete ${file}: ${error.message}`);
  }
});

// Resolve add/add conflicts by choosing one version
console.log('\nResolving add/add conflicts...');
addAddConflicts.forEach(file => {
  try {
    // For add/add conflicts, prefer the current version (HEAD)
    execSync(`git checkout --ours "${file}"`);
    execSync(`git add "${file}"`);
    console.log(`✓ Resolved add/add conflict: ${file}`);
  } catch (error) {
    console.error(`✗ Failed to resolve add/add conflict in ${file}: ${error.message}`);
  }
});

// Resolve content conflicts by preferring our version for most files
console.log('\nResolving content conflicts...');
contentConflicts.forEach(file => {
  try {
    // For content conflicts, prefer our version (HEAD) for most files
    // But for specific files, we might want to prefer remote
    if (file.includes('yarn.lock') || file.includes('package-lock.json')) {
      execSync(`git checkout --theirs "${file}"`);
    } else {
      execSync(`git checkout --ours "${file}"`);
>>>>>>> 157aff07b859488146569974cc7382910d9762e2
    }
  }
<<<<<<< HEAD
}

console.log(`Resolved merge conflicts in ${rootResolvedCount} root files.`);
console.log('Merge conflict resolution complete!');
=======
});

>>>>>>> 157aff07b859488146569974cc7382910d9762e2
