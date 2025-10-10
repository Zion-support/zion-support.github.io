'use client';
import React, { useState } from 'react';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: 'rocket',
      description: 'Quick start guides and basic setup instructions',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', link: '/docs/quick-start' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' },
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
        { title: 'SDKs', description: 'Software development kits', link: '/docs/api/sdks' }
      ]
    },
    {
      title: 'AI Services',
      icon: '🤖',
      description: 'AI and machine learning service documentation',
      docs: [
        { title: 'AI Content Generation', description: 'Generate content with AI', link: '/docs/ai/content' },
        { title: 'AI Analytics', description: 'AI-powered analytics tools', link: '/docs/ai/analytics' },
        { title: 'AI Automation', description: 'Automate workflows with AI', link: '/docs/ai/automation' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: 'laptop',
      description: 'Micro SAAS solutions and tools',
      docs: [
        { title: 'Available Tools', description: 'List of all micro SAAS tools', link: '/docs/micro-saas/tools' },
        { title: 'Integration Guide', description: 'Integrate with your existing systems', link: '/docs/micro-saas/integration' },
        { title: 'Customization', description: 'Customize tools for your needs', link: '/docs/micro-saas/customization' }
      ]
    },
    {
      title: 'IT Services',
      icon: 'server',
      description: 'IT infrastructure and support documentation',
      docs: [
        { title: 'Cloud Migration', description: 'Migrate to the cloud', link: '/docs/it/cloud-migration' },
        { title: 'Security Setup', description: 'Configure security measures', link: '/docs/it/security' },
        { title: 'Monitoring', description: 'Set up monitoring and alerts', link: '/docs/it/monitoring' }
      ]
    },
    {
      title: 'Troubleshooting',
      icon: 'wrench',
      description: 'Common issues and solutions',
      docs: [
        { title: 'FAQ', description: 'Frequently asked questions', link: '/docs/troubleshooting/faq' },
        { title: 'Error Codes', description: 'Common error codes and solutions', link: '/docs/troubleshooting/errors' },
        { title: 'Performance', description: 'Performance optimization tips', link: '/docs/troubleshooting/performance' }
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
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Documentation
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive documentation for all our services, APIs, and tools. Find everything you need to get started and make the most of our platform.
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
              className="w-full pl-10 pr-4 py-4 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <div key={index} className="card-futuristic glass-dark p-6 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{category.title}</h2>
                </div>
                
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.docs.map((doc, docIndex) => (
                    <div key={docIndex} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <div className="flex-1">
                        <h3 className="text-white font-semibold mb-1">{doc.title}</h3>
                        <p className="text-gray-400 text-sm">{doc.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-cyan-400" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Quick Links</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="card-futuristic glass-dark p-6 text-center">
              <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">API Reference</h3>
              <p className="text-gray-300 text-sm mb-4">Complete API documentation</p>
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                View API Docs
              </button>
            </div>
            
            <div className="card-futuristic glass-dark p-6 text-center">
              <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">SDKs</h3>
              <p className="text-gray-300 text-sm mb-4">Download our SDKs</p>
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Download SDKs
              </button>
            </div>
            
            <div className="card-futuristic glass-dark p-6 text-center">
              <Download className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Examples</h3>
              <p className="text-gray-300 text-sm mb-4">Code examples and samples</p>
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                View Examples
              </button>
            </div>
            
            <div className="card-futuristic glass-dark p-6 text-center">
              <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Tutorials</h3>
              <p className="text-gray-300 text-sm mb-4">Step-by-step tutorials</p>
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Browse Tutorials
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Help?</h2>
          <p className="text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help you get the most out of our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-futuristic text-lg px-8 py-4 float-animation">
              Contact Support
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Join Community
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;