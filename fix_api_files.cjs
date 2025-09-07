const fs = require('fs');
const path = require('path');

function fixApiFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content.replace(/,\s*;/g, ';'); // Remove trailing commas before semicolons
    content = content.replace(/,\s*$/gm, ''); // Remove trailing commas at end of lines
    content = content.replace(/function\s+(\w+)\s*\{\s*$/gm, 'function $1() {\n  '); // Fix function declarations
    content = content.replace(/\}\s*$/gm, '}\n'); // Add newlines after closing braces
    content = content.replace(/const\s+(\w+)\s*=\s*([^,]+),\s*$/gm, 'const $1 = $2;\n'); // Fix const declarations
    content = content.replace(/import\s+([^,]+),\s*$/gm, 'import $1;\n'); // Fix import statements
    
    // Remove duplicate lines
    const lines = content.split('\n');
    const uniqueLines = [];
    const seen = new Set();
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (!seen.has(trimmed) || trimmed === '') {
        uniqueLines.push(line);
        seen.add(trimmed);
      }
    }
    
    content = uniqueLines.join('\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function fixApiFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixApiFiles(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.js')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes(',;') || content.includes('function') || content.includes('const')) {
          fixApiFile(filePath);
        }
      } catch (error) {
        console.log(`Skipping ${filePath}: ${error.message}`);
      }
    }
  }
}

console.log('Fixing API files...');
fixApiFiles('./pages/api');
console.log('API files fixed!');