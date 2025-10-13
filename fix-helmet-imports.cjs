const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all files that use Helmet but don't import it
const files = glob.sync('app/**/*.tsx', { cwd: __dirname });

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file uses Helmet but doesn't import it
  if (content.includes('<Helmet>') && !content.includes('import { Helmet }')) {
    console.log(`Fixing Helmet import in ${file}`);
    
    // Add import at the top after React import
    const lines = content.split('\n');
    let insertIndex = 0;
    
    // Find where to insert the import
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes("import React")) {
        insertIndex = i + 1;
        break;
      }
    }
    
    // Insert the import
    lines.splice(insertIndex, 0, "import { Helmet } from 'react-helmet-async';");
    
    // Write back to file
    fs.writeFileSync(filePath, lines.join('\n'));
  }
});

console.log('Fixed Helmet imports');