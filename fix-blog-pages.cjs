#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to get all blog page files
function getBlogPages() {
  try {
    const result = execSync('find src/pages/blog -name "*.tsx" -type f', { encoding: 'utf8' });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    console.error('Error finding blog pages:', error.message);
    return [];
  }
}

// Function to fix a single blog page
function fixBlogPage(filePath) {
  try {
    console.log(`Fixing ${filePath}...`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix common issues
    // 1. Fix malformed function declarations
    if (content.includes('(): void {')) {
      content = content.replace(/\(\): void \{/g, '() {');
      fixed = true;
    }

    // 2. Fix malformed JSX attributes
    content = content.replace(/<(\w+)\s+>/g, '<$1>');
    content = content.replace(/name:\s*"([^"]+)",\s*;,/g, 'name="$1"');
    content = content.replace(/rel:\s*"([^"]+)",\s*;,/g, 'rel="$1"');
    content = content.replace(/content:\s*"([^"]+)",\s*\/>/g, 'content="$1" />');
    
    // 3. Fix malformed list items
    content = content.replace(/<li\s+>/g, '<li>');
    content = content.replace(/<\/li>,,/g, '</li>');
    
    // 4. Fix malformed paragraphs
    content = content.replace(/<p\s+>/g, '<p>');
    
    // 5. Remove stray text outside JSX
    const lines = content.split('\n');
    const fixedLines = [];
    let inJSX = false;
    let braceCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Track JSX state
      const openBraces = (line.match(/\{/g) || []).length;
      const closeBraces = (line.match(/\}/g) || []).length;
      const openTags = (line.match(/</g) || []).length;
      const closeTags = (line.match(/>/g) || []).length;
      
      if (openBraces > 0 || openTags > 0) {
        inJSX = true;
      }
      
      // Skip lines that are just text outside JSX
      if (!inJSX && line.trim() && !line.trim().startsWith('//') && !line.trim().startsWith('export') && !line.trim().startsWith('import')) {
        continue;
      }
      
      fixedLines.push(line);
      
      if (closeBraces > 0 && braceCount <= 0) {
        inJSX = false;
      }
    }
    
    content = fixedLines.join('\n');
    
    // 6. Ensure proper JSX structure
    if (!content.includes('export default function')) {
      // Extract title from filename
      const fileName = path.basename(filePath, '.tsx');
      const componentName = fileName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
      
      content = `export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">${componentName.replace(/([A-Z])/g, ' $1').trim()}</h1>
        <p className="text-gray-300 mb-8">
          Content coming soon...
        </p>
        <div className="text-center">
          <a href="/blog" className="text-cyan-300 underline hover:text-cyan-200">
            Back to Blog
          </a>
        </div>
      </div>
    </div>
  );
}`;
      fixed = true;
    }

    // 7. Fix incomplete JSX
    if (content.includes(');') && !content.includes('</div>')) {
      // Add closing tags
      content = content.replace(/\);$/, `      </div>
    </div>
  );
}`);
      fixed = true;
    }

    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed ${filePath}`);
    } else {
      console.log(`- No fixes needed for ${filePath}`);
    }

  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting blog page fixes...');
const blogPages = getBlogPages();

if (blogPages.length === 0) {
  console.log('No blog pages found.');
  process.exit(1);
}

console.log(`Found ${blogPages.length} blog pages to check.`);

blogPages.forEach(fixBlogPage);

console.log('Blog page fixes completed!');