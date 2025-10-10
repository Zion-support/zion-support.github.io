'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Phone, Mail, MessageSquare, Clock, CheckCircle, ArrowRight, Star, Users, Zap, Shield, Brain, Cloud, Code, BarChart, Settings, Globe, Database, Smartphone, Lock, TrendingUp, Target, Award, FileText, Calendar, Headphones, HelpCircle, BookOpen, Video, Download } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All', 'AI Services', 'Cloud Computing', 'Cybersecurity', 'IT Support', 
    'Billing', 'Technical Issues', 'Account Management', 'API Support'
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation, and we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'AI Services'
    },
    {
      id: 2,
      question: 'What is your response time for support requests?',
      answer: 'We offer 24/7 support with guaranteed response times: Critical issues (1 hour), High priority (4 hours), Normal priority (24 hours), Low priority (72 hours).',
      category: 'IT Support'
    },
    {
      id: 3,
      question: 'Do you offer cloud migration services?',
      answer: 'Yes! We provide comprehensive cloud migration services including planning, execution, and optimization for AWS, Azure, and Google Cloud platforms.',
      category: 'Cloud Computing'
    },
    {
      id: 4,
      question: 'How secure are your solutions?',
      answer: 'Security is our top priority. All our solutions are built with enterprise-grade security, including encryption, access controls, and compliance with industry standards.',
      category: 'Cybersecurity'
    },
    {
      id: 5,
      question: 'Can I integrate your AI services with my existing systems?',
      answer: 'Absolutely! Our AI services are designed to integrate seamlessly with your existing systems through APIs, webhooks, and custom connectors.',
      category: 'AI Services'
    },
    {
      id: 6,
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models including monthly subscriptions, project-based pricing, and custom enterprise solutions. Contact us for a detailed quote.',
      category: 'Billing'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: '24/7 phone support for urgent issues',
      contact: '+1 (302) 464-0950',
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Email support for non-urgent issues',
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 4 hours'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Real-time chat support during business hours',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Schedule a call with our experts',
      contact: 'Book online',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Scheduled'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs',
      type: 'Documentation'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and webinars',
      link: '/tutorials',
      type: 'Video'
    },
    {
      icon: Download,
      title: 'Downloads',
      description: 'Software, tools, and resources',
      link: '/downloads',
      type: 'Download'
    },
    {
      icon: HelpCircle,
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      link: '/knowledge-base',
      type: 'Article'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT needs. Multiple support channels, comprehensive documentation, and expert assistance." />
        <meta name="keywords" content="technical support, AI support, IT support, cloud support, cybersecurity support, 24/7 support" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Support Center">
              Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Center</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get 24/7 technical support for all your AI and IT needs. We're here to help you succeed.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search for help..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-gray-800">
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Get Support
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="text-cyan-400 font-semibold mb-2">{channel.contact}</div>
                  <div className="text-sm text-gray-400 mb-2">{channel.availability}</div>
                  <div className="text-sm text-green-400">{channel.responseTime}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find answers to common questions about our services and support
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="cyber-card hologram-card p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full flex-shrink-0">
                      {faq.category}
                    </span>
                  </div>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No FAQs found</h3>
                <p className="text-gray-400">Try adjusting your search terms or browse all categories.</p>
              </div>
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Resources
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access documentation, tutorials, and other helpful resources
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{resource.description}</p>
                  <Link
                    to={resource.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Access Resource
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 cyber-button"
                >
                  <MessageSquare className="w-5 h-5" />
                  Contact Support
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;