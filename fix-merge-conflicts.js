#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    let conflictEnd = -1;
    let currentConflict = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictStart = i;
        currentConflict = [];
        continue;
      
      if (line.startsWith('=======')) {
        // Middle of conflict - continue collecting
        continue;
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictEnd = i;
        
        // Process the conflict
        if (currentConflict.length > 0) {
          // Keep the first version (before =======)
          fixedLines.push(...currentConflict);
        
        currentConflict = [];
        continue;
      
      if (inConflict) {
        currentConflict.push(line);
        fixedLines.push(line);
    
    // Write the fixed content back
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    
    return true;
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;


// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
  
  traverse(dir);
  return files;


// Main execution
console.log('Starting merge conflict cleanup...');

const filesWithConflicts = findFilesWithConflicts('/workspace');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
let errorCount = 0;

for (const file of filesWithConflicts) {
  try {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    console.error(`Failed to fix ${file}:`, error.message);
    errorCount++;


console.log(`\nCleanup complete:`);
console.log(`- Files processed: ${filesWithConflicts.length}`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Errors: ${errorCount}`);

// Verify no more conflicts
const remainingConflicts = findFilesWithConflicts('/workspace');
if (remainingConflicts.length === 0) {
  console.log('✅ All merge conflicts have been resolved!');
 else {
  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
