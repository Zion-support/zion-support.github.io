const fs = require('fs');
const path = require('path');

// Find all files that import react-helmet-async
const findFiles = (dir, files = []) => {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findFiles(filePath, files);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      files.push(filePath);
    }
  }
  return files;
};

const files = findFiles('/workspace/app');
let fixedCount = 0;

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove react-helmet-async import
    if (content.includes("import { Helmet } from 'react-helmet-async';")) {
      content = content.replace("import { Helmet } from 'react-helmet-async';\n", '');
      modified = true;
    }
    if (content.includes('import { Helmet } from "react-helmet-async";')) {
      content = content.replace('import { Helmet } from "react-helmet-async";\n', '');
      modified = true;
    }

    // Remove Helmet usage
    if (content.includes('<Helmet>')) {
      // Remove entire Helmet block
      content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>/g, '');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);