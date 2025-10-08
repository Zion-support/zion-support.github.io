#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

//Function to fix corrupted syntax by removing extra commas and spaces
function fixCorruptedSyntax(content) {
  //Remove the corrupted comment at the top
  content = content.replace(/^\/\/ @ts-noch, e, c, k\s*\n/, '');

  //Fix import statements - remove extra commas and spaces
  content = content.replace(
    /imp, o, r, t\s+([^;]+);/g,
    (match, importContent) => {
      const cleaned = importContent
        .replace(/,/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      return `import ${cleaned};`;
    }
  );

  //Fix export statements
  content = content.replace(
    /exp, o, r, t\s+([^=]+)=/g,
    (match, exportContent) => {
      const cleaned = exportContent
        .replace(/,/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      return `export const ${cleaned} =`;
    }
  );

  //Fix string literals in metadata
  content = content.replace(/ti, t, l, e:\s*'([^']+)'/g, (match, title) => {
    const cleaned = title.replace(/,/g, '').replace(/\s+/g, ' ').trim();
    return `title: '${cleaned}'`;
  });

  content = content.replace(
    /desc r i p t, i, o, n:\s*'([^']+)'/g,
    (match, description) => {
      const cleaned = description.replace(/,/g, '').replace(/\s+/g, ' ').trim();
      return `description: '${cleaned}'`;
    }
  );

  //Fix other common patterns
  content = content.replace(/,/g, '');
  content = content.replace(/\s+/g, ' ');

  //Clean up multiple spaces
  content = content.replace(/\s{2,}/g, ' ');

  return content;
}

//Function to find all corrupted blog files
function findCorruptedFiles() {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const corruptedFiles = [];

  function walkDir(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.tsx') && !file.includes('backup')) {
        const content = fs.readFileSync(filePath, 'utf8');
        if (
          content.includes('imp, o, r, t') ||
          content.includes('exp, o, r, t')
        ) {
          corruptedFiles.push(filePath);
        }
      }
    }
  }

  walkDir(blogDir);
  return corruptedFiles;
}

// Main function
function main() {
  // console.log('🔍 Finding corrupted blog files...');
  const corruptedFiles = findCorruptedFiles();

  // console.log(`Found ${corruptedFiles.length} corrupted files`);

  if (corruptedFiles.length === 0) {
    // console.log('✅ No corrupted files found');
    return;
  }

  // console.log('🔧 Fixing corrupted files...');

  for (const filePath of corruptedFiles) {
    try {
      // console.log(`Fixing: ${filePath}`);
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = fixCorruptedSyntax(content);
      fs.writeFileSync(filePath, fixedContent);
      // console.log(`✅ Fixed: ${filePath}`);
    } catch (error) {
      // console.error(`❌ Error fixing ${filePath}:`, error.message);
    }
  }

  // console.log('🎉 All files have been processed');
}

main();
