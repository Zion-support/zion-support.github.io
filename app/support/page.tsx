'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  HelpCircle,
  FileText,
  Video,
  BookOpen
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business.'
    },
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most AI implementations take 3-6 months. We provide detailed timelines during the consultation phase.'
    },
    {
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we provide 24/7 emergency support for all our enterprise clients. Standard support is available during business hours with guaranteed response times.'
    },
    {
      question: 'Can I integrate your solutions with my existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with existing systems. We provide comprehensive integration support and documentation.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, compliance with industry standards, and regular security audits.'
    },
    {
      question: 'Do you offer training for my team?',
      answer: 'Yes, we provide comprehensive training programs for your team to ensure they can effectively use and maintain the AI solutions we implement.'
    }
  ];

  const supportChannels = [
    {
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: '24/7',
      responseTime: 'Instant'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: Mail,
      availability: '24/7',
      responseTime: 'Within 4 hours'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      icon: FileText,
      link: '/docs'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common tasks',
      icon: Video,
      link: '/tutorials'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      icon: BookOpen,
      link: '/knowledge-base'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for your AI and IT solutions. 24/7 support, documentation, and resources available." />
        <meta name="keywords" content="support, help, documentation, AI support, IT support, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How Can We <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Help?</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're here to help you succeed with our AI and IT solutions. 
            Get support, find answers, and access resources.
          </p>
        </section>

        {/* Search Section */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help, documentation, or solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-lg"
              />
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {channel.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {channel.description}
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{channel.availability}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>Response: {channel.responseTime}</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Get Help</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-start space-x-3">
                  <HelpCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-300 ml-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Access Resource</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email Support</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SupportPage;