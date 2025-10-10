'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'billing', name: 'Billing' },
    { id: 'account', name: 'Account' }
  ];

  const faqs = [
    {
      id: 1,
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer comprehensive AI and IT solutions including AI development, cloud infrastructure, cybersecurity, custom software development, data analytics, and IT consulting services.',
      category: 'general'
    },
    {
      id: 2,
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our sales team to schedule a consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire process from planning to implementation.',
      category: 'general'
    },
    {
      id: 3,
      question: 'What is your response time for technical support?',
      answer: 'We provide 24/7 technical support with immediate response for critical issues. Non-critical issues are typically resolved within 4 hours. Our support team is always available to help you.',
      category: 'technical'
    },
    {
      id: 4,
      question: 'Do you offer custom AI model development?',
      answer: 'Yes, we specialize in custom AI model development tailored to your specific business requirements and data. Our team of AI experts can create models that perfectly fit your needs.',
      category: 'technical'
    },
    {
      id: 5,
      question: 'What are your pricing options?',
      answer: 'We offer flexible pricing plans starting from $1,500/month. Our pricing depends on the specific services and scale of your project. Contact us for a customized quote based on your needs.',
      category: 'billing'
    },
    {
      id: 6,
      question: 'How do I update my account information?',
      answer: 'You can update your account information through the client portal or contact our support team for assistance. We\'ll help you make any necessary changes quickly and securely.',
      category: 'account'
    },
    {
      id: 7,
      question: 'Do you provide training for your solutions?',
      answer: 'Yes, we provide comprehensive training sessions for all our solutions to ensure your team can effectively use them. Training is included with all our service packages.',
      category: 'general'
    },
    {
      id: 8,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security measures including encryption, secure data centers, regular security audits, and compliance with industry standards like SOC 2 and ISO 27001.',
      category: 'technical'
    },
    {
      id: 9,
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time. We offer flexible cancellation terms and will help you transition smoothly if you decide to discontinue our services.',
      category: 'billing'
    },
    {
      id: 10,
      question: 'Do you offer 24/7 support?',
      answer: 'Yes, we provide 24/7 support for all our clients. Our support team is always available to help you with any issues or questions you may have.',
      category: 'technical'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>FAQ - Zion Tech Group</title>
        <meta name="description" content="Find answers to frequently asked questions about our AI and IT services, pricing, support, and more." />
        <meta name="keywords" content="FAQ, frequently asked questions, help, support, AI services, IT services, Zion Tech Group" />
      </Helmet>

      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our AI and IT services. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">Filter by category:</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={faq.id} className="bg-slate-800/50 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-800/70 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold text-white mb-4">No FAQs found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Contact Section */}
          <div className="mt-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-cyan-100 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 hover:bg-cyan-50 font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Contact Support
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;