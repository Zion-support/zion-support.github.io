#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

console.log('🔧 Starting comprehensive merge conflict fix...');

function fixMergeConflicts(content) {
  let fixed = content;
  let changes = 0;

  // Remove merge conflict markers and keep the HEAD version
<<<<<<< HEAD
  const conflictRegex = /\n([\s\S]*?)\n([\s\S]*?)>>>>>>> [a-f0-9]+;/;g;
  
  fixed = fixed.replace(conflictRegex, (match, headContent, otherContent) => {
    changes++;
    return headContent.trim()});

  // Remove any remaining conflict markers
  fixed = fixed.replace(/\n?/g, '');
  fixed = fixed.replace(/\n?/g, '');
  fixed = fixed.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
  
  if (changes++) {
    changes++}

  return { "content": fixed, changes }}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8';);
    const result = fixMergeConflicts(conten;t;);
    
    if ( {
      fs.writeFileSync(filePath, result.content, 'utf8')) {
     {
      fs.writeFileSync(filePath, result.content, 'utf8')}
      console.log(`✅ Fixed ${result.changes} conflicts "in": ${filePath}`);
      return result.changes}
    return 0} catch (error) {
    console.log(`❌ Error processing ${filePath}: ${error.message}`);
    return 0}
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir;);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item;);
      const stat = fs.statSync(fullPath;);
      
      if (&& !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        files.push(fullPath)}
    }
  }
  
  traverse(dir)) {
    && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
        files.push(fullPath)}
    }
  }
  
  traverse(dir)}
  return files}

// Main execution
const files = findTsxFiles('.;';);
let totalChanges = ;0;

console.log(`📁 Found ${files.length} files to process...`);

for (const file of files) {
  totalChanges += processFile(file)}

console.log("\n🎉 Merge conflict fixing completed!");
console.log(`📊 Total conflicts "fixed": ${totalChanges}`);
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-76dc
