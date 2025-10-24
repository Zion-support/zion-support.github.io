const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by keeping the HEAD version
function resolveMergeConflicts(content) {
  // Remove merge conflict markers and keep HEAD version
  let resolved = content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1')
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+\n/g, '$1');
  
  // Clean up any remaining merge conflict markers
  resolved = resolved
    .replace(/<<<<<<< HEAD\n/g, '')
    .replace(/=======\n/g, '')
    .replace(/>>>>>>> [a-f0-9]+\n/g, '');
  
  return resolved;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD')) {
      console.log(`Processing: ${filePath}`);
      const resolved = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolved, 'utf8');
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other directories we don't want to process
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          processedCount += processDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Process TypeScript, JavaScript, and JSX files
        if (/\.(tsx?|jsx?)$/.test(item)) {
          if (processFile(fullPath)) {
            processedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with merge conflicts.`);

// Also process src directory if it exists
if (fs.existsSync('./src')) {
  const srcProcessedCount = processDirectory('./src');
  console.log(`Processed ${srcProcessedCount} files in src directory.`);
}

console.log('Merge conflict resolution completed!');
