'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Phone, Mail, MessageCircle, FileText, Book, Globe, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1-302-464-0950',
      availability: '24/7'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: '24/7'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our experts in real-time',
      contact: 'Available on website',
      availability: '24/7'
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs'
    },
    {
      icon: Book,
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      link: '/knowledge-base'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      link: '/community'
    },
    {
      title: 'Status Page',
      description: 'Check system status and uptime',
      icon: Globe,
      link: '/status'
    }
  ];

  const faqs = [
    {
      question: 'What support options are available?',
      answer: 'We provide 24/7 technical support, regular maintenance, and ongoing optimization to ensure your systems run smoothly.',
      category: 'general'
    },
    {
      question: 'How do I contact technical support?',
      answer: 'You can reach our technical support team via phone, email, or live chat. All channels are available 24/7.',
      category: 'technical'
    },
    {
      question: 'What is included in your support service?',
      answer: 'Our support includes system monitoring, regular updates, security patches, performance optimization, and emergency response.',
      category: 'technical'
    },
    {
      question: 'How quickly do you respond to support requests?',
      answer: 'We respond to critical issues within 1 hour and general inquiries within 4 hours during business hours.',
      category: 'general'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'billing', name: 'Billing' }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const searchedFaqs = searchQuery 
    ? filteredFaqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredFaqs;

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. 24/7 technical support, documentation, and community resources." />
        <meta name="keywords" content="support, help, technical support, documentation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the help you need with our comprehensive support resources and expert assistance.
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="py-8 px-4">
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Contact Support</h2>
              <p className="text-xl text-gray-300">Get in touch with our support team</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className="text-cyan-400 font-semibold">{channel.contact}</p>
                  <p className="text-sm text-gray-400 mt-2">{channel.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Support Resources</h2>
              <p className="text-xl text-gray-300">Find answers and documentation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-colors">
                  {resource.icon && (
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Find answers to common questions</p>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              {searchedFaqs.map((faq, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-cyan-400 mr-3" />
                <h2 className="text-2xl font-bold text-white">Business Hours</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Technical Support</h3>
                  <p className="text-gray-300">24/7 availability</p>
                  <p className="text-gray-300">Emergency support included</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}