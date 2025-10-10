'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Search, HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';

const FaqPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      id: 1,
      question: 'What AI services do you offer?',
      answer: 'We offer comprehensive AI services including machine learning model development, natural language processing, computer vision, predictive analytics, AI automation, and custom AI solutions tailored to your business needs.',
      category: 'AI Services'
    },
    {
      id: 2,
      question: 'How long does a typical AI project take?',
      answer: 'Project timelines vary based on complexity, but most AI implementations take 2-6 months from start to finish. Simple automation projects may take 4-8 weeks, while complex machine learning systems can take 6-12 months.',
      category: 'Project Timeline'
    },
    {
      id: 3,
      question: 'Do you provide ongoing support after implementation?',
      answer: 'Yes! We offer comprehensive support packages including 24/7 monitoring, maintenance, updates, and technical support. Our support plans ensure your AI solutions continue to perform optimally and adapt to your changing needs.',
      category: 'Support'
    },
    {
      id: 4,
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! We specialize in seamless integration with existing systems and can work with virtually any technology stack or platform your business currently uses. We ensure minimal disruption to your operations during implementation.',
      category: 'Integration'
    },
    {
      id: 5,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including data encryption, secure APIs, compliance with industry standards (GDPR, HIPAA, SOC 2), regular security audits, and access controls to protect your data and systems.',
      category: 'Security'
    },
    {
      id: 6,
      question: 'Do you offer training for our team?',
      answer: 'Yes! We provide comprehensive training programs including hands-on workshops, documentation, video tutorials, and ongoing support to help your team understand and effectively use the AI solutions we implement.',
      category: 'Training'
    },
    {
      id: 7,
      question: 'What is your pricing model?',
      answer: 'Our pricing is flexible and based on project scope, complexity, and requirements. We offer fixed-price projects, monthly retainer agreements, and pay-per-use models. Contact us for a customized quote based on your specific needs.',
      category: 'Pricing'
    },
    {
      id: 8,
      question: 'Do you work with small businesses?',
      answer: 'Yes! We work with businesses of all sizes, from startups to large enterprises. We have scalable solutions and flexible pricing options to accommodate different budgets and requirements.',
      category: 'Business Size'
    },
    {
      id: 9,
      question: 'What industries do you serve?',
      answer: 'We serve a wide range of industries including healthcare, finance, retail, manufacturing, education, government, and more. Our AI solutions are adaptable to various sector-specific requirements and regulations.',
      category: 'Industries'
    },
    {
      id: 10,
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Contact our team for a free consultation, and we\'ll assess your needs, discuss your goals, and create a customized AI solution plan for your business. No commitment required for the initial consultation.',
      category: 'Getting Started'
    }
  ];

  const categories = ['All', 'AI Services', 'Project Timeline', 'Support', 'Integration', 'Security', 'Training', 'Pricing', 'Business Size', 'Industries', 'Getting Started'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>FAQ - Zion Tech Group | Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about our AI and IT services, pricing, implementation, and support." />
        <meta name="keywords" content="FAQ, frequently asked questions, AI services, IT services, support, pricing, implementation, Zion Tech Group" />
      </Helmet>

      <div className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our AI and IT services. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-16">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/10 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{faq.question}</h3>
                    <span className="text-sm text-cyan-400">{faq.category}</span>
                  </div>
                  {openItems.includes(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                {openItems.includes(faq.id) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl text-gray-400 mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-2">No FAQs found</h3>
              <p className="text-gray-300">Try adjusting your search terms or contact our support team for help.</p>
            </div>
          )}

          {/* Contact Support */}
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Our expert team is here to help. Contact us for personalized assistance 
              with your specific questions or requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-white">support@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MessageCircle className="w-5 h-5 text-white" />
                <span className="text-white">Live Chat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;