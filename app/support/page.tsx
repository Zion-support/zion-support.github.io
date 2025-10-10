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
      answer: 'Getting started is easy! Contact our sales team to schedule a consultation where we\'ll assess your needs and recommend the best AI solutions for your business. We\'ll guide you through the entire implementation process.',
      category: 'general'
    },
    {
      question: 'What cloud platforms do you support?',
      answer: 'We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and hybrid cloud environments. Our solutions are designed to be platform-agnostic and can be deployed on your preferred cloud infrastructure.',
      category: 'technical'
    },
    {
      question: 'How long does implementation typically take?',
      answer: 'Implementation timelines vary depending on the complexity of your project. Simple integrations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed project timelines during the planning phase.',
      category: 'implementation'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer comprehensive support including 24/7 technical support, dedicated account managers, regular health checks, and ongoing optimization. Support level depends on your chosen plan.',
      category: 'general'
    },
    {
      question: 'How do you ensure data security and compliance?',
      answer: 'We follow industry best practices for data security including encryption, access controls, regular security audits, and compliance with GDPR, HIPAA, and other relevant regulations. All data is processed securely and never shared with third parties.',
      category: 'technical'
    },
    {
      question: 'Can I integrate your solutions with my existing systems?',
      answer: 'Yes! Our solutions are designed with integration in mind. We support REST APIs, webhooks, and custom integrations with most popular business systems including CRM, ERP, and other enterprise applications.',
      category: 'technical'
    },
    {
      question: 'What are your pricing options?',
      answer: 'We offer flexible pricing plans including Starter, Professional, and Enterprise tiers. We also provide custom pricing for large-scale implementations. Contact our sales team for detailed pricing information.',
      category: 'billing'
    },
    {
      question: 'Do you provide training for my team?',
      answer: 'Yes! We provide comprehensive training programs including online courses, hands-on workshops, and documentation. Training is included with all our plans and can be customized based on your team\'s needs.',
      category: 'implementation'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Topics' },
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'billing', name: 'Billing' },
    { id: 'implementation', name: 'Implementation' }
  ];

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
      availability: '24/7',
      color: 'text-blue-600'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Support',
      description: 'Send us a detailed message',
      contact: 'support@ziontechgroup.com',
      availability: '24/7',
      color: 'text-green-600'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM',
      color: 'text-purple-600'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Knowledge Base',
      description: 'Browse our documentation',
      contact: 'docs.ziontechgroup.com',
      availability: '24/7',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Support - Zion Tech Group | Help & Support Center</title>
        <meta name="description" content="Get help and support for your Zion Tech Group solutions. Find answers to common questions, contact our support team, and access our knowledge base." />
        <meta name="keywords" content="support, help, FAQ, contact support, technical support, customer service" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Find answers, get support, and connect with our expert team
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help, documentation, or FAQs..."
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get Support</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <div className={`${channel.color} flex justify-center mb-4`}>
                  {channel.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">{channel.contact}</p>
                  <p className="text-xs text-gray-500">{channel.availability}</p>
                </div>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                  Contact Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No FAQs found matching your search criteria.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <button
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <div className="flex items-center">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full mr-3">
                          {categories.find(cat => cat.id === faq.category)?.name}
                        </span>
                        <div className={`transform transition-transform duration-200 ${
                          expandedFAQ === index ? 'rotate-180' : ''
                        }`}>
                          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Still Need Help?</h2>
            <p className="text-gray-600 text-center mb-8">
              Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What can we help you with?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please describe your issue or question in detail..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                Send Message
                <MessageCircle className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our support team is here to help you succeed with our technology solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                Contact Sales
                <Users className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-colors duration-200">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;