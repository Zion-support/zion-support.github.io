<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");const CONSOLE_PATTERNS = [/console\.log\([^)]*\);?/g, /console\.debug\([^)]*\);?/g, /console\.info\([^)]*\);?/g, /console\.warn\([^)]*\);?/g, / Keep console.error for debugging];"const EXCLUDE_PATTERNS = ["node_modules"," ".next"," "dist"," "build"," "coverage"," "scripts"," "*.test.*"," "*.spec.*"];function shouldProcessFile(filePath) { return !EXCLUDE_PATTERNS.some(pattern => {" if (pattern.includes("*")) {" return filePath.includes(pattern.replace("*", ""))} return filePath.includes(pattern)})}function removeConsoleStatements(content) { let modifiedContent = content; let removedCount = 0; CONSOLE_PATTERNS.forEach(pattern => { const matches = modifiedContent.match(pattern); if (matches) { removedCount += matches.length;" modifiedContent = modifiedContent.replace(pattern, "")} }); return { content: modifiedContent, removedCount }}function processFile(filePath) { try {" const content = fs.readFileSync(filePath, "utf8");" const { content: newContent, removedCount } = removeConsoleStatements(content); if (removedCount > 0) {" fs.writeFileSync(filePath, newContent, "utf8"); console.log(` ${filePath}: Removed ${removedCount} console statements`); return removedCount} return 0} catch (error) {` console.error(` Error processing ${filePath}:`, error.message); return 0}}"function getAllFiles(dir, extensions = [".js", ".jsx", ".ts", ".tsx"]) { let results = []; const list = fs.readdirSync(dir); list.forEach(file => { const filePath = path.join(dir, file); const stat = fs.statSync(filePath); if (stat && stat.isDirectory()) { results = results.concat(getAllFiles(filePath, extensions)); } else { const ext = path.extname(file); if (extensions.includes(ext)) { results.push(filePath); } } }); return results;}function main() {" const srcDir = path.join(process.cwd(), "src");" const pagesDir = path.join(process.cwd(), "pages");` const patterns = [`${srcDir}*.{js,jsx,ts,tsx}`,` `${pagesDir}*.{js,jsx,ts,tsx}` ]; let totalRemoved = 0; let filesProcessed = 0; / Process src directory if it exists if (fs.existsSync(srcDir)) { const files = getAllFiles(srcDir); for (const file of files) { if (shouldProcessFile(file)) { const removed = processFile(file); totalRemoved += removed; filesProcessed++; } } } / Process pages directory if it exists if (fs.existsSync(pagesDir)) { const files = getAllFiles(pagesDir); for (const file of files) { if (shouldProcessFile(file)) { const removed = processFile(file); totalRemoved += removed; filesProcessed++; } } }" console.log("\n Summary: ");` console.log(` Files processed: ${filesProcessed}`);"` console.log(` Console statements removed: ${totalRemoved}`); if (totalRemoved > 0) {` console.log(`\n Production build optimized!`); } else {` console.log(`\n No console statements found to remove.`); }}if (require.main === module) { main();}module.exports = { removeConsoleStatements, processFile };""`"`
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
#!/usr/bin/env node
const fs = require('fs');
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
  // Keep console.error for debugging
];
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
      return removedCount}
    return 0} catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return 0}
}
<<<<<<< HEAD
async function main() {
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
function getAllFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, extensions));
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  return results;
}
function main() {
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
<<<<<<< HEAD
        filesProcessed++;
      }
    }
  }
  // Process pages directory if it exists
  if (fs.existsSync(pagesDir)) {
    const files = getAllFiles(pagesDir);
    for (const file of files) {
      if (shouldProcessFile(file)) {
        const removed = processFile(file);
        totalRemoved += removed;
        filesProcessed++;
      }
    }
  }
  if (totalRemoved > 0) {
  } else {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
        filesProcessed++}
    }
  }
  console.log("\n📊 Summary: ");
  console.log(`   Files processed: ${filesProcessed}`);
  console.log(`   Console statements "removed": ${totalRemoved}`);
  if (totalRemoved > 0) {
<<<<<<< HEAD
    console.log("\n✨ Production build optimized!")} else {
    console.log("\n✨ No console statements found to remove.")}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
    console.log(`\n✨ Production build optimized!`);
  } else {
    console.log(`\n✨ No console statements found to remove.`);
  }
}
if (require.main === module) {
  main().catch(console.error)}
<<<<<<< HEAD
module.exports = { removeConsoleStatements, processFile };
=======

module.exports = { removeConsoleStatements, processFile };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
