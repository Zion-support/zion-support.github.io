#!/usr/bin/env node
/**
 * Script to fix syntax errors in blog files
 * Fixes common JSX syntax issues like malformed comments and duplicate returns
 */ import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// console.log('🔧 Starting blog syntax fix process...');

//Get all blog files with syntax errors
const blogDir = './app/blog';
const files = [];

try {
  const blogFiles = execSync(`find ${blogDir} -name "*.tsx" -type f`, {
    encoding: 'utf8',
  })
    .split('\n')
    .filter(file => file.trim());

  // console.log(`📁 Found ${blogFiles.length} blog files to check`);

  for (const file of blogFiles) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      let modified = false;
      let newContent = content;

      //Fix malformed JSX comments {/* content */}
      if (newContent.includes('{/* content */}')) {
        newContent = newContent.replace(/\{\/\* content \*\/\}/g, '');
        modified = true;
      }

      //Fix duplicate return statements
      const returnPattern =
        /return\s*\(\s*<div>\s*\{\/\* content \*\/\}\s*<\/div>\s*\)\s*return\s*\(/g;
      if (returnPattern.test(newContent)) {
        newContent = newContent.replace(returnPattern, 'return (');
        modified = true;
      }

      //Fix malformed metadata objects
      const metadataPattern =
        /export const metadata: Metadata = \{\/\* content \*\/\}/g;
      if (metadataPattern.test(newContent)) {
        newContent = newContent.replace(
          metadataPattern,
          'export const metadata: Metadata = {'
        );
        modified = true;
      }

      //Fix unclosed JSX tags and malformed structures
      //Look for patterns like <div>/* content */} return (
      const malformedPattern =
        /<div>\s*\{\/\* content \*\/\}\s*\}\s*return\s*\(/g;
      if (malformedPattern.test(newContent)) {
        newContent = newContent.replace(malformedPattern, 'return (');
        modified = true;
      }

      //Fix missing semicolons in metadata
      const semicolonPattern = /export const metadata: Metadata = \{\s*title:/g;
      if (semicolonPattern.test(newContent)) {
        newContent = newContent.replace(
          semicolonPattern,
          'export const metadata: Metadata = {\n  title:'
        );
        modified = true;
      }

      //Fix malformed JSX structures with unclosed tags
      const unclosedTagPattern = /<div>\s*\{\/\* content \*\/\}\s*return\s*\(/g;
      if (unclosedTagPattern.test(newContent)) {
        newContent = newContent.replace(unclosedTagPattern, 'return (');
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(file, newContent);
        // console.log(`✅ Fixed syntax errors in ${file}`);
        files.push(file);
      }
    } catch (error) {
      // console.log(`❌ Error processing ${file}: ${error.message}`);
    }
  }

  // console.log(`\n🎉 Fixed syntax errors in ${files.length} files`);

  // Run linting to check if errors are resolved
  // console.log('\n🔍 Running linting to verify fixes...');
  try {
    execSync('npm run lint:comprehensive', { stdio: 'inherit' });
    // console.log('✅ All syntax errors have been resolved!');
  } catch (error) {
    // console.log(
      '⚠️ Some syntax errors may still exist. Check the output above.'
    );
  }
} catch (error) {
  // console.log(`❌ Error: ${error.message}`);
  process.exit(1);
}
