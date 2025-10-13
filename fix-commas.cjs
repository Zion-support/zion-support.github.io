const fs = require('fs');
const path = require('path');

function fixCommas(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing commas in object properties
    content = content.replace(/(\w+):\s*(\w+)\n\s*(\w+):/g, '$1: $2,\n      $3:');
    content = content.replace(/(\w+):\s*'([^']+)'\n\s*(\w+):/g, "$1: '$2',\n      $3:");
    content = content.replace(/(\w+):\s*"([^"]+)"\n\s*(\w+):/g, '$1: "$2",\n      $3:');
    content = content.replace(/(\w+):\s*\[([^\]]+)\]\n\s*(\w+):/g, '$1: [$2],\n      $3:');
    
    // Fix missing commas in array elements
    content = content.replace(/(\w+)\n\s*(\w+):/g, '$1,\n      $2:');
    content = content.replace(/'([^']+)'\n\s*(\w+):/g, "'$1',\n      $2:");
    content = content.replace(/"([^"]+)"\n\s*(\w+):/g, '"$1",\n      $2:');
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\nimport/g, '$1;\nimport');
    content = content.replace(/(\w+)\nconst/g, '$1;\nconst');
    content = content.replace(/(\w+)\nfunction/g, '$1;\nfunction');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix the main page file
fixCommas('/workspace/app/page.tsx');