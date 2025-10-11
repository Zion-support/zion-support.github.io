const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix corrupted files with duplicate content
    if (content.includes("'use client'\nimport React from 'react'") && content.includes("export default PagePage")) {
      // This is a corrupted file, replace with proper structure
      const fileName = path.basename(filePath, '.tsx');
      const pageName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, ' ') + 'Page';
      
      content = `'use client';
import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ${pageName}: React.FC = () => {
  const features = [
    {
      title: '${pageName.replace('Page', '')}',
      description: 'Professional ${fileName.replace(/-/g, ' ')} services and solutions.',
      benefits: ['High Quality', 'Expert Team', '24/7 Support', 'Custom Solutions']
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
        <title>${pageName.replace('Page', '')} - Zion Tech Group</title>
        <meta name="description" content="Professional ${fileName.replace(/-/g, ' ')} services and solutions." />
        <meta name="keywords" content="${fileName.replace(/-/g, ' ')}, services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${pageName.replace('Page', '')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional ${fileName.replace(/-/g, ' ')} services to help your business succeed and grow.
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
                Contact us today to learn more about our ${fileName.replace(/-/g, ' ')} services.
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
      fixed = true;
    }

    // Fix files with duplicate imports and corrupted content
    if (content.includes("'use client'\nimport React from 'react'") && content.includes("const ") && content.includes("return (")) {
      // Remove duplicate imports and fix structure
      const lines = content.split('\n');
      const cleanLines = [];
      let inCorruptedSection = false;
      let foundReturn = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes("'use client'") && i > 0) {
          inCorruptedSection = true;
          continue;
        }
        
        if (inCorruptedSection && line.includes("const ") && line.includes(": React.FC")) {
          inCorruptedSection = false;
          cleanLines.push(line);
          continue;
        }
        
        if (inCorruptedSection) {
          continue;
        }
        
        if (line.includes("return (") && !foundReturn) {
          foundReturn = true;
          cleanLines.push(line);
          continue;
        }
        
        cleanLines.push(line);
      }
      
      content = cleanLines.join('\n');
      fixed = true;
    }

    // Remove unused ArrowRight imports
    if (content.includes("ArrowRight") && !content.includes("<ArrowRight")) {
      content = content.replace(/import { [^}]*ArrowRight[^}]* } from 'lucide-react';/g, '');
      content = content.replace(/import { CheckCircle, ArrowRight } from 'lucide-react';/g, "import { CheckCircle } from 'lucide-react';");
      fixed = true;
    }

    // Remove unused React imports
    if (content.includes("import React from 'react';") && !content.includes("<React") && !content.includes("React.")) {
      content = content.replace(/import React from 'react';\n/g, '');
      fixed = true;
    }

    // Fix parsing errors with missing closing braces
    if (content.includes("export default") && !content.includes("};")) {
      content = content.replace(/export default (\w+);$/, '};\n\nexport default $1;');
      fixed = true;
    }

    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files
const pageFiles = glob.sync('app/**/page.tsx');

console.log(`Found ${pageFiles.length} page files to check...`);

pageFiles.forEach(fixFile);

console.log('Done fixing files!');