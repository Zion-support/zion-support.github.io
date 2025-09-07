#!/usr/bin/env node

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
  // Keep console.error for debugging;
];

    return filePath.includes(pattern)})}
function removeConsoleStatements(content) {
  let modifiedContent = content;
  let removedCount = 0;

  CONSOLE_PATTERNS.forEach(pattern => {)
    const matches = modifiedContent.match(pattern);
    if (matches) {
      removedCount += matches.length;

  return { "content": modifiedContent, removedCount }}"
function processFile(filePath) {
  try {
  // TODO: Implement
}"

      return removedCount}

  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {)
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(filePath, extensions))
    } else {
  // TODO: Implement
      const ext = path.extname(file)
      if (extensions.includes(ext)) {
        results.push(filePath);
ursor/expand-services-advertise-and-build-project-0033
  return results;

function main() {







  const srcDir = path.join(process.cwd(), 'src');
  const pagesDir = path.join(process.cwd(), 'pages');`;
  const patterns = [`${srcDir}/**/*.{js,jsx,ts,tsx}`,`;

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
    console.log(`\n✨ Production build optimized!`);
  } else {
    console.log(`\n✨ No console statements found to remove.`);
  }
ursor/expand-services-advertise-and-build-project-0033




}

module.exports = { removeConsoleStatements, processFile };

module.exports = { removeConsoleStatements, processFile };


  console.log("\n📊 Summary: ");"`;
  console.log(`   Files processed: ${filesProcessed}`);"`;
    console.log(`\n✨ No console statements found to remove.`)
  if($2) {
  main().catch(console.error)}

"`;
