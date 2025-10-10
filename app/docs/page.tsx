'use client';
import React, { useState } from 'react';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight, Globe, Brain, Cloud, Shield, Settings, Users, Database, Zap, Eye, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function DocsPage() {
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
      icon: 'code',
      description: 'Complete API documentation and endpoints',
      docs: [
        { title: 'Authentication', description: 'API authentication methods', link: '/docs/api/auth' },
        { title: 'Endpoints', description: 'All available API endpoints', link: '/docs/api/endpoints' },
        { title: 'SDKs', description: 'Client SDKs and libraries', link: '/docs/api/sdks' }
      ]
    },
    {
      title: 'AI Solutions',
      icon: 'brain',
      description: 'AI and machine learning documentation',
      docs: [
        { title: 'AI Models', description: 'Available AI models and capabilities', link: '/docs/ai/models' },
        { title: 'Training Data', description: 'Data preparation and training', link: '/docs/ai/training' },
        { title: 'Deployment', description: 'Deploying AI models to production', link: '/docs/ai/deployment' }
      ]
    },
    {
      title: 'Cloud Services',
      icon: 'cloud',
      description: 'Cloud infrastructure and services',
      docs: [
        { title: 'Infrastructure', description: 'Cloud infrastructure setup', link: '/docs/cloud/infrastructure' },
        { title: 'Security', description: 'Cloud security best practices', link: '/docs/cloud/security' },
        { title: 'Monitoring', description: 'Monitoring and logging', link: '/docs/cloud/monitoring' }
      ]
    }
  ];

  const popularDocs = [
    { title: 'Quick Start Guide', description: 'Get started in minutes', category: 'Getting Started', link: '/docs/quick-start' },
    { title: 'API Authentication', description: 'Learn how to authenticate', category: 'API Reference', link: '/docs/api/auth' },
    { title: 'AI Model Training', description: 'Train your own models', category: 'AI Solutions', link: '/docs/ai/training' },
    { title: 'Cloud Security', description: 'Secure your cloud infrastructure', category: 'Cloud Services', link: '/docs/cloud/security' }
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
      <SEOOptimizer 
        title="Documentation - Zion Tech Group"
        description="Complete documentation for Zion Tech Group's AI and IT solutions. Find guides, tutorials, API references, and best practices."
        keywords="documentation, API docs, guides, tutorials, AI solutions, cloud services, technical documentation"
      />
      <Navigation />
      
<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Documentation
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Center
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about our AI and IT solutions. 
            Comprehensive guides, API references, and best practices.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16"></div>
            <div className="max-w-4xl mx-auto"></div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Documentation</h1>
              </h1>
              
              <div className="prose prose-lg max-w-none"></div>
                <p className="text-xl text-gray-600 mb-8">
                  Welcome to our documentation center. Find everything you need to get started with our services.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
                <p className="text-gray-700 mb-6">
                  Learn how to set up and configure our AI and IT services for your business.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
                <p className="text-gray-700 mb-6">
                  Complete API documentation with examples and code snippets.
                </p>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tutorials</h2>
                <p className="text-gray-700 mb-6">
                  Step-by-step guides to help you make the most of our platform.
                </p>
              </div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </div>
          </div>
        </div>
      </section>

      {/* Popular Docs */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDocs.map((doc, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-purple-400 text-sm font-medium">{doc.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{doc.description}</p>
                <a
                  href={doc.link}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors text-sm"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredDocs.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.docs.map((doc, docIndex) => (
                    <a
                      key={docIndex}
                      href={doc.link}
                      className="block p-4 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                            {doc.title}
                          </h4>
                          <p className="text-gray-300 text-sm">{doc.description}</p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Help?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Join Community
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
