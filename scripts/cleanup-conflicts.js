#!/usr/bin/env node;
import fs from 'fs';'
import path from 'path';'
import { execSync } from 'child_process';'

console.log('🧹 Starting comprehensive cleanup of merge conflicts and syntax errors...');'

// Function to clean merge conflict markers;
function cleanMergeConflicts(content) {
  // Remove merge conflict markers;
let cleaned = content
    .replace(/^    .replace(/^    .replace(/^    .replace(/^    .replace(/^    .replace(/^    .replace(/^  
  return cleaned;


// Function to fix common syntax errors;
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix unterminated string literals;
fixed = fixed.replace(/import\s+.*?from\s+['"]([^'"]*?)$/gm, (match, p1) => {"
    if (!p1.includes("'") && !p1.includes('"')) {'"
      return match + '";';'"'

    return match;
  });
  
  // Fix missing semicolons in imports;
fixed = fixed.replace(/import\s+.*?from\s+['"][^'"]+['"]\s*$/gm, (match) => {"'
    if (!match.endsWith(';')) {'
      return match + ';';'

    return match;
  });
  
  // Fix missing commas in object literals;
fixed = fixed.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n  $3:');'
  
  return fixed;


// Function to process a file;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');'
    let cleaned = cleanMergeConflicts(content);
    cleaned = fixSyntaxErrors(cleaned);
    
    // Only write if content changed;
if (cleaned !== content) {
      fs.writeFileSync(filePath, cleaned, 'utf8');'
      console.log(`✅ Fixed: ${filePath}`);
      return true;

    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;



// Function to recursively find and process files;
function processDirectory(dirPath) {
  let processedCount = 0;
  let errorCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, dist, etc.
        if (['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {'
          continue;

        const result = processDirectory(fullPath);
        processedCount += result.processed;
        errorCount += result.errors;
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {'
        if (processFile(fullPath)) {
          processedCount++;



  } catch (error) {
    console.error(`❌ Error processing directory ${dirPath}:`, error.message);
    errorCount++;

  
  return { processed: processedCount, errors: errorCount };


// Main execution;
console.log('🔍 Scanning for files with merge conflicts and syntax errors...');'

const result = processDirectory('/workspace');'

console.log(`\n📊 Cleanup Summary:`);
console.log(`✅ Files processed: ${result.processed}`);
console.log(`❌ Errors encountered: ${result.errors}`);

if (result.processed > 0) {
  console.log('\n🎉 Cleanup completed! Running lint check...');'
  
  try {
    execSync('npm run lint', { cwd: '/workspace', stdio: 'inherit' });'
    console.log('✅ Lint check passed!');'
  } catch (error) {
    console.log('⚠️  Lint check still has issues, but many conflicts were resolved.');'

} else {
  console.log('ℹ️  No files needed processing.');'


console.log('\n🏁 Cleanup script completed!');