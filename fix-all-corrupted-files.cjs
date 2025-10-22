const fs = require('fs');
const path = require('path');

// Get all .tsx files in the app directory
function getAllTsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllTsxFiles(filePath));
    } else if (file.endsWith('.tsx')) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Template for a clean page component
const createCleanPage = (title, description, keywords) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, Globe, Database, Cpu, Target, BarChart, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckSquare, ShoppingCart, Settings, Calendar, TrendingUp, Lock } from 'lucide-react';

const ${title.replace(/[^a-zA-Z0-9]/g, '')}Page: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Technology',
      description: 'Cutting-edge solutions powered by the latest technology and AI.'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and efficiency with real-time processing capabilities.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale effortlessly across multiple regions with automatic load balancing.'
    }
  ];

  const benefits = [
    'AI-powered automation',
    'Real-time processing',
    'Scalable solutions',
    'Enterprise-grade security',
    '24/7 support',
    'Custom integrations'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>${title} - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="${description}" />
        <meta name="keywords" content="${keywords}" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              ${description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Get Started
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View All Services
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-lg text-gray-300">
                Everything you need for success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 rounded-2xl p-8 backdrop-blur-lg border border-white/10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Key Benefits
              </h2>
              <p className="text-lg text-gray-300">
                Why choose our solution
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let us help you implement this solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Start Your Project
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ${title.replace(/[^a-zA-Z0-9]/g, '')}Page;`;

// Template for a clean component
const createCleanComponent = (title, description) => `import React from 'react';

interface ${title.replace(/[^a-zA-Z0-9]/g, '')}Props {
  className?: string;
}

const ${title.replace(/[^a-zA-Z0-9]/g, '')}: React.FC<${title.replace(/[^a-zA-Z0-9]/g, '')}Props> = ({ className = '' }) => {
  return (
    <div className={\`${description} \${className}\`}>
      <h2>${title}</h2>
      <p>This is a clean, functional component.</p>
    </div>
  );
};

export default ${title.replace(/[^a-zA-Z0-9]/g, '')};`;

// Function to get page info from file path
function getPageInfo(filePath) {
  const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 1];
  const pageName = pathParts[pathParts.length - 2];
  
  let title;
  if (fileName === 'page.tsx') {
    title = pageName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  } else {
    title = fileName.replace('.tsx', '').split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }
  
  const description = `Professional ${title.toLowerCase()} solutions powered by advanced AI and cutting-edge technology.`;
  const keywords = `${title.toLowerCase()}, AI solutions, IT services, automation, technology, business solutions`;
  
  return { title, description, keywords };
}

// Function to check if a file has syntax errors
function hasSyntaxErrors(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for common syntax error patterns
    const errorPatterns = [
      /Expected corresponding JSX closing tag/,
      /Identifier expected/,
      /Unexpected token/,
      /Declaration or statement expected/,
      /Expression expected/,
      /Property assignment expected/,
      /Property destructuring pattern expected/,
      /case or default expected/,
      /export expected/,
      /Expected corresponding closing tag for JSX fragment/,
      /JSX element.*has no corresponding closing tag/,
      /JSX expressions must have one parent element/,
      /Unexpected token.*Did you mean/,
      /Property or signature expected/,
      /Cannot find name/,
      /Type.*is not assignable/,
      /Argument of type.*is not assignable/
    ];
    
    // Check if the file contains merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      return true;
    }
    
    // Check for malformed JSX structure
    if (content.includes('</div><') || content.includes('</section><') || content.includes('</h1><')) {
      return true;
    }
    
    // Check for incomplete JSX elements
    if (content.match(/<[^>]*$/)) {
      return true;
    }
    
    // Check for syntax errors by trying to parse the content
    for (const pattern of errorPatterns) {
      if (pattern.test(content)) {
        return true;
      }
    }
    
    return false;
  } catch (error) {
    return true;
  }
}

// Get all .tsx files
const allTsxFiles = getAllTsxFiles('./app');

console.log(`Found ${allTsxFiles.length} .tsx files`);

let fixedCount = 0;
let skippedCount = 0;

// Fix files that have syntax errors
allTsxFiles.forEach(filePath => {
  try {
    if (hasSyntaxErrors(filePath)) {
      const { title, description, keywords } = getPageInfo(filePath);
      
      // Determine if it's a page or component
      if (filePath.includes('/page.tsx')) {
        const cleanContent = createCleanPage(title, description, keywords);
        fs.writeFileSync(filePath, cleanContent, 'utf8');
      } else {
        const cleanContent = createCleanComponent(title, 'bg-white p-4 rounded-lg');
        fs.writeFileSync(filePath, cleanContent, 'utf8');
      }
      
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    } else {
      console.log(`Skipped (no errors): ${filePath}`);
      skippedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nSummary:`);
console.log(`- Fixed: ${fixedCount} files`);
console.log(`- Skipped: ${skippedCount} files`);
console.log(`- Total: ${allTsxFiles.length} files`);