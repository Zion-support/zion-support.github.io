import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts
function fixMergeConflicts(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
  content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
  content = content.replace(/=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
  content = content.replace(/>>>>>>> [a-f0-9]+/g, '');
  
  // Remove any remaining conflict markers
  content = content.replace(/^<<<<<<< HEAD$/gm, '');
  content = content.replace(/^=======$/gm, '');
  content = content.replace(/^>>>>>>> [a-f0-9]+$/gm, '');
  
  return content;
}

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix all files
const files = getAllFiles(path.join(__dirname, 'app'));
let fixedCount = 0;

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixedContent = fixMergeConflicts(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(file, fixedContent);
      console.log(`Fixed merge conflicts in: ${path.relative(__dirname, file)}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
});

console.log(`\nFixed merge conflicts in ${fixedCount} files`);