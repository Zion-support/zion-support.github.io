import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasConflicts = false;
    
    // Check if file has merge conflict markers
    if (content.includes('') || content.includes('') || content.includes('      hasConflicts = true;
      
      // Remove merge conflict markers and keep HEAD version (our changes)
      content = content.replace(/\n([\s\S]*?)\n\n[\s\S]*?\n      
      // Clean up any remaining markers
      content = content.replace(/\n?/g, '');
      content = content.replace(/\n?/g, '');
      content = content.replace(/      
      // Write the fixed content back
      fs.writeFileSync(filePath, content);
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all files with merge conflicts
function fixAllMergeConflicts(dir) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          continue;
        }
        fixedCount += fixAllMergeConflicts(fullPath);
      } else if (stat.isFile()) {
        // Process text files
        const ext = path.extname(item).toLowerCase();
        if (['.js', '.jsx', '.ts', '.tsx', '.json', '.md', '.txt', '.css', '.scss', '.html', '.yml', '.yaml'].includes(ext)) {
          if (fixMergeConflicts(fullPath)) {
            fixedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');
const fixedCount = fixAllMergeConflicts(__dirname);
console.log(`Fixed merge conflicts in ${fixedCount} files.`);

if (fixedCount > 0) {
  console.log('All merge conflicts have been resolved. You can now commit the changes.');
} else {
  console.log('No merge conflicts found.');
}