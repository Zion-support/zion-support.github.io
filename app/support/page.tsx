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
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our onboarding guide. We provide step-by-step tutorials and 24/7 support to help you get up and running quickly.',
      category: 'Getting Started'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Enterprise customers. All payments are processed securely through our encrypted payment system.',
      category: 'Billing'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for our Professional plan. No credit card required to get started. You can explore all features and see how our solutions can benefit your business.',
      category: 'Billing'
    },
    {
      question: 'How secure is my data?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, comply with GDPR and SOC 2 standards, and implement strict access controls. Your data is stored in secure, encrypted databases with regular backups.',
      category: 'Security'
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Absolutely! Our solutions are designed to integrate seamlessly with popular business tools and platforms. We provide APIs, webhooks, and pre-built connectors for most major systems.',
      category: 'Integration'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer multiple support channels including 24/7 email support, live chat, phone support for Enterprise customers, and a comprehensive knowledge base. Our team of experts is always ready to help.',
      category: 'Support'
    }
  ];

  const categories = ['all', 'Getting Started', 'Billing', 'Security', 'Integration', 'Support'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const supportChannels = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      availability: '24/7 for Enterprise customers'
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours'
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on our website',
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  const resources = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Documentation',
      description: 'Comprehensive guides and API documentation',
      link: '/docs'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Community Forum',
      description: 'Connect with other users and get help',
      link: '/community'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Status Page',
      description: 'Check system status and uptime',
      link: '/status'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for Zion Tech Group solutions. Find answers, contact support, and access resources." />
        <meta name="keywords" content="support, help, FAQ, contact, documentation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Support Center
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                We're here to help! Find answers, get support, and access resources to make the most of our solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How can we help you?
              </h2>
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Support Channels */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Support
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the support channel that works best for you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 rounded-full text-blue-600">
                      {channel.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {channel.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {channel.description}
                  </p>
                  <div className="text-sm text-gray-500 mb-4">
                    <strong>{channel.contact}</strong>
                  </div>
                  <div className="text-sm text-gray-500">
                    {channel.availability}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Find quick answers to common questions.
              </p>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category === 'all' ? 'All Categories' : category}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {faq.question}
                      </h3>
                      <span className="text-sm text-blue-600">
                        {faq.category}
                      </span>
                    </div>
                    <HelpCircle className={`h-5 w-5 text-gray-400 transition-transform ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`} />
                  </button>
                  
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or category filter.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Resources Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Additional Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive resources to get the most out of our solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {resource.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <a
                    href={resource.link}
                    className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  >
                    Access Resource
                    <CheckCircle className="h-4 w-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl mb-8">
              Can't find what you're looking for? Our support team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Live Chat
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;