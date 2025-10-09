'use client';

import React from 'react';
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
      popular: true,
      rating: 4.9,
      users: '10,000+'
    },
    {
      title: 'API Testing Suite',
      description: 'Comprehensive API testing and monitoring platform with automated test generation and performance analytics.',
      icon: '🔧',
      price: '$49/month',
      features: [
        'Automated API testing',
        'Performance monitoring',
        'Load testing capabilities',
        'API documentation generation',
        'Mock server creation',
        'Real-time monitoring',
        'Alert notifications',
        'Team collaboration'
      ],
      benefits: 'Reduce API bugs by 80%',
      popular: false,
      rating: 4.8,
      users: '5,000+'
    },
    {
      title: 'Database Optimization AI',
      description: 'AI-powered database performance optimization with query analysis and automated tuning recommendations.',
      icon: '🗄️',
      price: '$79/month',
      features: [
        'Query performance analysis',
        'Automated optimization',
        'Index recommendations',
        'Query rewriting suggestions',
        'Performance monitoring',
        'Capacity planning',
        'Security auditing',
        'Multi-database support'
      ],
      benefits: 'Improve query speed by 300%',
      popular: false,
      rating: 4.7,
      users: '3,000+'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Developer Tools</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful AI-driven development tools designed to accelerate your coding workflow and improve code quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className={`bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all ${tool.popular ? 'ring-2 ring-cyan-400' : ''}`}>
              {tool.popular && (
                <div className="bg-cyan-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                  Most Popular
                </div>
              )}
              
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{tool.title}</h3>
              <p className="text-gray-300 mb-4">{tool.description}</p>
              
              <div className="text-3xl font-bold text-cyan-400 mb-4">{tool.price}</div>
              
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  {tool.rating}
                </div>
                <div>{tool.users} users</div>
              </div>
              
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded text-sm mb-4 inline-block">
                {tool.benefits}
              </div>
              
              <ul className="space-y-2 mb-6">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href="tel:+13024640950"
                className="w-full bg-cyan-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-cyan-300 transition-colors text-center block"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Boost Your Development?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are already using our AI-powered tools to write better code faster.
          </p>
          <a
            href="tel:+13024640950"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
          >
            Contact Us - (302) 464-0950
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeveloperToolsPage;