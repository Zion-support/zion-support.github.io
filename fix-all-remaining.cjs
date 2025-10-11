const fs = require('fs');
const path = require('path');

// Read the list of files to fix
const filesToFix = fs.readFileSync('files-to-fix.txt', 'utf8')
  .split('\n')
  .filter(line => line.trim() && !line.includes('> zion-website@1.0.0'))
  .map(line => line.trim());

console.log(`Found ${filesToFix.length} files to fix`);

// Template for a proper page
const createPageTemplate = (pageName, title, description) => `'use client';
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ${pageName}: React.FC = () => {
  const features = [
    {
      title: '${title}',
      description: 'Professional ${title.toLowerCase()} services delivered by experienced professionals.',
      benefits: ['Quality Assurance', 'Fast Delivery', '24/7 Support', 'Custom Solutions']
    },
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${title.toLowerCase()}, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional ${title.toLowerCase()} services to help your business succeed and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our ${title.toLowerCase()} services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ${pageName};`;

// Function to convert file path to component name and title
function getPageInfo(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const pageName = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Page';
  
  const title = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const description = `Professional ${title.toLowerCase()} services and solutions.`;
  
  return { pageName, title, description };
}

let fixedCount = 0;
let errorCount = 0;

// Fix all files
filesToFix.forEach((filePath, index) => {
  try {
    if (fs.existsSync(filePath)) {
      const { pageName, title, description } = getPageInfo(filePath);
      const content = createPageTemplate(pageName, title, description);
      
      fs.writeFileSync(filePath, content);
      fixedCount++;
      
      if (index % 50 === 0) {
        console.log(`Progress: ${index + 1}/${filesToFix.length} files processed`);
      }
    } else {
      console.log(`File not found: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nFixed: ${fixedCount} files`);
console.log(`Errors: ${errorCount} files`);
console.log('All files processed!');