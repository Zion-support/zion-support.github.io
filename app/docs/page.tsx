'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: '🚀',
      description: 'Quick start guides and basic setup instructions',
      docs: [
        { title: 'Installation Guide', url: '/docs/installation', type: 'Guide' },
        { title: 'Quick Start', url: '/docs/quick-start', type: 'Tutorial' },
        { title: 'Configuration', url: '/docs/configuration', type: 'Reference' }
      ]
    },
    {
      title: 'API Reference',
      icon: '📚',
      description: 'Complete API documentation and reference materials',
      docs: [
        { title: 'Authentication', url: '/docs/api/auth', type: 'Reference' },
        { title: 'Endpoints', url: '/docs/api/endpoints', type: 'Reference' },
        { title: 'Error Codes', url: '/docs/api/errors', type: 'Reference' }
      ]
    },
    {
      title: 'Tutorials',
      icon: '🎓',
      description: 'Step-by-step tutorials and learning resources',
      docs: [
        { title: 'Building Your First App', url: '/docs/tutorials/first-app', type: 'Tutorial' },
        { title: 'Advanced Features', url: '/docs/tutorials/advanced', type: 'Tutorial' },
        { title: 'Best Practices', url: '/docs/tutorials/best-practices', type: 'Guide' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      icon: '🔧',
      description: 'Client libraries and SDK documentation',
      docs: [
        { title: 'JavaScript SDK', url: '/docs/sdks/javascript', type: 'SDK' },
        { title: 'Python SDK', url: '/docs/sdks/python', type: 'SDK' },
        { title: 'React Components', url: '/docs/sdks/react', type: 'Library' }
      ]
    }
  ];

  const popularDocs = [
    { title: 'Authentication Guide', url: '/docs/auth', views: '12.5k' },
    { title: 'API Rate Limits', url: '/docs/rate-limits', views: '8.2k' },
    { title: 'Webhook Setup', url: '/docs/webhooks', views: '6.7k' },
    { title: 'Error Handling', url: '/docs/errors', views: '5.9k' }
  ];

  const filteredCategories = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive guides, tutorials, and API references to help you build amazing applications.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Popular Docs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Popular Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDocs.map((doc, index) => (
              <Link
                key={index}
                href={doc.url}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-colors group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {doc.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-sm text-gray-400">{doc.views} views</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCategories.map((category, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.docs.map((doc, docIndex) => (
                    <Link
                      key={docIndex}
                      href={doc.url}
                      className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors group"
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-cyan-600 rounded flex items-center justify-center mr-3">
                          {doc.type === 'Guide' && <BookOpen className="w-4 h-4 text-white" />}
                          {doc.type === 'Tutorial' && <Code className="w-4 h-4 text-white" />}
                          {doc.type === 'Reference' && <FileText className="w-4 h-4 text-white" />}
                          {doc.type === 'SDK' && <Download className="w-4 h-4 text-white" />}
                          {doc.type === 'Library' && <Code className="w-4 h-4 text-white" />}
                        </div>
                        <div>
                          <h4 className="text-white group-hover:text-cyan-400 transition-colors">
                            {doc.title}
                          </h4>
                          <p className="text-sm text-gray-400">{doc.type}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/api-docs"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-6 text-white hover:from-cyan-700 hover:to-blue-700 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">API Reference</h3>
                  <p className="text-cyan-100">Complete API documentation</p>
                </div>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link
              href="/contact"
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Get Support</h3>
                  <p className="text-gray-400">Need help? Contact our team</p>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </Link>
            
            <Link
              href="/blog"
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-cyan-500 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Blog & Updates</h3>
                  <p className="text-gray-400">Latest news and updates</p>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-800/50 rounded-lg p-12 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our documentation is constantly updated. If you can't find what you need, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Contact Support
            </Link>
            <Link
              href="/api-docs"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            >
              Browse API Docs
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;