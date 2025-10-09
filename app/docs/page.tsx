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
        { title: 'Installation Guide', url: '/docs/installation', type: 'Guide' },
        { title: 'Quick Start', url: '/docs/quick-start', type: 'Tutorial' },
        { title: 'Configuration', url: '/docs/configuration', type: 'Guide' }
      ]
    },
    {
      title: 'API Reference',
      icon: '📚',
      description: 'Complete API documentation and endpoints',
      docs: [
        { title: 'Authentication', url: '/docs/api/auth', type: 'API' },
        { title: 'AI Services API', url: '/docs/api/ai-services', type: 'API' },
        { title: 'IT Services API', url: '/docs/api/it-services', type: 'API' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      icon: '💻',
      description: 'Client libraries and SDKs for various languages',
      docs: [
        { title: 'JavaScript SDK', url: '/docs/sdk/javascript', type: 'SDK' },
        { title: 'Python SDK', url: '/docs/sdk/python', type: 'SDK' },
        { title: 'Node.js SDK', url: '/docs/sdk/nodejs', type: 'SDK' }
      ]
    },
    {
      title: 'Tutorials',
      icon: '🎓',
      description: 'Step-by-step tutorials and examples',
      docs: [
        { title: 'Building an AI Chatbot', url: '/docs/tutorials/chatbot', type: 'Tutorial' },
        { title: 'Data Analytics Setup', url: '/docs/tutorials/analytics', type: 'Tutorial' },
        { title: 'Cloud Migration', url: '/docs/tutorials/cloud-migration', type: 'Tutorial' }
      ]
    }
  ];

  const filteredDocs = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
              Documentation
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Complete Developer Resources
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Comprehensive guides, API references, and resources to help you integrate with our AI and IT services.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Documentation Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredDocs.map((category, index) => (
                <div key={index} className="cyber-card hologram-card p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 mb-6 text-sm">{category.description}</p>
                  
                  <div className="space-y-3">
                    {category.docs.map((doc, docIndex) => (
                      <Link
                        key={docIndex}
                        href={doc.url}
                        className="block p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {doc.title}
                            </div>
                            <div className="text-xs text-gray-400">{doc.type}</div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
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
        <section className="py-16 px-4 bg-gradient-to-r from-gray-900/50 to-slate-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Quick Links
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">API Reference</h3>
                <p className="text-gray-300 mb-6">Complete API documentation with examples</p>
                <Link
                  href="/api-docs"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  View API Docs
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Code Examples</h3>
                <p className="text-gray-300 mb-6">Ready-to-use code snippets and examples</p>
                <Link
                  href="/examples"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Browse Examples
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <Download className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">SDKs & Tools</h3>
                <p className="text-gray-300 mb-6">Download our SDKs and development tools</p>
                <Link
                  href="/downloads"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Get Downloads
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 neon-text">
              Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Can't find what you're looking for? Our team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Email Support</h3>
                <p className="text-gray-300 mb-4">Get detailed help via email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Phone Support</h3>
                <p className="text-gray-300 mb-4">Speak with our experts</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  +1 302 464 0950
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-2">Live Chat</h3>
                <p className="text-gray-300 mb-4">Chat with our support team</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;