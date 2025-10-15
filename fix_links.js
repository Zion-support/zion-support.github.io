import fs from 'fs';

// Read the servicesData file
const content = fs.readFileSync('/workspace/app/data/servicesData.ts', 'utf8');

// Add link property to each service object
let fixedContent = content;

// Find all service objects and add link property
const servicePattern = /(\s+)(contactInfo:\s*\{[^}]+\},)(\s+)(\})/g;

fixedContent = fixedContent.replace(servicePattern, (match, indent, contactInfo, spacing, closingBrace) => {
  // Extract the id from the service object
  const lines = match.split('\n');
  let id = '';
  for (const line of lines) {
    if (line.includes("id: '")) {
      const idMatch = line.match(/id: '([^']+)'/);
      if (idMatch) {
        id = idMatch[1];
        break;
      }
    }
  }
  
  if (id) {
    // Determine the appropriate link based on the service type
    let link = '';
    if (id.startsWith('ai-')) {
      link = `/ai-services/${id}`;
    } else if (id.startsWith('it-') || id.includes('cloud') || id.includes('cybersecurity') || id.includes('data-analytics') || id.includes('mobile-development') || id.includes('web-development') || id.includes('database-management')) {
      link = `/it-services/${id}`;
    } else {
      link = `/micro-saas-solutions/${id}`;
    }
    
    return `${indent}${contactInfo},${spacing}link: '${link}'${spacing}${closingBrace}`;
  }
  
  return match;
});

// Write the fixed content back
fs.writeFileSync('/workspace/app/data/servicesData.ts', fixedContent);

console.log('Added link properties to all services');