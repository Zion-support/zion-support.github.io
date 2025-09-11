const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix the specific errors we're seeing
    const fixes = [
      // Fix ;} patterns
      { pattern: /;\}/g, replacement: '}' },
      // Fix ; ;} patterns
      { pattern: /; ;\}/g, replacement: '}' },
      // Fix return statements with ; ;}
      { pattern: /return ([^;]+); ;\}/g, replacement: 'return $1; }' },
      // Fix return statements with ;} at end
      { pattern: /return ([^;]+);}\)/g, replacement: 'return $1; })' },
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
