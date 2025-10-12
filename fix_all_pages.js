import fs from 'fs';
import path from 'path';

// List of pages that need to be completely rewritten
pagesToRewrite = [
  'enterprise-security',
  'services-advertising', 
  'smart-city-infrastructure',
  'task-manager-pro'
];

// Template for a basic page
pageTemplate = (pageName, title, description, keywords) => `import React from 'react'
import { Helmet } from 'react-helmet-async'
import Layout from '../../layout'

const ${pageName}Page: React.FC = () => {
  return (
    <Layout
      title="${title} - Zion Tech Group"
      description="${description}"
      keywords="${keywords}"
    >
      <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="ma x-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="tex t-center mb-16">
            <h1 className="tex t-4xl md:text-6xl font-bold text-white mb-6">
              <span className="b g-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                ${title}
              </span>
            </h1>
            <p className="tex t-xl text-gray-300 max-w-3xl mx-auto">
              ${description}
            </p>
          </div>

          <div className="gri d grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="b g-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="tex t-xl font-semibold text-white mb-4">Feature 1</h3>
              <p className="tex t-gray-300 mb-4">
                Description of the first key feature or service.
              </p>
              <ul className="tex t-gray-300 space-y-2">
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
              </ul>
            </div>

            <div className="b g-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="tex t-xl font-semibold text-white mb-4">Feature 2</h3>
              <p className="tex t-gray-300 mb-4">
                Description of the second key feature or service.
              </p>
              <ul className="tex t-gray-300 space-y-2">
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
              </ul>
            </div>

            <div className="b g-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="tex t-xl font-semibold text-white mb-4">Feature 3</h3>
              <p className="tex t-gray-300 mb-4">
                Description of the third key feature or service.
              </p>
              <ul className="tex t-gray-300 space-y-2">
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ${pageName}Page`;

// Page configurations
pageConfigs = {
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
  }
};

// Rewrite pages
for (const page of pagesToRewrite) {
  pagePath = `/workspace/app/${page}/page.tsx`;
  config = pageConfigs[page];
  componentName = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  
  content = pageTemplate(componentName, config.title, config.description, config.keywords);
  
  try {
    fs.writeFileSync(pagePath, content);
    console.log(`Rewrote ${page} page`);
  } catch (error) {
    console.error(`Error rewriting ${page}:`, error.message);
  }
}

console.log('Page rewriting completed');