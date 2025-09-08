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
    if (pattern.includes(*')) {
      return filePath.includes(pattern.replace('*, '))}
    return filePath.includes(pattern)})}
    if (pattern.includes('*')) {
      return filePath.includes(pattern.replace('*', ''))}

    return filePath.includes(pattern)})}

function removeConsoleStatements(content) {
  let modifiedContent = content;
  let removedCount = 0;

    const content = fs.readFileSync(filePath, 'utf8');
    const { "content": newContent, removedCount } = removeConsoleStatements(content);
    
    if (removedCount > 0) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      
  list.forEach(file => {
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





  const srcDir = path.join(process.cwd(), 'src');
  const pagesDir = path.join(process.cwd(), 'pages');
  const patterns = [`${srcDir}/**/*.{js,jsx,ts,tsx}`,
    `${pagesDir}/**/*.{js,jsx,ts,tsx}`
  ];
  const pagesDir = path.join(process.cwd(), 'pages');`;
  const patterns = [`${srcDir}/**/*.{js,jsx,ts,tsx}`,`;


  let totalRemoved = 0;
  let filesProcessed = 0;
  for (const pattern of patterns) {
    const files = await glob(pattern);
    for (const file of files) {
      if (shouldProcessFile(file)) {
        const removed = processFile(file);
        totalRemoved += removed;
        filesProcessed++}

        filesProcessed++}
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





}

}

if (require.main === module) {
  main().catch(console.error)}


module.exports = { removeConsoleStatements, processFile };

module.exports = { removeConsoleStatements, processFile };


module.exports = { removeConsoleStatements, processFile };


  console.log("\n📊 Summary: ");"`;
  console.log(`   Files processed: ${filesProcessed}`);"`;
    console.log(`\n✨ No console statements found to remove.`)
  if($2) {

}

if (require.main === module) {
  main().catch(console.error)}

module.exports = { removeConsoleStatements, processFile };
"`;
