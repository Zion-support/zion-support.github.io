import fs from 'fs';
import { glob } from 'glob';

// Function to resolve merge conflicts by accepting incoming changes
function resolveMergeConflicts(content) {
  let resolved = content;
  
  // Pattern to match conflict blocks and keep only the incoming changes (our fixes)
  const conflictPattern = /<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g;
  resolved = resolved.replace(conflictPattern, '$1');
  
  // Clean up any remaining conflict markers
  resolved = resolved.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
  resolved = resolved.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
  
  return resolved;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
      const resolved = resolveMergeConflicts(content);
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
    'app/**/*.tsx',
    'app/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts',
    'api/**/*.js'
  ];
  
  let totalResolved = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { ignore: ['node_modules/**', 'dist/**'] });
    
    for (const file of files) {
      if (processFile(file)) {
        totalResolved++;
      }
    }
  }
  
  console.log(`\nTotal files with conflicts resolved: ${totalResolved}`);
}

main();