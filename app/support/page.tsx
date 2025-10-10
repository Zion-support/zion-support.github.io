'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Mail, MessageCircle, Clock, Users, BookOpen } from 'lucide-react';

const SupportPage: React.FC = () => {
  const supportOptions = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical experts',
      availability: '24/7',
      contact: '+1 (302) 464-0950'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed responses to your questions',
      availability: '24/7',
      contact: 'support@ziontechgroup.com'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant help through our website chat',
      availability: '24/7',
      contact: 'Available on website'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started with your services?',
      answer: 'Contact our team through phone, email, or live chat to discuss your needs and get a customized solution.'
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'We respond to all support requests within 2 hours during business hours and within 24 hours for non-urgent requests.'
    },
    {
      question: 'Do you offer training for your solutions?',
      answer: 'Yes, we provide comprehensive training for all our solutions to ensure your team can effectively use them.'
    },
    {
      question: 'What if I need emergency support?',
      answer: 'We offer 24/7 emergency support for critical issues. Contact us immediately and we\'ll prioritize your request.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Support | Zion Tech Group | 24/7 Technical Support</title>
        <meta name="description" content="Get 24/7 technical support from Zion Tech Group. Phone, email, and live chat support available for all our AI and IT solutions." />
        <meta name="keywords" content="support, technical support, help desk, customer service, 24/7 support" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              24/7
            </span>
            <br />
            <span className="text-white">Support</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Get the help you need when you need it. Our expert support team is available around the clock to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Call Now
              <Phone className="ml-2 h-5 w-5" />
            </a>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">How Can We Help You?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support option that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                <p className="text-gray-300 mb-4">{option.description}</p>
                <div className="text-cyan-400 font-medium mb-2">{option.contact}</div>
                <div className="text-sm text-gray-400">Available: {option.availability}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our support services.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Still Need Help?</h2>
              <p className="text-xl text-purple-100">
                Our support team is here to help you succeed. Contact us today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-purple-100">+1 (302) 464-0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-purple-100">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-purple-100">Available on website</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;