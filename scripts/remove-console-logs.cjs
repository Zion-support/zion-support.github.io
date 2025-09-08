#!/usr/bin/env node

const fs = require('fs');
    if (pattern.includes('*')) {
      return filePath.includes(pattern.replace('*', ''))}
>>>>>>> merged-prs-20250907-203621
    return filePath.includes(pattern)})}

function removeConsoleStatements(content) {
  let modifiedContent = content;
  let removedCount = 0;

  CONSOLE_PATTERNS.forEach(pattern => {
    const matches = modifiedContent.match(pattern);
    if (matches) {
      removedCount += matches.length;
      modifiedContent = modifiedContent.replace(pattern, '')}
  });

  return { "content": modifiedContent, removedCount }}

function processFile(filePath) {
  try {
>>>>>>> merged-prs-20250907-203621
    const content = fs.readFileSync(filePath, 'utf8');
    const { "content": newContent, removedCount } = removeConsoleStatements(content);
    
    if (removedCount > 0) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      
      return removedCount}
    
    return 0} catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return 0}
}

function getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
=======
  list.forEach(file => {)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, extensions))
    } else {
  // TODO: Implement
      const ext = path.extname(file)
      if (extensions.includes(ext)) {
        results.push(filePath);
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
=======
  const srcDir = path.join(process.cwd(), 'src');
  const pagesDir = path.join(process.cwd(), 'pages');`;
  const patterns = [`${srcDir}/**/*.{js,jsx,ts,tsx}`,`;


  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Console statements "removed": ${totalRemoved}`);
  if (totalRemoved > 0) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    console.log(`\n✨ Production build optimized!`);
  } else {
    console.log(`\n✨ No console statements found to remove.`);
  }

}

module.exports = { removeConsoleStatements, processFile };


  console.log("\n📊 Summary: ");"`;
  console.log(`   Files processed: ${filesProcessed}`);"`;
    console.log(`\n✨ No console statements found to remove.`)
  if($2) {
=======
>>>>>>> origin/chore/fix-lint-and-merge
}

if (require.main === module) {
  main().catch(console.error)}

module.exports = { removeConsoleStatements, processFile };
