#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all pages syntax errors...');

// Function to fix common syntax errors in pages
function fixPageSyntax(content) {
  // Fix missing quotes in object properties
  content = content.replace(/(\w+):\s*([^,}]+)(?=\s*[,}])/g, (match, key, value) => {
    if (!value.trim().startsWith("'") && !value.trim().startsWith('"') && !value.trim().startsWith('[') && !value.trim().startsWith('{') && !value.trim().match(/^\d+$/) && !value.trim().match(/^(true|false|null)$/)) {
      return `${key}: '${value.trim()}'`;
    }
    return match;
  });
  
  // Fix missing quotes in JSX attributes
  content = content.replace(/className=([^"'\s>]+)/g, 'className="$1"');
  content = content.replace(/name=([^"'\s>]+)/g, 'name="$1"');
  content = content.replace(/content=([^"'\s>]+)/g, 'content="$1"');
  content = content.replace(/href=([^"'\s>]+)/g, 'href="$1"');
  
  // Fix malformed JSX attributes
  content = content.replace(/name="description content="/g, 'name="description" content="');
  content = content.replace(/name=robots"/g, 'name="robots"');
  content = content.replace(/rel=canonical"/g, 'rel="canonical"');
  
  // Fix missing quotes in string literals
  content = content.replace(/([^'"])\s*([A-Z][a-zA-Z\s]+)\s*'/g, '$1 \'$2\'');
  
  // Fix malformed arrays
  content = content.replace(/\[([^[\]]+)\]/g, (match, content) => {
    if (content.includes("'") && !content.includes("',")) {
      return `[${content.split(/(?=[A-Z])/).map(item => `'${item.trim()}'`).join(', ')}]`;
    }
    return match;
  });
  
  // Fix missing closing quotes
  content = content.replace(/([^'"])\s*([^'"]*)\s*'/g, (match, start, middle) => {
    if (middle && !middle.includes("'")) {
      return `${start} '${middle}'`;
    }
    return match;
  });
  
  // Fix JSX fragments
  content = content.replace(/<>\s*<Head>/g, '<>\n      <Head>');
  
  return content;
}

// Get all page files
const pagesDir = path.join(__dirname, 'pages');
const pageFiles = fs.readdirSync(pagesDir)
  .filter(file => file.endsWith('.tsx') || file.endsWith('.jsx'))
  .map(file => path.join(pagesDir, file));

let fixedCount = 0;

// Fix each page file
pageFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixedContent = fixPageSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(file, fixedContent);
      console.log(`✅ Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.log(`❌ Error fixing ${file}: ${error.message}`);
  }
});

console.log(`\n🎉 Fixed ${fixedCount} page files!`);