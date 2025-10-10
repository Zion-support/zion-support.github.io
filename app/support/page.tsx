'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Phone, Mail, MessageCircle, FileText, Clock, CheckCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportChannels = [
    {
      name: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-cyan-400',
      icon: Phone
    },
    {
      name: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'kleber@ziontechgroup.com',
      availability: '24/7 response within 24 hours',
      color: 'text-purple-400',
      icon: Mail
    },
    {
      name: 'Live Chat',
      description: 'Instant help with our AI-powered chat',
      contact: 'Available on website',
      availability: '24/7 automated support',
      color: 'text-green-400',
      icon: MessageCircle
    },
    {
      name: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      contact: 'Self-service resources',
      availability: 'Always available',
      color: 'text-blue-400',
      icon: FileText
    }
  ];

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer comprehensive AI and IT solutions including cloud services, cybersecurity, data analytics, and custom development.',
      category: 'General'
    },
    {
      question: 'How quickly can you start a project?',
      answer: 'Most projects can begin within 1-2 weeks after initial consultation and contract signing.',
      category: 'General'
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we offer 24/7 support for all our enterprise clients and critical systems.',
      category: 'Support'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including monthly subscriptions, project-based pricing, and custom enterprise solutions.',
      category: 'Pricing'
    }
  ];

  const categories = ['all', 'General', 'Support', 'Pricing', 'Technical'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Get Help & Support</title>
        <meta name="description" content="Get 24/7 support for your AI and IT solutions. Contact our experts via phone, email, or live chat for immediate assistance." />
        <meta name="keywords" content="technical support, customer service, help desk, AI support, IT support, 24/7 support" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="24/7 technical support and customer service" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get <span className="text-cyan-400">Support</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help you succeed. Get the support you need with our comprehensive help resources and expert assistance.
            </p>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">How Can We Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <channel.icon className={`w-12 h-12 ${channel.color} mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3">{channel.name}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className={`${channel.color} font-medium mb-2`}>{channel.contact}</p>
                  <p className="text-sm text-gray-400">{channel.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-gray-800">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm ml-4">
                      {faq.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
                <p className="text-gray-300 mb-4">Comprehensive guides and API documentation</p>
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  View Docs →
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <MessageCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Community Forum</h3>
                <p className="text-gray-300 mb-4">Connect with other users and get help</p>
                <button className="text-purple-400 hover:text-purple-300 transition-colors">
                  Join Forum →
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Status Page</h3>
                <p className="text-gray-300 mb-4">Check system status and uptime</p>
                <button className="text-green-400 hover:text-green-300 transition-colors">
                  Check Status →
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