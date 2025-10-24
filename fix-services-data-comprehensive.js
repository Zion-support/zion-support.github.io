const fs = require('fs');

// Function to fix the entire servicesData.ts file
function fixServicesDataComprehensive() {
  try {
    let content = fs.readFileSync('/workspace/app/data/servicesData.ts', 'utf8');
    
    // Fix array syntax - add commas between array items
    content = content.replace(/"([^"]+)"\n(\s+)"([^"]+)"/g, '"$1",\n$2"$3"');
    
    // Fix object properties - add commas after values
    content = content.replace(/(\w+):\s*"([^"]+)"\n(\s+)(\w+)/g, '$1: "$2",\n$3$4');
    content = content.replace(/(\w+):\s*(\d+)\n(\s+)(\w+)/g, '$1: $2,\n$3$4');
    content = content.replace(/(\w+):\s*(\w+)\n(\s+)(\w+)/g, '$1: $2,\n$3$4');
    
    // Fix array closing brackets
    content = content.replace(/\]\n(\s+)(\w+)/g, '],\n$1$2');
    
    // Fix object closing braces
    content = content.replace(/\}\n(\s+)(\w+)/g, '},\n$1$2');
    
    // Fix specific array patterns
    content = content.replace(/benefits:\s*\["([^"]+)"\n(\s+)"([^"]+)"\n(\s+)"([^"]+)"\n(\s+)"([^"]+)"\n(\s+)\]/g, 
      'benefits: [\n$2"$1",\n$2"$3",\n$2"$5",\n$2"$7"\n$2]');
    
    fs.writeFileSync('/workspace/app/data/servicesData.ts', content, 'utf8');
    console.log('Fixed servicesData.ts comprehensively');
    return true;
  } catch (error) {
    console.error('Error fixing servicesData.ts:', error.message);
    return false;
  }
}

fixServicesDataComprehensive();