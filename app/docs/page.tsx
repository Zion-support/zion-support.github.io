'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, BookOpen, Code, FileText, Download, ArrowRight, ChevronRight, Rocket, Settings, Shield, Zap, Users, BarChart, Cloud, Brain, Database, Globe, Lock, Star, CheckCircle, Clock, Eye, MessageSquare, TrendingUp, Award, Target, Phone, Mail, MapPin, Sparkles, Activity, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Key } from 'lucide-react';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const docCategories = [
    {
      title: 'Getting Started',
      icon: Rocket,
      description: 'Quick start guides and basic setup instructions',
      docs: [
        { title: 'Quick Start Guide', description: 'Get up and running in 5 minutes', link: '/docs/quick-start' },
        { title: 'Installation Guide', description: 'Step-by-step installation instructions', link: '/docs/installation' },
        { title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' }
      ]
    },
    {
      title: 'API Reference',
      icon: Code,
      description: 'Complete API documentation and examples',
      docs: [
        { title: 'Authentication', description: 'API authentication methods', link: '/docs/api/auth' },
        { title: 'Endpoints', description: 'All available API endpoints', link: '/docs/api/endpoints' },
        { title: 'SDKs', description: 'Client libraries and SDKs', link: '/docs/api/sdks' }
      ]
    },
    {
      title: 'Guides',
      icon: BookOpen,
      description: 'Comprehensive guides and tutorials',
      docs: [
        { title: 'Best Practices', description: 'Recommended practices and patterns', link: '/docs/guides/best-practices' },
        { title: 'Troubleshooting', description: 'Common issues and solutions', link: '/docs/guides/troubleshooting' },
        { title: 'Migration Guide', description: 'Upgrading from previous versions', link: '/docs/guides/migration' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      description: 'Security guidelines and best practices',
      docs: [
        { title: 'Security Overview', description: 'Security features and capabilities', link: '/docs/security/overview' },
        { title: 'Authentication', description: 'User authentication and authorization', link: '/docs/security/auth' },
        { title: 'Data Protection', description: 'Data encryption and privacy', link: '/docs/security/data-protection' }
      ]
    },
    {
      title: 'Deployment',
      icon: Cloud,
      description: 'Deployment guides and infrastructure',
      docs: [
        { title: 'Cloud Deployment', description: 'Deploy to cloud platforms', link: '/docs/deployment/cloud' },
        { title: 'Docker', description: 'Container deployment with Docker', link: '/docs/deployment/docker' },
        { title: 'Kubernetes', description: 'Kubernetes deployment guide', link: '/docs/deployment/kubernetes' }
      ]
    },
    {
      title: 'Integrations',
      icon: Zap,
      description: 'Third-party integrations and plugins',
      docs: [
        { title: 'Webhooks', description: 'Set up webhooks for real-time updates', link: '/docs/integrations/webhooks' },
        { title: 'Plugins', description: 'Available plugins and extensions', link: '/docs/integrations/plugins' },
        { title: 'Third-party APIs', description: 'Integrate with external services', link: '/docs/integrations/third-party' }
      ]
    }
  ];

  const popularDocs = [
    {
      title: 'Quick Start Guide',
      description: 'Get up and running in 5 minutes',
      category: 'Getting Started',
      link: '/docs/quick-start',
      icon: Rocket
    },
    {
      title: 'API Authentication',
      description: 'Learn how to authenticate with our API',
      category: 'API Reference',
      link: '/docs/api/auth',
      icon: Key
    },
    {
      title: 'Best Practices',
      description: 'Recommended practices and patterns',
      category: 'Guides',
      link: '/docs/guides/best-practices',
      icon: Star
    },
    {
      title: 'Cloud Deployment',
      description: 'Deploy to cloud platforms',
      category: 'Deployment',
      link: '/docs/deployment/cloud',
      icon: Cloud
    }
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
            Comprehensive documentation, guides, and resources to help you get the most out of our platform.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      {/* Popular Docs */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Popular Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDocs.map((doc, index) => (
              <Link
                key={index}
                to={doc.link}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <doc.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <span className="text-sm text-purple-400 font-medium">{doc.category}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-gray-300 text-sm">{doc.description}</p>
                <div className="flex items-center mt-4 text-purple-400 text-sm">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Documentation Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocs.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <category.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{category.description}</p>
                <div className="space-y-3">
                  {category.docs.map((doc, idx) => (
                    <Link
                      key={idx}
                      to={doc.link}
                      className="block p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                            {doc.title}
                          </h4>
                          <p className="text-gray-400 text-sm">{doc.description}</p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
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
            Our support team is here to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Support
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