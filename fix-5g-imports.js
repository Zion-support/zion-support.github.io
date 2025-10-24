const fs = require('fs');
const path = require('path');

// Find all 5G related page files
const appDir = path.join(__dirname, 'app');
const files = [];

function findFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (item.includes('5g')) {
        // Look for page.tsx in 5g directories
        const pageFile = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          files.push(pageFile);
        }
      }
      findFiles(fullPath);
    } else if (item.includes('5g') && item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
}

findFiles(appDir);

console.log(`Found ${files.length} 5G files to fix`);

for (const filePath of files) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if Link is used but not imported
    if (content.includes('<Link') && !content.includes('import Link from "next/link"')) {
      // Add Link import after the existing imports
      content = content.replace(
        /import Head from "next\/head";/,
        'import Head from "next/head";\nimport Link from "next/link";'
      );
    }
    
    // Check if ArrowRight is used but not imported
    if (content.includes('ArrowRight') && !content.includes('import { ArrowRight }')) {
      // Add ArrowRight import
      if (content.includes('import Link from "next/link";')) {
        content = content.replace(
          'import Link from "next/link";',
          'import Link from "next/link";\nimport { ArrowRight } from "lucide-react";'
        );
      } else {
        content = content.replace(
          /import Head from "next\/head";/,
          'import Head from "next/head";\nimport { ArrowRight } from "lucide-react";'
        );
      }
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

console.log('Done fixing 5G imports');