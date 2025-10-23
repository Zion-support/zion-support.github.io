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
      icon: <Phone className=&quot;w-6 h-6&quot; />,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      hours: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <Mail className=&quot;w-6 h-6&quot; />,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontech.com',
      hours: '24/7 response within 24 hours'
    },
    {
      icon: <MessageCircle className=&quot;w-6 h-6&quot; />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      hours: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: <BookOpen className=&quot;w-6 h-6&quot; />,
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
    <div className=&quot;min-h-screen bg-gray-50&quot;></div>
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name=&quot;description&quot; content=&quot;Get help and support for Zion Tech Group solutions. Find answers, contact support, and access our knowledge base.&quot; />
        <meta name=&quot;keywords&quot; content=&quot;support, help, FAQ, contact support, technical support, customer service&quot; />
      </Helmet>

      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20&quot;>
        <div className=&quot;container mx-auto px-4&quot;></div>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;>
              How Can We <span className=&quot;text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400&quot;>Help?</span>
            </h1>
            <p className=&quot;text-xl md:text-2xl mb-8 text-blue-100&quot;>
              Find answers, get support, and access resources to make the most of our solutions
            </p>
            
            {/* Search Bar */}
            <div className=&quot;max-w-2xl mx-auto&quot;></div>
              <div className=&quot;relative&quot;></div>
                <Search className=&quot;absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search for help...&quot;
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className=&quot;w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500&quot;
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className=&quot;py-16 bg-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;></div>
          <div className=&quot;max-w-6xl mx-auto&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-center text-gray-900 mb-12&quot;>Get Support</h2>
            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-6&quot;></div>
              {supportChannels.map((channel, index) => (
                <div key={index} className=&quot;bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow&quot;></div>
                  <div className=&quot;flex justify-center mb-4 text-blue-600&quot;></div>
                    {channel.icon}
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>{channel.title}</h3>
                  <p className=&quot;text-gray-600 mb-3&quot;>{channel.description}</p>
                  <p className=&quot;text-sm font-medium text-blue-600 mb-1&quot;>{channel.contact}</p>
                  <p className=&quot;text-xs text-gray-500&quot;>{channel.hours}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className=&quot;py-16 bg-gray-50&quot;>
        <div className=&quot;container mx-auto px-4&quot;></div>
          <div className=&quot;max-w-6xl mx-auto&quot;></div>
            <h2 className=&quot;text-3xl font-bold text-center text-gray-900 mb-12&quot;>Frequently Asked Questions</h2>
            
            {/* Category Filter */}
            <div className=&quot;flex flex-wrap justify-center gap-4 mb-8&quot;></div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
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
            <div className=&quot;space-y-4&quot;></div>
              {filteredFAQs.map((faq, index) => (
                <div key={index} className=&quot;bg-white rounded-lg shadow-sm&quot;></div>
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className=&quot;w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors&quot;
                  >
                    <div className=&quot;flex items-center&quot;></div>
                      <HelpCircle className=&quot;w-5 h-5 text-blue-600 mr-3 flex-shrink-0&quot; />
                      <span className=&quot;font-medium text-gray-900&quot;>{faq.question}</span>
                    </div>
                    <div className=&quot;flex items-center&quot;></div>
                      <span className=&quot;text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mr-3&quot;>
                        {faq.category}
                      </span>
                      <CheckCircle className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </button>
                  {expandedFAQ === index && (
                    <div className=&quot;px-6 pb-4&quot;></div>
                      <p className=&quot;text-gray-600&quot;>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className=&quot;text-center py-12&quot;></div>
                <Search className=&quot;w-12 h-12 text-gray-400 mx-auto mb-4&quot; />
                <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>No results found</h3>
                <p className=&quot;text-gray-600&quot;>Try adjusting your search terms or category filter.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white&quot;>
        <div className=&quot;container mx-auto px-4&quot;></div>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;></div>
            <h2 className=&quot;text-3xl font-bold mb-6&quot;>Still Need Help?</h2>
            <p className=&quot;text-xl mb-8 text-blue-100&quot;>
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;>
                <MessageCircle className=&quot;mr-2 w-5 h-5&quot; />
                Contact Support
              </button>
              <button className=&quot;bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105&quot;>
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;