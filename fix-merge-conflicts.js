import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Find all files with merge conflicts
const findConflictFiles = () => {
  try {
    const result = execSync('grep -r "<<<<<<< HEAD" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.json" | cut -d: -f1 | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    return [];
  }
};

// Fix merge conflicts in a file by accepting our version
const fixMergeConflicts = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep only our version (HEAD)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [a-f0-9]+/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
};

// Main execution
const conflictFiles = findConflictFiles();
console.log(`Found ${conflictFiles.length} files with merge conflicts`);

conflictFiles.forEach(fixMergeConflicts);
console.log('Merge conflicts fixed');