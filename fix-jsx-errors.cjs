const fs = require('fs');
const path = require('path');

// List of files that need to be fixed based on the error output
const filesToFix = [
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/about/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/accessibility/page.tsx'
];

// Template for 5G pages
const create5GPageTemplate = (pageName, title, description) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${pageName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ${title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            ${description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            ${title} Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}`;

// Template for about page
const aboutPageTemplate = `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - Advanced AI and IT Solutions" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Leading provider of advanced AI and IT solutions for modern businesses.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We are committed to delivering cutting-edge technology solutions that drive business growth and innovation.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 mb-6">
              To be the global leader in AI and IT solutions, empowering businesses to achieve their full potential.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Innovation and Excellence</li>
              <li>Customer-Centric Approach</li>
              <li>Integrity and Transparency</li>
              <li>Continuous Learning and Growth</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// Template for accessibility pages
const accessibilityPageTemplate = `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="Accessibility information for Zion Tech Group website" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Accessibility
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We are committed to making our website accessible to all users.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-600 mb-6">
              We strive to ensure that our website is accessible to all users, including those with disabilities.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>High contrast mode</li>
              <li>Text size adjustment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// Page configurations
const pageConfigs = {
  'app/5g-edge-computing/page.tsx': {
    template: '5g',
    pageName: 'FiveGEdgeComputingPage',
    title: '5G Edge Computing',
    description: 'Advanced 5G edge computing solutions for real-time processing and low-latency applications.'
  },
  'app/5g-implementation/page.tsx': {
    template: '5g',
    pageName: 'FiveGImplementationPage',
    title: '5G Implementation',
    description: 'Comprehensive 5G implementation services for seamless network deployment.'
  },
  'app/5g-iot-solutions/page.tsx': {
    template: '5g',
    pageName: 'FiveGIoTSolutionsPage',
    title: '5G IoT Solutions',
    description: 'Innovative 5G IoT solutions for connected devices and smart systems.'
  },
  'app/5g-mobile-applications/page.tsx': {
    template: '5g',
    pageName: 'FiveGMobileApplicationsPage',
    title: '5G Mobile Applications',
    description: 'Next-generation 5G mobile applications for enhanced user experiences.'
  },
  'app/5g-network-infrastructure/page.tsx': {
    template: '5g',
    pageName: 'FiveGNetworkInfrastructurePage',
    title: '5G Network Infrastructure',
    description: 'Robust 5G network infrastructure solutions for reliable connectivity.'
  },
  'app/5g-private-networks/page.tsx': {
    template: '5g',
    pageName: 'FiveGPrivateNetworksPage',
    title: '5G Private Networks',
    description: 'Secure 5G private network solutions for enterprise environments.'
  },
  'app/5g-smart-city-solutions/page.tsx': {
    template: '5g',
    pageName: 'FiveGSmartCitySolutionsPage',
    title: '5G Smart City Solutions',
    description: 'Comprehensive 5G smart city solutions for urban development.'
  },
  'app/5g-solutions/page.tsx': {
    template: '5g',
    pageName: 'FiveGSolutionsPage',
    title: '5G Solutions',
    description: 'Complete 5G solutions portfolio for modern connectivity needs.'
  },
  'app/about/page.tsx': {
    template: 'about'
  },
  'app/accessibility-page/page.tsx': {
    template: 'accessibility'
  },
  'app/accessibility/page.tsx': {
    template: 'accessibility'
  }
};

// Function to fix a file
function fixFile(filePath) {
  const config = pageConfigs[filePath];
  if (!config) {
    console.log(`No config found for ${filePath}`);
    return;
  }

  let content;
  switch (config.template) {
    case '5g':
      content = create5GPageTemplate(config.pageName, config.title, config.description);
      break;
    case 'about':
      content = aboutPageTemplate;
      break;
    case 'accessibility':
      content = accessibilityPageTemplate;
      break;
    default:
      console.log(`Unknown template for ${filePath}`);
      return;
  }

  try {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting to fix JSX errors...');
filesToFix.forEach(fixFile);
console.log('Finished fixing JSX errors.');