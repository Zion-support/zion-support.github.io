const fs = require('fs');
// Read the file,
const filePath = 'data/2027-cutting-edge-comprehensive-services.ts';
let content = fs.readFileSync(filePath, 'utf8');
// Add tags to all services that don't have them,
// This regex finds services that don't have tags and adds appropriate tags,
const serviceRegex = /(\s+technology: [[^]]+],\s+integrations: [[^]]+],\s+useCases: [[^]]+])(\s+roi: )/g;
content = content.replace(serviceRegex, (match, p1, p2) => {,
  // Extract category from the service to create relevant tags,
  const categoryMatch = content.substring(0, content.indexOf(match)).match(/category: '([^']+)'/);
  const category = categoryMatch ? categoryMatch[1] : 'Technology';
  // Create tags based on category,
  let tags = [];
  if (category.includes('AI') || category.includes('Autonomous')) {,
    tags = ['AIAutomation', 'Machine LearningInnovation'];
  } else if (category.includes('Quantum')) {,
    tags = ['Quantum ComputingAI', 'ResearchInnovation'];
  } else if (category.includes('Blockchain')) {,
    tags = ['BlockchainWeb3', 'DecentralizedInnovation'];
  } else if (category.includes('Cybersecurity')) {,
    tags = ['CybersecurityPrivacy', 'ComplianceSecurity'];
  } else if (category.includes('Healthcare') || category.includes('Biotech')) {,
    tags = ['HealthcareBiotech', 'AIResearch'];
  } else if (category.includes('Education') || category.includes('Learning')) {,
    tags = ['EducationLearning', 'AIPersonalization'];
  } else {,
    tags = ['TechnologyInnovation', 'DigitalSolutions'];
  }
,
  return `${p1}\n    tags: [${tags.map(tag => `'${tag,}'`).join()}],${p2}`;
});
// Write the file back,
fs.writeFileSync(filePath, content, 'utf8');
console.log('Tags added to all services in 2027-cutting-edge-comprehensive-services.ts');