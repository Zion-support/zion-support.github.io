const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax errors
    const fixes = [
      // Remove stray semicolons after JSX elements
      { pattern: /;\s*$/gm, replacement: '' },
      // Fix JSX fragment mismatches
      { pattern: /<React\.Fragment>/g, replacement: '<>' },
      { pattern: /<\/React\.Fragment>/g, replacement: '</>' },
      // Fix common JSX syntax issues
      { pattern: /;\s*<\/div>/g, replacement: '</div>' },
      { pattern: /;\s*<\/section>/g, replacement: '</section>' },
      { pattern: /;\s*<\/p>/g, replacement: '</p>' },
      { pattern: /;\s*<\/h[1-6]>/g, replacement: (match) => match.replace(';', '') },
      // Fix missing closing tags
      { pattern: /<div([^>]*)>\s*<section/g, replacement: '<div$1>\n<section' },
      { pattern: /<\/section>\s*<\/div>\s*<\/>/g, replacement: '</section>\n</div>\n</>' },
      // Remove empty lines with only whitespace
      { pattern: /^\s*$/gm, replacement: '' },
      // Fix multiple consecutive empty lines
      { pattern: /\n\s*\n\s*\n/g, replacement: '\n\n' }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fixSyntaxErrors(filePath);
    }
  }
}

// Start fixing from the workspace root
findAndFixFiles('/workspace');
console.log('Syntax error fixing completed!');