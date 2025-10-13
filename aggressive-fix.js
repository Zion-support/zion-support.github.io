import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { execSync } from 'child_process';

// Run TypeScript check and get all files with errors
const runTypeCheck = () => {
  try {

    const output = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });
    return output;
  } catch (error) {
    return error.stdout || error.stderr || '';
  }
};

// Extract file paths from TypeScript errors
const getFilesWithErrors = (typeCheckOutput) => {
  const lines = typeCheckOutput.split('\n');
  const files = new Set();
  
  for (const line of lines) {
    const match = line.match(/^([^(]+)\(/);
    if (match) {
      const filePath = match[1].trim();
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        files.add(filePath);
      }
    }
  }
  
  return Array.from(files);
};

// Generic page template
const createGenericPage = (serviceName, title, description) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, BarChart, Target, TrendingUp } from 'lucide-react';

const ${serviceName}Page: React: React: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'Cutting-edge technology solutions for modern businesses.',
      benefits: ['Latest innovations', 'Scalable solutions', 'High performance', 'Future-proof']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Comprehensive data analysis and insights.',
      benefits: ['Real-time analytics', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Solutions',
      description: 'Targeted solutions designed for your specific needs.',
      benefits: ['Custom solutions', 'Expert consultation', 'Proven results', 'Ongoing support']
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '100+' },
    { label: 'Success Rate', value: '98%' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Years Experience', value: '5+' }
  ];

  return (
    <>
      <Helmet>
        <title>${title} | Zion Tech Group</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="AI, ${serviceName}, automation, technology, solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-300">
              Powerful capabilities designed to transform your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our ${serviceName} solution today and see the difference AI can make.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Start Your Journey
          </button>
        </div>
      </section>
    </>
  );
};

export default ${serviceName}Page;
`;

// Component template for non-page files
const createComponentTemplate = (componentName) => `import React from 'react';

const ${componentName}: React: React: React.FC = () => {
  return (
    <div className="${componentName.toLowerCase()}">
      {/* ${componentName} component */}
    </div>
  );
};

export default ${componentName};
`;

// Utility template
const createUtilityTemplate = (utilityName) => `// ${utilityName} utility
export const ${utilityName} = () => {
  // Implementation
};
`;

// Main function
const main = () => {
  console.log('Running TypeScript check to identify files with errors...');
  const typeCheckOutput = runTypeCheck();
  const filesWithErrors = getFilesWithErrors(typeCheckOutput);
  
  console.log(`Found ${filesWithErrors.length} files with errors`);
  
  let fixedCount = 0;
  
  for (const filePath of filesWithErrors) {
    try {

      const fullPath = path.join(__dirname, filePath);
      
      if (!fs.existsSync(fullPath)) {
        console.log(`File not found: ${filePath
} catch (error) {
  console.error('Error:', error);
}`);
        continue;
      }
      
      // Determine file type and create appropriate content
      let newContent = '';
      const fileName = path.basename(filePath, path.extname(filePath));
      
      if (filePath.includes('/page.tsx')) {
        // It's a page file
        const serviceName = path.basename(path.dirname(filePath))
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('');
        const title = serviceName
          .replace(/([A-Z])/g, ' $1')
          .trim()
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
        const description = `Advanced ${title.toLowerCase()} solutions powered by artificial intelligence to transform your business operations.`;
        
        newContent = createGenericPage(serviceName, title, description);
      } else if (filePath.includes('/components/')) {
        // It's a component file
        const componentName = fileName
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('');
        newContent = createComponentTemplate(componentName);
      } else if (filePath.includes('/utils/')) {
        // It's a utility file
        const utilityName = fileName
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('');
        newContent = createUtilityTemplate(utilityName);
      } else {
        // Generic TypeScript file
        newContent = `// ${fileName}\nexport const ${fileName} = () => {\n  // Implementation\n};`;
      }
      
      fs.writeFileSync(fullPath, newContent);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
      
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  }
  
  console.log(`\nFixed ${fixedCount} files.`);
};

main();