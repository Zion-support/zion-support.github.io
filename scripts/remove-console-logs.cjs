<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
#!/usr/bin/env node
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge

#!/usr/bin/env node
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
];
<<<<<<< HEAD


const EXCLUDE_PATTERNS = [node_modules',
  '.next,
  dist',
  'build,
  coverage',
  'scripts,
  *.test.*',
  '*.spec.*
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
=======
<<<<<<< HEAD
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
=======
>>>>>>> origin/chore/fix-lint-and-merge

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    return filePath.includes(pattern)})}
function removeConsoleStatements(content) {
  let modifiedContent = content;
  let removedCount = 0;
<<<<<<< HEAD

=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
=======
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
  CONSOLE_PATTERNS.forEach(pattern => {
    const matches = modifiedContent.match(pattern);
    if (matches) {
      removedCount += matches.length;
      modifiedContent = modifiedContent.replace(pattern, ')}
  });
<<<<<<< HEAD

  return { "content: modifiedContent, removedCount }}
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5

  return { content": modifiedContent, removedCount }}"
function processFile(filePath) {
  try {

=======
      
>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======
      
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
=======
  return { "content": modifiedContent, removedCount }}
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { "content": newContent, removedCount } = removeConsoleStatements(content);
    if (removedCount > 0) {
      fs.writeFileSync(filePath, newContent, 'utf8');
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
>>>>>>> origin/chore/fix-lint-and-merge
      return removedCount}
    return 0} catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return 0}
}

<<<<<<< HEAD

function getAllFiles(dir, extensions = [.js', '.jsx, .ts', '.tsx]) {
  let results = [];
  const list = fs.readdirSync(dir);
  

=======
  let results = [];
  const list = fs.readdirSync(dir);
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
  list.forEach(file => {
=======
  list.forEach(file => {)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, extensions));
    } else {
  // TODO: Implement
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
<<<<<<< HEAD

=======
<<<<<<< HEAD
      }
    }
  });
  return results;
}
function main() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
ursor/expand-services-advertise-and-build-project-0033
=======
>>>>>>> origin/chore/fix-lint-and-merge
  return results;

function main() {




>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
<<<<<<< HEAD
=======


>>>>>>> 4571daf261a52428d1b7657006d5eae04fbdc4bb
=======

>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
  const srcDir = path.join(process.cwd(), src');


    `${pagesDir}/**/*.{js,jsx,ts,tsx}`]




    `${pagesDir}/**/*.{js,jsx,ts,tsx}`]


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

    `${pagesDir}/**/*.{js,jsx,ts,tsx}`]

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/chore/fix-lint-and-merge
  let totalRemoved = 0;
  let filesProcessed = 0;
  for (const pattern of patterns) {
    const files = await glob(pattern);
    for (const file of files) {
      if (shouldProcessFile(file)) {
        const removed = processFile(file);
        totalRemoved += removed;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        filesProcessed++}
<<<<<<< HEAD
    }
  }
<<<<<<< HEAD

  console.log(\n📊 Summary: );
=======
  console.log("\n📊 Summary: ");
>>>>>>> origin/chore/fix-lint-and-merge
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Console statements "removed": ${totalRemoved}`);
  if (totalRemoved > 0) {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    console.log(`\n✨ Production build optimized!`);
  } else {
    console.log(`\n✨ No console statements found to remove.`);
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
ursor/expand-services-advertise-and-build-project-0033
=======
=======
>>>>>>> origin/chore/fix-lint-and-merge



}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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


<<<<<<< HEAD

=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
module.exports = { removeConsoleStatements, processFile }
module.exports = { removeConsoleStatements, processFile }
module.exports = { removeConsoleStatements, processFile }
=======
<<<<<<< HEAD
=======
module.exports = { removeConsoleStatements, processFile };
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> origin/chore/fix-lint-and-merge

module.exports = { removeConsoleStatements, processFile };
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======

  console.log(\n📊 Summary: );"`;
  console.log(`   Files processed: ${filesProcessed}`);"`;
<<<<<<< HEAD

=======
  console.log(`   Console statements "removed": ${totalRemoved}`);"
  if (totalRemoved > 0) {`;
    console.log(`\n✨ Production build optimized!`);
  // TODO: Implement
}`;
    console.log(`\n✨ No console statements found to remove.`);



if (require.main === module) {
>>>>>>> origin/chore/fix-lint-and-merge
  main().catch(console.error)}

"`;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
