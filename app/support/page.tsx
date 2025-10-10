'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, ArrowRight, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire implementation process.',
      category: 'Getting Started'
    },
    {
      id: 2,
      question: 'What support do you provide after implementation?',
      answer: 'We provide comprehensive ongoing support including 24/7 technical support, regular system monitoring, performance optimization, and updates. Our dedicated support team is always available to help.',
      category: 'Support'
    },
    {
      id: 3,
      question: 'How secure are your AI solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, access controls, regular security audits, and compliance with industry standards like GDPR and SOC 2.',
      category: 'Security'
    },
    {
      id: 4,
      question: 'Can your solutions integrate with our existing systems?',
      answer: 'Yes! Our AI solutions are designed to integrate seamlessly with your existing systems. We provide APIs, connectors, and custom integration services to ensure smooth implementation.',
      category: 'Integration'
    },
    {
      id: 5,
      question: 'What is the typical implementation timeline?',
      answer: 'Implementation timelines vary based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise implementations typically take 3-6 months. We provide detailed project timelines during consultation.',
      category: 'Implementation'
    },
    {
      id: 6,
      question: 'Do you offer training for our team?',
      answer: 'Absolutely! We provide comprehensive training programs for your team including hands-on workshops, documentation, video tutorials, and ongoing support to ensure your team can effectively use our solutions.',
      category: 'Training'
    }
  ];

  const categories = ['all', 'Getting Started', 'Support', 'Security', 'Integration', 'Implementation', 'Training'];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1-302-464-0950',
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      availability: 'Business hours',
      responseTime: 'Immediate'
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      contact: 'docs.ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Self-service'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group | Get Help & Support</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find answers to FAQs, contact support, and access documentation." />
        <meta name="keywords" content="support, help, FAQ, technical support, customer service, documentation" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support resources and expert assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-lg"
            />
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {channel.title}
                </h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="font-semibold text-cyan-400">{channel.contact}</div>
                  <div>Available: {channel.availability}</div>
                  <div>Response: {channel.responseTime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our services and solutions.
            </p>
          </div>
          
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16">
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
              <p className="text-gray-300">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white pr-4">{faq.question}</h3>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full flex-shrink-0">
                      {faq.category}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
            <a
              href="mailto:support@ziontechgroup.com"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;