const fs = require('fs');
const path = require('path');

// Additional pages referenced in Footer
const additionalPages = {
  'partners': {
    title: 'Partners',
    description: 'Join our partner network and grow your business with Zion Tech Group solutions.',
    icon: 'Users',
    features: ['Partner Program', 'Technical Support', 'Marketing Resources', 'Training Programs', 'Certification', 'Revenue Sharing'],
    benefits: ['Business Growth', 'Technical Expertise', 'Marketing Support', 'Revenue Opportunities'],
    pricing: 'Contact Us',
    category: 'Company',
    color: 'from-blue-500 to-cyan-600'
  },
  'status': {
    title: 'System Status',
    description: 'Real-time status monitoring of all Zion Tech Group services and infrastructure.',
    icon: 'Monitor',
    features: ['Service Status', 'Incident Reports', 'Maintenance Windows', 'Performance Metrics', 'Uptime Monitoring', 'Real-time Updates'],
    benefits: ['Transparency', 'Proactive Monitoring', 'Better Communication', 'Service Reliability'],
    pricing: 'Free',
    category: 'Company',
    color: 'from-green-500 to-emerald-600'
  },
  'faq': {
    title: 'Frequently Asked Questions',
    description: 'Find answers to common questions about our AI and IT solutions.',
    icon: 'HelpCircle',
    features: ['Common Questions', 'Technical Support', 'Service Information', 'Pricing Details', 'Implementation Guide', 'Contact Information'],
    benefits: ['Quick Answers', 'Self-Service', 'Better Understanding', 'Reduced Support Load'],
    pricing: 'Free',
    category: 'Resources',
    color: 'from-purple-500 to-pink-600'
  },
  'docs': {
    title: 'Documentation',
    description: 'Comprehensive documentation for all our AI and IT solutions and APIs.',
    icon: 'FileText',
    features: ['API Documentation', 'Integration Guides', 'Code Examples', 'Tutorials', 'Best Practices', 'SDK Downloads'],
    benefits: ['Easy Integration', 'Better Understanding', 'Faster Development', 'Comprehensive Resources'],
    pricing: 'Free',
    category: 'Resources',
    color: 'from-indigo-500 to-purple-600'
  },
  'api-docs': {
    title: 'API Reference',
    description: 'Complete API reference documentation for all our services and endpoints.',
    icon: 'Code',
    features: ['API Endpoints', 'Authentication', 'Request/Response Examples', 'Error Codes', 'Rate Limits', 'SDK Documentation'],
    benefits: ['Easy Integration', 'Complete Reference', 'Code Examples', 'Developer Friendly'],
    pricing: 'Free',
    category: 'Resources',
    color: 'from-cyan-500 to-blue-600'
  },
  'community': {
    title: 'Community',
    description: 'Join our vibrant community of developers, users, and AI enthusiasts.',
    icon: 'Users',
    features: ['Discussion Forums', 'Knowledge Base', 'User Groups', 'Events', 'Newsletter', 'Expert Support'],
    benefits: ['Peer Support', 'Knowledge Sharing', 'Networking', 'Latest Updates'],
    pricing: 'Free',
    category: 'Resources',
    color: 'from-green-500 to-teal-600'
  },
  'compliance': {
    title: 'Compliance',
    description: 'Information about our compliance certifications and security standards.',
    icon: 'Shield',
    features: ['Security Certifications', 'Compliance Reports', 'Data Protection', 'Privacy Policy', 'Terms of Service', 'Audit Reports'],
    benefits: ['Trust & Security', 'Regulatory Compliance', 'Data Protection', 'Transparency'],
    pricing: 'Free',
    category: 'Resources',
    color: 'from-red-500 to-orange-600'
  }
};

// Function to create a page component
function createPageComponent(serviceKey, data) {
  const componentName = serviceKey.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  
  const pageContent = `'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { ${data.icon} } from 'lucide-react';

const ${componentName}Page: React.FC = () => {
  return (
    <GenericServicePage
      title="${data.title}"
      description="${data.description}"
      icon={${data.icon}}
      features={${JSON.stringify(data.features)}}
      benefits={${JSON.stringify(data.benefits)}}
      pricing="${data.pricing}"
      category="${data.category}"
      color="${data.color}"
    />
  );
};

export default ${componentName}Page;
`;

  return pageContent;
}

// Function to create directory and file
function createPage(serviceKey, data) {
  const dirPath = path.join(__dirname, 'app', serviceKey);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Create the page component
  const pageContent = createPageComponent(serviceKey, data);
  fs.writeFileSync(filePath, pageContent);
  
  console.log(`Created page: ${serviceKey}`);
}

// Create all additional pages
console.log('Creating additional pages...');
Object.entries(additionalPages).forEach(([key, data]) => {
  createPage(key, data);
});

console.log('All additional pages created successfully!');