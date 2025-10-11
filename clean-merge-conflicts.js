import fs from 'fs';
import path from 'path';

function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> origin\/main/g, '$1');
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> origin\/main\n?/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned merge conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

// Find and clean all files with merge conflicts
import { execSync } from 'child_process';

try {
  const files = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "<<<<<<< HEAD" 2>/dev/null || true', { encoding: 'utf8' });
  const fileList = files.trim().split('\n').filter(f => f && !f.includes('node_modules') && !f.includes('clean-merge-conflicts.js'));
  
  console.log(`Found ${fileList.length} files with merge conflicts:`);
  fileList.forEach(file => console.log(`  - ${file}`));
  
  fileList.forEach(file => {
    if (file) {
      cleanMergeConflicts(file);
    }
  });
  
  console.log('All merge conflicts cleaned!');
} catch (error) {
  console.error('Error finding files:', error.message);
}