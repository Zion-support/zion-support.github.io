const fs = require('fs');
const path = require('path');

console.log('🧹 Starting Final Cleanup...');

// Function to clean merge conflict markers
function cleanMergeConflicts(content) {
  return content
    .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '')
    .replace(/^<<<<<<< [^\n]+$/gm, '')
    .replace(/^=======$/gm, '')
    .replace(/^>>>>>>> [^\n]+$/gm, '');
}

// Function to clean common syntax errors
function cleanSyntaxErrors(content) {
  return content
    // Remove invalid characters at start of files
    .replace(/^[^\w\s<]/gm, '')
    // Fix common parsing issues
    .replace(/export\s+default\s+export\s+default/g, 'export default')
    .replace(/import\s+import/g, 'import')
    .replace(/const\s+const/g, 'const')
    .replace(/let\s+let/g, 'let')
    .replace(/var\s+var/g, 'var')
    // Fix unterminated strings
    .replace(/"[^"]*$/gm, '"')
    .replace(/'[^']*$/gm, "'")
    // Fix unterminated regex
    .replace(/\/[^\/]*$/gm, '/')
    // Remove invalid characters
    .replace(/[^\x20-\x7E\n\r\t]/g, '')
    // Fix common JSX issues
    .replace(/<[^>]*$/gm, '')
    // Fix common TypeScript issues
    .replace(/:\s*[^=,;{}()[\]]*$/gm, ': any')
    // Remove empty lines with only special characters
    .replace(/^[^\w\s]*$/gm, '');
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let cleaned = cleanMergeConflicts(content);
    cleaned = cleanSyntaxErrors(cleaned);
    
<<<<<<< HEAD
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findConflictedFiles(filePath, conflictedFiles);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
  content = content.replace(/>>>>>>> origin\/[^\n]+\n?/g, '');
  content = content.replace(/>>>>>>> cursor\/[^\n]+\n?/g, '');
  
  // Clean up any remaining artifacts
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  // Remove any remaining conflict markers
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other problematic directories
        if (!['node_modules', '.git', '.next', 'dist', 'build', 'coverage'].includes(item)) {
          processedCount += processDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Process specific file types
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx', '.json'].includes(ext)) {
          if (processFile(fullPath)) {
            processedCount++;
          }
        }
      }
    }
  } catch (error) {
    console.log(`Error processing directory ${dirPath}: ${error.message}`);
  }
  
  return processedCount;
}

// Main execution
const startTime = Date.now();
const processedFiles = processDirectory('/workspace');
const endTime = Date.now();

console.log(`✅ Final cleanup completed!`);
console.log(`📁 Processed ${processedFiles} files`);
console.log(`⏱️  Took ${endTime - startTime}ms`);
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
