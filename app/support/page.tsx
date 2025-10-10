'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { HelpCircle, MessageCircle, Phone, Mail, Book, Search } from 'lucide-react';

const SupportPage: React.FC = () => {
  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Contact our sales team to schedule a consultation where we\'ll assess your needs and recommend the best AI solutions for your business.'
    },
    {
      question: 'What support do you provide after implementation?',
      answer: 'We provide comprehensive support including 24/7 technical assistance, regular maintenance, updates, and training for your team.'
    },
    {
      question: 'Can I integrate your solutions with my existing systems?',
      answer: 'Yes, our solutions are designed to integrate seamlessly with your existing systems through APIs and custom integration services.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We guarantee response times of 2 hours for critical issues, 4 hours for high priority, and 24 hours for general inquiries.'
    },
    {
      question: 'Do you offer training for my team?',
      answer: 'Yes, we provide comprehensive training programs including documentation, video tutorials, and live training sessions for your team.'
    },
    {
      question: 'What security measures do you have in place?',
      answer: 'We implement enterprise-grade security including encryption, access controls, regular security audits, and compliance with industry standards.'
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help with our live chat support',
      availability: '24/7',
      responseTime: 'Immediate'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: 'Mon-Fri 9AM-6PM PST',
      responseTime: 'Immediate'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us detailed questions and get comprehensive answers',
      availability: '24/7',
      responseTime: 'Within 4 hours'
    },
    {
      icon: Book,
      title: 'Knowledge Base',
      description: 'Browse our comprehensive documentation and guides',
      availability: '24/7',
      responseTime: 'Self-service'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Help & Documentation</title>
        <meta name="description" content="Get help and support for Zion Tech Group's AI and IT solutions. Find documentation, FAQs, and contact our support team." />
        <meta name="keywords" content="support, help, documentation, FAQ, contact, technical support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find answers to your questions, get technical support, and access our comprehensive documentation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles, documentation, or FAQs..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Get Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportChannels.map((channel) => (
                <div key={channel.title} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <channel.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-4">{channel.description}</p>
                  <div className="text-sm text-gray-500">
                    <p><strong>Availability:</strong> {channel.availability}</p>
                    <p><strong>Response:</strong> {channel.responseTime}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-slate-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-start">
                    <HelpCircle className="w-5 h-5 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our support team is here to help you succeed. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Contact Support
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;