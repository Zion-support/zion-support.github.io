const fs = require('fs');
const path = require('path');

// Common JSX fixes
const fixes = [
  // Fix malformed closing tags
  { pattern: /  <\//g, replacement: '  </' },
  { pattern: /  <\/h1>/g, replacement: '  </h1>' },
  { pattern: /  <\/h2>/g, replacement: '  </h2>' },
  { pattern: /  <\/p>/g, replacement: '  </p>' },
  { pattern: /  <\/button>/g, replacement: '  </button>' },
  { pattern: /  <\/div>/g, replacement: '  </div>' },
  
  // Fix React.Fragment issues
  { pattern: /<React\.Fragment>/g, replacement: '<>' },
  { pattern: /<\/React\.Fragment>/g, replacement: '</>' },
  
  // Fix malformed JSX closing tags
  { pattern: /  <\/\n/g, replacement: '  </\n' },
  { pattern: /  <\/\s*\n/g, replacement: '  </\n' },
  
  // Fix specific malformed patterns
  { pattern: /  <\/\s*$/gm, replacement: '  </' },
  { pattern: /  <\/\s*\n\s*$/gm, replacement: '  </\n' },
];

function fixFile(filePath) {
  try {

      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // Fix specific malformed closing tags
    content = content.replace(/  <\/\s*$/gm, '  </');
    content = content.replace(/  <\/\s*\n/gm, '  </\n');
    
    // Fix unterminated regexp literals
    content = content.replace(/  <\/\s*$/gm, '  </');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');

    }
    
    return false;
  } catch (error) {

