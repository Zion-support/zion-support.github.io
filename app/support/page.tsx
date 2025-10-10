'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MessageCircle, Clock, CheckCircle, Search, HelpCircle, BookOpen, Users, Zap } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string}
;
const SupportPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our team for a consultation, and we\'ll assess your needs and recommend the best AI solutions for your business. We provide comprehensive onboarding and training.',
      category: 'general'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer 24/7 technical support, dedicated account managers, comprehensive documentation, and regular check-ins to ensure your success.',
      category: 'general'
    },
    {
      question: 'How long does implementation take?',
      answer: 'Implementation timelines vary based on project complexity. Simple integrations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during planning.',
      category: 'implementation'
    },
    {
      question: 'Do you provide training for our team?',
      answer: 'Yes! We offer comprehensive training programs including online courses, hands-on workshops, and ongoing support to ensure your team can effectively use our solutions.',
      category: 'technical'
      question: 'Do you offer training for our team?',
      answer: 'Yes, we provide comprehensive training programs to ensure your team can effectively use and maintain the AI solutions. Training includes hands-on workshops, documentation, and ongoing support.',
      category: 'training'
    },
    {
      question: 'What are your pricing options?',
      answer: 'We offer flexible pricing plans including Starter, Professional, and Enterprise tiers. Custom pricing is available for large organizations. Contact us for a detailed quote.',
      category: 'billing'
    },
    {
      question: 'Is my data secure with your solutions?',
      answer: 'Absolutely. We use enterprise-grade security measures including encryption, secure data centers, and compliance with industry standards like SOC 2 and ISO 27001.',
      category: 'technical'
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Yes, our solutions are designed to integrate seamlessly with existing systems through APIs, webhooks, and custom connectors. We handle the integration process for you.',
      category: 'technical'
    },
    {
      question: 'What happens if I need to scale up?',
      answer: 'Our solutions are designed to scale with your business. We can easily upgrade your plan or add additional features as your needs grow.',
      category: 'general'
    }
  ];

  const categories = ['all', 'general', 'technical', 'billing', 'implementation'];

  const categories = ['all', 'general', 'support', 'implementation', 'training', 'security', 'integration', 'scaling', 'development'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const supportChannels = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '+1 (555) 123-4567',
      availability: '24/7'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      availability: '24/7'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      availability: 'Business Hours'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Documentation',
      description: 'Comprehensive guides and tutorials',
      contact: 'docs.ziontechgroup.com',
      availability: 'Always Available'
    }
  ];

;
const categories = ['all', 'general', 'support', 'implementation', 'training', 'security', 'integration', 'scaling', 'development'];
;
const filteredFAQs = faqs.filter(faq => {;
const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory});
;
const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  return (
    <React.Fragment>
      <Helmet>
        <title>Support - Zion Tech Group</title>
        <meta name="description" content="Get help and support for your AI and IT solutions. Find answers to common questions, contact our support team, and access comprehensive documentation." />
        <meta name="keywords" content="support, help, FAQ, technical support, customer service, documentation" />
        <title>Support - Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support for all your AI and IT solutions. Contact our expert team via phone, email, or live chat." />
        <meta name="keywords" content="technical support, IT support, AI support, customer service, help desk" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                How Can We Help?
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Get the support you need to succeed with our AI and IT solutions
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
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">Choose your preferred way to contact us</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex justify-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      {channel.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <p className="text-blue-600 font-medium mb-2">{channel.contact}</p>
                  <p className="text-sm text-gray-500">{channel.availability}</p>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Find answers to common questions</p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Topics' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* FAQ List */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <button
                      className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                        <div className="ml-4">
                          {expandedFAQ === index ? (
                            <span className="text-blue-600">−</span>
                          ) : (
                            <span className="text-blue-600">+</span>
                          )}
                        </div>
                      </div>
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
                    </div>);
                </div>
              ));
            </div>

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No questions found matching your search criteria.</p>
              </div>);
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Additional Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive documentation, tutorials, and community resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300">
                <BookOpen className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Documentation</h3>
                <p className="text-gray-300 mb-6">Comprehensive guides and API documentation for all our solutions.</p>
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  View Docs
                </button>
              </div>

              {filteredFAQs.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <HelpCircle className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No FAQs found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or category filter.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>)
export default SupportPage;