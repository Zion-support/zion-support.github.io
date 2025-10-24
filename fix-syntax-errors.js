const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix array syntax issues in metadata objects
    // Pattern: { name: "value" } -> { name: "value" }
    content = content.replace(/\{\s*name:\s*"([^"]+)"\s*\}\s*\{/g, '{ name: "$1" }, {');
    
    // Fix missing commas in arrays
    content = content.replace(/(\w+:\s*"[^"]+")\s*\n\s*(\w+:\s*"[^"]+")/g, '$1,\n    $2');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+:\s*"[^"]+")\s*\n\s*(\w+:\s*"[^"]+")/g, '$1,\n    $2');
    
    // Fix specific patterns that are causing issues
    content = content.replace(/\{\s*name:\s*"([^"]+)"\s*\}\s*\{/g, '{ name: "$1" }, {');
    content = content.replace(/\{\s*name:\s*"([^"]+)"\s*\}\s*\{/g, '{ name: "$1" }, {');
    
    // Fix array syntax in benefits arrays
    content = content.replace(/benefits:\s*\[\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*\]/g, 
      'benefits: [\n      "$1",\n      "$2",\n      "$3",\n      "$4"\n    ]');
    
    // Fix array syntax in features arrays
    content = content.replace(/benefits:\s*\[\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*\]/g, 
      'benefits: [\n      "$1",\n      "$2",\n      "$3",\n      "$4"\n    ]');
    
    // Fix missing commas in object literals
    content = content.replace(/(\w+:\s*"[^"]+")\s*\n\s*(\w+:\s*"[^"]+")/g, '$1,\n    $2');
    
    // Fix specific syntax issues
    content = content.replace(/\{\s*name:\s*"([^"]+)"\s*\}\s*\{/g, '{ name: "$1" }, {');
    
    // Fix array syntax issues
    content = content.replace(/\[\s*\{\s*name:\s*"([^"]+)"\s*path:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*path:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*path:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*path:\s*"([^"]+)"\s*\}\s*\]/g, 
      `[
                { name: "$1", path: "$2" },
                { name: "$3", path: "$4" },
                { name: "$5", path: "$6" },
                { name: "$7", path: "$8" }
              ]`);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixSyntaxErrors(filePath);
    }
  }
}

// Start fixing from the app directory
walkDirectory('./app');
console.log('Syntax fixing completed!');