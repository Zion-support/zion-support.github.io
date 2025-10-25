const fs = require('fs');
const path = require('path');

function fixArrayCommas(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing commas in array elements
    // Pattern: { name: "value" } { name: "value" } -> { name: "value" }, { name: "value" }
    content = content.replace(/\{\s*name:\s*"([^"]+)"\s*path:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*path:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*path:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*path:\s*"([^"]+)"\s*\}/g, 
      `{ name: "$1", path: "$2" },
                { name: "$3", path: "$4" },
                { name: "$5", path: "$6" },
                { name: "$7", path: "$8" }`);
    
    // Fix missing commas in benefits arrays
    content = content.replace(/'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'/g, 
      `"$1",
      "$2",
      "$3",
      "$4"`);
    
    // Fix missing commas in features arrays
    content = content.replace(/'([^']+)'\s*'([^']+)'\s*'([^']+)'\s*'([^']+)'/g, 
      `"$1",
      "$2",
      "$3",
      "$4"`);
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+:\s*"[^"]+")\s*\n\s*(\w+:\s*"[^"]+")/g, '$1,\n    $2');
    
    // Fix specific patterns
    content = content.replace(/\{\s*name:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*\}/g, 
      `{ name: "$1" },
                { name: "$2" },
                { name: "$3" },
                { name: "$4" }`);
    
    // Fix array syntax in metadata
    content = content.replace(/\[\s*\{\s*name:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*\}\s*\{\s*name:\s*"([^"]+)"\s*\}\s*\]/g, 
      `[
                { name: "$1" },
                { name: "$2" },
                { name: "$3" },
                { name: "$4" }
              ]`);
    
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
      fixArrayCommas(filePath);
    }
  }
}

// Start fixing from the app directory
walkDirectory('./app');
console.log('Array comma fixing completed!');