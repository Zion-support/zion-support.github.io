'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, Search, ChevronDown, CheckCircle, AlertCircle } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const supportChannels = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (302) 464-0950',
      availability: '24/7 Emergency Support',
      icon: Phone
    },
    {
      title: 'Email Support',
      description: 'Get detailed responses to your technical questions',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours',
      icon: Mail
    },
    {
      title: 'Live Chat',
      description: 'Instant support through our website chat',
      contact: 'Available on website',
      availability: 'Mon-Fri: 9AM-6PM EST',
      icon: MessageCircle
    }
  ];

  const faqs = [
    {
      question: 'What types of support do you offer?',
      answer: 'We offer comprehensive support including technical assistance, troubleshooting, system maintenance, emergency support, and consultation services for all our AI and IT solutions.'
    },
    {
      question: 'How quickly can I expect a response?',
      answer: 'For emergency issues, we respond within 15 minutes. For general inquiries, we respond within 2 hours during business hours. Email support typically receives responses within 4 hours.'
    },
    {
      question: 'Do you provide 24/7 support?',
      answer: 'Yes, we offer 24/7 emergency support for critical issues. Our emergency support team is always available to handle urgent problems that could impact your business operations.'
    },
    {
      question: 'What information should I include when contacting support?',
      answer: 'Please include your account information, a detailed description of the issue, any error messages, steps you\'ve already tried, and your contact information for the fastest resolution.'
    },
    {
      question: 'Do you offer remote assistance?',
      answer: 'Yes, we provide secure remote assistance for troubleshooting and system maintenance. Our technicians can safely access your systems with your permission to resolve issues quickly.'
    },
    {
      question: 'What if I need training on your solutions?',
      answer: 'We offer comprehensive training programs for all our solutions, including online tutorials, documentation, live training sessions, and ongoing support to ensure you get the most value from our services.'
    }
  ];

  const knowledgeBase = [
    {
      title: 'Getting Started Guide',
      description: 'Learn how to set up and configure your new AI or IT solution',
      category: 'Setup',
      readTime: '10 min'
    },
    {
      title: 'API Documentation',
      description: 'Complete reference for integrating with our APIs',
      category: 'Development',
      readTime: '15 min'
    },
    {
      title: 'Troubleshooting Common Issues',
      description: 'Solutions to frequently encountered problems',
      category: 'Troubleshooting',
      readTime: '8 min'
    },
    {
      title: 'Security Best Practices',
      description: 'Guidelines for maintaining security in your environment',
      category: 'Security',
      readTime: '12 min'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get comprehensive support for all your AI and IT solutions. 24/7 emergency support, technical assistance, and expert guidance." />
        <meta name="keywords" content="technical support, customer service, help desk, troubleshooting, AI support, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Support</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the help you need when you need it. Our expert support team is here to ensure your success with our AI and IT solutions.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search our knowledge base..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Get Support</h2>
              <p className="text-gray-300">Choose the support channel that works best for you</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-slate-800/70 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {channel.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <p className="text-cyan-400 font-medium">{channel.contact}</p>
                  <p className="text-sm text-gray-400 mt-2">{channel.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Knowledge Base */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Knowledge Base</h2>
              <p className="text-gray-300">Find answers and learn how to get the most from our solutions</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {knowledgeBase.map((article, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group cursor-pointer">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-400">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{article.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300">Find answers to common questions about our support services</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-800/70 transition-colors"
                  >
                    <span className="text-white font-medium">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Hours */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Support Hours</h2>
                <p className="text-gray-300">We're here when you need us</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Emergency Support</h3>
                    <p className="text-gray-300">24/7 for critical issues</p>
                    <p className="text-gray-300">Emergency support included</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
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