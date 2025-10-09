'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Search, BookOpen, Code, Zap, Globe, Brain, Target, BarChart, MessageSquare, Eye, ArrowRight, Star, CheckCircle } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      description: 'Quick start guides and setup instructions',
      docs: [
        { title: 'Installation Guide', url: '/docs/installation' },
        { title: 'Quick Start', url: '/docs/quick-start' },
        { title: 'Configuration', url: '/docs/configuration' },
        { title: 'First Steps', url: '/docs/first-steps' }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and examples',
      docs: [
        { title: 'Authentication', url: '/docs/api/auth' },
        { title: 'Endpoints', url: '/docs/api/endpoints' },
        { title: 'SDKs', url: '/docs/api/sdks' },
        { title: 'Webhooks', url: '/docs/api/webhooks' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      description: 'AI and machine learning service documentation',
      docs: [
        { title: 'AI Models', url: '/docs/ai/models' },
        { title: 'Training Data', url: '/docs/ai/training' },
        { title: 'Inference', url: '/docs/ai/inference' },
        { title: 'Best Practices', url: '/docs/ai/best-practices' }
      ]
    },
    {
      title: 'Deployment',
      icon: Globe,
      description: 'Deployment and infrastructure guides',
      docs: [
        { title: 'Cloud Deployment', url: '/docs/deployment/cloud' },
        { title: 'Docker', url: '/docs/deployment/docker' },
        { title: 'Kubernetes', url: '/docs/deployment/kubernetes' },
        { title: 'Monitoring', url: '/docs/deployment/monitoring' }
      ]
    },
    {
      title: 'Tutorials',
      icon: Target,
      description: 'Step-by-step tutorials and guides',
      docs: [
        { title: 'Building Your First App', url: '/docs/tutorials/first-app' },
        { title: 'Advanced Features', url: '/docs/tutorials/advanced' },
        { title: 'Integration Examples', url: '/docs/tutorials/integration' },
        { title: 'Troubleshooting', url: '/docs/tutorials/troubleshooting' }
      ]
    },
    {
      title: 'Support',
      icon: MessageSquare,
      description: 'Help and support resources',
      docs: [
        { title: 'FAQ', url: '/docs/support/faq' },
        { title: 'Contact Support', url: '/docs/support/contact' },
        { title: 'Community', url: '/docs/support/community' },
        { title: 'Status Page', url: '/docs/support/status' }
      ]
    }
  ];

  const filteredDocs = docCategories.map(category => ({
    ...category,
    docs: category.docs.filter(doc => 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive guides, API references, and tutorials to help you build amazing applications with our platform.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocs.map((category, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <div className="flex items-center mb-4">
                  <category.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{category.description}</p>
                
                <div className="space-y-2">
                  {category.docs.map((doc, docIndex) => (
                    <Link
                      key={docIndex}
                      href={doc.url}
                      className="block text-cyan-400 hover:text-cyan-300 transition-colors flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      {doc.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Quick Links
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/api-docs"
              className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-6 text-center hover:from-cyan-700 hover:to-blue-700 transition-all"
            >
              <Code className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">API Reference</h3>
              <p className="text-gray-100 text-sm">Complete API documentation</p>
            </Link>
            
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-center hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              <MessageSquare className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Get Support</h3>
              <p className="text-gray-100 text-sm">Contact our support team</p>
            </Link>
            
            <Link
              href="/blog"
              className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-6 text-center hover:from-green-700 hover:to-teal-700 transition-all"
            >
              <BookOpen className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Blog</h3>
              <p className="text-gray-100 text-sm">Latest updates and tutorials</p>
            </Link>
            
            <Link
              href="/case-studies"
              className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-6 text-center hover:from-orange-700 hover:to-red-700 transition-all"
            >
              <Target className="w-8 h-8 text-white mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Case Studies</h3>
              <p className="text-gray-100 text-sm">Real-world examples</p>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
              Our support team is here to help. Get in touch with us for personalized assistance.
            </p>
            <Link
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Contact Support
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocsPage;
