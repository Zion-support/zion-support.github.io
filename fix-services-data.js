const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/app/data/servicesData.ts', 'utf8');

// Fix missing commas in object properties
content = content.replace(/(\w+):\s*"([^"]*)"\s*\n/g, '$1: "$2",\n');
content = content.replace(/(\w+):\s*(\d+)\s*\n/g, '$1: $2,\n');
content = content.replace(/(\w+):\s*(true|false)\s*\n/g, '$1: $2,\n');
content = content.replace(/(\w+):\s*\[([^\]]*)\]\s*\n/g, '$1: [$2],\n');

// Fix array elements missing commas
content = content.replace(/"([^"]*)"\s*\n\s*"([^"]*)"/g, '"$1",\n      "$2"');

// Fix object properties in nested objects
content = content.replace(/(\w+):\s*"([^"]*)"\s*\n\s*(\w+):/g, '$1: "$2",\n      $3:');

// Fix specific patterns
content = content.replace(/features:\s*\[([^\]]*)\]\s*\n\s*benefits:/g, 'features: [$1],\n    benefits:');
content = content.replace(/benefits:\s*\[([^\]]*)\]\s*\n\s*pricing:/g, 'benefits: [$1],\n    pricing:');
content = content.replace(/pricing:\s*\{([^}]*)\}\s*\n\s*contactInfo:/g, 'pricing: {$1},\n    contactInfo:');
content = content.replace(/contactInfo:\s*\{([^}]*)\}\s*\n\s*price:/g, 'contactInfo: {$1},\n    price:');

// Fix array closing brackets
content = content.replace(/\]\s*\n\s*\{/g, '],\n  {');
content = content.replace(/\]\s*\n\s*export/g, '],\n\nexport');

// Fix specific service objects
content = content.replace(/(\w+):\s*"([^"]*)"\s*\n\s*(\w+):\s*"([^"]*)"/g, '$1: "$2",\n    $3: "$4"');

// Fix the main array structure
content = content.replace(/export const aiServices: Service\[\] = \[([^\]]*)\];/g, (match, services) => {
  // Add commas between service objects
  const fixedServices = services.replace(/\}\s*\n\s*\{/g, '},\n  {');
  return `export const aiServices: Service[] = [${fixedServices}];`;
});

// Fix itServices array
content = content.replace(/export const itServices: Service\[\] = \[([^\]]*)\];/g, (match, services) => {
  const fixedServices = services.replace(/\}\s*\n\s*\{/g, '},\n  {');
  return `export const itServices: Service[] = [${fixedServices}];`;
});

// Fix the servicesData object
content = content.replace(/export const servicesData = \{\s*aiServices\s*itServices\s*itSolutions: itServices,\s*allServices\s*\};/g, 
  'export const servicesData = {\n  aiServices,\n  itServices,\n  itSolutions: itServices,\n  allServices\n};');

// Write the fixed content back
fs.writeFileSync('/workspace/app/data/servicesData.ts', content);
console.log('Fixed servicesData.ts syntax errors');