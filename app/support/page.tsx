import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, MessageCircle, Phone, Mail, Clock, CheckCircle, AlertCircle, HelpCircle, BookOpen, Download, Send } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle },
    { id: 'getting-started', name: 'Getting Started', icon: BookOpen },
    { id: 'technical', name: 'Technical Support', icon: CheckCircle },
    { id: 'billing', name: 'Billing & Plans', icon: AlertCircle },
    { id: 'api', name: 'API & Integration', icon: MessageCircle }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our team through the contact form or call us at (302) 464-0950. We\'ll schedule a free consultation to understand your needs and recommend the best AI solutions for your business.',
      popular: true
    },
    {
      id: 2,
      category: 'technical',
      question: 'What technical requirements do I need for your AI solutions?',
      answer: 'Our AI solutions are designed to integrate seamlessly with your existing infrastructure. We support all major cloud platforms (AWS, Azure, Google Cloud) and can work with your current tech stack. Our team will handle all technical integration requirements.',
      popular: true
    },
    {
      id: 3,
      category: 'billing',
      question: 'What are your pricing plans?',
      answer: 'We offer flexible pricing plans starting from $199/month for basic AI services up to custom enterprise solutions. Our pricing is based on your specific needs and usage requirements. Contact us for a personalized quote.',
      popular: true
    },
    {
      id: 4,
      category: 'api',
      question: 'Do you provide API access for your services?',
      answer: 'Yes! We provide comprehensive REST APIs and SDKs for all our services. Our API documentation is available in the documentation section, and we offer developer support to help you integrate our services into your applications.',
      popular: false
    },
    {
      id: 5,
      category: 'technical',
      question: 'How secure are your AI solutions?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and regular security audits. All data is processed in secure, compliant environments.',
      popular: false
    },
    {
      id: 6,
      category: 'getting-started',
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on the complexity of your project. Simple AI integrations can be completed in 2-4 weeks, while comprehensive enterprise transformations may take 3-6 months. We provide detailed project timelines during consultation.',
      popular: false
    }
  ];

  const supportChannels = [
    {
      title: '24/7 Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      availability: 'Available 24/7',
      responseTime: '< 2 minutes',
      color: 'text-green-400'
    },
    {
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      icon: Phone,
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'text-blue-400'
    },
    {
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      icon: Mail,
      availability: '24/7',
      responseTime: '< 4 hours',
      color: 'text-purple-400'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      icon: BookOpen,
      availability: 'Always available',
      responseTime: 'Instant',
      color: 'text-orange-400'
    }
  ];

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Complete guide to implementing our AI solutions',
      type: 'PDF Guide',
      size: '2.3 MB',
      icon: Download
    },
    {
      title: 'API Documentation',
      description: 'Comprehensive API reference and examples',
      type: 'Online Docs',
      size: 'Interactive',
      icon: BookOpen
    },
    {
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common tasks',
      type: 'Video Series',
      size: '45 min total',
      icon: MessageCircle
    },
    {
      title: 'Best Practices Guide',
      description: 'Industry best practices for AI implementation',
      type: 'PDF Guide',
      size: '1.8 MB',
      icon: Download
    }
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Support Center - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group services. Access documentation, FAQs, and contact our support team for technical assistance." />
        <meta name="keywords" content="support, help, documentation, FAQ, technical support, customer service" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support <span className="text-cyan-400">Center</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get the help you need to make the most of our AI solutions. 
              Access documentation, FAQs, and connect with our expert support team.
            </p>
          </section>

          {/* Search Section */}
          <section className="mb-16">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                />
              </div>
            </div>
          </section>

          {/* Support Channels */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-12">
              How Can We Help You?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <channel.icon className={`w-12 h-12 ${channel.color} mx-auto mb-4`} />
                  <h3 className="text-lg font-semibold text-white mb-2">{channel.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{channel.description}</p>
                  <div className="space-y-1 text-xs text-gray-400">
                    <div className="flex items-center justify-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {channel.availability}
                    </div>
                    <div>Response: {channel.responseTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((item) => (
                <div key={item.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                        {item.popular && (
                          <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
                            Popular
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No results found</h3>
                <p className="text-gray-300">Try adjusting your search terms or browse different categories.</p>
              </div>
            )}
          </section>

          {/* Resources Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Resources & Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <resource.icon className="w-8 h-8 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                    <span>{resource.type}</span>
                    <span>{resource.size}</span>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Support */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-6">Still Need Help?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl">
                Can't find what you're looking for? Our expert support team is here to help. 
                Contact us through any of the channels below and we'll get back to you quickly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <a
                  href="tel:+13024640950"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
                >
                  <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 text-sm mb-2">(302) 464-0950</p>
                  <p className="text-gray-400 text-xs">Mon-Fri 9AM-6PM EST</p>
                </a>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
                >
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300 text-sm mb-2">support@ziontechgroup.com</p>
                  <p className="text-gray-400 text-xs">Response within 4 hours</p>
                </a>
                <a
                  href="/contact"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
                >
                  <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                  <p className="text-gray-300 text-sm mb-2">Start a conversation</p>
                  <p className="text-gray-400 text-xs">Available 24/7</p>
                </a>
              </div>
            </div>
          </section>

          {/* Status Page */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">System Status</h2>
            <p className="text-gray-300 mb-8">
              Check the current status of our services and any ongoing maintenance.
            </p>
            <a
              href="/status"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              View System Status
            </a>
          </section>
        </div>
      </div>
    </>
  );
};

export default SupportPage;