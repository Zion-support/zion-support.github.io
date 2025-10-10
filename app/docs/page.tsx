'use client';
import React, { useState } from 'react';
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
        { title: 'Quick Start Guide', description: 'Get up and running in minutes', link: '/docs/getting-started/quick-start' },
        { title: 'Installation', description: 'Install and configure the platform', link: '/docs/getting-started/installation' },
        { title: 'First Project', description: 'Create your first project', link: '/docs/getting-started/first-project' },
        { title: 'Configuration', description: 'Configure your environment', link: '/docs/getting-started/configuration' }
      ]
    },
    {
      title: 'API Reference',
      icon: 'code',
      docs: [
        { title: 'Authentication', description: 'API authentication methods', link: '/docs/api/authentication' },
        { title: 'Endpoints', description: 'Complete API endpoint reference', link: '/docs/api/endpoints' },
        { title: 'Rate Limits', description: 'API rate limiting and quotas', link: '/docs/api/rate-limits' },
        { title: 'Error Codes', description: 'API error codes and handling', link: '/docs/api/error-codes' }
      ]
    },
    {
      title: 'Guides',
      icon: 'book',
      docs: [
        { title: 'Best Practices', description: 'Recommended practices and patterns', link: '/docs/guides/best-practices' },
        { title: 'Tutorials', description: 'Step-by-step tutorials', link: '/docs/guides/tutorials' },
        { title: 'Examples', description: 'Code examples and samples', link: '/docs/guides/examples' },
        { title: 'Migration Guide', description: 'Migrating from other platforms', link: '/docs/guides/migration' }
      ]
    },
    {
      title: 'SDKs',
      icon: 'download',
      docs: [
        { title: 'JavaScript SDK', description: 'JavaScript and Node.js SDK', link: '/docs/sdks/javascript' },
        { title: 'Python SDK', description: 'Python SDK documentation', link: '/docs/sdks/python' },
        { title: 'Java SDK', description: 'Java SDK documentation', link: '/docs/sdks/java' },
        { title: 'PHP SDK', description: 'PHP SDK documentation', link: '/docs/sdks/php' }
      ]
    },
    {
      title: 'Support',
      icon: 'help',
      docs: [
        { title: 'FAQ', description: 'Frequently asked questions', link: '/docs/support/faq' },
        { title: 'Troubleshooting', description: 'Common issues and solutions', link: '/docs/support/troubleshooting' },
        { title: 'Community', description: 'Community forums and discussions', link: '/docs/support/community' },
        { title: 'Contact Support', description: 'Get help from our team', link: '/docs/support/contact' }
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
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive guides, API references, and tutorials to help you build amazing applications with our platform.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDocs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                      <BookOpen className="h-6 w-6 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {category.docs.map((doc, docIndex) => (
                      <a
                        key={docIndex}
                        href={doc.link}
                        className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                              {doc.title}
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">{doc.description}</p>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Quick Links</h2>
              <p className="text-xl text-gray-300">Popular documentation sections</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="/docs/getting-started/quick-start" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <Code className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Quick Start</h3>
                </div>
                <p className="text-gray-300">Get started in minutes</p>
              </a>
              
              <a href="/docs/api/endpoints" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <FileText className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">API Reference</h3>
                </div>
                <p className="text-gray-300">Complete API documentation</p>
              </a>
              
              <a href="/docs/guides/tutorials" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">Tutorials</h3>
                </div>
                <p className="text-gray-300">Step-by-step guides</p>
              </a>
              
              <a href="/docs/support/faq" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <Search className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">FAQ</h3>
                </div>
                <p className="text-gray-300">Frequently asked questions</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need More Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Join Community
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DocsPage;