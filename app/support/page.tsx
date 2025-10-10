'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'technical', name: 'Technical Support', icon: Zap },
    { id: 'billing', name: 'Billing & Account', icon: Users },
    { id: 'api', name: 'API & Integration', icon: BookOpen },
    { id: 'general', name: 'General Questions', icon: HelpCircle }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation, and we\'ll help you identify the best AI solutions for your business needs.',
      category: 'general'
    },
    {
      question: 'What is your response time for technical support?',
      answer: 'We provide 24/7 technical support with guaranteed response times: Critical issues (1 hour), High priority (4 hours), Normal priority (24 hours).',
      category: 'technical'
    },
    {
      question: 'Do you offer custom AI model development?',
      answer: 'Yes! We specialize in custom AI model development tailored to your specific business requirements and data.',
      category: 'technical'
    },
    {
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing including monthly subscriptions, project-based pricing, and enterprise custom solutions. Contact us for detailed pricing.',
      category: 'billing'
    },
    {
      question: 'How do I integrate your APIs?',
      answer: 'We provide comprehensive API documentation, SDKs, and integration support. Our team can assist with the implementation process.',
      category: 'api'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Absolutely! We provide comprehensive training programs, workshops, and ongoing support to help your team maximize the value of our solutions.',
      category: 'general'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (302) 464-0950',
      availability: '24/7 Available'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 4 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    selectedCategory === 'all' || faq.category === selectedCategory
  ).filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT solutions. Multiple contact methods, comprehensive documentation, and expert assistance." />
        <meta name="keywords" content="technical support, AI support, IT support, customer service, help desk, documentation" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="24/7 technical support for AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Support Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support resources and expert technical assistance.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <method.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  <p className="text-cyan-400 font-semibold mb-2">{method.contact}</p>
                  <p className="text-gray-400 text-sm">{method.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            {/* Search */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-cyan-400 text-slate-900'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                All Categories
              </button>
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
              
              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Documentation & Resources
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">API Documentation</h3>
                  <p className="text-gray-300 mb-4">Comprehensive guides for integrating our APIs</p>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    View Documentation →
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">User Guides</h3>
                  <p className="text-gray-300 mb-4">Step-by-step guides for using our services</p>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Browse Guides →
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Best Practices</h3>
                  <p className="text-gray-300 mb-4">Optimize your implementation with our tips</p>
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;