const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to resolve merge conflicts by choosing the HEAD version
function resolveMergeConflicts(content) {
  let resolved = content;
  
  // Remove merge conflict markers and keep HEAD version
  resolved = resolved.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n?/g, '$1');
  
  // Remove any remaining merge conflict markers
  resolved = resolved.replace(/<<<<<<< HEAD\n?/g, '');
  resolved = resolved.replace(/=======\n?/g, '');
  resolved = resolved.replace(/>>>>>>> [^\n]+\n?/g, '');
  
  return resolved;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const resolved = resolveMergeConflicts(content);
    
    if (content !== resolved) {
      fs.writeFileSync(filePath, resolved, 'utf8');
      console.log(`Resolved merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting merge conflict resolution...');
  
  // Get all TypeScript/JavaScript files
  const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: __dirname });
  
  let fixedCount = 0;
  for (const file of files) {
    const fullPath = path.join(__dirname, file);
    if (processFile(fullPath)) {
      fixedCount++;
    }
  }
  
  console.log(`Resolved merge conflicts in ${fixedCount} files`);
}

main().catch(console.error);