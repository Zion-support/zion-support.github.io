import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(findTsxFiles(filePath));
    } else if (file.endsWith('.tsx')) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Find all .tsx files in the app directory
const tsxFiles = findTsxFiles(path.join(__dirname, 'app'));

let fixedCount = 0;

tsxFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Check if Link is used but not imported
  if (content.includes('<Link') && !content.includes("import Link from 'next/link'")) {
    const importMatch = content.match(/import React from 'react';\nimport Head from 'next\/head';/);
    if (importMatch) {
      content = content.replace(
        "import React from 'react';\nimport Head from 'next/head';",
        "import React from 'react';\nimport Head from 'next/head';\nimport Link from 'next/link';"
      );
      modified = true;
    }
  }
  
  // Check if Database is used but not imported
  if (content.includes('<Database') && !content.includes('Database')) {
    const lucideMatch = content.match(/import { ([^}]+) } from 'lucide-react';/);
    if (lucideMatch) {
      const existingImports = lucideMatch[1];
      if (!existingImports.includes('Database')) {
        content = content.replace(
          `import { ${existingImports} } from 'lucide-react';`,
          `import { ${existingImports}, Database } from 'lucide-react';`
        );
        modified = true;
      }
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports in ${path.relative(__dirname, filePath)}`);
    fixedCount++;
  }
});

console.log(`Import fixes completed! Fixed ${fixedCount} files.`);