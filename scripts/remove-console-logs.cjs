
#!/usr/bin/env node

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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
const EXCLUDE_PATTERNS = ['node_modules',
  '.next',
  'dist',
  'build',
  'coverage',
  'scripts',
  '*.test.*',
  '*.spec.*'
];

function shouldProcessFile(filePath) {
  return !EXCLUDE_PATTERNS.some(pattern => {
    if (pattern.includes('*')) {
      return filePath.includes(pattern.replace('*', ''))}
    return filePath.includes(pattern)})}

function removeConsoleStatements(content) {
  let modifiedContent = content;
  let removedCount = 0;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
  CONSOLE_PATTERNS.forEach(pattern => {
    const matches = modifiedContent.match(pattern);
    if (matches) {
      removedCount += matches.length;
      modifiedContent = modifiedContent.replace(pattern, '')}
  });

  return { "content": modifiedContent, removedCount }}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { "content": newContent, removedCount } = removeConsoleStatements(content);
    
    if (removedCount > 0) {
      fs.writeFileSync(filePath, newContent, 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD
=======

  CONSOLE_PATTERNS.forEach(pattern => {)
    const matches = modifiedContent.match(pattern);
    if (matches) {
      removedCount += matches.length;

  return { "content": modifiedContent, removedCount }}"
function processFile(filePath) {
  try {
  // TODO: Implement
}"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
      
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
      
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
      return removedCount}
    
    return 0} catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return 0}
}

<<<<<<< HEAD
<<<<<<< HEAD
  let results = [];
  const list = fs.readdirSync(dir);
<<<<<<< HEAD
=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
function getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
<<<<<<< HEAD
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, extensions));
    } else {
  // TODO: Implement
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

function main() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
ursor/expand-services-advertise-and-build-project-0033
=======
  return results;

function main() {




>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======


>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
  const srcDir = path.join(process.cwd(), 'src');
  const pagesDir = path.join(process.cwd(), 'pages');
  
  const patterns = [`${srcDir}/**/*.{js,jsx,ts,tsx}`,
    `${pagesDir}/**/*.{js,jsx,ts,tsx}`
  ];
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const pagesDir = path.join(process.cwd(), 'pages');`;
  const patterns = [`${srcDir}/**/*.{js,jsx,ts,tsx}`,`;

    `${pagesDir}/**/*.{js,jsx,ts,tsx}`]

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

  console.log("\n📊 Summary: ");
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Console statements "removed": ${totalRemoved}`);
  
  if (totalRemoved > 0) {

    console.log(`\n✨ Production build optimized!`);
  } else {
    console.log(`\n✨ No console statements found to remove.`);
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
ursor/expand-services-advertise-and-build-project-0033
=======
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
}

if (require.main === module) {
  main().catch(console.error)}

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
module.exports = { removeConsoleStatements, processFile };

  console.log("\n📊 Summary: ");"`;
  console.log(`   Files processed: ${filesProcessed}`);"`;
  console.log(`   Console statements "removed": ${totalRemoved}`);"
  if (totalRemoved > 0) {`;
    console.log(`\n✨ Production build optimized!`);
  // TODO: Implement
}`;
    console.log(`\n✨ No console statements found to remove.`);

if (require.main === module) {
  main().catch(console.error)}

"`;
