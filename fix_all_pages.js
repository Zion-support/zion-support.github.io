import fs from 'fs';
import path from 'path';

// List of pages that need to be completely rewritten
const pagesToRewrite = [
  'enterprise-security',
  'services-advertising', 
  'smart-city-infrastructure',
  'task-manager-pro'
];

// Template for a basic page
 `import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../../layout'

  return (
                ${title}
              ${description}

              <h3 className="text-xl font-semibold text-white mb-4">Feature 1</h3>
                Description of the first key feature or service.
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>

              <h3 className="text-xl font-semibold text-white mb-4">Feature 2</h3>
                Description of the second key feature or service.
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>

              <h3 className="text-xl font-semibold text-white mb-4">Feature 3</h3>
                Description of the third key feature or service.
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
  )

export default ${pageName}Page`;

// Page configurations
const pageConfigs = {
  'enterprise-security': {
    title: 'Enterprise Security',
    description: 'Comprehensive enterprise security solutions including cybersecurity, compliance, and risk management.',
    keywords: 'enterprise security, cybersecurity, compliance, risk management, data protection'
  },
  'services-advertising': {
    title: 'Services Advertising',
    description: 'Professional advertising services to promote your business and reach your target audience effectively.',
    keywords: 'advertising services, marketing, digital marketing, business promotion'
  },
  'smart-city-infrastructure': {
    title: 'Smart City Infrastructure',
    description: 'Advanced smart city infrastructure solutions including IoT, data analytics, and urban planning technology.',
    keywords: 'smart city, infrastructure, IoT, urban planning, data analytics'
  },
  'task-manager-pro': {
    title: 'Task Manager Pro',
    description: 'Professional task management solution with advanced features for project planning and team collaboration.',
    keywords: 'task management, project planning, team collaboration, productivity tools'
};

// Rewrite pages
for (const page of pagesToRewrite) {
  const pagePath = `/workspace/app/${page}/page.tsx`;
  const config = pageConfigs[page];
 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  
  const content = pageTemplate(componentName, config.title, config.description, config.keywords);
  
  try {
    fs.writeFileSync(pagePath, content);
    console.log(`Rewrote ${page} page`);
  } catch (error) {
    console.error(`Error rewriting ${page}:`, error.message);

console.log('Page rewriting completed');