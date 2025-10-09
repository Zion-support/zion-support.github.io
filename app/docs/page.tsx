'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Book, Code, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      description: 'Learn the basics and get up and running quickly',
      articles: [
        'Quick Start Guide',
        'Installation & Setup',
        'Your First Project',
        'Basic Configuration'
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and examples',
      articles: [
        'Authentication',
        'Endpoints Overview',
        'Request/Response Format',
        'Error Handling',
        'Rate Limiting'
      ]
    },
    {
      title: 'AI Services',
      icon: Zap,
      description: 'AI-powered features and capabilities',
      articles: [
        'AI Project Management',
        'Customer Support Automation',
        'Business Intelligence',
        'Content Generation',
        'Data Analytics'
      ]
    }
  ];

  const popularArticles = [
    'Getting Started with AI Project Management',
    'Setting up Customer Support Automation',
    'API Authentication Guide',
    'Business Intelligence Dashboard Setup',
    'Content Generation Best Practices'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Documentation</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive guides and API documentation to help you get the most out of our AI services.
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {docCategories.map((category, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-400 transition-all">
                <div className="flex items-center space-x-3 mb-4">
                  <category.icon className="w-8 h-8 text-cyan-400" />
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex} className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {article}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Popular Articles</h3>
              <ul className="space-y-3">
                {popularArticles.map((article, index) => (
                  <li key={index} className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer">
                    <CheckCircle className="w-4 h-4 mr-3 text-green-400" />
                    {article}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">Need Help?</h3>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+13024640950"
                  className="block w-full bg-cyan-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-cyan-300 transition-colors text-center"
                >
                  Call Support - (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="block w-full border border-cyan-400 text-cyan-400 py-3 px-6 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-colors text-center"
                >
                  Email Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;