const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all .tsx files in the app directory
const files = glob.sync('app/**/*.tsx', { cwd: __dirname });

console.log(`Found ${files.length} files to process`);

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common JSX syntax errors
    // Remove semicolons after JSX elements
    content = content.replace(/;\s*>/g, '>');
    content = content.replace(/;\s*<\//g, '</');
    content = content.replace(/;\s*{/g, '{');
    content = content.replace(/;\s*}/g, '}');
    
    // Fix unterminated strings in imports
    content = content.replace(/from\s+['"]([^'"]*);/g, 'from \'$1\';');
    
    // Fix missing quotes in imports
    content = content.replace(/from\s+([^'";\s]+);/g, 'from \'$1\';');
    
    // Fix merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix common syntax issues
    content = content.replace(/;\s*$/gm, '');
    content = content.replace(/\s+;/g, '');
    
    // Fix 'use client' directive placement
    content = content.replace(/'use client';\s*import/g, "import\n'use client'");
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${file}`);
    
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log('JSX syntax fixing completed');