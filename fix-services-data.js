const fs = require('fs');

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
    return false;
  }
}

// Fix the servicesData.ts file
const filePath = '/workspace/app/data/servicesData.ts';
fixServicesData(filePath);