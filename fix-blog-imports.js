#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const fixBlogImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix Navigation import in blog files
    if (content.includes("import Navigation from '../components/Navigation'")) {
      content = content.replace(
        "import Navigation from '../components/Navigation'",
        "import Navigation from '../../components/Navigation'"
      );
      modified = true;
    }
    
    // Fix Footer import in blog files
    if (content.includes("import Footer from '../components/Footer'")) {
      content = content.replace(
        "import Footer from '../components/Footer'",
        "import Footer from '../../components/Footer'"
      );
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed imports in ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
};

const findBlogFiles = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findBlogFiles(fullPath));
    } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Find all .tsx files in the blog directory
const blogFiles = findBlogFiles('./app/blog');

console.log(`Found ${blogFiles.length} blog files`);

// Fix each file
blogFiles.forEach(fixBlogImports);

console.log('✅ All blog files processed');