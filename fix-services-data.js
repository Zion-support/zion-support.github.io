const fs = require('fs');

<<<<<<< HEAD
function fixServicesData(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing commas in object properties
    // Pattern: property name followed by newline and another property
    content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n    $2');
    
    // Fix missing commas in array elements
    content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n      $2');
    
    // More specific fixes for object properties
    content = content.replace(/(\w+):\s*"([^"]*)"\s*\n\s*(\w+):/g, '$1: "$2",\n    $3:');
    content = content.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
    
    // Fix array elements
    content = content.replace(/"([^"]*)"\s*\n\s*"([^"]*)"/g, '"$1",\n      "$2"');
    
    // Fix closing brackets and braces
    content = content.replace(/(\w+)\s*\n\s*}/g, '$1\n  }');
    content = content.replace(/(\w+)\s*\n\s*]/g, '$1\n  ]');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
=======
// Function to fix missing commas in servicesData.ts
function fixServicesData() {
  try {
    let content = fs.readFileSync('/workspace/app/data/servicesData.ts', 'utf8');
    
    // Fix missing commas after array items
    content = content.replace(/(\w+)\n(\s+)(\w+)/g, '$1,\n$2$3');
    
    // Fix missing commas after object properties
    content = content.replace(/(\w+):\s*"([^"]+)"\n(\s+)(\w+)/g, '$1: "$2",\n$3$4');
    content = content.replace(/(\w+):\s*(\d+)\n(\s+)(\w+)/g, '$1: $2,\n$3$4');
    content = content.replace(/(\w+):\s*(\w+)\n(\s+)(\w+)/g, '$1: $2,\n$3$4');
    
    // Fix missing commas after array closing brackets
    content = content.replace(/\]\n(\s+)(\w+)/g, '],\n$1$2');
    
    // Fix missing commas after object closing braces
    content = content.replace(/\}\n(\s+)(\w+)/g, '},\n$1$2');
    
    // Fix missing commas after string values
    content = content.replace(/"([^"]+)"\n(\s+)(\w+)/g, '"$1",\n$2$3');
    
    fs.writeFileSync('/workspace/app/data/servicesData.ts', content, 'utf8');
    console.log('Fixed servicesData.ts');
    return true;
  } catch (error) {
    console.error('Error fixing servicesData.ts:', error.message);
>>>>>>> origin/main
    return false;
  }
}

<<<<<<< HEAD
// Fix the servicesData.ts file
const filePath = '/workspace/app/data/servicesData.ts';
fixServicesData(filePath);
=======
fixServicesData();
>>>>>>> origin/main
