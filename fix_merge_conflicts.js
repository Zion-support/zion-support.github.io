import fs from 'fs';
import path from 'path';

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version (first version)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/    
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    // Remove any orphaned merge conflict markers
    content = content.replace(/^<<<<<<< HEAD$/gm, '');
    content = content.replace(/^=======$/gm, '');
    content = content.replace(/^    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        fixedCount += findAndFixFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting merge conflict resolution...');
const fixedCount = findAndFixFiles('/workspace');
console.log(`Fixed merge conflicts in ${fixedCount} files.`);