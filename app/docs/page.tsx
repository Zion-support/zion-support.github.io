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
      icon: '📚',
      description: 'Complete API documentation and reference',
      docs: [
        { title: 'REST API', description: 'RESTful API endpoints and methods', link: '/docs/api' },
        { title: 'SDK Documentation', description: 'Software development kits', link: '/docs/sdk' },
        { title: 'Authentication', description: 'API authentication and security', link: '/docs/auth' },
        { title: 'Rate Limits', description: 'API rate limiting and quotas', link: '/docs/rate-limits' }
      ]
    },
    {
      title: 'Guides',
      icon: '📖',
      description: 'Comprehensive guides and tutorials',
      docs: [
        { title: 'AI Model Training', description: 'Train custom AI models', link: '/docs/model-training' },
        { title: 'Data Processing', description: 'Process and prepare your data', link: '/docs/data-processing' },
        { title: 'Deployment', description: 'Deploy models to production', link: '/docs/deployment' },
        { title: 'Best Practices', description: 'Recommended practices and patterns', link: '/docs/best-practices' }
      ]
    }
  ];

  const filteredCategories = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive documentation to help you get the most out of our AI services and tools.
            </p>
          </header>

          <div className="mb-12">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="space-y-12">
            {filteredCategories.map((category, categoryIndex) => (
              <section key={categoryIndex} className="cyber-card p-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {category.docs.map((doc, docIndex) => (
                    <Link
                      key={docIndex}
                      href={doc.link}
                      className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                            {doc.title}
                          </h3>
                          <p className="text-gray-300 text-sm">{doc.description}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors flex-shrink-0 ml-2" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No results found</h3>
              <p className="text-gray-300">Try adjusting your search terms or browse our categories above.</p>
            </div>
          )}

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-gray-200 mb-8 text-lg">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </Link>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;