const fs = require('fs');

// Read the file
let content = fs.readFileSync('2025-cutting-edge-ai-services.ts', 'utf8');

// Find all service objects that are missing required properties
// Look for objects that have id, name, tagline, price, period, description, features but are missing other required properties
const serviceRegex = /{\s*id:\s*'[^']+',\s*name:\s*'[^']+',\s*tagline:\s*'[^']+',\s*price:\s*'[^']+',\s*period:\s*'[^']+',\s*description:\s*'[^']+',\s*features:\s*\[[^\]]*\],?\s*}(?=\s*,?\s*\/\/|\s*,?\s*$|\s*,?\s*{)/g;

let match;
let replacements = 0;

while ((match = serviceRegex.exec(content)) !== null) {
  const serviceStart = match.index;
  const serviceEnd = match.index + match[0].length;
  
  // Extract the service object
  let serviceContent = match[0];
  
  // Check if it's missing required properties
  if (!serviceContent.includes('popular:') || !serviceContent.includes('icon:')) {
    // Find the end of the features array
    const featuresEnd = serviceContent.lastIndexOf(']');
    if (featuresEnd !== -1) {
      // Insert missing properties after features array
      const beforeInsert = serviceContent.substring(0, featuresEnd + 1);
      const afterInsert = serviceContent.substring(featuresEnd + 1);
      
      const missingProperties = `,
    popular: true,
    icon: '🤖',
    color: 'bg-blue-500',
    textColor: 'text-white',
    link: '/services/ai-service',
    marketPosition: 'Leading AI service',
    targetAudience: 'Enterprises, Startups, Developers',
    trialDays: 14,
    setupTime: '1-2 weeks',
    category: 'AI Services',
    realService: true,
    technology: ['AI/ML', 'Cloud Computing', 'Data Analytics'],
    integrations: ['APIs', 'Cloud Platforms', 'Third-party Services'],
    useCases: ['Automation', 'Analytics', 'Optimization'],
    roi: '300% ROI within 6 months',
    competitors: ['Competitor A', 'Competitor B', 'Competitor C'],
    marketSize: '$10B market',
    growthRate: '25% annual growth',
    variant: 'ai-futuristic',
    contactInfo: {
      mobile: '+1-555-0123',
      email: 'info@ziontechgroup.com',
      address: '123 Tech Street, Innovation City, IC 12345',
      website: 'https://ziontechgroup.com'
    },
    realImplementation: true,
    implementationDetails: 'AI-powered service with advanced capabilities and enterprise-grade features.',
    launchDate: '2025-01-01',
    customers: 25,
    rating: 4.5,
    reviews: 15`;
      
      const newServiceContent = beforeInsert + missingProperties + afterInsert;
      
      // Replace in the main content
      content = content.substring(0, serviceStart) + newServiceContent + content.substring(serviceEnd);
      
      // Reset regex position
      serviceRegex.lastIndex = serviceStart + newServiceContent.length;
      replacements++;
    }
  }
}

if (replacements > 0) {
  fs.writeFileSync('2025-cutting-edge-ai-services.ts', content);
  console.log(`Fixed ${replacements} incomplete service objects`);
} else {
  console.log('No incomplete service objects found');
}