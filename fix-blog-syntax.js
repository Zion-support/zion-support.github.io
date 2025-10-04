#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors in blog files
function fixBlogSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix metadata syntax errors
    content = content.replace(/title\s*=\s*'/g, "title: '");
    content = content.replace(/title\s*=\s*"/g, 'title: "');

    // Fix JSX attribute syntax errors (extra quotes)
    content = content.replace(/className="([^"]*)"\s*"/g, 'className="$1"');
    content = content.replace(/href="([^"]*)"\s*"/g, 'href="$1"');
    content = content.replace(/src="([^"]*)"\s*"/g, 'src="$1"');

    // Fix malformed JSX closing tags
    content = content.replace(/<\/div>\s*"/g, '</div>');
    content = content.replace(/<\/h[1-6]>\s*"/g, match =>
      match.replace('"', ''),
    );
    content = content.replace(/<\/p>\s*"/g, '</p>');
    content = content.replace(/<\/span>\s*"/g, '</span>');

    // Fix JSX expressions with extra quotes
    content = content.replace(/<([^>]*)\s*>\s*"/g, '<$1>');

    // Fix missing closing tags for common elements
    const lines = content.split('\n');
    const fixedLines = [];
    let openTags = [];

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];

      // Track opening tags
      const openTagMatches = line.match(/<(\w+)(?:\s[^>]*)?>/g);
      if (openTagMatches) {
        openTagMatches.forEach(tag => {
          const tagName = tag.match(/<(\w+)/)?.[1];
          if (
            tagName &&
            !['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)
          ) {
            openTags.push(tagName);
          }
        });
      }

      // Track closing tags
      const closeTagMatches = line.match(/<\/(\w+)>/g);
      if (closeTagMatches) {
        closeTagMatches.forEach(tag => {
          const tagName = tag.match(/<\/(\w+)>/)?.[1];
          if (tagName) {
            const index = openTags.lastIndexOf(tagName);
            if (index !== -1) {
              openTags.splice(index, 1);
            }
          }
        });
      }

      fixedLines.push(line);
    }

    // Add missing closing tags at the end
    while (openTags.length > 0) {
      const tag = openTags.pop();
      fixedLines.push(`</${tag}>`);
    }

    const newContent = fixedLines.join('\n');

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all blog files
const blogDir = path.join(__dirname, 'app', 'blog');
const blogFiles = [];

function findBlogFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findBlogFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      blogFiles.push(filePath);
    }
  }
}

if (fs.existsSync(blogDir)) {
  findBlogFiles(blogDir);
  console.log(`Found ${blogFiles.length} blog files to process`);

  let fixedCount = 0;
  for (const file of blogFiles) {
    if (fixBlogSyntax(file)) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files`);
} else {
  console.log('Blog directory not found');
}
