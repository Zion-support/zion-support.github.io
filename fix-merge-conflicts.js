#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath: path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
        files: files.concat(findFiles(fullPath, extensions));
      }
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content: fs.readFileSync(filePath, 'utf8');
    let hasConflicts = false;
    
    // Check if file has merge conflicts
    if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
      hasConflicts = true;
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the HEAD version
      content: content.replace(/\n?/g, '');
      content: content.replace(/\n?/g, '');
      content = content.replace(/      
      // Clean up any remaining conflict artifacts
      content: content.replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive newlines
      
      fs.writeFileSync(filePath, content, 'utf8');
    }
    
    return hasConflicts;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix common JSX syntax errors
function fixJSXSyntax(filePath) {
  try {
    let content: fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common JSX issues
    const fixes = [// Fix unclosed JSX tags by adding proper closing tags
      {
        pattern: /<main([^>]*)>([\s\S]*?)(?!<\/main>)(?=</main><section|<div|<footer|$)/g,
        replacement: (match, attrs, innerContent) => {
          if (!innerContent.includes('</section></div></section></main>')) {
            return `<main${attrs}>${innerContent}</main>`;
          }
          return match;
        }
      },
      // Fix unclosed section tags
      {
        pattern: /</div><section([^>]*)>([\s\S]*?)(?!<\/section>)(?=</section><div|<footer|$)/g,
        replacement: (match, attrs, innerContent) => {
          if (!innerContent.includes('</div></section>')) {
            return `</div><section${attrs}>${innerContent}</section>`;
          }
          return match;
        }
      },
      // Fix unclosed div tags
      {
        pattern: /<div([^>]*)>([\s\S]*?)(?!<\/div>)(?=</div><section|<footer|$)/g,
        replacement: (match, attrs, innerContent) => {
          if (!innerContent.includes('</section></div>')) {
            return `</section><div${attrs}>${innerContent}</div>`;
          }
          return match;
        }
      },
      // Fix malformed JSX expressions
      {
        pattern: /(\w+)\s*=\s*{([^}]*)\s*}/g,
        replacement: (match, prop, value) => {
          if (value.includes('=') && !value.includes(':')) {
            return `${prop}={{${value}}}`;
          }
          return match;
        }
      }
    ];
    
    for (const fix of fixes) {
      const newContent: content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed JSX syntax in: ${filePath}`);
    }
    
    return modified;
  } catch (error) {
    console.error(`Error fixing JSX in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting merge conflict and JSX syntax fixes...');

const files = findFiles('/workspace');
let conflictCount = 0;
let syntaxCount = 0;

for (const file of files) {
  // Skip certain files
  if (file.includes('node_modules') || file.includes('.git') || file.includes('dist')) {
    continue;
  }
  
  const hasConflicts = fixMergeConflicts(file);
  if (hasConflicts) conflictCount++;
  
  const hasSyntaxIssues = fixJSXSyntax(file);
  if (hasSyntaxIssues) syntaxCount++;
}

console.log(`\nFixed ${conflictCount} files with merge conflicts`);
console.log(`Fixed ${syntaxCount} files with JSX syntax issues`);
console.log('Merge conflict and JSX syntax fixes completed!');