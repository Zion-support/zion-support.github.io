'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, FileText, Book, Users, Headphones, Zap, Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We provide comprehensive onboarding and training.',
      category: 'Getting Started',
      helpful: 45
    },
    {
      id: 2,
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 technical support through multiple channels including phone, email, live chat, and our support portal. Our team includes certified experts in AI, cloud computing, and enterprise solutions.',
      category: 'Support',
      helpful: 38
    },
    {
      id: 3,
      question: 'Do you provide training for our team?',
      answer: 'Yes! We provide comprehensive training programs including hands-on workshops, documentation, and ongoing support to ensure your team can effectively use our solutions.',
      category: 'Training',
      helpful: 42
    },
    {
      id: 4,
      question: 'What is your typical response time?',
      answer: 'Our response times vary by priority: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), Low priority (48 hours). We also offer 24/7 support for enterprise clients.',
      category: 'Support',
      helpful: 29
    },
    {
      id: 5,
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with existing enterprise systems. We support most major platforms and can create custom integrations as needed.',
      category: 'Integration',
      helpful: 33
    },
    {
      id: 6,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, compliance with industry standards (SOC 2, ISO 27001), and regular security audits.',
      category: 'Security',
      helpful: 27
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'text-green-400'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '< 2 minutes',
      color: 'text-blue-400'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message and we\'ll respond quickly',
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'text-purple-400'
    },
    {
      icon: Clock,
      title: 'Ticket System',
      description: 'Submit detailed tickets for complex issues',
      availability: 'Business Hours',
      responseTime: '< 24 hours',
      color: 'text-orange-400'
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs',
      type: 'Documentation'
    },
    {
      icon: Book,
      title: 'Knowledge Base',
      description: 'Searchable articles and troubleshooting guides',
      link: '/knowledge-base',
      type: 'Article'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and get peer support',
      link: '/community',
      type: 'Community'
    },
    {
      icon: Headphones,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides and webinars',
      link: '/tutorials',
      type: 'Video'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group | Technical Support & Help</title>
        <meta name="description" content="Get technical support and help for Zion Tech Group's AI and IT solutions. 24/7 support, documentation, and expert assistance." />
        <meta name="keywords" content="technical support, help desk, customer support, AI support, IT support, documentation" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            How Can We
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Help You?
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Get the support you need with our comprehensive help resources, 24/7 technical support, 
            and expert guidance for all your AI and IT solutions.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or contact support..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you. We're here to help 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
                <div className={`w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className={`w-8 h-8 ${channel.color}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                {channel.contact && (
                  <p className="text-cyan-400 font-medium mb-2">{channel.contact}</p>
                )}
                <div className="space-y-1 text-sm text-gray-400">
                  <p>Available: {channel.availability}</p>
                  <p>Response: {channel.responseTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 mb-8">
              Find quick answers to common questions about our services and solutions.
            </p>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-300 mb-3">{faq.answer}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full">
                        {faq.category}
                      </span>
                      <span className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        {faq.helpful} found helpful
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No FAQs found</h3>
              <p className="text-gray-400">Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Helpful Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive library of documentation, tutorials, and community resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center justify-center mx-auto">
                  Access Resource
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Support
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SupportPage;