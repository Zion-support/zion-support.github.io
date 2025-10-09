'use client';
import React, { useState } from 'react';
import { Search, BookOpen, Code, FileText, Video, Download, ExternalLink, ArrowRight, CheckCircle, Star, Award, Brain, Cloud, Shield, BarChart, Zap, Target, MessageSquare, Eye, Cpu, Lock, Bot, Calculator, Compass, Navigation, PieChart, Activity, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen as BookIcon, Video as VideoIcon, Gamepad2, ShoppingCart, CreditCard, Truck, Link, HardDrive, FileCheck, DollarSign, TrendingUp, Users, Settings, Database, Globe, Smartphone, Mail, Phone, Calendar, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEOOptimizer from '../components/EnhancedSEOOptimizer';

const DocsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Documentation', icon: FileText },
    { id: 'getting-started', name: 'Getting Started', icon: Play },
    { id: 'api', name: 'API Reference', icon: Code },
    { id: 'ai-services', name: 'AI Services', icon: Brain },
    { id: 'it-services', name: 'IT Services', icon: Settings },
    { id: 'tutorials', name: 'Tutorials', icon: Video },
    { id: 'guides', name: 'Guides', icon: BookOpen }
  ];

  const documentation = [
    {
      id: 1,
      title: 'Getting Started with Zion Tech Group',
      description: 'Complete guide to setting up your account and accessing our services',
      category: 'getting-started',
      type: 'Guide',
      icon: BookOpen,
      lastUpdated: '2024-01-15',
      difficulty: 'Beginner',
      readTime: '10 min',
      tags: ['onboarding', 'setup', 'account', 'getting-started']
    },
    {
      id: 2,
      title: 'AI Project Manager API Documentation',
      description: 'Complete API reference for the AI Project Manager service',
      category: 'api',
      type: 'API Reference',
      icon: Code,
      lastUpdated: '2024-01-14',
      difficulty: 'Advanced',
      readTime: '25 min',
      tags: ['api', 'ai-project-manager', 'rest-api', 'endpoints']
    },
    {
      id: 3,
      title: 'Machine Learning Integration Guide',
      description: 'Step-by-step guide to integrating our ML services into your applications',
      category: 'ai-services',
      type: 'Tutorial',
      icon: Brain,
      lastUpdated: '2024-01-13',
      difficulty: 'Intermediate',
      readTime: '15 min',
      tags: ['machine-learning', 'integration', 'tutorial', 'ai-services']
    },
    {
      id: 4,
      title: 'Cloud Migration Best Practices',
      description: 'Comprehensive guide to migrating your infrastructure to the cloud',
      category: 'it-services',
      type: 'Guide',
      icon: Cloud,
      lastUpdated: '2024-01-12',
      difficulty: 'Intermediate',
      readTime: '20 min',
      tags: ['cloud-migration', 'infrastructure', 'best-practices', 'it-services']
    },
    {
      id: 5,
      title: 'AI Analytics Dashboard Setup',
      description: 'Video tutorial on setting up and configuring the AI Analytics Dashboard',
      category: 'tutorials',
      type: 'Video Tutorial',
      icon: Video,
      lastUpdated: '2024-01-11',
      difficulty: 'Beginner',
      readTime: '8 min',
      tags: ['analytics', 'dashboard', 'setup', 'video-tutorial']
    },
    {
      id: 6,
      title: 'Cybersecurity Implementation Guide',
      description: 'Complete guide to implementing our cybersecurity solutions',
      category: 'it-services',
      type: 'Guide',
      icon: Shield,
      lastUpdated: '2024-01-10',
      difficulty: 'Advanced',
      readTime: '30 min',
      tags: ['cybersecurity', 'security', 'implementation', 'it-services']
    },
    {
      id: 7,
      title: 'Natural Language Processing API',
      description: 'API documentation for our NLP services and endpoints',
      category: 'api',
      type: 'API Reference',
      icon: MessageSquare,
      lastUpdated: '2024-01-09',
      difficulty: 'Advanced',
      readTime: '20 min',
      tags: ['nlp', 'api', 'natural-language', 'endpoints']
    },
    {
      id: 8,
      title: 'Data Visualization Best Practices',
      description: 'Guide to creating effective data visualizations with our tools',
      category: 'guides',
      type: 'Guide',
      icon: BarChart,
      lastUpdated: '2024-01-08',
      difficulty: 'Intermediate',
      readTime: '12 min',
      tags: ['data-visualization', 'charts', 'analytics', 'best-practices']
    },
    {
      id: 9,
      title: 'AI Chatbot Configuration',
      description: 'Step-by-step tutorial for setting up AI chatbots',
      category: 'tutorials',
      type: 'Tutorial',
      icon: Bot,
      lastUpdated: '2024-01-07',
      difficulty: 'Beginner',
      readTime: '18 min',
      tags: ['chatbot', 'ai', 'configuration', 'tutorial']
    },
    {
      id: 10,
      title: 'Database Optimization Guide',
      description: 'Comprehensive guide to optimizing database performance',
      category: 'it-services',
      type: 'Guide',
      icon: Database,
      lastUpdated: '2024-01-06',
      difficulty: 'Advanced',
      readTime: '25 min',
      tags: ['database', 'optimization', 'performance', 'it-services']
    },
    {
      id: 11,
      title: 'Webhook Integration Tutorial',
      description: 'Learn how to integrate webhooks with our services',
      category: 'tutorials',
      type: 'Tutorial',
      icon: Link,
      lastUpdated: '2024-01-05',
      difficulty: 'Intermediate',
      readTime: '14 min',
      tags: ['webhooks', 'integration', 'tutorial', 'api']
    },
    {
      id: 12,
      title: 'Mobile App Development Guide',
      description: 'Guide to building mobile apps with our AI services',
      category: 'guides',
      type: 'Guide',
      icon: Smartphone,
      lastUpdated: '2024-01-04',
      difficulty: 'Intermediate',
      readTime: '22 min',
      tags: ['mobile', 'app-development', 'ai-services', 'guide']
    }
  ];

  const quickStartGuides = [
    {
      title: 'Set Up Your First AI Project',
      description: 'Get started with AI in 5 minutes',
      icon: Brain,
      link: '/docs/quick-start-ai',
      time: '5 min'
    },
    {
      title: 'Deploy Your First API',
      description: 'Deploy and test your first API endpoint',
      icon: Code,
      link: '/docs/quick-start-api',
      time: '10 min'
    },
    {
      title: 'Create Your First Dashboard',
      description: 'Build a data visualization dashboard',
      icon: BarChart,
      link: '/docs/quick-start-dashboard',
      time: '15 min'
    },
    {
      title: 'Set Up Monitoring',
      description: 'Configure monitoring and alerts',
      icon: Activity,
      link: '/docs/quick-start-monitoring',
      time: '8 min'
    }
  ];

  const filteredDocs = documentation.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEOOptimizer
        title="Documentation - Zion Tech Group"
        description="Comprehensive documentation for all Zion Tech Group services. Find guides, API references, tutorials, and best practices to help you succeed."
        keywords={['documentation', 'docs', 'api reference', 'guides', 'tutorials', 'help', 'developer resources']}
        canonicalUrl="https://ziontechgroup.com/docs"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            Documentation
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Comprehensive guides, API references, and tutorials to help you succeed with our AI and IT services.
          </p>
        </section>

        {/* Search Bar */}
        <section className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-lg"
              />
            </div>
          </div>
        </section>

        {/* Quick Start Guides */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Quick Start Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStartGuides.map((guide, index) => (
              <a
                key={index}
                href={guide.link}
                className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group"
              >
                <guide.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{guide.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{guide.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400 font-semibold">{guide.time}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'cyber-button'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Documentation Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            All Documentation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocs.map((doc) => (
              <a
                key={doc.id}
                href={`/docs/${doc.id}`}
                className="cyber-card p-6 hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <doc.icon className="w-8 h-8 text-cyan-400" />
                  <div className="flex items-center space-x-2">
                    <span className="bg-slate-800 text-cyan-400 px-2 py-1 rounded-full text-xs">
                      {doc.type}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm">{doc.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      doc.difficulty === 'Beginner' ? 'bg-green-800 text-green-400' :
                      doc.difficulty === 'Intermediate' ? 'bg-yellow-800 text-yellow-400' :
                      'bg-red-800 text-red-400'
                    }`}>
                      {doc.difficulty}
                    </span>
                    <span className="text-xs text-gray-400">{doc.readTime}</span>
                  </div>
                  <span className="text-xs text-gray-400">
                    Updated {new Date(doc.lastUpdated).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {doc.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-slate-800 text-cyan-400 px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                  {doc.tags.length > 3 && (
                    <span className="text-xs text-gray-400">+{doc.tags.length - 3} more</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/api-docs" className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group">
              <Code className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">API Reference</h3>
              <p className="text-gray-300 text-sm">Complete API documentation with examples</p>
            </a>
            <a href="/tutorials" className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group">
              <Video className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Video Tutorials</h3>
              <p className="text-gray-300 text-sm">Step-by-step video guides</p>
            </a>
            <a href="/community" className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Community</h3>
              <p className="text-gray-300 text-sm">Connect with other developers</p>
            </a>
            <a href="/status" className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300 group">
              <Activity className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">System Status</h3>
              <p className="text-gray-300 text-sm">Real-time service status</p>
            </a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Need More Help?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/support" className="cyber-button px-8 py-4 text-lg font-semibold">
                Contact Support
              </a>
              <a href="/contact" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Get in Touch
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