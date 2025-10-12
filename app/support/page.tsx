'use client';

import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const SupportPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      question: 'How do I get started with your AI solutions?',
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our onboarding guide. Our team is also available to help you get set up.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer comprehensive support including email support, live chat, phone support for enterprise customers, and extensive documentation and tutorials.'
    },
    {
      question: 'Can I integrate your AI solutions with my existing systems?',
      answer: 'Yes! Our solutions are designed to integrate seamlessly with existing systems through APIs, webhooks, and custom integrations. Our team can help with the integration process.'
    },
    {
      question: 'How secure is my data?',
      answer: 'Security is our top priority. We use enterprise-grade encryption, comply with industry standards, and undergo regular security audits to ensure your data is protected.'
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes! We work with enterprise customers to develop custom AI solutions tailored to their specific needs and requirements.'
    }
  ];

  const supportOptions = [
    {
      icon: <Mail className="w-8 h-8 text-blue-400" />,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      action: 'Send us an email',
      link: 'mailto:support@ziontechgroup.com'
    },
    {
      icon: <Phone className="w-8 h-8 text-green-400" />,
      title: 'Phone Support',
      description: 'Speak directly with our support team',
      action: 'Call us now',
      link: 'tel:+15551234567'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: 'Live Chat',
      description: 'Chat with us in real-time',
      action: 'Start chatting',
      link: '/chat'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      title: 'System Status',
      description: 'Check system status and uptime',
      action: 'View status',
      link: '/status'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Support - Get Help | Zion Tech Group</title>
        <meta name="description" content="Get help and support for your AI and IT solutions. Find answers, contact our team, and access resources." />
        <meta name="keywords" content="support, help, documentation, FAQ, contact support, technical support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Help You?</span>
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Find answers to your questions, get technical support, or contact our team directly.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for help..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
        </section>

        {/* Support Options */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Get Support
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportOptions.map((option, index) => (
                <a
                  key={index}
                  href={option.link}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 text-center group"
                >
                  <div className="mb-4 flex justify-center">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {option.description}
                  </p>
                  <span className="text-blue-400 font-semibold group-hover:text-blue-300">
                    {option.action} →
                  </span>
                </a>
              ))}
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => (
                  <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300">
                      {faq.answer}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-400 text-lg">No FAQs found matching your search.</p>
                </div>
              )}
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@ziontechgroup.com"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Support
              </a>
              <a
                href="tel:+15551234567"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
            </div>
        </section>
      </div>
    </>
  );
};

export default SupportPage;
            </div>
          </div>
        </input>
      </div>
    </div>
  </div>
</div>