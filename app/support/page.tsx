'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, ArrowRight, Search, FileText, Video, Headphones } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    {
      name: 'Technical Support',
      icon: Headphones,
      description: 'Get help with technical issues and troubleshooting',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Account Support',
      icon: FileText,
      description: 'Manage your account and billing questions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Training & Documentation',
      icon: Video,
      description: 'Learn how to use our services effectively',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'General Inquiries',
      icon: MessageCircle,
      description: 'General questions and information requests',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const supportMethods = [
    {
      method: 'Phone Support',
      icon: Phone,
      description: 'Speak directly with our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      contact: '(302) 464-0950'
    },
    {
      method: 'Email Support',
      icon: Mail,
      description: 'Send us a detailed message',
      availability: '24/7',
      responseTime: 'Within 2 hours',
      contact: 'kleber@ziontechgroup.com'
    },
    {
      method: 'Live Chat',
      icon: MessageCircle,
      description: 'Chat with our support team in real-time',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      contact: 'Start Chat'
    }
  ];

  const knowledgeBase = [
    {
      title: 'Getting Started Guide',
      description: 'Learn how to set up and use our AI and IT services',
      category: 'Documentation',
      readTime: '10 min read'
    },
    {
      title: 'API Documentation',
      description: 'Complete API reference for developers',
      category: 'Technical',
      readTime: '15 min read'
    },
    {
      title: 'Troubleshooting Common Issues',
      description: 'Solutions to frequently encountered problems',
      category: 'Support',
      readTime: '5 min read'
    },
    {
      title: 'Security Best Practices',
      description: 'How to keep your systems secure',
      category: 'Security',
      readTime: '8 min read'
    },
    {
      title: 'Billing and Payment FAQ',
      description: 'Answers to common billing questions',
      category: 'Billing',
      readTime: '3 min read'
    },
    {
      title: 'Integration Examples',
      description: 'Code examples and integration guides',
      category: 'Technical',
      readTime: '12 min read'
    }
  ];

  const filteredKnowledgeBase = knowledgeBase.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group | Customer Support</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT services. 24/7 support, documentation, and resources to help you succeed." />
        <meta name="keywords" content="support, help, customer service, technical support, documentation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Customer <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Support</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We're here to help you succeed. Get support for our AI and IT services with 24/7 assistance and comprehensive resources.
          </p>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">How Can We Help?</h2>
            <p className="text-xl text-gray-300">Choose the type of support you need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Contact Support</h2>
            <p className="text-xl text-gray-300">Multiple ways to get the help you need</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportMethods.map((method, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{method.method}</h3>
                <p className="text-gray-300 mb-6">{method.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-white">{method.availability}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-white">{method.responseTime}</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  {method.contact}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Knowledge Base</h2>
            <p className="text-xl text-gray-300">Find answers and learn how to use our services</p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search knowledge base..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
            >
              <option value="all">All Categories</option>
              <option value="documentation">Documentation</option>
              <option value="technical">Technical</option>
              <option value="support">Support</option>
              <option value="security">Security</option>
              <option value="billing">Billing</option>
            </select>
          </div>

          {/* Knowledge Base Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredKnowledgeBase.map((item, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-400">{item.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex items-center text-cyan-400 font-medium group">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Page */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
              <h2 className="text-2xl font-bold text-white">All Systems Operational</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Our services are running smoothly. Check our status page for real-time updates.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
              View Status Page
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our support team is ready to assist you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Support</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;