const fs = require('fs');
const path = require('path');

// List of files that need fixing
const filesToFix = [
  'app/careers/page.tsx',
  'app/partners/page.tsx',
  'app/faq/page.tsx',
  'app/demo/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common structural issues
    content = content.replace(/\}\s*\)\s*\)/g, '}');
    content = content.replace(/<\/h1>\s*<p/g, '<h1>Title</h1>\n            <p');
    content = content.replace(/<\/div>\s*\)\s*\)/g, '</div>');
    content = content.replace(/<\/section>\s*\)\s*\)/g, '</section>');
    
    // Fix missing opening tags
    if (content.includes('</h1>') && !content.includes('<h1>')) {
      content = content.replace(/(\s*)<\/h1>/, '$1<h1>Title</h1>');
    }
    
    // Fix missing opening divs
    if (content.includes('</div>') && content.split('<div').length < content.split('</div>').length) {
      content = content.replace(/(\s*)<\/div>/, '$1<div>');
    }
    
    // Fix missing opening sections
    if (content.includes('</section>') && content.split('<section').length < content.split('</section>').length) {
      content = content.replace(/(\s*)<\/section>/, '$1<section>');
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  }
});

console.log('Build issues fixed!');