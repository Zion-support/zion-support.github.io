#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

//Function to fix corrupted syntax by removing extra commas and spaces
function fixCorruptedSyntax(content) {
  //Remove the corrupted comment at the top
  content = content.replace(/^\/\/ @ts-noch, e, c, k\s*\n/, '');

  //Fix import statements - remove extra commas and spaces
  content = content.replace(/imp, o, r, t\s+([^;]+);/g, (match, importContent) => {
    const _cleaned = importContent.replace(/,/g, '').replace(/\s+/g, ' ').trim();
    return `import ${cleaned};`;
  });

  //Fix export statements
  content = content.replace(/exp, o, r, t\s+([^=]+)=/g, (match, exportContent) => {
    const _cleaned = exportContent.replace(/,/g, '').replace(/\s+/g, ' ').trim();
    return `export const ${cleaned} =`;
  });

  //Fix string literals in metadata
  content = content.replace(/ti, t, l, e:\s*'([^']+)'/g, (match, title) => {
    //     const cleaned = title.replace(/,/g, '').replace(/\s+/g, ' ').trim();
    return `title: '${cleaned}'`;
  });

  content = content.replace(/desc r i p t, i, o, n:\s*'([^']+)'/g, (match, description) => {
    //       const cleaned = description.replace(/,/g, '').replace(/\s+/g, ' ').trim();
    return `description: '${cleaned}'`;
  });

  //Fix other common patterns
  content = content.replace(/,/g, '');
  content = content.replace(/\s+/g, ' ');

  //Clean up multiple spaces
  content = content.replace(/\s{2,}/g, ' ');

  return content;
}

//Function to find all corrupted blog files
function findCorruptedFiles() {
  //   const blogDir = path.join(process.cwd(), 'app', 'blog');
  const _corruptedFiles = [];

  function walkDir(_dir) {
    const _files = fs.readdirSync(dir);

    for (const file of files) {
      //       const filePath = path.join(dir, file);
      const _stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.tsx') && !file.includes('backup')) {
        const _content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('imp, o, r, t') || content.includes('exp, o, r, t')) {
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
  //   const corruptedFiles = findCorruptedFiles();

  //   if (corruptedFiles.length === 0) {
    //     return;
  }

  //   for (const filePath of corruptedFiles) {
    try {
      //       const content = fs.readFileSync(filePath, 'utf8');
      //       const fixedContent = fixCorruptedSyntax(content);
      fs.writeFileSync(filePath, fixedContent);
      //       } catch (error) {
      //       }
  }

  //   }

main();
