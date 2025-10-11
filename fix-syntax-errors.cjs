const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix return () => { patterns
    if (content.includes('return ()') && content.includes(');')) {
      content = content.replace(/return \(\)\s*\);/g, 'return null;');
      modified = true;
    }

    // Fix return () patterns without proper JSX
    if (content.includes('return ()') && !content.includes('<')) {
      content = content.replace(/return \(\)\s*\);/g, 'return null;');
      modified = true;
    }

    // Fix duplicate const declarations
    content = content.replace(/const\s+(\w+)\s*=\s*const\s+\1\s*=\s*const\s+\1\s*=\s*\[/g, 'const $1 = [');
    content = content.replace(/const\s+(\w+)\s*=\s*const\s+\1\s*=\s*\[/g, 'const $1 = [');
    modified = true;

    // Fix missing semicolons after function declarations
    content = content.replace(/}\s*const\s+(\w+)\s*=\s*\(\)\s*=>\s*{/g, '};\nconst $1 = () => {');
    modified = true;

    // Fix missing semicolons after array declarations
    content = content.replace(/]\s*const\s+(\w+)\s*=\s*\[/g, '];\nconst $1 = [');
    modified = true;

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all .tsx files
function fixAllComponents(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixAllComponents(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixSyntaxErrors(filePath);
    }
  });
}

// Fix all components
console.log('Fixing syntax errors in all components...');
fixAllComponents('./app/components');
console.log('Syntax error fixing completed!');