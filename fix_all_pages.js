import fs from 'fs';
import path from 'path';

// List of pages that need to be completely rewritten;
const pagesToRewrite = [
  'enterprise-security',
  'services-advertising', 
  'smart-city-infrastructure',
  'task-manager-pro'
];

// Template for a basic page;
const pageTemplate = (pageName, title, description, keywords) => `import React from 'react'
import { Helmet  } from "react-helmet-async";
import Layout from '../../layout'

const ${pageName}Page: React.FC = () => {
  return (
    <Layout;
      title="${title} - Zion Tech Group" description="${description}"
      keywords="${keywords}"></Layout>
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20" ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ></div>
          <div className="text-center mb-16" ></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" ></h1>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent" ></span>
                ${title}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" ></p>
              ${description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" ></div>
              <h3 className="text-xl font-semibold text-white mb-4" >Feature 1</h3>
              <p className="text-gray-300 mb-4" ></p>
                Description of the first key feature or service.
              </p>
              <ul className="text-gray-300 space-y-2" ></ul>
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" ></div>
              <h3 className="text-xl font-semibold text-white mb-4" >Feature 2</h3>
              <p className="text-gray-300 mb-4" ></p>
                Description of the second key feature or service.
              </p>
              <ul className="text-gray-300 space-y-2" ></ul>
                <li>• Benefit 1</li>
                <li>• Benefit 2</li>
                <li>• Benefit 3</li>
                <li>• Benefit 4</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" ></div>
              <h3 className="text-xl font-semibold text-white mb-4" >Feature 3</h3>
              <p className="text-gray-300 mb-4" ></p>
                Description of the third key feature or service.
              </p>
              <ul className="text-gray-300 space-y-2" ></ul>
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

// Page configurations;
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
  'task-manager-pro': {title: 'Task Manager Pro',
    description: 'Professional task management solution with advanced features for project planning and team collaboration.',
    keywords: 'task management, project planning, team collaboration, productivity tools'
  }
};

// Rewrite pages;
for (const page of pagesToRewrite) {
  const pagePath = `/workspace/app/${page}/page.tsx`;
  const config = pageConfigs[page];
  const componentName = page.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('');
  
  const content = pageTemplate(componentName, config.title, config.description, config.keywords);
  
  try {
    fs.writeFileSync(pagePath, content);
    console.log(`Rewrote ${page} page`);
  } catch (error) {
    console.error(`Error rewriting ${page}:`, error.message);
  }
}

console.log('Page rewriting completed');