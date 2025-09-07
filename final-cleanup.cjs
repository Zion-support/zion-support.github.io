<<<<<<< HEAD
const fs = require('fs');
const path = require(path');


=======
console.log('🧹 Starting Final Cleanup...);

// Function to clean merge conflict markers
function cleanMergeConflicts(content) {
  return content
    .replace(/[\s\S]*?[\s\S]*?
    .replace(/
=======

<<<<<<< HEAD
<<<<<<< HEAD
    .replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?[^\n]+/g, '')
    .replace(/^<<<<<<< [^\n]+$/gm, '')
    .replace(/^=======$/gm, '')
    .replace(/^[^\n]+$/gm, '');
=======
    .replace(/<<<<<<< [^\n]+[\s\S]*?
    .replace(/^<<<<<<< [^\n]+$/gm, '')
>>>>>>> origin/chore/fix-lint-and-merge
    .replace(/^
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

// Function to clean common syntax errors;)
function cleanSyntaxErrors(content) {
<<<<<<< HEAD
  return content
    // Remove invalid characters at start of files
    .replace(/^[^\w\s<]/gm, ')
    // Fix common parsing issues
    .replace(/export\s+default\s+export\s+default/g, 'export default)
    .replace(/import\s+import/g, import')
    .replace(/const\s+const/g, 'const)
    .replace(/let\s+let/g, let')
    .replace(/var\s+var/g, 'var)
    // Fix unterminated strings
    .replace(/"[^]*$/gm, ')
    .replace(/'[^]*$/gm, "")
    // Fix unterminated regex
    .replace(/\/[^\/]*$/gm, '/')
    // Remove invalid characters
    .replace(/[^\x20-\x7E\n\r\t]/g, )
    // Fix common JSX issues
    .replace(/<[^>]*$/gm, '')
    // Fix common TypeScript issues
    .replace(/:\s*[^=,{}()[\]]*$/gm, : any)
    // Remove empty lines with only special characters
    .replace(/^[^\w\s]*$/gm, '');
}
=======
  return content;
    // Remove invalid characters at start of files;
    .replace(/^[^\w\s<]/gm, )
    // Fix common parsing issues;
    .replace(/export\s+default\s+export\s+default/g, 'export default')
    .replace(/import\s+import/g, 'import')
    .replace(/const\s+const/g, 'const')
    .replace(/let\s+let/g, 'let')
    .replace(/var\s+var/g, 'var')
    // Fix unterminated strings;
    .replace(/"[^"]*$/gm, '"')
    .replace(/'[^']*$/gm, "'")"
    // Fix unterminated regex;"
    .replace(/\/[^\/]*$/gm, '/')
    // Remove invalid characters;
    .replace(/[^\x20-\x7E\n\r\t]/g, )
    // Fix common JSX issues;
    .replace(/<[^>]*$/gm, )
    // Fix common TypeScript issues;
    .replace(/:\s*[^=,;{}()[\]]*$/gm, ': any')
    // Remove empty lines with only special characters;
    .replace(/^[^\w\s]*$/gm, );
>>>>>>> origin/chore/fix-lint-and-merge

// Function to process a file;
function processFile(filePath) {
  try {
<<<<<<< HEAD
    const content = fs.readFileSync(filePath, utf8);
    let cleaned = cleanMergeConflicts(content);
    cleaned = cleanSyntaxErrors(cleaned);


  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

  content = content.replace(/
  content = content.replace(/

=======
  // TODO: Implement
    const content = fs.readFileSync(filePath, 'utf8');
    let cleaned = cleanMergeConflicts(content);
    cleaned = cleanSyntaxErrors(cleaned);
<<<<<<< HEAD
<<<<<<< HEAD
    
    if (cleaned !== content) {
      fs.writeFileSync(filePath, cleaned);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to recursively process directory
function processDirectory(dirPath) {
  let processedCount = 0;
// Function to recursively find all files with merge conflicts
function findConflictedFiles(dir, conflictedFiles = []) {
  const files = fs.readdirSync(dir);

>>>>>>> origin/chore/fix-lint-and-merge
  
  for (const file of files) {
    
<<<<<<< HEAD

  
  // Clean up any remaining artifacts
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  // Remove any remaining conflict markers


=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
=======
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findConflictedFiles(filePath, conflictedFiles);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/[a-f0-9]+\n?/g, '');
  content = content.replace(/origin\/[^\n]+\n?/g, '');
  content = content.replace(/ursor\/[^\n]+\n?/g, '');
=======
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

  content = content.replace(/
<<<<<<< HEAD
  content = content.replace(/
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
  
  // Clean up any remaining artifacts
=======
  // Clean up any remaining artifacts;)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  // Remove any remaining conflict markers;

>>>>>>> origin/chore/fix-lint-and-merge
