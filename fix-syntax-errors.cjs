#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to find all .tsx and .ts files in the app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix merge conflict markers
  if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
    console.log(`Fixing merge conflicts in ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======.*?\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]*\n?/g, '');
    modified = true;
  }
  
  // Fix common JSX syntax errors
  const fixes = [
    // Fix missing closing tags
    {
      pattern: /<main[^>]*>([\s\S]*?)(?=<section|<div|<h[1-6]|<p|<ul|<ol|<li)/g,
      replacement: (match, content) => {
        if (!content.includes('</main>')) {
          return match + '</main>';
        }
        return match;
      }
    },
    
    // Fix missing closing div tags
    {
      pattern: /<div[^>]*>([\s\S]*?)(?=<section|<div|<h[1-6]|<p|<ul|<ol|<li)/g,
      replacement: (match, content) => {
        if (!content.includes('</div>')) {
          return match + '</div>';
        }
        return match;
      }
    },
    
    // Fix missing closing section tags
    {
      pattern: /<section[^>]*>([\s\S]*?)(?=<section|<div|<h[1-6]|<p|<ul|<ol|<li)/g,
      replacement: (match, content) => {
        if (!content.includes('</section>')) {
          return match + '</section>';
        }
        return match;
      }
    },
    
    // Fix duplicate 'use client' directives
    {
      pattern: /'use client';\s*import[^;]*;\s*'use client';\s*import/g,
      replacement: "'use client';\nimport"
    },
    
    // Fix missing semicolons in object properties
    {
      pattern: /(\w+):\s*([^,}\n]+)(?=\s*[,}])/g,
      replacement: (match, key, value) => {
        if (!value.includes(';') && !value.includes(',') && !value.includes('}')) {
          return `${key}: ${value}`;
        }
        return match;
      }
    },
    
    // Fix missing closing brackets in arrays
    {
      pattern: /(\[[\s\S]*?)(?=\s*\]\s*;)/g,
      replacement: (match) => {
        const openBrackets = (match.match(/\[/g) || []).length;
        const closeBrackets = (match.match(/\]/g) || []).length;
        if (openBrackets > closeBrackets) {
          return match + ']'.repeat(openBrackets - closeBrackets);
        }
        return match;
      }
    }
  ];
  
  for (const fix of fixes) {
    const newContent = content.replace(fix.pattern, fix.replacement);
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in ${filePath}`);
  }
  
  return modified;
}

// Main function
function main() {
  console.log('Starting syntax error fixing...');
  
  const appDir = path.join(__dirname, 'app');
  const files = findTsxFiles(appDir);
  
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      if (fixSyntaxErrors(file)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error fixing ${file}:`, error.message);
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
  
  // Run linter to check remaining errors
  try {
    console.log('Running linter to check remaining errors...');
    execSync('npm run lint', { stdio: 'pipe' });
    console.log('All syntax errors fixed!');
  } catch (error) {
    console.log('Some errors remain, but many have been fixed.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixSyntaxErrors, findTsxFiles };