'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      description: 'Quick start guides and basic setup instructions',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', link: '/docs/quick-start' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' },
        { title: 'First Project', description: 'Create your first AI project', link: '/docs/first-project' },
        { title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' }
      ]
    },
    {
      title: 'API Reference',
      icon: '🔌',
      description: 'Complete API documentation and endpoints',
      docs: [
        { title: 'Authentication', description: 'API authentication and security', link: '/docs/api/auth' },
        { title: 'AI Services API', description: 'AI service endpoints and parameters', link: '/docs/api/ai-services' },
        { title: 'Data Processing API', description: 'Data processing and analytics endpoints', link: '/docs/api/data-processing' },
        { title: 'Webhooks', description: 'Event notifications and webhooks', link: '/docs/api/webhooks' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      icon: '📚',
      description: 'Client libraries and SDKs for different languages',
      docs: [
        { title: 'Python SDK', description: 'Python client library and examples', link: '/docs/sdk/python' },
        { title: 'JavaScript SDK', description: 'JavaScript/Node.js client library', link: '/docs/sdk/javascript' },
        { title: 'Java SDK', description: 'Java client library and integration', link: '/docs/sdk/java' },
        { title: 'REST API', description: 'RESTful API documentation', link: '/docs/api/rest' }
      ]
    },
    {
      title: 'Tutorials',
      icon: '🎓',
      description: 'Step-by-step tutorials and examples',
      docs: [
        { title: 'AI Model Training', description: 'Train custom AI models', link: '/docs/tutorials/model-training' },
        { title: 'Data Pipeline Setup', description: 'Set up data processing pipelines', link: '/docs/tutorials/data-pipeline' },
        { title: 'Deployment Guide', description: 'Deploy models to production', link: '/docs/tutorials/deployment' },
        { title: 'Best Practices', description: 'AI development best practices', link: '/docs/tutorials/best-practices' }
      ]
    },
    {
      title: 'Integration Guides',
      icon: '🔗',
      description: 'Integration with popular platforms and services',
      docs: [
        { title: 'AWS Integration', description: 'Integrate with AWS services', link: '/docs/integrations/aws' },
        { title: 'Google Cloud', description: 'Google Cloud Platform integration', link: '/docs/integrations/gcp' },
        { title: 'Azure Integration', description: 'Microsoft Azure integration', link: '/docs/integrations/azure' },
        { title: 'Docker Setup', description: 'Containerized deployment with Docker', link: '/docs/integrations/docker' }
      ]
    },
    {
      title: 'Troubleshooting',
      icon: '🔧',
      description: 'Common issues and solutions',
      docs: [
        { title: 'Common Issues', description: 'Frequently encountered problems', link: '/docs/troubleshooting/common-issues' },
        { title: 'Error Codes', description: 'API error codes and meanings', link: '/docs/troubleshooting/error-codes' },
        { title: 'Performance Tips', description: 'Optimize performance and speed', link: '/docs/troubleshooting/performance' },
        { title: 'Debugging Guide', description: 'Debug and troubleshoot issues', link: '/docs/troubleshooting/debugging' }
      ]
    }
  ];

  const popularDocs = [
    { title: 'Quick Start Guide', views: '12.5k', link: '/docs/quick-start' },
    { title: 'API Authentication', views: '8.9k', link: '/docs/api/auth' },
    { title: 'Python SDK Setup', views: '7.2k', link: '/docs/sdk/python' },
    { title: 'Model Training Tutorial', views: '6.8k', link: '/docs/tutorials/model-training' },
    { title: 'Deployment Guide', views: '5.4k', link: '/docs/tutorials/deployment' }
  ];

  const recentUpdates = [
    { title: 'New AI Model API endpoints', date: '2024-10-08', type: 'API Update' },
    { title: 'Python SDK v2.1.0 released', date: '2024-10-05', type: 'SDK Update' },
    { title: 'Enhanced documentation for webhooks', date: '2024-10-03', type: 'Documentation' },
    { title: 'New integration guide for Azure', date: '2024-10-01', type: 'Integration' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              Everything you need to build with our AI platform
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
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Start
            </h2>
            <p className="text-xl text-gray-600">
              Get started with our most popular resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Quick Start Guide</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Get up and running with our AI platform in just 5 minutes.
              </p>
              <Link 
                to="/docs/quick-start"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
              >
                Start Here
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">API Reference</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complete API documentation with examples and code snippets.
              </p>
              <Link 
                to="/docs/api"
                className="inline-flex items-center text-green-600 hover:text-green-800 font-semibold"
              >
                View API Docs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">SDKs & Libraries</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Client libraries for Python, JavaScript, Java, and more.
              </p>
              <Link 
                to="/docs/sdk"
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
              >
                Browse SDKs
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Documentation Categories
            </h2>
            <p className="text-xl text-gray-600">
              Browse our comprehensive documentation by category
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <div className="space-y-3">
                  {category.docs.map((doc, docIndex) => (
                    <Link 
                      key={docIndex}
                      to={doc.link}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600">{doc.title}</h4>
                          <p className="text-sm text-gray-500">{doc.description}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular & Recent Updates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Popular Documentation */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Most Popular</h3>
              <div className="space-y-4">
                {popularDocs.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div>
                      <Link 
                        to={doc.link}
                        className="font-medium text-gray-900 hover:text-blue-600"
                      >
                        {doc.title}
                      </Link>
                      <p className="text-sm text-gray-500">{doc.views} views</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Updates */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Updates</h3>
              <div className="space-y-4">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{update.title}</h4>
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {update.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{update.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download Documentation
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get offline access to our complete documentation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Download ePub
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Updated daily • Available in multiple formats
          </p>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;
