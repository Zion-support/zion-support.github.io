<<<<<<< HEAD
#!/usr/bin/env node;
=======
#!/usr/bin/env node
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
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
<<<<<<< HEAD

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
    if (pattern.includes('*')) {
      return filePath.includes(pattern.replace('*', ))}
=======
'
const EXCLUDE_PATTERNS = [node_modules,.next,dist,build,coverage,scripts,*.test.*,*.spec.*]
];

function shouldProcessFile(filePath) {
  return !EXCLUDE_PATTERNS.some(pattern => {)
    if (pattern.includes('*)) {
      return filePath.includes(pattern.replace('*, ))}
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
    return filePath.includes(pattern)})}

function removeConsoleStatements(content) {
  let modifiedContent = content;
  let removedCount = 0;

  CONSOLE_PATTERNS.forEach(pattern => {)
    const matches = modifiedContent.match(pattern);
    if (matches) {
      removedCount += matches.length;
<<<<<<< HEAD
      modifiedContent = modifiedContent.replace(pattern, )}
  });

=======
      modifiedContent = modifiedContent.replace(pattern, )}});
'
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
  return { "content": modifiedContent, removedCount }}"
function processFile(filePath) {
  try {
  // TODO: Implement
}"
<<<<<<< HEAD
    const content = fs.readFileSync(filePath, 'utf8');
    const { "content": newContent, removedCount } = removeConsoleStatements(content);"
    if (removedCount > 0) {"
      fs.writeFileSync(filePath, newContent, 'utf8');
=======
    const content = fs.readFileSync(filePath,utf8);
    const { "content": newContent, removedCount } = removeConsoleStatements(content);"
    if (removedCount > 0) {"
      fs.writeFileSync(filePath, newContent,utf8);
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
      return removedCount}
    
    return 0} catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return 0}
}
<<<<<<< HEAD

function getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
=======
'
function getAllFiles(dir, extensions = [.js,.jsx,.ts,.tsx]) {
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
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

function main() {
<<<<<<< HEAD:scripts/remove-console-logs.cjs
=======
<<<<<<< HEAD:backup-problematic-files/scripts/remove-console-logs.cjs
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/remove-console-logs.cjs
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58:backup-problematic-files/scripts/remove-console-logs.cjs
=======

>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4
  const srcDir = path.join(process.cwd(), 'src');
  const pagesDir = path.join(process.cwd(), 'pages');`;
  const patterns = [`${srcDir}/**/*.{js,jsx,ts,tsx}`,`;
=======
  const srcDir = path.join(process.cwd(),src');
  const pagesDir = path.join(process.cwd(),pages');
  const patterns = [`${srcDir}/**/*.{js,jsx,ts,tsx}`,
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a
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
=======
    }
  }
'
  console.log("\n📊 Summary: ");"
  console.log(`   Files processed: ${filesProcessed});"
  console.log(`   Console statements "removed": ${totalRemoved});"
  if (totalRemoved > 0) {
    console.log(`\n✨ Production build optimized!`);
  } else {
  // TODO: Implement
}
    console.log(`\n✨ No console statements found to remove.`);
  }
<<<<<<< HEAD
<<<<<<< HEAD:scripts/remove-console-logs.cjs
=======
<<<<<<< HEAD:backup-problematic-files/scripts/remove-console-logs.cjs
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-0033
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/remove-console-logs.cjs
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58:backup-problematic-files/scripts/remove-console-logs.cjs
}
=======
>>>>>>> b039dba24b91d7c4b1dfe2cb028125a66203882a

  console.log("\n📊 Summary: ");"`;
  console.log(`   Files processed: ${filesProcessed}`);"`;
  console.log(`   Console statements "removed": ${totalRemoved}`);"
  if (totalRemoved > 0) {`;
    console.log(`\n✨ Production build optimized!`);
  // TODO: Implement
}`;
    console.log(`\n✨ No console statements found to remove.`);

>>>>>>> 505950bb5f65df61118ac41ff4bde74d3caba4f4

if (require.main === module) {
  main().catch(console.error)}

"`;