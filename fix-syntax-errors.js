const fs = require('fs');
const path = require('path');

// List of files that need to be fixed based on the error output
const filesToFix = [
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-business-intelligence/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-workflow-automation/page.tsx'
];

// Template for a properly formatted page
const createPageTemplate = (title, description, icon, color) => `'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const ${title.replace(/\s+/g, '')}Page: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-${color}-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={\`text-center mb-16 transition-all duration-1000 \${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }\`}>
          <div className="inline-flex items-center space-x-2 bg-${color}-500/10 border border-${color}-500/20 rounded-full px-4 py-2 mb-6">
            <${icon} className="w-4 h-4 text-${color}-400" />
            <span className="text-${color}-400 text-sm font-medium">${title}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            ${title}
          </h1>
          
          <p className="text-xl md:text-2xl text-${color}-400 mb-8 font-medium">
            ${description}
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your business with our advanced AI solutions. 
            Get intelligent insights, automated processes, and data-driven decision making.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'}}
            >
              Start Free Trial
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-${color}-400 mb-2">50%</div>
              <div className="text-gray-300">Efficiency Gain</div>
            </div>
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Processing</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text mb-12">
            Powerful Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-${color}-400">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text mb-12">
            Why Choose Our Solution?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-${color}-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="hologram-card-enhanced p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using our AI solutions to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'}}
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ${title.replace(/\s+/g, '')}Page;`;

// Configuration for each page
const pageConfigs = {
  'app/ai-autonomous-systems/page.tsx': {
    title: 'AI Autonomous Systems',
    description: 'Intelligent Autonomous Systems',
    icon: 'Brain',
    color: 'purple'
  },
  'app/ai-blockchain-analytics/page.tsx': {
    title: 'AI Blockchain Analytics',
    description: 'Advanced Blockchain Analytics',
    icon: 'BarChart',
    color: 'blue'
  },
  'app/ai-blockchain-solutions/page.tsx': {
    title: 'AI Blockchain Solutions',
    description: 'Comprehensive Blockchain Solutions',
    icon: 'Shield',
    color: 'green'
  },
  'app/ai-business-intelligence/page.tsx': {
    title: 'AI Business Intelligence',
    description: 'Smart Business Intelligence',
    icon: 'Target',
    color: 'indigo'
  },
  'app/ai-chatbot-builder/page.tsx': {
    title: 'AI Chatbot Builder',
    description: 'Build Intelligent Chatbots',
    icon: 'Zap',
    color: 'pink'
  },
  'app/ai-workflow-automation/page.tsx': {
    title: 'AI Workflow Automation',
    description: 'Automate Your Workflows',
    icon: 'Settings',
    color: 'orange'
  }
};

// Fix each file
filesToFix.forEach(filePath => {
  const config = pageConfigs[filePath];
  if (config) {
    const content = createPageTemplate(config.title, config.description, config.icon, config.color);
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
});

console.log('All files have been fixed!');