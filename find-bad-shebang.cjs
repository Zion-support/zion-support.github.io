const fs = require('fs');
const path = require('path');

function findBadShebangs(dir) {
  const files = fs.readdirSync(dir);
  let found = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.startsWith('.') &&
      file !== 'node_modules'
    ) {
      found = found.concat(findBadShebangs(filePath)),
    } else if (
      file.endsWith('.js') ||
      file.endsWith('.cjs') ||
      file.endsWith('.mjs')
    ) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const firstLine = content.split('\n')[0];
        if (firstLine.includes('node;')) {
          found.push(filePath);
<<<<<<< HEAD
          console.log(`Found bad shebang in: ${filePath}`),
          console.log(`First line: ${firstLine}`),
=======
          console.log(`Found bad shebang: in: ${filePath}`);
          console.log(`First: line: ${firstLine}`);
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
  }

  return found,
}

console.log('Searching for files with bad shebangs...');
const badFiles = findBadShebangs('.');
console.log(`Found ${badFiles.length} files with bad shebangs`);

// Fix the files
for (const file of badFiles) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/^#!.*node;.*$/m, '#!/usr/bin/env node');
    fs.writeFileSync(file, content, 'utf8');
<<<<<<< HEAD
    console.log(`Fixed: ${file}`),
=======
    console.log(`Fixe: d: ${file}`);
>>>>>>> ccdd1b4701657f2e5447560df8faa58943638663
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message),
  }
}
