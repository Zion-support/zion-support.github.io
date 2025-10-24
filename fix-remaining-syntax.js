const fs = require('fs');
const path = require('path');

// Function to fix specific syntax issues
function fixSyntaxErrors(content) {
  // Fix missing commas in object arrays
  content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*}\s*\n\s*{/g, '$1,\n  },\n  {');
  content = content.replace(/(\w+):\s*\[[^\]]*\]\s*\n\s*}\s*\n\s*{/g, '$1,\n  },\n  {');
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*\n\s*(\w+):/g, '$1,\n  $2:');
  content = content.replace(/(\w+):\s*\[[^\]]*\]\s*\n\s*(\w+):/g, '$1,\n  $2:');
  
  // Fix JSX fragment issues
  content = content.replace(/<>\s*<title>/g, '<>\n      <title>');
  content = content.replace(/<title>([^<]*)<\/title>\s*<meta/g, '<title>$1</title>\n        <meta');
  content = content.replace(/<meta name="description" content="([^"]*)" \/>\s*<\/>/g, '<meta name="description" content="$1" />\n      </>');
  
  // Fix duplicate property names
  content = content.replace(/title:\s*title,/g, 'title: "Title",');
  content = content.replace(/description:\s*description,/g, 'description: "Description",');
  
  return content;
}

// Function to fix specific file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix the specific problematic files
const problematicFiles = [
  'app/about/page.tsx',
  'app/accessibility/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/advanced-security-suite/page.tsx',
  'app/ai-accounting-assistant/page.tsx'
];

console.log('Fixing remaining syntax errors...');
problematicFiles.forEach(fixFile);
console.log('Syntax fix completed!');