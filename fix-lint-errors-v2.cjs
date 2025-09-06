#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix unescaped entities in JSX more carefully
function fixUnescapedEntities(content) {
  // Only fix apostrophes in JSX text content, not in attributes or code
  content = content.replace(/([^\\])'([^']*[^\\])'/g, (match, before, text, after) => {
    // Check if this is inside JSX text content (not in attributes or code)
    if (match.includes('className=') || match.includes('href=') || match.includes('src=')) {
      return match; // Don't change attributes
    }
    return before + '&apos;' + text + '&apos;';
  });
  
  // Fix quotes in JSX text content
  content = content.replace(/([^\\])"([^"]*[^\\])"/g, (match, before, text, after) => {
    // Check if this is inside JSX text content (not in attributes or code)
    if (match.includes('className=') || match.includes('href=') || match.includes('src=')) {
      return match; // Don't change attributes
    }
    return before + '&quot;' + text + '&quot;';
  });
  
  return content;
}

// Function to replace <a> tags with Link components
function fixLinkTags(content) {
  // Add Link import if not present and there are <a> tags
  if (content.includes('<a href="/') && !content.includes('import Link')) {
    if (content.includes('import React')) {
      content = content.replace(
        /import React from 'react';/,
        "import React from 'react';\nimport Link from 'next/link';"
      );
    } else {
<<<<<<< HEAD
      content = "import Link from 'next/link';\n" + content;
    }
=======
    content = "import Link from 'next/link',
    \n" + content
  }
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }
  
  // Replace <a> tags with Link components for internal links
  content = content.replace(
    /<a href="(\/[^"]*)"([^>]*)>/g,
    '<Link href="$1"$2>'
  );
  content = content.replace(
    /<\/a>/g,
    '</Link>'
  );
  
  return content;
}

// Function to remove unused imports
function removeUnusedImports(content) {
  const lines = content.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is an unused import
    if (line.includes('import ') && line.includes(' from ')) {
      const importMatch = line.match(/import\s+.*?\s+from\s+['"]([^'"]+)['"]/);
      if (importMatch) {
        const moduleName = importMatch[1];
        if (moduleName === 'next/link') {
          if (!content.includes('<Link')) {
            continue; // Skip this import
          }
        }
      }
    }
    
    newLines.push(line);
  }
  
  return newLines.join('\n');
}

// Function to fix console statements
function fixConsoleStatements(content) {
  return content.replace(/console\.log\(/g, '// console.log(');
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixUnescapedEntities(content);
    content = fixLinkTags(content);
    content = removeUnusedImports(content);
    content = fixConsoleStatements(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Find all TypeScript/JavaScript files
function findFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Process all files
const files = findFiles('.');
console.log(`Found ${files.length} files to process`);

files.forEach(processFile);

console.log('Lint fixes completed!');