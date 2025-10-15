import fs from 'fs';
import path from 'path';

const filesToFix = [
  'app/ai-healthcare-solutions-pro/page.tsx',
  'app/ai-iot-management-pro/page.tsx',
  'app/ai-marketing-automation-pro/page.tsx',
  'app/ai-project-manager-pro/page.tsx',
  'app/ai-social-media-manager-pro/page.tsx'
];

const commonData = {
  features: [
    {
      icon: '<Star className="w-8 h-8" />',
      title: "AI-Powered Features",
      description: "Advanced AI capabilities that enhance productivity and efficiency."
    },
    {
      icon: '<CheckCircle className="w-8 h-8" />',
      title: "Real-time Analytics",
      description: "Comprehensive insights and monitoring for better decision making."
    },
    {
      icon: '<Users className="w-8 h-8" />',
      title: "Collaborative Tools",
      description: "Enhanced team collaboration and communication features."
    }
  ],
  benefits: [
    "Improved efficiency and productivity",
    "Reduced operational costs",
    "Enhanced user experience"
  ],
  useCases: [
    "Enterprise Solutions",
    "Small Business Applications",
    "Individual Productivity"
  ],
  pricingPlans: [
    {
      name: "Basic",
      price: "$99/month",
      features: ["Basic features", "Email support", "Standard SLA"]
    },
    {
      name: "Professional",
      price: "$299/month",
      features: ["Advanced features", "Priority support", "Enhanced SLA"]
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: ["Full feature set", "Dedicated support", "Custom SLA"]
    }
  ],
  testimonials: [
    {
      name: "John Smith",
      role: "CEO, Tech Company",
      content: "This solution has transformed our business operations."
    }
  ]
};

filesToFix.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add data arrays after useEffect
    const dataArrays = `
  const features = ${JSON.stringify(commonData.features, null, 2)};
  const benefits = ${JSON.stringify(commonData.benefits, null, 2)};
  const useCases = ${JSON.stringify(commonData.useCases, null, 2)};
  const pricingPlans = ${JSON.stringify(commonData.pricingPlans, null, 2)};
  const testimonials = ${JSON.stringify(commonData.testimonials, null, 2)};`;

    // Insert after useEffect block
    content = content.replace(
      /(\s+useEffect\(\(\) => \{\s+setIsVisible\(true\);\s+\}, \[\]\);\s+)/,
      `$1${dataArrays}\n`
    );

    // Clean up imports - remove unused ones
    content = content.replace(
      /import React, \{ useState, useEffect \} from "react";\s+import \{ Helmet \} from "react-helmet-async";\s+import \{ [^}]+ \} from 'lucide-react';/,
      'import React, { useState, useEffect } from "react";\nimport { Helmet } from "react-helmet-async";\nimport { ArrowRight, CheckCircle, Mail, Phone, Play, Star, Users } from \'lucide-react\';'
    );

    // Fix export statement
    content = content.replace(
      /export default [A-Za-z]+Page;/,
      'export default AIEducationSolutionsProPage;'
    );

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Data arrays added to all files');