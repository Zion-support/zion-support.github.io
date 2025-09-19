const fs = require('fs');
const path = require('path');
// Function to fix unescaped entities in JSX,
function fixUnescapedEntities(content) {,
  // Fix apostrophes in JSX text content,
  content = content.replace(/([^\])'/g, "$1&apos,");
  // Fix quotes in JSX text content,
  content = content.replace(/([^\])"/g, '$1&quot,');
  return content;
}
,
// Function to replace <a> tags with Link components,
function fixLinkTags(content) {,
  // Add Link import if not present,
  if (content.includes('<a href="/') && !content.includes('import Link')) {,
    content = content.replace(/import React from 'react',/, "import React from 'react',\nimport Link from 'next/link',");
  }
  // Replace <a> tags with Link components,
  content = content.replace(/<a href="(\/[^"]*)"([^>]*)>/g, '<Link href="$1"$2>');
  content = content.replace(/<\/a>/g, '</Link>');
  return content;
}
,
// Function to process a file,
function processFile(filePath) {,
  try {,
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    // Only process JSX/TSX files,
    if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {,
      newContent = fixUnescapedEntities(newContent);
      newContent = fixLinkTags(newContent);
    }
,
    if (newContent !== content) {,
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath,}`);
    }
  } catch (error) {,
    console.error(`Error processing ${filePath}:`, error.message);
  }
}
,
// Function to recursively process directory,
function processDirectory(dirPath) {,
  try {,
    const items = fs.readdirSync(dirPath);
    for (const item of items) {,
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {,
        // Skip node_modules and .git directories,
        if (item !== 'node_modules' && item !== '.git' && item !== '.next') {,
          processDirectory(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {,
        processFile(fullPath);
      }
    }
  } catch (error) {,
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
}
,
// Start processing from current directory,
console.log('Starting lint fixes...');
processDirectory('.');
console.log('Lint fixes completed!');