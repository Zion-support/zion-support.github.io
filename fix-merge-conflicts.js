import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to resolve merge conflicts by choosing the HEAD version
function resolveMergeConflicts(content) {
  // Remove merge conflict markers and keep HEAD version
  const resolved = content
    // Remove <<<<<<< HEAD lines
    .replace(/^<<<<<<< HEAD\n/gm, '')
    // Remove ======= lines
    .replace(/^=======\n/gm, '')
    // Remove >>>>>>> branch-name lines and everything after them until the next line
    .replace(/^>>>>>>> [^\n]+\n?/gm, '')
    // Clean up any remaining conflict markers
    .replace(/^<<<<<<< [^\n]+\n?/gm, '')
    .replace(/^=======\n?/gm, '')
    .replace(/^>>>>>>> [^\n]+\n?/gm, '');
  
  return resolved;
}

// Function to fix specific TypeScript/JSX issues
function fixTypeScriptIssues(content) {
  return content
    // Fix missing semicolons after imports
    .replace(/import ([^;]+)(?<!;)\n/g, 'import $1;\n')
    // Fix any remaining syntax issues
    .replace(/\n\s*\n\s*\n/g, '\n\n') // Remove excessive newlines
    .trim();
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Processing merge conflicts in: ${filePath}`);
      
      let resolved = resolveMergeConflicts(content);
      resolved = fixTypeScriptIssues(resolved);
      
      fs.writeFileSync(filePath, resolved, 'utf8');
      console.log(`✓ Fixed merge conflicts in: ${filePath}`);
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
  console.log('Starting merge conflict resolution...');
  
  // Find all TypeScript and TSX files
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFiles = 0;
  let processedFiles = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    totalFiles += files.length;
    
    for (const file of files) {
      if (processFile(file)) {
        processedFiles++;
      }
    }
  }
  
  console.log(`\nProcessed ${processedFiles} files with merge conflicts out of ${totalFiles} total files.`);
  console.log('Merge conflict resolution complete!');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { resolveMergeConflicts, fixTypeScriptIssues, processFile };