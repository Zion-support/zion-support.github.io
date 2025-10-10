'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MessageCircle, Clock, CheckCircle, ArrowRight, Search, FileText, Users, Settings } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqItems = [
    {
      id: 1,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'Getting Started'
    },
    {
      id: 2,
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity. Simple implementations can take 2-4 weeks, while complex AI solutions may require 3-6 months. We provide detailed timelines during consultation.',
      category: 'Project Management'
    },
    {
      id: 3,
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes! We offer comprehensive support packages including 24/7 monitoring, regular updates, and technical assistance to ensure your solutions continue performing optimally.',
      category: 'Support'
    },
    {
      id: 4,
      question: 'What security measures do you implement?',
      answer: 'We follow industry best practices including SOC 2 Type II compliance, ISO 27001 certification, end-to-end encryption, and regular security audits to protect your data.',
      category: 'Security'
    },
    {
      id: 5,
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with existing infrastructure, APIs, and third-party services. We handle the integration process for you.',
      category: 'Integration'
    },
    {
      id: 6,
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including project-based, subscription, and performance-based pricing. Contact us for a customized quote based on your specific needs.',
      category: 'Pricing'
    }
  ];

  const supportCategories = ['All', 'Getting Started', 'Project Management', 'Support', 'Security', 'Integration', 'Pricing'];

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Support Center - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get help and support for your AI and IT solutions. Find answers to common questions, contact our support team, and access resources." />
        <meta name="keywords" content="support, help, FAQ, AI support, IT support, technical assistance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Support Center
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                We're here to help! Find answers to common questions, get technical support, and access resources to maximize your AI and IT solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone Support</h3>
              <p className="text-gray-300 mb-4">Speak directly with our technical experts</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-medium">
                (302) 464-0950
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
              <p className="text-gray-300 mb-4">Get detailed responses within 24 hours</p>
              <a href="mailto:support@ziontechgroup.com" className="text-purple-400 hover:text-purple-300 font-medium">
                support@ziontechgroup.com
              </a>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-gray-300 mb-4">Instant support during business hours</p>
              <button className="text-green-400 hover:text-green-300 font-medium">
                Start Chat
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Find quick answers to common questions about our services</p>
          </div>

          {/* Search and Filter */}
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {supportCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">No FAQs found</h3>
                <p className="text-gray-400 mb-8">Try adjusting your search or filter criteria.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredFAQs.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        {item.question}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-400 ml-4 flex-shrink-0" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Additional Resources */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Additional Resources</h2>
            <p className="text-gray-300">Access documentation, guides, and helpful resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Documentation</h3>
              <p className="text-gray-300 mb-4">Comprehensive guides and API documentation</p>
              <button className="text-cyan-400 hover:text-cyan-300 font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                View Docs
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community</h3>
              <p className="text-gray-300 mb-4">Connect with other users and experts</p>
              <button className="text-purple-400 hover:text-purple-300 font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                Join Community
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-green-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Status Page</h3>
              <p className="text-gray-300 mb-4">Check system status and uptime</p>
              <button className="text-green-400 hover:text-green-300 font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                Check Status
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Business Hours</h3>
              <p className="text-gray-300 mb-4">Mon-Fri: 9AM-6PM EST</p>
              <p className="text-orange-400 text-sm font-medium">24/7 Emergency Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;