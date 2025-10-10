'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Search, Filter, Clock, CheckCircle, ArrowRight, Users, Headphones } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportChannels = [
    {
      id: 1,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: '24/7',
      responseTime: 'Immediate',
      contact: '+1 (302) 464-0950',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Email Support',
      description: 'Get detailed responses to your technical questions',
      icon: Mail,
      availability: '24/7',
      responseTime: 'Within 4 hours',
      contact: 'support@ziontechgroup.com',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Live Chat',
      description: 'Real-time assistance through our chat platform',
      icon: MessageCircle,
      availability: 'Business Hours',
      responseTime: 'Immediate',
      contact: 'Start Chat',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const faqCategories = [
    { id: 'all', name: 'All Topics' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'billing', name: 'Billing' },
    { id: 'account', name: 'Account' }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our sales team to schedule a consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'general'
    },
    {
      id: 2,
      question: 'What is your response time for technical support?',
      answer: 'We provide 24/7 technical support with immediate response for critical issues. Non-critical issues are typically resolved within 4 hours.',
      category: 'technical'
    },
    {
      id: 3,
      question: 'Do you offer custom AI model development?',
      answer: 'Yes, we specialize in custom AI model development tailored to your specific business requirements and data.',
      category: 'technical'
    },
    {
      id: 4,
      question: 'What are your pricing options?',
      answer: 'We offer flexible pricing plans starting from $1,500/month. Contact us for a customized quote based on your specific needs.',
      category: 'billing'
    },
    {
      id: 5,
      question: 'How do I update my account information?',
      answer: 'You can update your account information through the client portal or contact our support team for assistance.',
      category: 'account'
    },
    {
      id: 6,
      question: 'Do you provide training for your solutions?',
      answer: 'Yes, we provide comprehensive training sessions for all our solutions to ensure your team can effectively use them.',
      category: 'general'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for your AI and IT solutions. 24/7 technical support, documentation, and resources to help you succeed." />
        <meta name="keywords" content="support, help, technical support, customer service, documentation, FAQ, Zion Tech Group" />
      </Helmet>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Support</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're here to help you succeed. Get the support you need with our comprehensive 
              help resources and dedicated support team.
            </p>
          </div>

          {/* Support Channels */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">How Can We Help You?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel) => (
                <div key={channel.id} className="bg-slate-800/50 rounded-lg p-8 hover:scale-105 transition-transform duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">{channel.title}</h3>
                  <p className="text-gray-300 text-center mb-6">{channel.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Availability:</span>
                      <span className="text-white font-medium">{channel.availability}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-white font-medium">{channel.responseTime}</span>
                    </div>
                  </div>
                  
                  <button className={`w-full bg-gradient-to-r ${channel.color} hover:opacity-90 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105`}>
                    {channel.contact}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Filter by category:</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {faqCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-white mb-4">No FAQs found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Additional Resources */}
          <div className="bg-slate-800/50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Community Forum</h3>
                <p className="text-gray-300 mb-4">
                  Connect with other users and get help from the community.
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Visit Forum
                  <ArrowRight className="inline-block ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive guides and API documentation.
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                  View Docs
                  <ArrowRight className="inline-block ml-1 w-4 h-4" />
                </button>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Status Page</h3>
                <p className="text-gray-300 mb-4">
                  Check the current status of our services.
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Check Status
                  <ArrowRight className="inline-block ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Can't find what you're looking for? Our support team is ready to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 hover:bg-cyan-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact Support
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;