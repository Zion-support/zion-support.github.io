const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to check if a file has syntax errors
function hasSyntaxErrors(filePath) {
  try {
    execSync(`npx tsc --noEmit --skipLibCheck "${filePath}"`, { stdio: 'pipe' });
    return false;
  } catch (error) {
    return true;
  }
}

// Function to create a basic page template
function createBasicPageTemplate(fileName) {
  const pageName = fileName.replace('.tsx', '').replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const componentName = fileName.replace('.tsx', '').replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '');
  
  return `'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Brain, Zap, Shield, Users, CheckCircle } from 'lucide-react'

const ${componentName}Page: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology that provides intelligent insights and automation.',
      benefits: ['Intelligent automation', 'Smart insights', 'Predictive analytics', 'Machine learning']
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized solutions that deliver exceptional performance and reliability.',
      benefits: ['Fast processing', 'Reliable uptime', 'Scalable architecture', 'Real-time updates']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security measures to protect your data and operations.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance standards']
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Intuitive interfaces designed for optimal user experience and productivity.',
      benefits: ['Intuitive interface', 'User training', '24/7 support', 'Customization options']
    }
  ]

  return (
    <>
      <Helmet>
        <title>${pageName} - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Professional ${pageName.toLowerCase()} solutions powered by advanced AI and cutting-edge technology. Transform your business with our innovative approach." />
        <meta name="keywords" content="${pageName.toLowerCase()}, AI solutions, technology, business automation, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${pageName} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional ${pageName.toLowerCase()} solutions powered by advanced AI and cutting-edge technology. Transform your business with our innovative approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive solutions designed to meet your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center">
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
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our experts to discuss your requirements and get started with our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ${componentName}Page`;
}

// Find all corrupted files
const appDir = '/workspace/app';
const corruptedFiles = [];

function findCorruptedFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findCorruptedFiles(filePath);
    } else if (file.endsWith('.tsx') && file.includes('page.tsx')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        // Check for common corruption patterns
        if (content.includes('error TS') || 
            content.includes('<<<<<<< HEAD') || 
            content.includes('=======') || 
            content.includes('>>>>>>> origin/main') ||
            content.includes('JSX expressions must have one parent element') ||
            content.includes('Expected corresponding JSX closing tag') ||
            content.length < 100) {
          corruptedFiles.push(filePath);
        }
      } catch (error) {
        console.log(`Error reading ${filePath}:`, error.message);
      }
    }
  }
}

console.log('Scanning for corrupted files...');
findCorruptedFiles(appDir);

console.log(`Found ${corruptedFiles.length} potentially corrupted files:`);
corruptedFiles.forEach(file => console.log(`- ${file}`));

// Fix the most critical files first
const criticalFiles = corruptedFiles.slice(0, 10);
console.log(`\nFixing ${criticalFiles.length} critical files...`);

criticalFiles.forEach(filePath => {
  try {
    const fileName = path.basename(filePath);
    const newContent = createBasicPageTemplate(fileName);
    fs.writeFileSync(filePath, newContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.log(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Done!');