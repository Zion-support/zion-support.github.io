const fs = require('fs');
const path = require('path');

// Function to fix import semicolon issues
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't exist or is empty
    if (!content) return;
    
    // Check if file has merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Skipping ${filePath} - has merge conflicts`);
      return;
    }
    
    // Fix the specific issue: semicolon after import statements
    let fixed = content
      // Remove semicolons after import statements
      .replace(/import\s+[^;]+;\s*$/gm, (match) => match.replace(/;\s*$/, ''))
      // Remove standalone semicolons on their own lines
      .replace(/^\s*;\s*$/gm, '')
      // Fix malformed JSX return statements
      .replace(/return\s*\(\s*<div>/g, 'return (\n    <div>')
      // Remove extra semicolons and quotes in JSX
      .replace(/;\s*>/g, '>')
      .replace(/;\s*<\//g, '</')
      .replace(/;\s*\/>/g, ' />')
      // Fix malformed closing tags
      .replace(/;\s*\)\s*}\s*;?\s*['"]\s*$/, ')\n  )\n}')
      // Remove extra quotes and semicolons at the end
      .replace(/;\s*['"]\s*$/, '')
      // Fix malformed function declarations
      .replace(/;\s*const\s+/g, '\nconst ')
      .replace(/;\s*export\s+/g, '\nexport ')
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
console.log('Starting to fix import semicolon issues...');
fixAllPages('./app');
console.log('Finished fixing import semicolon issues.');