#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
<<<<<<< HEAD
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    
    // Clean up any remaining conflict markers
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
    // Check if file has merge conflict markers
    if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Split by conflict markers and keep HEAD version
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let keepCurrent = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.startsWith('')) {
          inConflict = true;
          keepCurrent = true;
          continue;
        } else if (line.startsWith('')) {
          keepCurrent = false;
          continue;
        } else if (line.startsWith('>>>>>>>')) {
          inConflict = false;
          keepCurrent = false;
          continue;
        }
        
        if (!inConflict || keepCurrent) {
          resolvedLines.push(line);
        }
      }
      
      const resolvedContent = resolvedLines.join('\n');
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          const content = fs.readFileSync(fullPath, 'utf8');
  const lines = content.split('\n');
  const newLines = [];
  let inConflict = false;
  let keepContent = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
      keepContent = true;
      continue;
=======
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Check if file has merge conflicts
    if (!content.includes('') && !content.includes('') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
>>>>>>> origin/resolve-merge-conflicts
    }
    console.log(`Fixing merge conflicts in: ${filePath}`);
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Clean up any remaining artifacts
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive newlines
    content = content.replace(/^\s*\n/gm, ''); // Remove empty lines at start
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}
// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  walkDir(dir);
  return files;
}
// Main execution
console.log('Finding files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}
console.log(`Fixed merge conflicts in ${fixedCount} files`);
// Also fix some specific syntax errors
const apiFiles = [
  '/workspace/api/error-report.js',
  '/workspace/api/newsletter/subscribe.js',
  '/workspace/api/onsite-request.js',
  '/workspace/api/quotes.js',
  '/workspace/api/shipping-rates.js',
  '/workspace/api/subscribe.js',
  '/workspace/api/wallet.js'
];
console.log('Fixing API files with syntax errors...');
for (const file of apiFiles) {
  try {
    if (fs.existsSync(file)) {
      let content = fs.readFileSync(file, 'utf8');
      // Fix common syntax errors
      if (content.includes('export default {')) {
        content = content.replace(/export default \{\s*\}/g, 'export default {}');
      }
      // Ensure proper export structure
      if (!content.includes('export default') && !content.includes('module.exports')) {
        content = 'export default {};';
      }
      fs.writeFileSync(file, content);
      console.log(`Fixed: ${file}`);
    }
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
<<<<<<< HEAD
});

console.log('\n🎉 All fixes completed!');
        // Skip node_modules and other build directories
        if (!['node_modules', '.next', 'dist', 'build', '.git'].includes(item)) {
          traverse(fullPath);
        }
      } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const srcDir = path.join(__dirname, 'src');
const files = findSourceFiles(srcDir);

let fixedCount = 0;
let totalConflicts = 0;

for (const file of files) {
  if (resolveMergeConflicts(file)) {
    fixedCount++;
    totalConflicts++;
  }
}

console.log(`\nMerge conflict resolution complete!`);
console.log(`Files processed: ${files.length}`);
console.log(`Files with conflicts fixed: ${fixedCount}`);

// Also check for any remaining conflict markers
console.log('\nChecking for remaining conflict markers...');
try {
  const result = execSync('grep -r "\\|\\|>>>>>>>" src/ || true', { encoding: 'utf8' });
  if (result.trim()) {
    console.log('Warning: Some conflict markers may still remain:');
    console.log(result);
  } else {
    console.log('No remaining conflict markers found.');
  }
} catch (error) {
  console.log('No remaining conflict markers found.');
}

console.log('\nDone!');
=======
}
console.log('Merge conflict fixing completed!');
>>>>>>> origin/resolve-merge-conflicts
