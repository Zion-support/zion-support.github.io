'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Phone, Mail, MessageCircle, Clock, CheckCircle, ArrowRight, Zap, Users, Award } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      availability: 'Mon-Fri: 9AM-6PM EST',
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

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a consultation, and we\'ll help you choose the right AI solution for your business needs.',
      category: 'getting-started'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including technical assistance, training, documentation, and ongoing maintenance for all our solutions.',
      category: 'support'
    },
    {
      question: 'How quickly can you respond to support requests?',
      answer: 'We typically respond to support requests within 24 hours, with priority support available for enterprise customers.',
      category: 'support'
    },
    {
      question: 'Do you offer training for your solutions?',
      answer: 'Yes! We provide comprehensive training programs to help your team get the most out of our AI and IT solutions.',
      category: 'training'
    },
    {
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.9% uptime for all our cloud-based solutions, with 24/7 monitoring and immediate response to any issues.',
      category: 'technical'
    },
    {
      question: 'Can I integrate your solutions with my existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with existing enterprise systems and workflows.',
      category: 'integration'
    }
  ];

  const categories = ['all', 'getting-started', 'support', 'training', 'technical', 'integration'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { icon: Users, value: '24/7', label: 'Support Available' },
    { icon: Clock, value: '< 2hrs', label: 'Response Time' },
    { icon: CheckCircle, value: '99.9%', label: 'Uptime SLA' },
    { icon: Award, value: '4.9/5', label: 'Customer Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for your AI and IT solutions. 24/7 support, documentation, and expert assistance from Zion Tech Group." />
        <meta name="keywords" content="technical support, customer service, help desk, AI support, IT support, documentation" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Help</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Get the support you need to make the most of your AI and IT solutions. Our expert team is ready to assist you 24/7.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-300 text-lg">Choose your preferred support channel</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className={`w-16 h-16 ${channel.color} bg-white/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <channel.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <p className="text-purple-400 font-medium">{channel.contact}</p>
                  <p className="text-gray-400 text-xs">{channel.availability}</p>
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
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 text-lg">Find answers to common questions</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category === 'all' ? 'All Categories' : category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Support
              </Link>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                <ArrowRight className="w-5 h-5" />
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;