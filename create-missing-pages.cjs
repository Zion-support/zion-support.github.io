const fs = require('fs');
const path = require('path');

const missingPages = [
  'app/project-management-saas/page.tsx',
  'app/customer-relationship-saas/page.tsx',
  'app/inventory-management-saas/page.tsx',
  'app/financial-management-saas/page.tsx',
  'app/employee-management-saas/page.tsx',
  'app/social-media-management-saas/page.tsx',
  'app/email-marketing-saas/page.tsx',
  'app/website-builder-saas/page.tsx',
  'app/task-management-saas/page.tsx',
  'app/smart-home-saas/page.tsx',
  'app/ai-powered-chatbot-saas/page.tsx'
];

const pageTemplate = (title, description) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ${title.replace(/[^a-zA-Z0-9]/g, '')} = () => {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                ${title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                ${description}
              </p>
              <Link to="/contact">
                <FuturisticButton size="lg">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </Link>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default ${title.replace(/[^a-zA-Z0-9]/g, '')};
`;

const pageData = {
  'project-management-saas': {
    title: 'Project Management SAAS',
    description: 'Comprehensive project management solution for teams and organizations.'
  },
  'customer-relationship-saas': {
    title: 'Customer Relationship SAAS',
    description: 'Advanced CRM solution for managing customer relationships and sales.'
  },
  'inventory-management-saas': {
    title: 'Inventory Management SAAS',
    description: 'Complete inventory management solution for businesses of all sizes.'
  },
  'financial-management-saas': {
    title: 'Financial Management SAAS',
    description: 'Professional financial management and accounting solution.'
  },
  'employee-management-saas': {
    title: 'Employee Management SAAS',
    description: 'Comprehensive HR and employee management platform.'
  },
  'social-media-management-saas': {
    title: 'Social Media Management SAAS',
    description: 'Complete social media management and marketing solution.'
  },
  'email-marketing-saas': {
    title: 'Email Marketing SAAS',
    description: 'Advanced email marketing platform for businesses.'
  },
  'website-builder-saas': {
    title: 'Website Builder SAAS',
    description: 'Professional website builder with drag-and-drop functionality.'
  },
  'task-management-saas': {
    title: 'Task Management SAAS',
    description: 'Efficient task and project management solution.'
  },
  'smart-home-saas': {
    title: 'Smart Home SAAS',
    description: 'Comprehensive smart home management and automation platform.'
  },
  'ai-powered-chatbot-saas': {
    title: 'AI-Powered Chatbot SAAS',
    description: 'Advanced AI chatbot solution for customer service and support.'
  }
};

function createPage(filePath) {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const dirName = path.basename(path.dirname(filePath));
    const data = pageData[dirName] || {
      title: dirName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      description: `Professional ${dirName.replace(/-/g, ' ')} solution.`
    };
    
    const content = pageTemplate(data.title, data.description);
    
    // Ensure directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Created: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error creating ${filePath}:`, error.message);
    return false;
  }
}

// Create all missing pages
let createdCount = 0;
for (const page of missingPages) {
  if (createPage(page)) {
    createdCount++;
  }
}

console.log(`Created ${createdCount} pages`);