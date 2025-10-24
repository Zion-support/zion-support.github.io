const fs = require('fs');
const path = require('path');

// Function to create a basic page template
function createBasicPageTemplate(fileName) {
  const pageName = fileName.replace(/[^a-zA-Z0-9]/g, '');
  const title = fileName.replace(/-/g, ' ').replace(/\.tsx$/, '');
  
  return `'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Star, ArrowRight } from 'lucide-react'

export default function ${pageName}Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ${title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Professional ${title} services to help your business grow
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Professional Service</h3>
                </div>
                <p>High-quality ${title} solutions tailored to your needs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Expert Support</h3>
                </div>
                <p>24/7 support from our experienced team</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  <h3 className="text-xl font-semibold">Scalable Solutions</h3>
                </div>
                <p>Solutions that grow with your business</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact us today to learn more about our ${title} services</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
`;
}

// Function to create a basic component template
function createBasicComponentTemplate(fileName) {
  const componentName = fileName.replace(/[^a-zA-Z0-9]/g, '');
  
  return `import React from 'react'

interface ${componentName}Props {
  className?: string
}

const ${componentName}: React.FC<${componentName}Props> = ({ className = '' }) => {
  return (
    <div className={\`${componentName.toLowerCase()} \${className}\`}>
      {/* ${componentName} component content */}
    </div>
  )
}

export default ${componentName}
`;
}

// List of corrupted files to fix
const corruptedFiles = [
  './src/ai-analytics-dashboard/page.tsx',
  './src/ai-content-generation/page.tsx',
  './src/ai-crm/page.tsx',
  './src/ai-customer-support/page.tsx',
  './src/ai-cybersecurity/page.tsx',
  './src/ai-data-visualization/page.tsx',
  './src/ai-document-processing/page.tsx',
  './src/ai-fashion-design/page.tsx',
  './src/ai-fitness-coach/page.tsx',
  './src/ai-healthcare/page.tsx',
  './src/ai-lead-generation/page.tsx',
  './src/ai-marketing/page.tsx',
  './src/ai-music-composition/page.tsx',
  './src/ai-project-manager/page.tsx',
  './src/ai-sales-automation/page.tsx',
  './src/ai-scheduler/page.tsx',
  './src/ai-services/page.tsx',
  './src/ai-social-media-manager/page.tsx',
  './src/ai-video-generation/page.tsx',
  './src/ai-voice-cloning/page.tsx',
  './src/ai-workflow-automation/page.tsx',
  './src/api-docs/page.tsx',
  './src/autonomous-systems/page.tsx',
  './src/business-intelligence/page.tsx',
  './src/cloud-services/page.tsx',
  './src/compliance/page.tsx',
  './src/components/AdvancedSEOOptimizer.tsx',
  './src/components/ContentNewsletterSignup.tsx',
  './src/components/Footer.tsx',
  './src/components/PWAInstaller.tsx',
  './src/components/SEO.tsx',
  './src/components/SEOHead.tsx',
  './src/consultation/page.tsx',
  './src/contact/page.tsx',
  './src/demo/page.tsx',
  './src/devops/page.tsx',
  './src/expense-tracker/page.tsx',
  './src/it-services/page.tsx',
  './src/machine-learning/page.tsx',
  './src/micro-saas/page-original.tsx',
  './src/micro-saas/page.tsx',
  './src/page-optimized.tsx',
  './src/pricing/page.tsx',
  './src/quantum-computing/page.tsx',
  './src/setupTests.tsx',
  './src/sitemap-page.tsx',
  './src/smart-analytics/page.tsx',
  './src/task-manager-pro/page.tsx'
];

console.log('Starting to fix corrupted src files...');
let fixedCount = 0;

for (const file of corruptedFiles) {
  if (fs.existsSync(file)) {
    const fileName = path.basename(file);
    let content;
    
    if (fileName.includes('page.tsx')) {
      content = createBasicPageTemplate(fileName);
    } else {
      content = createBasicComponentTemplate(fileName);
    }
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);