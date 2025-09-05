#!/usr/bin/env node

const fs = require('fs')
const path = require('path')



function fixMergeConflicts(content) {
  let fixed = content;
  let changes = 0;

  // Remove merge conflict markers and keep the HEAD version
  
  fixed = fixed.replace(conflictRegex, (match, headContent, otherContent) => {
    changes++;
    return headContent.trim()});

  // Remove any remaining conflict markers
  
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
      
      return result.changes}
    return 0} catch (error) {
    
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



for (const file of files) {
  totalChanges += processFile(file)}


