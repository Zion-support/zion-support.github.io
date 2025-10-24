const fs = require('fs');
const path = require('path');

function createBasicPage(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const dirName = path.basename(path.dirname(filePath));
  
  // Extract service name from directory name
  const serviceName = dirName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  
  const content = `'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ${serviceName.replace(/\s+/g, '')}Page: React.FC = () => {
  const features = [
    {
      icon: CheckCircle,
      title: 'Advanced ${serviceName}',
      description: 'Cutting-edge ${serviceName.toLowerCase()} solutions for modern businesses.',
      benefits: ['High performance', 'Scalable architecture', 'Secure implementation', '24/7 support']
    },
    {
      icon: Star,
      title: 'Premium Quality',
      description: 'Top-tier ${serviceName.toLowerCase()} services with guaranteed results.',
      benefits: ['Expert team', 'Proven track record', 'Quality assurance', 'Customer satisfaction']
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Professional ${serviceName.toLowerCase()} specialists at your service.',
      benefits: ['Certified experts', 'Industry experience', 'Continuous learning', 'Best practices']
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times for all ${serviceName.toLowerCase()} projects.',
      benefits: ['Rapid development', 'Efficient processes', 'Timely delivery', 'Agile methodology']
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      <Helmet>
        <title>${serviceName} - Professional Services</title>
        <meta name="description" content="Professional ${serviceName.toLowerCase()} services for modern businesses. Expert solutions with guaranteed results." />
        <meta name="keywords" content="${serviceName.toLowerCase()}, professional services, business solutions, technology" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ${serviceName}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional ${serviceName.toLowerCase()} services for modern businesses. Expert solutions with guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the powerful features that make our ${serviceName.toLowerCase()} solution the best choice for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-emerald-600/20 rounded-lg mb-4">
                    <feature.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our ${serviceName}?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of our advanced ${serviceName.toLowerCase()} solution.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default ${serviceName.replace(/\s+/g, '')}Page
`;

  return content;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n').length;
    
    // If file is too short or broken, replace it
    if (lines < 20 || content.includes('</div>') && !content.includes('<div')) {
      const newContent = createBasicPage(filePath);
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all broken page files
const brokenFiles = [
  'src/database-services/page.tsx',
  'src/ai-ecommerce-solutions/page.tsx',
  'src/cybersecurity/page.tsx',
  'src/iot-edge-computing/page.tsx',
  'src/blockchain-web3/page.tsx',
  'src/blockchain/page.tsx',
  'src/ai-email-marketing/page.tsx',
  'src/iot-edge/page.tsx',
  'src/case-studies/page.tsx',
  'src/page-minimal.tsx',
  'src/quantum-ai/page.tsx',
  'src/robotics/page.tsx',
  'src/ai-automation/page.tsx',
  'src/it-support/page.tsx',
  'src/ai-customer-support-bot/page.tsx',
  'src/ai-seo-optimizer/page.tsx',
  'src/network-infrastructure/page.tsx',
  'src/it-infrastructure/page.tsx',
  'src/computer-vision/page.tsx',
  'src/nlp/page.tsx',
  'src/ai-mobile-app-development/page.tsx',
  'src/blog/ai-enterprise-transformation-2025/page.tsx'
];

brokenFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    processFile(fullPath);
  }
});

console.log('Broken pages fixed');
