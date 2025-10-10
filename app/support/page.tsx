'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, ExternalLink, BookOpen, Video, FileText } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'billing', name: 'Billing' },
    { id: 'integration', name: 'Integration' }
  ];

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.',
      category: 'general'
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide 24/7 technical support, regular maintenance, updates, and ongoing optimization to ensure your systems run smoothly. Our support includes monitoring, troubleshooting, and performance optimization.',
      category: 'support'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation time varies based on project complexity. Simple solutions can be deployed in 2-4 weeks, while complex enterprise systems may take 3-6 months. We provide detailed timelines during the planning phase.',
      category: 'implementation'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions. Training includes hands-on sessions, documentation, and ongoing support.',
      category: 'general'
    },
    {
      question: 'What if we need custom modifications?',
      answer: 'Our team can develop custom features and modifications to meet your specific business requirements. We work closely with you to understand your needs and deliver tailored solutions.',
      category: 'technical'
    },
    {
      question: 'How do you handle data security and privacy?',
      answer: 'We implement enterprise-grade security measures including encryption, access controls, and compliance with industry standards. All data is protected according to GDPR, HIPAA, and other relevant regulations.',
      category: 'technical'
    },
    {
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models including subscription-based, project-based, and custom enterprise solutions. Contact us for a detailed quote based on your specific requirements.',
      category: 'billing'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Yes, we specialize in integrating our AI solutions with existing enterprise systems. We support most major platforms and can develop custom integrations as needed.',
      category: 'integration'
    }
  ];

  const supportChannels = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1-302-464-0950',
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      responseTime: 'Within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available on website',
      availability: '24/7',
      responseTime: 'Immediate'
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Comprehensive guides and API references',
      link: '/docs'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      link: '/tutorials'
    },
    {
      icon: FileText,
      title: 'Knowledge Base',
      description: 'Searchable articles and FAQs',
      link: '/knowledge-base'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    selectedCategory === 'all' || faq.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Technical Support & Help</title>
        <meta name="description" content="Get technical support and help for your AI and IT solutions. 24/7 support, documentation, and expert assistance from Zion Tech Group." />
        <meta name="keywords" content="technical support, AI support, IT help, customer service, documentation, troubleshooting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Technical Support
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get expert help and support for your AI and IT solutions. 
              Our team is here to ensure your success.
            </p>
          </section>

          {/* Search Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">How can we help you?</h2>
                <p className="text-xl text-gray-300">Search our knowledge base or contact our support team</p>
              </div>
              <div className="cyber-card hologram-card p-6 mb-8">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help articles, guides, and solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Support Channels */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Choose your preferred way to contact our support team
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {supportChannels.map((channel, index) => (
                  <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <channel.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                    <p className="text-gray-300 mb-4">{channel.description}</p>
                    <p className="text-cyan-400 font-medium mb-2">{channel.contact}</p>
                    <p className="text-sm text-gray-400">{channel.availability}</p>
                    <p className="text-xs text-green-400 mt-1">{channel.responseTime}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Resources */}
          <section className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Self-Service Resources</h2>
                <p className="text-gray-300">Find answers and learn at your own pace</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {resources.map((resource, index) => (
                  <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{resource.title}</h3>
                    <p className="text-gray-300 mb-4">{resource.description}</p>
                    <a
                      href={resource.link}
                      className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
                    >
                      Access Resource
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-300">Find answers to common questions</p>
              </div>
              <div className="space-y-6">
                {filteredFaqs.map((faq, index) => (
                  <div key={index} className="cyber-card hologram-card p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Support Hours */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="cyber-card hologram-card p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">Support Hours</h2>
                  <p className="text-xl text-gray-300">We're here when you need us</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Emergency Support</h3>
                    <p className="text-gray-300 mb-2">24/7 for critical issues</p>
                    <p className="text-gray-300">Emergency support included</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">General Inquiries</h3>
                    <p className="text-gray-300 mb-2">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SupportPage;
