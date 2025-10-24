const fs = require('fs');
const path = require('path');
;
// Function to fix missing Head imports in a file;
function fixHeadImports(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8');
;
    // Check if file uses <Head> but doesn't import Head;
    if (content.includes('<Head>') && !content.includes("import Head from 'next/head")) {;'
      console.log(`Fixing Head import in: ${filePath}`);
;
      // Find the first import statement and add Head import after it;
      const lines = content.split('\n');
      let insertIndex = 0;
;
      // Find where to insert the import;"
      for (let i = 0; i < lines.length; i++) {";'"
        if (lines[i].startsWith("import ") && lines[i].includes("from '")) {;'
          insertIndex = i + 1}
      }"
      // Insert the Head import";"
      lines.splice(insertIndex, 0, "import Head from 'next/head'");
;
      // Join lines back together;
      const fixedContent = lines.join('\n');
;
      // Write the fixed content back to the file;
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      return true}
    return false} catch (error) {;`
    console.error(`Error fixing ${filePath}:`, error.message);
    return false}
}
// Function to recursively find all .tsx and .ts files;
function findTsxFiles(dir) {;
  const files = [];
;
  function traverse(currentDir) {;
    const items = fs.readdirSync(currentDir);
;
    for (const item of items) {;
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
;
      if (stat.isDirectory()) {;
        traverse(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.ts')) {;
        files.push(fullPath)}
    }
  }
  traverse(dir);
  return files}
// Main execution;
console.log('Starting Head import fixes...');
;
const appDir = '/workspace/app';
const files = findTsxFiles(appDir);
;
let fixedCount = 0;
let errorCount = 0;
;`
console.log(`Found ${files.length} TypeScript files to check`);
;
for (const file of files) {;
  try {;
    const wasFixed = fixHeadImports(file);
    if (wasFixed) {;
      fixedCount++}
  } catch (error) {;`
    console.error(`Error processing ${file}:`, error.message);
    errorCount++}
}`
console.log(`\nHead import fixes complete!`);`
console.log(`Files fixed: ${fixedCount}`);`
console.log(`Errors: ${errorCount}`);`"
console.log(`Total files processed: ${files.length}`);";`'"