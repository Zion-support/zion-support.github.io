'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, ArrowRight, BookOpen, Video, FileText } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'billing', name: 'Billing' },
    { id: 'implementation', name: 'Implementation' }
  ];

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Contact our team for a free consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.',
      category: 'general'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive support including 24/7 technical assistance, implementation guidance, training, and ongoing maintenance. Our support team is always ready to help.',
      category: 'general'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary depending on the complexity of your project. Simple solutions can be deployed in weeks, while complex enterprise implementations may take several months.',
      category: 'implementation'
    },
    {
      question: 'Do you offer training for your solutions?',
      answer: 'Yes, we provide comprehensive training programs for your team to ensure they can effectively use and manage our solutions. Training can be conducted on-site or remotely.',
      category: 'technical'
    },
    {
      question: 'What are your pricing models?',
      answer: 'We offer flexible pricing models including subscription-based, project-based, and custom enterprise solutions. Contact us for a detailed quote based on your specific needs.',
      category: 'billing'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find answers, contact support, and access resources." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get help and support for our AI and IT solutions. 
            Find answers, contact our team, and access resources.
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-600">
              Our support team is here to help you succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
              <p className="text-blue-600 font-semibold">+1-302-464-0950</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 mb-4">Send us your questions</p>
              <p className="text-blue-600 font-semibold">support@ziontechgroup.com</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our support team</p>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources</h2>
            <p className="text-xl text-gray-600">
              Access documentation, guides, and other helpful resources.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600 mb-4">Comprehensive guides and API documentation</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                View Docs <ArrowRight className="w-4 h-4 inline ml-1" />
              </a>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Video className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Video Tutorials</h3>
              <p className="text-gray-600 mb-4">Step-by-step video guides</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Watch Videos <ArrowRight className="w-4 h-4 inline ml-1" />
              </a>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Knowledge Base</h3>
              <p className="text-gray-600 mb-4">Searchable articles and guides</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Browse Articles <ArrowRight className="w-4 h-4 inline ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;