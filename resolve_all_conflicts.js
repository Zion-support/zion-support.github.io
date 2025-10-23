const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return;
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // For React/JSX files, prefer the Next.js version (after =======)
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx') || filePath.endsWith('.ts') || filePath.endsWith('.js')) {
      // Remove everything between <<<<<<< HEAD and =======
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\s*\n?/g, '');
      // Remove everything between ======= and >>>>>>> 
      content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
      // Remove any remaining merge conflict markers
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
    } else {
      // For other files, prefer the HEAD version
      content = content.replace(/<<<<<<< HEAD\n?([\s\S]*?)=======[\s\S]*?>>>>>>> [^\n]*\n?/g, '$1');
    }
    
    // Clean up any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]*\n?/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`✓ Resolved conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        walkDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json')) {
      resolveMergeConflicts(filePath);
    }
  }
}

console.log('Starting to resolve merge conflicts...');
walkDirectory('./app');
walkDirectory('./src');
walkDirectory('./components');
console.log('Merge conflict resolution completed!');