import fs from 'fs';
import { glob } from 'glob';

// Function to resolve merge conflicts by choosing our version (HEAD)
function resolveConflicts(content) {
  // Remove conflict markers and keep only our version (between <<<<<<< HEAD and =======)
  let resolved = content;
  
  // Pattern to match conflict blocks and keep only our version
  const conflictPattern = /<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+/gs;
  
  resolved = resolved.replace(conflictPattern, (match, ourVersion) => {
    return ourVersion.trim();
  });
  
  // Also handle cases where there might be multiple conflict markers in one block
  const multiConflictPattern = /<<<<<<< HEAD\n(.*?)\n=======\n.*?\n>>>>>>> [^\n]+/gs;
  resolved = resolved.replace(multiConflictPattern, (match, ourVersion) => {
    return ourVersion.trim();
  });
  
  return resolved;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      const resolved = resolveConflicts(content);
      fs.writeFileSync(filePath, resolved, 'utf8');
      console.log(`Resolved conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const patterns = [
    '**/*.tsx',
    '**/*.ts',
    '**/*.js',
    '**/*.jsx'
  ];
  
  let totalFiles = 0;
  let resolvedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        resolvedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${totalFiles} files, resolved conflicts in ${resolvedFiles} files`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { resolveConflicts, processFile };