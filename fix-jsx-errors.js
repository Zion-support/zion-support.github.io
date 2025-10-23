import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common JSX fixes
const fixes = [
  // Fix missing closing tags
  {
    pattern: /<section[^>]*>[\s\S]*?(?=<section|<div|<h[1-6]|<p|<ul|<ol|<li)/g,
    replacement: (match) => {
      // Check if section has closing tag
      if (!match.includes('</section>')) {
        return match + '\n        </section>';
      }
      return match;
    }
  },
  
  // Fix missing closing div tags
  {
    pattern: /<div[^>]*>[\s\S]*?(?=<div|<section|<h[1-6]|<p|<ul|<ol|<li)/g,
    replacement: (match) => {
      if (!match.includes('</div>')) {
        return match + '\n          </div>';
      }
      return match;
    }
  },
  
  // Fix malformed JSX fragments
  {
    pattern: /<>[\s\S]*?(?=<[^/]|$)/g,
    replacement: (match) => {
      if (!match.includes('</>')) {
        return match + '\n    </>';
      }
      return match;
    }
  },
  
  // Fix missing closing ul tags
  {
    pattern: /<ul[^>]*>[\s\S]*?(?=<ul|<div|<section|<h[1-6]|<p)/g,
    replacement: (match) => {
      if (!match.includes('</ul>')) {
        return match + '\n                    </ul>';
      }
      return match;
    }
  },
  
  // Fix missing closing li tags
  {
    pattern: /<li[^>]*>[\s\S]*?(?=<li|<ul|<div|<section)/g,
    replacement: (match) => {
      if (!match.includes('</li>')) {
        return match + '</li>';
      }
      return match;
    }
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply fixes
    fixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Additional specific fixes
    // Fix missing imports
    if (content.includes('React.FC') && !content.includes("import React")) {
      content = '"use client";\nimport React from "react";\n' + content;
    }
    
    // Fix missing Helmet import
    if (content.includes('<Helmet>') && !content.includes('react-helmet-async')) {
      content = content.replace('"use client";\nimport React from "react";', 
        '"use client";\nimport React from "react";\nimport { Helmet } from "react-helmet-async";');
    }
    
    // Fix missing closing tags in common patterns
    content = content.replace(/(<div[^>]*>[\s\S]*?)(?=<div|<section|<h[1-6]|<p|<ul|<ol|<li)/g, (match) => {
      if (!match.includes('</div>')) {
        return match + '\n        </div>';
      }
      return match;
    });
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*([^}]+)\s*\}/g, (match, expr) => {
      // Fix common malformed expressions
      if (expr.includes('item}') && !expr.includes('{item')) {
        return `{${expr.replace('item}', 'item}')}`;
      }
      return match;
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TSX files
const appDir = path.join(__dirname, 'app');
const files = [];

function getAllTsxFiles(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllTsxFiles(fullPath);
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  });
}

getAllTsxFiles(appDir);

console.log(`Found ${files.length} TSX files`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);