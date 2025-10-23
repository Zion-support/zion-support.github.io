const fs = require('fs');
const path = require('path');

function resolveConflicts(content) {
  // Remove all merge conflict markers and keep the HEAD version
  return content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)    .replace(/<<<<<<< HEAD\n([\s\S]*?)    .replace(/<<<<<<< HEAD\n/g, '')
    .replace(/=======\n([\s\S]*?)    .replace(/}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('<<<<<<< HEAD')) {
      console.log(`Resolving conflicts in: ${filePath}`);
      const resolved = resolveConflicts(content);
      fs.writeFileSync(filePath, resolved);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let resolvedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        resolvedCount += walkDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.json') || file.endsWith('.xml')) {
      if (processFile(filePath)) {
        resolvedCount++;
      }
    }
  }
  
  return resolvedCount;
}

console.log('Starting conflict resolution...');
const resolvedCount = walkDirectory('.');
console.log(`Resolved conflicts in ${resolvedCount} files`);
