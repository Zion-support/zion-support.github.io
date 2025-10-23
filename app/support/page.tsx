'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our sales team to schedule a consultation where we\'ll assess your needs and recommend the best AI solutions for your business.',
      category: 'Getting Started'
    },
    {
      question: 'What support options are available?',
      answer: 'We offer multiple support channels including email, phone, live chat, and a comprehensive knowledge base. Enterprise customers also get dedicated account managers.',
      category: 'Support'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on complexity. Simple integrations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months.',
      category: 'Implementation'
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Yes! We offer comprehensive training programs including online courses, documentation, and hands-on workshops for your team.',
      category: 'Training'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, regular audits, and compliance with industry standards like SOC 2 and ISO 27001.',
      category: 'Security'
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with popular business systems through APIs, webhooks, and pre-built connectors.',
      category: 'Integration'
    }
  ];

  const supportChannels = [
    {
      icon: <Phone className="w-6 h-6" loading="lazy" />,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      hours: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <Mail className="w-6 h-6" loading="lazy" />,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontech.com',
      hours: '24/7 response within 24 hours'
    },
    {
      icon: <MessageCircle className="w-6 h-6" loading="lazy" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      hours: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <BookOpen className="w-6 h-6" loading="lazy" />,
      title: 'Knowledge Base',
      description: 'Self-service documentation',
      contact: 'Browse articles',
      hours: 'Available 24/7'
    }
  ];

  const categories = ['all', 'Getting Started', 'Support', 'Implementation', 'Training', 'Security', 'Integration'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50" loading="lazy">
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for Zion Tech Group solutions. Find answers, contact support, and access our knowledge base." />
        <meta name="keywords" content="support, help, FAQ, contact support, technical support, customer service" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20" loading="lazy">
        <div className="container mx-auto px-4" loading="lazy">
          <div className="max-w-4xl mx-auto text-center" loading="lazy">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" loading="lazy">
              How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400" loading="lazy">Help?</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100" loading="lazy">Find answers, get support, and access resources to make the most of our solutions</p>p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto" loading="lazy">
              <div className="relative" loading="lazy">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" loading="lazy" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-white" loading="lazy">
        <div className="container mx-auto px-4" loading="lazy">
          <div className="max-w-6xl mx-auto" loading="lazy">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" loading="lazy">Get Support</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" loading="lazy">{supportChannels.map((channel, index) => (</div>
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow" loading="lazy">
                  <div className="flex justify-center mb-4 text-blue-600" loading="lazy">{channel.icon}</div>div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2" loading="lazy">{channel.title}</h3>
                  <p className="text-gray-600 mb-3" loading="lazy">{channel.description}</p>
                  <p className="text-sm font-medium text-blue-600 mb-1" loading="lazy">{channel.contact}</p>
                  <p className="text-xs text-gray-500" loading="lazy">{channel.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50" loading="lazy">
        <div className="container mx-auto px-4" loading="lazy">
          <div className="max-w-6xl mx-auto" loading="lazy">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" loading="lazy">Frequently Asked Questions</h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8" loading="lazy">{categories.map((category) => (</div>
                <button
                  key={category}
                  onClick={() = aria-label="Action button">setSelectedCategory(category)}</button>
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category === 'all' ? 'All Questions' : category}
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className="space-y-4" loading="lazy">{filteredFAQs.map((faq, index) => (</div>
                <div key={index} className="bg-white rounded-lg shadow-sm" loading="lazy">
                  <button
                    onClick={() = aria-label="Action button">setExpandedFAQ(expandedFAQ === index ? null : index)}</button>
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors" loading="lazy"
                  >
                    <div className="flex items-center" loading="lazy">
                      <HelpCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" loading="lazy" />
                      <span className="font-medium text-gray-900" loading="lazy">{faq.question}</span>
                    </div>
                    <div className="flex items-center" loading="lazy">
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-3" loading="lazy">{faq.category}</span>
                      <CheckCircle className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4" loading="lazy">
                      <p className="text-gray-600" loading="lazy">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12" loading="lazy">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" loading="lazy" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2" loading="lazy">No results found</h3>
                <p className="text-gray-600" loading="lazy">Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white" loading="lazy">
        <div className="container mx-auto px-4" loading="lazy">
          <div className="max-w-4xl mx-auto text-center" loading="lazy">
            <h2 className="text-3xl font-bold mb-6" loading="lazy">Still Need Help?</h2>
            <p className="text-xl mb-8 text-blue-100" loading="lazy">Can't find what you're looking for? Our support team is here to help.</p>p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center" loading="lazy" aria-label="Action button">
                <MessageCircle className="mr-2 w-5 h-5" loading="lazy" />
                Contact Support
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors" loading="lazy" aria-label="Action button">Schedule a Call</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


