import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the latest version
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Remove empty lines that might be left
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TypeScript/TSX files with merge conflicts
const files = execSync('find app -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \\;', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(f => f);

console.log(`Found ${files.length} files with merge conflicts`);

files.forEach(fixMergeConflicts);

console.log('Merge conflict fixing completed');