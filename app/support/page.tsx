'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap, MessageSquare } from 'lucide-react';

interface FAQ {
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
    { id: 'implementation', name: 'Implementation' }
  ];

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team to schedule a consultation where we\'ll assess your needs and create a customized implementation plan. We provide comprehensive onboarding and training to ensure your success.',
      category: 'general'
    },
    {
      question: 'What support options are available?',
      answer: 'We offer multiple support channels including email, phone, live chat, and a comprehensive knowledge base. Our support team is available 24/7 for critical issues and during business hours for general inquiries.',
      category: 'general'
    },
    {
      question: 'How do I integrate your API into my existing system?',
      answer: 'Our APIs are designed for easy integration with comprehensive documentation and SDKs for popular programming languages. We provide step-by-step guides, code examples, and dedicated technical support to help you get up and running quickly.',
      category: 'technical'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'Security is our top priority. We implement enterprise-grade security including end-to-end encryption, SOC 2 compliance, regular security audits, and advanced threat detection. All data is stored in secure, compliant data centers.',
      category: 'technical'
    },
    {
      question: 'How is billing handled?',
      answer: 'We offer flexible billing options including monthly and annual subscriptions. Billing is based on usage and features selected. You can view your usage and billing information in your dashboard, and we provide detailed invoices for all charges.',
      category: 'billing'
    },
    {
      question: 'Can I customize the AI models for my specific use case?',
      answer: 'Yes! We offer custom model training and fine-tuning services. Our team works with you to understand your specific requirements and develops tailored AI solutions that meet your exact needs and performance criteria.',
      category: 'implementation'
    },
    {
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.9% uptime for all our services. We have redundant systems, automated failover, and 24/7 monitoring to ensure maximum availability. If we fall below this threshold, we provide service credits as outlined in our SLA.',
      category: 'technical'
    },
    {
      question: 'How do I scale my solution as my business grows?',
      answer: 'Our solutions are designed to scale with your business. You can easily upgrade your plan, add more users, or increase processing capacity through your dashboard. We also provide consultation on scaling strategies and best practices.',
      category: 'implementation'
    }
  ];

  const supportChannels = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      contact: '+1 (555) 123-4567',
      availability: '24/7 for critical issues'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'Live Chat',
      description: 'Get instant help from our team',
      contact: 'Available on our website',
      availability: 'Business hours (9 AM - 6 PM EST)'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive guides',
      contact: 'Self-service resources',
      availability: 'Available 24/7'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for all your Zion Tech Group services. Find answers, contact support, and access our knowledge base." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Find answers to your questions, get technical support, or contact our team for personalized assistance.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Support</h2>
            <p className="text-xl text-gray-600">
              Choose the support channel that works best for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {channel.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-3">{channel.description}</p>
                <p className="text-sm font-medium text-blue-600 mb-1">{channel.contact}</p>
                <p className="text-xs text-gray-500">{channel.availability}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                        {categories.find(cat => cat.id === faq.category)?.name}
                      </span>
                      {expandedFAQ === index ? (
                        <span className="text-gray-400">−</span>
                      ) : (
                        <span className="text-gray-400">+</span>
                      )}
                    </div>
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            ) : (
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
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl mb-8">
            Our support team is here to help you succeed. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Now
            </a>
            <a
              href="mailto:support@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;