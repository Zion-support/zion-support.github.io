const fs = require('fs');
const path = require('path');

// Function to fix malformed closing tags
function fixMalformedTags(content) {
  // Fix patterns like "Text;\n  </" to "Text\n  </Tag>"
  content = content.replace(/([^>])\s*;\s*\n\s*<\//g, '$1\n  </');
  
  // Fix patterns like "Text;\n  </" to "Text\n  </Tag>" for specific tags
  content = content.replace(/([^>])\s*;\s*\n\s*<\/([a-zA-Z]+)>/g, '$1\n  </$2>');
  
  // Fix patterns where there are stray closing tags at the end
  content = content.replace(/\n\s*<\/[a-zA-Z]+>\s*$/gm, '');
  
  // Fix patterns where there are multiple closing tags at the end
  content = content.replace(/\n\s*<\/[a-zA-Z]+>\s*<\/[a-zA-Z]+>\s*$/gm, '');
  
  return content;
}

// Files to fix
const filesToFix = [
  'app/page.tsx',
  'app/components/Navigation.tsx',
  'app/components/Footer.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    console.log(`Fixing ${filePath}...`);
    let content = fs.readFileSync(fullPath, 'utf8');
    const originalContent = content;
    
    content = fixMalformedTags(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed ${filePath}`);
    } else {
      console.log(`No changes needed for ${filePath}`);
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Syntax error fixing completed!');