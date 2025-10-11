'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MessageCircle, Search, CheckCircle, ArrowRight } from 'lucide-react';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'How do I get started with your AI services?',
      answer: 'Getting started is easy! Contact our team for a free consultation and we\'ll help you identify the best AI solutions for your business needs.'
    },
    {
      question: 'What support do you provide?',
      answer: 'We provide 24/7 technical support, regular check-ins, and comprehensive documentation to ensure your success.'
    },
    {
      question: 'Can I customize the AI solutions?',
      answer: 'Yes! All our AI solutions are fully customizable to meet your specific business requirements and workflows.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including subscription-based, pay-per-use, and custom enterprise solutions.'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      contact: '(302) 464-0950',
      availability: '24/7 Emergency Support'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions',
      contact: 'support@ziontechgroup.com',
      availability: 'Response within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available on website',
      availability: 'Mon-Fri 9AM-6PM EST'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - Zion Tech Group | Customer Support</title>
        <meta name="description" content="Get help and support for your Zion Tech Group AI and IT solutions. 24/7 support available." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Customer
              </span>
              <br />
              <span className="text-white">Support</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We're here to help you succeed with our AI and IT solutions. Get the support you need, when you need it.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-300 mb-4">{method.description}</p>
                  <p className="text-cyan-400 font-medium mb-2">{method.contact}</p>
                  <p className="text-sm text-gray-400">{method.availability}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-gray-300 mb-8">
                Our team of experts is ready to help you with any questions or issues you may have.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Contact Support</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-6 py-3 border border-slate-600 text-white rounded-lg font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;