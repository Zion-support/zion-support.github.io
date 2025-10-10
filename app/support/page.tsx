'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>([]);

  const faqs: FAQ[] = [
    {
      question: 'What AI services do you offer?',
      answer: 'We offer comprehensive AI services including machine learning, natural language processing, computer vision, predictive analytics, and custom AI solutions tailored to your business needs.',
      category: 'ai-services'
    },
    {
      question: 'How long does it take to implement an AI solution?',
      answer: 'Implementation timelines vary based on complexity. Simple AI integrations can take 2-4 weeks, while complex enterprise solutions may require 3-6 months. We provide detailed project timelines during consultation.',
      category: 'implementation'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive support and maintenance packages including 24/7 technical support, regular updates, performance monitoring, and optimization services.',
      category: 'support'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing is flexible and based on project scope, complexity, and requirements. We offer transparent pricing with no hidden fees and provide detailed quotes after understanding your needs.',
      category: 'pricing'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Yes, we specialize in seamless integration with existing systems. Our team works with all major platforms and can create custom APIs and connectors as needed.',
      category: 'integration'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Absolutely! We provide comprehensive training programs for your team, including hands-on workshops, documentation, and ongoing support to ensure successful adoption.',
      category: 'training'
    },
    {
      question: 'What security measures do you implement?',
      answer: 'We implement enterprise-grade security including data encryption, secure APIs, compliance with industry standards (GDPR, HIPAA, SOC 2), and regular security audits.',
      category: 'security'
    },
    {
      question: 'Can you help with cloud migration?',
      answer: 'Yes, we offer complete cloud migration services including assessment, planning, execution, and optimization for AWS, Azure, and Google Cloud platforms.',
      category: 'cloud'
    },
    {
      question: 'Do you offer custom development services?',
      answer: 'Yes, we offer custom development services to create tailored solutions that meet your specific business requirements and integrate perfectly with your existing workflows.',
      category: 'development'
    }
  ];

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
      contact: 'kleber@ziontechgroup.com',
      availability: 'Response within 2 hours',
      color: 'text-green-400'
    },
    {
      name: 'Live Chat',
      description: 'Instant help with our AI-powered chat',
      icon: MessageCircle,
      contact: 'Available on website',
      availability: '24/7 Available',
      color: 'text-purple-400'
    },
    {
      name: 'Video Consultation',
      description: 'Schedule a one-on-one session',
      icon: Users,
      contact: 'Book online',
      availability: 'Mon-Fri 9AM-6PM EST',
      color: 'text-orange-400'
    }
  ];

  const categories = ['all', 'ai-services', 'implementation', 'support', 'pricing', 'integration', 'training', 'security', 'cloud', 'development'];

  React.useEffect(() => {
    let filtered = faqs;

    if (searchTerm) {
      filtered = filtered.filter(faq =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    setFilteredFAQs(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT needs. Expert assistance, comprehensive documentation, and multiple support channels available." />
        <meta name="keywords" content="technical support, AI support, IT help, customer service, troubleshooting, documentation" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Support</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get the help you need with our comprehensive support services. Our expert team is here to assist you 24/7.
          </p>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <channel.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{channel.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
              <div className="space-y-2">
                <p className={`text-sm font-medium ${channel.color}`}>{channel.contact}</p>
                <p className="text-xs text-gray-400">{channel.availability}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          
          {/* Search and Filter */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed ml-8">{faq.answer}</p>
              </div>
            ))}
          </div>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No FAQs found</div>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Documentation Section */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Documentation & Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
              <BookOpen className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">API Documentation</h3>
              <p className="text-gray-300 mb-4">Comprehensive guides and references for all our APIs and integrations.</p>
              <a href="/api-docs" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2">
                View Docs
                <Zap className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
              <Users className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Community Forum</h3>
              <p className="text-gray-300 mb-4">Connect with other users and get help from our community.</p>
              <a href="/community" className="text-green-400 hover:text-green-300 font-medium flex items-center gap-2">
                Join Community
                <Zap className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
              <Clock className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-white mb-3">Status Page</h3>
              <p className="text-gray-300 mb-4">Real-time status updates for all our services and systems.</p>
              <a href="/status" className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2">
                Check Status
                <Zap className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Need Help?
            </h3>
            <p className="text-gray-300 mb-6">
              Our expert team is ready to assist you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;