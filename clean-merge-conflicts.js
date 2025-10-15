import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove all merge conflict markers and keep the latest version
    
    // Clean up any remaining conflict markers
    content = content.replace(//g, '');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned merge conflicts: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to process all TypeScript/JavaScript files
function processFiles(dir) {
  const files = fs.readdirSync(dir);
  let cleanedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      cleanedCount += processFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (cleanMergeConflicts(filePath)) {
        cleanedCount++;
      }
    }
  });
  
  return cleanedCount;
}

// Process the app directory
console.log('Starting cleanup of merge conflicts...');
const cleanedCount = processFiles('./app');
console.log(`Cleaned ${cleanedCount} files.`);