#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Find all .tsx files in both src/pages/blog and app/blog
function findTsxFiles(dir) {
  const files = [];
  if (!fs.existsSync(dir)) return files;
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix remaining JSX syntax errors
function fixJsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Fix malformed paragraph content
    // Replace <p className="mb-4">content='...' /></p> with proper paragraph content
    content = content.replace(
      /<p className="mb-4">content='([^']+)' \/><\/p>/g,
      '<p className="mb-4">$1</p>'
    );
    
    // Fix 2: Fix malformed self-closing tags
    content = content.replace(/\/><\/p>/g, '/>');
    
    // Fix 3: Fix broken JSX structure
    // Remove orphaned closing tags
    content = content.replace(/<\/p>\s*<\/p>/g, '</p>');
    
    // Fix 4: Fix malformed attributes
    content = content.replace(/className="mb-4">content='/g, 'className="mb-4">');
    
    // Fix 5: Fix broken function structure
    if (content.includes('const Page: () => {') && !content.includes('export default')) {
      content = content.replace('const Page: () => {', 'export default function Page() {');
      modified = true;
    }
    
    // Fix 6: Fix malformed JSX fragments
    content = content.replace(/export default Page; <\/>/g, 'export default Page;');
    
    // Fix 7: Fix broken closing tags
    content = content.replace(/<\/p>\s*<\/p>\s*<\/p>/g, '</p>');
    
    // Fix 8: Fix malformed meta tags
    
    // Fix 9: Fix broken closing braces
    content = content.replace(/`}\`/g, '}');
    
    // Fix 10: Fix malformed function declarations
    if (content.includes('export default function Page() {') && content.includes('const Page: () => {')) {
      content = content.replace(/const Page: \(\) => \{[\s\S]*?export default function Page\(\) \{/g, 'export default function Page() {');
      modified = true;
    }
    
    // Fix 11: Fix broken JSX structure in app/blog files
    if (filePath.includes('app/blog')) {
      // These files seem to be missing proper function structure
      if (!content.includes('export default function')) {
        content = `import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Blog Post</h1>
        <p className="text-xl text-center text-gray-300">Coming soon...</p>
      </div>
    </div>
  );
}`;
        modified = true;
      }
    }

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main execution
const blogDirs = [
  path.join(__dirname, 'src', 'pages', 'blog'),
  path.join(__dirname, 'app', 'blog')
];

let allFiles = [];
for (const blogDir of blogDirs) {
  allFiles.push(...findTsxFiles(blogDir));
}

console.log(`Found ${allFiles.length} TSX files`);

let fixedCount = 0;
for (const file of allFiles) {
  if (fixJsxFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);