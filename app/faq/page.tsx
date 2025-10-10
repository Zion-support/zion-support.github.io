'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown, ChevronUp, Search, Filter, Phone, Mail } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  helpful: number;
}

const FAQPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'General',
    'AI Services',
    'IT Services',
    'Billing',
    'Technical',
    'Account'
  ];

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'What services does Zion Tech Group offer?',
      answer: 'We offer comprehensive AI and IT solutions including custom AI development, cloud infrastructure management, cybersecurity services, data analytics, web development, mobile app development, and IT consulting. Our services are designed to help businesses transform digitally and achieve their goals.',
      category: 'General',
      helpful: 95
    },
    {
      id: 2,
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team at (302) 464-0950 or email kleber@ziontechgroup.com for a free consultation. We\'ll assess your needs, discuss your goals, and recommend the best AI solutions for your business. Our team will guide you through the entire process.',
      category: 'AI Services',
      helpful: 92
    },
    {
      id: 3,
      question: 'Do you offer 24/7 support?',
      answer: 'Yes! We provide 24/7 support for all our clients. You can reach us via phone at (302) 464-0950, email at kleber@ziontechgroup.com, or through our support portal. Emergency support is available for critical issues that need immediate attention.',
      category: 'Technical',
      helpful: 98
    },
    {
      id: 4,
      question: 'What is your pricing structure?',
      answer: 'Our pricing is flexible and depends on the specific services you need. We offer monthly and yearly plans starting from $2,999/month for our Starter plan. We also provide custom pricing for enterprise clients. Contact us for a detailed quote based on your requirements.',
      category: 'Billing',
      helpful: 89
    },
    {
      id: 5,
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely! We specialize in seamless integration with existing systems. Our team has experience with a wide range of platforms and technologies. We\'ll work with you to ensure smooth integration that doesn\'t disrupt your current operations.',
      category: 'Technical',
      helpful: 94
    },
    {
      id: 6,
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including SOC2 compliance, data encryption, secure APIs, regular security audits, and access controls. Your data is protected with bank-level security standards. We also provide security training for your team.',
      category: 'Technical',
      helpful: 96
    },
    {
      id: 7,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity and scope. Simple AI implementations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the consultation phase and keep you updated throughout the project.',
      category: 'General',
      helpful: 87
    },
    {
      id: 8,
      question: 'Do you provide training for our team?',
      answer: 'Yes! We offer comprehensive training programs for your team to ensure they can effectively use and maintain the solutions we provide. This includes hands-on training, documentation, and ongoing support to help your team succeed.',
      category: 'General',
      helpful: 91
    },
    {
      id: 9,
      question: 'What if I need to cancel or change my plan?',
      answer: 'You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle. For cancellations, we require 30 days notice. We\'ll work with you to ensure a smooth transition and help you understand any implications.',
      category: 'Account',
      helpful: 85
    },
    {
      id: 10,
      question: 'Do you offer custom AI model development?',
      answer: 'Yes! We specialize in custom AI model development tailored to your specific business needs. Our team of AI experts can build, train, and deploy custom models that address your unique challenges and requirements.',
      category: 'AI Services',
      helpful: 93
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredItems = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>FAQ | Zion Tech Group - Frequently Asked Questions</title>
        <meta name="description" content="Find answers to common questions about our AI and IT services. Get help with billing, technical issues, and more." />
        <meta name="keywords" content="FAQ, frequently asked questions, help, support, AI services, IT services, billing" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about our AI and IT services. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category} className="bg-slate-800">
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{item.question}</h3>
                    <div className="flex items-center space-x-4">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm text-gray-400">
                        {item.helpful}% helpful
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="w-6 h-6 text-cyan-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-slate-700 pt-4">
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No FAQs found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find the answer you're looking for? Our support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;