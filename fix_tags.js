const fs = require('fs');

// Read the file
const filePath = 'data/2027-cutting-edge-comprehensive-services.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Add tags to all services that don't have them
// This regex finds services that don't have tags and adds appropriate tags
const serviceRegex = /(\s+technology: \[[^\]]+\],\s+integrations: \[[^\]]+\],\s+useCases: \[[^\]]+\],)(\s+roi:)/g;

content = content.replace(serviceRegex, (match, p1, p2) => {
  // Extract category from the service to create relevant tags
  const categoryMatch = content.substring(0, content.indexOf(match)).match(/category: '([^']+)'/);
  const category = categoryMatch ? categoryMatch[1] : 'Technology';
  
  // Create tags based on category
  let tags = [];
  if (category.includes('AI') || category.includes('Autonomous')) {
    tags = ['AI', 'Automation', 'Machine Learning', 'Innovation'];
  } else if (category.includes('Quantum')) {
    tags = ['Quantum Computing', 'AI', 'Research', 'Innovation'];
  } else if (category.includes('Blockchain')) {
    tags = ['Blockchain', 'Web3', 'Decentralized', 'Innovation'];
  } else if (category.includes('Cybersecurity')) {
    tags = ['Cybersecurity', 'Privacy', 'Compliance', 'Security'];
  } else if (category.includes('Healthcare') || category.includes('Biotech')) {
    tags = ['Healthcare', 'Biotech', 'AI', 'Research'];
  } else if (category.includes('Education') || category.includes('Learning')) {
    tags = ['Education', 'Learning', 'AI', 'Personalization'];
  } else {
    tags = ['Technology', 'Innovation', 'Digital', 'Solutions'];
  }
  
  return `${p1}\n    tags: [${tags.map(tag => `'${tag}'`).join(', ')}],${p2}`;
});

// Write the file back
fs.writeFileSync(filePath, content, 'utf8');
console.log('Tags added to all services in 2027-cutting-edge-comprehensive-services.ts');
