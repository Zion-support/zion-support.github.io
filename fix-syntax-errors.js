#!/usr/bin/env node

import fs from 'fs';
import { execSync } from 'child_process';

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing closing tags by adding them at the end
    const openTags = content.match(/<[^/][^>]*>/g) || [];
    const closeTags = content.match(/<\/[^>]*>/g) || [];
    
    // Count opening and closing tags
    const tagCounts = {};
    openTags.forEach(tag => {
      const tagName = tag.match(/<(\w+)/)?.[1];
      if (tagName) {
        tagCounts[tagName] = (tagCounts[tagName] || 0) + 1;
      }
    });
    
    closeTags.forEach(tag => {
      const tagName = tag.match(/<\/(\w+)/)?.[1];
      if (tagName) {
        tagCounts[tagName] = (tagCounts[tagName] || 0) - 1;
      }
    });

    // Add missing closing tags
    const missingTags = [];
    Object.entries(tagCounts).forEach(([tag, count]) => {
      if (count > 0) {
        for (let i = 0; i < count; i++) {
          missingTags.push(`</${tag}>`);
        }
      }
    });

    if (missingTags.length > 0) {
      // Insert missing closing tags before the last closing tags
      const lastClosingTagIndex = content.lastIndexOf('</');
      if (lastClosingTagIndex !== -1) {
        const insertPosition = content.lastIndexOf('>', lastClosingTagIndex) + 1;
        content = content.slice(0, insertPosition) + '\n' + missingTags.join('\n') + '\n' + content.slice(insertPosition);
        modified = true;
      }
    }

    // Fix common JSX syntax issues
    content = content.replace(/\}\s*\)\s*:\s*\(/g, '} : (');
    content = content.replace(/\}\s*\)\s*\)/g, '})');
    content = content.replace(/\}\s*\)\s*;/g, '});');
    
    // Fix missing semicolons in variable declarations
    content = content.replace(/(let|const|var)\s+(\w+):\s*(\w+)\s*,/g, '$1 $2: $3;');
    
    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    const missingBraces = openBraces - closeBraces;
    
    if (missingBraces > 0) {
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }

    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    const missingParens = openParens - closeParens;
    
    if (missingParens > 0) {
      content += ')'.repeat(missingParens);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get list of files with TypeScript errors
let errorFiles = [];

try {
  const output = execSync('pnpm run type-check 2>&1 | grep -E "error TS" | cut -d: -f1 | sort | uniq', { encoding: 'utf8' });
  errorFiles = output.trim().split('\n').filter(f => f);
} catch (error) {
  console.log('No TypeScript errors found or error searching:', error.message);
}

console.log(`Found ${errorFiles.length} files with TypeScript errors`);

let fixedCount = 0;
errorFiles.forEach(file => {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
});

console.log(`Fixed syntax errors in ${fixedCount} files`);