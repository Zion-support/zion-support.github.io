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
    }
  }
}

console.log(`Resolved merge conflicts in ${rootResolvedCount} root files.`);
console.log('Merge conflict resolution complete!');