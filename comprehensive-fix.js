#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by keeping the newer version (after =======)
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

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix object literal syntax errors
  fixed = fixed.replace(/\{\s*,\s*/g, '{');
  fixed = fixed.replace(/\{\s*([^}]*?)\s*:\s*([^}]*?)\s*:\s*([^}]*?)\s*\}/g, '{$1: $2}');
  fixed = fixed.replace(/\{\s*([^}]*?)\s*,\s*([^}]*?)\s*,\s*([^}]*?)\s*\}/g, '{$1, $2}');
  
  // Fix array syntax errors
  fixed = fixed.replace(/\[\s*,\s*/g, '[');
  fixed = fixed.replace(/\[\s*([^\]]*?)\s*:\s*([^\]]*?)\s*:\s*([^\]]*?)\s*\]/g, '[$1, $2]');
  
  // Fix function call syntax errors
  fixed = fixed.replace(/\(\s*,\s*/g, '(');
  fixed = fixed.replace(/\(\s*([^)]*?)\s*,\s*([^)]*?)\s*,\s*([^)]*?)\s*\)/g, '($1, $2)');
  
  // Fix JSX syntax errors
  fixed = fixed.replace(/<\s*\/\s*>\s*;/g, '</>');
  fixed = fixed.replace(/<\s*\/\s*>\s*,\s*/g, '</>');
  fixed = fixed.replace(/<\s*\/\s*>\s*:\s*/g, '</>');
  fixed = fixed.replace(/<\s*\/\s*>\s*\{/g, '</>{');
  
  // Fix string literal errors
  fixed = fixed.replace(/"\s*,\s*"/g, '", "');
  fixed = fixed.replace(/"\s*;\s*"/g, '"; "');
  fixed = fixed.replace(/"\s*:\s*"/g, '": "');
  fixed = fixed.replace(/"\s*\}\s*"/g, '"}');
  fixed = fixed.replace(/"\s*\]\s*"/g, '"]');
  fixed = fixed.replace(/"\s*\)\s*"/g, '")');
  
  // Fix property assignment errors
  fixed = fixed.replace(/\{\s*([^}]*?)\s*:\s*([^}]*?)\s*:\s*([^}]*?)\s*\}/g, '{$1: $2}');
  
  // Fix missing property names
  fixed = fixed.replace(/\{\s*,\s*icon:/g, '{icon:');
  fixed = fixed.replace(/\{\s*,\s*title:/g, '{title:');
  fixed = fixed.replace(/\{\s*,\s*description:/g, '{description:');
  fixed = fixed.replace(/\{\s*,\s*benefits:/g, '{benefits:');
  fixed = fixed.replace(/\{\s*,\s*features:/g, '{features:');
  
  // Fix malformed JSX attributes
  fixed = fixed.replace(/className="([^"]*?)\s*,\s*([^"]*?)"/g, 'className="$1 $2"');
  fixed = fixed.replace(/className="([^"]*?)\s*;\s*([^"]*?)"/g, 'className="$1 $2"');
  fixed = fixed.replace(/className="([^"]*?)\s*:\s*([^"]*?)"/g, 'className="$1 $2"');
  
  // Fix unterminated strings
  fixed = fixed.replace(/"([^"]*?)\s*$/gm, '"$1"');
  fixed = fixed.replace(/'([^']*?)\s*$/gm, "'$1'");
  
  // Fix stray characters
  fixed = fixed.replace(/[^\x20-\x7E\n\r\t]/g, '');
  
  // Fix comment syntax in JSX
  fixed = fixed.replace(/\{\s*\/\*.*?\*\/\s*\}/g, '');
  fixed = fixed.replace(/\{\s*\/\/.*?\n\s*\}/g, '');
  
  // Fix semicolon issues
  fixed = fixed.replace(/;\s*;/g, ';');
  fixed = fixed.replace(/,\s*,/g, ',');
  fixed = fixed.replace(/:\s*:/g, ':');
  
  // Fix object property syntax
  fixed = fixed.replace(/\{\s*([^}]*?)\s*:\s*([^}]*?)\s*,\s*([^}]*?)\s*:\s*([^}]*?)\s*,\s*([^}]*?)\s*:\s*([^}]*?)\s*\}/g, '{$1: $2, $3: $4, $5: $6}');
  
  // Fix array element syntax
  fixed = fixed.replace(/\[\s*([^\]]*?)\s*,\s*([^\]]*?)\s*,\s*([^\]]*?)\s*,\s*([^\]]*?)\s*\]/g, '[$1, $2, $3, $4]');
  
  // Fix function parameter syntax
  fixed = fixed.replace(/\(\s*([^)]*?)\s*,\s*([^)]*?)\s*,\s*([^)]*?)\s*,\s*([^)]*?)\s*\)/g, '($1, $2, $3, $4)');
  
  return fixed;
}

// Function to fix specific patterns in problematic files
function fixSpecificPatterns(content) {
  let fixed = content;
  
  // Fix the specific pattern in 5g-implementation and similar files
  const featuresPattern = /const features = \[\s*\{\s*,\s*icon:\s*([^,]+),\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*benefits:\s*\[([^\]]+)\]\s*\}/g;
  fixed = fixed.replace(featuresPattern, (match, icon, title, description, benefits) => {
    return `const features = [
    {
      icon: ${icon},
      title: '${title}',
      description: '${description}',
      benefits: [${benefits}]
    }`;
  });
  
  // Fix stats pattern
  const statsPattern = /const stats = \[\s*\{\s*label:\s*'([^']+)',\s*value:\s*'([^']+)'\s*\},\s*\{\s*label:\s*'([^']+)',\s*value:\s*'([^']+)'\s*\},\s*\{\s*label:\s*'([^']+)',\s*value:\s*'([^']+)'\s*\},\s*\{\s*label:\s*'([^']+)',\s*value:\s*'([^']+)'\s*\},\s*\]/g;
  fixed = fixed.replace(statsPattern, (match, l1, v1, l2, v2, l3, v3, l4, v4) => {
    return `const stats = [
    { label: '${l1}', value: '${v1}' },
    { label: '${l2}', value: '${v2}' },
    { label: '${l3}', value: '${v3}' },
    { label: '${l4}', value: '${v4}' },
  ]`;
  });
  
  // Fix common JSX patterns
  fixed = fixed.replace(/<\s*\/\s*>\s*;\s*$/gm, '</>');
  fixed = fixed.replace(/<\s*\/\s*>\s*,\s*$/gm, '</>');
  fixed = fixed.replace(/<\s*\/\s*>\s*:\s*$/gm, '</>');
  
  return fixed;
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
    
    // Fix syntax errors
    fixed = fixSyntaxErrors(fixed);
    fixed = fixSpecificPatterns(fixed);
    
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
console.log('Starting comprehensive fix...');

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

console.log('Comprehensive fix complete!');