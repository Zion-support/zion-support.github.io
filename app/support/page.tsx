'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, ArrowRight, HelpCircle, BookOpen, Users, Zap, Shield } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const faqCategories = [
    'All',
    'General',
    'Technical',
    'Billing',
    'Account',
    'API'
  ];

  const faqs = [
    {
      id: 1,
      category: 'General',
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer comprehensive AI and technology solutions including AI development, cloud solutions, web development, mobile development, data analytics, cybersecurity, DevOps, and IT consulting services.'
    },
    {
      id: 2,
      category: 'Technical',
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team through our contact form or schedule a consultation. We\'ll assess your needs and create a customized solution plan for your business.'
    },
    {
      id: 3,
      category: 'Billing',
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models including project-based, hourly, and retainer options. Pricing depends on the scope and complexity of your project. Contact us for a detailed quote.'
    },
    {
      id: 4,
      category: 'Technical',
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer 24/7 support and maintenance services for all our solutions. Our support includes monitoring, updates, security patches, and technical assistance.'
    },
    {
      id: 5,
      category: 'Account',
      question: 'How can I track my project progress?',
      answer: 'We provide regular project updates through our client portal, email reports, and scheduled calls. You can also contact your project manager anytime for updates.'
    },
    {
      id: 6,
      category: 'API',
      question: 'Do you provide API documentation?',
      answer: 'Yes, we provide comprehensive API documentation for all our services. This includes endpoints, authentication, examples, and integration guides.'
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: '2 minutes',
      action: 'Start Chat'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM',
      responseTime: 'Immediate',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: '2 hours',
      action: 'Send Email'
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
      description: 'Search our extensive FAQ and troubleshooting guides',
      link: '/knowledge-base'
    },
    {
      icon: Users,
      title: 'Community Forum',
      description: 'Connect with other users and share experiences',
      link: '/community'
    },
    {
      icon: Zap,
      title: 'Status Page',
      description: 'Check real-time service status and uptime',
      link: '/status'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Find answers to common questions, contact our support team, and access resources." />
        <meta name="keywords" content="support, help, FAQ, contact support, technical support, customer service" />
        <link rel="canonical" href="https://ziontechgroup.com/support" />
      </Helmet>
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Help & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Support</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We're here to help! Find answers to your questions or get in touch with our support team.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Get Support</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the best way to get help with your questions or issues.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {channel.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">{channel.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Available: {channel.availability}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Zap className="w-4 h-4 mr-2" />
                      <span>Response: {channel.responseTime}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group">
                    {channel.action}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find quick answers to common questions about our services and support.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {faqCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                        <HelpCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-lg font-semibold text-white mr-3">{faq.question}</h3>
                          <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full text-xs font-medium">
                            {faq.category}
                          </span>
                        </div>
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Access helpful resources and documentation to get the most out of our services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <resource.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <a
                    href={resource.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    Access Resource
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  Contact Support
                  <MessageCircle className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="tel:+15551234567"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                >
                  Call Us Now
                  <Phone className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;
