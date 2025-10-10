'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, HelpCircle, FileText, Users, Zap } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface SupportTicket {
  id: string;
  title: string;
  status: 'Open' | 'In Progress' | 'Resolved';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  created: string;
  updated: string;
}

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqs: FAQ[] = [
    {
      id: 'ai-model-performance',
      question: 'How can I improve my AI model performance?',
      answer: 'To improve AI model performance, consider: 1) Increasing training data quality and quantity, 2) Fine-tuning hyperparameters, 3) Using data augmentation techniques, 4) Implementing ensemble methods, 5) Regular model evaluation and retraining.',
      category: 'AI & Machine Learning'
    },
    {
      id: 'cloud-migration-process',
      question: 'What is the typical cloud migration process?',
      answer: 'Our cloud migration process includes: 1) Assessment and planning, 2) Application inventory and dependency mapping, 3) Security and compliance review, 4) Migration strategy development, 5) Pilot migration, 6) Full migration execution, 7) Testing and validation, 8) Go-live and optimization.',
      category: 'Cloud Computing'
    },
    {
      id: 'cybersecurity-best-practices',
      question: 'What are the essential cybersecurity best practices?',
      answer: 'Essential cybersecurity best practices include: 1) Regular security updates and patches, 2) Strong password policies and multi-factor authentication, 3) Employee security training, 4) Network segmentation, 5) Regular security audits, 6) Incident response planning, 7) Data backup and recovery procedures.',
      category: 'Cybersecurity'
    },
    {
      id: 'api-integration-support',
      question: 'Do you provide API integration support?',
      answer: 'Yes, we provide comprehensive API integration support including: 1) API design and development, 2) Third-party API integration, 3) API testing and documentation, 4) Performance optimization, 5) Security implementation, 6) Monitoring and maintenance.',
      category: 'API Development'
    },
    {
      id: 'data-backup-solutions',
      question: 'What data backup solutions do you offer?',
      answer: 'We offer various data backup solutions: 1) Cloud-based backup services, 2) On-premises backup systems, 3) Hybrid backup solutions, 4) Automated backup scheduling, 5) Data encryption and security, 6) Disaster recovery planning, 7) Backup testing and validation.',
      category: 'Data Management'
    },
    {
      id: 'support-response-times',
      question: 'What are your support response times?',
      answer: 'Our support response times are: Critical issues - 1 hour, High priority - 4 hours, Medium priority - 8 hours, Low priority - 24 hours. We provide 24/7 support for critical issues and business hours support for other priorities.',
      category: 'General Support'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Cybersecurity', 'API Development', 'Data Management', 'General Support'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const supportChannels = [
    {
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
      title: 'Live Chat',
      description: 'Get instant help with our 24/7 live chat support',
      availability: '24/7',
      responseTime: 'Instant'
    },
    {
      icon: <Phone className="w-8 h-8 text-cyan-400" />,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate'
    },
    {
      icon: <Mail className="w-8 h-8 text-cyan-400" />,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: 'Within 4 hours'
    },
    {
      icon: <FileText className="w-8 h-8 text-cyan-400" />,
      title: 'Support Tickets',
      description: 'Track your issues with our ticketing system',
      availability: '24/7',
      responseTime: 'Within 8 hours'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Technical Support & Help</title>
        <meta name="description" content="Get technical support and help for your AI and IT solutions. 24/7 support, documentation, and expert assistance." />
        <meta name="keywords" content="technical support, help desk, AI support, IT support, customer service, documentation" />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Technical
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Support
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get the help you need with our comprehensive support services. We're here to ensure your success with our AI and IT solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How Can We Help?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the support channel that works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/40 transition-all duration-300 text-center">
                  <div className="flex justify-center mb-4">
                    {channel.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 mb-4">{channel.description}</p>
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center justify-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {channel.availability}
                    </div>
                    <div className="flex items-center justify-center">
                      <Zap className="w-4 h-4 mr-2" />
                      {channel.responseTime}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search and FAQ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find quick answers to common questions about our services and solutions.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <div key={faq.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium flex-shrink-0">
                      {faq.category}
                    </span>
                  </div>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Still Need Help?
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Our support team is ready to help you with any questions or issues you may have.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 text-sm mb-2">(302) 464-0950</p>
                  <p className="text-gray-400 text-xs">Mon-Fri 9AM-6PM EST</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 text-sm mb-2">support@ziontechgroup.com</p>
                  <p className="text-gray-400 text-xs">24/7 Support</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Support
                </Link>
                <Link
                  to="/faq"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <HelpCircle className="w-5 h-5 mr-2" />
                  View All FAQs
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;