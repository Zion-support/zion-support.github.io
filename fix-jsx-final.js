#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix specific JSX issues
function fixJSXFinal(content, filePath) {
  let fixed = content;
  let changes = [];

  // Fix 1: Fix malformed className attributes with spaces in numbers
  fixed = fixed.replace(/className="([^"]*?)(\d+)\s+(\d+)\s+(\d+)([^"]*?)"/g, (match, before, num1, num2, num3, after) => {
    return `className="${before}${num1}-${num2}-${num3}${after}"`;
  });

  // Fix 2: Fix malformed function names with spaces
  const functionNameMatch = fixed.match(/const\s+([A-Za-z0-9\s]+):\s*React\.FC/);
  if (functionNameMatch) {
    const malformedName = functionNameMatch[1];
    const fixedName = malformedName.replace(/\s+/g, '');
    if (malformedName !== fixedName) {
      fixed = fixed.replace(new RegExp(malformedName, 'g'), fixedName);
      changes.push(`Fixed function name: ${malformedName} -> ${fixedName}`);
    }
  }

  // Fix 3: Fix malformed JSX structure - remove orphaned content and fix structure
  const lines = fixed.split('\n');
  const cleanedLines = [];
  let inJSX = false;
  let openTags = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines and comments
    if (!trimmed || trimmed.startsWith('//')) {
      cleanedLines.push(line);
      i++;
      continue;
    }

    // Check for JSX opening
    if (trimmed.includes('return (') && trimmed.includes('<>')) {
      inJSX = true;
      cleanedLines.push(line);
      i++;
      continue;
    }

    // Check for JSX closing
    if (inJSX && (trimmed.includes('</>') || trimmed.includes(');'))) {
      inJSX = false;
      cleanedLines.push(line);
      i++;
      continue;
    }

    // Skip orphaned closing tags and malformed content
    if (trimmed.match(/^\s*<\/[^>]+>\s*$/) && openTags.length === 0) {
      i++;
      continue;
    }

    // Skip malformed lines with unexpected tokens
    if (trimmed.match(/^\s*[)}\]]\s*$/) && !inJSX) {
      i++;
      continue;
    }

    // Skip lines with malformed JSX structure
    if (trimmed.match(/^\s*[)}\]]\s*$/) && inJSX) {
      i++;
      continue;
    }

    // Track opening and closing tags
    if (inJSX) {
      const openTagMatch = line.match(/<([a-zA-Z][a-zA-Z0-9]*)[^>]*>/g);
      const closeTagMatch = line.match(/<\/([a-zA-Z][a-zA-Z0-9]*)>/g);

      if (openTagMatch) {
        openTagMatch.forEach(tag => {
          const tagName = tag.match(/<([a-zA-Z][a-zA-Z0-9]*)/)[1];
          if (tagName !== 'br' && tagName !== 'hr' && tagName !== 'img' && tagName !== 'input') {
            openTags.push(tagName);
          }
        });
      }

      if (closeTagMatch) {
        closeTagMatch.forEach(tag => {
          const tagName = tag.match(/<\/([a-zA-Z][a-zA-Z0-9]*)/)[1];
          const lastIndex = openTags.lastIndexOf(tagName);
          if (lastIndex !== -1) {
            openTags.splice(lastIndex, 1);
          }
        });
      }
    }

    cleanedLines.push(line);
    i++;
  }

  fixed = cleanedLines.join('\n');

  // Fix 4: Add missing closing tags for common patterns
  const commonTags = ['div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'section', 'article', 'header', 'footer', 'main', 'aside', 'span', 'Link', 'Helmet'];
  
  commonTags.forEach(tag => {
    const openCount = (fixed.match(new RegExp(`<${tag}[^>]*>`, 'g')) || []).length;
    const closeCount = (fixed.match(new RegExp(`</${tag}>`, 'g')) || []).length;
    
    if (openCount > closeCount) {
      const missing = openCount - closeCount;
      // Add missing closing tags before the last closing fragment or return statement
      const lastFragmentIndex = fixed.lastIndexOf('</>');
      const lastReturnIndex = fixed.lastIndexOf(');');
      const insertIndex = Math.max(lastFragmentIndex, lastReturnIndex);
      
      if (insertIndex !== -1) {
        const before = fixed.substring(0, insertIndex);
        const after = fixed.substring(insertIndex);
        fixed = before + `</${tag}>`.repeat(missing) + after;
        changes.push(`Added ${missing} missing closing ${tag} tag(s)`);
      }
    }
  });

  // Fix 5: Ensure JSX fragments are properly closed
  const openFragments = (fixed.match(/<>/g) || []).length;
  const closeFragments = (fixed.match(/<\/>/g) || []).length;
  
  if (openFragments > closeFragments) {
    const missing = openFragments - closeFragments;
    const lastReturnIndex = fixed.lastIndexOf(');');
    if (lastReturnIndex !== -1) {
      const before = fixed.substring(0, lastReturnIndex);
      const after = fixed.substring(lastReturnIndex);
      fixed = before + '</>'.repeat(missing) + after;
      changes.push(`Added ${missing} missing closing JSX fragment(s)`);
    }
  }

  // Fix 6: Clean up malformed JSX attributes
  fixed = fixed.replace(/\s+className="([^"]*?)\s+"/g, ' className="$1"');
  fixed = fixed.replace(/\s+>\s*$/gm, '>');
  
  // Fix 7: Remove duplicate content blocks
  const lines2 = fixed.split('\n');
  const seenLines = new Set();
  const uniqueLines = [];
  
  for (const line of lines2) {
    const trimmed = line.trim();
    if (trimmed && seenLines.has(trimmed)) {
      continue;
    }
    seenLines.add(trimmed);
    uniqueLines.push(line);
  }
  
  if (uniqueLines.length !== lines2.length) {
    fixed = uniqueLines.join('\n');
    changes.push('Removed duplicate content blocks');
  }

  // Fix 8: Fix specific malformed patterns
  fixed = fixed.replace(/\s*<\/p>\s*<\/p>\s*$/gm, '');
  fixed = fixed.replace(/\s*<\/div>\s*<\/div>\s*$/gm, '');
  fixed = fixed.replace(/\s*<\/>\s*<\/>\s*$/gm, '</>');
  
  // Fix 9: Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*<>[\s\S]*?\)\s*;?\s*$/gm, (match) => {
    if (!match.includes('</>')) {
      return match.replace(');', '</>);');
    }
    return match;
  });

  // Fix 10: Fix specific malformed JSX patterns
  fixed = fixed.replace(/\s*<\/p>\s*<\/p>\s*$/gm, '');
  fixed = fixed.replace(/\s*<\/div>\s*<\/div>\s*$/gm, '');
  fixed = fixed.replace(/\s*<\/>\s*<\/>\s*$/gm, '</>');
  
  // Fix 11: Fix malformed JSX structure with orphaned content
  fixed = fixed.replace(/\s*<\/p>\s*<\/p>\s*$/gm, '');
  fixed = fixed.replace(/\s*<\/div>\s*<\/div>\s*$/gm, '');
  fixed = fixed.replace(/\s*<\/>\s*<\/>\s*$/gm, '</>');
  
  // Fix 12: Fix malformed JSX structure with orphaned content
  fixed = fixed.replace(/\s*<\/p>\s*<\/p>\s*$/gm, '');
  fixed = fixed.replace(/\s*<\/div>\s*<\/div>\s*$/gm, '');
  fixed = fixed.replace(/\s*<\/>\s*<\/>\s*$/gm, '</>');

  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixed, changes } = fixJSXFinal(content, filePath);
    
    if (changes.length > 0) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✅ Fixed ${filePath}:`);
      changes.forEach(change => console.log(`   - ${change}`));
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('🔧 Starting final JSX error fixes...\n');

  // Find all TypeScript/JSX files in the app directory
  const pattern = 'app/**/*.{ts,tsx,js,jsx}';
  const files = await glob(pattern);

  let fixedCount = 0;
  let totalFiles = files.length;

  console.log(`Found ${totalFiles} files to process...\n`);

  files.forEach(file => {
    if (processFile(file)) {
      fixedCount++;
    }
  });

  console.log(`\n🎉 Final fix complete! Fixed ${fixedCount} out of ${totalFiles} files.`);
}

main().catch(console.error);