#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Find all .tsx files in src/pages/blog
function findTsxFiles(dir) {
  const files = [];
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

// Extract meaningful content from corrupted files
function extractContent(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract title from Helmet or title tags
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const title = titleMatch ? titleMatch[1].trim() : 'Blog Post';
    
    // Extract meta description
    const descMatch = content.match(/content=['"]([^'"]+)['"]/);
    const description = descMatch ? descMatch[1].trim() : 'Blog post content';
    
    // Extract URL from href or canonical links
    const urlMatch = content.match(/href=['"]([^'"]+)['"]/);
    const url = urlMatch ? urlMatch[1].trim() : '/blog';
    
    // Extract list items
    const listItems = [];
    const liMatches = content.match(/<li>([^<]+)<\/li>/g);
    if (liMatches) {
      liMatches.forEach(li => {
        const text = li.replace(/<\/?li>/g, '').trim();
        if (text && !text.includes('import') && !text.includes('export')) {
          listItems.push(text);
        }
      });
    }
    
    // Extract paragraph content
    const paragraphs = [];
    const pMatches = content.match(/<p>([^<]+)<\/p>/g);
    if (pMatches) {
      pMatches.forEach(p => {
        const text = p.replace(/<\/?p>/g, '').trim();
        if (text && !text.includes('import') && !text.includes('export') && text.length > 10) {
          paragraphs.push(text);
        }
      });
    }
    
    return { title, description, url, listItems, paragraphs };
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return null;
  }
}

// Create a properly structured blog page
function createProperBlogPage(filePath, extracted) {
  if (!extracted) return false;
  
  const { title, description, url, listItems, paragraphs } = extracted;
  
  const properContent = `import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>${title}</title>
        <meta name="description" content="${description}" />
        <link rel="canonical" href="https://ziontechgroup.com${url}" />
      </Helmet>
      
      <div className="container mx-auto px-6 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center mb-4">${title}</h1>
            <p className="text-xl text-gray-300 text-center">${description}</p>
          </header>
          
          <div className="prose prose-lg max-w-none text-gray-300">
            ${paragraphs.map(p => `<p className="mb-4">${p}</p>`).join('\n            ')}
            
            ${listItems.length > 0 ? `
            <ul className="list-disc list-inside space-y-2 my-6">
              ${listItems.map(item => `<li>${item}</li>`).join('\n              ')}
            </ul>
            ` : ''}
            
            <div className="mt-8 pt-8 border-t border-gray-700">
              <Link to="/blog" className="text-cyan-300 underline hover:text-cyan-200 transition-colors">
                ← Back to Blog
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}`;

  try {
    fs.writeFileSync(filePath, properContent);
    console.log(`Rebuilt: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
const blogDir = path.join(__dirname, 'src', 'pages', 'blog');
if (!fs.existsSync(blogDir)) {
  console.log('Blog directory not found');
  process.exit(1);
}

const tsxFiles = findTsxFiles(blogDir);
console.log(`Found ${tsxFiles.length} TSX files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  const extracted = extractContent(file);
  if (createProperBlogPage(file, extracted)) {
    fixedCount++;
  }
}

console.log(`Rebuilt ${fixedCount} files`);