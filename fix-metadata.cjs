#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix broken metadata objects
function fixMetadata(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Look for broken metadata objects that start with a string instead of title
    const brokenMetadataRegex = /export const metadata = \{\s*'([^']+)',/g;
    
    if (brokenMetadataRegex.test(content)) {
      console.log(`Fixing broken metadata in: ${filePath}`);
      
      // Replace broken metadata with proper structure
      content = content.replace(
        /export const metadata = \{\s*'([^']+)',\s*keywords: \[([\s\S]*?)\],?\s*\};/g,
        (match, description, keywords) => {
          // Extract title from filename
          const filename = path.basename(filePath, path.extname(filePath));
          const title = filename
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          
          return `export const metadata = {
  title: '${title}',
  description: '${description}',
  keywords: [${keywords}],
};`;
        }
      );

      // Also handle cases where there's just a description string
      content = content.replace(
        /export const metadata = \{\s*'([^']+)',\s*\};/g,
        (match, description) => {
          const filename = path.basename(filePath, path.extname(filePath));
          const title = filename
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
          
          return `export const metadata = {
  title: '${title}',
  description: '${description}'
};`;
        }
      );

      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all blog files
function fixAllBlogFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += fixAllBlogFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixMetadata(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
const blogDir = path.join(__dirname, 'app/blog');
console.log('Starting metadata fix...');
const fixedCount = fixAllBlogFiles(blogDir);
console.log(`Fixed ${fixedCount} files.`);