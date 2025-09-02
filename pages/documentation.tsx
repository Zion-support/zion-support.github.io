import React, { useState } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { Search, BookOpen, Code, Database, Shield, Globe, ChevronRight, Download, ExternalLink } from 'lucide-react';

const DocumentationPage: NextPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const documentationCategories = [
    {
      title: 'Getting Started',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Quick start guides and setup instructions',
      color: 'blue',
      articles: [
        { title: 'Welcome to Zion Tech Group', description: 'Introduction to our platform and services', type: 'guide' },
        { title: 'Account Setup', description: 'How to create and configure your account', type: 'tutorial' },
        { title: 'First Project', description: 'Creating your first project with our platform', type: 'tutorial' },
        { title: 'Best Practices', description: 'Recommended practices for optimal results', type: 'guide' }
      ]
    },
    {
      title: 'API Reference',
      icon: <Code className="w-6 h-6" />,
      description: 'Complete API documentation and examples',
      color: 'green',
      articles: [
        { title: 'Authentication', description: 'API authentication and security', type: 'reference' },
        { title: 'Endpoints', description: 'Complete list of available API endpoints', type: 'reference' },
        { title: 'SDKs', description: 'Software development kits for various languages', type: 'reference' },
        { title: 'Rate Limits', description: 'API rate limiting and best practices', type: 'reference' }
      ]
    },
    {
      title: 'Micro SaaS',
      icon: <Globe className="w-6 h-6" />,
      description: 'Building and deploying micro SaaS applications',
      color: 'purple',
      articles: [
        { title: 'Architecture Overview', description: 'Understanding micro SaaS architecture', type: 'guide' },
        { title: 'Development Guide', description: 'Step-by-step development process', type: 'tutorial' },
        { title: 'Deployment', description: 'Deploying your micro SaaS application', type: 'tutorial' },
        { title: 'Scaling', description: 'Scaling your application for growth', type: 'guide' }
      ]
    },
    {
      title: 'AI Services',
      icon: <Shield className="w-6 h-6" />,
      description: 'AI and machine learning service documentation',
      color: 'orange',
      articles: [
        { title: 'AI Models', description: 'Available AI models and their capabilities', type: 'reference' },
        { title: 'Training Data', description: 'Preparing and uploading training data', type: 'tutorial' },
        { title: 'Model Deployment', description: 'Deploying custom AI models', type: 'tutorial' },
        { title: 'Performance Optimization', description: 'Optimizing AI model performance', type: 'guide' }
      ]
    },
    {
      title: 'Cloud Services',
      icon: <Database className="w-6 h-6" />,
      description: 'Cloud infrastructure and migration guides',
      color: 'indigo',
      articles: [
        { title: 'Cloud Migration', description: 'Migrating applications to the cloud', type: 'guide' },
        { title: 'Infrastructure Setup', description: 'Setting up cloud infrastructure', type: 'tutorial' },
        { title: 'Monitoring', description: 'Monitoring and alerting setup', type: 'tutorial' },
        { title: 'Security', description: 'Cloud security best practices', type: 'guide' }
      ]
    },
    {
      title: 'Troubleshooting',
      icon: <BookOpen className="w-6 h-6" />,
      description: 'Common issues and their solutions',
      color: 'red',
      articles: [
        { title: 'Common Issues', description: 'Frequently encountered problems', type: 'troubleshooting' },
        { title: 'Error Codes', description: 'Understanding error messages and codes', type: 'reference' },
        { title: 'Performance Issues', description: 'Diagnosing and fixing performance problems', type: 'troubleshooting' },
        { title: 'Contact Support', description: 'When and how to contact our support team', type: 'guide' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100',
      green: 'text-green-600 bg-green-100',
      purple: 'text-purple-600 bg-purple-100',
      orange: 'text-orange-600 bg-orange-100',
      indigo: 'text-indigo-600 bg-indigo-100',
      red: 'text-red-600 bg-red-100'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getTypeColor = (type: string) => {
    const types = {
      guide: 'text-blue-600 bg-blue-100',
      tutorial: 'text-green-600 bg-green-100',
      reference: 'text-purple-600 bg-purple-100',
      troubleshooting: 'text-red-600 bg-red-100'
    };
    return types[type as keyof typeof types] || types.guide;
  };

  return (
    <MainLayout
      title="Documentation - Zion Tech Group"
      description="Comprehensive documentation for Zion Tech Group services. Find guides, API references, tutorials, and troubleshooting information."
      keywords="documentation, API reference, guides, tutorials, technical documentation, developer resources"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Documentation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Comprehensive guides, API references, and tutorials to help you get the most out of our technology solutions.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg border-0 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Popular documentation sections and resources.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4 flex justify-center">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Start</h3>
              <p className="text-gray-600 mb-4">Get up and running in minutes</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Start Here →
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-green-600 mb-4 flex justify-center">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">API Reference</h3>
              <p className="text-gray-600 mb-4">Complete API documentation</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                View API →
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-purple-600 mb-4 flex justify-center">
                <Download className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">SDKs</h3>
              <p className="text-gray-600 mb-4">Download our SDKs</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                Download →
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-orange-600 mb-4 flex justify-center">
                <ExternalLink className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Examples</h3>
              <p className="text-gray-600 mb-4">Code examples and samples</p>
              <button className="text-blue-600 hover:text-blue-700 font-semibold">
                View Examples →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Documentation Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive documentation organized by topic and service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documentationCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${getColorClasses(category.color)} mr-4`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <div key={articleIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{article.title}</h4>
                          <p className="text-gray-600 text-xs">{article.description}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${getTypeColor(article.type)}`}>
                            {article.type}
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-4 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    View All {category.title} Docs →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Playground */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">API Playground</h2>
            <p className="text-xl text-gray-600 mb-8">
              Test our APIs directly in your browser with our interactive playground.
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="bg-gray-900 rounded-lg p-6 text-left mb-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 text-sm ml-4">API Playground</span>
                </div>
                <pre className="text-green-400 text-sm">
{`curl -X POST https://api.ziontechgroup.com/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Your text to analyze",
    "model": "sentiment-analysis"
  }'`}
                </pre>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Try API Playground
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors">
              Contact Support
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors">
              Join Community
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DocumentationPage;