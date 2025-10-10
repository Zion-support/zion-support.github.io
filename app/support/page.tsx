'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a consultation, and we\'ll assess your needs and recommend the best AI solutions for your business. We provide comprehensive onboarding and training.',
      category: 'general'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer 24/7 technical support, dedicated account managers, comprehensive documentation, and regular check-ins to ensure your success.',
      category: 'general'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on project complexity. Simple integrations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during planning.',
      category: 'implementation'
    },
    {
      question: 'What are your pricing options?',
      answer: 'We offer flexible pricing plans including Starter, Professional, and Enterprise tiers. Custom pricing is available for large organizations. Contact us for a detailed quote.',
      category: 'billing'
    },
    {
      question: 'Is my data secure with your solutions?',
      answer: 'Absolutely. We use enterprise-grade security measures including encryption, secure data centers, and compliance with industry standards like SOC 2 and ISO 27001.',
      category: 'technical'
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Yes, our solutions are designed to integrate seamlessly with existing systems through APIs, webhooks, and custom connectors. We handle the integration process for you.',
      category: 'technical'
    }
  ];

  const categories = ['all', 'general', 'implementation', 'billing', 'technical'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const supportOptions = [
    {
      icon: <Phone className="w-8 h-8 text-cyan-400" />,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1-302-464-0950',
      availability: '24/7'
    },
    {
      icon: <Mail className="w-8 h-8 text-cyan-400" />,
      title: 'Email Support',
      description: 'Send us your questions',
      contact: 'support@ziontechgroup.com',
      availability: '24/7'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      availability: 'Business hours'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for your AI and IT solutions. Find answers to common questions and contact our support team." />
        <meta name="keywords" content="support, help, FAQ, technical support, customer service" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get help and support for your AI and IT solutions. We're here to ensure your success.
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support option that works best for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportOptions.map((option, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                  <p className="text-gray-300 mb-4">{option.description}</p>
                  <div className="text-cyan-400 font-semibold mb-2">{option.contact}</div>
                  <div className="text-gray-400 text-sm">{option.availability}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Find answers to common questions about our services and solutions.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    <div className={`transform transition-transform ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                      <HelpCircle className="w-5 h-5 text-cyan-400" />
                    </div>
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
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

        {/* Additional Resources */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our documentation, guides, and other helpful resources.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Documentation</h3>
                <p className="text-gray-300 mb-4">Comprehensive guides and API documentation</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  View Documentation →
                </button>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Community</h3>
                <p className="text-gray-300 mb-4">Connect with other users and experts</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Join Community →
                </button>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Status Page</h3>
                <p className="text-gray-300 mb-4">Check system status and uptime</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  View Status →
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SupportPage;