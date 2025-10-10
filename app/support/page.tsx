'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Phone, Mail, MessageCircle, Zap, Clock, CheckCircle, ArrowRight, HelpCircle, FileText, Users, Headphones } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.',
      category: 'general'
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly. Our support includes monitoring, troubleshooting, and performance optimization.',
      category: 'support'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during the planning phase.',
      category: 'implementation'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs for your team including hands-on workshops, documentation, and ongoing support to ensure successful adoption of our solutions.',
      category: 'training'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, regular audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.',
      category: 'security'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. We specialize in seamless integration with existing systems and can work with virtually any platform or technology stack your organization currently uses.',
      category: 'integration'
    }
  ];

  const supportChannels = [
    {
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      contact: '+1 (302) 464-0950',
      availability: '24/7 Available',
      color: 'text-blue-400'
    },
    {
      name: 'Email Support',
      description: 'Get detailed responses to your questions',
      icon: Mail,
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours',
      color: 'text-green-400'
    },
    {
      name: 'Live Chat',
      description: 'Instant help when you need it most',
      icon: MessageCircle,
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-purple-400'
    },
    {
      name: 'Emergency Support',
      description: 'Critical issues resolved quickly',
      icon: Zap,
      contact: '+1 (302) 464-0950',
      availability: '24/7 Critical Support',
      color: 'text-red-400'
    }
  ];

  const categories = ['all', 'general', 'support', 'implementation', 'training', 'security', 'integration'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Expert Technical Support</title>
        <meta name="description" content="Get expert support for your AI and IT solutions. 24/7 technical assistance, comprehensive documentation, and dedicated support channels." />
        <meta name="keywords" content="technical support, AI support, IT support, customer service, help desk, troubleshooting" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="Expert technical support for all your AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-cyan-400">Support</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Get the help you need, when you need it. Our expert support team is available 24/7 to assist with all your AI and IT solutions.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">&lt; 2min</div>
                <div className="text-gray-400">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-400">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Support Availability</div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-4">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{channel.name}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className={`${channel.color} font-medium mb-2`}>{channel.contact}</p>
                  <p className="text-sm text-gray-400">{channel.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Questions' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No questions found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Support Resources</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Documentation</h3>
                <p className="text-gray-300 mb-4">Comprehensive guides and API documentation for all our solutions.</p>
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 mx-auto">
                  Browse Docs
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Community Forum</h3>
                <p className="text-gray-300 mb-4">Connect with other users and get help from the community.</p>
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 mx-auto">
                  Join Community
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-4">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Training Center</h3>
                <p className="text-gray-300 mb-4">Learn how to maximize the value of your solutions.</p>
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 mx-auto">
                  Start Learning
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our support team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Support
                </button>
                <button className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;
