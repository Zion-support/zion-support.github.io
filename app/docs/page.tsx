'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight, Globe, Brain, Cloud, Shield, Settings, Users, Database, Zap, Eye, Sparkles } from 'lucide-react';

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
      icon: 'code',
      description: 'Complete API documentation and examples',
      docs: [
        { title: 'Authentication', description: 'API authentication and security', link: '/docs/api/auth' },
        { title: 'Endpoints', description: 'All available API endpoints', link: '/docs/api/endpoints' },
        { title: 'SDKs', description: 'Software development kits', link: '/docs/api/sdks' }
      ]
    },
    {
      title: 'Guides',
      icon: 'book',
      description: 'Comprehensive guides and tutorials',
      docs: [
        { title: 'Best Practices', description: 'Recommended practices and patterns', link: '/docs/guides/best-practices' },
        { title: 'Troubleshooting', description: 'Common issues and solutions', link: '/docs/guides/troubleshooting' },
        { title: 'Examples', description: 'Real-world examples and use cases', link: '/docs/guides/examples' }
      ]
    },
    {
      title: 'Deployment',
      icon: 'cloud',
      description: 'Deployment guides and infrastructure setup',
      docs: [
        { title: 'Production Setup', description: 'Deploy to production environment', link: '/docs/deployment/production' },
        { title: 'Docker', description: 'Container deployment with Docker', link: '/docs/deployment/docker' },
        { title: 'Cloud Platforms', description: 'Deploy to AWS, Azure, and GCP', link: '/docs/deployment/cloud' }
      ]
    }
  ];

  const popularDocs = [
    {
      title: 'Quick Start Guide',
      description: 'Get started with our platform in just a few minutes',
      category: 'Getting Started',
      readTime: '5 min read',
      icon: BookOpen
    },
    {
      title: 'API Authentication',
      description: 'Learn how to authenticate with our API',
      category: 'API Reference',
      readTime: '3 min read',
      icon: Shield
    },
    {
      title: 'Deployment Guide',
      description: 'Deploy your application to production',
      category: 'Deployment',
      readTime: '10 min read',
      icon: Cloud
    },
    {
      title: 'Best Practices',
      description: 'Follow these practices for optimal performance',
      category: 'Guides',
      readTime: '7 min read',
      icon: Star
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Comprehensive Documentation',
      description: 'Detailed guides covering every aspect of our platform'
    },
    {
      icon: Code,
      title: 'Code Examples',
      description: 'Real-world code examples and snippets'
    },
    {
      icon: Search,
      title: 'Smart Search',
      description: 'Find what you need quickly with our intelligent search'
    },
    {
      icon: Download,
      title: 'Offline Access',
      description: 'Download documentation for offline reference'
    }
  ];

  const stats = [
    { number: '100+', label: 'Documentation Pages', icon: FileText },
    { number: '50+', label: 'Code Examples', icon: Code },
    { number: '10+', label: 'Languages', icon: Globe },
    { number: '24/7', label: 'Updated Content', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
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
            Everything you need to know about our platform. From quick start guides to advanced API documentation.
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
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Docs */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDocs.map((doc, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <doc.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <span className="text-sm text-purple-400">{doc.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{doc.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{doc.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{doc.readTime}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {docCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                    <BookOpen className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-gray-400 text-sm">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {category.docs.map((doc, docIndex) => (
                    <div key={docIndex} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                      <div>
                        <h4 className="text-white font-medium">{doc.title}</h4>
                        <p className="text-gray-400 text-sm">{doc.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Our Documentation?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We've designed our documentation to be comprehensive, easy to follow, and always up-to-date.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our support team is here to help. Get in touch and we'll assist you with any questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Support
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Request Feature
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DocsPage;