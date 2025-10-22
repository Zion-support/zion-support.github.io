import fs from 'fs';
import path from 'path';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Split by merge conflict markers
      const lines = content.split('\n');
      const fixedLines = [];
      let inConflict = false;
      let keepSection = null;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('<<<<<<<')) {
          inConflict = true;
          keepSection = 'head'; // Keep the HEAD version by default
          continue;
        }
        
        if (line.includes('=======')) {
          keepSection = 'incoming';
          continue;
        }
        
        if (line.includes('>>>>>>>')) {
          inConflict = false;
          keepSection = null;
          continue;
        }
        
        if (inConflict) {
          // Skip lines that are part of the conflict but not the section we want to keep
          if (keepSection === 'head') {
            fixedLines.push(line);
          }
          // Skip lines from the incoming section
        } else {
          fixedLines.push(line);
        }
      }
      
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all .tsx files
function fixAllMergeConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllMergeConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix merge conflicts in the app directory
console.log('Starting merge conflict resolution...');
const fixedCount = fixAllMergeConflicts('./app');
console.log(`Fixed merge conflicts in ${fixedCount} files.`);