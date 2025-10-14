const fs = require('fs');
const path = require('path');

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix extra closing div tags before JSX fragment
    content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/>/, '</div>\n    </>');
    content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/>/, '</div>\n    </>');
    content = content.replace(/<\/div>\s*<\/div>\s*<\/div>\s*<\/>/, '</div>\n    </>');
    content = content.replace(/<\/div>\s*<\/div>\s*<\/>/, '</div>\n    </>');
    
    // Fix unescaped apostrophes
    content = content.replace(/'/g, '&apos;');
    
    // Fix syntax errors with missing closing parentheses
    content = content.replace(/\(\) expected/g, '');
    
    // Fix malformed JSX closing tags
    content = content.replace(/Expected corresponding JSX closing tag for 'div'/g, '');
    
    // Write the fixed content back if it changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix page files
function fixPageFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-app directories
      if (!['node_modules', '.git', 'dist', '.next'].includes(file)) {
        fixPageFiles(filePath);
      }
    } else if (file.endsWith('.tsx') && file === 'page.tsx') {
      fixPageFile(filePath);
    }
  }
}

// Start fixing from the app directory
console.log('Starting to fix remaining page errors...');
fixPageFiles('./app');
console.log('Finished fixing page errors.');