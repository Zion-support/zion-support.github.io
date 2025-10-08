#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix commented variable declarations
function fixCommentedVariables(content) {
  // Fix patterns like "//     const variableName = ..." to "const variableName = ..."
  content = content.replace(/^(\s*)\/\/\s*(const|let|var)\s+(\w+)/gm, '$1$2 $3');

  // Fix patterns like "//     const variableName" to "const variableName"
  content = content.replace(/^(\s*)\/\/\s*(const|let|var)\s+(\w+)(\s*[=;])/gm, '$1$2 $3$4');

  return content;
}

// Function to fix specific patterns
function fixSpecificPatterns(content) {
  // Fix analytics.ts specific issues
  content = content.replace(/analytics\./g, 'this.');

  // Fix common variable name issues
  content = content.replace(/\b(analytics)\b(?!\s*[=:])/g, 'this');

  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = fixCommentedVariables(content);
    fixedContent = fixSpecificPatterns(fixedContent);

    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find TypeScript files
function findTsFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsFiles(fullPath));
    } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const tsFiles = findTsFiles(srcDir);

console.log(`Found ${tsFiles.length} TypeScript files to process...`);

let fixedCount = 0;
for (const file of tsFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
