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
  
  // Replace Helmet import with Head
  if (content.includes("import { Helmet } from 'react-helmet-async';")) {
    content = content.replace(
      "import { Helmet } from 'react-helmet-async';",
      "import Head from 'next/head';"
    );
    modified = true;
  }
  
  // Replace Helmet component with Head
  if (content.includes('<Helmet>')) {
    content = content.replace(/<Helmet>/g, '<Head>');
    content = content.replace(/<\/Helmet>/g, '</Head>');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${path.relative(__dirname, filePath)}`);
    fixedCount++;
  }
});

console.log(`Helmet fixes completed! Fixed ${fixedCount} files.`);