const fs = require('fs');

function fixServicesData(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix missing commas in object properties
    // Pattern: property name followed by newline and next property
    content = content.replace(/(\w+):\s*"([^"]*)"\s*\n\s*(\w+):/g, '$1: "$2",\n    $3:');
    content = content.replace(/(\w+):\s*(\d+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
    content = content.replace(/(\w+):\s*(true|false)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
    content = content.replace(/(\w+):\s*\[([^\]]*)\]\s*\n\s*(\w+):/g, '$1: [$2],\n    $3:');
    
    // Fix missing commas in arrays
    content = content.replace(/"([^"]*)"\s*\n\s*"([^"]*)"/g, '"$1",\n      "$2"');
    
    // Fix missing commas in nested objects
    content = content.replace(/(\w+):\s*\{\s*\n\s*(\w+):/g, '$1: {\n      $2:');
    content = content.replace(/(\w+):\s*"([^"]*)"\s*\n\s*\}/g, '$1: "$2"\n    }');
    content = content.replace(/(\w+):\s*(\d+)\s*\n\s*\}/g, '$1: $2\n    }');
    
    // Fix missing commas between array items
    content = content.replace(/(\w+):\s*\[([^\]]*)\]\s*\n\s*(\w+):/g, '$1: [$2],\n    $3:');
    
    // Fix missing commas between objects in arrays
    content = content.replace(/\}\s*\n\s*\{/g, '},\n  {');
    
    // Fix missing commas at end of objects before closing bracket
    content = content.replace(/(\w+):\s*"([^"]*)"\s*\n\s*\}/g, '$1: "$2"\n  }');
    content = content.replace(/(\w+):\s*(\d+)\s*\n\s*\}/g, '$1: $2\n  }');
    content = content.replace(/(\w+):\s*(true|false)\s*\n\s*\}/g, '$1: $2\n  }');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

const filePath = '/workspace/app/data/servicesData.ts';
fixServicesData(filePath);