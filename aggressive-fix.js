#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix unterminated strings and other critical issues
function fixCriticalIssues(content) {
  let fixed = content;
  
  // Fix unterminated string literals
  fixed = fixed.replace(/'([^']*?)\s*$/gm, "'$1'");
  fixed = fixed.replace(/"([^"]*?)\s*$/gm, '"$1"');
  
  // Fix unterminated strings in the middle of lines
  fixed = fixed.replace(/'([^']*?)\s*([^']*?)\s*$/gm, "'$1$2'");
  fixed = fixed.replace(/"([^"]*?)\s*([^"]*?)\s*$/gm, '"$1$2"');
  
  // Fix common patterns that cause unterminated strings
  fixed = fixed.replace(/'([^']*?)\s*,\s*([^']*?)\s*$/gm, "'$1$2'");
  fixed = fixed.replace(/"([^"]*?)\s*,\s*([^"]*?)\s*$/gm, '"$1$2"');
  fixed = fixed.replace(/'([^']*?)\s*;\s*([^']*?)\s*$/gm, "'$1$2'");
  fixed = fixed.replace(/"([^"]*?)\s*;\s*([^"]*?)\s*$/gm, '"$1$2"');
  fixed = fixed.replace(/'([^']*?)\s*:\s*([^']*?)\s*$/gm, "'$1$2'");
  fixed = fixed.replace(/"([^"]*?)\s*:\s*([^"]*?)\s*$/gm, '"$1$2"');
  
  // Fix JSX attribute issues
  fixed = fixed.replace(/className="([^"]*?)\s*$/gm, 'className="$1"');
  fixed = fixed.replace(/title="([^"]*?)\s*$/gm, 'title="$1"');
  fixed = fixed.replace(/description="([^"]*?)\s*$/gm, 'description="$1"');
  
  // Fix object property issues
  fixed = fixed.replace(/title:\s*'([^']*?)\s*$/gm, "title: '$1'");
  fixed = fixed.replace(/description:\s*'([^']*?)\s*$/gm, "description: '$1'");
  fixed = fixed.replace(/label:\s*'([^']*?)\s*$/gm, "label: '$1'");
  fixed = fixed.replace(/value:\s*'([^']*?)\s*$/gm, "value: '$1'");
  
  // Fix array issues
  fixed = fixed.replace(/\[\s*'([^']*?)\s*$/gm, "['$1']");
  fixed = fixed.replace(/\[\s*"([^"]*?)\s*$/gm, '["$1"]');
  
  // Fix function call issues
  fixed = fixed.replace(/\(\s*'([^']*?)\s*$/gm, "('$1')");
  fixed = fixed.replace(/\(\s*"([^"]*?)\s*$/gm, '("$1")');
  
  // Fix JSX closing tag issues
  fixed = fixed.replace(/<\s*\/\s*>\s*;\s*$/gm, '</>');
  fixed = fixed.replace(/<\s*\/\s*>\s*,\s*$/gm, '</>');
  fixed = fixed.replace(/<\s*\/\s*>\s*:\s*$/gm, '</>');
  
  // Fix object literal issues
  fixed = fixed.replace(/\{\s*([^}]*?)\s*:\s*([^}]*?)\s*:\s*([^}]*?)\s*\}/g, '{$1: $2}');
  fixed = fixed.replace(/\{\s*,\s*/g, '{');
  fixed = fixed.replace(/\{\s*([^}]*?)\s*,\s*([^}]*?)\s*,\s*([^}]*?)\s*\}/g, '{$1, $2}');
  
  // Fix array literal issues
  fixed = fixed.replace(/\[\s*,\s*/g, '[');
  fixed = fixed.replace(/\[\s*([^\]]*?)\s*:\s*([^\]]*?)\s*:\s*([^\]]*?)\s*\]/g, '[$1, $2]');
  
  // Fix function call issues
  fixed = fixed.replace(/\(\s*,\s*/g, '(');
  fixed = fixed.replace(/\(\s*([^)]*?)\s*,\s*([^)]*?)\s*,\s*([^)]*?)\s*\)/g, '($1, $2)');
  
  // Fix missing property names
  fixed = fixed.replace(/\{\s*,\s*icon:/g, '{icon:');
  fixed = fixed.replace(/\{\s*,\s*title:/g, '{title:');
  fixed = fixed.replace(/\{\s*,\s*description:/g, '{description:');
  fixed = fixed.replace(/\{\s*,\s*benefits:/g, '{benefits:');
  fixed = fixed.replace(/\{\s*,\s*features:/g, '{features:');
  
  // Fix semicolon issues
  fixed = fixed.replace(/;\s*;/g, ';');
  fixed = fixed.replace(/,\s*,/g, ',');
  fixed = fixed.replace(/:\s*:/g, ':');
  
  // Fix stray characters
  fixed = fixed.replace(/[^\x20-\x7E\n\r\t]/g, '');
  
  // Fix comment syntax in JSX
  fixed = fixed.replace(/\{\s*\/\*.*?\*\/\s*\}/g, '');
  fixed = fixed.replace(/\{\s*\/\/.*?\n\s*\}/g, '');
  
  return fixed;
}

// Function to resolve merge conflicts by keeping the newer version
function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolved = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<<')) {
      // Skip the conflict marker and everything until =======
      i++;
      while (i < lines.length && !lines[i].startsWith('=======')) {
        i++;
      }
      i++; // Skip the ======= line
      
      // Keep everything until >>>>>>>
      while (i < lines.length && !lines[i].startsWith('>>>>>>>')) {
        resolved.push(lines[i]);
        i++;
      }
      i++; // Skip the >>>>>>> line
    } else {
      resolved.push(line);
      i++;
    }
  }
  
  return resolved.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = content;
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`  - Resolving merge conflicts in ${filePath}`);
      fixed = resolveMergeConflicts(fixed);
    }
    
    // Fix critical issues
    fixed = fixCriticalIssues(fixed);
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log(`  - Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting aggressive fix...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process`);

let processed = 0;
let fixed = 0;

for (const file of files) {
  const originalContent = fs.readFileSync(file, 'utf8');
  processFile(file);
  processed++;
  
  const newContent = fs.readFileSync(file, 'utf8');
  if (originalContent !== newContent) {
    fixed++;
  }
}

console.log(`\nProcessed ${processed} files`);
console.log(`Fixed ${fixed} files`);

// Run TypeScript check to see remaining errors
console.log('\nRunning TypeScript check...');
try {
  execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
  console.log('TypeScript check passed!');
} catch (error) {
  console.log('TypeScript check failed - some errors may remain');
}

console.log('Aggressive fix complete!');