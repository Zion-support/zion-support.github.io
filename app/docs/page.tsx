'use client';

import React, { useState } from 'react';

export const dynamic = 'force-dynamic';
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
        { title: 'Webhooks', description: 'Event notifications and webhook setup', link: '/docs/api/webhooks' }
      ]
    },
    {
      title: 'SDKs & Libraries',
      icon: '📚',
      description: 'Client libraries and SDKs for different languages',
      docs: [
        { title: 'JavaScript SDK', description: 'Node.js and browser JavaScript SDK', link: '/docs/sdk/javascript' },
        { title: 'Python SDK', description: 'Python client library and examples', link: '/docs/sdk/python' },
        { title: 'React Components', description: 'Ready-to-use React components', link: '/docs/sdk/react' },
        { title: 'Mobile SDKs', description: 'iOS and Android SDKs', link: '/docs/sdk/mobile' }
      ]
    },
    {
      title: 'Tutorials',
      icon: '🎓',
      description: 'Step-by-step tutorials and examples',
      docs: [
        { title: 'Building an AI Chatbot', description: 'Create a conversational AI assistant', link: '/docs/tutorials/chatbot' },
        { title: 'Image Recognition App', description: 'Build an image classification app', link: '/docs/tutorials/image-recognition' },
        { title: 'Data Analysis Pipeline', description: 'Set up automated data analysis', link: '/docs/tutorials/data-analysis' },
        { title: 'Deploy to Production', description: 'Deploy your AI application', link: '/docs/tutorials/deployment' }
      ]
    }
  ];

  const popularDocs = [
    { title: 'Quick Start Guide', views: '12.5k', link: '/docs/quick-start' },
    { title: 'API Authentication', views: '8.9k', link: '/docs/api/auth' },
    { title: 'JavaScript SDK', views: '7.2k', link: '/docs/sdk/javascript' },
    { title: 'Building an AI Chatbot', views: '6.8k', link: '/docs/tutorials/chatbot' },
    { title: 'Error Handling', views: '5.4k', link: '/docs/guides/error-handling' },
    { title: 'Rate Limits', views: '4.9k', link: '/docs/guides/rate-limits' }
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
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Documentation</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive guides, API references, and tutorials to help you build amazing AI applications.
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Popular Docs */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Popular Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDocs.map((doc, index) => (
              <a
                key={index}
                href={doc.link}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {doc.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <p className="text-sm text-gray-400">{doc.views} views</p>
              </a>
            ))}
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Browse by Category</h2>
          <div className="space-y-8">
            {filteredCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.docs.map((doc, docIndex) => (
                    <a
                      key={docIndex}
                      href={doc.link}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
                    >
                      <div>
                        <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                          {doc.title}
                        </h4>
                        <p className="text-sm text-gray-400 mt-1">{doc.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Can't find what you're looking for?</h2>
            <p className="text-gray-300 mb-6">
              Our support team is here to help you get the most out of our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
              >
                Contact Support
              </a>
              <a
                href="/api-docs"
                className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
              >
                View API Docs
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DocsPage;