'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: 'rocket',
      docs: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with our platform in minutes',
          url: '/docs/quick-start',
          type: 'guide'
        },
        {
          title: 'Installation',
          description: 'Step-by-step installation instructions',
          url: '/docs/installation',
          type: 'guide'
        },
        {
          title: 'Configuration',
          description: 'Configure your environment and settings',
          url: '/docs/configuration',
          type: 'guide'
        }
      ]
    },
    {
      title: 'API Reference',
      icon: 'code',
      docs: [
        {
          title: 'Authentication',
          description: 'Learn how to authenticate with our API',
          url: '/docs/api/authentication',
          type: 'api'
        },
        {
          title: 'Endpoints',
          description: 'Complete list of available API endpoints',
          url: '/docs/api/endpoints',
          type: 'api'
        },
        {
          title: 'Rate Limits',
          description: 'Understanding API rate limits and best practices',
          url: '/docs/api/rate-limits',
          type: 'api'
        }
      ]
    },
    {
      title: 'Guides',
      icon: 'book',
      docs: [
        {
          title: 'Best Practices',
          description: 'Recommended practices for optimal performance',
          url: '/docs/guides/best-practices',
          type: 'guide'
        },
        {
          title: 'Troubleshooting',
          description: 'Common issues and their solutions',
          url: '/docs/guides/troubleshooting',
          type: 'guide'
        },
        {
          title: 'Migration Guide',
          description: 'Migrating from previous versions',
          url: '/docs/guides/migration',
          type: 'guide'
        }
      ]
    }
  ];

  const filteredDocs = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive guides, API references, and tutorials to help you get the most out of our platform.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.docs.map((doc, docIndex) => (
                    <Link
                      key={docIndex}
                      to={doc.url}
                      className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {doc.title}
                          </h3>
                          <p className="text-gray-300 text-sm mb-3">{doc.description}</p>
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-1 rounded text-xs ${
                              doc.type === 'api' 
                                ? 'bg-blue-500/20 text-blue-300' 
                                : 'bg-green-500/20 text-green-300'
                            }`}>
                              {doc.type.toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a
                href="/docs/quick-start"
                className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <FileText className="w-8 h-8 text-purple-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                    Quick Start Guide
                  </h3>
                  <p className="text-gray-300 text-sm">Get started in 5 minutes</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors ml-auto" />
              </a>
              
              <a
                href="/docs/api/endpoints"
                className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <Code className="w-8 h-8 text-blue-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    API Reference
                  </h3>
                  <p className="text-gray-300 text-sm">Complete API documentation</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors ml-auto" />
              </a>
              
              <a
                href="/docs/guides/best-practices"
                className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <BookOpen className="w-8 h-8 text-green-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors">
                    Best Practices
                  </h3>
                  <p className="text-gray-300 text-sm">Optimize your implementation</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-400 transition-colors ml-auto" />
              </a>
              
              <a
                href="/docs/guides/troubleshooting"
                className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              >
                <Search className="w-8 h-8 text-yellow-400 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    Troubleshooting
                  </h3>
                  <p className="text-gray-300 text-sm">Common issues and solutions</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors ml-auto" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocsPage;