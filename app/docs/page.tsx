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
      icon: BookOpen,
      docs: [
        {
          title: 'Quick Start Guide',
          description: 'Get up and running with Zion Tech Group solutions in minutes',
          type: 'guide',
          duration: '5 min read'
        },
        {
          title: 'Installation',
          description: 'Step-by-step installation instructions for all platforms',
          type: 'guide',
          duration: '10 min read'
        },
        {
          title: 'Configuration',
          description: 'Configure your environment and settings',
          type: 'guide',
          duration: '15 min read'
        }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      docs: [
        {
          title: 'Authentication',
          description: 'Learn how to authenticate with our APIs',
          type: 'api',
          duration: '8 min read'
        },
        {
          title: 'Endpoints',
          description: 'Complete list of available API endpoints',
          type: 'api',
          duration: '20 min read'
        },
        {
          title: 'SDKs',
          description: 'Client libraries for popular programming languages',
          type: 'api',
          duration: '12 min read'
        }
      ]
    },
    {
      title: 'Tutorials',
      icon: FileText,
      docs: [
        {
          title: 'Building Your First AI Model',
          description: 'Create and train your first machine learning model',
          type: 'tutorial',
          duration: '30 min read'
        },
        {
          title: 'Cloud Migration Guide',
          description: 'Migrate your applications to the cloud',
          type: 'tutorial',
          duration: '45 min read'
        },
        {
          title: 'Security Best Practices',
          description: 'Implement security measures in your applications',
          type: 'tutorial',
          duration: '25 min read'
        }
      ]
    },
    {
      title: 'Guides',
      icon: BookOpen,
      docs: [
        {
          title: 'Performance Optimization',
          description: 'Optimize your applications for better performance',
          type: 'guide',
          duration: '20 min read'
        },
        {
          title: 'Troubleshooting',
          description: 'Common issues and their solutions',
          type: 'guide',
          duration: '15 min read'
        },
        {
          title: 'Deployment',
          description: 'Deploy your applications to production',
          type: 'guide',
          duration: '18 min read'
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
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Documentation <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Center</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive guides, API references, and tutorials to help you get the most out of 
              Zion Tech Group's AI and IT solutions.
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
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredDocs.map((category, index) => (
                <div key={category.title} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <category.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.docs.map((doc, idx) => (
                      <div key={idx} className="border-l-2 border-cyan-400 pl-4 py-2">
                        <h4 className="text-white font-semibold mb-1">{doc.title}</h4>
                        <p className="text-gray-300 text-sm mb-2">{doc.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-cyan-400 text-xs font-semibold">
                            {doc.type.toUpperCase()}
                          </span>
                          <span className="text-gray-400 text-xs">{doc.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Quick <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Links</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Download className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Download SDKs</h3>
                </div>
                <p className="text-gray-300 mb-4">Get our client libraries for your preferred programming language.</p>
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span>Download Now</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">API Explorer</h3>
                </div>
                <p className="text-gray-300 mb-4">Test our APIs directly in your browser with our interactive explorer.</p>
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span>Try API Explorer</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>

              <div className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">Code Examples</h3>
                </div>
                <p className="text-gray-300 mb-4">Browse through real-world code examples and sample implementations.</p>
                <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span>View Examples</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Help</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Contact Support
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
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