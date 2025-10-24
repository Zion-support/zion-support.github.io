const fs = require('fs');
const path = require('path');

// Function to fix malformed page files
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't exist or is empty
    if (!content) return;
    
    // Check if file has merge conflicts or is heavily corrupted
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Skipping ${filePath} - has merge conflicts`);
      return;
    }
    
    // Fix common syntax issues
    let fixed = content
      // Remove extra semicolons after imports
      .replace(/import\s+[^;]+;\s*;/g, (match) => match.replace(/;\s*;/, ';'))
      // Fix malformed JSX return statements
      .replace(/return\s*\(\s*<div>/g, 'return (\n    <div>')
      // Remove extra semicolons in JSX
      .replace(/;\s*>/g, '>')
      .replace(/;\s*<\//g, '</')
      // Fix malformed closing tags
      .replace(/;\s*\)\s*}\s*;?\s*['"]\s*$/, ')\n  )\n}')
      // Remove extra quotes and semicolons at the end
      .replace(/;\s*['"]\s*$/, '')
      // Fix malformed function declarations
      .replace(/;\s*const\s+/g, '\nconst ')
      .replace(/;\s*export\s+/g, '\nexport ')
      // Fix malformed JSX attributes
      .replace(/;\s*\/>/g, ' />')
      // Remove extra semicolons in arrays and objects
      .replace(/,\s*;\s*}/g, '\n  }')
      .replace(/,\s*;\s*]/g, '\n  ]')
      // Fix malformed closing parentheses
      .replace(/;\s*\)\s*;?\s*$/gm, ')')
      // Clean up extra whitespace
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .trim();
    
    // Only write if content changed
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix page files
function fixAllPages(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-app directories
      if (!['node_modules', '.next', 'dist', 'build', '.git'].includes(item)) {
        fixAllPages(fullPath);
      }
    } else if (item === 'page.tsx' && fullPath.includes('/app/')) {
      fixPageFile(fullPath);
    }
  }
}

// Start fixing from the app directory
console.log('Starting to fix page files...');
fixAllPages('./app');
console.log('Finished fixing page files.');