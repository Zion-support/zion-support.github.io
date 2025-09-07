

#!/usr/bin/env node

const fs = require('fs);
const path = require(path');
const { glob } = require('glob);

/**
 * Script to remove console.log statements from production builds;
 * This helps improve performance and security;
 */

const CONSOLE_PATTERNS = [/console\.log\([^)]*\);?/g,
  /console\.debug\([^)]*\);?/g,
  /console\.info\([^)]*\);?/g,
  /console\.warn\([^)]*\);?/g,
  // Keep console.error for debugging;
];

=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
const EXCLUDE_PATTERNS = [node_modules',
  '.next,
  dist',
  'build,
  coverage',
  'scripts,
  *.test.*',
  '*.spec.*
];

function shouldProcessFile(filePath) {
  return !EXCLUDE_PATTERNS.some(pattern => {
    if (pattern.includes(*')) {
      return filePath.includes(pattern.replace('*, '))}
    return filePath.includes(pattern)})}

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
function removeConsoleStatements(content) {
  let modifiedContent = content;
  let removedCount = 0;

=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
  CONSOLE_PATTERNS.forEach(pattern => {
    const matches = modifiedContent.match(pattern);
    if (matches) {
      removedCount += matches.length;
      modifiedContent = modifiedContent.replace(pattern, ')}
  });

  return { "content: modifiedContent, removedCount }}
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5

  return { content": modifiedContent, removedCount }}"
function processFile(filePath) {
  try {

=======
      
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
      
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
      return removedCount}
    
    return 0} catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return 0}
}


function getAllFiles(dir, extensions = [.js', '.jsx, .ts', '.tsx]) {
  let results = [];
  const list = fs.readdirSync(dir);
  

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, extensions));
    } else {
  // TODO: Implement
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);

  return results;

function main() {
ursor/expand-services-advertise-and-build-project-0033







>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
  const srcDir = path.join(process.cwd(), src');


    `${pagesDir}/**/*.{js,jsx,ts,tsx}`]


=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
  let totalRemoved = 0;
  let filesProcessed = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern);
    
    for (const file of files) {
      if (shouldProcessFile(file)) {
        const removed = processFile(file);
        totalRemoved += removed;

        filesProcessed++}
    }
  }

  console.log(\n📊 Summary: );
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Console statements "removed": ${totalRemoved}`);
  
  if (totalRemoved > 0) {

    console.log(`\n✨ Production build optimized!`);
  } else {
    console.log(`\n✨ No console statements found to remove.`);
  }



}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
}

if (require.main === module) {
  main().catch(console.error)}
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5


=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
module.exports = { removeConsoleStatements, processFile }
module.exports = { removeConsoleStatements, processFile }
module.exports = { removeConsoleStatements, processFile }


  console.log(\n📊 Summary: );"`;
  console.log(`   Files processed: ${filesProcessed}`);"`;

  main().catch(console.error)}

"`;
