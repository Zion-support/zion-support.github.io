'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
      title: 'Tutorials',
      icon: '📚',
      description: 'Step-by-step tutorials and guides',
      docs: [
        { title: 'Model Training', description: 'Train custom AI models', link: '/docs/tutorials/model-training' },
        { title: 'Deployment', description: 'Deploy models to production', link: '/docs/tutorials/deployment' },
        { title: 'Integration', description: 'Integrate with your applications', link: '/docs/tutorials/integration' },
        { title: 'Best Practices', description: 'Recommended practices and patterns', link: '/docs/tutorials/best-practices' }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Documentation</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive guides, tutorials, and API documentation to help you get the most out of our AI and IT services.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documentation Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {docCategories.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.docs.map((doc, docIndex) => (
                    <Link
                      key={docIndex}
                      href={doc.link}
                      className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {doc.title}
                          </h4>
                          <p className="text-sm text-gray-400">{doc.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Popular Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDocs.map((doc, index) => (
              <Link
                key={index}
                href={doc.link}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <BookOpen className="w-6 h-6 text-cyan-400" />
                  <span className="text-sm text-gray-400">{doc.views} views</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {doc.title}
                </h3>
                <div className="flex items-center text-cyan-400 text-sm">
                  <span>Read more</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/api-docs"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                API Reference
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;
