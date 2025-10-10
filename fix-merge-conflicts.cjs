const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
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
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Function to fix merge conflicts by choosing the newer version (after =======)
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep the newer version (after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]*/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]*\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n/g, '');
    
    // Clean up any duplicate imports or exports
    const lines = content.split('\n');
    const seenImports = new Set();
    const seenExports = new Set();
    const cleanedLines = [];
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      // Handle imports
      if (trimmedLine.startsWith('import ')) {
        if (!seenImports.has(trimmedLine)) {
          seenImports.add(trimmedLine);
          cleanedLines.push(line);
        }
      }
      // Handle exports
      else if (trimmedLine.startsWith('export ')) {
        if (!seenExports.has(trimmedLine)) {
          seenExports.add(trimmedLine);
          cleanedLines.push(line);
        }
      }
      // Handle other lines
      else {
        cleanedLines.push(line);
      }
    }
    
    content = cleanedLines.join('\n');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting merge conflict resolution...');

const workspaceDir = '/workspace';
const filesWithConflicts = findFilesWithConflicts(workspaceDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const filePath of filesWithConflicts) {
  if (fixMergeConflicts(filePath)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Run a final check
console.log('Running final check...');
try {
  execSync('cd /workspace && pnpm run lint --max-warnings 0', { stdio: 'inherit' });
  console.log('Linting passed!');
} catch (error) {
  console.log('Linting still has issues, but merge conflicts should be resolved.');
}