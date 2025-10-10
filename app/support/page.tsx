'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, MessageSquare } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'billing', name: 'Billing' },
    { id: 'implementation', name: 'Implementation' }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'general'
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly.',
      category: 'support'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months.',
      category: 'implementation'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions.',
      category: 'general'
    },
    {
      question: 'What if we need custom modifications?',
      answer: 'Our team can develop custom features and modifications to meet your specific business requirements.',
      category: 'technical'
    },
    {
      question: 'How do I access my account dashboard?',
      answer: 'You can access your account dashboard by logging in through our client portal. If you need help with login credentials, contact our support team.',
      category: 'technical'
    },
    {
      question: 'What are your billing terms?',
      answer: 'We offer flexible billing options including monthly, quarterly, and annual plans. All plans include our standard support and maintenance.',
      category: 'billing'
    },
    {
      question: 'Can I upgrade or downgrade my plan?',
      answer: 'Yes, you can change your plan at any time. Changes take effect at the next billing cycle, and we\'ll prorate any differences.',
      category: 'billing'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
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
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: '24/7'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: HelpCircle,
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      link: '/knowledge-base'
    },
    {
      icon: MessageSquare,
      title: 'Community Forum',
      description: 'Connect with other users and get peer support',
      link: '/community'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    selectedCategory === 'all' || faq.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Technical Support & Help</title>
        <meta name="description" content="Get technical support and help for your AI and IT solutions. 24/7 support, documentation, and expert assistance from Zion Tech Group." />
        <meta name="keywords" content="technical support, AI support, IT help, customer service, documentation, troubleshooting" />
        <meta property="og:title" content="Support - Zion Tech Group" />
        <meta property="og:description" content="Get expert help and support for your AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Technical
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Support
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get expert help and support for your AI and IT solutions. 
              Our team is here to ensure your success.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">How can we help you?</h2>
              <p className="text-xl text-gray-300">Search our knowledge base or contact our support team</p>
            </div>
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, guides, and solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Choose your preferred way to contact our support team
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className="text-cyan-400 font-medium">{channel.contact}</p>
                  <p className="text-sm text-gray-400 mt-2">{channel.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Support Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <resource.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">{resource.title}</h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Access Resource →
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
            <div className="space-y-6">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Hours */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Support Hours</h2>
                <p className="text-xl text-gray-300">We're here when you need us</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Emergency Support</h3>
                  <p className="text-gray-300 mb-2">24/7 for critical issues</p>
                  <p className="text-cyan-400 font-medium">Emergency support included</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">General Inquiries</h3>
                  <p className="text-gray-300 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
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