'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, MessageSquare } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'billing', name: 'Billing' },
    { id: 'account', name: 'Account' }
  ];

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply contact our sales team through our contact form or call us directly. We\'ll schedule a consultation to understand your needs and provide a customized solution.',
      category: 'general'
    },
    {
      id: 2,
      question: 'What AI and IT services do you offer?',
      answer: 'We offer comprehensive AI solutions including machine learning, natural language processing, computer vision, and automation. Our IT services include cloud migration, cybersecurity, system integration, and custom development.',
      category: 'technical'
    },
    {
      id: 3,
      question: 'How much do your services cost?',
      answer: 'Our pricing varies based on the scope and complexity of your project. We offer transparent pricing with no hidden fees. Contact us for a detailed quote tailored to your specific requirements.',
      category: 'billing'
    },
    {
      id: 4,
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We provide 24/7 technical support for all our clients. Our support includes monitoring, maintenance, updates, and troubleshooting to ensure your systems run smoothly.',
      category: 'technical'
    },
    {
      id: 5,
      question: 'Can I modify my service plan?',
      answer: 'Absolutely! You can upgrade or modify your service plan at any time. Our team will work with you to ensure a smooth transition and minimal disruption to your operations.',
      category: 'account'
    },
    {
      id: 6,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, multi-factor authentication, regular security audits, and compliance with industry standards like SOC 2, GDPR, and HIPAA.',
      category: 'technical'
    }
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find answers to FAQs, contact support, and access resources." />
        <meta name="keywords" content="support, help, FAQ, technical support, customer service, AI support, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Support Center
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                We're here to help you succeed with our AI and IT solutions
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for help..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600">
                Multiple ways to reach our support team
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-blue-50 rounded-lg">
                <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 mb-4">Speak directly with our technical experts</p>
                <p className="text-blue-600 font-semibold">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
              </div>

              <div className="text-center p-8 bg-green-50 rounded-lg">
                <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 mb-4">Send us a detailed message</p>
                <p className="text-green-600 font-semibold">support@ziontechgroup.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>

              <div className="text-center p-8 bg-purple-50 rounded-lg">
                <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">Chat with us in real-time</p>
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Start Chat
                </button>
                <p className="text-sm text-gray-500 mt-2">Available 24/7</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Find answers to common questions
              </p>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFAQs.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200">
                      <button
                        onClick={() => toggleFAQ(item.id)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900">{item.question}</span>
                        <div className={`transform transition-transform ${expandedFAQ === item.id ? 'rotate-180' : ''}`}>
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      {expandedFAQ === item.id && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Helpful Resources
              </h2>
              <p className="text-xl text-gray-600">
                Documentation, guides, and tutorials
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-blue-50 rounded-lg">
                <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-gray-600 mb-4">Comprehensive guides and API documentation</p>
                <Link to="/docs" className="text-blue-600 font-semibold hover:text-blue-700">
                  View Docs →
                </Link>
              </div>

              <div className="text-center p-8 bg-green-50 rounded-lg">
                <MessageSquare className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Forum</h3>
                <p className="text-gray-600 mb-4">Connect with other users and experts</p>
                <Link to="/community" className="text-green-600 font-semibold hover:text-green-700">
                  Join Forum →
                </Link>
              </div>

              <div className="text-center p-8 bg-purple-50 rounded-lg">
                <HelpCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Tutorials</h3>
                <p className="text-gray-600 mb-4">Step-by-step video guides</p>
                <Link to="/tutorials" className="text-purple-600 font-semibold hover:text-purple-700">
                  Watch Videos →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our support team is ready to assist you with any questions or issues you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Schedule Call
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;