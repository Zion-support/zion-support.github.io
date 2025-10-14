#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
console.log('🔧 Starting comprehensive error fixing...');
// Function to recursively find all files;
function getAllFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  return files;
}
// Function to fix merge conflict markers;
function fixMergeConflicts(content) {
  // Remove merge conflict markers;
  content = content.replace(/^<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '');
  content = content.replace(/^<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+$/gm, '');
  content = content.replace(/^=======[\s\S]*?>>>>>>> [^\n]+$/gm, '');
  content = content.replace(/^<<<<<<< [^\n]+[\s\S]*?=======$/gm, '');
  return content;
};
// Function to fix common syntax errors;
function fixSyntaxErrors(content) {
  // Fix unterminated string literals;
  content = content.replace(/import\s+.*?from\s+['"]([^'"]*?)$/gm, (match, p1) => {
  return null;
    if (!p1.includes("'") && !p1.includes('"')) {
      return match + '"';
    };
    return match;
  });
  // Fix missing closing quotes in JSX;
  content = content.replace(/className=['"]([^'"]*?)$/gm, (match, p1) => {
  return null;
    if (!p1.includes("'") && !p1.includes('"')) {
      return `className="${p1}"""
      return `${indent}<////div>${jsx}</div>""
    console.log(`📁 Found ${files.length} files to process...""
          console.log(`✅ Fixed: ${filePath}""
        console.error(`❌ Error processing ${filePath}:""
    console.log(`\n🎉 Fixing complete!""
    console.log(`✅ Fixed: ${fixedCount} files""
    console.log(`❌ Errors: ${errorCount} files"")