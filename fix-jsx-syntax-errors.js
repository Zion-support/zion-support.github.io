#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common JSX syntax errors
function fixJsxSyntax(content, filePath) {
  let fixed = content;
  let changes = 0;

  // Fix duplicate closing Helmet tags
  fixed = fixed.replace(/<\/Helmet>\s*<\/Helmet>/g, '</Helmet>');
  changes += (content.match(/<\/Helmet>\s*<\/Helmet>/g) || []).length;

  // Fix missing closing tags for React fragments
  const fragmentOpenCount = (fixed.match(/<>/g) || []).length;
  const fragmentCloseCount = (fixed.match(/<\/>/g) || []).length;
  
  if (fragmentOpenCount > fragmentCloseCount) {
    const missingFragments = fragmentOpenCount - fragmentCloseCount;
    // Add missing closing fragments at the end before the last closing brace
    const lastBraceIndex = fixed.lastIndexOf('}');
    if (lastBraceIndex !== -1) {
      const beforeLastBrace = fixed.substring(0, lastBraceIndex);
      const afterLastBrace = fixed.substring(lastBraceIndex);
      fixed = beforeLastBrace + '</>'.repeat(missingFragments) + afterLastBrace;
      changes += missingFragments;
    }
  }

  // Fix malformed Helmet tags - remove empty or incomplete Helmet sections
  fixed = fixed.replace(/<Helmet>\s*<\/Helmet>/g, '');
  changes += (content.match(/<Helmet>\s*<\/Helmet>/g) || []).length;

  // Fix incomplete Helmet tags that are missing content
  fixed = fixed.replace(/<Helmet>\s*<\/div>\s*<\/div>\s*<\/>/g, '');
  changes += (content.match(/<Helmet>\s*<\/div>\s*<\/div>\s*<\/>/g) || []).length;

  // Fix missing closing tags for div elements
  const divOpenCount = (fixed.match(/<div[^>]*>/g) || []).length;
  const divCloseCount = (fixed.match(/<\/div>/g) || []).length;
  
  if (divOpenCount > divCloseCount) {
    const missingDivs = divOpenCount - divCloseCount;
    // Add missing closing divs before the last closing fragment or brace
    const lastFragmentIndex = fixed.lastIndexOf('</>');
    const lastBraceIndex = fixed.lastIndexOf('}');
    const insertIndex = Math.max(lastFragmentIndex, lastBraceIndex);
    
    if (insertIndex !== -1) {
      const beforeInsert = fixed.substring(0, insertIndex);
      const afterInsert = fixed.substring(insertIndex);
      fixed = beforeInsert + '</div>'.repeat(missingDivs) + afterInsert;
      changes += missingDivs;
    }
  }

  // Fix missing closing tags for section elements
  const sectionOpenCount = (fixed.match(/<section[^>]*>/g) || []).length;
  const sectionCloseCount = (fixed.match(/<\/section>/g) || []).length;
  
  if (sectionOpenCount > sectionCloseCount) {
    const missingSections = sectionOpenCount - sectionCloseCount;
    const lastFragmentIndex = fixed.lastIndexOf('</>');
    const lastBraceIndex = fixed.lastIndexOf('}');
    const insertIndex = Math.max(lastFragmentIndex, lastBraceIndex);
    
    if (insertIndex !== -1) {
      const beforeInsert = fixed.substring(0, insertIndex);
      const afterInsert = fixed.substring(insertIndex);
      fixed = beforeInsert + '</section>'.repeat(missingSections) + afterInsert;
      changes += missingSections;
    }
  }

  // Fix syntax errors with unexpected tokens
  fixed = fixed.replace(/\}\s*\}\s*\)/g, '})');
  changes += (content.match(/\}\s*\}\s*\)/g) || []).length;

  // Fix missing semicolons in JSX expressions
  fixed = fixed.replace(/(\w+)\s*\)\s*\)/g, '$1);');
  changes += (content.match(/(\w+)\s*\)\s*\)/g) || []).length;

  // Fix malformed JSX expressions
  fixed = fixed.replace(/\}\s*\)\s*\)/g, '})');
  changes += (content.match(/\}\s*\)\s*\)/g) || []).length;

  // Fix missing closing parentheses
  fixed = fixed.replace(/\}\s*\)\s*\)/g, '})');
  changes += (content.match(/\}\s*\)\s*\)/g) || []).length;

  // Clean up any remaining malformed JSX
  fixed = fixed.replace(/<Helmet>\s*<\/div>\s*<\/div>\s*<\/>/g, '');
  changes += (content.match(/<Helmet>\s*<\/div>\s*<\/div>\s*<\/>/g) || []).length;

  return { content: fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixed, changes } = fixJsxSyntax(content, filePath);
    
    if (changes > 0) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed ${changes} issues in ${filePath}`);
      return changes;
    }
    return 0;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return 0;
  }
}

// Main function
async function main() {
  console.log('Starting JSX syntax error fixes...');
  
  // Find all TypeScript/JavaScript files in the app directory
  const pattern = 'app/**/*.{ts,tsx,js,jsx}';
  const files = await glob(pattern);
  
  let totalChanges = 0;
  let filesProcessed = 0;
  
  files.forEach(file => {
    const changes = processFile(file);
    totalChanges += changes;
    if (changes > 0) {
      filesProcessed++;
    }
  });
  
  console.log(`\nCompleted! Fixed ${totalChanges} issues across ${filesProcessed} files.`);
}

// Run the script
main().catch(console.error);