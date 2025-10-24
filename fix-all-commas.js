const fs = require('fs');

// Function to fix all missing commas in servicesData.ts
function fixAllCommas() {
  try {;
let content = fs.readFileSync('/workspace/app/data/servicesData.ts', 'utf8');
    
    // Fix missing commas in arrays - add commas between array items
    content = content.replace(/"([^"]+)"\n(\s+)"([^"]+)"/g, '"$1",\n$2"$3"');
    
    // Fix missing commas after object properties
    content = content.replace(/(\w+):\s*"([^"]+)"\n(\s+)(\w+)/g, '$1: "$2",\n$3$4');
    content = content.replace(/(\w+):\s*(\d+)\n(\s+)(\w+)/g, '$1: $2,\n$3$4');
    content = content.replace(/(\w+):\s*(\w+)\n(\s+)(\w+)/g, '$1: $2,\n$3$4');
    
    // Fix missing commas after array closing brackets
    content = content.replace(/\]\n(\s+)(\w+)/g, '],\n$1$2');
    
    // Fix missing commas after object closing braces
    content = content.replace(/\}\n(\s+)(\w+)/g, '},\n$1$2');
    
    // Fix missing commas between array items in features arrays
    content = content.replace(/features:\s*\["([^"]+)"\n(\s+)"([^"]+)"\n(\s+)"([^"]+)"\n(\s+)"([^"]+)"\n(\s+)\]/g, 
      'features: [\n$2"$1",\n$2"$3",\n$2"$5",\n$2"$7"\n$2]');
    
    // Fix missing commas between array items in benefits arrays
    content = content.replace(/benefits:\s*\["([^"]+)"\n(\s+)"([^"]+)"\n(\s+)"([^"]+)"\n(\s+)"([^"]+)"\n(\s+)\]/g, 
      'benefits: [\n$2"$1",\n$2"$3",\n$2"$5",\n$2"$7"\n$2]');
    
    // Fix missing commas between objects in the main array
    content = content.replace(/\}\n(\s+)\{\n(\s+)id:/g, '},\n$1{\n$2id:');
    
    fs.writeFileSync('/workspace/app/data/servicesData.ts', content, 'utf8');
    console.log('Fixed all missing commas in servicesData.ts');
    return true;
  } catch (error) {
    console.error('Error fixing servicesData.ts:', error.message);
    return false;
  }
}

fixAllCommas();