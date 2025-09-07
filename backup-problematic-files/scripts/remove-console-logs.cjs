
const fs = require('fs');
<<<<<<< HEAD
const path = require(path');
const { glob } = require('glob);

=======
const path = require('path');
const { glob } = require('glob');
>>>>>>> origin/chore/fix-lint-and-merge
/**
 * Script to remove console.log statements from production builds;
 * This helps improve performance and security;
 */
const CONSOLE_PATTERNS = [/console\.log\([^)]*\);?/g,
  /console\.debug\([^)]*\);?/g,
  /console\.info\([^)]*\);?/g,
  /console\.warn\([^)]*\);?/g,
  // Keep console.error for debugging;

<<<<<<< HEAD
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
=======
];
const EXCLUDE_PATTERNS = ['node_modules',
  '.next',
  'dist',
  'build',
  'coverage',
  'scripts',
  '*.test.*',
  '*.spec.*]
function shouldProcessFile(filePath) {
  return !EXCLUDE_PATTERNS.some(pattern => {)
>>>>>>> origin/chore/fix-lint-and-merge

    return filePath.includes(pattern)})}
function removeConsoleStatements(content) {
  let modifiedContent = content;
  let removedCount = 0;
  CONSOLE_PATTERNS.forEach(pattern => {)
    const matches = modifiedContent.match(pattern);
    if (matches) {
      removedCount += matches.length;
<<<<<<< HEAD
      modifiedContent = modifiedContent.replace(pattern, ')}
  });

  return { "content: modifiedContent, removedCount }}
=======
>>>>>>> origin/chore/fix-lint-and-merge

  return { "content": modifiedContent, removedCount }}"
function processFile(filePath) {
  try {
<<<<<<< HEAD
    const content = fs.readFileSync(filePath, utf8');
    const { content": newContent, removedCount } = removeConsoleStatements(content);
    
    if (removedCount > 0) {
      fs.writeFileSync(filePath, newContent, 'utf8);
      
=======
  // TODO: Implement
}"

>>>>>>> origin/chore/fix-lint-and-merge
      return removedCount}
    return 0} catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return 0}
}
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======


<<<<<<< HEAD
function getAllFiles(dir, extensions = [.js', '.jsx, .ts', '.tsx]) {
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
function getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {)
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, extensions));
    } else {
  // TODO: Implement
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
  return results;
<<<<<<< HEAD
}

  const srcDir = path.join(process.cwd(), src');
=======
<<<<<<< HEAD
}

function main() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/remove-console-logs.cjs
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/remove-console-logs.cjs
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const srcDir = path.join(process.cwd(), 'src');
>>>>>>> origin/chore/fix-lint-and-merge
  const pagesDir = path.join(process.cwd(), 'pages');
  
  const patterns = [`${srcDir}/**/*.{js,jsx,ts,tsx}`,
    `${pagesDir}/**/*.{js,jsx,ts,tsx}`
  ];
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

    `${pagesDir}/**/*.{js,jsx,ts,tsx}`]
  let totalRemoved = 0;
  let filesProcessed = 0;
  for (const pattern of patterns) {
    const files = await glob(pattern);
    for (const file of files) {
      if (shouldProcessFile(file)) {
        const removed = processFile(file);
        totalRemoved += removed;
        filesProcessed++}

<<<<<<< HEAD
  console.log("\n📊 Summary: );
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Console statements removed": ${totalRemoved}`);
  
  if (totalRemoved > 0) {
=======
>>>>>>> origin/chore/fix-lint-and-merge
    console.log(`\n✨ Production build optimized!`);
  // TODO: Implement
}`;
    console.log(`\n✨ No console statements found to remove.`);
<<<<<<< HEAD
  }
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/remove-console-logs.cjs
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/remove-console-logs.cjs
}
if (require.main === module) {
  main().catch(console.error)}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
>>>>>>> origin/chore/fix-lint-and-merge
}

if (require.main === module) {
  main().catch(console.error)}

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
module.exports = { removeConsoleStatements, processFile };
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
if (require.main === module) {
  main().catch(console.error)}

module.exports = { removeConsoleStatements, processFile };
"`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
=======
module.exports = { removeConsoleStatements, processFile };
=======

module.exports = { removeConsoleStatements, processFile };
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
