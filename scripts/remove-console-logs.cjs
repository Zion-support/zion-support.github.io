#!/usr/bin/env node

const fs = require('fs');
<<<<<<< HEAD
const path = require('path');
const { glob } = require('glob');

/**
 * Script to remove console.log statements from production builds
 * This helps improve performance and security
 */

const CONSOLE_PATTERNS = [/console\.log\([^)]*\);?/g,
  /console\.debug\([^)]*\);?/g,
  /console\.info\([^)]*\);?/g,
  /console\.warn\([^)]*\);?/g,
  // Keep console.error for debugging;
];

const EXCLUDE_PATTERNS = ['node_modules',
  '.next',
  'dist',
  'build',
  'coverage',
  'scripts',
  '*.test.*',
  '*.spec.*'
>>>>>>> origin/chore/fix-lint-and-merge
];

function shouldProcessFile(filePath) {
  return !EXCLUDE_PATTERNS.some(pattern => {
<<<<<<< HEAD
    if (pattern.includes(*')) {
      return filePath.includes(pattern.replace('*, '))}
    return filePath.includes(pattern)})}
=======
    if (pattern.includes('*')) {
      return filePath.includes(pattern.replace('*', ''))}
<<<<<<< HEAD
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
<<<<<<< HEAD
ursor/expand-services-advertise-and-build-project-0033
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
      }
    }
  });
  
  return results;
}

function main() {
<<<<<<< HEAD






  const srcDir = path.join(process.cwd(), 'src');
  const pagesDir = path.join(process.cwd(), 'pages');
  
  const patterns = [`${srcDir}/**/*.{js,jsx,ts,tsx}`,
    `${pagesDir}/**/*.{js,jsx,ts,tsx}`
  ];

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
ursor/expand-services-advertise-and-build-project-0033




}

module.exports = { removeConsoleStatements, processFile };

    `${pagesDir}/**/*.{js,jsx,ts,tsx}`]


module.exports = { removeConsoleStatements, processFile };



<<<<<<< HEAD
=======

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
=======

>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
=======
  const srcDir = path.join(process.cwd(), 'src');
<<<<<<< HEAD
  const pagesDir = path.join(process.cwd(), 'pages');
  const patterns = [`${srcDir}/**/*.{js,jsx,ts,tsx}`,
    `${pagesDir}/**/*.{js,jsx,ts,tsx}`
  ];
=======
  const pagesDir = path.join(process.cwd(), 'pages');`;
  const patterns = [`${srcDir}/**/*.{js,jsx,ts,tsx}`,`;
>>>>>>> merged-prs-20250907-203621


<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  let totalRemoved = 0;
  let filesProcessed = 0;
  for (const pattern of patterns) {
    const files = await glob(pattern);
    for (const file of files) {
      if (shouldProcessFile(file)) {
        const removed = processFile(file);
        totalRemoved += removed;
<<<<<<< HEAD
        filesProcessed++}
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        filesProcessed++}
<<<<<<< HEAD
    }
<<<<<<< HEAD

  console.log("\n📊 Summary: ");
=======
  }
<<<<<<< HEAD

  console.log(\n📊 Summary: );
=======
  console.log("\n📊 Summary: ");
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Console statements "removed": ${totalRemoved}`);
  if (totalRemoved > 0) {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> merged-prs-20250907-203621
    console.log(`\n✨ Production build optimized!`);
  } else {
    console.log(`\n✨ No console statements found to remove.`);
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
ursor/expand-services-advertise-and-build-project-0033
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> merged-prs-20250907-203621

}
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


}

if (require.main === module) {
  main().catch(console.error)}


module.exports = { removeConsoleStatements, processFile };
<<<<<<< HEAD
=======

module.exports = { removeConsoleStatements, processFile };


  console.log("\n📊 Summary: ");"`;
  console.log(`   Files processed: ${filesProcessed}`);"`;
    console.log(`\n✨ No console statements found to remove.`)
  if($2) {
=======
<<<<<<< HEAD

=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
=======
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
>>>>>>> origin/chore/fix-lint-and-merge
}

if (require.main === module) {
  main().catch(console.error)}

module.exports = { removeConsoleStatements, processFile };
