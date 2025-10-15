#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix AI pages
function fixAIPage(filePath) {
  try {
    // Extract the service name from the file path
    const serviceName = path.basename(filePath, '.tsx').replace('ai-', '').replace(/-/g, ' ');
    const titleCase = serviceName.replace(/\b\w/g, l => l.toUpperCase());
    const componentName = titleCase.replace(/\s+/g, '');

    // Create a proper template for AI pages
    const template = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Brain, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AI${componentName}Page: React.FC = () => {
  const services = [
    {
      title: \`Expert AI ${titleCase} Solutions\`,
      description: \`Professional AI ${serviceName} services tailored to your needs.\`
    },
    {
      title: 'Custom Implementation',
      description: \`Tailored AI ${serviceName} implementations for your specific requirements.\`
    },
    {
      title: '24/7 Support',
      description: \`Round-the-clock support for all your AI ${serviceName} needs.\`
    }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: 'AI-Powered Intelligence',
      description: 'Advanced artificial intelligence algorithms for optimal performance.'
    },
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Real-time Processing',
      description: 'Lightning-fast processing capabilities for immediate results.'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-400" />,
      title: 'Proven Results',
      description: 'Tested and validated solutions with measurable outcomes.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI ${titleCase} - Zion Tech Group</title>
        <meta name="description" content={\`Professional AI ${serviceName} solutions and services\`} />
        <meta name="keywords" content="ai, ${serviceName}, artificial intelligence" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">AI ${titleCase}</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional AI ${serviceName} solutions and services
            </p>
            
            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Services Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AI${componentName}Page;`;

    fs.writeFileSync(filePath, template, 'utf8');
    console.log(`Fixed AI page: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing AI page ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix other problematic files
function fixOtherFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax errors
    content = content.replace(/<>/g, '<React.Fragment>');
    content = content.replace(/<\/>/g, '</React.Fragment>');
    content = content.replace(/max-w-3\s+xl/g, 'max-w-3xl');
    content = content.replace(/BrowserRouterasRouter/g, 'BrowserRouter as Router');
    content = content.replace(/Helmet\s+Provider/g, 'HelmetProvider');
    content = content.replace(/Home\s+Page/g, 'HomePage');
    content = content.replace(/export\s+default\s+[^;]+;;/g, (match) => match.replace(';;', ';'));

    // Fix malformed JSX patterns
    if (content.includes('Expected corresponding closing tag for JSX fragment')) {
      content = content.replace(/<>/g, '<React.Fragment>');
      content = content.replace(/<\/>/g, '</React.Fragment>');
      modified = true;
    }

    // Fix unclosed divs
    if (content.includes('<div') && !content.includes('</div>')) {
      const openDivs = (content.match(/<div/g) || []).length;
      const closeDivs = (content.match(/<\/div>/g) || []).length;
      const missingDivs = openDivs - closeDivs;
      
      for (let i = 0; i < missingDivs; i++) {
        content += '\n      </div>';
      }
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting remaining error fixes...');

// Find all problematic files
const aiPatterns = [
  'app/ai-*/page.tsx'
];

const otherPatterns = [
  'app/404.tsx',
  'app/accessibility-page/page.tsx',
  'app/accessibility/page.tsx',
  'app/ad-management/page.tsx',
  'app/advanced-security-suite/page.tsx'
];

let totalFixed = 0;

// Fix AI pages
aiPatterns.forEach(pattern => {
  const files = glob.sync(pattern, { cwd: process.cwd() });
  
  files.forEach(file => {
    if (fixAIPage(file)) {
      totalFixed++;
    }
  });
});

// Fix other files
otherPatterns.forEach(pattern => {
  const files = glob.sync(pattern, { cwd: process.cwd() });
  
  files.forEach(file => {
    if (fixOtherFile(file)) {
      totalFixed++;
    }
  });
});

console.log(`\nFixed ${totalFixed} files.`);
console.log('Remaining error fixes completed!');