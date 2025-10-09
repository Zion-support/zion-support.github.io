'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
      icon: '📚',
      description: 'Complete API documentation and reference',
      docs: [
        { title: 'Authentication', description: 'API authentication methods', link: '/docs/api/auth' },
        { title: 'Endpoints', description: 'All available API endpoints', link: '/docs/api/endpoints' },
        { title: 'Rate Limits', description: 'Understanding rate limits', link: '/docs/api/rate-limits' },
        { title: 'Error Codes', description: 'Common error codes and solutions', link: '/docs/api/errors' }
      ]
    },
    {
      title: 'Guides',
      icon: '📖',
      description: 'In-depth guides and tutorials',
      docs: [
        { title: 'Best Practices', description: 'Recommended development practices', link: '/docs/guides/best-practices' },
        { title: 'Troubleshooting', description: 'Common issues and solutions', link: '/docs/guides/troubleshooting' },
        { title: 'Examples', description: 'Code examples and tutorials', link: '/docs/guides/examples' },
        { title: 'Migration Guide', description: 'Upgrading between versions', link: '/docs/guides/migration' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      icon: '🔧',
      description: 'Client libraries and SDKs',
      docs: [
        { title: 'Python SDK', description: 'Python client library', link: '/docs/sdks/python' },
        { title: 'JavaScript SDK', description: 'JavaScript/Node.js client', link: '/docs/sdks/javascript' },
        { title: 'Go SDK', description: 'Go client library', link: '/docs/sdks/go' },
        { title: 'REST API', description: 'RESTful API reference', link: '/docs/api/rest' }
      ]
    }
  ];

  const filteredDocs = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you build amazing AI applications.
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </header>

          {/* Documentation Categories */}
          <div className="space-y-12">
            {filteredDocs.map((category, categoryIndex) => (
              <section key={categoryIndex} className="cyber-card hologram-card p-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.docs.map((doc, docIndex) => (
                    <Link
                      key={docIndex}
                      href={doc.link}
                      className="group p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                            {doc.title}
                          </h3>
                          <p className="text-gray-400 text-sm">{doc.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Quick Links */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Quick Links</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/api"
                className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-transform"
              >
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">API Reference</h3>
                <p className="text-gray-300">Complete API documentation</p>
              </Link>
              
              <Link
                href="/guides"
                className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-transform"
              >
                <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Guides</h3>
                <p className="text-gray-300">Step-by-step tutorials</p>
              </Link>
              
              <Link
                href="/tutorials"
                className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-transform"
              >
                <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Tutorials</h3>
                <p className="text-gray-300">Video tutorials and examples</p>
              </Link>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 text-center">
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Contact Support
                </Link>
                <Link
                  href="/support"
                  className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200"
                >
                  Support Center
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;