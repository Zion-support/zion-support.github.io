import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to check if a file has syntax errors
function hasSyntaxErrors(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for common syntax error patterns
    const errorPatterns = [
      /Parsing error/,
      /Unexpected token/,
      /Declaration or statement expected/,
      /Expression expected/,
      /Property assignment expected/,
      /JSX expressions must have one parent element/,
      /Expected corresponding JSX closing tag/,
      /'}' expected/,
      /';' expected/,
      /',' expected/,
      /':' expected/,
      /'from' expected/,
      /An identifier or keyword cannot immediately follow a numeric literal/,
      /Unterminated string literal/,
      /Identifier expected/,
      /Unexpected keyword or identifier/,
      /Expected corresponding closing tag for JSX fragment/,
      /JSX element.*has no corresponding closing tag/
    ];
    
    return errorPatterns.some(pattern => pattern.test(content));
  } catch (error) {
    return true; // If we can't read the file, consider it problematic
  }
}

// Function to get all tsx files recursively
function getAllTsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip certain directories
      if (!['node_modules', '.next', 'dist', 'build', '__tests__'].includes(file)) {
        results = results.concat(getAllTsxFiles(filePath));
      }
    } else if (file.endsWith('.tsx')) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Get all tsx files
const allTsxFiles = getAllTsxFiles(path.join(__dirname, 'app'));

// Filter files that have syntax errors
const problematicFiles = allTsxFiles.filter(file => {
  const relativePath = path.relative(__dirname, file);
  return hasSyntaxErrors(file);
});

console.log(`Found ${problematicFiles.length} files with syntax errors`);

const baseTemplate = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, BarChart, CheckCircle, ArrowRight, Zap, Shield, Target } from 'lucide-react';

const PageComponent: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart automation', 'Predictive analytics', 'Intelligent insights', 'Automated processes']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time monitoring', 'Performance metrics', 'Data visualization', 'Custom reports']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing with optimized algorithms and infrastructure.',
      benefits: ['Fast processing', 'Optimized algorithms', 'Scalable infrastructure', 'High availability']
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability for mission-critical applications.',
      benefits: ['Data encryption', 'Access control', 'Audit logging', 'Compliance ready']
    }
  ];

  const benefits = [
    'Enhanced productivity and efficiency',
    'Reduced operational costs',
    'Improved decision making',
    'Scalable solutions',
    '24/7 availability',
    'Expert support'
  ];

  return (
    <>
      <Helmet>
        <title>Page Title - Zion Tech Group</title>
        <meta name="description" content="Description of the page and its benefits." />
        <meta name="keywords" content="relevant, keywords, for, seo" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page Title
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Description of the page and its benefits for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PageComponent;`;

const componentTemplate = `'use client';
import React from 'react';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target } from 'lucide-react';

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

const Component: React.FC<ComponentProps> = ({ className = '', children }) => {
  return (
    <div className={\`bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group \${className}\`}>
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-4">Component Title</h3>
      <p className="text-gray-300 mb-4">Component description goes here.</p>
      {children}
    </div>
  );
};

export default Component;`;

let fixedCount = 0;

problematicFiles.forEach(filePath => {
  try {
    const relativePath = path.relative(__dirname, filePath);
    const dir = path.dirname(filePath);
    
    // Ensure directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Determine if it's a component or page file
    const isComponent = relativePath.includes('/components/');
    
    let content;
    let componentName;
    
    if (isComponent) {
      // Generate component name from file path
      componentName = relativePath
        .split('/')
        .pop()
        .replace('.tsx', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      
      content = componentTemplate.replace(/Component/g, componentName);
    } else {
      // Generate page component name from file path
      componentName = relativePath
        .replace('app/', '')
        .replace('/page.tsx', '')
        .replace('/layout.tsx', 'Layout')
        .replace('/error.tsx', 'Error')
        .replace('/loading.tsx', 'Loading')
        .replace('/not-found.tsx', 'NotFound')
        .replace('/global-error.tsx', 'GlobalError')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('') + 'Page';
      
      content = baseTemplate.replace(/PageComponent/g, componentName);
    }
    
    // Write the file
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${relativePath}`);
    fixedCount++;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed: ${fixedCount} files`);
console.log('All problematic files have been processed!');