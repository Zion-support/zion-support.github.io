<<<<<<< HEAD
#!/usr/bin/env node

=======
>>>>>>> cursor/delete-records-30ea
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
        conflictType = 'main';
        continue;
        inConflict = false;
        conflictType = null;
        continue;
      }
      
<<<<<<< HEAD
      if (!inConflict) {
        cleanedLines.push(line);
      } else if (conflictType === 'main') {
        cleanedLines.push(line);
      }
=======
      // Remove merge conflict markers and keep the HEAD version
      content = content.replace(/<<<<<<< HEAD\n?/g, '');
      content = content.replace(/=======\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
      
      // Clean up any extra whitespace
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      fs.writeFileSync(filePath, content);
      return true;
>>>>>>> cursor/delete-records-30ea
    }
    
    // Write cleaned content back
    const cleanedContent = cleanedLines.join('\n');
    fs.writeFileSync(filePath, cleanedContent, 'utf8');
    
    return true; // Conflicts were cleaned
  } catch (error) {
<<<<<<< HEAD
    console.error(`Error cleaning ${filePath}:`, error.message);
=======
    console.error(`Error processing ${filePath}:`, error.message);
>>>>>>> cursor/delete-records-30ea
    return false;
  }
}

<<<<<<< HEAD
// Function to fix common JSX syntax issues
function fixJSXIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax issues
    const fixes = [
      // Fix malformed JSX tags
      { pattern: /<(\w+)><\/\1>/g, replacement: '<$1></$1>' },
      // Fix unclosed tags
      { pattern: /<(\w+)([^>]*?)(?<!\/)>$/gm, replacement: '<$1$2></$1>' },
      // Fix extra commas in JSX
      { pattern: /,\s*\)/g, replacement: ')' },
      { pattern: /,\s*\]/g, replacement: ']' },
      { pattern: /,\s*}/g, replacement: '}' },
      // Fix malformed function declarations
      { pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{,\s*$/gm, replacement: 'const $1: React.FC = () => {' },
      // Fix malformed arrays
      { pattern: /\[\s*,/g, replacement: '[' },
      { pattern: /,\s*\]/g, replacement: ']' },
      // Fix malformed objects
      { pattern: /{\s*,/g, replacement: '{' },
      { pattern: /,\s*}/g, replacement: '}' },
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX issues in: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing JSX in ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process files
function main() {
  const appDir = path.join(__dirname, 'app');
  const srcDir = path.join(__dirname, 'src');
  
  const directories = [appDir, srcDir];
  let totalCleaned = 0;
  let totalFixed = 0;
  
  directories.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    
    function processDirectory(dirPath) {
      const files = fs.readdirSync(dirPath);
      
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          processDirectory(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
          if (cleanMergeConflicts(filePath)) {
            totalCleaned++;
          }
          if (fixJSXIssues(filePath)) {
            totalFixed++;
          }
        }
      });
    }
    
    processDirectory(dir);
  });
  
  console.log(`\nCleanup complete:`);
  console.log(`- Files with merge conflicts cleaned: ${totalCleaned}`);
  console.log(`- Files with JSX issues fixed: ${totalFixed}`);
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { cleanMergeConflicts, fixJSXIssues };
=======
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const files = findTsxFiles(appDir);

let cleanedCount = 0;
for (const file of files) {
  if (cleanMergeConflicts(file)) {
    cleanedCount++;
  }
}

console.log(`Cleaned merge conflicts in ${cleanedCount} files`);
>>>>>>> cursor/delete-records-30ea
