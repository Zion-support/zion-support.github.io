const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix all remaining issues
function fixAllIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix orphaned export default statements
    if (content.includes('export default;')) {
      content = content.replace('export default;\n', '');
      modified = true;
    }
    
    // Fix duplicate export statements
    const exportMatches = content.match(/export default function \w+\([^)]*\)\s*{[\s\S]*?}\s*export default \w+;/g);
    if (exportMatches) {
      exportMatches.forEach(match => {
        content = content.replace(match, match.replace(/\s*export default \w+;/, ''));
      });
      modified = true;
    }
    
    // Fix function declarations without names
    content = content.replace(/^function\(\)\s*{/gm, 'export default function Page() {');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed issues in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixAllIssues(file)) {
    fixedCount++;
  }
});

console.log(`Fixed issues in ${fixedCount} files.`);