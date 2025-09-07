<<<<<<< HEAD
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const fs = require('fs');
const path = require('path');
function fixSyntaxErrors(filePath) {
  try {
  // TODO: Implement
}
<<<<<<< HEAD
    let content = fs.readFileSync(filePath, 'utf8');
=======
    let content = fs.readFileSync(filePath,utf8);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    let originalContent = content;
    
    // Remove merge conflict markers;
    content = content.replace(/([\s\S]*?)
    content = content.replace(//g, );
    content = content.replace(/
    
    // Fix common syntax issues;)
<<<<<<< HEAD
    content = content.replace(/(\w+)\s*(\w+)\s*:/g, '$1: $2:');
    content = content.replace(/(\w+):\s*(\w+)\s*:/g, '$1: $2:');
    // Clean up extra whitespace;
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors: in: ${filePath}`);
=======
    content = content.replace(/(\w+)\s*(\w+)\s*:/g,$1: $2: );
    content = content.replace(/(\w+):\s*(\w+)\s*:/g,$1: $2: );
    // Clean up extra whitespace;
    content = content.replace(/\n\s*\n\s*\n/g,\n\n');
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content,utf8);
      console.log(`Fixed syntax errors: in: ${filePath});
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return true;
    
    return false;
  } catch (error) {`;
    console.error(`Error processing ${filePath}:`, error.message);

function findFilesWithErrors(dir) {
  const files = [];
<<<<<<< HEAD
  const extensions = ['.js', '.jsx', '.ts', '.tsx', '.cjs', '.mjs'];
=======
  const extensions = [.js,.jsx,.ts,.tsx,.cjs,.mjs];
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
<<<<<<< HEAD
        if (!['node_modules', '.git', '.next', 'dist', 'build', 'backup-merge-conflicts'].includes(item)) {
=======
        if (![node_modules,.git,.next,dist,build,backup-merge-conflicts].includes(item)) {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
          traverse(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(fullPath);
        if (extensions.includes(ext)) {
          files.push(fullPath);
  
  traverse(dir);
  return files;

// Main execution;
<<<<<<< HEAD
console.log('🔍 Scanning for files with syntax errors...');
=======
console.log('🔍 Scanning for files with syntax errors...);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const files = findFilesWithErrors(process.cwd());
`;
console.log(`Found ${files.length} files to check`);

let fixedCount = 0;
for (const file of files) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
<<<<<<< HEAD
console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
console.log('🎉 Syntax error fixing complete!');`;
=======
  }
}

console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
console.log('🎉 Syntax error fixing complete!);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
