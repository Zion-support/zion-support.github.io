const fs = require('fs');

// Function to fix missing commas in servicesData.ts
function fixServicesData() {
  try {
    let content = fs.readFileSync('/workspace/app/data/servicesData.ts', 'utf8');
    
    // Fix missing commas after string values followed by property names
    content = content.replace(/([a-zA-Z0-9_]+):\s*"([^"]+)"\s*([a-zA-Z])/g, '$1: "$2",\n    $3');
    
    // Fix missing commas after array elements
    content = content.replace(/"([^"]+)"\s*"([^"]+)"/g, '"$1",\n      "$2"');
    
    // Fix missing commas after array closing bracket followed by property
    content = content.replace(/]\s*([a-zA-Z])/g, '],\n    $1');
    
    // Fix missing commas after object closing bracket followed by property
    content = content.replace(/}\s*([a-zA-Z])/g, '},\n    $1');
    
    // Fix missing commas after string values in arrays
    content = content.replace(/"([^"]+)"\s*"([^"]+)"/g, '"$1",\n      "$2"');
    
    // Fix specific patterns
    content = content.replace(/title: "([^"]+)"\s*description:/g, 'title: "$1",\n    description:');
    content = content.replace(/description: "([^"]+)"\s*features:/g, 'description: "$1",\n    features:');
    content = content.replace(/benefits: \["([^"]+)"\s*"([^"]+)"/g, 'benefits: ["$1",\n      "$2"');
    content = content.replace(/basic: "([^"]+)"\s*pro:/g, 'basic: "$1",\n      pro:');
    content = content.replace(/pro: "([^"]+)"\s*enterprise:/g, 'pro: "$1",\n      enterprise:');
    content = content.replace(/enterprise: "([^"]+)"\s*contactInfo:/g, 'enterprise: "$1",\n    },\n    contactInfo:');
    content = content.replace(/website: "([^"]+)"\s*email:/g, 'website: "$1",\n      email:');
    content = content.replace(/email: "([^"]+)"\s*phone:/g, 'email: "$1",\n      phone:');
    content = content.replace(/phone: "([^"]+)"\s*[a-zA-Z]/g, 'phone: "$1",\n    },\n    $&');
    
    fs.writeFileSync('/workspace/app/data/servicesData.ts', content);
    console.log('Fixed servicesData.ts');
    return true;
  } catch (error) {
    console.error('Error fixing servicesData.ts:', error.message);
    return false;
  }
}

fixServicesData();