'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Search, Code, Cloud, Shield, ArrowRight, ExternalLink, FileText, Users, Settings } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'ai-services', name: 'AI Services', icon: Code },
    { id: 'it-services', name: 'IT Services', icon: Cloud },
    { id: 'api', name: 'API Reference', icon: Code },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  const documentation = [
    {
      id: 1,
      title: 'Getting Started',
      description: 'Learn how to get started with our platform',
      category: 'ai-services',
      url: '/docs/getting-started'
    },
    {
      id: 2,
      title: 'API Authentication',
      description: 'How to authenticate with our APIs',
      category: 'api',
      url: '/docs/api-auth'
    },
    {
      id: 3,
      title: 'Security Best Practices',
      description: 'Security guidelines and best practices',
      category: 'security',
      url: '/docs/security'
    }
  ];

  const filteredDocs = documentation.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Documentation | Zion Tech Group</title>
        <meta name="description" content="Comprehensive documentation for Zion Tech Group's AI and IT solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center">
            <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">
              Comprehensive documentation for our AI and IT solutions. 
              Find guides, tutorials, and API references.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2 xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Find documentation organized by service category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <category.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 text-sm">Browse {category.name.toLowerCase()} documentation</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation List */}
      <section className="py-16 px-4">
        <div className="max-w-7 xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Popular Documentation
            </h2>
            <p className="text-xl text-gray-300 max-w-3 xl mx-auto">
              Most frequently accessed documentation and guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocs.map((doc) => (
              <div key={doc.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <FileText className="w-8 h-8 text-purple-400" />
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{doc.title}</h3>
                <p className="text-gray-300 mb-4">{doc.description}</p>
                <a
                  href={doc.url}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4 xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2 xl p-8 md:p-12">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Need Help?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                Contact Support
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;