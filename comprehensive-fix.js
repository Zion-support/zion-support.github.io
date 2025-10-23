import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common JSX issues
    content = content.replace(/\s*<\/>\s*<Helmet>/g, '\n      <Helmet>');
    content = content.replace(/\s*<\/div>\s*<div/g, '\n        <div');
    content = content.replace(/\s*<\/div>\s*<\/div>/g, '\n        </div>\n      </div>');
    content = content.replace(/\s*<\/div>\s*<h[1-6]/g, '\n          <h$1');
    content = content.replace(/\s*<\/div>\s*<p/g, '\n          <p');
    content = content.replace(/\s*<\/div>\s*<ul/g, '\n            <ul');
    content = content.replace(/\s*<\/div>\s*<li/g, '\n              <li');
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<\/>\s*<Helmet>/g, '<>\n      <Helmet>');
    content = content.replace(/<>\s*<\/>\s*<div/g, '<>\n      <div');
    
    // Fix missing closing tags
    content = content.replace(/(<section[^>]*>[\s\S]*?)(?=<section|<div|<h[1-6]|<p|<ul|<ol|<li|$)/g, (match) => {
      if (!match.includes('</section>')) {
        return match + '\n        </section>';
      }
      return match;
    });
    
    content = content.replace(/(<div[^>]*>[\s\S]*?)(?=<div|<section|<h[1-6]|<p|<ul|<ol|<li|$)/g, (match) => {
      if (!match.includes('</div>')) {
        return match + '\n          </div>';
      }
      return match;
    });
    
    // Fix malformed JSX expressions
    content = content.replace(/\{\s*([^}]+)\s*\}/g, (match, expr) => {
      if (expr.includes('item}') && !expr.includes('{item')) {
        return `{${expr.replace('item}', 'item}')}`;
      }
      return match;
    });
    
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
    
    // Fix malformed JSX fragments
    content = content.replace(/(<>[\s\S]*?)(?=<[^/]|$)/g, (match) => {
      if (!match.includes('</>')) {
        return match + '\n    </>';
      }
      return match;
    });
    
    // Fix missing closing ul tags
    content = content.replace(/(<ul[^>]*>[\s\S]*?)(?=<ul|<div|<section|<h[1-6]|<p)/g, (match) => {
      if (!match.includes('</ul>')) {
        return match + '\n                    </ul>';
      }
      return match;
    });
    
    // Fix missing closing li tags
    content = content.replace(/(<li[^>]*>[\s\S]*?)(?=<li|<ul|<div|<section)/g, (match) => {
      if (!match.includes('</li>')) {
        return match + '</li>';
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