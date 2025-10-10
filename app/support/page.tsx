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
      answer: 'We provide comprehensive ongoing support including 24/7 technical assistance, regular system updates, performance monitoring, and training for your team.',
      category: 'support'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation timelines vary based on project complexity. Simple AI integrations can take 2-4 weeks, while comprehensive digital transformations may take 3-6 months. We provide detailed timelines during consultation.',
      category: 'implementation'
    },
    {
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs including hands-on workshops, documentation, video tutorials, and ongoing support to ensure your team can effectively use and maintain the solutions.',
      category: 'training'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including data encryption, secure cloud infrastructure, regular security audits, compliance with industry standards, and 24/7 monitoring.',
      category: 'security'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. We specialize in seamless integration with existing systems and can work with virtually any technology stack. Our team will assess your current infrastructure and create a custom integration plan.',
      category: 'integration'
    }
  ];

  const categories = ['all', 'general', 'support', 'implementation', 'training', 'security', 'integration'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Help Center and Customer Support</title>
        <meta name="description" content="Get help with Zion Tech Group's AI and IT solutions. Find answers to common questions, contact support, and access our knowledge base." />
        <meta name="keywords" content="support, help center, customer service, FAQ, technical support, AI support, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                How Can We <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Help?
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Find answers to your questions, get technical support, and access 
                our comprehensive knowledge base.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">Search for Help</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for questions, topics, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Filter by Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                      }`}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300">
                Find quick answers to the most common questions about our services.
              </p>
            </div>

            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="text-white font-medium">{faq.question}</span>
                    <HelpCircle className={`w-5 h-5 text-cyan-400 transition-transform ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Still Need Help?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our support team is here to help you succeed. Contact us through 
                any of these channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Phone Support</h3>
                <p className="text-gray-300 mb-4">
                  Speak directly with our technical experts
                </p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  +1 (302) 464-0950
                </a>
                <p className="text-sm text-gray-400 mt-2">Mon-Fri: 9AM-6PM EST</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Email Support</h3>
                <p className="text-gray-300 mb-4">
                  Get detailed help via email
                </p>
                <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  support@ziontechgroup.com
                </a>
                <p className="text-sm text-gray-400 mt-2">Response within 24 hours</p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg mx-auto mb-6 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Live Chat</h3>
                <p className="text-gray-300 mb-4">
                  Chat with our support team in real-time
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Start Chat
                </button>
                <p className="text-sm text-gray-400 mt-2">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Additional Resources</h2>
              <p className="text-xl text-gray-300">
                Explore our comprehensive knowledge base and learning materials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive guides and API documentation
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  View Docs
                </button>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Community</h3>
                <p className="text-gray-300 mb-4">
                  Connect with other users and experts
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Join Community
                </button>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 text-center">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Status Page</h3>
                <p className="text-gray-300 mb-4">
                  Check system status and uptime
                </p>
                <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Check Status
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;