const fs = require('fs');
const path = require('path');

// All missing pages that need to be created
const missingPages = [
  'ai-integration-services',
  'blockchain-development',
  'iot-development',
  'e-commerce-development',
  'api-development-advanced',
  'data-engineering',
  'cybersecurity-advanced',
  'cloud-migration-advanced',
  'devops-advanced',
  'machine-learning-ops',
  'enterprise-integration',
  'performance-optimization',
  'disaster-recovery-advanced',
  'compliance-automation',
  'cloud-cost-optimization',
  'security-automation',
  'data-visualization',
  'workflow-automation',
  'cloud-native-security'
];

// Function to create a page component
function createPageComponent(serviceKey) {
  const componentName = serviceKey.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  
  // Determine category and icon based on the service key
  let category = 'IT';
  let icon = 'Settings';
  let color = 'from-blue-500 to-cyan-600';
  
  if (serviceKey.startsWith('ai-')) {
    category = 'AI';
    icon = 'Brain';
    color = 'from-purple-500 to-pink-600';
  }
  
  // Set specific icons for certain services
  if (serviceKey.includes('blockchain')) {
    icon = 'Link';
    color = 'from-green-500 to-emerald-600';
  } else if (serviceKey.includes('iot')) {
    icon = 'Wifi';
    color = 'from-cyan-500 to-blue-600';
  } else if (serviceKey.includes('e-commerce')) {
    icon = 'ShoppingCart';
    color = 'from-pink-500 to-rose-600';
  } else if (serviceKey.includes('api')) {
    icon = 'Code';
    color = 'from-indigo-500 to-purple-600';
  } else if (serviceKey.includes('data')) {
    icon = 'Database';
    color = 'from-teal-500 to-cyan-600';
  } else if (serviceKey.includes('cybersecurity') || serviceKey.includes('security')) {
    icon = 'Shield';
    color = 'from-red-500 to-orange-600';
  } else if (serviceKey.includes('cloud')) {
    icon = 'Cloud';
    color = 'from-blue-500 to-cyan-600';
  } else if (serviceKey.includes('devops')) {
    icon = 'Settings';
    color = 'from-purple-500 to-pink-600';
  } else if (serviceKey.includes('performance')) {
    icon = 'Zap';
    color = 'from-yellow-500 to-orange-600';
  } else if (serviceKey.includes('disaster')) {
    icon = 'Shield';
    color = 'from-red-500 to-pink-600';
  } else if (serviceKey.includes('compliance')) {
    icon = 'CheckSquare';
    color = 'from-slate-500 to-gray-600';
  } else if (serviceKey.includes('workflow')) {
    icon = 'Workflow';
    color = 'from-violet-500 to-purple-600';
  }
  
  const title = serviceKey.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const description = `Professional ${title.toLowerCase()} services to help your business grow and succeed.`;
  
  const features = [
    'Expert Consultation',
    'Custom Solutions',
    '24/7 Support',
    'Scalable Architecture',
    'Security Implementation',
    'Performance Optimization'
  ];
  
  const benefits = [
    'Better Performance',
    'Cost Optimization',
    'Expert Support',
    'Scalable Solutions'
  ];
  
  const pageContent = `'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { ${icon} } from 'lucide-react';

const ${componentName}Page: React.FC = () => {
  return (
    <GenericServicePage
      title="${title}"
      description="${description}"
      icon={${icon}}
      features={${JSON.stringify(features)}}
      benefits={${JSON.stringify(benefits)}}
      pricing="Contact Us"
      category="${category}"
      color="${color}"
    />
  );
};

export default ${componentName}Page;
`;

  return pageContent;
}

// Function to create directory and file
function createPage(serviceKey) {
  const dirPath = path.join(__dirname, 'app', serviceKey);
  const filePath = path.join(dirPath, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Create the page component
  const pageContent = createPageComponent(serviceKey);
  fs.writeFileSync(filePath, pageContent);
  
  console.log(`Created page: ${serviceKey}`);
}

// Create all missing pages
console.log('Creating all missing pages...');
missingPages.forEach(serviceKey => {
  createPage(serviceKey);
});

console.log('All missing pages created successfully!');