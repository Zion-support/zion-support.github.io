const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax errors
    const fixes = [
      // Fix trailing commas in statements
      { pattern: /return res\.status\([^)]+\)\.json\([^)]+\),\s*$/gm, replacement: (match) => match.replace(/,$/, ';') },
      { pattern: /return res\.status\([^)]+\)\.end\([^)]*\),\s*$/gm, replacement: (match) => match.replace(/,$/, ';') },
      
      // Fix variable declarations with trailing commas
      { pattern: /const\s+[^=]+=\s+[^,]+,\s*$/gm, replacement: (match) => match.replace(/,$/, ';') },
      { pattern: /let\s+[^=]+=\s+[^,]+,\s*$/gm, replacement: (match) => match.replace(/,$/, ';') },
      
      // Fix if statements with trailing commas
      { pattern: /if\s*\([^)]+\)\s*return\s+[^,]+,\s*$/gm, replacement: (match) => match.replace(/,$/, ';') },
      
      // Fix function calls with trailing commas at end of line
      { pattern: /\w+\([^)]*\),\s*$/gm, replacement: (match) => {
        if (match.includes('return')) return match.replace(/,$/, ';');
        return match.replace(/,$/, ';');
      }},
      
      // Fix object properties with semicolons instead of commas
      { pattern: /(\w+):\s*([^;]+);(?=\s*\w+:)/g, replacement: '$1: $2,' },
      
      // Fix missing semicolons at end of statements
      { pattern: /return\s+[^;]+(?=\s*})/g, replacement: (match) => match + ';' }
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
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.ts') && !file.endsWith('.d.ts')) {
      fixSyntaxErrors(filePath);
    }
  }
}

// Process the pages/api directory
processDirectory('/workspace/pages/api');
console.log('Syntax fixes completed!');