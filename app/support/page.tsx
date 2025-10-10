'use client';
import React, { useState } from 'react';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, FileText, Video, BookOpen } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Live Chat Support',
      description: 'Get instant help from our support team',
      availability: '24/7 Available',
      responseTime: 'Instant',
      action: 'Start Chat'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      action: 'Call (302) 464-0950'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7 Available',
      responseTime: 'Within 4 hours',
      action: 'Send Email'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire setup process.',
      category: 'Getting Started'
    },
    {
      question: 'What is your typical response time for support requests?',
      answer: 'Our response times vary by priority: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), and Low priority (48 hours). Premium support customers get faster response times.',
      category: 'Support'
    },
    {
      question: 'Do you offer training for your solutions?',
      answer: 'Yes! We provide comprehensive training programs including online tutorials, documentation, live training sessions, and ongoing support to ensure your team can effectively use our solutions.',
      category: 'Training'
    },
    {
      question: 'Can I integrate your solutions with my existing systems?',
      answer: 'Absolutely! Our solutions are designed with integration in mind. We support most popular business systems and can create custom integrations for your specific needs.',
      category: 'Integration'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.',
      category: 'Security'
    },
    {
      question: 'How do you handle data backup and recovery?',
      answer: 'We maintain automated daily backups with 99.9% uptime guarantee. Our disaster recovery procedures ensure minimal data loss and quick restoration in case of any issues.',
      category: 'Data Management'
    }
  ];

  const resources = [
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for all features',
      link: '/tutorials'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      link: '/knowledge-base'
    }
  ];

  const contactMethods = [
    {
      method: 'Emergency Support',
      contact: '+1 (302) 464-0950',
      availability: '24/7',
      description: 'For critical issues requiring immediate attention'
    },
    {
      method: 'General Support',
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      description: 'For general questions and non-urgent issues'
    },
    {
      method: 'Technical Support',
      contact: 'tech@ziontechgroup.com',
      availability: 'Mon-Fri 9AM-6PM EST',
      description: 'For technical questions and implementation help'
    },
    {
      method: 'Billing Support',
      contact: 'billing@ziontechgroup.com',
      availability: 'Mon-Fri 9AM-6PM EST',
      description: 'For billing questions and account management'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Support</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We're here to help you succeed. Get the support you need with our comprehensive 
              help resources and expert technical assistance.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How Can We Help?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support method that works best for you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{option.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{option.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{option.availability}</span>
                  </div>
                  <div className="text-sm text-cyan-400">
                    Response: {option.responseTime}
                  </div>
                </div>
                <button className="w-full cyber-button py-3">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Find quick answers to common questions
            </p>
          </div>
          <div className="space-y-6">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white pr-4">{faq.question}</h3>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm flex-shrink-0">
                    {faq.category}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
            {filteredFaqs.length === 0 && searchQuery && (
              <div className="cyber-card p-8 text-center">
                <p className="text-gray-300 text-lg">No results found for "{searchQuery}"</p>
                <p className="text-gray-400 mt-2">Try different keywords or contact our support team</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Help Resources</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive library of help materials
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="cyber-card p-6 group hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                >
                  <span>Access Resource</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Our Support Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple ways to reach us for different types of support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="cyber-card p-6 text-center group hover:scale-105 transition-transform">
                <h3 className="text-lg font-bold text-white mb-2">{method.method}</h3>
                <p className="text-cyan-400 font-semibold mb-2">{method.contact}</p>
                <p className="text-sm text-gray-400 mb-2">{method.availability}</p>
                <p className="text-sm text-gray-300">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our support team is ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>(302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;