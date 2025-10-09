'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, Star, CheckCircle, Code, Zap, Shield, Clock, Users } from 'lucide-react';

const DeveloperToolsPage: React.FC = () => {
  const tools = [
    {
      title: 'AI Code Assistant Pro',
      description: 'Advanced AI-powered coding assistant with real-time suggestions, bug detection, and automated refactoring.',
      icon: '🤖',
      price: '$29/month',
      features: [
        'Real-time code suggestions',
        'Automated bug detection',
        'Code refactoring assistance',
        'Multi-language support',
        'Git integration',
        'Performance optimization',
        'Documentation generation',
        'Security scanning'
      ],
      benefits: 'Save 40% development time',
      popular: true
    },
    {
      title: 'API Testing Suite',
      description: 'Comprehensive API testing and monitoring tools for developers and QA teams.',
      icon: '🔧',
      price: '$49/month',
      features: [
        'Automated API testing',
        'Performance monitoring',
        'Load testing',
        'API documentation',
        'Mock server creation',
        'Integration testing',
        'Real-time alerts',
        'Team collaboration'
      ],
      benefits: 'Reduce testing time by 60%',
      popular: false
    },
    {
      title: 'Database Management Pro',
      description: 'Advanced database management and optimization tools for modern applications.',
      icon: '🗄️',
      price: '$39/month',
      features: [
        'Database design tools',
        'Query optimization',
        'Performance monitoring',
        'Backup automation',
        'Migration tools',
        'Security auditing',
        'Schema management',
        'Data visualization'
      ],
      benefits: 'Improve database performance by 50%',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Developer Tools</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful development tools and utilities to accelerate your coding workflow and improve productivity.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">{tool.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{tool.title}</h3>
              <p className="text-gray-300 mb-4 text-center text-sm">{tool.description}</p>
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-purple-400">{tool.price}</div>
                {tool.popular && (
                  <div className="inline-block bg-yellow-500 text-black px-2 py-1 rounded text-xs font-semibold mt-2">
                    Popular
                  </div>
                )}
              </div>
              <ul className="space-y-2 mb-6">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-center mb-4">
                <div className="text-sm text-green-400 font-semibold">{tool.benefits}</div>
              </div>
              <div className="text-center">
                <a 
                  href="/contact" 
                  className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Boost Your Development Productivity?</h2>
          <p className="text-gray-200 mb-8 text-lg">
            Join thousands of developers who are already using our tools to build better software faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
            <a 
              href="tel:+13024640950" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call: (302) 464-0950
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeveloperToolsPage;