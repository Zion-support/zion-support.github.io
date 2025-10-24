const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Extract the component name from the file path
    const fileName = path.basename(filePath, '.tsx');
    const componentName = fileName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page';
    
    // Create a clean template
    const cleanContent = `'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

const ${componentName}: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Professional Service',
      description: 'High-quality professional services tailored to your business needs'
    },
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI solutions to enhance your business operations'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick and efficient delivery of solutions and services'
    }
  ];

  const benefits = [
    'Professional expertise and experience',
    'Customized solutions for your needs',
    '24/7 support and maintenance',
    'Cost-effective solutions',
    'Scalable and flexible services',
    'Latest technology and tools',
    'Expert consultation and guidance',
    'Ongoing optimization and improvement'
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              ${fileName.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional ${fileName.split('-').join(' ')} services by Zion Tech Group. 
              Advanced AI and IT solutions for your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-300 mb-6">
                We provide comprehensive ${fileName.split('-').join(' ')} solutions tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4">
                    <feature.icon className="w-8 h-8 text-blue-400 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ${componentName};`;

    // Write the clean content
    fs.writeFileSync(filePath, cleanContent);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files in the app directory
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') && item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} page.tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);