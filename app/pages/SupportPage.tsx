import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  UserIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const supportCategories = [
    { id: 'all', name: 'All Topics' },
    { id: 'technical', name: 'Technical Support' },
    { id: 'billing', name: 'Billing & Account' },
    { id: 'general', name: 'General Questions' },
    { id: 'feature', name: 'Feature Requests' }
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Simply contact our sales team to schedule a consultation. We\'ll assess your needs and provide a customized implementation plan.',
      category: 'technical',
      tags: ['AI', 'Getting Started', 'Implementation']
    },
    {
      id: 2,
      question: 'What is your response time for support requests?',
      answer: 'We offer 24/7 support with the following response times: Critical issues (1 hour), High priority (4 hours), Medium priority (24 hours), Low priority (72 hours).',
      category: 'general',
      tags: ['Support', 'Response Time', 'SLA']
    },
    {
      id: 3,
      question: 'How do I update my billing information?',
      answer: 'You can update your billing information by logging into your account dashboard and navigating to the Billing section. For assistance, contact our billing team.',
      category: 'billing',
      tags: ['Billing', 'Account', 'Payment']
    },
    {
      id: 4,
      question: 'Do you offer training for your solutions?',
      answer: 'Yes! We provide comprehensive training programs including online tutorials, documentation, live training sessions, and on-site training for enterprise customers.',
      category: 'general',
      tags: ['Training', 'Education', 'Learning']
    },
    {
      id: 5,
      question: 'How can I request a new feature?',
      answer: 'You can submit feature requests through our support portal, email us directly, or discuss with your account manager. We review all requests and prioritize based on customer demand.',
      category: 'feature',
      tags: ['Feature Request', 'Enhancement', 'Feedback']
    },
    {
      id: 6,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including SOC 2 Type II compliance, ISO 27001 certification, end-to-end encryption, regular security audits, and 24/7 monitoring.',
      category: 'technical',
      tags: ['Security', 'Compliance', 'Data Protection']
    }
  ];

  const supportChannels = [
    {
      icon: PhoneIcon,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: '24/7',
      responseTime: 'Immediate',
      contact: '+1-302-464-0950',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: 'Within 4 hours',
      contact: 'support@ziontechgroup.com',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Live Chat',
      description: 'Get instant help through our live chat system',
      availability: 'Business Hours',
      responseTime: 'Immediate',
      contact: 'Start Chat',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: DocumentTextIcon,
      title: 'Support Portal',
      description: 'Submit tickets and track your support requests',
      availability: '24/7',
      responseTime: 'Varies by priority',
      contact: 'Open Portal',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const resources = [
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: DocumentTextIcon,
      href: '/docs'
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      icon: PlayIcon,
      href: '/tutorials'
    },
    {
      title: 'Knowledge Base',
      description: 'Searchable database of articles and solutions',
      icon: QuestionMarkCircleIcon,
      href: '/knowledge-base'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and experts',
      icon: UserIcon,
      href: '/community'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group solutions. 24/7 technical support, documentation, tutorials, and expert assistance." />
        <meta name="keywords" content="support, help, technical support, customer service, documentation, tutorials, FAQ, assistance" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're here to help you succeed with our AI and IT solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions, access documentation, or get in touch 
              with our expert support team.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-slate-900 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
              {supportCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                        : 'border-slate-600 text-gray-300 hover:border-purple-400 hover:text-purple-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                )})}
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support channel that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{channel.title}</h3>
                  <p className="text-gray-300 mb-6">{channel.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4" />
                      <span>{channel.availability}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircleIcon className="w-4 h-4" />
                      <span>Response: {channel.responseTime}</span>
                    </div>
                  </div>
                </div>
              )})}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to the most common questions about our services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {filteredFaqs.map((faq) => (
              <div 
                key={faq.id}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Documentation & Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access comprehensive guides, API documentation, and helpful resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <DocumentTextIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">User Guides</h3>
              <p className="text-gray-300 mb-6">
                Step-by-step guides to help you get the most out of our solutions.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold">
                View Guides <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <DocumentTextIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">API Documentation</h3>
              <p className="text-gray-300 mb-6">
                Complete API reference and integration guides for developers.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold">
                View API Docs <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <VideoCameraIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Video Tutorials</h3>
              <p className="text-gray-300 mb-6">
                Watch video tutorials and walkthroughs for visual learners.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold">
                Watch Videos <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Our support team is ready to assist you with any questions or issues
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Get Support
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 bg-gradient-to-r ${channel.color} rounded-lg flex items-center justify-center mb-4`}>
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Availability:</span>
                      <span className="font-medium">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Response Time:</span>
                      <span className="font-medium">{channel.responseTime}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
                    {channel.contact}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Self-Service Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Link
                  key={index}
                  to={resource.href}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm">{resource.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {supportCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 mb-4">{faq.answer}</p>
                  <div className="flex flex-wrap gap-2">
                    {faq.tags.map((tag, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No FAQs found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-4 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our support team is ready to assist you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Contact Support
              </Link>
              <a 
                href="tel:+1-302-464-0950" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <PhoneIcon className="w-6 h-6 text-blue-600" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-600">
                <MapPinIcon className="w-6 h-6 text-blue-600" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )}
