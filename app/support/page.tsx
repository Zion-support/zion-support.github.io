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
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.',
      category: 'general'
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide comprehensive ongoing support including 24/7 technical assistance, regular system updates, performance monitoring, and dedicated account management to ensure your solutions continue to deliver optimal results.',
      category: 'support'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. Simple implementations can take 2-4 weeks, while complex enterprise solutions may require 3-6 months. We provide detailed timelines during the planning phase.',
      category: 'general'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs for your team including hands-on workshops, documentation, video tutorials, and ongoing support to ensure your team can effectively use and maintain the solutions.',
      category: 'training'
    },
    {
      question: 'What security measures do you implement?',
      answer: 'We implement enterprise-grade security including end-to-end encryption, multi-factor authentication, regular security audits, compliance with industry standards (SOC 2, ISO 27001), and continuous monitoring.',
      category: 'security'
    },
    {
      question: 'Can your solutions integrate with our existing systems?',
      answer: 'Absolutely. Our solutions are designed with integration in mind and can connect with most existing systems through APIs, webhooks, and custom connectors. We handle the integration process for you.',
      category: 'integration'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including subscription-based, project-based, and hybrid approaches. Pricing depends on the scope and complexity of your requirements. Contact us for a customized quote.',
      category: 'pricing'
    },
    {
      question: 'Do you provide cloud or on-premise solutions?',
      answer: 'We offer both cloud and on-premise deployment options. Our cloud solutions provide scalability and ease of management, while on-premise solutions offer enhanced control and compliance for sensitive environments.',
      category: 'deployment'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics', icon: BookOpen },
    { id: 'general', name: 'General', icon: HelpCircle },
    { id: 'support', name: 'Support', icon: Users },
    { id: 'training', name: 'Training', icon: BookOpen },
    { id: 'security', name: 'Security', icon: CheckCircle },
    { id: 'integration', name: 'Integration', icon: Zap },
    { id: 'pricing', name: 'Pricing', icon: Search },
    { id: 'deployment', name: 'Deployment', icon: Clock }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+1 (555) 123-4567',
      availability: '24/7 Available'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant support through our website',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get help and support for your Zion Tech Group solutions. Find answers to common questions, contact our support team, and access resources." />
        <meta name="keywords" content="support, help, FAQ, technical support, customer service, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Support Center
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're here to help you succeed. Find answers to your questions, get technical support, and access our knowledge base.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose the support method that works best for you. Our team is ready to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 text-center">
                  <div className="flex justify-center mb-4">
                    <method.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  <div className="text-cyan-400 font-medium mb-2">{method.contact}</div>
                  <div className="text-sm text-gray-400">{method.availability}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Find quick answers to common questions about our services and solutions.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {category.name}
                  </button>
                );
              })}
            </div>

            {/* FAQ List */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <div className={`transform transition-transform duration-200 ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4">
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No FAQs found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Additional Resources</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Access our comprehensive knowledge base and documentation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 text-center">
                <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Documentation</h3>
                <p className="text-gray-300 text-sm mb-4">Comprehensive guides and API documentation</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">View Docs</button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 text-center">
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Community</h3>
                <p className="text-gray-300 text-sm mb-4">Connect with other users and experts</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">Join Community</button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 text-center">
                <Zap className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Status Page</h3>
                <p className="text-gray-300 text-sm mb-4">Check system status and uptime</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">View Status</button>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300 text-center">
                <HelpCircle className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">Tutorials</h3>
                <p className="text-gray-300 text-sm mb-4">Step-by-step tutorials and guides</p>
                <button className="text-cyan-400 hover:text-cyan-300 font-medium">Browse Tutorials</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;