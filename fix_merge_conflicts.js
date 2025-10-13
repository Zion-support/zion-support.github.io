import fs from 'fs';
import path from 'path';

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the content after the last =======
    const lines = content.split('\n');
    let newLines = [];
    let inConflict = false;
    let conflictContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictContent = [];
        continue;
      }
      
      if (line.includes('=======')) {
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        // Use the content after ======= (which is in conflictContent)
        newLines = newLines.concat(conflictContent);
        continue;
      }
      
      if (inConflict) {
        conflictContent.push(line);
      } else {
        newLines.push(line);
      }
    }
    
    const newContent = newLines.join('\n');
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// List of files to fix
const filesToFix = [
  '/workspace/app/ai-services/page.tsx',
  '/workspace/app/support/page.tsx',
  '/workspace/app/demo/page.tsx',
  '/workspace/app/ai-automation-platform/page.tsx'
];

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    fixMergeConflicts(filePath);
  }
});

console.log('Merge conflict fixing completed!');