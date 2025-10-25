#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers
    content = content.replace(/
    
    // Clean up any remaining conflict markers
    
    // Remove duplicate lines that might have been created
    const lines = content.split('\n');
    const cleanedLines = [];
    const seen = new Set();
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !seen.has(trimmed)) {
        cleanedLines.push(line);
        seen.add(trimmed);
      } else if (!trimmed) {
      }
    
    content = cleanedLines.join('\n');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content);
    console.log(`✅ Cleaned merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Error cleaning ${filePath}: ${error.message}`);
    return false;

// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
            conflictedFiles.push(fullPath);
          // Skip files that can't be read
  
  searchDirectory(dir);
  return conflictedFiles;

// Main function
function main() {
  console.log('🔍 Searching for files with merge conflicts...');
  
  const conflictedFiles = findConflictedFiles('/workspace');
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  
  console.log(`📋 Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  console.log('\n🧹 Cleaning up merge conflicts...');
  
  let successCount = 0;
  let failureCount = 0;
  
  for (const file of conflictedFiles) {
    if (cleanMergeConflicts(file)) {
      successCount++;
    } else {
      failureCount++;
  
  console.log(`\n📊 Cleanup Summary:`);
  console.log(`✅ Successfully cleaned: ${successCount} files`);
  console.log(`❌ Failed to clean: ${failureCount} files`);
  
  if (successCount > 0) {
    console.log('\n🔄 Adding cleaned files to git...');
      execSync('git add .', { stdio: 'pipe' });
      console.log('✅ Files added to git');
      
      console.log('💾 Committing changes...');
      execSync('git commit -m "Clean up merge conflicts in all files"', { stdio: 'pipe' });
      console.log('✅ Changes committed');
      
      console.log('🚀 Pushing to main...');
      execSync('git push origin main', { stdio: 'pipe' });
      console.log('✅ Changes pushed to main');
      
      console.log(`❌ Error with git operations: ${error.message}`);

// Run the cleanup
main();