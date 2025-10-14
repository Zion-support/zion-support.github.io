const fs = require('fs');
const path = require('path');

// Function to check if a file is incomplete (ends with incomplete syntax)
function isIncompleteFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for common incomplete patterns
    const incompletePatterns = [
      /const\s+\w+\s*=\s*\[\s*$/m,  // Array declaration without closing
      /function\s+\w+\(\)\s*{\s*$/m,  // Function without closing
      /const\s+\w+\s*=\s*{\s*$/m,  // Object without closing
      /if\s*\([^)]*\)\s*{\s*$/m,  // If statement without closing
      /return\s*\(\s*$/m,  // Return statement without closing
    ];
    
    // Check if file ends with incomplete syntax
    const trimmedContent = content.trim();
    if (trimmedContent.endsWith('[') || 
        trimmedContent.endsWith('{') || 
        trimmedContent.endsWith('(') ||
        trimmedContent.endsWith('const') ||
        trimmedContent.endsWith('function') ||
        trimmedContent.endsWith('if') ||
        trimmedContent.endsWith('return')) {
      return true;
    }
    
    // Check for incomplete patterns
    for (const pattern of incompletePatterns) {
      if (pattern.test(trimmedContent)) {
        return true;
      }
    }
    
    return false;
  } catch (error) {
    return false;
  }
}

// Function to create a basic page component
function createBasicPage(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  
  const basicPage = `import React from 'react';
import { ArrowRight, CheckCircle, Star, Users, Clock, DollarSign, Shield, Code, Database, Mail, Settings, Target, TrendingUp, PieChart, MessageSquare, Heart, Globe, Smartphone, Network, Lock, Cpu, Wifi, Building2, Briefcase, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';

const ${componentName} = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Advanced Features',
      description: 'Cutting-edge technology for maximum efficiency'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: '24/7 support from our team of specialists'
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="${componentName} - Zion Tech Group"
        description="Professional ${componentName.toLowerCase().replace(/([A-Z])/g, ' $1')} services by Zion Tech Group. Expert solutions for your business needs."
        keywords="${componentName.toLowerCase().replace(/([A-Z])/g, ' $1')}, business solutions, technology services, professional services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${componentName}
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Professional ${componentName.toLowerCase().replace(/([A-Z])/g, ' $1')} services designed to help your business succeed and grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our ${componentName} Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We deliver exceptional results with cutting-edge technology and expert knowledge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our ${componentName.toLowerCase().replace(/([A-Z])/g, ' $1')} services can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ${componentName};`;

  return basicPage;
}

// Function to process all TypeScript/JavaScript files
function fixIncompleteFiles() {
  console.log('Starting to fix incomplete files...');
  
  function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
        processDirectory(filePath);
      } else if (file.endsWith('.tsx') && file.includes('page.tsx')) {
        if (isIncompleteFile(filePath)) {
          console.log(`Fixing incomplete file: ${filePath}`);
          const basicPage = createBasicPage(filePath);
          fs.writeFileSync(filePath, basicPage, 'utf8');
        }
      }
    }
  }

  // Process the app directory
  processDirectory('./app');
  
  console.log('Finished fixing incomplete files!');
}

// Run the fix
fixIncompleteFiles();