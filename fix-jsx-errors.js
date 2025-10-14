#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX errors
function fixJSXErrors(content, filePath) {
  let fixed = content;
  let changes = [];

  // Fix 1: Add missing closing JSX fragment tags
  const openFragments = (fixed.match(/<>/g) || []).length;
  const closeFragments = (fixed.match(/<\/>/g) || []).length;
  
  if (openFragments > closeFragments) {
    const missingFragments = openFragments - closeFragments;
    // Find the last return statement and add closing fragments before the closing parenthesis
    const returnMatch = fixed.match(/return\s*\(\s*<>[\s\S]*?\)\s*;?\s*$/m);
    if (returnMatch) {
      const beforeClosing = fixed.substring(0, fixed.lastIndexOf(')'));
      const afterClosing = fixed.substring(fixed.lastIndexOf(')'));
      fixed = beforeClosing + '</>'.repeat(missingFragments) + afterClosing;
      changes.push(`Added ${missingFragments} missing closing JSX fragment(s)`);
    }
  }

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

  // Fix 3: Fix malformed className values with spaces in numbers
  fixed = fixed.replace(/className="([^"]*?)(\d+)\s+(\d+)\s+(\d+)([^"]*?)"/g, (match, before, num1, num2, num3, after) => {
    return `className="${before}${num1}-${num2}-${num3}${after}"`;
  });

  // Fix 4: Remove duplicate content blocks
  const lines = fixed.split('\n');
  const seenLines = new Set();
  const uniqueLines = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && seenLines.has(trimmed)) {
      continue; // Skip duplicate lines
    }
    seenLines.add(trimmed);
    uniqueLines.push(line);
  }
  
  if (uniqueLines.length !== lines.length) {
    fixed = uniqueLines.join('\n');
    changes.push('Removed duplicate content blocks');
  }

  // Fix 5: Fix malformed JSX structure - remove orphaned closing tags
  fixed = fixed.replace(/\s*<\/>\s*<\/>\s*$/gm, '</>');
  
  // Fix 6: Fix missing closing div tags
  const openDivs = (fixed.match(/<div[^>]*>/g) || []).length;
  const closeDivs = (fixed.match(/<\/div>/g) || []).length;
  
  if (openDivs > closeDivs) {
    const missingDivs = openDivs - closeDivs;
    // Add missing closing divs before the last closing fragment
    const lastFragmentIndex = fixed.lastIndexOf('</>');
    if (lastFragmentIndex !== -1) {
      const beforeFragment = fixed.substring(0, lastFragmentIndex);
      const afterFragment = fixed.substring(lastFragmentIndex);
      fixed = beforeFragment + '</div>'.repeat(missingDivs) + afterFragment;
      changes.push(`Added ${missingDivs} missing closing div(s)`);
    }
  }

  // Fix 7: Clean up extra whitespace and malformed attributes
  fixed = fixed.replace(/\s+className="([^"]*?)\s+"/g, ' className="$1"');
  fixed = fixed.replace(/\s+>\s*$/gm, '>');
  
  // Fix 8: Remove orphaned closing tags at the end
  fixed = fixed.replace(/\s*<\/p>\s*<\/p>\s*$/gm, '');
  fixed = fixed.replace(/\s*<\/div>\s*<\/div>\s*$/gm, '');
  
  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixed, changes } = fixJSXErrors(content, filePath);
    
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
  console.log('🔧 Starting JSX error fixes...\n');

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

  console.log(`\n🎉 Fix complete! Fixed ${fixedCount} out of ${totalFiles} files.`);
}

main().catch(console.error);