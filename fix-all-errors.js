import fs from 'fs';
import path from 'path';

const filesToFix = [
  'app/ai-education-solutions-pro/page.tsx',
  'app/ai-healthcare-solutions-pro/page.tsx',
  'app/ai-iot-management-pro/page.tsx',
  'app/ai-marketing-automation-pro/page.tsx',
  'app/ai-project-manager-pro/page.tsx',
  'app/ai-social-media-manager-pro/page.tsx'
];

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the component name from the file path
    const componentName = filePath.split('/').pop().replace('.tsx', '').split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page';
    
    // Clean up imports
    content = content.replace(
      /import React, \{ useState, useEffect \} from "react";\s+import \{ Helmet \} from "react-helmet-async";\s+import \{ [^}]+ \} from 'lucide-react';/,
      'import React, { useState, useEffect } from "react";\nimport { Helmet } from "react-helmet-async";\nimport { ArrowRight, CheckCircle, Mail, Phone, Play, Star, Users } from \'lucide-react\';'
    );

    // Fix the data structure to match what the template expects
    const correctDataStructure = `
  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: "AI-Powered Features",
      description: "Advanced AI capabilities that enhance productivity and efficiency.",
      benefits: ["Improved efficiency", "Better insights", "Enhanced automation"]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Real-time Analytics",
      description: "Comprehensive insights and monitoring for better decision making.",
      benefits: ["Live monitoring", "Instant feedback", "Data-driven decisions"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Tools",
      description: "Enhanced team collaboration and communication features.",
      benefits: ["Team collaboration", "Better communication", "Shared workflows"]
    }
  ];

  const benefits = [
    "Improved efficiency and productivity",
    "Reduced operational costs",
    "Enhanced user experience"
  ];

  const useCases = [
    "Enterprise Solutions",
    "Small Business Applications", 
    "Individual Productivity"
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$99",
      period: "month",
      description: "Perfect for getting started",
      features: ["Basic features", "Email support", "Standard SLA"],
      popular: false
    },
    {
      name: "Professional", 
      price: "$299",
      period: "month",
      description: "For growing businesses",
      features: ["Advanced features", "Priority support", "Enhanced SLA"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: ["Full feature set", "Dedicated support", "Custom SLA"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "CEO, Tech Company",
      company: "Tech Corp",
      content: "This solution has transformed our business operations.",
      rating: 5
    }
  ];

  const deviceTypes = [
    { name: "Sensors", description: "Environmental monitoring devices" },
    { name: "Actuators", description: "Control and automation devices" },
    { name: "Gateways", description: "Data collection and transmission hubs" }
  ];

  const channels = [
    { name: "Email Marketing", description: "Automated email campaigns" },
    { name: "Social Media", description: "Multi-platform social management" },
    { name: "Content Marketing", description: "Automated content creation" }
  ];

  const platforms = [
    { name: "Facebook", description: "Social media management" },
    { name: "Twitter", description: "Micro-blogging platform" },
    { name: "LinkedIn", description: "Professional networking" }
  ];

  const metrics = [
    { name: "Engagement Rate", value: "85%" },
    { name: "Conversion Rate", value: "12%" },
    { name: "ROI", value: "340%" }
  ];

  const protocols = [
    { name: "MQTT", description: "Lightweight messaging protocol" },
    { name: "HTTP/HTTPS", description: "Web-based communication" },
    { name: "CoAP", description: "Constrained application protocol" }
  ];

  const integrations = [
    { name: "Slack", description: "Team communication" },
    { name: "Jira", description: "Project management" },
    { name: "GitHub", description: "Code repository" }
  ];

  const compliance = [
    { name: "HIPAA", description: "Healthcare data protection" },
    { name: "GDPR", description: "European data privacy" },
    { name: "SOC 2", description: "Security compliance" }
  ];`;

    // Replace the existing data arrays
    content = content.replace(
      /const features = \[[\s\S]*?\];[\s\S]*?const benefits = \[[\s\S]*?\];[\s\S]*?const useCases = \[[\s\S]*?\];[\s\S]*?const pricingPlans = \[[\s\S]*?\];[\s\S]*?const testimonials = \[[\s\S]*?\];/,
      correctDataStructure
    );

    // Fix export statement
    content = content.replace(
      /export default [A-Za-z]+Page;/,
      `export default ${componentName};`
    );

    // Remove unused variables
    content = content.replace(/\s+const \[isVisible, setIsVisible\] = useState\(false\);\s+useEffect\(\(\) => \{\s+setIsVisible\(true\);\s+\}, \[\]\);/g, '');

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
};

filesToFix.forEach(fixFile);
console.log('All files fixed');