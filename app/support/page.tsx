'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Search,
  Filter,
  ArrowRight,
  Star,
  Users,
  Shield,
  Zap,
  BookOpen,
  FileText,
  Video,
  Download,
  ExternalLink,
  Calendar,
  MapPin,
  Globe,
  Settings,
  Bug,
  AlertTriangle,
  Info,
  QuestionMarkCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      action: 'Start Chat',
      color: 'from-purple-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      action: 'Call Now',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: 'Within 4 hours',
      action: 'Send Email',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a dedicated session with our specialists',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Scheduled',
      action: 'Schedule',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const faqCategories = [
    { id: 'all', name: 'All Questions', count: 0 },
    { id: 'general', name: 'General', count: 8 },
    { id: 'technical', name: 'Technical', count: 12 },
    { id: 'billing', name: 'Billing', count: 6 },
    { id: 'account', name: 'Account', count: 4 }
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer comprehensive AI and IT solutions including AI development, cloud infrastructure, cybersecurity, data analytics, custom software development, and IoT solutions. Our services are designed to help businesses transform their operations with cutting-edge technology.',
      tags: ['services', 'overview', 'general']
    },
    {
      id: 2,
      category: 'technical',
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! You can schedule a free consultation with our experts, try our interactive demo, or contact us directly. We\'ll assess your needs and provide a customized solution plan that fits your business requirements and budget.',
      tags: ['ai', 'getting-started', 'consultation']
    },
    {
      id: 3,
      category: 'technical',
      question: 'What is the typical implementation timeline?',
      answer: 'Implementation timelines vary based on project complexity and scope. Simple AI integrations can take 2-4 weeks, while comprehensive digital transformations may take 3-6 months. We provide detailed project timelines during our initial consultation.',
      tags: ['timeline', 'implementation', 'project']
    },
    {
      id: 4,
      category: 'billing',
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models including project-based pricing, monthly subscriptions, and custom enterprise agreements. Pricing depends on the scope of work, complexity, and duration. Contact us for a personalized quote based on your specific needs.',
      tags: ['pricing', 'billing', 'cost']
    },
    {
      id: 5,
      category: 'technical',
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes, we offer comprehensive support and maintenance services including 24/7 monitoring, regular updates, security patches, and technical support. Our support packages are tailored to your specific needs and can be adjusted as your requirements evolve.',
      tags: ['support', 'maintenance', 'ongoing']
    },
    {
      id: 6,
      category: 'account',
      question: 'How do I update my account information?',
      answer: 'You can update your account information through your client portal or by contacting our support team. We recommend keeping your contact information up to date to ensure you receive important updates and notifications about your services.',
      tags: ['account', 'profile', 'update']
    },
    {
      id: 7,
      category: 'technical',
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security measures including end-to-end encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2, ISO 27001, and GDPR. Your data security is our top priority.',
      tags: ['security', 'privacy', 'compliance']
    },
    {
      id: 8,
      category: 'general',
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise organizations. Our solutions are scalable and can be tailored to fit your budget and requirements. We offer special packages for small and medium businesses.',
      tags: ['small-business', 'startup', 'scalable']
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const knowledgeBase = [
    {
      icon: BookOpen,
      title: 'Getting Started Guide',
      description: 'Complete guide to getting started with our platform',
      category: 'Documentation',
      readTime: '15 min'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common tasks',
      category: 'Tutorials',
      readTime: '5-10 min each'
    },
    {
      icon: FileText,
      title: 'API Documentation',
      description: 'Comprehensive API reference and integration guides',
      category: 'Technical',
      readTime: '30 min'
    },
    {
      icon: Settings,
      title: 'Configuration Guide',
      description: 'How to configure and customize your solutions',
      category: 'Setup',
      readTime: '20 min'
    }
  ];

  const supportStats = [
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '< 1 min', label: 'Average Response Time' },
    { number: '24/7', label: 'Support Available' },
    { number: '95%', label: 'Customer Satisfaction' }
  ];

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support Center - Zion Tech Group | Help & Documentation</title>
        <meta name="description" content="Get help and support for your Zion Tech Group solutions. Access documentation, FAQs, live chat, and expert technical support." />
        <meta name="keywords" content="support, help, documentation, FAQ, technical support, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Support Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help! Get the support you need with our comprehensive help center, 
              expert technical support, and extensive documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#support-channels"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Help Now
              </a>
              <a
                href="#knowledge-base"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Docs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {supportStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section id="support-channels" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you. We're available 24/7 to assist with your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <channel.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">{channel.title}</h3>
                <p className="text-gray-300 text-center mb-4">{channel.description}</p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Availability:</span>
                    <span className="text-white">{channel.availability}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Response:</span>
                    <span className="text-white">{channel.responseTime}</span>
                  </div>
                </div>
                <button className={`w-full bg-gradient-to-r ${channel.color} text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all duration-300`}>
                  {channel.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section id="knowledge-base" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Knowledge Base
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access our comprehensive documentation, tutorials, and guides to help you get the most out of our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {knowledgeBase.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <item.icon className="h-8 w-8 text-purple-400 mr-3" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.category}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{item.readTime}</span>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our services and solutions.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
            >
              {faqCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 mb-4">{faq.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No FAQs found</h3>
              <p className="text-gray-300">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Our expert support team is ready to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Support
              </a>
              <a
                href="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;