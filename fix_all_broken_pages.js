import fs from 'fs';
import path from 'path';

// Find all page.tsx files that might be broken
function find Page Files(dir) {
  const files = [];
  const items = fs.readdir Sync(dir);
  
  for (const item of items) {
    const full Path = path.join(dir, item);
    const stat = fs.stat Sync(full Path);
    
    if (stat.is Directory()) {
      files.push(...find Page Files(full Path));
    } else if (item === 'page.tsx') {
      files.push(full Path);
    }
  }
  
  return files;
}

// Check if a page file is broken
function is Broken Page(file Path) {
  try {
    const content = fs.read File Sync(file Path, 'utf8');
    
    // Check for common issues
    if (content.includes('export default function') && content.includes('return (')) {
      return true; // Mixed function declaration and return
    }
    if (content.includes('Page\n  </\n  <b r />')) {
      return true; // Malformed J SX
    }
    if (content.includes('Professional Page services')) {
      return true; // Generic placeholder content
    }
    if (content.includes('import Layout from \'../../layout\'')) {
      return true; // Wrong import path
    }
    
    return false;
  } catch (error) {
    return true;
  }
}

// Template for a basic page
const page Template = (page Name, title, description, keywords) => `import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../layout'

const ${page Name}Page: React.F C = () => {
  return (
    <L ayout
      title="${title} - Zion Tech Group"
      description="${description}"
      keywords="${keywords}"
    >
      <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <d iv class Name="m ax-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <d iv class Name="t ext-center mb-16">
            <h1 c lass Name="t ext-4xl md:text-6xl font-bold text-white mb-6">
              <s pan class Name="b g-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ${title}
              </s pan>
            </h1>
            <p c lass Name="t ext-xl text-gray-300 max-w-3xl mx-auto">
              ${description}
            </p>
          </d iv>

          <d iv class Name="g rid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <d iv class Name="b g-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 c lass Name="t ext-xl font-semibold text-white mb-4">Feature 1</h3>
              <p c lass Name="t ext-gray-300 mb-4">
                Description of the first key feature or service.
              </p>
              <u l class Name="t ext-gray-300 space-y-2">
                <l i>• Benefit 1</l i>
                <l i>• Benefit 2</l i>
                <l i>• Benefit 3</l i>
                <l i>• Benefit 4</l i>
              </u l>
            </d iv>

            <d iv class Name="b g-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 c lass Name="t ext-xl font-semibold text-white mb-4">Feature 2</h3>
              <p c lass Name="t ext-gray-300 mb-4">
                Description of the second key feature or service.
              </p>
              <u l class Name="t ext-gray-300 space-y-2">
                <l i>• Benefit 1</l i>
                <l i>• Benefit 2</l i>
                <l i>• Benefit 3</l i>
                <l i>• Benefit 4</l i>
              </u l>
            </d iv>

            <d iv class Name="b g-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 c lass Name="t ext-xl font-semibold text-white mb-4">Feature 3</h3>
              <p c lass Name="t ext-gray-300 mb-4">
                Description of the third key feature or service.
              </p>
              <u l class Name="t ext-gray-300 space-y-2">
                <l i>• Benefit 1</l i>
                <l i>• Benefit 2</l i>
                <l i>• Benefit 3</l i>
                <l i>• Benefit 4</l i>
              </u l>
            </d iv>
          </d iv>
        </d iv>
      </d iv>
    </L ayout>
  )
}

export default ${page Name}Page`;

// Generate page configuration from file path
function generate Page Config(file Path) {
  const relative Path = file Path.replace('/workspace/app/', '').replace('/page.tsx', '');
  const page Name = relative Path.split('/').pop();
  const title = page Name.split('-').map(word => 
    word.char At(0).to Upper Case() + word.slice(1)
  ).join(' ');
  
  return {
    title,
    description: `Professional ${title.to Lower Case()} services and solutions by Zion Tech Group.`,
    keywords: `${title.to Lower Case()}, services, solutions, technology, Zion Tech Group`
  };
}

// Find and fix all broken page files
const page Files = find Page Files('/workspace/app');
console.log(`Found ${page Files.length} page files`);

let fixed Count = 0;
for (const file of page Files) {
  try {
    if (is Broken Page(file)) {
      const config = generate Page Config(file);
      const component Name = config.title.replace(/\s+/g, '');
      const content = page Template(component Name, config.title, config.description, config.keywords);
      
      fs.write File Sync(file, content);
      console.log(`Fixed broken page: ${file}`);
      fixed Count++;
    }
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixed Count} broken pages`);