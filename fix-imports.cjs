const fs = require('fs');
const path = require('path');

// Files that need fixing
const filesToFix = [
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-voice-assistant-pro/page.tsx',
  'app/ar-vr-development/page.tsx',
  'app/asset-management/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-services/page.tsx'
];

// Data arrays to add
const dataArrays = {
  features: `const features = [
    {
      icon: <Target className="w-6 h-6 md:w-8 md:h-8 text-white" />,
      title: "Feature 1",
      description: "Description for feature 1",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-white" />,
      title: "Feature 2", 
      description: "Description for feature 2",
      color: "from-purple-500 to-pink-500"
    }
  ];`,
  benefits: `const benefits = [
    "Benefit 1",
    "Benefit 2", 
    "Benefit 3"
  ];`,
  stats: `const stats = [
    { label: "Stat 1", value: "100%" },
    { label: "Stat 2", value: "50+" },
    { label: "Stat 3", value: "24/7" }
  ];`,
  capabilities: `const capabilities = [
    "Capability 1",
    "Capability 2",
    "Capability 3"
  ];`,
  applications: `const applications = [
    "Application 1",
    "Application 2", 
    "Application 3"
  ];`,
  services: `const services = [
    { name: "Service 1", description: "Description 1" },
    { name: "Service 2", description: "Description 2" }
  ];`,
  testimonials: `const testimonials = [
    {
      name: "John Doe",
      role: "CEO",
      company: "Company Inc",
      content: "Great service!",
      rating: 5
    }
  ];`,
  socialLinks: `const socialLinks = [
    { name: "Twitter", href: "#", icon: "Twitter" },
    { name: "LinkedIn", href: "#", icon: "Linkedin" }
  ];`,
  microSaasServices: `const microSaasServices = [
    { name: "Service 1", href: "/service1" },
    { name: "Service 2", href: "/service2" }
  ];`
};

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Add missing imports
    if (content.includes('Helmet') && !content.includes('react-helmet-async')) {
      content = content.replace(
        /import.*from 'lucide-react';/,
        `import.*from 'lucide-react';\nimport { Helmet } from 'react-helmet-async';`
      );
      modified = true;
    }

    if (content.includes('Link') && !content.includes('react-router-dom')) {
      content = content.replace(
        /import.*from 'lucide-react';/,
        `import.*from 'lucide-react';\nimport { Link } from 'react-router-dom';`
      );
      modified = true;
    }

    if (content.includes('motion') && !content.includes('framer-motion')) {
      content = content.replace(
        /import.*from 'lucide-react';/,
        `import.*from 'lucide-react';\nimport { motion } from 'framer-motion';`
      );
      modified = true;
    }

    // Add missing data arrays
    const functionStart = content.indexOf('const ') || content.indexOf('export default function');
    if (functionStart !== -1) {
      const beforeFunction = content.substring(0, functionStart);
      const afterFunction = content.substring(functionStart);
      
      let newContent = beforeFunction;
      
      // Add missing arrays
      if (content.includes('features.map') && !content.includes('const features')) {
        newContent += dataArrays.features + '\n\n';
      }
      if (content.includes('benefits.map') && !content.includes('const benefits')) {
        newContent += dataArrays.benefits + '\n\n';
      }
      if (content.includes('stats.map') && !content.includes('const stats')) {
        newContent += dataArrays.stats + '\n\n';
      }
      if (content.includes('capabilities.map') && !content.includes('const capabilities')) {
        newContent += dataArrays.capabilities + '\n\n';
      }
      if (content.includes('applications.map') && !content.includes('const applications')) {
        newContent += dataArrays.applications + '\n\n';
      }
      if (content.includes('services.map') && !content.includes('const services')) {
        newContent += dataArrays.services + '\n\n';
      }
      if (content.includes('testimonials.map') && !content.includes('const testimonials')) {
        newContent += dataArrays.testimonials + '\n\n';
      }
      if (content.includes('socialLinks.map') && !content.includes('const socialLinks')) {
        newContent += dataArrays.socialLinks + '\n\n';
      }
      if (content.includes('microSaasServices.map') && !content.includes('const microSaasServices')) {
        newContent += dataArrays.microSaasServices + '\n\n';
      }
      
      content = newContent + afterFunction;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('Import and data fixes completed!');