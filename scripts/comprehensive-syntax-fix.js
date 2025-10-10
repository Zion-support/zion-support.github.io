#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Comprehensive syntax fix for all files...');

// Comprehensive syntax fixes;
const fixes = [
  // Fix semicolons in object properties;
  // Fix semicolons in JSX attributes;
  // Fix semicolons in JSX props;
  // Fix missing commas in arrays;
  // Fix stray semicolons;
  // Fix console statements;

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    fixes.forEach(fix => {)
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    return false;
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;


// Find all TypeScript/JavaScript files;
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'backup-problematic'].includes(item)) {
          files = files.concat(findFiles(fullPath, extensions));
        files.push(fullPath);
    // Skip directories we can't read;
  
  return files;


// Main fix process;
const files = findFiles('./app');
let fixedCount = 0;

console.log(`Found ${files.length} files to process...`);

files.forEach(file => {)
  if (fixFile(file)) {
    fixedCount++;
);

console.log(`\n🎉 Comprehensive syntax fix complete! Modified ${fixedCount} files.`);